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

## How to create a Table attribute within Akeneo?

As for the other attribute types, you can create a Table by clicking on `Settings`, `Attributes`, `Create attribute`. Then, click on `Table` and choose among our **templates**.
Then, a popin appears, asking you to choose a `code`, a `label`, and a `standard`, depending on the template you just chose.

### Let's discover the table attribute's particularities

We've defined several rules to structure a table attribute, in order to benefit from the powerness of the PIM and from the "Akeneo logic".

#### A table must contain at least 2 columns.
Each column is defined by a `code`, a `label`, and a `type`. The label can be translated, and you cannot change the code neither the type of a column afterward.

#### Once the table structure is done and saved, it cannot be changed afterward.
It means that your columns are frozen once you've clicked on `Save`.

#### The first column must be of type `Select`.
To structure your table, you can choose among 4 column types:
- `Select`
- `Yes/No`(boolean)
- `Number`
- `Text`

Nevertheless, the first colunm must always be of type `Select`. We will detail how this column type works in the [next section](next-section).


## Specificity of each column type

### Select column type
As for the `Simple select` and `Multi select` attribute types, you can define **options** for your `Select` column types. For instance, if your table gathers the ingredients of a product, 

### Text column type

### Number column type

### Yes/No (boolean) column type

## Import/export your table data

### Import/export a table structure

#### Import/export the columns
You can import/export a table attribute the same way as the other attribute types, by using the `attribute import` or `attribute export` profiles. But, the structure of your table (a.k.a, the columns of your table) must be written in a JSON format, and inserted in the dedicated column of your import/export file, called `table_configuration`.

:::tips
We are conscious that this format is not ideal, but there is no other easy way to proceed as of today. That's why, if you need to make some changes via flat files, we advise you to export your attributes first, fix what you need to fix, and re-import it.
:::

Don't worry, we've developed dedicated import/export profiles for the options of your `select` column types.


### Import/export the values of a table in a product

## What about the completeness?

As for the other attribute types, you can define that a table is required for the completeness of a channel. See the [dedicated article](completeness).

As of today, we consider a **complete** table, as soon as **1 cell is filled**. Stay tuned, we should improve it soon.



>
- possibilité d'importer/exporter, pas le biais de profils d'export différents :
    - la structure d'un tableau
    - les options d'une colonne select
    - les product values
- idem via l'API (format en sortie : JSON)
- possibilité de rechercher des values d'un tableau dans la grille produit
- possibilité d'enrichir un tableau dans le PEF, de changer l'ordre des lignes et de
- pas possible de faire des actions dans les règles, sur les tableaux
