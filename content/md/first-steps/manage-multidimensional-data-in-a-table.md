---
id: manage-multidimensional-data-in-a-table
themes: catalog-settings
title: Manage multidimensional data in a **table**
popular: true
ee: true
ge: true
related: manage-your-attributes
---

# Overview

Sometimes, it can be useful to present product information in a table, in order to **ease the enrichment**, **improve the readability** of the product sheet, and/or because it is **required by law** (for instance, to present the nutritional values of a product in the food industry).

This is why we've decided to create a new attribute type: the **Table attribute**.

:::info
This attribute type is available in the _Growth Edition_ and in the _Enterprise Edition_.
:::

# How to create a Table attribute within Akeneo?

As for the other attribute types, you can create a Table by clicking on `Settings` > `Attributes` > `Create attribute`. Then, click on `Table` and choose among our **templates**, or build your own.

:::info
These templates are here to guide you. They are only **presentation suggestions** and can be edited to adapt to your needs. If you prefer to create your table from scratch, choose the `Empty table` template.
:::

![image](../img/TableAttributeTemplates.png)

Once the template is selected, a pop-in appears, asking you to choose a `code`, a `label`, and sometimes a `standard`, depending on the template you just chose.

You'll discover a tab called `Table structure`: this is where you can define your columns.

![image](../img/TableAttributeStructure.png)

Except for the `Empty table` template, some columns have already been created for you. You can add new ones, simply by clicking on `Add new columns`.  
For each new column, you must define a code, a label, and the type (`select`, `number`, `text` or `yes/no`). The column label can be translated in your catalog locales.
You can also **change the order** of the columns, by clicking on the drag and drop area.

![image](../img/TableAttributeDragAndDropFocus.png)

Finally,  **delete** any column you don't need, by clicking on the trashcan (appearing when hovering the row).

:::tips
Imagine you sell food products worldwide, and you need to add the nutritional values of your products. You know that nutritional tables formats will differ between countries or continents, and that they are regulated by national laws. Therefore, you'll need one nutritional table per geographical area: one for your American market, one for your European market, and a last one for the UK market. In this case, we recommend you to create 3 nutritional tables, with the `locale specific` parameter, in order to avoid having empty tables in some locales.
:::

## Let's discover the table attribute's particularities

We've defined several golden rules to structure a table attribute, in order to leverage the power of the PIM and the Akeneo logic.

### A table must contain at least 2 columns.
Each column is defined by a `code`, a `label`, and a `type`. The label can be translated into your catalog locales.

### Once the table structure is defined and saved, it cannot be changed afterward.
It means that your columns are frozen once you've clicked on `Save`. If you need to change the code or the type of a column, you must delete and re-create it.

### The first column is always a `Select` or a `Reference entity` one.
To structure your table, you can choose among 6 column types:
- `Select`
- `Yes/No`(boolean)
- `Number`
- `Text`
- `Reference entity` (EE only)
- `Measurement`

Nevertheless, **the first column type must always be `Select`** or a `Reference entity` one.  

We will detail how these 6 column types work in the [next section](#specificity-of-each-column-type).

## Specificity of each column type

### Select column type
Just like for the `Simple select` and `Multi select` attribute types, you can define **options** for your `Select` column type.  
For instance, if your table attribute is used to list the ingredients of a product, each ingredient is an `option` of your `Select` column, this way you will be able to use it in the Product Edit Form. Check out our [dedicated article](work-on-a-product.html#use-a-table-attribute-in-your-product-page-ee-and-ge-only) to discover how to use rows in your product page.
You create the options once, and you use them as much as you want in your product tables :wink:.

:::info
The sorting of the options in the `manage options` screen is based on their creation date, in order to guarantee the best performances of your PIM.
:::

Directly from the `manage options` screen, you can add options coming from a simple or multi-select attribute as an option for your table, just by clicking on the `Import from existing attribute` button.

:::warning
Note that imported options are not synchronised but are a one-shot copy of existing attribute options. Adding or removing options from the selected simple or multi-select attribute won't change the options of the table column.
:::

:::info
If an option already exists on the table option list (same code), all the labels of this option will be replaced by the imported option.

Furthermore, if, while importing options, the table option list exceed the 20000 options limit threshold, all the remaining options will be ignored and won't be imported.
:::

### Text column type
In the `Text` columns, you can define the `maximum number of characters`, in order to control the length of your cells' content.  
Of course, you cannot define a negative value, and moreover, you are limited to 100 characters by the system. In other words, this parameter lets you define a **maximum number of characters between 1 and 100.**

### Number column type
In the `Number` column type, you can specify the `minimum value`, the `maximum value` and if you allow decimal values or not.

### Yes/No (boolean) column type
There is no validation parameters in this column type!

### Reference entity column type (EE only)
If you already use the reference entity feature to handle your ingredients, materials, or colors as records you can easily use them in your table attribute. To do so, you just have to select the `reference entity` column type and choose the reference entity to link, in order to get all the existing records as options.

:::info
It's impossible to create records from a table attribute.
:::

### Measurement column type
In the `Measurement` column type, you will first be asked to choose the `Measurement family` your column will inherit from. Then, you will be able to define the `Default unit`.

:::info
Note that the `Measurement family` cannot be changed once the column has been saved but the `Default unit` can.
:::

## Scalability of a table attribute
In order to ensure that the PIM keeps running, we have defined some limits.  
- You can create up to **10 columns** in a single table.
- You can create up to **20000 options** within a Select column.
- You can have up to **100 rows** per table attribute in a product sheet.
- You can create up to **50 table attributes** in your PIM.
- You can have up to **8000 filled cells** in a product sheet (including all table attributes)


## History tab
Just like the other attribute types, there is an `History` tab.  
In this tab, we track the activity on your attribute such as:
- any change in the attribute `properties` tab
- any change in the `table structure` tab, except if you update the option's labels (within a `select` column).
- any change in the `label translations` tab


# Import/export your table data

## Import/export the table structure

### Import/export the columns
You can import/export a table attribute just like any other attribute types, by using the `attribute import` or `attribute export` profiles. But, the structure of your table (i.e, the columns of your table) must be written in a JSON format, and inserted in the dedicated column of your import/export file, called `table_configuration`.

:::tips
We are aware that this JSON format is not ideal, but there is no other easy way to proceed as of today. That's why, if you need to make some changes via XLSX or CSV files, we recommend you to export your attributes first, fix what needs to be, and re-import it.
:::

:::info
If you prefer to use the API, please note that the table configuration is part of the `Attribute` endpoint. To learn more about it, you can refer to our [API documentation](https://api.akeneo.com/concepts/catalog-structure.html#attribute).
:::

We've developed dedicated import/export profiles for the options of your `select` column types :wink:.

### Import/export the options of your 'select' columns.
Because it would have been a nightmare to mix up the columns configuration and the options of the `Select` columns in the same file, we've decided to create distinct import and export profiles for the options: the `table option import` and `table option export`, both in CSV or XLSX format. To know more about imports, please check out [the dedicated article](imports.html), and for exports, everything you need to know is in [this article](exports.html).

:::info
And if you are comfortable with the API, you can retrieve the table options within the `Attribute` endpoints, as you can see in our [API documentation](https://api.akeneo.com/api-reference.html#Attribute).
:::

:::warning
When exporting lots of options, please note that the export will fail if the total number of characters exceed 32,767 per cell.
:::

## Import/export the table values of a product
Exactly like for other attribute types, you can import and export your products with table attributes. CSV and XLSX formats are structured as tables. Therefore, to import the Akeneo PIM table attribute value, it must be formatted in a single cell of your import using the JSON format. This way it’ll be imported along with any other regular attribute values. It’s faster but more technical.


### Using "product data table values" import/export jobs
There is another way, more readable and easier to configure using dedicated export and import jobs for the table attribute. It will only handle table attribute values and it will be formatted as they are in the product edit form.  

These dedicated jobs are:
- `Product table values` import and export (csv and xlsx)
- `Product model table values` import and export (csv and xlsx)

We recommend you to create **one import profile per table attribute** you want to import/export. Indeed, these jobs enable you to import/export the table values of several products sharing the same table attribute. For imports, as each table attribute can have a different structure, we don’t want to import files mixing up tables with different structures. For exports, you need to choose a single attribute for each job.

For instance: you manage your `composition` with a table attribute in your "food" family. You can create a new import profile called `food composition`, that uses the `product data table values` job, in order to import the `composition` values of several food products at a time.


# What about the completeness?

You can define that a table is required for the completeness of a channel. [Check out our dedicated article for more information](what-is-the-completeness.html).

The ground rule is that we consider a table **complete** as soon as **one cell is filled**. You can go further by defining the completeness at the column level by making it required for the completeness of the attribute.

![image](../img/TableAttributeCompleteness.png)

This way, you can easily define three different levels of completeness:
- the table is complete if **every cell** is filled (you should have checked the completeness option in every column)
- the table is complete if **every cell of at least one column** is filled (you should have checked the completeness option for one or several columns)
- the table is complete as soon as **one cell** is filled. In that case, only the completeness option of the first column should be checked. This is the default behavior.

Now that you know all the secrets of the Table attribute type, [let's discover its capabilities in the Product Edit Form!](work-on-a-product.html#use-a-table-attribute-in-your-product-page-ee-and-ge-only)
