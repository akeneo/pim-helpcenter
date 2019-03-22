---
id: what-is-an-asset
themes: first-steps, akeneo-concepts, manage-your-assets
title: What is an **asset**?
popular: false
ee-only: true
related: assets-transformation, upload-assets, work-with-assets
---

# Definition of an asset

You will use an asset whenever you want to enrich your products with files. These files can be, for example, pictures or user manuals of your products.

::: ee
This feature is only available in the Entreprise Edition.
:::

One asset is composed of several files depending on if you need a different version of this asset for each of your locales or channels.

![Asset](../img/Settings_What-is-an-asset.svg)

An asset has a unique code which is mandatory and optional properties :
- A set of files: one or several reference files and their variations per channel,
- A description,
- An end date of use,
- Some tags (to qualify the asset and find it quickly).

As stated above, an asset can be localizable. In this case, you will have as many reference files than activated locales. It is very useful when you need, for example, one PDF file for your manual in English and another one in French.

To finish, you can define different transformations of these assets according to your channel needs, i.e. a picture with different sizes depending on the channels. To learn more about these transformations, you can go [here](assets-transformation.html).

# Why should I use assets?

There are 2 major benefits when you use the assets to manage the files linked to your products:
- you can easily manage them from one single place,
- you can easily link them to your products.

## One centralized assets library

All the assets are centralized in the PIM in one library called the PAM, the Product Asset Manager. You can find this library under the `Assets` menu. For more information on how to use this feature, we encourage you to take a look at this [article](work-with-assets.html).

The PAM comes pretty handy when you want to manage and find your assets easily, especially if several of your teams will work on assets: your technical department for your user manuals, your marketing department for your images,...).

## The asset collection attribute

To link your assets to your product, you use the attribute called the asset collection attribute. This attribute allows you to manage several assets for a same product by using only one single attribute.

![Zoom on the asset collection attribute](../img/zoom_asset_collection_attribute.png)

To learn how to use this attribute, it's right [here](work-on-a-product.html#work-with-assets-in-an-asset-collection-attribute-ee-only).

