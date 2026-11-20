#!/usr/bin/env python3
"""Deploy ./public (or $OUTPUT_DIR) to a Firebase Hosting site and release it.

Uses the Firebase Hosting REST API with an access token from gcloud, so it works with any identity
gcloud is configured with, including the impersonated service account the CI uses (firebase-tools
cannot chain an OIDC login with an impersonation). Only the Python standard library is needed.

Required environment:
  FIREBASE_SITE   Firebase Hosting site id, e.g. akeneo-paas-helpcenter
Optional environment:
  OUTPUT_DIR      directory to deploy (default: public/ at the root of the repository)
  MAX_VERSIONS    number of versions Firebase keeps for rollbacks (default: 5)
  DRY_RUN=1       only list what would be deployed

The identity needs roles/firebasehosting.admin on the project of the site.
"""

import concurrent.futures
import gzip
import hashlib
import json
import os
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request

API = os.environ.get("FIREBASE_HOSTING_API", "https://firebasehosting.googleapis.com/v1beta1")
POPULATE_BATCH = 1000
UPLOAD_WORKERS = 8
CACHE_CONTROL = "public, max-age=3600"


class Token:
    """Access token from gcloud, refreshed before it expires (they last one hour)."""

    def __init__(self):
        self._lock = threading.Lock()
        self._value = None
        self._at = 0.0

    def get(self):
        with self._lock:
            if self._value is None or time.time() - self._at > 1800:
                self._value = subprocess.run(
                    ["gcloud", "auth", "print-access-token"],
                    check=True, capture_output=True, text=True,
                ).stdout.strip()
                self._at = time.time()
            return self._value


def request(token, method, url, body=None, content_type="application/json"):
    data = json.dumps(body).encode() if isinstance(body, dict) else body
    for attempt in range(5):
        req = urllib.request.Request(url, data=data, method=method)
        req.add_header("Authorization", "Bearer " + token.get())
        if data is not None:
            req.add_header("Content-Type", content_type)
        try:
            with urllib.request.urlopen(req, timeout=300) as resp:
                payload = resp.read()
                return json.loads(payload) if payload else {}
        except urllib.error.HTTPError as error:
            if error.code in (429, 500, 502, 503, 504) and attempt < 4:
                time.sleep(2 ** attempt)
                continue
            raise SystemExit("{} {} failed: {} {}".format(method, url, error.code, error.read().decode(errors="replace")))
        except urllib.error.URLError:
            if attempt < 4:
                time.sleep(2 ** attempt)
                continue
            raise


def gzipped(path):
    # mtime=0 makes the archive, so its hash, depend only on the content of the file.
    with open(path, "rb") as file:
        return gzip.compress(file.read(), mtime=0)


def list_files(output_dir):
    """Return {"/site/path": sha256 of the gzipped content} and {sha256: local path}."""
    files, paths = {}, {}
    for directory, _, names in os.walk(output_dir):
        for name in names:
            local = os.path.join(directory, name)
            site_path = "/" + os.path.relpath(local, output_dir).replace(os.sep, "/")
            digest = hashlib.sha256(gzipped(local)).hexdigest()
            files[site_path] = digest
            paths[digest] = local
    return files, paths


def main():
    site = os.environ.get("FIREBASE_SITE") or sys.exit("FIREBASE_SITE must be set")
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_dir = os.environ.get("OUTPUT_DIR") or os.path.join(root, "public")
    if not os.path.isfile(os.path.join(output_dir, "pim", "versions.json")):
        sys.exit("{} does not look like a complete build (no pim/versions.json). Run scripts/build.sh first.".format(output_dir))

    print("==> Hashing {}".format(output_dir), flush=True)
    files, paths = list_files(output_dir)
    print("    {} files, {} distinct contents".format(len(files), len(paths)), flush=True)
    if os.environ.get("DRY_RUN") == "1":
        return

    token = Token()
    site_url = "{}/sites/{}".format(API, site)

    # Keep a few versions for rollbacks: every retained version counts in the hosting storage.
    max_versions = int(os.environ.get("MAX_VERSIONS", "5"))
    request(token, "PATCH", site_url + "/config?updateMask=maxVersions", {"maxVersions": max_versions})

    version = request(token, "POST", site_url + "/versions", {
        "config": {"headers": [{"glob": "**", "headers": {"Cache-Control": CACHE_CONTROL}}]},
    })["name"]
    print("==> Created {}".format(version), flush=True)

    required, upload_url = set(), None
    items = sorted(files.items())
    for start in range(0, len(items), POPULATE_BATCH):
        answer = request(token, "POST", "{}/{}:populateFiles".format(API, version),
                         {"files": dict(items[start:start + POPULATE_BATCH])})
        required.update(answer.get("uploadRequiredHashes", []))
        upload_url = answer.get("uploadUrl", upload_url)
    print("==> Uploading {} new contents ({} already on Firebase)".format(len(required), len(paths) - len(required)), flush=True)

    def upload(digest):
        request(token, "POST", "{}/{}".format(upload_url, digest), gzipped(paths[digest]), "application/octet-stream")

    with concurrent.futures.ThreadPoolExecutor(UPLOAD_WORKERS) as pool:
        for done, _ in enumerate(pool.map(upload, sorted(required)), 1):
            if done % 500 == 0:
                print("    {}/{}".format(done, len(required)), flush=True)

    request(token, "PATCH", "{}/{}?updateMask=status".format(API, version), {"status": "FINALIZED"})
    release = request(token, "POST", "{}/releases?{}".format(site_url, urllib.parse.urlencode({"versionName": version})))
    print("==> Released {}".format(release.get("name", version)), flush=True)


if __name__ == "__main__":
    main()
