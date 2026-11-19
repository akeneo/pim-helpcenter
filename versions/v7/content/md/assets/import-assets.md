---
id: import-assets
themes: administration, manage-your-assets
title: "**Import** your assets"
popular: true
ee: true
ge: false
related: imports, work-on-your-assets
---

# Overview

You already know that you can easily mass create assets in an asset family with a main media of type `media file`, by clicking on `mass upload`. This feature enables you to import a set of files and create one asset per file at once.

When the main media of the asset family is a `media link` attribute, you can't access the `mass upload` functionality as you don't have any binary file to upload.

If you are in this situation, or if you simply need to import assets and their attribute values in the Asset Manager, this article may be interesting for you.  

# Import assets with an import profile

You can import a CSV or excel file with a list of urls and/or an archive with all the media. To do so, you first have to create an [import profile](imports.html#create-a-new-import-profile): choose a code, a label and select either `Asset import in XLSX` or `Asset import in CSV`.

:::tips
* To get the structure of your asset import file, you can export the assets first - by creating an export profile with the `assets` job. But mind you! you can only [export assets from one family at once](export-assets.html#how-to-export-your-assets-with-the-export-jobs).
* If you get the structure of your import file thanks to a previous export, you'll have a `filepath` column. This column is ignored during the import, in order to avoid any problem with the prefix/suffix of the `media link` attributes.  
:::

:::info
Imports (including archives) are limited to 512 MB per file.
:::

:::warning
When you are in a product sheet, you can directly upload a file there: it automatically creates a new asset in the Asset Manager. It's not the same behavior when you run a product import: if you add a new asset in your product import file, this new asset is **not created** in the Asset Manager!
:::
