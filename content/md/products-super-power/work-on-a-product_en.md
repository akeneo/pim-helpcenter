---
id: work-on-a-product
themes: products-super-power
title: "**Enrich** your product"
popular: false
ee-only: false
related: create-a-product, product-completeness, categorize-a-product, products-associations
---

# Go to a product
Click on a product on the grid or [create a new product](create-a-product.html) to display the product form.

![Go to a product](Products_PEF1.png)

# Select your working context (channel/locale)

## Select your working channel

To select the channel you want to edit, select your channel in the drop down list on the header of the product form.

![Select your working channel](Products_DropdownChannelPEF.png)

If you want to edit several channels at once, you can edit the product information for one channel then another one and save all changes at once.

## Select your working locale

It is possible to define your working locale, the selection of the locale impacts the following information on the product form:
- The family label in the product infos
- The attribute groups label
- The attributes label
- The categories label
- The association label

To select your working locale, select the locale you want to work with on the header of the product form.

![select your working locale](Products_PEF5.png)

In the drop-down menu, you will find the locales (at least those that have been added to a channel).  
If you cannot find your working locale listed, perhaps the locale is not required by any of the channels: therefore it is not enabled. To add a locale to a channel, please refer to [Manage your channels](manage-your-channels.html).


::: ee
Or, you do not have the appropriate rights to view the product values for this locale, please refer to the [Set rights on your catalog](access-rights-on-products.html) article.
:::

For the localizable attributes (with the indicated locale on top right of the field), the entered values will be saved only for the working locale.

![Process to change of locales](Products_ChangeOfLocalesProcess.gif)

The localizable attributes for some locales exclusively (locale specific), are only displayed when they are concerned by the working locale.

If you are working on several locales, you can edit one locale then another one and save all changes at once.

::: info
The global attributes are displayed regardless of the working locale. Hence, these attributes can be edited in all working locales.
:::

# Edit a product

1.  Click on the `Attributes` tab
1.  Select the channel and locale you want to edit
1.  Change or complete your product information
1.  Click on the `Save` button (top right hand corner).

  ![Edit a product](Products_EditingaProductProcess.gif)

The product is updated and a new product version is created. You can view the product versions on the `History` tab (see [View the product versions](#view-the-products-versions)).

By default all the attributes are displayed, you can change the attribute group by clicking on the list `Attribute group` and then selecting the attribute group.

![Edit a product 2](Products_PEF3.png)

::: ee
If you cannot view or edit some attributes values, you do not have the appropriate rights to view or edit the product values for some attribute groups, please refer to the [Set rights on your catalog](access-rights-on-products.html) article.
:::

::: tips
To check if your product is complete, have more information about the `Missing required attributes` filter and the `Completeness` tab and widget, take a look at [Monitor product completeness](product-completeness.html).

To categorize a product in the `Categories` tab, you can read this [article](categorize-a-product.html).

To associate a product to another product or group of products in the `Associations` tab, you can read this [article](products-associations.html).
:::

## Add options to a simple or multi-select attribute

If an attribute option is missing for a select attribute type (simple or multiselect), you can directly add it within the Product Form.

From the product form:
1.  Click on the `+` icon on the right side of the attribute
  ![The + option](Products_AddOptionAttributes.png)
1.  A popin appears, add the attribute option code and its label for the working locale
  ![Add an option to your attribute](Products_AddOptionAttributes2.png)
1.  Click on the `Add` button to create the option, it will be automatically added to the product for this attribute

If you do not see `+` icon, you might not have the appropriate rights to add an option, please refer to [Manage your user roles](build-your-user-roles.html).

## Work with assets in an asset collection attribute _(EE only)_

In the product form, you can have some asset collection attributes which look like this:

![asset_collection_attribute](asset_collection_attribute.png)

In the following section, you will discover all the features that are available around this attribute.  
And to learn more about assets, you can have a look at [this article](work-with-assets.html).

::: ee
The asset collection attribute is only available in the Enterprise Edition.
:::

### Link assets to your product

You can link assets to your product using this attribute. To do that, follow these steps:

1. Go to your product form
1. Scroll down towards the asset collection attribute
1. Click on `Manage assets` to access the asset picker and the basket
1. Pick the assets you want to link to your product, and save.

![basket](basket.png)

### Upload assets directly from the product form

You can upload assets directly from the Asset collection in the Product Form. You don't need to quit the product form anymore.

1. Click on the new button `Upload assets` in the asset collection, then you will find the mass upload screen.
1. Drag and drop your files or click on the image to chose assets on your browser.
1. Click on `Upload`.
1. Then click on `Import`.
1. You may have to wait a bit while the asset import. Refresh the page when you receive the notification, and you will see assets linked to your product in the asset collection.

::: tips
You can find those assets in the Assets part of your PIM.
:::

### Order assets in the asset collection

We know that ordering assets can be important for you. Indeed, it can help you to **organize assets for your different channels**.  
There is a simple way to do that, directly from the product form.

OK, let's see!

![drag_drop](drag_drop.jpg)

If you have one or several asset collection attribute(s), you can now organize your assets directly in the asset collection in the product form with a **drag and drop**, and find this order in export file. Simple. Fast. Effective.

You need to import assets in a certain order in Akeneo PIM? No problem! Just order your assets in your import file, separating asset's names with a coma, then have this order in the PIM. You can also achieve this by using the API.

The order defined in the PIM will also be the same when you'll export your products with the API.

::: tips
And if you want to have a look at history, a new version is created in `History` tab each time the user changes the asset order.
:::

### Better assets display

If you have assets linked to your products, you can have a **large display of those assets** clicking on their thumbnails.

![preview](preview.jpg)

Where? In the **asset collection** in the **Product Form**.

And moreover, we added a slideshow to navigate between the assets.

If you have edit rights, you can also **remove** each asset from the asset collection attribute, just clicking on `remove` in the asset preview.

Every user can download each asset clicking on `download` in the asset preview.

## Add one or several records of a reference entity to a product _(EE only)_

If you have added a `reference entity single/multiple link` attribute to your family, then you can add a link to one or several records of the entity to your product.

It's very simple:
1. Click on the field of the "**reference entity single/multiple link**" attribute.
1. If it's a reference entity single link attribute, you can choose only one record. If it's a multiple links one, then you can choose as many records as you wish.

![selector](Products_EntitySelector.png)

::: tips
You can open the record directly from the list: just click on the `Link` icon at the end of each record line and the record will open in a new tab.
:::

# Compare product information from another locale and/or channel

## View product information from another locale and/or channel

In the product form, it is possible to view the values of the product for another locale or channel, to assist capturing the data on an ongoing work, like for instance when translating the product information, or retrieving the product information coming from another team (you are in the e-commerce team and you need the product information from the mobile team or the print team).

To view the data in another locale and/or channel:
1. Open the Product Form that you need to translate
1. Select the locale to be edited
1. Click on the `...` on the right side of the form and then `Compare / Translate`  (`working copy` is selected by default)
1. Select the channel and locale to be displayed in the drop down menus on the right side of the form

The localized or scopable values are displayed on the right side of the product form in the compare / translate panel.

![image](Products_CompareTranslate1.png)

The values on the right side can only be viewed, no edition is possible.

Additionally, it is possible to copy the values in the product form. For further details, see the next section.

## Copy product information from a locale and/or a channel

When a locale is displayed for convenient reference in the Product Form, you will be able to copy the values in the product form.

To copy the product information from a locale:
1.  In the `Compare / Translate` mode, there are multiple option values that can be selected from the `Select` drop down menu
  ![Dropdown Menu](Products_CompareTranslateDropdownMenu.png)
    - The `All` option enables you to select all localized values of the locale of reference
    - The `All visible` option enables you to select all the attribute group values displayed.
    - The `None` option enables you to deselect all the localized values of the locale of reference
1.  Click on the `Copy` button, the selected values are copied to the Product Form
  ![Copy](Products_CompareTranslateCopy.png)

# View the product’s versions

The history of changes applied to a product are taking into account for the following operations:
- Changes of attribute values in the Product Form
- Changes on the product status (enabled/disabled)
- Changes on family
- Changes on association
- Changes on categories

For each change, a new product version is created. What is tracked down for each version:
- The author or system that made the changes
- The date and time (up to seconds) at which the changes took place
- The old and the new value of each amended product information

You can define specific rights on users that can check the product’s history, please refer to [Manage your user roles](build-your-user-roles.html).   

To view the product versions:
1.  Open the product form
1.  Click on the `History` tab to see the whole list of versions

![image](Products_PEFHistory1.png)

::: ee
The Enterprise Edition comes with a feature that allows you to rollback to a previous product version (button `Restore`, for more details, take a look at [Restore an old product version](restore-a-product.html).
:::

# Comment a product

Commenting a product is a convenient way to add additional product information and facilitate the collaboration between team members.
Comments are available under the  `Comments` tab in the Product Form.

## Add a comment

1.  Open the Product Form of the product you want to comment
2.  Click on the `Comments` tab
  ![image](Products_Comments.png)
3.  In the text field, write a new comment (there is no length restrictions)
4.  Click on the `Add a new comment` button

## Reply to a comment

You can reply to all comments made on a product.

1.  In the text field of the comment, reply to the comment
1.  Click on the `Reply` button to save your answer

![comments](Products_Comments.png)

## Delete your comments

You can only delete your own comments.

1.  Place your mouse over the comment to delete
2.  Click on the `Trash` icon which is prompted
3.  Confirm you want to delete the comment by clicking on the `OK` button in the popin
