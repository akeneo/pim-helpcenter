---
id: manage-multidimensional-data-in-a-table
themes: catalog-settings
title: Manage multidimensional data in a **table**
popular: true
ee-only: false
related:
---

# Overview

Sometimes, it can be useful to present product information in a table, in order to **ease the enrichment**, **improve the readability** of the product sheet, and/or because it is **required by law** (for instance, to present the nutritional values of a product in the food industry).

These are the reasons why we've decided to create the **Table attribute** type.

:::info
This attribute type is available in the _Growth Edition_ and in the _Enterprise Edition_.
:::

# How to create a Table attribute within Akeneo?

As for the other attribute types, you can create a Table by clicking on `Settings`, `Attributes`, `Create attribute`. Then, click on `Table` and choose among our **templates**.

:::info
These templates are here to guide you. They are only **presentation suggestions** and can be modified if they don't match your exact needs. If you prefer to create your table from scratch, then choose the `Empty table` template.
:::

Once the template is selected, a pop-in appears, asking you to choose a `code`, a `label`, and sometimes a `standard`, depending on the template you just chose.

>image

You'll discover a new tab called `Table structure`: this is where you can define your columns.

>image

Except for the `Empty table` template, some columns are already created for you. You are free to add new ones, simply by clicking on `Add new columns`.  
For each new column, you must define a code, a label, and the type (`select`, `number`, `text` or `yes/no`). The column label can be translated in your catalog locales.
You can also **change the order** of the columns, by clicking on the burger button.

>image

Finally, you are also free to **delete** each column, by clicking on the trashcan (appearing when hovering the raw).

:::tips
Let's imagine you are selling foods worldwide, and you need to add the nutritional values of your products. You know that these nutritional tables are specific to a country or a continent (their format are different) and must obey the law. Then you'll need one nutritional table per geographical area. For instance: one for your US market, one for your European market, and a last one for the UK market. In this case, we advise you to create 3 nutritional tables, with the `locale specific` parameter, in order to avoid having empty tables in some locales.
:::

## Let's discover the table attribute's particularities

We've defined several rules to structure a table attribute, in order to leverage the power of the PIM and the "Akeneo logic".

### A table must contain at least 2 columns.
Each column is defined by a `code`, a `label`, and a `type`. The label can be translated into your catalog locales.

### Once the table structure is done and saved, it cannot be changed afterward.
It means that your columns are frozen once you've clicked on `Save`. If you need to change the code or the type of a column, you must delete and re-create it.

### The first column must be of type `Select`.
To structure your table, you can choose among 4 column types:
- `Select`
- `Yes/No`(boolean)
- `Number`
- `Text`

Nevertheless, **the first column must always be of type `Select`**. We will detail how this column type works in the [next section](#specificity-of-each-column-type).

>lien

## Specificity of each column type

### Select column type
As for the `Simple select` and `Multi select` attribute types, you can define **options** in your `Select` column types.  
For instance, if your table attribute gathers the ingredients of a product, you have to create each ingredient as `option` of your `Select` column, in order to be able to use it in the Product Edit Form.
This way, you create the options only one time, and you use them as many times as you want in your product tables :wink:.

### Text column type
In the `Text` columns, you can define the `maximum number of characters`, in order to controle the length of your cells content.  
Of course, you cannot define a negative value, and moreover, you are limited to 100 characters by the system. In other words, this parameter lets you define a **maximum number of characters between 1 and 100.**

### Number column type
In the `Number` column type, you can specify the `Minimum value`, the `maximum value` and if you allow decimal values or not.

### Yes/No (boolean) column type
There is no validation parameters in this column type!



## Scalability of a table attribute
In order to ensure that the PIM will still be running, we have defined some limits.  
- You can create up to **10 columns** in a single table.
- You can create up to **200000 options** within a Select column.
- You can have up to **100 rows** per table attribute in a product sheet.
- You can create up to **50 table attributes** in your PIM.
- You can have up to **8000 product values** in a product sheet (including the whole product values + the table attributes content)


## History tab
As for the other attribute types, you retrieve the `History` tab.  
In this tab, we track the activity on your attribute such as:
- any change in the attribute `properties` tab
- any change in the `table structure` tab, except if you update the option's labels (within a `select` column).
- any change in the `label translations` tab


# Import/export your table data

## Import/export the table structure

### Import/export the columns
You can import/export a table attribute the same way as the other attribute types, by using the `attribute import` or `attribute export` profiles. But, the structure of your table (i.e, the columns of your table) must be written in a JSON format, and inserted in the dedicated column of your import/export file, called `table_configuration`.

:::tips
We are aware that this JSON format is not ideal, but there is no other easy way to proceed as of today. That's why, if you need to make some changes via flat files, we advise you to export your attributes first, fix what you need to fix, and re-import it.
:::

:::info
If you prefer to use the API, please note that the column information are part of the `Attribute` endpoints. To learn more about it, you can refer to our [API documentation](lien API.html).
:::

Don't worry, we've developed dedicated import/export profiles for the options of your `select` column types :wink:.

### Import/export the options of your 'select' columns.
Because it would have been a nightmare to mix up the columns configuration and the options of the `Select` columns in the same file, we've decided to create distinct import and export profiles for the options: the `table option import` and `table option export`, both in CSV or XLSX format. To know more about imports, please check out [the dedicated article](imports.html), and for the exports, everything you need to know is in [this article](exports.html).

:::info
And if you are comfortable with the API, you can retrieve the table options within the `Attribute` endpoints, as you can see in our [API documentation](Apidoc).
:::

## Import/export the table values of a product
Exactly as for the other attribute types, you can import and export your products with table attributes. But, as a table is a quite complexe value, the only way for the PIM to import table data among the other attributes of the product, is by translating your value into JSON in the "table" attribute column of your CSV or XLSX file.

That's why **we highly recommend you to keep the import/export feature for data flows between the PIM and other systems purpose, and not for human enrichment purpose.**

# What about the completeness?

As for the other attribute types, you can define that a table is required for the completeness of a channel. See the [dedicated article](what-is-the-completeness.html).

As of today, we consider a **complete** table, as soon as **1 cell is filled**. Stay tuned, we should improve it soon.  

Now that you know all the secrets of the Table attribute type, [let's discover its capabilities in the Product Edit Form!](use-a-table-attribute-in-your-product-edit-form.html)


Now that you know everything about how this `table` attribute type can be configured, [let's discover how to use it in your product edit form](new-article-PEF)!
