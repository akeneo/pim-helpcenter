# Bringing the Helpjuice changes back into Git

## Context

help.akeneo.com runs on Helpjuice since the spring of 2023. Before that, it was generated from
this repository: the commits "update link PIM Helpjuice" (2023-04-03/04) date the switch, and the
`vN` branches stopped receiving changes then (v7: 2023-03-08). Since then, the articles of the
On-Premise / Flexibility versions have been edited on Helpjuice only.

| Helpjuice categories (help.akeneo.com/en_US/...) | Git sources in this branch |
|---|---|
| `v7`, `v7-*` | `versions/v7/content/md` |
| `v6`, `v6-*` | `versions/v6/content/md` |
| `v5`, `v5-*` | `versions/v5/content/md` |
| `v4`, `v4-*` | `versions/v4/content/md` |
| `v3`, `v3-*` | `versions/v3/content/md` |
| `v2`, `v2-*` | `versions/v2/content/md` |
| `v1-3-*` to `v1-7-*` (a few pages) | none: the 1.x help center was not in this repository |
| `serenity-*` | branch `master` (SaaS, out of scope) |

## Method 1: public extraction and comparison (no credentials)

[`extract.py`](extract.py) only reads the public site and uses only the Python standard library:

1. it lists the articles of a version from `https://help.akeneo.com/sitemap.xml`,
2. it saves the HTML body of each article (`div.helpjuice-article-body-content`) and its
   Helpjuice id,
3. it matches each article with the Markdown source of the same title (front matter `title:`),
4. it compares their text sentence by sentence, ignoring what the migration changed without
   changing the content (re-wrapped paragraphs, upper-cased headings, callouts, emoji),
5. it writes a report: articles that differ, articles without a Git source (created or renamed on
   Helpjuice), Git sources without an article (deleted or renamed on Helpjuice).

```bash
python3 -I helpjuice/extract.py --version v7 --out /tmp/hj-v7 --sources versions/v7/content/md
less /tmp/hj-v7/report.md
```

Results on 2026-11-19:

| Version | Articles on Helpjuice | Identical to Git | Different | Without Git source | Git sources without article |
|---|---|---|---|---|---|
| v7 | 140 | 44 | 94 | 2 | 13 |
| v6 | 143 | 50 | 89 | 4 | 8 |
| v5 | 140 | 51 | 82 | 7 | 8 |
| v4 | 127 | 39 | 82 | 6 | 4 |
| v3 | 103 | 28 | 73 | 2 | 4 |
| v2 | 93 | 22 | 69 | 2 | 4 |

A difference does not tell which side changed. Some are Helpjuice edits; others are Git changes
that never reached Helpjuice (for instance, in v7, "the SKU is now optional" exists only in Git).
For each different article, check the Git history of its source since the migration:

```bash
git log --since=2023-03-01 --oneline -- versions/v7/content/md/<source>
git log --since=2023-03-01 --oneline origin/v7 -- content/md/<source>
```

Some articles are published in several Helpjuice categories (for instance "Manage your views").
They show up once per category in the report and share the same Git source.

## Method 2: Helpjuice API v3 (needs an API key)

The API answers on the help center domain: `GET https://help.akeneo.com/api/v3/articles` and
`GET https://help.akeneo.com/api/v3/categories` exist (they return `403 Not allowed` without a
key). A Helpjuice administrator can create a key in the Helpjuice settings (API credentials).

Compared to the public extraction, the API also returns unpublished and draft articles and the
dates of the articles, which makes it possible to keep only the articles updated after the
migration. The parameters and field names were not checked here, because that needs a key. Check
them in the API documentation linked from the Helpjuice admin, then replace `article_urls()` and
`ArticleParser` in `extract.py` with API calls. The rest of the script (matching, comparison,
report) stays the same.

No public endpoint exposes the revision history of an article. To see who changed what on an
article, use its history in the Helpjuice editor.

## Bringing a change back into Git

For each article to bring back:

1. Convert its saved body to Markdown, keeping the structure:

   ```bash
   docker run --rm -v /tmp/hj-v7:/data pandoc/core:3.5 \
       -f html -t gfm --wrap=none \
       /data/articles/v7-build-your-catalog/v7-manage-your-attribute-groups.html
   ```

2. Download the images it references. All of them are hosted on `static.helpjuice.com`: put them
   in the `img/` directory next to the source and replace the URLs with relative paths
   (`../img/<name>.png`).
3. Restore the front matter of the source (`id`, `themes`, `title`, `popular`), the `:::info`,
   `:::tips` and `:::warning` blocks (Helpjuice callouts) and the emoji shortcodes, so that the
   gulp build still renders the page.
4. Check the page with `make build-version VERSIONS=v7 && make serve`.
5. Open one pull request per Helpjuice category on `flexibility-archive`, linking the Helpjuice
   article in the description.

Articles without a Git source become new Markdown files: give them a front matter and add them to
the right theme. For Git sources without an article, decide whether the page was renamed (it then
appears among the articles without a source) or removed on purpose.
