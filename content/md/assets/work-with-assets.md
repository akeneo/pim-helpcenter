---
id: work-with-assets
themes: manage-your-assets
title: Work with **assets**
popular: false
ee-only: true
related: upload-assets, assets-transformation
---

# View the assets list

To start, go to Enrich/Assets. From this page, there are many ways to work within the asset grid below.

![image](../img/dummy.png)

## Set up your work environment

Like for the product’s grid, you can set up a locale and a channel context, you can reduce and expand the category panel’s, and work with filters.

For more information about the grid, please refer to the presentation of the product’s grid in the section (Work with the grid/Set up your work environment)

The filters can be applied on the following asset information:

- All the asset information managed by the PIM:
  - Code
  - Description
  - Tags
  - End of use
  - Creation date
  - Last update date

The following information cannot be sorted out in the asset’s grid:
- Thumbnail
- Tags

## Shortcut actions for each asset

There is a set of actions available for each asset that you can find in the last column in the asset grid. The buttons are displayed when you hover your mouse over the line.

# Create an asset

To create an asset from the PIM user interface (without going through imports), you must have a special permission to do so. If this is not the case, please contact your administrator.

To create an asset in the PIM:
1.  Click on the “Create asset” at the top right­ hand side of the page Enrich/Assets.
![image](../img/dummy.png)
1.  Select if the asset you want to create is localized or not. Note: If it will be localized, the area to upload a reference file is hidden. If not, you can upload a reference file.
![image](../img/dummy.png)
1.  If a file is uploaded as a reference file, a code is automatically generated based on the given filename. If not, the user has to put a code for the asset.
1.  Click on the “Save” button.

The asset has been created and the asset form page is displayed.

![image](../img/dummy.png)

# Edit an asset

To edit an asset, open the asset form by clicking the right row in the asset grid.

## Edit the asset’s properties
1.  Click on the “Properties” tab.
![image](../img/dummy.png)
1.  Edit the properties you want to add, remove or change.
1.  Click on the button “Save”.

::: info
The code of an asset cannot be changed after its creation.
:::

You can add a description, tags and a end-of-use date for each assets.

## Create a new tag for an asset

When a tag is not available (no results), and if you continue to type it, then use the button “Enter” of your keyboard to tell the PIM that the tag has to be created. The tag will be automatically created and it will be available for other assets.

## Edit the files of an asset

1.  Click on the “Variations” tab.

![image](../img/dummy.png)

You can either generate variations from a reference file, or put the variation files manually.

### Add a reference file

1.  Drag and drop the file in the area or click in the area to open the dialog box and select the file to add.
![image](../img/dummy.png)
1.  Click on the “Save” button.

::: info
The loading time depends on the size of the file, the complexity of the transformations to apply and the number of channels. During this time, you have to wait.
:::

Then the reference file is added and the variation files are generated.

### Download a file (reference or variation)

To download a file, click on the relevant “download” button.
![image](../img/dummy.png)

### Delete a file (reference or variation)

To delete a file, click on the relevant “Delete” button, and confirm the action.

![image](../img/dummy.png)

::: info 
If you delete the reference file, the variation files will not be updated.
:::

::: warning 
If you delete a variation file, it cannot be generated from the reference file automatically, except if you reset variations. See the dedicated section below.
:::

### Generate a variation file from the reference file manually

1.  Click on the “Generate from the reference file” button.

![image](../img/dummy.png)

::: tips
This option is not displayed if there is no reference file.
:::

### Generate variation files from the reference file automatically

1.  Click on the “Reset variations” button.

![image](../img/dummy.png)

All the variations different from the reference file are updated. The others are not updated.

### Upload a variation file manually

1.  Drag and drop the file in the area or click in the area to open the dialog box and select the file to add.
![image](../img/dummy.png)
1.  Click on the “Save” button.

The variation file will be no more related to the reference file.

# Delete an asset

An asset can be removed from the PIM. This means that all the relevant asset information will be deleted in the PIM. This action cannot be reverted.

1.  Open the asset form you want to delete.
1.  Click on the “Delete” button in the asset header page.
![image](../img/dummy.png)
1.  Confirm the action in the popin.

# Mass actions on asset

## Mass add tag to a selection of assets

To save time you can mass add tag to an asset:
1.  Select the assets
1.  Click on the bulk action menu
1.  Select Add tag
1.  Write your tag
1.  Click on Next
1.  Confirm

A notification message is displayed «The bulk action «add tags to assets» has been launched. You will be notified when it is done.»

The notification centre displays a notification.

::: tips 
If some tags don't exist, they will be created.
:::

![image](../img/dummy.png)

## Classify assets into categories

An asset can be classified in one or more categories, but can also be left out of any categories in the PIM. The asset can either be classified in several categories of the very same tree or in different ones.

To add/remove an asset:
1.  Open the edit asset form you want to classify in categories.
1.  Click on the “Categories” tab.
1.  Click on the name of a tree on the left hand side to be displayed.
1.  Check the categories in which the asset has to be classified.
1.  Uncheck the categories in which the asset should no longer be listed.
1.  Then click on the “Save” button.


## Mass remove assets from categories

You can remove a selection of assets at once to earn time.
1.  Select the assets
1.  Click on the bulk action menu
1.  Select classify
1.  Select the category you want to remove
1.  Click on next
1.  Confirm

A notification message is displayed «The bulk action «move to categories» has been launched. You will be notified when it is done.»

The notification centre displays a notification.

## Mass delete assets

You can delete a selection of assets at once to earn time.
1.  Select the assets
1.  Click on the bulk acton menu
1.  Select delete
1.  Click on OK in the confirmation pop in

::: info 
Like a delete of a single asset, this action does not delete asset from the server.
:::