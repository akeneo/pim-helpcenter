---
id: work-on-your-assets
themes: manage-your-assets
title: "Work on your **assets**"
popular: false
ee: right
related: create-and-display-assets
---

# Enrich your assets
## Enrich a single asset
Once you have created your asset, you can enrich it.
It's pretty straightforward, you just have to go to an asset and add/change the values you want.  

Let's take an example.

You are in your `images` asset family, in the `Trent packshot 1` asset. You want to add the **image file**, a **short description**, and some **tags**. To do that, the only prerequisite is to create those 3 attributes in your `images` asset family. Then, you can add all the content you want in these attributes :wink:

:::tips
If you don't remember how to add attributes to your asset family, you can read [this article](#manage-asset-families.html###Add-an-attribute).
:::

![Asset Form](../img/Assets_AssetForm.png)

As you can see, the screen is divided into 2 parts. On the left, you retrieve all your asset attributes, that you can easily enrich. On the right, we display the main media of your asset and the product(s) linked to this asset.

:::tips
You can easily download and display in full screen the main media thanks to the two buttons on the top right of the `main media preview` section.
:::

As for a product, you can define if you want a **different content according to channels**, and the same applies on **locales**.
You can find a **locale and channel switcher** on each asset, meaning that if you need to translate values for example, you can do it simply switching from a locale to another.

![Assets Locale Switcher](../img/Assets_LocaleSwitcher.png)

## Bulk edit multiple assets
If you have the `Edit` permission on an asset family, you can bulk edit attributes from one or more assets from the same asset family.

Let's imagine you need to add a tag to several assets from the same family, this tag will give information on the main color of the image, and this color is the same for all your selected assets. Instead of manually adding the tag for each of these assets, you can easily do it in one action for your selection of assets, thanks to a bulk edition. Here's how to do so:

1. Check the box under each asset you want to bulk edit
1. In the bottom bar, click on `Edit`
1. In the bulk edit pop-in, click on `Add attributes` in the top-right menu
![Asset attributes selection](../img/Assets_bulk-edit-add-attributes.png)
1. Select the attributes you want to bulk edit
![Asset attributes selection](../img/Assets_bulk-edit-attributes-selection.png)
1. Fill in the values you want for each selected attribute
1. Once you are done, click on `Next` in the top-right corner
1. You can then review the changes that will be made. If you want to continue, click on `Confirm`

::: warning
Please note that it is possible to add the same attribute multiple times. For instance, if you want to edit an attribute that has a different value per channel and/or per locale, you have the possibility to do so by adding the attribute as many times as you want. However, you have to carefully select a different locale and/or channel for each of them, so that you will avoid setting different values for the same attribute with the same locale and/or channel.

:::

::: info
The attributes configured as "read-only in the UI" and those used as target attributes for an asset transformation cannot be edited in bulk. Read our article to learn more about [transformations and target attributes](https://help.akeneo.com/pim/serenity/articles/assets-transformation.html).
:::


# Display the products linked to an asset
You can see at a glance the products that are linked to an asset, directly in the asset edit form, in the `Linked products` section.

![Assets Display Products](../img/Assets_LinkedProducts.png)

In our example, the asset named `Trent packshot 1` is linked to only one product named `Trent` thanks to the asset collection `Images`. You can click on the product thumbnail to open the product edit form.

In the `Linked products` section, the first 10 products linked to the asset (for the selected product attribute) are displayed as well as the total number of products linked ("xx results").

If more than 10 products are linked to the asset, a message is displayed after the last products:

![Assets Display All Products](../img/Assets_DisplayProductsMessage.png)

If you want to display all the products linked to an asset, you just have to click on the `View all products` button, it will open the product grid with a filter on the product attribute linked and the asset value (for example `Trent packshot 1`)
Then, from the product grid, you can search and launch enrichment actions on these products.

::: info
If no products are displayed in the `Linked products` section, there are two possible reasons:
1. Your asset family is not linked to a product attribute, so you first have to [create a new product attribute](manage-your-attributes.html#create-an-attribute) linked to the asset family.
1. The selected product attribute doesn't have any product linked to the asset. You first have to link products to the asset.
:::

::: info
If the `View all products` button is not displayed, [check that the product attribute](manage-your-attributes.html#edit-attribute-properties) is set as `usable in grid`.
:::

# Follow the assets completeness

Like for products, we calculate completeness on assets.

In the assets, several indicators show you the status of your completeness and which attributes are missing.
- **Yellow bullet points** in front of each missing required attribute, showing that you have to complete this attribute to improve the completeness.
- The **completeness percentage** in the header of the asset informs you of the completeness level.   

![Assets Completeness](../img/Assets_AssetCompleteness.png)

You also have the completeness indicator directly on the asset thumbnail in the library.

The completeness is **automatically calculated** as soon as we enrich a required attribute. It means that the bullet point will disappear as soon as the required attribute is filled, and same for the completeness percentage evolution.

# Delete assets
## Delete an asset
You can delete an asset or all the assets of an asset family.
 To delete an asset, click on the asset, then on the `...` button at the top right corner of the header, and `delete`.

![Assets Deletion](../img/Assets_Deletion.png)

## Delete a selection of assets
It is possible to delete your own selection of assets.
1. Check the box under each asset you would like to delete
1. In the bar at the bottom, click on `delete`
1. In the confirmation popin, type in the name of the asset family and click on `delete`

:::warning
Please note that if you change any filter afterward, this asset selection will be reset.
:::

::: tips
In the bottom bar, checking the box allows you to select all assets or none in one click! This way, you are able to mass delete all the assets very easily :wink:.
:::

![Assets Mass Deletion](../img/Assets_Mass-delete-assets.png)

::: warning
To delete all the assets of an asset family, you **need to check that no asset of this family is linked to a product or a product model**. Otherwise you will not be able to delete them.
:::
