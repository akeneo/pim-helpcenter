---
id: tailored-export
themes: import-export-data
title: "Explore new possibilities with a tailored export"
popular: false
ee-only: true
related: exports, monitor-jobs, access-rights-on-imports-exports
---

# Overview

This feature consists in a new export profile, available only for our Enterprise Edition or Growth Edition users.
It helps you to export your product information in flat files, in the ways you want.  
For instance, let's assume your retailers or distributors need the same product information from you in flat file, but they both want different structures:  
* Retailer A wants an export with columns named: "Identifier", "Product Name", "Description" and "Weight (cm)".
* Retailer B wants an export with columns named: "Name in french", "Name in english", "Description 1", "ID" and "Weight (mm)".
It means you need to export your information thanks to the classic product export, and to manually modify your spreadsheet to reorder the columns, change their name, convert the measurement and other low value-added tasks.  

# Create a tailored product export profile

To create a product export:
1. Go to `Exports`
1. Click on the `Create export profile` button
1. Indicate a unique export code, an export label and select the job `Tailored product export` or `Tailored product model export`. You can select either CSV or XLSX for each job.
![Create a new product export profile](../img/TailoredExport_Create-export-profile.png)
1. Save your new export profile

# Edit a tailored product export profile

Once you've created your tailored export profile, or if you want to edit an existing tailored product export profile:
1. Go to `Exports`
1. Click on the tailored product export profile line you want to edit
1. Click on `Edit` located in the top right corner of the screen  

## Discover the different tabs of this profile

As in all export profiles, the tailored export profile displays different tabs where you can configure it. Here's the list of the different tabs:

`Properties`: Define the label of your export profile
`Permissions`: Set permissions to allow specific user groups to execute or edit your export profile (Enterprise Edition only).
`Global settings`: Define the max number of lines per file you want, the field delimiter (CSV format only) and the field enclosure character (CSV format only).
`Product selection`: Use the provided filters to decide which products will be exported (see dedicated section below for more information).
`Export structure`: Build your export structure (see dedicated section below for more information).
`History`: Display the modifications made by any user on your export profile.


### Focus on 'Product selection' section

In this tab, you can select the products which will be exported.
A certain number of filters are available, helping you to refine your product selection, such as family, category, status, completeness or even insert a list of identifiers. You can also add new attributes to use them to filter your products.

::: tips
Note that you can now select any category from any category tree available in your PIM, including categories that aren't linked to a channel.
:::

![Select multiple category trees](../img/TailoredExport_Select-categories.png)

### Focus on 'Export structure'

In this tab, you can build the structure of the file.
You need to create the columns of your file, name them & link them to your PIM attributes in order for your export profile to be ready to be launched.
To do so, please follow the steps below:
1.  Add a first column by clicking on `Add first column`.
![Add first column](../img/TailoredExport_Add-first-column.png)  
::: tips
If you want to add columns in bulk from an Excel file, you can copy all the columns in your Excel and paste them in the last column created, so that it creates automatically all your columns in your export.
:::
1.  Once your first column has been added, you can enter their name in the field created.
![Add first column](../img/TailoredExport_Column-headers.png)
1.  Then, you need to add a source for each column, which means selecting an attribute or a system property. To do that, please select the column you want, then in the right panel, click on `Add source` and select any item from the list.
::: tips
System properties are no more included by default. If you need them, you can select the following system properties: "Enabled", "Category", "Family", "Family variant", "Groups", "Parent" and your association types.
:::
1. Once you've added a source, different options are available depending on the attribute you selected. Most of the time, if  your attribute is localisable and/or scopable, you may have to select from which channel and/or from which locale you want the data to be exported. But for some attributes, more options are available, like a choice between the code or the label of the attributes, or the separator character to use.
![Add a source](../img/TailoredExport_Add-source.gif)
1.  Once you're done, click on `Save` in the top right corner.
1.  You can now launch your export profile by cliking on `Export`.

::: warning
Limitations have been set for each Tailored Export profile:
* You can add up to 1000 columns
* Text fields are limited to 250 characters
* You can add up to 4 sources in a same column
:::
