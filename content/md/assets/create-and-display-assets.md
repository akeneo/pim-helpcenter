---
id: create-and-display-assets
themes: work-on-your-assets
title: "**Create and display** assets"
popular: false
ee-only: true
related: work-on-your-assets
---

# The asset creation

Once you have [created an asset family](#), you can add **assets**.
In the asset manager, you have 2 ways to add assets:
- unitary (one by one)
- or via the [mass upload](#Upload and create several assets at the same time) feature.

## Add an asset

Let’s say that you just have created the asset family `Packshots`, you have defined its asset attributes and now you want to create your first asset.

To add a new asset to the asset family `Packshots`:
1. Go to the Asset Manager
1. Select your `Packshots` family (the assets will automatically appear in the grid)
1. Then click on `Create` and select `Create an asset`.
1. Choose a label for the asset (the PIM will automatically take its label to generate your asset's code, but you can change it if needed).

![Create an asset](../img/Asset_creation.png)

::: info
Note that we have defined a limitation of 1 million assets per asset family to guarantee that the PIM is functional and runs smoothly.
:::

## Upload and create several assets at the same time

Assets mass upload is pretty convenient since it **automatically creates new assets from uploaded files**.

::: warning
As for the unitary creation, you have to be in an asset family to mass upload your files.
:::

To mass upload assets:
1. Go to the `Assets` menu
1. Select your asset family in the dropdown button in the left panel
1. Click on `Create` then select `Upload assets`
![image](../img/Assets_UploadAssets.png)
1. Drag and drop your asset files in the page or click on `Drag and drop your files or click here` to open the dialog box and select the files you want to upload
1. Once all your files have the `ready to create` status, click on `Create`.
![image](../img/Assets_UploadAssetsList.png)

::: tips
The code in automatically filled based on the filename but you can edit it directly in this screen. It cannot be edited afterwards.
:::

::: info
When files are added to the list, you can remove them whatever their status.  
To remove the file from the list, click on the `X` button at the end of the row. The file will be removed and will not be imported.

If you want to remove all files at once, click on the `Remove all` button. ;)
:::

### Special cases

In your asset family, if the attribute used as main media is scopable and/or localisable,

The PIM uses the filename to know for which asset the file have to be used and if this asset is localized or not.
To check if the asset already exists, the PIM compares the existing assets codes with the file's name.

:::warning
Only letters, numbers and underscores are allowed in an asset code, the other characters will be replaced by an underscore " _ ". i.e: if the file's name contains a minus sign character "-", it will be changed into an underscore sign " _ ", so the "picture-1.jpg" and "picture_1.jpg" will be linked to the same asset code "picture_1".  
:::






Now that your Asset Manager is filled with many assets, it's time to dig into the asset library.

# The asset library
When you open the `Assets` menu, you discover the assets in a mosaic view, that we call the **asset library**.

![Asset library](../img/Asset_library.png)

Assets are displayed by asset families. By default, the first asset family is selected.

::: info
If you don't have any asset family, the first thing to do is to create your first one, and then you will be able to add assets.
:::

# Search for assets
Because we really want to help you in your daily work, we focused our efforts on the search.

## Full text search

As for the Reference Entity feature, you benefit from a powerful search in the Asset Manager. With the **full text search**, you can search on code, label and text attribute types.

For example, if you search for the word *« famous »*, all the assets containing the word *« famous »* in their code, label or text attribute types will be displayed.  

![Search for assets with a keyword](../img/Assets_Search_1_word.png)

And we can go further.
If you search for *"famous"* and *"bags"*, then only the record containing both *"famous"* and *"bags"* words will be displayed.

![Search for assets with several keywords](../img/Assets_Search_2_words.png)

## Filter on options

There are also filters on the left, where you retrieve the options of the single/multiple options attributes. It can be very powerful if you use these options to manage tags on your assets for example.

![Asset library](../img/Asset_filter_options.png)

The operator is an `in list` operator. If you are looking for the packshot with the room "kitchen" OR "leaving room", the packshots with the room "kitchen" OR the room "leaving roomd" will be displayed.

You can combine filters. For instance, you can search on all packshots with the material "wood" AND the color "brown".

An option can be removed from a filter using the cross.

To empty a filter, you can click on the eraser.








----------
# Overview



**Example 1 with a non-localized asset**  
If the filename is `main_picture_S1263547.jpg`, then the PIM will check:
- If the asset with the `main_picture_S1263547` code already exists, the PIM will update the asset with the `main_picture_S1263547` code by importing the `main_picture_S1263547.jpg` file as its new reference file (and will regenerate the variation files accordingly).
- If the asset doesn’t already exist, the PIM will create a new asset with the `main_picture_S1263547` code and with the file as the reference file, so that the variation files can be generated.

**Example 2 with a localized asset**  
Another example, if the filename is `akene-en_US.pdf`, then the PIM will check:
- If the asset with the `akene` code already exists and if it is localized, the PIM will update the asset with the `akene` code by importing the `akene-en_US.pdf` file as the reference file for the given locale code at the end of the filename (`en_US`).
- If the asset with the `akene` code already exists and if it is not localized, the PIM will display an error message in red.
- If the asset with the `akene` code doesn't already exist, the PIM will create a new localized asset with the `akene` code and with the file as the reference file for the given locale code at the end of the filename (`en_US`).

:::warning
If the locale is disabled or doesn't exist in the PIM, the PIM will display an error message in red.
:::
