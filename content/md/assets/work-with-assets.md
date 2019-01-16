---
id: work-with-assets
themes: manage-your-assets
title: Work with **assets**
popular: false
ee-only: true
related: upload-assets, assets-transformation
---

# View the assets list

To start, go to the `Assets` menu. From this page, there are many ways to work within the asset grid below.

![View the assets list](../img/Assets_MainPage.png)

## Set up your work environment

Like for the product grid, you can set up a locale and a channel context, you can reduce and expand the categories panel, and use filters to easily find the assets you are looking for.

For more information about the grid, please refer to the [Get familiar with the grid](products-grid.html) article.

The filters can be applied on the following asset information:
- Code
- Description
- Tags
- End of use
- Creation date
- Last update date

::: info
The following information cannot be sorted out in the asset grid:
- Thumbnail
- Tags
:::

::: warning
Asset thumbnail images displayed in the grid are the selected channel's variations. If no image is displayed it is because you do not have any variations generated for this channel. See how to generate variations in the [Edit the files of an asset](work-with-assets.html#edit-the-files-of-an-asset) part of this article.
:::

## Asset grid display

To highlight the assets images, a `Gallery` display is available in the asset grid.

:::info
Grid features also apply to this display (filters, channel, locale and categories selection, pagination, assets selection, etc.).
:::

To use the `Gallery` display:
1.  Click on `List` to change the display  
  ![Select the asset grid display](../img/Assets_display.png)
1.  Select the display `Gallery`
  ![Gallery display of the asset grid](../img/Assets_gallery_display.png)

:::info
The context of the chosen display for the asset grid is kept.
:::

## Search by code

To quickly find assets in the assets grid, you can search on the code.

The behavior of the search is a "contains" filter. For example, if you type in "can", it will display all the assets with a code which contains "can".  

![Search bar of the asset grid](../img/Assets_search.png)

# Create an asset

To create an asset in the PIM:
1. Go to the `Assets` menu
1.  Click on the `Create an asset` in the top right­ corner
![Create an asset](../img/Assets_Create1.png)
1.  Select if the asset you want to create is localized or not. Note: If it will be localized, the area to upload a reference file is hidden. If not, you can upload a reference file.
1.  If a file is uploaded as a reference file, a code is automatically generated based on the given filename. If not, the user has to put a code for the asset.
1.  Click on the `Save` button.

The asset has been created and the asset form page is displayed.

![Create an asset 2](../img/Assets_variations2.png)

::: info
You can also create assets by mass uploading files. For more information about this feature, see [Upload assets](upload-assets.html).
:::

# Edit an asset

To edit an asset, open the asset form by clicking on the right row in the asset grid.

## Edit the files of an asset

Click on the `Variations` tab.

You can either generate variations from a reference file, or put the variation files manually.

### Add a reference file
If you don't have any reference file for your asset yet:
1.  Drag and drop the file in the area or click in the area to open the dialog box and select the file to add
![Add a reference title](../img/Assets_AddingReferenceImgProcess.gif)
1.  Click on the `Save` button

The reference file is added and the variation files are generated.

::: info
The loading time depends on the size of the file, the complexity of the transformations to apply and the number of channels.
:::

### Download a file (reference or variation)

To download a file, click on the relevant `Download` button.
![download a file](../img/Assets_DownloadButton.png)

### Delete a file (reference or variation)

To delete a file, click on the relevant `Delete` button, and confirm the action.

![delete a file](../img/Assets_DeleteButton.png)

::: info
If you delete the reference file, the variation files will not be updated.
:::

::: warning
If you delete a variation file, it cannot be generated from the reference file automatically, except if you reset variations. See the dedicated section below.
:::

### Generate a variation file from the reference file manually

Click on the `Generate from the reference file` button.

::: tips
This option is not displayed if there is no reference file.
:::

### Generate variation files from the reference file automatically

Click on the `Reset variations` button in the reference file panel.

All the variations different from the reference file are updated. The others are not updated.

### Upload a variation file manually

1.  Drag and drop the file in the area or click in the area to open the dialog box and select the file to add.
1.  Click on the `Save` button.

The variation file will be no more related to the reference file.

## Edit the asset properties
1.  Click on the `Properties` tab
![edit the asset properties](../img/Assets_Properties.png)
1.  Edit the properties you want to change
1.  Click on the `Save` button

::: info
The code of an asset cannot be changed after its creation.
:::

You can add:
- a description to give more details about your asset,
- tags that will help you work with your assets,
- a end-of-use date for each asset to could be very useful if you want to receive a notification a few days before your asset license expires. To enable this option, please refer to the [Manage your account](manage-your-account.html#your-groups-and-roles) article.

## Create a new tag for an asset

When a tag is not available, if you continue to type it, you can use the `Enter` button of your keyboard to tell the PIM that you want to create the tag. It will be automatically created and it will be then available for other assets.

## Classify the asset into categories

An asset can be classified in one or more categories, but can also be left out of any categories in the PIM. The asset can either be classified in several categories of the very same tree or in different ones.

To classify one asset:
1.  Click on the `Categories` tab
1.  Click on the name of a tree you want on the left hand side
1.  Check the categories in which the asset has to be classified
1.  Uncheck the categories in which the asset should no longer be listed
1.  Click on the `Save` button to confirm your changes

# Delete an asset

An asset can be removed from the PIM. This means that all the relevant asset information will be deleted in the PIM. This action cannot be reverted.

1.  Open the asset form you want to delete
1.  Click on the `...` button and then select `Delete` in the dropdown
![delete an asset](../img/Assets_DeleteAsset.png)
1.  Confirm the action in the popin

# Mass actions on asset

## Mass add tag to a selection of assets

To save time you can mass add tag to an asset:
1.  Select the assets thanks to the checkboxes in front of each asset row
1.  A menu appears at the bottom of the screen. Click on the `Mass edit assets` button
1.  Select `Add tags to assets` and click on the `Next` button in the top right corner
1.  Select the tags you want to add to your assets
1.  Click on `Next`
1.  To finish, click on `Confirm`

A push message is displayed and the notification center displays a new notification.

::: tips
If some of the tags you added don't exist, they will be automatically created.
:::

## Mass move assets into categories

You can move a selection of assets in new categories at once to earn time. The old categorization will be lost.
1.  Select the assets thanks to the checkboxes in front of each asset row
1.  A menu appears at the bottom of the screen. Click on the `Mass edit assets` button
1.  Select `Classify assets in categories` and click on the `Next` button in the top right corner
1.  Select the category in which you want your assets to be moved
1.  Click on `Next`
1.  To finish, click on `Confirm`

A push message is displayed and the notification center displays a new notification.

## Mass delete assets

You can delete a selection of assets at once to earn time.
1.  Select the assets thanks to the checkboxes in front of each asset row
1.  A menu appears at the bottom of the screen. Click on the `Delete assets` button
1.  Click on `Delete` to confirm your action

::: info
Like a delete of a single asset, this action does not delete asset from the server.
:::

## Export assets

To export assets, you need to use several export profiles, first of all, run a basic product [export](exports.html#run-an-export): it contains the assets codes associated to products.
Then, you can run an assets variation export to get the asset's path on the server. In the exported file, you can find the original asset file path in the `reference_file` column and its channel's variations in the `variation_file` column.

::: info
Assets are not available through a URL nor exported in a zip folder like pictures. 
:::

If you need the actual files, it's possible! Since asset files are stored in the `app/filestorage` folder, you can set up a cron task or a script to automatically export them to a FTP for instance.
