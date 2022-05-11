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

# Discover the different tabs of this profile

A tailored export profile is not far from a regular product and product import profile. The main difference is that you have a tab to configure the structure of your XLSX <!--or CSV -->file.

Here are the tabs you can use:
* `Properties`: To name your import profile.
* `Permissions`: To set permissions to allow specific user groups to execute or edit your export profile (Enterprise Edition only).
* `Global settings`: To define the behavior in case an error occurred: you can either skip the products (the rows won't be imported), or skip the value only (the faulty cell won't be imported).
* `Import structure`: To create your import structure (read how to [define your import structure](tailored-import.html#define-your-import-structure)).
* `History`: To display the modifications by any user on your export profile.


# Define your import structure

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
    ::: warning
    Before you click on `Confirm`, please make sure the configuration you set is right. Once this step has been confirmed, you won't be able to change it and you would have to create another import profile if you wanted to set it differently.
    :::
1. Click on `Confirm` and you'll notice the mapping structure has already an attribute mapped. This attribute is the SKU which was selected in the step 3 above.

::: warning
Limitations have been set for each Tailored Import profile:
* Files must contain a maximum of 500 columns.
* You can add up to 4 sources in a single column.
* You can add up to 10 text separators within a concatenation operation.
* Text fields are limited to 255 characters.
:::

# Start mapping your columns to your attributes

1. Now it's time to map all the relevant information from your file to the PIM. To do that, click on `Add attribute` and select an attribute from the PIM that you would like to use, for instance the "Name" attribute.
1. Then, you'll see the right panel of this attribute displays three different sections: `Target`, `Source(s)` and `Operation(s)`.
    * The target section will display different settings depending on the attribute you selected in the step above.
    * The Source(s) section displays all the columns that were found in your uploaded spreadsheet.
    * The Operation(s) section will display a certain operation available to transform your data, depending on the target you selected.
1. Click on `Add a source` and select a source listed from your file. The letter between brackets indicates the column where this source is located in your spreadsheet. For instance, select the one that matches to the name of your product, e.g. "Web title".
1. Now look at the "Operation(s)" section where is displayed a first data samples preview. This preview will display random data samples from the uploaded file so that you can really confirm the source you've added to this target.
![Input data sample preview](../img/Tailored-Import_Imput-data-sample-preview.png)
    ::: warning
    Data samples are unique values selected randomly amongst the first 1,000 rows found in the file uploaded for the configuration.
    :::
1. If you need, you can add operations under the data samples. Click on `Add operation` and select the one you'd like. Please note that the operations are available depending to the attribute selected as a target, but also depending on previously added operations.
1. At the end of the operations, is displayed an output preview of the sample data, changed according to the operations you've added.
![Input data sample preview](../img/Tailored-Import_Output-data-sample-preview.png)
1. Once you're done, click on `Save` in the top right corner. You're now ready to import your products.

# Import your products

1.  To launch your import profile, in the breadcrumb, click on the name of your import profile, drag & drop your file and click on `Upload & import now`.
![Upload & import](../img/Tailored-Import_Upload&Import.png)

# Discover operations

You can use operations to ease as much as possible the import process, where the data needs to be transformed.
Depending on the targets you define, here are the different types of operations you can add:

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

# Duplicate a tailored product export profile

If you want to create another export profile based on an existing one, you can duplicate it.
Please note that this import profile will still keep its import structure frozen. You will only be able to add or remove operations, targets and sources.

To do this, please follow the steps below:
1. Select the export profile you would like to duplicate
1. Click on `Edit`
1. In the top right corner, click on the three dots "..." and select `Duplicate`
1. Write a label and a code then click on `Save`
