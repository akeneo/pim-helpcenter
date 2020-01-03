---
id: what-about-assets
themes: first-steps, manage-your-assets
title: What about **asset**?
popular: true
ee-only: true
related: manage-assets, enrich-your-assets
---

# Introduction to the new Asset Manager

A product sheet has no real impact without any media, right? That's why we let you manage assets in your Akeneo PIM, in order to add media to your product forms.

Some media can be **shared between different products** (such as the atmosphere images, the user instructions, the legal documents or some commercial videos). This **data can be complex to manage because it has its own attributes** (e.g. a label, a media link, a description...).


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

- the text attribute,
- the single and multiple options attributes,
- the number attribute,
- the media file attribute,
- the media link attribute.

Below are some examples of asset families, along with their asset attributes.

![Asset families](../img/what-about-assets_asset_family.png)

## What is an asset?

An asset is a flexible object that makes it possible to enrich products with images, videos, documents…

An asset must be part of an asset family. That way, it will have its own attributes and lifecycle.

Below are some examples of assets.

![Asset](../img/what-about-assets_asset.png)

An asset can **hold one or several files**. This comes in pretty handy if, for instance, you want to have one user instruction pdf file per language, aka per locale.

:::info
Assets can be linked to products and product models, in order to enrich them. To know more about this link, you can [read](/articles/manage-assets.html#create-an-asse) this section.
:::

# Let's create your first asset family!

From a single place, in a dedicated `Assets` menu, you can create your first asset family, define its assets attributes, enrich its first assets and link them to products. Let's go!
1. [Create your 1st asset family](/articles/manage-reference-entities.html#create-a-reference-entity)
1. [Add and enrich its 1st assets](/articles/enrich-your-reference-entity-records.html)
1. [Define a new product attribute to link this asset family to products](/articles/manage-your-attributes.html#create-an-attribute)
1. [Link the products to the assets](/articles/work-on-a-product.html)
