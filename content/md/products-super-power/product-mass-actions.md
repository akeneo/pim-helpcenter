---
id: product-mass-actions
themes: products-super-power, boost-your-productivity
title: "**Mass actions** on products"
popular: false
ee-only: false
related: sequential-edit
---

# Overview

Bulk operations enable you to perform actions on multiple products at once. These operations are performed on a selection of products from the grid.

To access the bulk actions, go on the Product grid, **select at least one product** and click on the `Bulk actions` button, at the bottom of the grid.

# Available mass actions
Here’s the list of the bulk operations available in the PIM (Community and Enterprise Editions):
  - Edit common attributes: to edit the common attributes of your selection of products. For instance, set a new release date or a new value for an attribute. This action does not add attribute to products
  - Change family: to choose/change the family of the selected products
  - Change status (enable/disable): this action allows you to edit the status of one or several products, to enable or disable the products
  - Add to groups: to add your selection of products in one or more groups
  - Add to categories: to add product into categories
  - Move between categories: to change your product categorization
  - Remove products from categories: to remove products from one or more categories at once. Selected products will be uncategorized.
  - Publish products (Enterprise Edition only): to mass publish products
  - Unpublish products (Enterprise Edition only - available from the Published product grid): to mass unpublish products
  - Edit products sequentially: to edit product one after the other through their product edit forms


::: info  
In order to perform a bulk operation on products, you need the rights to each possible action, and also the general permission to perform bulk actions on products.
:::

# How to?

1.  Select the desired products in the grid with the appropriate filters
1.  Tick the products you want to mass edit via the down arrow of the toolbar: `All` for all the products recorded, `All visible` for all visible products on the ongoing page, `None` for none of the products:
![Mass edit options](../img/Products_BulkActionUppermenu.png)
1.  Click on `Bulk Actions`
1.  Select the operation to be performed from the screen menu
![Operations to be performed](../img/Products_BulkAction2.png)
1.  According to the selected operation, the next screen of configuration changes

| Operations  | Step of configuration  |
|:------------|:-----------------------|
| Edit common attributes  | Add attributes to the product form to set the values ​​to be applied. The changes will be done for the scope and the locale selected in the product’s grid. <br>If you have several locales or scopes, you will have to do several mass actions                  |
| Change family | Select the family to be applied on products   |
| Change status | Select the status to be applied: enable or disable  |
| Add to groups     | Check the groups in which the products will be brought together       |
| Add to categories<br>Move between categories<br>Remove from categories | Tick the categories in which the products will be categorized, moved or removed.   |
| Publish products  | Confirm the action     |
| Unpublish products  | Confirm the action     |

Confirm the action with the `Confirm` button located in the middle of the screen.

![Confirm button](../img/Products_ConfirmBulkActions.png)

The action is processed to the back-end, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified.

![Notification center](../img/Products_MassEditNotifications.png)

When you click on the notification, you access the report page of the action.

![Process tracker](../img/Products-ProcessTrackerReportMassEdit.png)

::: ee
After some of the bulk actions the rules will be automatically applied.
:::

## Categorize, move or remove products

In order to save you some time, you can also directly categorize products in categories without an import / export thanks to a bulk action menu in the product grid.

1.  Search for products in the grid with the appropriate filters
2.  Select the products to be removed via the selection tool: Tick the products you want to update via the down arrow of the toolbar: `All` for all the products recorded, `All visible` for all visible products on the ongoing page, `none` for none of the products
![Mass edit options](../img/Products_BulkActionUppermenu.png)
3.  Click on `Bulk Actions`
4.  Select the operation to be performed from the screen menu
5.  According to the selected operation, the next page of configuration changes


| Operations                  | Step of configuration |
|:----------------------------|:----------------------|
| Add to categories | The products will be positionned into the selected categories, the existing placement is kept |
| Move between categories     | The products will be moved into the selected categories, the existing placement is lost       |
| Remove from categories | The products will be removed from the selected categories                                     |

Confirm the action with the `Confirm` button located in the middle of the screen.

# Delete multiple products

To delete multiple products:
1.  Search for products in the grid with the appropriate filters
2.  Select the products to be removed via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
![Mass edit options](../img/Products_BulkActionUppermenuDelete.png)
3.  Click on `Delete` in the toolbar located at the bottom of the screen
4.  Confirm the action with the `Confirm` button
![Confirm delete](../img/Products_BulkActionUppermenuDelete2.png)
