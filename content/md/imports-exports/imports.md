---
id: imports
themes: import-export-data, catalog-settings
title: "**Import** your data"
popular: false
ee: false
related: monitor-jobs, access-rights-on-imports-exports, exports
---

# Overview

Importing data is pretty convenient especially if you want to update your catalog with external sources: vendors, ERP, etc.

When importing data, Akeneo PIM extracts the data from the file and converts them to save in the PIM.

::: info
The imports accept two types of files: CSV and XLSX.  
Imports are limited to 512 MB per file.
:::

You can import product data, but also catalog entities such as the families, the categories, the attributes...

::: warning
Please note that Akeneo PIM is not case-sensitive. As an example, if you want to import two products with the following identifiers "A238B" and "A238b", they will be skipped as the PIM doesn't differentiate the uppercase "B" from the lowercase "b", and thus will not be able to import them.
:::

## Steps of an import
File import process is really simple. It consists of:
1.  Creating an import profile (see below for more information about it)
1.  Building the file, manually or via a third party application
2.  Uploading this file in the PIM or enabling the PIM to fetch this file on a given path (this last option is not available in the Serenity offer)
1.  Launching the CSV or XLSX file import

## What is a import profile?

An import profile allows to perform imports in the PIM. This profile format is based on:
- A code to identify the import profile
- A job to define what will make the import when executing. For instance, is it a product import in XLSX file or a category import in CSV
- A set of configuration fields, available as a form in the PIM. Each import profile can have its own configuration.

# Browse import profiles

To view the available import profiles:
1.  Log in with a user account with permissions to `View the list of profiles` for imports
1.  Go to the `Imports` menu
![image](../img/Imports.png)
1.  To narrow down the list of displayed import profiles, use the available filters above the grid or the search bar that will search on the label

To see the information on a given import profile, click on its row in the grid.
![image](../img/Imports_Imports2.png)

# Create a new import profile

To create a new import profile:
1.  Log in with a user account with `Create an import profile` permissions
1.  Go to the `Imports` menu
1.  Click on `Create import profile`
![image](../img/Imports_CTACreateImportProfile.png)
1.  All fields in the pop-up window must be filled in:
    - A unique code
    - A label to identify the profile more easily
    - A job according to what you wish to import
![image](../img/Imports_CreateImportProfile.png)
1.  Click on `Save` to finalise your import profile creation. The profile page screen is displayed. You can then configure it.

# Update an import profile

To update an import profile:
1.  Log in with a user account
1.  Go to the `Imports` menu
1.  Click on the import profile that needs to be modified
1.  Click on the `Edit` button
1.  Make your changes
1.  Click on `Save` to update the profile

![image](../img/Imports_EditButton.png)

In the `Properties` tab, you can edit the label of your profile.  
In the `Global settings` tab, properties depend on the import job. For example, for the CSV product import, you will find the following properties:

| Property             | Details |
|:---------------------|:--------|
| File path            | Defines the path of the file to import in the case you want the PIM to automatically fetch the file for you _(Not available in Serenity offer)_ |
| Allow file upload        | Allows file upload from the specified file path in the case you want the PIM to automatically fetch the file for you _(Not available in Serenity offer)_ |
| Delimiter            | Defines the character to delimit the fields in the file (semi-colon, comma...) |
| Enclosure   | Defines the character for the field enclosure in the file (“) |
| Decimal separator    | Defines the character used as decimal separator in the imported file (for instance a dot, a comma..) |
| Date format          | Defines the format used for dates in the imported file (for instance yyyy-mm-dd, mm/dd/yyyy...)      |
| Enable the product       | Defines the default status to create a product in Akeneo: <br>- status “enabled” if yes <br>- status “disabled” if no    |
| Categories column        | Defines the column name for categories in the imported file  |
| Family column            | Defines the column name for family in the imported file    |
| Groups column            | Defines the column name for groups in the imported file   |
| Compare values           | Enables the comparison between original values and imported values<br>It can speed up the the import if imported values are very similar to original values |
| Real time history update | Enables the update of the product history<br>It can be switched off to improve performances     |

::: ee
If a user has no rights granted to modify an import profile due to his role(s), then the permissions which he may benefit due to his user group(s) _(EE only)_ will not be applied. For instance, if a user does not have the `Edit profiles of imports` permission, his Enterprise Edition rights to edit a specific import profile will be ignored.
:::

# Import images & files

If you have `Image` and/or `File` attribute types in your families, then you can import their content directly via the product import profile.
To do this:
1. First, [export the relevant product or product models](imports.html#export-the-relevant-products-or-product-models.html) via an archive.
1. Then, [configure the archive](imports.html#configure-the-archive.html) in order to modify the product/product model file by adding your images and/or files.
1. Finally, [import back the new archive](import.html#import-back-the-new-archive) in the PIM.

## Export the relevant products or product models
1. From the left menu, click `Exports`
1. From the top right corner, click `Create`, type a label and a code and select the job `Product export in XLSX` or `product model export in XLSX`
1. Under `Global settings`, switch `Export files and images` to `Yes`
1. Under `Content`, select the relevant `Image` or `File` attributes
1. Save and click `Export`
1. Once the job is finished, click on `Download generated files` and get the archive

## Configure the archive
1. Open the archive you just downloaded
1. Open the `Files` folder
1. Each folder under `Files` corresponds to a product or product model and their names are the SKUs or codes of your product or product models
![Exported products file archive](../img/Exports_archive.png)
1. To add new images or files, click on the relevant folders, open the folders and add your image into each one
1. Once done, open the CSV or XLSX files corresponding to your products or product models
1. Go to the columns corresponding to your image or file attributes
1. Change the filenames of the images or files corresponding to the name of the images of files you added in the previous steps
1. Save your spreadsheet
1. Select simultaneously the spreadsheets and the folder `File` and create an archive

## Import back the new archive
1. From the left menu, click `Imports`
1. Select the export profile named `XLSX product import`
1. Upload your archive and click `Import`

You're done :)

:::warning
You can't import back the archive you just downloaded from the PIM. To learn how to do this, please first read [how to configure it](imports.html#configure-the-archive), then read [how to import it](imports.html#import-back-the-new-archive).
:::

# Duplicate an import profile

If you want to create another import profile based on an existing one, you can duplicate it.
To do this, please follow the steps below:
1. Select the export profile you would like to duplicate
1. Click on `Edit`
1. In the top right corner, click on the three dots "..." and select `Duplicate`
1. Write a label and a code then click on `Save`

# Run an import

## How to
To start an import:
1.  Go to the `Imports` menu to see the list of the import profiles available
1.  Select the import profile you want to execute, then click on the relevant line
1.  The page for the import profile is prompted. Click on the `Import now` button if you want the PIM to fetch the file for you in the path you gave in your profile configuration. Or click on the `Upload a file` button if you want to upload a file by yourself
1.  The page of the import execution is displayed. The page refreshes continually to let know at what stage the import is

When the import ends, a notification is available on the top right corner of the PIM.

![Import process](../img/Imports-ImportProcess.gif)

An email can also be sent depending on your user configuration. For further details on this, please refer to the [Manage your account](manage-your-account.html) article.

## With the user groups rights _(EE only)_

### Rights on the product information
In the case of *product imports*, the PIM takes into account your permissions based on the [user groups](what-is-a-user-group.html) you are in:
- you **own the products** of the `Clothes` category, if you try to import product information for these products, the import will directly update your products
- you **only have an edit rights** on the products that are in the `Audio video` category, if you try to import product information for these products, the import will automatically create draft for you as you cannot direclty update these products
- you **only have a view right** on the products that are in the `Goodies` category, if you try to import product information for these products, the import won't work for these products and you will receive errors saying that you cannot modify these products

If you want to know more about how the rights on product data works in the PIM, take a look to the [Access rights on products](access-rights-on-products.html) article.

### Rights on import execution
The permission to execute imports can be customized for each import profile. So if you cannot launch an import, be sure that you have the right to run it in the `Permissions` tab of your import profile in edition mode. See the [Access rights on imports/exports](access-rights-on-imports-exports.html) article for more details.

# New import processes with the UUID

New import processes have been implemented with the [UUID](https://help.akeneo.com/pim/serenity/articles/manage-product-identifiers.html#manage-your-products-with-the-uuid) being recently introduced as a new way to identify your products.

Please find the following usecases when running imports: 

- *You can create a product with no SKU & no UUID:* a new product will be created and a UUID will be randomly assigned.
- *You can create a product with a SKU and no UUID:* a new product will be created with this SKU and a UUID will be randomly assigned.
- *You can update a product only with its UUID:* the product will be updated even if the SKU is not available.
- *You can update a product only with its SKU:* the product will be updated even if the UUID is not available.
- *You can update the SKU of a product using its UUID:* the product will be updated with a new SKU.
- *You can create a product with my own UUID:* you can generate a v4 UUID anywhere (on this website for ex.) and add it during the product creation process.


::: info
The UUID column is hidden by default. If you want to display this column, [Update your export profile](exports.html#update-an-export-profile) and activate 'With Product UUID' before running your export.
:::


**Here is the table listing all usecases depending on what you fill in the UUID and SKU columns:**

| uuid | sku | family | name-en_US | Result |
| --- | --- | --- | --- | --- |
|  | SKU-ex01 | tshirt | Existing product | Update product having SKU = SKU-ex01 |
|  | SKU-new01 | tshirt | New product | Create product with generated uuid and SKU = SKU-new01 |
|  |  | tshirt | New product | Create product with generated uuid and no SKU |
| uuid-0001 | SKU-ex02 | tshirt | Existing product | Update product having uuid = uuid-0001 |
| uuid-0002 | SKU-new02 | tshirt | New product | Create product with uuid = uuid-0002 and SKU = SKU-new02 |
| uuid-0003 |  | tshirt | Existing product | Update product having uuid = uuid-0003 and no SKU |
| uuid-0004 |  | tshirt | New product | Create product with uuid = uuid-0004 and no SKU |

::: warning
Please note that the UUID can’t be modified once the product is created.
:::
