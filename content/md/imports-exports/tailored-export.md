---
id: tailored-export
themes: import-export-data
title: "Tailored export - customize your product information exports"
popular: false
ee-only: true
related: exports, monitor-jobs, access-rights-on-imports-exports
---

# Overview

This feature consists in a new export profile, available only for our Enterprise Edition or Growth Edition users.
It helps you to export your product information in flat files, with your own structure.
For instance, let's assume your retailers or distributors need the same product information from you, but they want different structures:  
* Retailer A wants an export with columns named: "Identifier", "Product Name", "Description", and "Weight (Ounces)".
* Retailer B wants an export with columns named: "Name in French", "Name in English", "Description 1", "ID", and "Weight (Kilograms)".  

Previously, you had to export your product information thanks to a regular product export profile, and manually modify your spreadsheet to reorder the columns, change their name, convert the measurements, for as many retailers and distributors that needed it. 
Now, prepare the work from Akeneo PIM creating a Tailored Export profile per your retailer's or distributor's requirements and use it as often as necessary. You no longer need to manually edit your flat files as soon as you need to share product information.

# Create a tailored product export profile

To create a tailored product export:
1. Go to `Exports`
1. Click on `Create export profile`
1. Type a unique export code and a label, then select the job `Tailored product export` <!-- or `Tailored product model export`. You can select either CSV or XLSX for each job. -->
![Create a new product export profile](../img/TailoredExport_Create-export-profile.png)
1. Save your new export profile

# Edit a tailored product export profile

Once you've created your tailored export profile, or if you want to edit an existing one:
1. Go to `Exports`
1. Click on the tailored export profile you want to edit
1. Click on `Edit` located in the top right corner of the screen  

## Discover the different tabs of this profile

The tailored export profile is exactly like a regular product and product export profile. The only difference is that you have a tab to configure the structure of your flat file.

* `Properties`: Define the label of your export profile
* `Permissions`: Set permissions to allow specific user groups to execute or edit your export profile (Enterprise Edition only).
* `Global settings`: Define the maximum number of lines per file you want, the field delimiter (CSV format only) and the field enclosure character (CSV format only).
* `Product selection`: Use the provided filters to decide which products will be exported (see [Focus on "Product selection" section](tailored-export.html#focus-on-product-selection-section)").
* `Export structure`: Build your export structure (see [Focus on "Export structure" section](tailored-export.html#focus-on-export-structure)").
* `History`: Display the modifications made by any user on your export profile.


### Focus on 'Product selection'

In this tab, you can select the products which will be exported.
A certain number of filters are available, helping you to refine your product selection, such as family, category, status, completeness, data quality or even insert a list of identifiers. You can also add new attributes to use them to filter your products.


![Select multiple category trees](../img/TailoredExport_Select-categories.png)

### Focus on 'Export structure'

In this tab, you can build the structure of your file.
You need to create the columns of your file, name them & link them to your PIM attributes, system properties or association types in order for your export profile to be ready to be launched.
To do so, please follow the steps below:
1.  Add a first column by clicking on `Add first column`.
![Add first column](../img/TailoredExport_Add-first-column.png)  
::: tips
If you want to add columns in bulk from an Excel file, you can copy all the columns header in your spreadsheet and paste them in the last column created, so that it creates automatically all your columns in your export.
![Add columns un bulk](../img/TailoredExport_Add-columns-in-bulk.gif)
:::
2.  Once your first column has been added, you can type its name in the field created.
![Name your columns](../img/TailoredExport_Column-headers.png)
3.  Then, you need to add a source for each column, which means selecting an attribute, a system property or an Association type. To do so, please select the column you want, then, in the right panel, click on `Add source` and select any item from the list.
::: tips
System properties are not set by default. Select only the system properties you need. You can choose: "Enabled", "Category", "Family", "Family variant", "Groups", "Parent" and your association types.
:::
4. Once you've added a source, different options are available depending on the attribute you selected. Most of the time, if your attribute has a value per locale or per channel, you may have to select from which channel and/or from which locale you want the data to be exported. But for some attributes, more options are available. For instance, you can choose between exporting the code or the label of the attribute option, and which separator (',', ';', '|') you want when applicable.
![Add a source](../img/TailoredExport_Add-source.gif)
5.  Once you're done, click on `Save` in the top right corner.
6.  You can now launch your export profile by cliking on `Export`.

::: warning
Limitations have been set for each Tailored Export profile:
* You can add up to 1000 columns
* Text fields are limited to 255 characters
* You can add up to 4 sources in a single column
:::
We hope that you enjoy working with Tailored Export 101. A more advanced version will be released in the coming months, stay tuned!
