# How to use the product grid

To access your products: click on the main menu (Enrich/Products) or click on the dashboard «Manage Products» shortcut. You will land on the products’ grid.

This page contains all information you need to start working on your catalog: your products, your categories, some filters, your scopes and locales.

![image](../img/Akn_dashboard.jpg)

***

## Set up your work environment

### Locale & Channel contexts

#### Select a locale context

By default, you will find all your products on the product grid page. You can choose your working locale, if several locales have been activated. The locale selection will impact the following information on the page:

*   The category labels (on the left panel),
*   The attribute labels that can be used as filters (on the Manage filters panel),
*   The labels of attribute groups,
*   The attribute option labels used as values (on the product grid),
*   The completeness displayed (its percentage in the «Complete» grid column),
*   The product or attribute values in the products’ grid.

The locale selected in the dropdown menu is your working locale. Every time it will be changed, product information will be updated in the product’s grid.

![image](../img/Akn_dashboard.jpg)

#### Select a channel context

> **Notes**  
  1. The locales displayed are those added to at least one channel. If you do not see your working locale, it is more likely that you do not have the appropriate access rights to view or edit products for this working locale (Enterprise version). In this case, then please contact your administrator. Or the locale is not required by any channel, therefore it is not activated. To add a locale to a channel, please refer to “Manage channels” in the PIM Catalog Settings Guide.  
  2. The working locale selected on the product grid’s page is also applied when you edit or view a product form.  
  3. The working locale is different from the user interface locale of the user

On the right side of the grid, you have a drop down menu to select your channel.

![image](../img/Akn_dashboard.jpg)

The selected channel or scope selected will be your working channel (or working scope). Selecting a channel impacts values displayed on the products’ grid, especially if your attribute information differ depending on the channel.

This will also impact the completeness displayed, since there can be one completeness percentage per channel/locale combination. Therefore the product grid is updated whenever the working channel changes.

> **Notes**  
  The available channels are those concerned with the locale selected higher up on the page. If you don’t find your channel, it means the locale selected is not required for the channel you want, so it is not proposed. To add a locale to a channel, refer to “Manage channels” section in the PIM Catalog Settings Guide.
  Like the locale, the channel selected on the product grid’s page is applied when editing a product form.

***

### Product’s grid pagination

The product’s grid displays between 10 and 100 products per page. By default, the grid displays 25 products per page, you can change this by clicking on «View per page» and select the number of products you wish to see per page.

![image](../img/Akn_dashboard.jpg)

To browse product’s pages, click on the right and left arrows.

Go directly to a specific page by modifying the field indicating the current page number:

![image](../img/Akn_dashboard.jpg)

***

### Category Panel

**Browse products’ categories**

On the left side of the page, you will see the category panel. Thanks to this panel, you can easily navigate between category trees or between categories. It displays all categories you have access to.

In the Enterprise Edition, you can define specific rights on categories and category trees. Thus, if you do not see a specific tree or category, it’s because you have not the permission to see it.Click on a category name to expand it or to display its products in the grid.

![image](../img/Akn_dashboard.jpg)

Click on the higher dropdown menu to select another category tree, «Master Catalog» in our screenshot above.

![image](../img/Akn_dashboard.jpg)

**View unclassified products**

Below the category tree, you will see an additional category: «Unclassified products». Click on this category to see all unclassified products. this category is added automatically by the PIM and cannot be removed or edited.

![image](../img/Akn_dashboard.jpg)

Remember that unclassified products are not exported.

**View all products**

Click on «All products» to see all products (categorised and uncategorised) of the selected category tree.

![image](../img/Akn_dashboard.jpg)

**Product counter**

Akeneo displays you the number of products available in each category and category tree. You will see a number into brackers nearby each category, this figure represents the total number of products classified in this category or sub-category.

At the bottom of the category tree, you will see a Yes/No option: «Include sub-categories».

![image](../img/Akn_dashboard.jpg)

This option takes into account the number of products classified in sub-categories. By default, this option is set to “Yes”, hence subcategories are included. If you do not want to take into account products classified in subcategories, select ”No”. The tree will be then updated accordingly.

> **Note for Enterprise Edition**  
  ***
  In the Enterprise Edition, only the products on which you have rights to view and publish are counted. The other products are not taken into account.

**Hide or expand the category panel**

In order to allow you to display the products’ grid widely, you can hide the category panel. To do so, click on the left arrows on the top right corner of the panel:

![image](../img/Akn_dashboard.jpg)

The category panel will be reduced automatically to the left side.

To expand the panel, click again on the arrows, the panel will be displayed.

![image](../img/Akn_dashboard.jpg)

If a category name is not fully displayed, you can enlarge the panel. Drag your mouse over the right side of the panel to expand it, release your mouse when you are satisfied.

![image](../img/Akn_dashboard.jpg)

There is a minimum width for the fixed panel.

***

## Customise the grid

### Use filters

The product grid includes a filter bar. By default, the PIM displays System attributes (Family, Groups...):

![image](../img/Akn_dashboard.jpg)

You can use the filters displayed or add new filters: click on the ”Manage filters” menu and select the new attributes you want to use as filters. The new filters will appear in the filter bar. You can now filter your products displayed in the grid.

If an attribute or an attribute option is not translated in the active locale, its code will be displayed into brackets like [name] and only the attributes having the property «usable as grid filter» enabled are available to be used as filters.

**The filters can be applied on the following product information:**
* Product information managed by the PIM: Family, Groups, Status, Complete, Creation date, Updated date, product identifier, Permissions.
* Product information managed via the attributes.

> **Notes**  
  ***
  1. You can define your own default product grid filters in your user account, refer to the section “Change your default preferences”.
  2. If no default filters are set in your user account, the PIM will use the system attributes as default product grid filters: family, groups, status, completeness, creation date, updated date, product identifier and permissions.
  3. If you are missing an attribute in the Manage filters menu check if it is well activated as «usable as grid filter».  

> **Note for the Enterprise Edition**  
  ***
  Only the attributes that you can view or edit are available in the list of filters on the product grid.

***

### Configure grid columns

Now you’re set up with your filters, you can select which columns you would like to see in the grid. By default, Akeneo displays the System attributes as columns.

**By default, the grid displays the following columns:**
*   Sku (our product identifier),
*   Label (the product’s display name in Akeneo),
*   Family,
*   Status (Enabled/Disabled),
*   Complete (the completeness percentage),
*   Created at (the creation date of the product),
*   Updated at (the product last updated date),
*   Groups (if the product belongs to groups or variant groups)

#### To configure the columns:

Click on «columns» on the right side of the grid to display the column selection window:

![image](../img/Akn_dashboard.jpg)

On the left side of the window, you will see your attribute groups.

Nearby each group, you will see the number of attributes belonging to this group that can be used as columns in the grid. Click on a group to display its attributes in the middle column.

If you want to display all attributes, click on «All groups». On the right side, you will see your current grid’s columns.

> **Notes**  
  ***
  Like for filters, only attributes having the property «usable as grid filter» activated can be used as columns.
  And like for categories and locales, if you are an Enterprise Edition client and if you cannot see an attribute this is more likely that you do not have the permission to view it.


#### Add attributes as columns

Select an attribute group on the left side or select «All groups». Drag your attribute in the mid-column and drop it in the right column. Use the search tool to look for a specific attribute. Move your attribute up and down to reorder them.

#### Remove attributes as columns

Click on «Clear» top of the screen to remove all current grid’s attributes, or use the “trash” icon to remove a a specific attribute from the grid. You need to have at least one attribute as a column.

Click on «Apply» to save your changes. Your customised grid will be displayed.

### Sort values within the grid

You can also sort on some columns headers, for instance you can sort products on sku, family, status, complete, created and updated at and on some other attributes (text, text area, number, simple select attributes).

You can not sort values on price, media, asset, metric, multiselect attributes and on Label and Groups system attributes. To check if you can sort on a column simply hover your mouse over the column’s header.

***

## Work with the views

What if, you could save all changes made on your grid (filters, columns, category selection...) and come back later to the exact same view so you can keep on working on your product’s selection? Well, this is possible with the View feature!

Views are available for all users for all versions (Community and Enterprise).

### Create a view

Before creating a view, first select a category or a category tree, add some filters and add/remove columns.

And once you are all set, you will see that the Default view name became Default view*. Every time you will make a change on a view, a small asterisk '\*' will be added nearby its name.

**To create your first view:**

1.  Click on the cross nearby the view selector menu:
![image](../img/Akn_dashboard.jpg)
1.  A window will appear:
![image](../img/Akn_dashboard.jpg)
1.  Enter a name for your view
1.  Click on OK to save it.

This view will now be available under the Views dropdown menu.

**Some rules about the views:**

*   All views created are shared to all other users.
*   Only the view’s creator can delete or edit it.
*   If you need to edit someone’s else view, select it, make your changes and save it again under a new name.
*   Only active filters will be saved for your view. For instance, an attribute filtered on ALL will disappear when saving your view, because All is the default filter value.

AKENEO TIP: Set one of your view as your own default view!

VIDEO TIP: Learn how to use the views!

### Apply a view

To apply a specific view, select it from the dropdown list or look for it using the search bar. The product grid will be updated.

![image](../img/Akn_dashboard.jpg)

### Update a view

**To update the filters or the column configuration of the views you have created:**
1.  Select the view that you want to edit.
1.  Change the filter and/or the grid columns, when you make changes an asterisk “\*” is shown nearby your view name.
![image](../img/Akn_dashboard.jpg)
1.  Click on the Check Mark icon to save your changes.

### Delete a view

**To remove one or all the views you have created, follow the steps below:**
1.  Select the view you want to delete.
1.  Click on the “trash” button nearby the views’ list.
![image](../img/Akn_dashboard.jpg)
1.  Confirm or cancel the suppression of the view.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  ***
  You cannot edit or delete someone else’s view.

***

## Actions on products

Last but not least, you can perform several actions on products from the products’ grid.

### Action shortcuts on single products

There is a set of actions available for each product. They are available on the right side of the product grid when you mouse over the product’s line:

![image](../img/Akn_dashboard.jpg)

Depending on your Akeneo version (Enterprise or Community) and your rights, you might not see all these shortcut actions: edit the product information, edit its category/ies, delete it or change its status.

You will be then able to edit the product information by clicking on the small pencil icon, edit its categories by clicking on the small folder icon, delete it with the trash bin icon and change its status thanks to the 2 arrows icon.

> **Note**
  ***
  The shortcut actions are displayed if you have the appropriate rights, or as if you are working with the Enterprise Edition or the Community Version of the Akeneo PIM

***

## Quick export feature

Akeneo allows you to export your search result or a selection of products from the PIM datagrid to a CSV file or a XLSX file. This can be used to retrieve structured product information and thus create your own reports, graphics, etc.

**To start the export of product information from the datagrid:**

1. Search for products in the datagrid with the appropriate filters.
1. Select the products on which you want to perform the operation via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column.
![image](../img/Akn_dashboard.jpg)
1.  Click on the “Quick Export” button above the grid, and select:
  *   «Excel (Grid context)» to generate an Excel file according to your current view
  *   «Excel (All attributes)» to generate an Excel file with all products’ attributes
  *   «CSV (Grid context)» to generate a CSV file according to your current view
  *   «CSV (All attributes)» to generate a CSV file with all products’ attributes<span class="CharOverride-20">

![image](../img/Akn_dashboard.jpg)

The action is processed as a back end task, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified.

![image](../img/Akn_dashboard.jpg)

When you click on the notification, you access the report page of the action.

![image](../img/Akn_dashboard.jpg)

On the report page, you can download the generated file.

![image](../img/Akn_dashboard.jpg)

A file named `Products_export_<Working Locale Code>_<Working channel Code>_Date_Heure.csv` or `Products_export_<Working Locale Code>_<Working channel Code>_Date_Heure.xlsx` will be created.

The created file encloses one line per product exported, and a column for each product information available. The format of the generated file is the same as for the product import and export in CSV or XLSX <span class="CharOverride-11"> format with the Akeneo connector. Only the working channel is taken into account, and thus all the locale information required for the channel is exported. The working locale is not taken into account.

![image](../img/Akn_dashboard.jpg)

For this export from the datagrid, the completeness, the product status, their classification are not taken into account to determine what information can be exported. All the products selected in the datagrid, regardless of their details, are exported to the CSV file or XLSX file.

> **Note for the Enterprise Edition**
  ***
  The quick export takes into account the user permissions on locales and attributes groups:
  * If a user has no view right on a locale, the localizable values for this locale are not exported.
  * If a user has no view right on an attribute group, the attributes for this attribute group are not exported.

***

## Create a product

You can create products directly in the PIM or through imports. Product’s creation is submitted to specific rights. Please note that you first need an identifier attribute created prior to add a product from the user interface.

**To create a product:**
1.  Click on “Create product” on the top right corner of the products’ grid:
![image](../img/Akn_dashboard.jpg)
1.  Specify a unique product identifier,
1.  Select a family for the new product,
1.  Click on «Save».
    The product is created and its edit form is displayed, you can start filling its attributes. A product can be created without a family, but no attributes will be shown in the product edit form (a product automatically inherits from attributes set at the family level).
![image](../img/Akn_dashboard.jpg)
