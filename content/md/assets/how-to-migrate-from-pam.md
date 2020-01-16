---
id: how-to-migrate-from-pam
themes: manage-your-assets
title: How to **migrate** your PAM assets?
popular: true
ee-only: true
related: from-PAM-to-new-AM
---

You would like to migrate on our new 4.0 version and you are using the PAM to manage your digital assets, the PAM disappeared in 4.0, we replaced it by our brand new asset manager! But don't worry this guide is for you! It explains how your PAM assets can be migrated to our new 4.0 Asset Manager.

First, if you wan't to know, the main differences and changes between the PAM and the new Asset Manager in 4.0, we strongly recommend to read this article [From PAM to new Asset Manager](from-PAM-to-new-AM.html) before.

# Migrate the PAM assets what does it mean?
It means that the following assets information will be migrated from your existing PAM to the new 4.0 Asset Manager:
- The **asset properties** (code, description, tags, end of use at)
- The **asset reference files** (reference file / binary)
- The **asset transformations files** (variations / binaries)
- The **asset links to products and products models**

# How can I migrate my PAM assets?
To fit all your needs and use cases, we provide 3 ways to migrate your PAM assets:
1. A full-automatic migration
2. A family-by-family migration
3. A full-manual migration

## The full-automatic migration
In this migration, everything is automated, you just need to launch few commands and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One asset family will be created gathering all you assets.
- All your assets will be migrated and linked to the asset family.
- All you existing PAM asset collection product attributes will be linked to the asset family.
- And all your links between assets and products / product models will be kept.

You want to try this migration, please follow the step-by-step [Full-automatic migration guide](full-automatic-pam-migrationp.html).

## The family-by-family migration
In this migration, you can create several asset families for your PAM assets.
You will need to define manually 2 things:
- For each asset its asset family.
- For each asset collection product attribute, the asset family linked.

Other steps are automated, you just need to launch few commands and your PAM assets will be migrated in the 4.0 new Asset Manager:
- The asset families will be created automatically in the PIM.
- All your assets will be migrated and linked to the asset family you defined.
- All you existing PAM asset collection product attributes will be linked to the asset family.
- And all your links between assets and products / product models will be kept.

You want to try this migration, please follow the step-by-step [Family-by-family migration guide](family-by-family-pam-migration.html).

## The full-manual migration
In this migration, you will model in the PIM all the asset families you want with their attributes. 

## Which migration we advise you?
First, if you want to go fast in this migration, you can use the full-automatic migration to test it.


## What are the limits?
In these 3 migration scenarii, the assets links to the products are automatically migrated and cannot be modified. It means that you can't modify the asset links to products and the number of asset collection product attribute.
Why? Because we would like to keep the existing asset product links and do not impact your sales channels with this migration.

If you really want to change your asset collection product attribute, you need to do it manually by exporting the products, splitting...
But be careful...

## What about my connectors?
Your connectors that previously import or export assets need to be updated for the 4.0 new Asset Manager.
New API endpoints are available and explained on our API documentation.
