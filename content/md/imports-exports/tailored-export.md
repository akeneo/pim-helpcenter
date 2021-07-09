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
![Create a new product export profile](../img/Exports_CreateProfilExport.png)
1. Save your new export profile

# Edit a tailored product export profile

Once you've created your tailored export profile, or if you want to edit an existing tailored product export profile:
1. Go to `Exports`
1. Click on the tailored product export profile line you want to edit
1. Click on `Edit` located in the top right corner of the screen  

## Discover the different tabs of this profile

As in all export profiles, the tailored export profile displays different tabs where you can configure it. Here's the list:

`Properties`:
`Permissions`:
`Product selection`:
`Export structure`:
`History`:


### Focus on product selection
### Focus on export structure

From a newly created product export profile, click on `Content`.

Then, you will land on a page divided into two sections:

![Edit a product export profile](../img/Exports_EditContent.png)

`Filter the data`: this part allows you to define the data of the exported file, namely its columns: you will have to specify a channel and one or more locales to export. Those are required fields. The last field `Attributes` will allow you to select the attributes that will be used as file columns.

`Filter the products`: this part allows you to filter your products on several product and system attributes such as family, category, status, completeness or even insert a list of identifiers. You can also add new attributes to use them to filter your products.
