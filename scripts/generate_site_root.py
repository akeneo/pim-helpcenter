#!/usr/bin/env python3
"""Generates the files served around the versions of the help center.

- redirect pages: the pages of every version link to "/" (breadcrumb "Home"), "/pim/v7"
  (breadcrumb of v7, built as /pim/flexibility-v7/) and to the Serenity help center under
  /pim/serenity/, now on Helpjuice. Static pages keep the site portable to any static hosting.
- 404.html and robots.txt, copied from site/
"""
import argparse
import html
import shutil
from pathlib import Path

SERENITY_HELP_CENTER = "https://help.akeneo.com/"
SERENITY_PAGES = (
    "index.html",
    "whats-new.html",
    "whats-next.html",
    "supported-versions-table.html",
    "updates/index.html",
)


def write_redirect(output_dir: Path, path: str, target: str, template: str) -> None:
    page = output_dir / path
    page.parent.mkdir(parents=True, exist_ok=True)
    page.write_text(template.replace("{{ target }}", html.escape(target, quote=True)), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site-dir", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--latest-url", required=True)
    args = parser.parse_args()

    template = (args.site_dir / "redirect.html.tpl").read_text(encoding="utf-8")
    write_redirect(args.output_dir, "index.html", args.latest_url, template)
    write_redirect(args.output_dir, "pim/index.html", args.latest_url, template)
    write_redirect(args.output_dir, "pim/v7/index.html", "/pim/flexibility-v7/index.html", template)
    for name in SERENITY_PAGES:
        write_redirect(args.output_dir, f"pim/serenity/{name}", SERENITY_HELP_CENTER, template)

    for name in ("404.html", "robots.txt"):
        shutil.copyfile(args.site_dir / name, args.output_dir / name)


if __name__ == "__main__":
    main()
