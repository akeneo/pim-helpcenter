# Akeneo PIM help center: On-Premise and Flexibility archive

This branch (`flexibility-archive`) gathers the help center of every Akeneo PIM version deployed
On-Premise or on Flexibility (PaaS), from v2 to v7, one directory per version. The CI builds all
of them into a single static site.

The `master` branch is the help center of Akeneo PIM SaaS (Serenity), now published on Helpjuice
(help.akeneo.com). It is not part of this archive.

## Layout

```
versions/<version>/   sources of each version, imported from the <version> branch (history kept)
build/versions.txt    published versions, newest first, and the directory each build produces
scripts/build.sh      builds the site into public/
scripts/publish.py    deploys public/ to Firebase Hosting
deployments/          Terraform of the hosting (Firebase Hosting site, DNS zone), applied by the CI
site/                 404 page, robots.txt and the template of the redirect pages
helpjuice/            how to bring the changes made on Helpjuice back into Git
.circleci/config.yml  build on every push, publication from flexibility-archive
```

Each `versions/<version>/` directory was imported with a subtree merge of the `<version>` branch,
so the history of every file is still there:

```bash
git log -- versions/v7/content/md/imports-exports/tailored-export.md   # changes in this branch
git log origin/v7 -- content/md/imports-exports/tailored-export.md     # history before the import
```

The old `2.1`, `2.2` and `3.1` branches are fully merged into `v2` and `v3`, so they are covered.

The only change to the imported sources: `versions/v4/yarn.lock` gained the entries of jest,
declared in `package.json` since 2020 but missing from the lockfile, so that every version
installs with `--frozen-lockfile`.

## Build the site

Only Docker and Python 3 are required.

```bash
make build                          # every version, into public/ (about 2 minutes once cached)
make build-version VERSIONS="v7"    # some versions only
make serve                          # http://localhost:8000/
```

Each version is built as on its original branch: Node 10, its own `yarn.lock`, `gulp create-dist`.
The pages use absolute links (`/pim/<version>/...`), so the site must be served at the root of
its domain. The result is a directory tree of static files that any static hosting can serve:

```
public/
├── index.html              redirects to the newest version
├── pim/
│   ├── flexibility-v7/     v7 (its build names it this way)
│   ├── v6/ … v2/
│   ├── versions.json       read by the version menu of every page
│   ├── index.html          redirects to the newest version
│   ├── v7/index.html       redirects to /pim/flexibility-v7/ (breadcrumbs of v7 link there)
│   └── serenity/…          redirect to help.akeneo.com (links to the SaaS help center)
├── 404.html
└── robots.txt              not indexed: the same articles are on help.akeneo.com
```

`HELP_CENTER_URL` (default `https://flexibility.help.akeneo.com/`, the domain of the site) sets the base URL of the links of the
"updates" feed each version generates.

## Publish

The help center is served on https://flexibility.help.akeneo.com/ by Firebase Hosting, in the GCP
project `akecld-prd-paas-helpcenter-prd`. As for akeneo/pim-api-docs, the project itself (service
accounts, Terraform state bucket, OIDC access for the CI) is created in
[akeneo/gcp-projects](https://github.com/akeneo/gcp-projects), in
`product/documentation/paas-helpcenter`, and the hosting is described here, in `deployments/`:

```
deployments/modules/dependencies   APIs, Firebase on the project, DNS zone of flexibility.help.akeneo.com
deployments/modules/services       Firebase Hosting site, its custom domain and DNS records
deployments/stages/prd/<scope>     the production values; state in gs://akecld-terraform-paas-helpcenter-prd
```

On every push to `flexibility-archive`, the CI ([config](.circleci/config.yml)):

1. `build`: `scripts/build.sh`, the result is kept as an artifact (`pim-helpcenter-site.tar.gz`),
2. `infrastructure_*`: `terraform plan` and `apply` of `dependencies`, then `services`,
3. `push_sources_prd`: `scripts/publish.py`, which deploys `public/` to the Firebase Hosting site
   `akeneo-paas-helpcenter` through the Firebase Hosting REST API and releases it. Only the files
   that changed are uploaded, and Firebase keeps the last 5 versions for rollbacks.

The jobs authenticate through OIDC (`security-hunter/gcp_oidc_auth`, CircleCI context
`PAAS_HELPCENTER`) and impersonate the main service account of the project, without any key.

The DNS zone of `flexibility.help.akeneo.com` is in the project: its name servers (output
`name_servers` of `deployments/stages/prd/dependencies`) are declared as NS records at Gandi.

To publish by hand, with `gcloud` logged in as an identity holding `roles/firebasehosting.admin`
on the project:

```bash
FIREBASE_SITE=akeneo-paas-helpcenter make publish
```

## Change the help center

Edit the sources in `versions/<version>/content/` and open a pull request on `flexibility-archive`.
The former version branches (`v2` to `v7`) are not updated anymore.

The articles of these versions kept being edited on Helpjuice after 2023: see
[helpjuice/README.md](helpjuice/README.md) to bring those changes back.
