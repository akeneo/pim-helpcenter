---
id: full-automatic-pam-migration
title: The **full-automatic** migration for PAM assets
popular: false
ee-only: true
related: from-PAM-to-new-AM, pam-migration-guide
---

# What's the full-automatic migration?
In this migration, **everything is automated**, you just need to launch one single command and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One `asset family` will be created gathering all your assets.
- All your assets will be migrated and linked to the new asset family.
- All your existing PAM `assets collection` product attributes will be linked to the new asset family.
- And all your links between assets and products / product models will be kept.

# When do you advise to use it?
We provide this migration strategy as the simplest and easiest strategy, but we advise you to take a look at the other migration strategies: [family-by-family migration guide](family-by-family-pam-migration.html).

We advise you this migration if you have a simple usage of our former PAM:
- All your assets have the same type (for example, you manage only images) because all assets will be gathered in a single asset family.
- AND you have only one or few PAM asset collection product attributes,
:::

# What will my asset family look like?
The asset family that will be created could contain the following attributes:
- `reference` (*media_file attribute*): containing the reference file of the PAM asset. This `reference` attribute is used `as main media` for this family.
- `reference_localizable` (*media_file attribute*): an attribute with a value per locale containing the reference file of the asset for each locale, if the asset was localizable in the PAM
- `variation_scopable` (*media_file attribute*): an attribute with a value per channel containing the asset variation file for each channel
- `variation_scopable_localizable` (*media_file attribute*): an attribute with a value per channel containing the asset variation file for each channel and locale, if the asset was localizable in the PAM
- `description` (*text attribute*): the PAM asset description
- `categories` (*text or multiple options attribute*): the PAM asset categories (only if you used categories in the PAM)
- `tags` (*text or multiple options attribute*): the PAM asset tags
- `end_of_use` (*text attribute*): the PAM asset end of use date (only if you used the end of use date in the PAM)

During the migration, you will be able to choose the asset family code.

![PAM assets family](pam-assets-family.png)

:::info
If all your assets were not localizable in the PAM, the `reference_localizable` and `variation_scopable_localizable` attributes won't be created in the new asset family.
If all your assets were localizable in the PAM, the `reference` and `variation_scopable` attributes won't be created in the new asset family.
:::

# What will my assets look like?

![PAM asset](pam-asset.png)

# What are the steps to migrate?
4 steps to migrate your PAM assets:
1. Install & Setup the migration tool
1. Launch the PAM assets migration
1. Check and test the assets migration
1. Remove or set transformations (if you want to use or not transformations)

## _Step 1_ | Install & Setup the migration tool
We built a dedicated tool [CSVToAsset](https://github.com/akeneo/CsvToAsset) to migrate your PAM assets to the new Asset Manager.

To install and setup this tool, refer to its [readme file](https://github.com/akeneo/CsvToAsset/blob/master/README.md).

## _Step 2_ | Launch the PAM assets migration
Then, you will launch one single command of the [CSVToAsset](https://github.com/akeneo/CsvToAsset) tool and your PAM assets will be migrated in the 4.0 new Asset Manager.

Run `./bin/migrate.php <family-code> <path-to-ee-installation>`

with:
- `family-code` is the code you choose for your brand new asset family
- `path-to-ee-installation` is the path of your local Enterprise Edition. If you use Docker, this value will be /srv/ee.

This command will automatically:
1. Export the PAM assets in CSV into a temporary folder
1. Create dedicated API credentials
1. Create the `asset family` with the code `family-code`
1. Import the exported assets in the new Asset Manager
1. Migrate the former Akeneo PAM `asset collection` product attributes into new Asset Manager collection product attributes and link them to the newly created asset family

## _Step 3_ | Check and test the assets migration
Yeah, well done, your assets are successfully migrated to the new Asset Manager!

But we strongly recommend you to make some checks and tests to verify that everything is ok. You can also take some time to deep dive into our brand new Asset Manager.

### To view all your assets
1. Go to the `Assets` menu
1. Your asset family will be selected by default and all your assets will automatically appear in the grid
1. You can search for an asset or display an asset by clicking on it

:::info
If you want to go further, please read this article [Create and display assets](create-and-display-assets.html).
:::

### To view your asset family structure
1. Go to the `Assets` menu`
1. Click on the button `Edit family` at the top right of the grid
1. View the family attributes in `Attributes` tab, you can translate the attributes labels for each locale
1. View the family properties in `Properties` tab, you can translate the family labels for each locale

:::info
If you want to go further, please read this article [Manage asset families](manage-asset-families.html).
:::

:::tips
You don't want to have a description, categories, tags or a end of use on your new assets, you can [delete the attribute](manage-asset-families.html#delete-an-attribute) added in the family.
:::

### To view the assets linked to a product
1. Click on a product on the product grid
1. Click on the `Assets` tab, all the assets linked to this product will be displayed

:::info
If you want to go further, please read this article [Work with asset in an asset collection atribute](work-with-assets-in-an-asset-collection-attribute-ee-only.html).
:::

## _Step 4A_ | Remove transformations
In the new Asset Manager, **transformations are not mandatory anymore**.

So if you were used to have fake transformations (resize 100% or 99%) in the PAM in order to keep your reference file as it was, the only thing to do now is to remove the existing variation files migrated.

To do it, you just have to [delete the attribute](manage-asset-families.html#delete-an-attribute)`variation_scopable` and `variation_scopable_localizable` in the family.

And to not define any transformation ;-)

## _Step 4B_ | Set transformations
If you were using some real transformations in the PAM (for example, a `thumbnail` transformation), the variations of the assets will be migrated during the step 2.
But the transformations settings won't be migrated since we totally change the format of the transformations settings.

So you need to set transformations rules in the new Asset Manager.
The transformations are not defined by channels anymore.  They are defined by asset family, and there can be up to 10 transformations per asset family. It means that you can have several transformations for the same channel for example.

The format is a bit different but don't worry, hereafter an example before / after.
<!-- TODO -->

:::info
To know more about our powerful transformations, please read this article [About the asset transformations](assets-transformation.html).
:::

# FAQ
The FAQ is available in the [main article about the asset migration](pam-migration-guide.html#FAQ).
