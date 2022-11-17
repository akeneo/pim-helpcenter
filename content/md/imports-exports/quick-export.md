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

## Start a quick export

To start the export of product information from the products' grid:
1. Search for products in the grid with the appropriate filters
1. Select the products on which you want to perform the operation via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
![Bulk action](../img/Products_BulkActions.png)
1.  Click on `Quick Export` at the bottom of the screen.
1.  On the pop-up that opened, select the relevant options:
    - `CSV` to generate CSV (comma-separated values) files
    - `XLSX` to generate XLSX (Microsoft Excel) files
    - `Grid context` to generate files according to your current view
    - `All attributes` to generate files with all your product attributes
    - `With codes` to define if the export file displays values' **codes** instead of values' labels.
    - `With labels` to define if the export file displays values' **labels** instead of values' codes.
    - `Without media` to export the attribute values except the media (from asset collection, image, or file attributes)
    - `With media` to export the attribute values including the media (from asset collection, image, or file attributes)
    - `Without UUID` to export the product values except the product UUID (the associated products will also be displayed with their SKU)
    - `With UUID` to export the product values including the product UUID (the associated products will also be displayed with their UUID instead of their SKU)

    ![Quick Export checkboxes](../img/Exports_Quick-Export-checkboxes-UUID.png)
1.  In the top-right corner, click on `Export`

::: tips
To save time, your selections are stored in your local session. It means the next time you click on Quick Export, the same options will already be selected.
:::

## Track the progress of your quick export

After you've launched a quick product export from the product grid, you can easily jump to this task's progress details in the process tracker. Indeed, you just need to click on the link to the job detail directly embedded in the flash message that confirms the quick export launch.
![Quick Export flash message](../img/Exports_Quick-Export-direct-link.png)

::: warning
To be able to see the progress of your quick export, the role of the user must include the permission `View process tracker`. Please read how to [check your role's permissions](what-is-a-role.html).
:::

The action is processed as a back-end task, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified. To download your file, click on the notification you received in the bottom-right corner or go to `Activity` then click on `Process tracker` and on the desired job.

## Download your product export

On the report page, you can download your selection by clicking on `Download generated files` in the top-right corner.

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
