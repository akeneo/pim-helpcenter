---
id: exports
themes: import-export-data
title: "**Export** your data"
popular: false
ee: false
related: monitor-jobs, product-export-builder, access-rights-on-imports-exports, imports, tailored-export
---

# Overview

This feature allows you to provide your product information to third-parties like e-commerce platforms, mobile applications, suppliers... or more simply, if you want to extract information from the PIM for your own usage.

You have several ways to export your product information:
- You can manually download the export file: you execute the job from the PIM user interface and you download the generated file.
- You automatically send the export file to the third-party, by setting a path in the export profile configuration enabling the PIM to automatically drop the file when executing the command.

When exporting data, Akeneo PIM extracts data from the PIM and converts it into a certain format to a file or directly to a third party application (eg Magento).

::: info
The exports can be done in two formats: CSV and XSLX.
:::

You can export product data, of course, but also catalog entities such as the families, the categories, the attributes...

## Steps of an export
File export process is really simple. It consists in:
1.  Creating an export profile (see below for more information about it)
1.  Launching the CSV or XLSX file export

## What is an export profile?
An export profile allows to perform exports from the PIM. This profile format is based on:
- A code to identify the export profile
- A job to define what will do the export when executing. For instance, a category export in XLSX file or a product export in CSV to a Magento platform
- A set of configuration fields, available as a form in the PIM. Each export profile can have its own configuration.

# Browse your export profiles

To view the available export profiles:
1.  Log in with a user account with permissions to `View the list of profiles` for exports
1.  Go to the `Exports` menu
![image](../img/Exports_Mainpage.png)
1.  To narrow down the list of displayed export profiles, use the available filters above the grid or the search bar that will search on the label

To see the information of an export profile, click on the row in the grid
![image](../img/Exports_Mainpage2.png)

# Create a new export profile

To create a new export profile:
1.  Log in with a user account with `Create an export profile` permissions
1.  Go to the `Exports` menu
1.  Click on `Create export profile`
![image](../img/Exports_MainpageCreateExportProfile.png)
1.  All fields in the pop-up window must be filled in:
    - A unique code
    - A name to identify the profile more easily
    - A job according to what you wish to export
![image](../img/Exports_CreateExportProfile1.png)
1.  Click on `Save` to finalise the export profile creation. The profile page screen is displayed. You can then configure it.

# Update an export profile

To update an export profile:
1.  Connect with a user account
1.  Go to the `Exports` menu
1.  Click on the export profile that needs to be modified
1.  Click on the `Edit` button
1.  Make your changes
1.  Click on `Save` to update the profile

![image](../img/Exports_Edit.png)

In the tab `General properties`, you can edit the label of your profile.  
In the `Global settings` tab, properties depend on the export job. For example, for the CSV product export, you will find the following properties:

![Product export global settings](../img/Exports_Product-Export_global-settings-UUID.png)

| Property            | Details   |
|:--------------------|:----------|
| File path       | Defines where to export the generated file _(not available in Serenity offer)_ |
| Decimal separator  | Defines the character used as decimal separator in the exported file |
| Date format        | Defines the format used for dates in the exported file |
| Delimiter     | Defines the character to delimit the fields in the CSV file _(not available in Serenity offer)_ |
| Enclosure   | Defines the character for the field enclosure in the CSV file _(not available in Serenity offer)_ |
| Number of lines per file | Defines the limit number of lines per file for XSLX export |
| With header             | Defines if the first line of the exported file contains the columns names |
| Export media | If activated, all media (from asset collection, image and file attributes) of the products will be exported. You'll get an archive with the CSV file and a folder with the media |
| Export with labels       | Defines if the export file displays values' labels instead of values' codes |
| Headers with labels*      | Defines if the export file displays headers' labels instead of headers' codes |
| File locale*      | Defines the locale in which labels are displayed |
| With product UUID    | Adds the product UUID in the file as the first column |

*Only visible if the option `Export with labels` has been activated.

::: warning
If you export a file with labels and not codes you won't be able to re-upload it in the PIM afterwards.
:::

:::info
If the asset collection attributes of your products are linked to asset families with a `media link` attribute used as main media, when you export the products, you won't get an archive. You will only export a CSV or an XLSX file with a column containing the url of the media.
:::

In the case of products and published products exports, you will see that there is an additional tab called `Content`. In this tab, you will be able to define precisely which products or published products data you want to export. To find out more about this feature called `Product export builder`, take a look at this article about [Product Export Builder](product-export-builder.html).

::: ee
If a user has no rights granted to modify an export profile due to his role, then the permissions which he may benefit due to his user group(s) _(EE only)_ will not be applied. For instance, if a user does not have the `Edit profiles of exports` permission, his Enterprise Edition rights to edit a specific export profile is ignored.
:::

# Duplicate an export profile

If you want to create another export profile based on an existing one, you can duplicate it.
To do this, please follow the steps below:
1. Select the export profile you would like to duplicate
1. Click on `Edit`
1. In the top right corner, click on the three dots "..." and select `Duplicate`
1. Write a label and a code then click on `Save`

# Run an export

## How to
1.  Go to the `Exports` menu to see the list of available export profiles
1.  Select the export profile to execute, and click on the relevant line
1.  The export profile page is displayed. Click on the `Export now` button
1.  The page of the export execution is prompted. The page refreshes continually to let know at what stage the export is

When the export ends, a notification is available on the top right corner of the PIM.

![image](../img/Exports_ExportProcess.gif)

An email can also be sent depending on your user configuration. For further details on this, please refer to the [Manage your account](manage-your-account.html) article.

## With the user groups rights _(EE only)_

### Rights on the product information
In the case of *product and published product exports*, the PIM takes into account your permissions based on the [user groups](what-is-a-user-group.html) you are in:
- you **do not have a view right** on the products that are in the `Goodies` category, you won't be able to export any information about these products
- you **do not have a view right** on the `Marketing` attribute group, you won't be able to export the product information of the attributes in this attribute group
- you **do not have a view right** on the `de_DE` locale, you won't be able to export any product data regarding this locale

If you want to know more about how the rights on product data works in the PIM, take a look to the [Access rights on products](access-rights-on-products.html) article.

### Rights on export execution
The permission to execute exports can be customized for each export profile. So if you cannot launch an export, be sure that you have the right to run it in the `Permissions` tab of your export profile in edition mode. See the [Access rights on imports/exports](access-rights-on-imports-exports.html) article for more details.
