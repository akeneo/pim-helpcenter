---
id: family-by-family-pam-migration
title: The **family-by-family** migration guide for PAM assets
popular: false
ee-only: true
related: from-PAM-to-new-AM, how-to-migrate-from-pam
---

# What's the family-by-family migration?
In this migration, you can have **several asset families** for your existing PAM assets.

You will need to define manually 2 things:
- For each asset, its asset family.
- For each asset collection product attribute, the asset family linked.

Other steps are automated, you just need to launch few commands and your PAM assets will be migrated in the 4.0 new Asset Manager:
- The asset families will be created automatically in the PIM.
- All your assets will be migrated and linked to the asset family you defined.
- All you existing PAM asset collection product attributes will be linked to the asset family.
- And all your links between assets and products / product models will be kept.

# What will my asset families gonna look like?
The asset family created will contain the following attributes:
- `reference` (*media_file attribute*): containing the reference file of the PAM asset and used as attribute as main media for this family
- `reference_localizable` (*media_file attribute*): an attribute with a value per locale containing the reference file of the asset for each locale, if the asset was localizable in the PAM
- `variation_scopable` (*media_file attribute*): an attribute with a value per channel containing the asset variation file for each channel
- `variation_scopable_localizable` (*media_file attribute*): an attribute with a value per channel containing the asset variation file for each channel and locale, if the asset was localizable in the PAM
- `description` (*text attribute*):  with the PAM asset description
- `categories` (*text attribute*): with the PAM asset categories separated by a comma
- `tags` (*text attribute*): with the PAM asset tags (tags are separated by a comma)
- `end_of_used`: text attribute with the asset end of use date

![PAM assets family](pam-assets-family.png)

# What will my assets gonna look like?

![PAM asset](pam-asset.png)

# What are the steps to migrate?
Don't be afraid, this part is a bit technical. If you are a Julia, you can ask your IT guy or your integrator to do it.

<!-- TOREVIEW

## _Step 1_ | Export the PAM assets
First, we need to export your PAM assets with all their data (properties, reference and variation files) in CSV files.
To do so, in the PIM:
1. Run `export-pam-assets`
2. Put the CSV files in `tmp` folder.

## _Step 2_ | Split the PAM assets family by family
Then, as you want to create several asset families for your assets, you need to split the asset files family by family.

## _Step 3_ | Create the API credentials
Then, the API will be used to create the asset family and your assets in the new Asset Manager.
To create the API credentials in the PIM :
1. Run `create-api-credentials`
2. And store the API credentials

## _Step 4_ | Import the PAM assets
To import the PAM assets for each asset family, you can use our dedicated tool CSVToAsset with the CSV files for this asset family and the API credentials.
In the CSVToAsset tool, for each asset family:
1. Run `make migration` with the chosen asset family code for your family in the new Asset Manager
2. Run `create asset family`
3. Run `merge 2 CSV files in 1`
4. Run `import assets into the PIM through API`

## _Step 5_ | Migrate the PAM asset collection product attributes
The PAM asset collection product attributes will be linked to one of the family created.
In the PIM, for each PAM asset collection product attribute to migrate:
- Run `migrate-pam-attributes` command with the chosen asset family code and the existing attribute code

## _Step 6_ | Check and test the migration
Yeah, well done, your assets are successfully migrated to the new Asset Manager. But we strongly recommend you to make some checks and tests to verify that everything is ok and discover more our new Asset Manager.

To view all your assets:
1. Go to the `Assets` menu
1. Your asset family will be selected by default and all your assets will automatically appear in the grid
1. You can search for an asset or display an asset by clicking on it
If you want to go further, please read this article [Create and display assets](create-and-display-assets.html).

To view how are structured your asset families:
1. Go the `Assets` menu`
1. Choose an asset family on the left
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

To know more about our powerful transformations, please read this article [About the asset transformations](assets-transformation.html). -->
