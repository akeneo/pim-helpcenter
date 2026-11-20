# Flexibility / On-Premise help center archive.
# See README.md for the layout of this branch.

OUTPUT_DIR ?= $(CURDIR)/public
PORT ?= 8000
export OUTPUT_DIR

.DEFAULT_GOAL := build
.PHONY: build build-version serve publish clean

## Build every version listed in build/versions.txt into $(OUTPUT_DIR)
build:
	scripts/build.sh

## Build only some versions, e.g. make build-version VERSIONS="v7 v6"
build-version:
	scripts/build.sh $(VERSIONS)

## Serve $(OUTPUT_DIR) on http://localhost:$(PORT)/
serve:
	python3 -m http.server --directory $(OUTPUT_DIR) $(PORT)

## Deploy $(OUTPUT_DIR) to Firebase Hosting (needs FIREBASE_SITE, see scripts/publish.py)
publish:
	python3 scripts/publish.py

clean:
	rm -rf $(OUTPUT_DIR) .build
