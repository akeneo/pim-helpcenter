---
id: what-about-assets
themes: first-steps, manage-your-assets
title: What about **assets**?
popular: true
ee-only: true
related: manage-assets, enrich-your-assets
---

# Introduction to the new Asset Manager

We truly believe that a product sheet has no real impact without any media. Most of the products sold on the Internet are described with several images, videos, pdf documents, etc.

![Product sheet](../img/Assets_ProductSheet.png)

The Asset Manager is a brand new and more efficient way to manage the assets linked to your products/product models inside the PIM. 🚀

::: warning
This feature is only available in the Enterprise Edition.
:::

The assets of the Asset Manager will be way more powerful than before. They will benefit from 3 major new features:

- the possibility to define a **flexible structure**, thanks to the asset families,
- the possibility to **automatize the link** with your products, thanks to the product link rules,
- the possibility to refer to both **external and internal binaries**, thanks to the media link and the media file attribute types.

Below, you'll find an illustration of this wonderful new feature.

![Asset Manager schema](../img/Assets_AssetManager.svg)

# A bit of vocabulary

## What is an asset family?

An **asset family** gathers a **number of assets** that share a **common attribute structure**. In other words, an asset family can be considered as a template for its assets.

For example, you can create an asset family to manage your videos, images, user instructions... Or if you manage only images, you can define several asset families such as: packshots, details, atmosphere...

## What are the asset attributes?

An asset family is made of **asset attributes**. An asset attribute is a characteristic of an asset for this family. It helps to **describe** and **qualify** an asset. An asset attribute can have a **value per channel and/or per locale**. Unlike the product families, asset attributes are not shared between asset families.

::: info
Note that the `Asset attribute` resource is not the same as the `Attribute` resource, even though they have a lot in common. The first one is used to describe assets, the second one is used to describe products.
:::

There are several types of asset attributes, that will allow you to handle different types of data:

- the **text** attribute,
- the **single and multiple options** attributes,
- the **number** attribute,
- the **media file** attribute,
- the **media link** attribute.

Below are some examples of asset families, along with their asset attributes.

![Asset families](../img/Assets_AssetFamilies.png)

## What is an asset?

An asset is a flexible object that makes it possible to enrich products with images, videos, documents…

An asset must be part of an asset family. That way, it will have its own attributes and lifecycle.

Below is an example of an asset.

![Asset](../img/Assets_Asset.png)

An asset can **hold one or several files**. This comes in pretty handy if, for instance, you want to have one user instruction pdf file per language, aka per locale. It can also be useful if you use the asset [transformations](assets-transformation.html) feature.

## Use assets in your product sheets

Assets can be linked to products and product models, in order to enrich them.
To do so, just create a new `Asset collection` attribute, choose the asset family linked to this attribute, and add this attribute to your product family (more details [here](work-on-a-product.html)).

Thanks to our asset picker, you can easily pick assets of your family to add them in the product form!

::: tips
You can also automate the link between assets and products thanks to the `Product link rule` feature. To know more about this automatic link, you can read [this article](assets-product-link-rules.html).
:::


# Let's create your first assets!

From a single place, in a dedicated `Assets` menu, you can list all the assets of your families. But the first step is to create at least one asset family and define its assets attributes. Then you will be able to add new assets, enrich them and link them to products. Let's go!
1. [Create your 1st asset family](manage-asset-families.html#create-an-asset-family)
1. [Add and enrich its 1st assets](create-and-display-assets.html)
1. [Define a new product attribute to link this asset family to products](manage-your-attributes.html#create-an-attribute)
1. [Link the products to the assets](work-on-a-product.html)
