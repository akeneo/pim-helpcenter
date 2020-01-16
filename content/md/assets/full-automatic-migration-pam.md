---
id: full-automatic-migration-pam
title: The **full-automatic** migration guide for PAM assets
popular: false
ee-only: true
related: from-PAM-to-new-AM, how-to-migrate-from-pam
---

# What's the full-automatic migration
In this migration, everything is automated, you just need to launch few commands and your PAM assets will be migrated in the 4.0 new Asset Manager:
- One asset family will be created gathering all you assets.
- All your assets will be migrated and linked to the asset family.
- All you existing PAM asset collection product attributes will be linked to the asset family.
- And all your links between assets and products / product model will be kept.

# What's my asset family gonna look like?
The asset family created will contain the following attributes:
- `reference`: media file attribute (used as attribute as main media) containing the reference file of the asset if the asset was localizable in the PAM
- `variation_scopable`: scopable media file attribute containing the asset variation file for each scope
- `reference_localizable`: a localizable media file attribute containing the reference file of the asset if the asset was localizable in the PAM
- `variation_scopable_localizable`: scopable & localizable media file attribute containing the asset variation file for each scope and locale
- `description`: text attribute with the asset description
- `categories`: text attribute with the asset categories (categories are separated by a comma)
- `tags`: text attribute with the asset tags (tags are separated by a comma)
- `end_of_used`: text attribute with the asset end of use date

During the migration, you will be able to choose the asset family code.

![PAM assets family](pam-assets-family.png)

# What's my asset gonna look like?

![PAM asset](pam-asset.png)


# What are the steps to migrate?
This part is a bit technical.

## _Step 1_ | Export the PAM assets
First, we need to export your PAM assets with all their data (properties, reference and variation files).
To do so, in the PIM:
1. Run `export-pam-assets`
2. Put the CSV files in `tmp` folder.

## _Step 2_ | Create the API credentials
Then, the API will be used to create the asset family and your assets in the new Asset Manager.
To create the API credentials in the PIM :
1. Run `create-api-credentials`
2. And store the API credentials

## _Step 3_ | Import the PAM assets
To import the PAM assets, you can use our dedicated tool CSVToAsset with the CSV files and the API credentials.
In the CSVToAsset tool:
1. Run `make migration` and a default asset family code for your family in the new Asset Manager
2. Run `create asset family`
3. Run `merge 2 CSV files in 1`
4. Run `import assets into the PIM through API`

## _Step 4_ | Migrate the PAM asset collection product attributes
The PAM asset collection product attributes will be linked to the family created.
In the PIM:
- Run `migrate-pam-attributes` command

## _Step 5_ | Check and test the migration
Yeah, well done, your assets are successfully migrated to the new Asset Manager. But we strongly recommend you to make some checks and tests to verify that everything is ok and discover more our new Asset Manager.

To view all your assets:
1. Go to the `Assets` menu
1. Your asset family will be selected by default and all your assets will automatically appear in the grid
1. You can search for an asset or display an asset by clicking on it
If you want to go further, please read this article [Create and display assets](create-and-display-assets.html).

To view how is structured your asset family:
1. Go the `Assets` menu`
1. Click on the button `Edit family` at the top right of the grid
1. View the family attributes in `Attributes` tab, you can translate the attributes labels for each locale
1. View the family properties in `Properties` tab, you can translate the family labels for each locale

If you want to go further, please read this article [Manage asset families](manage-asset-families.html)

To view the assets linked to a product:
1. Click on a product on the product grid
1. Click on the `Assets` tab, all the assets linked to this product will be displayed
If you want to go further, please read this article [Work with asset in an asset collection atribute](work-with-assets-in-an-asset-collection-attribute-ee-only.html).

## _Step 6_ | Set transformations (optional)
In the new Asset Manager, transformations are no more mandatory. So if you used before fake transformations (100% or 99%), you don't need anymore to set transformations.

If you were using some real transformations in the PAM, the variations of the assets are migrated during the step 3 but the transformations settings are not migrated.

So you need to set transformations rules in the new Asset Manager.
The transformations are no more defined by channels, there are defined by asst family and you can define until 10 transformations per asset family.
The format is bit different but don't worry, hereafter an example before / after.

To know more about our powerful transformations, please read this article [About the asset transformations](assets-transformation.html).
