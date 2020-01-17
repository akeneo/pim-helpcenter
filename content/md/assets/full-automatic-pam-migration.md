---
id: full-automatic-pam-migration
title: The **full-automatic** migration guide for PAM assets
popular: false
ee-only: true
related: from-PAM-to-new-AM, how-to-migrate-from-pam
---

# What's the full-automatic migration?
In this migration, **everything is automated**, you just need to launch one single command and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One asset family will be created gathering all your assets.
- All your assets will be migrated and linked to the new asset family.
- All your existing PAM `assets collection` product attributes will be linked to the new asset family.
- And all your links between assets and products / product models will be kept.

# What will my asset family look like?
The asset family that has been created will contain the following attributes:
- `reference` (*media_file attribute*): containing the reference file of the PAM asset and used as attribute as main media for this family
- `reference_localizable` (*media_file attribute*): an attribute with a value per locale containing the reference file of the asset for each locale, if the asset was localizable in the PAM
- `variation_scopable` (*media_file attribute*): an attribute with a value per channel containing the asset variation file for each channel
- `variation_scopable_localizable` (*media_file attribute*): an attribute with a value per channel containing the asset variation file for each channel and locale, if the asset was localizable in the PAM
- `description` (*text attribute*):  with the PAM asset description
- `categories` (*text attribute*): with the PAM asset categories separated by a comma
- `tags` (*text attribute*): with the PAM asset tags (tags are separated by a comma)
- `end_of_use`: text attribute with the asset end of use date

During the migration, you will be able to choose the asset family code.

![PAM assets family](pam-assets-family.png)

# What will my assets gonna look like?

![PAM asset](pam-asset.png)

# What are the steps to migrate?
Don't be afraid, this part is a bit technical. If you are a Julia, you can ask your IT guy or your integrator to do it.

4 steps to migrate your PAM assets:
1. Install & Setup the migration tool
1. Launch the PAM assets migration
1. Check and test the assets migration
1. Set transformations (*optional*, only if you use real transformations in the PAM)


## _Step 1_ | Install & Setup the migration tool
We built a dedicated tool [CSVToAsset](https://github.com/akeneo/CsvToAsset) to migrate your PAM assets to the new Asset Manager.

To install and setup this tool, refer to its [readme file](https://github.com/akeneo/CsvToAsset/blob/master/README.md).

## _Step 2_ | Launch the PAM assets migration
Then, you will launch one single command of the [CSVToAsset](https://github.com/akeneo/CsvToAsset) tool and your PAM assets will be migrated in the 4.0 new Asset Manager.

Run `./bin/migrate.php <family-code> <path-to-ee-installation>` with the family-code you chose/want for the new asset family

This command will:
1. Export the PAM assets in CSV into a temporary folder
1. Create dedicated API credentials
1. Migrate the assets data:
    - Create a new asset family with the code family-code
    - Export the PAM assets with all their data (properties, reference and variation files) in CSV files
    - Merge the exported Akeneo PAM CSV files in one single file
    - Import the merged file into Akeneo PIM in the new asset format
1. Migrate the former Akeneo PAM product attributes into new Asset product attributes and linked them to the new asset family with the code family-code

## _Step 3_ | Check and test the assets migration
Yeah, well done, your assets are successfully migrated to the new Asset Manager!

But we strongly recommend you to make some checks and tests to verify that everything is ok and discover more our new Asset Manager.

### To view all your assets
1. Go to the `Assets` menu
1. Your asset family will be selected by default and all your assets will automatically appear in the grid
1. You can search for an asset or display an asset by clicking on it

:::info
If you want to go further, please read this article [Create and display assets](create-and-display-assets.html).
:::

### To view how is structured your asset family
1. Go the `Assets` menu`
1. Click on the button `Edit family` at the top right of the grid
1. View the family attributes in `Attributes` tab, you can translate the attributes labels for each locale
1. View the family properties in `Properties` tab, you can translate the family labels for each locale

:::info
If you want to go further, please read this article [Manage asset families](manage-asset-families.html)
:::

### To view the assets linked to a product
1. Click on a product on the product grid
1. Click on the `Assets` tab, all the assets linked to this product will be displayed

:::info
If you want to go further, please read this article [Work with asset in an asset collection atribute](work-with-assets-in-an-asset-collection-attribute-ee-only.html).
:::

## _Step 4_ | Set transformations (*optional*)
In the new Asset Manager, **transformations are no more mandatory**.

So if you used before fake transformations (100% or 99%), you don't need anymore to set transformations.

If you were using some real transformations in the PAM, the variations files of the assets are migrated during the step 2 but the transformations settings are not migrated.

So you need to set transformations rules in the new Asset Manager.
The transformations are no more defined by channels, there are defined by asst family and you can define until 10 transformations per asset family.

The format is bit different but don't worry, hereafter an example before / after.
<!-- TODO -->

:::info
To know more about our powerful transformations, please read this article [About the asset transformations](assets-transformation.html).
:::
