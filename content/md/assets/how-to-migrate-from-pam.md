---
id: how-to-migrate-from-pam
themes: manage-your-assets
title: How to **migrate** your PAM assets?
popular: true
ee-only: true
related: from-PAM-to-new-AM
---

You would like to migrate on our new 4.0 version and you are using the PAM to manage your digital assets.
The PAM disappeared in 4.0, we replaced it by our brand new asset manager!

But don't worry this step-by-step migration guide is for you! It explains in details how your can migrate your PAM assets to our new 4.0 Asset Manager.

::: warning
Before migrating your PAM assets, the first step is to migrate your PIM in 4.0.
:::

:::info
If you wan't to know the main differences and changes between the PAM and the new Asset Manager features, we strongly recommend to read this article [From PAM to new Asset Manager](from-PAM-to-new-AM.html) before.
:::

# Migrate the PAM assets what does it mean?
Migrate the PAM assets means that the following assets information will be migrated from your existing PAM to the new 4.0 Asset Manager:
- For each asset, its **asset properties** (code, description, tags, end of use at)
- For each asset, its **asset reference files** / binaries (if the asset is localizable, one reference file per locale)
- For each asset, its **asset variations files** / binaries (one variation file per channel for each reference file)
And for each asset, its **links to products and products models** (the asset collection product attributes values) will be kept.

# How can I migrate my PAM assets?
Your PIM is in 4.0 and you want to migrate you PAM assets.

To fit all your needs and use cases, we provide 3 ways to migrate your PAM assets:
1. A [full-automatic migration](full-automatic-pam-migration.html)
2. A [family-by-family migration](family-by-family-pam-migration.html).
3. A full-manual migration

These 3 migration ways used a dedicated tool [CSVToAsset](https://github.com/akeneo/CsvToAsset) we built.

## 1-The full-automatic migration
In this migration, **everything is automated**, you just need to launch one single command and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One asset family will be created gathering all you assets.
- All your assets will be migrated and linked to the new asset family.
- All you existing PAM asset collection product attributes will be linked to the new asset family.
- And all your links between assets and products / product models will be kept.

You want to try this migration, please follow this step-by-step [full-automatic migration guide](full-automatic-pam-migration.html).

## 2-The family-by-family migration
In this migration, you can have **several asset families** for your existing PAM assets.

You will need to define manually 2 things:
- For each asset, its asset family.
- For each asset collection product attribute, the asset family linked.

Other steps are automated, you just need to launch few commands and your PAM assets will be migrated in the 4.0 new Asset Manager:
- The asset families will be created automatically in the PIM.
- All your assets will be migrated and linked to the asset family you defined.
- All you existing PAM asset collection product attributes will be linked to the asset family.
- And all your links between assets and products / product models will be kept.

You want to try this migration, please follow the step-by-step [family-by-family migration guide](family-by-family-pam-migration.html).

## 3-The full-manual migration
In this migration, you will model in the PIM all the asset families you want with their attributes.

# Which migration we advise you?
First, if you want to go fast in this migration, you can use the [full-automatic migration](full-automatic-pam-migration.html) to test if it fits your needs.

If you have more than 1 asset collection product attribute and these attributes are already split by asset family (for example, an asset collection for Images, an asset collection for Notices...), we recommend you the [family-by-family migration](family-by-family-pam-migration.html).

# What are the limits?
## No change on assets links to products
In these 3 migration ways, the assets links to the products are automatically migrated and cannot be modified.

It means that you can't modify the asset links to products and the number of asset collection product attribute.

**Why?** Because links to products are vital and we would like to keep the existing asset product links and do not impact your sales channels with this migration.

 <!--TODO
If you really want to change your asset collection product attribute, you need to do it manually by exporting the products, splitting...
But be careful...-->

# What about my connectors?
**Your connectors that previously import or export your DAM assets need to be updated for the 4.0 new Asset Manager**.

New API endpoints are available and explained on our [API documentation of the Asset Manager](https://api.akeneo.com/documentation/asset-manager.html).
