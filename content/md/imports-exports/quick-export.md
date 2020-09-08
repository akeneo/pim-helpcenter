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
![Bulk action](../img/Products_BulkActions.png)
1.  Click on `Quick Export` displayed in the bar at the bottom of the screen.
1.  On the pop-up that opened, select the relevant options:
    - `CSV` to generate CSV (comma-separated values) files
    - `XLSX` to generate XLSX (Microsoft Excel) files
    - `Grid context` to generate files according to your current view
    - `All attributes` to generate files with all your products’ attributes
    - `With codes` to define if the export file displays values' **codes** instead of values' labels.
    - `With labels` to define if the export file displays values' **labels** instead of values' codes.
    ![Quick Export checkboxes](../img/Exports_Quick-Export-checkboxes.png)
1.  In the top-right corner, click on `Export`

::: tips
To save you time, the selections you've made are stored in your local session. It means the next time you will click on Quick Export, the same options will be already selected.
:::

The action is processed as a back-end task, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified. To download your file, click on the notification you received in the bottom-right corner or go to `Activity` then click on `Process tracker` and on the desired job.

On the report page, you can download your selection by clicking on `Download generated files` in the top-right button.

![Quick Export download](../img/Products_QuickExportDownload.png)

Two files are created:
1. A file with the selected products named `<NUMBER>_products_export_grid_context_<LOCALE>_<CHANNEL>_<YYYY-MM-DD>_<HH_MM_SS>` with `.csv` or `.xlsx` extension
2. A file with the selected product models named `<NUMBER>_product_models_export_grid_context_<LOCALE>_<CHANNEL>_<YYYY-MM-DD>_<HH_MM_SS>` with `.csv` or `.xlsx` extension

The created files enclose one line per product or product model exported, and a column for each product information available. The format of the generated file is the same as for the product import and export in CSV or XLSX  format with the Akeneo connector.

![XLSX file example](../img/Exports_XLSXexample.png)

Only the working channel is taken into account, and thus all the locale information required for the channel is exported. The working locale is not taken into account.

For this export from the grid, the completeness, the product status, their classification are not taken into account to determine what information can be exported. All the products and product models selected in the product grid, regardless of their details, are exported to the CSV file or XLSX file.

::: warning
Note that the following columns are not exported: `Label`, `Image`, `Complete`, `Created at`, `Updated at` and `Variant products`.
:::

::: ee
The quick export takes into account the user permissions on locales and attributes groups:
  * If a user has no view right on a locale, the localizable values for this locale are not exported
  * If a user has no view right on an attribute group, the attributes for this attribute group are not exported
:::
