---
id: full-manual-pam-migration
title: The **fully-manual** migration for PAM assets
popular: false
ee-only: true
related: from-PAM-to-new-AM, pam-migration-guide
---

# What is the fully-manual migration?
In this migration, you can have **several asset families** for your existing PAM assets.

You will structure, directly in the PIM, all the asset families you want with their attributes and you will be able to **control each step of the migration**.

# When do we recommend you this migration?
We recommend you using this migration if:
- You want to **control each step of the process**.
- Your **use case doesn't fit the recommended use cases** of the fully-automatic migration](full-automatic-pam-migration.html) or the [family-by-family migration](family-by-family-pam-migration.html).

# What are the steps to migrate?
9 steps to migrate your PAM assets:
1. Install & Setup the migration tool
1. Export the PAM assets
1. Create your asset families
1. Split your assets file by family
1. Create your API connection
1. Import your PAM Assets
1. Update the former PAM assets collection product attributes
1. Check and test the assets migration
1. Remove or set transformations (if you want to use transformations or not)

## _Step 1_ | Install & Setup the migration tool
We built a dedicated tool [CSVToAsset](https://github.com/akeneo/CsvToAsset) to migrate your PAM assets to the new Asset Manager.

To install and setup this tool, refer to its [readme file](https://github.com/akeneo/CsvToAsset/blob/master/README.md).

## _Step 2_ | Export the PAM assets
First, you need to export your PAM assets in CSV files.

Run `php bin/console pimee:migrate-pam-assets:export-assets <temporary-folder> <path-to-ee-installation>`

with:
- `temporary-folder` the folder to  export your PAM assets CSV files.
- `path-to-ee-installation` is the path of your local Enterprise Edition. If you use Docker, this value will be /srv/ee.

This command will export 2 files, named `<temporary-folder>/assets.csv` and `<temporary-folder>/variations.csv`, each of them containing the assets and the asset variations.

:::info
For more details about this command and its parameters, you can refer to the [CSVToAsset readme file](https://github.com/akeneo/CsvToAsset/blob/master/README.md).
:::

## _Step 3_ | Create your asset families
In this migration, you will model all the asset families you want with their attributes, directly in the PIM.

To help you to create asset families, please read this article [Create an asset family](manage-asset-families.html#create-an-asset-family).

## _Step 4_ | Split your asset file by family
Once you have your  `assets.csv ` file containing all your assets, you will have to split it into several files.

Each file will contain the assets of a unique asset family you created in the previous step with the assets attributes as columns.

Once done, you should have several files like assets_packshots.csv, assets_instructions.csv, assets_videos.csv,...

:::warning
Please keep, on each file, the header of the original `assets.csv`, and keep the same CSV format.
:::

## _Step 5_ | Create your API connection
Create your new connection to be able to use the API. Go to your Enterprise Edition path, then:

Run `php bin/console akeneo:connectivity-connection:create migrations_pam`

Store these credentials into a credentials file containing 4 lines:
- clientId,
- secret,
- username
- and password.

Don't forget to remove this file when you are done importing all your assets.

:::warning
Ensure the role linked to migration_pam connection has the permission to "list channels" to allow the script to work.
:::

To create the API credentials in the PIM :
1. Run `create-api-credentials`
2. And store the API credentials

## _Step 6_ | Import your PAM assets
Now, you will have to migrate your assets family per family.
For each file you created, go to the `CsvToAsset` folder and run the migration process:

Run `php bin/console app:migrate /path/to/assets_yourfamily.csv /path/to/variations.csv --asset-family-code=your-family-code`

This command will automatically import the exported assets in the new Asset Manager.

:::info
For more details about this command and its parameters, you can refer to the [CSVToAsset readme file](https://github.com/akeneo/CsvToAsset/blob/master/README.md).
:::

## _Step 7_ | Update the former PAM asset collection product attributes
Finally, we need to update the PAM `asset collection` product attributes to match the new asset families.

Run `php bin/console pimee:assets:migrate:migrate-pam-attributes `

## _Step 8_ | Check and test the migration
Yeah, well done, your assets are successfully migrated to the new Asset Manager!

But we strongly recommend you to run some checks and tests to make sure that everything is ok. You can also take some time to deep dive into our brand new Asset Manager.

### To view all your assets
1. Go to the `Assets` menu
1. Your asset family will be selected by default and all your assets will automatically appear in the grid
1. You can search for an asset or display an asset by clicking on it

:::info
If you want to go further, please read this article [Create and display assets](create-and-display-assets.html).
:::

### To view your asset family structure
1.  Go to the `Assets` menu`
1. Click on the `Edit family` button on the top right corner of the grid
1. Family attributes are displayed in the `Attributes` tab, you can translate the attributes labels for each locale
1. Family properties are displayed in the `Properties` tab, you can translate the family labels for each locale

:::info
If you want to go further, please read this article [Manage asset families](manage-asset-families.html).
:::

:::tips
You don't want to have a description, categories, tags or an end-of-use date on your new assets, you can [delete the attribute](manage-asset-families.html#delete-an-attribute) added in the family.
:::

### To display the assets linked to a product
1. Click on a product on the product grid
1. Click on the `Assets` tab, all the assets linked to this product will be displayed

:::info
If you want to go further, please read this article [Working with assets in an asset collection atribute](work-with-assets-in-an-asset-collection-attribute-ee-only.html).
:::

## _Step 9A_ | Remove transformations
In the new Asset Manager, **transformations are no longer mandatory**.

So if you were used to having fake transformations (resize 100% or 99%) in the PAM in order to keep your reference file as it was, the only thing to do now is to remove the existing variation files migrated.

To do it, you just have to [delete the attribute](manage-asset-families.html#delete-an-attribute)`variation_scopable` and `variation_scopable_localizable` in the family.

And to not define any transformation ;-)

## _Step 9B_ | Set transformations
If you were using some real transformations in the PAM (for example, a `thumbnail` transformation), the variations of the assets will be migrated during the step 2.
But the transformation settings won't be migrated since we totally changed their format.

So you need to set transformation rules in the new Asset Manager.
The transformations are not defined by channels anymore.  They are defined by asset family, and there can be up to 10 transformations per asset family. It means that you can have several transformations for a single channel for example.

The format is a bit different but don't worry, take a look at this article [About the asset transformations](assets-transformation.html).

:::info
To know more about our powerful transformations, please read this article [About the asset transformations](assets-transformation.html).
:::

# FAQ
The FAQ is available in the [main article about the asset migration](pam-migration-guide.html#FAQ).
