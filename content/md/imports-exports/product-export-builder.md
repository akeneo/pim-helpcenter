---
id: product-export-builder
themes: import-export-data
title: The power of the **Product Export Builder**
popular: false
ee-only: false
related: exports, monitor-jobs
---

# Overview

You can configure your product export profile to only export the data you need thanks to the Prodcut Export Builder. This feature allows you to filter your export data on several product and system information.

If you are granted with the permissions, you can either create your own product export using the Product Export Builder or edit an existing product export profile.

# Create a new product export profile

To create a product export:
1.  Go to Spread/Export Profiles,
1. Click on the «Create export profile» button,
1. Indicate a unique export code, an export label and select the job: csv_product_export or xlsx_product_export (all fields are required)
![Create a new product export profile](https://github.com/akeneo/pim-helpcenter/blob/f17559635930f1215676854fed45f6c570385f2b/content/md/imports-exports/img/Exports_CreateProfilExport.png)
1. Save your new export profile.

The PIM opens the Export Profile in Edition mode so you can customise it and select the information you want to export. You can start customising your own export profile to only export the data you need.

# Edit a product export profile

From an existing product export profile:
1.  Go to Spread/Export Profiles,
1. Click on the product export profile line to edit.
1. Once the export profile is displayed, click on the «Content» tab.
1. Click on the «Edit» button on the top right hand corner to edit the exported product information

From a newly created product export profile:

Click on the «Content» tab.

To edit the product information:

You land on a page divided in two sections:

![Edit a product export profile](https://github.com/akeneo/pim-helpcenter/blob/0a6987d5a91e75ca19dd16d9adc8a57e1c5837d2/content/md/imports-exports/img/Exports_EditContent.png)

Structure Filters: this part allows you to define the structure of the exported file, namely its columns: you will have to specify a Channel and one or more locales to export (required fields). The last field «Attributes» will allow you to select the attributes to be used as file columns.

Data Filters: this part allows you to filter your data on several product and system information such as the family, category, status, completeness or even insert a list of SKUs, you can also add new attributes to use them to filter your data.

## Use the structure filters

### Select a channel

Each export can only be linked to one channel, please select the relevant channel of products to export.

### Select one or more locales

By default, all activated locales for the channel previously selected are exported. You can export product information for one or more locales depending on your needs.

For instance: Peter needs an export for his Spanish translator: he selects French and Spanish locales, the exported file the translator can enrich the product information for the Spanish locale based on the French product information.

### Remove a locale

Click on the small cross nearby the locale code.

### Add a locale

Start typing your locale code in the field, the PIM will automatically propose you the matching locales.
Click on the locale to add it to the field.

### Select attributes as file columns

Click on the «Edit» button in the field to open the Attribute Selection popin:

![Select attributes as file columns](https://github.com/akeneo/pim-helpcenter/blob/3050419d3479e1238f43aa438ba0ead2045158f5/content/md/imports-exports/img/Exports_%20AttributesEditContent.png)

The popin is divided in three parts: the left part shows the attribute groups, the middle part displays the attributes belonging to the selected group, and on the right side, you will find your attribute selection. By default, note that all attributes are exported.

To make your own attribute selection, click on left side to select a specific attribute group (or All groups to display all attributes). Place your mouse on your attribute and drag and drop it into the right-most column. The selected attributes will be displayed as columns in your export file.

![Drag and drop attributes](https://github.com/akeneo/pim-helpcenter/blob/3050419d3479e1238f43aa438ba0ead2045158f5/content/md/imports-exports/img/Exports_DragandDropttributes.gif)

You can reorder your attributes by dragging them up and down. To clear your selection, click on the «Clear» button. To save your attribute selection, click on «Apply».

The Attributes field will display you the number of attributes selected for the export.

::: info 
By default, the SKU field is exported in the product export.
:::

## Use the data filters

### Filter on families
By default, this filter is empty meaning that all products will be exported regardless of the family they belong to, products without families will also be exported.

### Add a family
If you want to export products belonging to specific families, click on the drop down list and click on the families to add in the field.

### Remove a family
Click on the cross nearby the family label to remove it from the field. Products belonging to this family will not be exported anymore.

### Filter on products’ statuses

You can also filter on the status of your products, three options available:
- All: to export all products whatever their status is
- Enabled (default option): to only export enabled products
- Disabled: to only export enabled products

### Use the completeness filter

The following drop down enables you to filter on completeness of selected locales. Four options on completeness are proposed:
- No condition on completeness: all products will be exported whatever their completeness is.
- Complete on at least one selected locale (default option): products must be complete on at least one locale
- Complete on all selected locales: products must be complete on all locales (if you have selected more than
one locale).
- Not complete on all selected locales: products must not be complete on all locales (if you have selected
more than one locale).

For instance, with 4 products and 2 exported locales fr_FR and en_US:

Product A: complete on fr_FR, uncomplete on en_US
Product B: uncomplete on fr_FR, complete on en_US
Product C: complete on fr_FR, complete on en_US
Product D: uncomplete on fr_FR, uncomplete on en_US

Exported products according to each completeness option for the locales fr_FR and en_US:

Option 1: All products (A, B, C, D) will be exported.
Option 2: Only products A, B, C will be exported.
Option 3: Only product C will be exported
Option 4: Only product D will be exported.

#### Filter on date

You can now export your product on a specific time condition:
- No date condition (default option)
- Updated products over the last n days (e.g. 6): you want to export products updated since the last ‘n’ days:
- Updated products since this date:  you want to export products updated since a specific date
- Updated products since last export: you want to export products updated since the last export

If you select «Updated products over the last n days (e.g. 6)», a field will be displayed nearby the drop down menu. Indicate a number of days (please only use numbers) in this field.

If you select «Updated products since this date», the date picker will be displayed to choose a date. To change the date, click again on the date picker. To completely remove a date, select another time condition.

#### Filter on categories

In the export builder, you can also configure the category (ies) of the channel tree you want to export.

For example, you want to export the clothing products (categories «Clothing» in the tree) to update in mass the families because the families have been refined and new families have been created for clothing.

By default all categories are exported. To select a category, click on the «Edit» button. The categories of the channel tree are displayed:

![Filter on categories](https://github.com/akeneo/pim-helpcenter/blob/3050419d3479e1238f43aa438ba0ead2045158f5/content/md/imports-exports/img/Exports_CategoriesEditContent.png)

You can expand a category and see its subcategory by clicking on the arrow:

This arrow also enables to collapse a category.

You can select a category and its subcatgories:

Or only the subcategories:

Clicking on «All products» allow you to export all categories by erasing the above selection

#### Filter on SKU (or product identifiers)

You can make a selection of identifiers to export by adding them in the SKU field. You can copy and paste a list of identifiers, they must separated by comma, space or line breaks.

::: info
You can easily copy an identifier list from a csv or xlsx file and paste it in the SKU text area.
:::

#### Filter on attributes

An additional filter «Add attributes» is available on the right side of the page. This drop down menu allows you to add attributes as filters for the export.

![Add attributes](https://github.com/akeneo/pim-helpcenter/blob/3050419d3479e1238f43aa438ba0ead2045158f5/content/md/imports-exports/img/Exports_AddAttributes.png)

Select the attributes you’d like to use as filters. Once selected, they will be displayed in the Data filters area, above the SKU field.

For instance, you are working with a German translator, he needs to only work on products that are missing their German descriptions. You can make a filter on the description field saying:

Only export the products having no description for German locale and e-commerce channel.

![Filter on attributes](https://github.com/akeneo/pim-helpcenter/blob/3050419d3479e1238f43aa438ba0ead2045158f5/content/md/imports-exports/img/Exports_GermanExample.png)

Each attribute comes with a list of operators, for instance for text area fields, you will have the following operators available:

![List of operators](https://github.com/akeneo/pim-helpcenter/blob/3050419d3479e1238f43aa438ba0ead2045158f5/content/md/imports-exports/img/Exports_Operators.png)

::: tips
1. To create a filter on an attribute, you do not need to have it as a column in your export file.
2. All attributes created in the PIM can be used in the Product Export Builder.
3. Any attribute can only be used once as a filter.
:::

::: info
The Product Export Builder feature is available for the product and published product export profiles (for the CSV and XLSX connectors)
:::
