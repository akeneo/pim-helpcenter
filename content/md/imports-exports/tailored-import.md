---
id: tailored-import
themes: import-export-data
title: Tailored import - **import any file structure**
popular: false
ee: true
ge: true
related: imports, monitor-jobs, access-rights-on-imports-exports
---

# Overview

This feature consists in an import profile, available only for our SaaS users (Enterprise Edition or Growth Edition).
It helps you to import your product information in XLSX or CSV files, with different structures than what the PIM usually accept.  
For instance, let's assume your supplier or brands send you their product information in different XLSX files, having different structures:  
* Supplier A sends a file with columns named: "Product ID", "Model Name", "Online description", and "Color".
* Brand B sends a file with columns named: "Gencod, "Web title", "Long label", "Web description", "Supplied accessories".  

**Without** Tailored Import, you have to import your product information thanks to a regular product import profile, and manually modify your spreadsheet to transform your attributes from code to label, transform you options values from label to codes, convert the measurements, and many more manual operations.
Thanks to Tailored Import, you can configure all your needs (mapping, operations) via an import, and use it as often as necessary. **You no longer need to manually edit your XLSX or CSV files when you need to import product information.**

<!--
:::tips
To learn more about Tailored Export and how to use this feature, please watch our training [Tailored Exports Foundations](https://akademy.akeneo.com/tailored-exports-foundations).
:::
-->

# Create a tailored product import profile

To create a tailored product export:
1. Go to `Imports`
1. Click on `Create import profile`
1. Type a unique export code and a label, then select the job `Tailored product import`<!-- or `Tailored product model import`-->. <!--You can select either CSV or XLSX for each job.-->
![Create a new product import profile](../img/Tailored-Import_Create-import-profile.png)
1. Save your new import profile

# Edit a tailored product import profile

Once you've created your tailored import profile, or if you want to edit an existing one:
1. Go to `Imports`
1. Click on the tailored import profile you want to edit
1. Click on `Edit` located in the top right corner of the screen  

## Discover the different tabs of this profile

A tailored export profile is not far from a regular product and product import profile. The main difference is that you have a tab to configure the structure of your XLSX <!--or CSV -->file.

Here are the tabs you can use:
* `Properties`: To name your import profile.
* `Permissions`: To set permissions to allow specific user groups to execute or edit your export profile (Enterprise Edition only).
* `Global settings`: To define the behavior in case an error occurred: you can either skip the products (the rows won't be imported), or skip the value only (the faulty cell won't be imported).
* `Import structure`: To create your import structure (read how to [define your import structure](tailored-import.html#define-your-import-structure)).
* `History`: To display the modifications by any user on your export profile.


## Define your import structure

In the `Import structure` tab, you can define the structure of your file so that it matches all the future files you will import.
To do that, on one hand you will need to import a file to define the structure and then create your mappings and operations, by adding PIM attributes and linking them to your file columns. On the other hand, after this initial configuration has been done, you will be able to import directly all your product files sharing the same structure.

:::warning
Please note that once you defined and confirmed the structure of your import profile, you won't be able to change it. For instance, if the next file you want to import has a different column ordering or an extra column, you won't be able to use this import profile and you will have to create another one.
:::

To do this, please follow the steps below:
1.  Under `Import structure` tab, click on `Initialize import structure`
![Initialize import structure](../img/Tailored-Import_Initialize-import-structure.png)
1.  Now, upload the file you need to import. This step will help the PIM to assess the structure of your file. Note that the products in the uploaded file won't be imported at this step.
    ::: warning
    Limitations have been set for each uploaded file:
    * It should have a maximum of 500 columns.
    * Its size should be a maximum of 50 MB.
    :::
1.  Once uploaded, you'll have to set different fields:
    * The appropriate sheet in your spreadsheet.
    * The row where are located the headers.
    * The row where the first product is displayed.
    * The column where the first product information is displayed.
    * The unique identifier column (this column will be automatically mapped to the "SKU" attribute in the PIM).


1.  Once your first column has been added, you can define the column name in the text field that just appeared.
![Name your columns](../img/TailoredExport_Column-headers.png)
1.  Then, you need to add a source for each column, which means selecting an attribute, a system property or an association type. To do this, please select the column you want, then, in the right panel, click on `Add source` and select any item from the list.  
    ::: info
    System properties are not set by default. Select only the system properties you need. You can choose: "Enabled", "Category", "Family", "Family variant", "Groups", "Parent" and your association types.
    :::
1. Once you've added a source, different options are available depending on the attribute you selected. Most of the time, if your attribute has a value per locale or per channel, you may have to select from which channel and/or from which locale you want the data to be exported. But for some attributes, more options are available. For instance, you can choose between exporting the code or the label of the attribute option, and which separator (comma, semi-colon, pipe) you want, when applicable.
![Add a source](../img/TailoredExport_Add-source.gif)
1.  Once you're done, click on `Save` in the top right corner.
1.  To launch your export profile, in the breadcrumb, click on the name of your export profile, then click on `Export`. ![Breadcrumb](../img/TailoredExport_Breadcrumb.png)

::: warning
Limitations have been set for each Tailored Import profile:
* Files must contain a maximum of 500 columns.
* You can add up to 4 sources in a single column.
* You can add up to 10 text separators within a concatenation operation.
* Text fields are limited to 255 characters.
:::

# Discover operations

You can use operations to share the most meaningful values for your stakeholders by adapting your PIM values in different ways when exporting them.

:::tips
To learn more about operations, please watch our training [Tailored Exports Operations](https://akademy.akeneo.com/tailored-exports-operations).
:::

Depending on the sources you define, here are the different types of operations you can add:

## Yes/No replacement

Replace the default values with your own value (only available for the "Yes/No" attribute or the "Enabled" system property).
![Yes/No replacement](../img/TailoredExport_Operation_Boolean_Replacement.png)

## Replacement

Replace the values by your own (only available for simple select, multi select, reference entities single link or multiple link attributes).
![Replacement](../img/TailoredExport_Operation_Replacement.png)

## Use default value when empty

Define a default value when the source value is empty.
![Use default value when empty](../img/TailoredExport_Operation_UseDefaultValueWhenEmpty.png)

## Conversion

Convert measurement units within the same measurement family (only available for measurement attributes used as a source).
![Conversion](../img/TailoredExport_Operation_Conversion.png)

## Rounding

Round measurements values, choosing from `Round`, `Round up` & `Round down` and define the number of digits - up to 12 - after the decimal separator (only available for measurement attributes used as a source).
![Rounding](../img/TailoredExport_Operation_Rounding.png)

## Concatenation

Concatenate different sources by displaying up to 4 per column. Click on `Add text` to add more details and create a separation between sources.
![Concatenate](../img/TailoredExport_Operation_Concatenate.gif)

## Clean HTML tags

Clean automatically all the HTML tags in your text attributes used as a source.
![Clean HTML tags](../img/TailoredExport_Operation_CleanHTML.png)

:::warning
If you added a default value with HTML tags thanks to the `Use default value when empty operation`, and if you checked `Clean HTML tags` for the same source, this operation won't clean the HTML tags for the default value.
:::

## Selection

Select the format of the value you want to export. For instance, you can select the label or the code, the separator, etc. This operation will allow you to decide exactly what product information you want to export, for each source.
![Selection](../img/TailoredExport_Operation_Selection.png)

# Duplicate a tailored product export profile

If you want to create another export profile based on an existing one, you can duplicate it.
To do this, please follow the steps below:
1. Select the export profile you would like to duplicate
1. Click on `Edit`
1. In the top right corner, click on the three dots "..." and select `Duplicate`
1. Write a label and a code then click on `Save`
