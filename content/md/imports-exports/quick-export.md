---
id: quick-export
themes: products-super-power, import-export-data
title: "**Quick export** your products"
popular: false
related: products-grid, exports, monitor-jobs
---

# What?

Akeneo allows you to export your search result or a selection of products from the PIM grid to a CSV file or a XLSX file. This can be used to retrieve structured product information and thus create your own reports, graphics, etc.

# How?
To start the export of product information from the products' grid:
1. Search for products in the grid with the appropriate filters
1. Select the products on which you want to perform the operation via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
![image](../img/Products_BulkActions.png)
1.  Click on the `Quick Export` displayed in at the bottom of the screen and select:
    - `Excel (Grid context)` to generate Excel files according to your current view
    - `Excel (All attributes)` to generate Excel files with all products’ attributes
    - `CSV (Grid context)` to generate CSV files according to your current view
    - `CSV (All attributes)` to generate CSV files with all products’ attributes

![image](../img/Products_QuickExportDropdown.png)

The action is processed as a back end task, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified. Then, when you click on the notification, you access the report page of the action.

![image](../img/Products_QuickExportNotification.gif)

On the report page, you can download the generated files.

![image](../img/Products_QuickExportDownload.png)

Two files are created:
1. A file with the selected products named `products_export_<Working Locale Code>_<Working channel Code>_Date_Heure.xlsx` or with `.csv` extension
2. A file with the selected product models named `product_models_export_<Working Locale Code>_<Working channel Code>_Date_Heure.xlsx` or with `.csv` extension

The created files enclose one line per product or product model exported, and a column for each product information available. The format of the generated file is the same as for the product import and export in CSV or XLSX  format with the Akeneo connector.

![image](../img/Exports_XLSXexample.png)

Only the working channel is taken into account, and thus all the locale information required for the channel is exported. The working locale is not taken into account.

For this export from the grid, the completeness, the product status, their classification are not taken into account to determine what information can be exported. All the products and product models selected in the product grid, regardless of their details, are exported to the CSV file or XLSX file.

::: warning
Note that the following columns are not exported during a Grid Context Export: Labels, Image, Completeness, "Created at", "Updated at" and Variant products.
:::

::: ee
The quick export takes into account the user permissions on locales and attributes groups:
  * If a user has no view right on a locale, the localizable values for this locale are not exported
  * If a user has no view right on an attribute group, the attributes for this attribute group are not exported
:::
