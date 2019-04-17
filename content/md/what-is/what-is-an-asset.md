---
id: what-is-an-asset
themes: first-steps, akeneo-concepts, manage-your-assets
title: What is an **asset**?
popular: false
ee-only: true
related: assets-transformation, upload-assets, work-with-assets
---

# Definition of an asset

An asset can be an HD image, a video, a PDF installation guide... Any kind of files that can be used to enrich a product in Akeneo.

::: ee
Assets are only available in the Enterprise Edition.
:::

An asset is always `scopable` because you may need asset reference file variations for each channel - for example, a full size image for print and a small image for ecommerce.  
It can also be `localisable`, if you want to have a specific version for the locales enabled in the PIM. For instance, you can have a PDF guide in English, another one in French, another one in German...
Thus, for each asset created, you may have several files attached to it.

![Asset](../img/Settings_What-is-an-asset.svg)

An asset has a unique code which is mandatory, and optional properties:
- One or more reference files,
- One variation (or none) per channel,
- A description,
- An end date of use,
- Some tags (to qualify the asset and find it quickly).

To unleash the power of our Product Asset Manager (PAM), you will need to upload asset transformations for your channels (see our dedicated : [About the asset transformations](assets-transformation.html) so the PIM generates variations based on the reference file.  
Let's say you upload an HD image as a reference file, you can decide to reduce its resolution and/or size for your e-commerce channel, and do the same for the mobile channel. This is what asset transformations are used for.

# Why should I use assets?

There are 2 major benefits when you use the assets to manage the files linked to your products:
- you can easily manage them from one single place,
- you can easily link them to your products.

## One centralized assets library

All the assets are centralized in the PIM in one library called the PAM, the Product Asset Manager. You can find this library under the `Assets` menu. For more information on how to use this feature, we encourage you to take a look at this [article](work-with-assets.html).

The PAM comes in pretty handy when you want to manage and find your assets easily, especially if several teams are working on assets: your technical department for your user manuals, your marketing department for your images,...

## The asset collection attribute

To link your assets to your products, use the asset collection attribute. This attribute allows you to manage several assets for a same product by using only one single attribute.

![Zoom on the asset collection attribute](../img/zoom_asset_collection_attribute.png)

To learn how to use this attribute, it's right [here](work-on-a-product.html#work-with-assets-in-an-asset-collection-attribute-ee-only).

