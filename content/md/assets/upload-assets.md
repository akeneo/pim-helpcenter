---
id: upload-assets, import-export-data
themes: manage-your-assets
title: "**Upload** assets"
popular: false
ee-only: true
related: work-with-assets, assets-transformation
---

# Overview

Mass upload assets is pretty convenient especially if you want to update your asset catalog with external sources: photo shooting, new collection, etc...

When mass uploading assets, Akeneo PIM extracts the data from the file and converts them to save in the PIM.

The PIM uses the filename to know for which asset the file have to be used.

## Examples
If the filename is “demo_video.wmv”, then the PIM will check:
- If the asset with the code “demo_video” already exists
  - If the asset exists, the PIM will update the asset with the code “demo_video” by importing the file “demo_video.wmv” as its reference file (and generate the variation files accordingly).
  - If the asset doesn’t exist, the PIM will create a new asset with the code “demo_video” and with the file as the reference file, so that the variation files can be generated.

Another example, if the filename is “PIM_userguide_en_US.pdf” then the PIM will check:
- If the asset with the code “PIM_userguide” exists
  - If the asset already exists,
    - If the asset is localized, the PIM will import the file as the reference for the given locale code at the end of the filename (“en_US”).
    - If the asset is not localized, the PIM will display an error message in red, to inform that the PIM does not know what to do with this file.

# How to?

1.  Go to Collect > Upload assets.
![image](../img/dummy.png)
1.  Drag and drop your asset files in the page or click on the “Add files” button to open the dialog box and select the asset files you want to upload.
![image](../img/dummy.png)
1.  Click on the “Upload” button to upload assets.
1.  Click on the “Import” button to create the assets.
![image](../img/dummy.png)

The report of the import is displayed.

There are some available options during the scenario.

## Cancel the mass upload of files

When files are added to the list with the “SUCCESS” status, they are still available even if you logout or move to another page.

To clean the list of files, click on the button “Cancel upload”. All the files will be removed and will not imported.

## Remove a file before uploading

When files are added to the list, they may be removed whatever their status.

To remove the file from the list, click on the “Cancel” button in the row. The file will be removed and will not be imported.

![image](../img/dummy.png)
