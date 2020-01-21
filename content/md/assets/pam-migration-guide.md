---
id: pam-migration-guide
title: The **migration guide** to migrate your PAM assets in 4.0
popular: true
ee-only: true
related: from-PAM-to-new-AM
---

# Introduction
## Who is this migration guide for?
This step-by-step migration guide is for you if:
1) You are **integrator of an Akeneo PIM project** **OR** you belong to the **IT department** of a customer using Akeneo PIM.
2) **AND** You would like to **migrate to 4.0 a PIM project that uses the PAM to manage its digital assets**.

## Why an asset migration is required in 4.0?
In 4.0, we released a brand new asset manager, with a **new flexible structure** to model and enrich you assets.
This new structure is no longer compatible with the non-structured assets in our previous Product Asset Manager (PAM).

And **the PAM disappears in 4.0**, so if you want to continue to use assets in 4.0, an asset migration is needed.

But don't worry this migration guide is here to explain in details how you can migrate your PAM assets to our new 4.0 Asset Manager and walk you through this migration step by step.

:::info
If you want to know the main differences and changes between the PAM and the new Asset Manager features, we strongly recommend that you read this article [From PAM to new Asset Manager](from-PAM-to-new-AM.html) before.
:::

## "Migrate the PAM assets": what does it mean?
Migrating the PAM assets means that the following assets information will be migrated from your existing PAM to the new 4.0 Asset Manager:
- For each asset, its **asset properties** (code, description, tags, end of use at)
- For each asset, its **asset reference files** / binaries (if the asset is localizable, one reference file per locale)
- For each asset, its **asset variations files** / binaries (one variation file per channel for each reference file)

And for each asset, its **links to products and products models** (the `asset collection` product attributes values) will be kept.

## What about my connectors?
The existing PAM API endpoints are deprecated.

**So your connectors that previously imported or exported your PAM assets need to be updated to fit our new 4.0 asset structure.**

:::info
New API endpoints are available and explained on our [API documentation of the Asset Manager](https://api.akeneo.com/documentation/asset-manager.html).
:::

# How can I migrate my PAM assets?
::: warning
Before migrating your PAM assets, the first step is to migrate your PIM in 4.0.
:::

Your PIM is in 4.0 and you want to migrate your PAM assets?

To fit all your needs and use cases, we provide 3 paths to migrate your PAM assets:
1. A [full-automatic migration](full-automatic-pam-migration.html)
2. A [family-by-family migration](family-by-family-pam-migration.html)
3. A full-manual migration

To sum up, for these 3 migration paths, the migration steps are common but are more or less automated:
1. Export the PAM assets in CSV files
2. Create the `asset families` in the 4.0 Asset Manager
3. Import the PAM assets CSV files in the new 4.0 asset format
4. Migrate the former Akeneo PAM `asset collection` product attributes into new 4.0 Asset Manager collection product attributes and link them to the asset families

:::info
To ease this migration, we built a dedicated migration tool for assets: [CSVToAsset](https://github.com/akeneo/CsvToAsset).
:::

::: warning
During the asset migration, you should not use the PIM.
:::

## 1-The full-automatic migration
In this migration, **everything is automated**, you just need to launch one single command and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One `asset family` will be created automatically gathering all your assets.
- All your assets will be migrated and linked to the new asset family.
- All your existing PAM `asset collection` product attributes will be linked to the new asset family.
- And all your links between assets and products / product models will be kept.

If you want to try this migration, please follow this step-by-step [full-automatic migration guide](full-automatic-pam-migration.html).

::: tips
We provide this migration path as the simplest and easiest path, but we advise you to take a look at the other migration paths.
:::

::: tips
We advise you this migration if you have only one PAM asset collection product attribute and all your assets have the same type (for example, you manage only images).
:::

## 2-The family-by-family migration
In this migration, you can have **several asset families** for your existing PAM assets.

You will need to manually define 2 things:
- For each asset, its `asset family`.
- For each `asset collection` product attribute, the linked asset family.

Other steps are automated, you just need to launch a few commands and your PAM assets will be migrated in the 4.0 new Asset Manager:
- The `asset families` will be automatically created in the PIM.
- All your assets will be migrated and linked to the asset family you defined.
- All your existing PAM `asset collection` product attributes will be linked to the asset family.
- And all your links between assets and products / product models will be kept.

You want to try this migration, please follow the step-by-step [family-by-family migration guide](family-by-family-pam-migration.html).

::: tips
We advise you this migration if you have several PAM asset collection product attributes and each asset collection contains only a type of assets (for example, images or PDF files).
:::

## 3-The full-manual migration
In this migration, you will model in the PIM all the asset families you want with their attributes.

## What are the migration constraints?
### No change on asset links to products
In these 3 migration paths, we keep the existing asset/product links, they are automatically migrated and cannot be modified.

It means that with the asset migration:
- You can't modify the links between assets and products.
- You can't change the number of PAM `asset collection` product attributes (For example, if you had 3 PAM asset collection product attributes, you will have 3 asset collection product attributes in 4.0).
- You can't update the code of these asset collection product attributes.

**Why?** Because the links between assets and products are vital, they are exported to your sales channels. So we want to keep them as they are to have the least possible impact on your channels.


# FAQ
## I have only one asset collection attribute in the PAM, how can I migrate my assets?
If you have only one PAM asset collection product attribute and all your assets have the same type (for example, you manage only images), we recommend you to use the [full-automatic migration](full-automatic-pam-migration.html) to migrate your assets.
They will me migrated in a single new asset family.

## I have several asset collection attributes in the PAM and each asset collection contains a type of assets (images, PDF...), how can I migrate my assets?
In this case, we recommend you to use the [family-by-family migration](family-by-family-pam-migration.html).

Several families will be created automatically and you will have to define in which families your assets are linked.

## I don't have a lot of time to spend on migration
If you want to go fast in this asset migration, you can first use the [full-automatic migration](full-automatic-pam-migration.html) to test if it fits your needs.

And if it doesn't, you can take a look at the other migration paths.

## I used fake transformations in the PAM and I don't want to use them anymore
In the new Asset Manager, transformations are no longer mandatory.

So if you don't want to use it, you don't have to set a transformation.

But as transformations were mandatory in the PAM, during the migration, we migrated your assets variations files.
If you don't use them, you can remove them (refer to this step in each migration path).

## I would like to migrate my asset connectors
The existing PAM API endpoints are deprecated.

So your connectors that previously imported or exported your PAM assets need to be updated to fit our new 4.0 asset structure.

New API endpoints are available and explained on our [API documentation of the Asset Manager](https://api.akeneo.com/documentation/asset-manager.html).
