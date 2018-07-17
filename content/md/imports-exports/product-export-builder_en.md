---
id: product-export-builder
themes: import-export-data
title: The power of the **Product Export Builder**
popular: false
ee-only: false
related: exports, monitor-jobs
---

# Overview

You can configure your product export profile to only export the data you need, thanks to the Product Export Builder. This feature allows you to filter your export data on several products and system information.

If you are granted with the permissions, you can either create your own product export using the Product Export Builder or edit an existing product export profile.

::: info
The Product Export Builder feature is available for the product and published product export profiles (for the CSV and XLSX connectors).  
It is also available for [product model](what-about-products-variants.html#what-is-a-product-model) export profiles.
:::

# Create a new product export profile

To create a product export:
1. Go to `Exports`
1. Click on the `Create export profile` button
1. Indicate a unique export code, an export label and select a job, for example: `Product model export in CSV`, `Product export in XLSX` or `Published product export in XLSX` (EE only)
![Create a new product export profile](../img/Exports_CreateProfilExport.png)
1. Save your new export profile

The PIM opens the export profile in edition mode so you can customise it and select the information you want to export. You can start customising your own export profile to only export the data you need.

# Edit a product export profile

From an existing product export profile:
1. Go to `Exports`
1. Click on the product export profile line to edit
1. Click on the `Edit` button located on the top right corner of the screen
1. Once the export profile is displayed, click on the `Content` tab to edit the exported product information

From a newly created product export profile, click on the `Content` tab.

Then, you will land on a page divided in two sections:

![Edit a product export profile](../img/Exports_EditContent.png)

`Filter the data`: this part allows you to define the data of the exported file, namely its columns: you will have to specify a channel and one or more locales to export (required fields). The last field `Attributes` will allow you to select the attributes to be used as file columns.

`Filter the products`: this part allows you to filter your products on several product and system attributes such as the family, category, status, completeness or even insert a list of identifiers, you can also add new attributes to use them to filter your products.

## Filter the data

### Select a channel

Each export can only be linked to one channel, please select the relevant channel of products to export.

![Choose a channel](../img/Exports_EditManageChannels.png)

### Select one or more locales

By default, all activated locales for the channel previously selected are exported. You can export product information for one or more locales depending on your needs.

For instance, Peter needs an export for his Spanish translator: he selects French and Spanish locales, the exported file the translator can enrich the product information for the Spanish locale based on the French product information.

### Remove a locale

Click on the small cross nearby the locale code.

### Add a locale

Start typing your locale code in the field, the PIM will automatically propose you the matching locales. Click on the locale to add it to the field.

![Add locales](../img/Exports_EditManageLocale.png)

### Select attributes as file columns

Click on the `Edit` button in the field to open the Attributes Selection popin:

![Select attributes as file columns](../img/Exports_AttributesEditContent.png)

The popin is divided in three parts: the left part shows the attribute groups, the middle part displays the attributes belonging to the selected group, and on the right side, you will find your attribute selection. By default, note that all attributes are exported.

To make your own attribute selection, click on left side to select a specific attribute group (or `All groups` to display all attributes). Place your mouse on your attribute and drag and drop it into the right-most column. The selected attributes will be displayed as columns in your export file.

![Drag and drop attributes](../img/Exports_DragandDropAttributes.gif)

You can reorder your attributes by dragging them up and down. To clear your selection, click on the `Clear` button. To save your attribute selection, click on `Apply`.

The `Attributes` field will display the number of attributes selected for the export.

::: info
By default, the `Identifier` field is exported in the product export.
:::

## Filter the products

### Filter on families
By default, this filter is empty meaning that all products will be exported regardless of the family they belong to, products without families will also be exported.

### Add a family
If you want to export products belonging to specific families, click on the drop down list and click on the families to add in the field.

![Add a family](../img/Exports_EditFamilyManagement.png)

### Remove a family
Click on the cross nearby the family label to remove it from the field. Products belonging to this family will not be exported anymore.

### Filter on products’ statuses

You can also filter on the status of your products, three options available:
- `All`: to export all products whatever their status is
- `Enabled` (default option): to only export enabled products
- `Disabled`: to only export enabled products

### Use the completeness filter for product export

The following drop down enables you to filter on completeness of selected locales. Four options on completeness are proposed:
- `No condition on completeness`: all products will be exported whatever their completeness is.
- `Complete on at least one selected locale` (default option): products must be complete on at least one locale
- `Complete on all selected locales`: products must be complete on all locales (if you have selected more than
one locale).
- `Not complete on all selected locales`: products must not be complete on all locales (if you have selected
more than one locale).

For instance, with 4 products and 2 exported locales fr_FR and en_US:

- Product A: complete on fr_FR, uncomplete on en_US  
- Product B: uncomplete on fr_FR, complete on en_US  
- Product C: complete on fr_FR, complete on en_US  
- Product D: uncomplete on fr_FR, uncomplete on en_US  

Exported products according to each completeness option for the locales fr_FR and en_US:

- Option 1: All products (A, B, C, D) will be exported  
- Option 2: Only products A, B, C will be exported  
- Option 3: Only product C will be exported  
- Option 4: Only product D will be exported  

### Use the completeness filter for product model export

The following drop down enables you to filter on the completeness of the product models children products for the selected locales. Three options on completeness are proposed:
- `No condition on completeness`: all products models are exported whatever the completeness of their children products for the channel and locales selected
- `At least one child product complete on one selected locale` (default option): a product model is exported if at least one of its child product is complete for the channel selected on one of the selected local
- `All children products complete on all selected locales`: a product model is exported if all its products are complete for the channel selected on all selected locales.

### Filter on date

You can now export your products based on a specific time condition:
- `No date condition` (default option): no time condition will be taken into account for your product export
- `Updated products over the last n days (e.g. 6)`: you only want to export the products that have been updated since the last ‘n’ days
- `Updated products since this date`: you only want to export the products that have been updated since a specific date
- `Updated products since last export`: you only want to export the products that have been updated since the last export

If you select `Updated products over the last n days (e.g. 6)`, a field will be displayed nearby the drop down menu. Specify a number of days (please only use numbers) in this field.

If you select `Updated products since this date`, click the empty field to display the date picker and choose a date. To change the date, click again on the date picker. To completely remove a date, select another time condition.

::: tips
Save export time and used this filter to only export edited products
:::

### Filter on categories

In the export builder, you can also select the category(ies) of the tree you want to export.

For example, you want to export the clothing products (categories `Clothing` in the tree) to mass update families because they have been refined and new families have been created for clothing.

By default all categories are exported. To select a category, click on the `Edit` button. The categories of the channel tree are displayed:

![Filter on categories](../img/Exports_CategoriesEditContent.png)

You can expand a category and see its subcategory by clicking on the arrow. This arrow also enables to collapse a category.

You can select a category and its subcategories, or only the subcategories.

Clicking on `All products` allows you to export all categories by erasing the above selection.

::: info
**Only categorised and enabled products are exported**, thus unclassified products will not be exported. If you want to export unclassified products, you can use the [Quick export](quick-export.html#mainContent) feature.
:::

::: warning
The category tree available in the export builder, will be the tree linked to the channel selected above. If you want to export products belonging to another category tree, change the channel selected or edit the Channel settings. Check the [Manage your Channels](manage-your-channels.html#mainContent) article for more information about channels.
:::

#### Filter on product identifiers

You can make a selection of identifiers to export by adding them in the `Identifier` field. You can copy and paste a list of identifiers. They must be separated by comma, space or line breaks.

![Filter on product identifiers](../img/Exports-EditContentIdentifiers.png)

::: info
You can easily copy a list of identifiers from a csv or xlsx file and paste it in the identifier text area.
:::

::: info
You can also ask for a selection of product models. Simply give their codes in the `Identifier` text area.
:::

#### Filter on attributes

An additional filter `Add attributes` is available on the right side of the page. This drop down menu allows you to add attributes as filters for the export.

![Add attributes](../img/Exports_AddAttributes.png)

Select the attributes you’d like to use as filters. Once selected, they will be displayed in the Data filters area, above the identifier field.

For instance, you are working with a German translator, he needs to only work on products that are missing their German descriptions. You can make a filter on the description field saying:

Only export the products having no description for German locale and e-commerce channel.

![Filter on attributes](../img/Exports_GermanExample.png)

Each attribute comes with a list of operators, for instance for text area fields, you will have the following operators available:

![List of operators](../img/Exports_Operators.png)

::: tips
1. To create a filter on an attribute, you do not need to have it as a column in your export file.
2. All attributes created in the PIM can be used in the Product Export Builder.
3. Any attribute can only be used once as a filter.
:::
