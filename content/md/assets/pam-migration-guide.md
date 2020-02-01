---
id: pam-migration-guide
title: The **migration guide** to migrate your PAM assets in 4.0
popular: false
ee-only: true
related: from-PAM-to-new-AM
---

# Introduction
## Who is this migration guide for?
This step-by-step migration guide is for you if:
1) You are **an integrator for an Akeneo PIM project** **OR** you belong to the **IT department** of a customer using Akeneo PIM.
2) **AND** You would like to **migrate to a 4.0 a PIM project that uses the PAM to manage its digital assets**.
So if you are a PAM user, you can ask your IT department or your integrator to read it.

## Why is an asset migration required in the 4.0?
In the 4.0, we released a brand new asset manager, with a **new flexible structure** to model and enrich you assets.

This new structure is no longer compatible with the non-structured assets in our previous Product Asset Manager (PAM).

And **the PAM disappears in 4.0**, so if you want to continue to use assets in the 4.0, an asset migration is needed.

But don't worry this migration guide is here to explain, in details, how you can migrate your PAM assets to our new 4.0 Asset Manager and walk you through this migration step by step.

:::info
If you want to know the main differences and changes between the PAM and the new Asset Manager features, we strongly recommend that you read this article [From PAM to new Asset Manager](from-PAM-to-new-AM.html) before.
:::

## "Migrating the PAM assets": what does it mean?
Migrating the PAM assets means that the following asset information will be migrated from your existing PAM to the new 4.0 Asset Manager:
- For each asset, its **asset properties** (code, description, tags, end of use at)
- For each asset, its **asset reference files** / binaries (if the asset is localizable, one reference file per locale)
- For each asset, its **asset variations files** / binaries (one variation file per channel for each reference file)

And for each asset, its **links to products and product models** (the `asset collection` product attributes values) will be kept.

## What about my connectors?
The existing PAM API endpoints have been deprecated in 3.2 and removed in 4.0.

**So your connectors that previously imported or exported your PAM assets need to be updated to fit our new 4.0 asset structure.**

If you use an Akeneo premium connector (with Magento or Salesforce Ecommerce cloud), they will be soon compatible with the new Asset Manager.

:::info
New API endpoints are available and explained on our [API documentation of the Asset Manager](https://api.akeneo.com/documentation/asset-manager.html).
:::

# How can I migrate my PAM assets?
::: warning
Before migrating your PAM assets, **the first step is to migrate your PIM to a 4.0 version**.
:::

Your PIM is in 4.0 and you want to migrate your PAM assets?

To fit all your needs and use cases, we provide 3 strategies to migrate your PAM assets:
1. A [fully-automatic migration](full-automatic-pam-migration.html)
2. A [family-by-family migration](family-by-family-pam-migration.html)
3. A [fully-manual migration](full-manual-pam-migration.html)

:::tips
Please read the different strategies we provide to find the one which will match your needs.
:::

To sum up, for these 3 migration strategies, the migration steps are common but are more or less automated:
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

## 1-The fully-automatic migration
::: info
We provide this migration strategy as the simplest and easiest strategy, but we recommend you to take a look at the other migration strategies.
:::

::: tips
We recommend you using this migration if you have a simple usage of our former PAM and you only have one type of asset (for example, you manage only images) because all assets will be gathered in a single asset family.
:::

In this migration, you will have **a  single asset family** to gather all your existing PAM assets.

**Everything is automated**, you just need to launch one single command and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One `asset family` will be created automatically gathering all your assets.
- All your assets will be migrated and linked to the new asset family.
- All your existing PAM `asset collection` product attributes will be linked to the new asset family.
- And all your links between assets and products / product models will be kept.

If you want to try this migration, please follow this step-by-step [fully-automatic migration guide](full-automatic-pam-migration.html).

## 2-The family-by-family migration
::: tips
We recommend you using this migration if:
- You have assets of **different types** (for example, you manage images, PDF files, videos).
- AND each asset collection contains only one single type of asset (for example, images or PDF files) because each asset collection will then be linked to a single asset family.
:::

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

## 3-The fully-manual migration
::: tips
We recommend you using this migration if:
- You want to control each step of the migration.
- Your use case doesn't fit the recommended use cases of the "fully-automatic migration" or "family-by-family migration".
:::

In this migration, you can have **several asset families** for your existing PAM assets.

You will structure, directly in the PIM, all the asset families you want with their attributes and you will be able to **control each step of the migration**.

You want to try this migration, please follow the step-by-step [fully-manual migration guide](full-manual-pam-migration.html).

## What are the migration constraints?
### No change on asset links to products
:::warning
In these 3 migration strategies, we keep the existing asset/product links, they are automatically migrated and cannot be modified.
:::

It means that with the asset migration:
- You can't modify the links between assets and products.
- You can't change the number of PAM `asset collection` product attributes (For example, if you had 3 PAM asset collection product attributes, you will have 3 asset collection product attributes in 4.0).
- You can't update the code of these asset collection product attributes.

**Why?** Because the **links between assets and products are vital**, they are exported to your sales channels. So we want to keep them as they must have the slightest impact on your channels.


# FAQ
## I have only one asset collection attribute in the PAM, how can I migrate my assets?
If you have only one PAM asset collection product attribute and all your assets have the same format (for example, you manage only images), we recommend you to use the [fully-automatic migration](full-automatic-pam-migration.html) to migrate your assets.

They will be migrated to a single new asset family.

## I have several asset collection attributes in the PAM and each asset collection contains a type of assets (images, PDF...), how can I migrate my assets?
In this case, we recommend you to use the [family-by-family migration](family-by-family-pam-migration.html).

Several families will be created automatically and you will have to define to which family your assets will belong.

## I don't have a lot of time to spend on a migration
If you want to go fast in this asset migration, you can first use the [fully-automatic migration](full-automatic-pam-migration.html) to test if it fits your needs.

And if it doesn't fit your needs, you can take a look at the other migration strategies: [family-by-family migration](family-by-family-pam-migration.html) or [fully-manual migration guide](full-manual-pam-migration.html).

## I want to control each step of the migration
Please follow the step-by-step [fully-manual migration guide](full-manual-pam-migration.html).

## I would like to migrate my asset connectors
The existing PAM API endpoints have been deprecated in 3.2 and removed in 4.0.

So your connectors that previously imported or exported your PAM assets need to be updated to fit our new 4.0 asset structure.

If you use an Akeneo premium connector (with Magento or Salesforce Ecommerce cloud), they will be soon compatible with the new Asset Manager.

:::info
New API endpoints are available and explained in our [API documentation of the Asset Manager](https://api.akeneo.com/documentation/asset-manager.html).
:::

## What about my PAM categories?
If you use `categories` in the PAM, they will be migrated.

The categories which have assets classified will be the only ones migrated.

In the new asset family created, `categories` attribute will be a text or a multiple option attribute:
- If you have less than 100 categories for this family, it will be a multiple options attribute. You can use it as a filter to search your assets.
- If you have more than 100 categories for this family, it will be a text attribute (categories are separated by a comma). You can use the full text search to search assets in it.

If you have several new asset families, categories won't be shared between the different families.

## What about my PAM tags?
If you use `tags` in the PAM, they will be migrated.

In the new asset family created, `tags` attribute will be a text or a multiple options attribute:
- If you have less than 100 tags for this family, it will be a multiple options attribute. You can use it as a filter to search your assets.
- If you have more than 100 tags for this family, it will be a text attribute (tags are separated by a comma). You can use the full text search to search assets in it.

If you have several new asset families, tags won't be shared between the different families.

## I used artificial transformations in the PAM
In the new Asset Manager, transformations are no longer mandatory (and are also more powerful).

So if you don't want to use transformations, you don't have to set a transformation.

But as transformations were mandatory in the PAM, during the migration, we migrated your assets variations files.
If you don't use them, you can remove them (refer to this step in each migration strategy).

:::info
If you want to know all the possibilities of our new flexible transformations, you can read this article [About the assets transformations](assets-transformation.html).
:::
