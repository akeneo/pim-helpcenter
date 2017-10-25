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
    - `Excel (Grid context)` to generate an Excel file according to your current view
    - `Excel (All attributes)` to generate an Excel file with all products’ attributes
    - `CSV (Grid context)` to generate a CSV file according to your current view
    - `CSV (All attributes)` to generate a CSV file with all products’ attributes

![image](../img/Products_QuickExportDropdown.png)

The action is processed as a back end task, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified. Then, when you click on the notification, you access the report page of the action.

![image](../img/Products_QuickExportNotification.gif)

On the report page, you can download the generated file.

![image](../img/Products_QuickExportDownload.png)

A file named `Products_export_<Working Locale Code>_<Working channel Code>_Date_Heure.csv` or `Products_export_<Working Locale Code>_<Working channel Code>_Date_Heure.xlsx` will be created.

The created file encloses one line per product exported, and a column for each product information available. The format of the generated file is the same as for the product import and export in CSV or XLSX  format with the Akeneo connector. Only the working channel is taken into account, and thus all the locale information required for the channel is exported. The working locale is not taken into account.

![image](../img/Exports_XLSXexample.png)

For this export from the grid, the completeness, the product status, their classification are not taken into account to determine what information can be exported. All the products selected in the product grid, regardless of their details, are exported to the CSV file or XLSX file.

::: ee
The quick export takes into account the user permissions on locales and attributes groups:
  * If a user has no view right on a locale, the localizable values for this locale are not exported
  * If a user has no view right on an attribute group, the attributes for this attribute group are not exported
:::
