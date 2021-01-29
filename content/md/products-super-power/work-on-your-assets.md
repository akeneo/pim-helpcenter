---
id: work-on-your-assets
themes: manage-your-assets
title: "Work on your **assets**"
popular: false
ee-only: right
related: create-and-display-assets
---

# Enrich an asset
Once you have created your asset, you can enrich it in order to add some information.
Nothing simpler: just go on an asset and add/change the values you want.  

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
* Select your asset family in the left panel
* Choose the filters to display the assets
* Check the box under each asset you would like to delete
* In the bar at the bottom, click on `delete`
* In the confirmation popin, type in the name of the asset family and click on `delete`

::: tips
In the bottom bar, checking the box lets you select all assets or none in one click!
:::

![Assets Mass Deletion](../img/Assets_Mass-delete-assets.png)


## Delete all the assets
To delete all the assets of a family, click on the `...` button at the top right corner of the header's asset library, then `delete all assets`.

![Delete All Assets](../img/Assets_DeleteAllAssets.png)

::: tips
To delete all the assets of an asset family, you **need to check that no asset of this family is linked to a product or a product model**. Otherwise you will not be able to delete them.
:::
