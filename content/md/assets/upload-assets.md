---
id: upload-assets
themes: manage-your-assets, import-export-data
title: "**Upload** assets"
popular: false
ee-only: true
related: work-with-assets, assets-transformation
---

# Overview

Mass upload assets is pretty convenient especially if you want to update your asset catalog with external sources: photo shooting, new collection, etc...

The PIM uses the filename to know for which asset the file have to be used.

**Example 1**  
If the filename is `main_picture_S1263547.jpg`, then the PIM will check:
- If the asset with the `main_picture_S1263547` code already exists, the PIM will update the asset with the `main_picture_S1263547` code by importing the `main_picture_S1263547.jpg` file as its reference file (and generate the variation files accordingly)
- If the asset doesn’t already exist, the PIM will create a new asset with the `main_picture_S1263547` code and with the file as the reference file, so that the variation files can be generated

**Example 2**  
Another example, if the filename is `asset_en_US.pdf` and the asset with the `asset` code already exists, then the PIM will check:
- If the asset is localized, the PIM will import the file as the reference for the given locale code at the end of the filename (`en_US`)
- If the asset is not localized, the PIM will display an error message in red, to inform that the PIM does not know what to do with this file

# How to?

1. Go to the `Assets` menu
1. Click on the `...` button in the top right corner, and select `Upload assets` in the dropdown
![image](../img/dummy.png)
1. Drag and drop your asset files in the page or click on `Drag and drop your assets or click here` to open the dialog box and select the asset files you want to upload
1. Click on the `Upload assets` button to upload assets
![image](../img/dummy.png)
1. Then, when it's done, click on the `Import` button to create the assets in the PIM
![image](../img/dummy.png)

The report of the import is displayed.

::: info
When files are added to the list, you can remove them whatever their status.  
To remove the file from the list, click on the `X` button at the end of the row. The file will be removed and will not be imported.

If you want to remove all the files you chose at once, click on the `Remove all files` button at the top of the screen. ;)
:::
