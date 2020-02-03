---
id: export-assets
themes: administration, manage-your-assets
title: "**Export** your assets"
popular: true
ee-only: true
related: exports, work-on-your-assets
---

# Overview

To export the assets that are in your Asset Manager, you can use the API or the export jobs in the UI.

We won't dig into the API method here but we really recommend you to take a look at the [API documentation](https://api.akeneo.com/api-reference.html#Asset) for you to know how to use our powerful API to manage your assets.

# How to export your assets with the export jobs?

You'll see, it's quite simple. The first thing is to create an export profile. To do that, follow these steps:

1. Go to the `Exports` tab of Akeneo PIM,
1. Click on `Create export profile`,
1. Choose a code, a label, and the job you want to use: `Asset export in CSV` or `Asset export in xlsx`, then click on `Save`.

![Upload assets](../img/Assets_ExportAssets.png)

Once the export profile is created, the settings of the export profile is open, and you can find 4 tabs:
- `Properties`: where you can change the label of your profile
- `Permissions`: where you can select which user group is allowed to execute and edit the job profile
- `Global settings`: where you can define the file path, the delimiter, the enclosure, if you want headers or not, and last but not least: the **asset family** (required). Indeed, you must choose the asset family from which you want to export the assets. Each time you will launch this asset export, you will export assets that are in this specific asset family only.

![Settings of the export profile](../img/Assets_ExportProfileSettings.png)

- `History`: where you can check the history of this job profile.

Once the settings are ready, save and just click on `Export now`. You will be redirected on the `Process tracker` screen. Wait for the export to be finished and then, download the generated files.

![Process tracker](../img/Assets_ProcessTracker.png)

You will be able to download two different file types:
- the asset attributes in a CSV/XLSX file
- the asset attributes + the binaries (the images, documents, etc.) in a zip file.


#### Download the file with the media attached

You can choose to download the XLSX/CSV file (with all the asset values) and the binaries (it means that you will download the media attached to the assets). To do that, click on `Download the generated files` then `Download generated archive`.

:::info
Depending on the number of assets in your asset family and the file size, the download can take time.
:::

#### Download the file without the media attached

It is also possible to download only the XLSX/CSV file without downloading the binaries of the assets. This way, you will have only the XLSX/CSV file with your asset family structure and the assets values. To do that, click on `Download the generated files` then again `Download generated files`.
