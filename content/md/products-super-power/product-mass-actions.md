---
id: product-mass-actions
themes: products-super-power, boost-your-productivity 
title: "**Mass actions** on products"
popular: false
ee-only: false
related: sequential-edit
---

# Overview

Bulk operations enable you to perform actions on multiple products at once. These operations are performed on a selection of products from the datagrid.

To access the bulk actions, go on the Product’s grid and click on Bulk actions button, on the top of the grid.

# Available mass actions
Here’s the list of the bulk operations available in the PIM (Community and Enterprise Editions):
- Change Product Information
  - Change status (enable/disable): this action allows you to edit the status of one or several products, to enable or disable the products.
  - Edit common attributes: to edit the common attributes of your selection of products. For instance, set a new name or new value for an attribute. This action does not add attribute to products.
  - Change the product family: to choose/change the family of the selected products.
  - Add to groups: to add your selection of products in one or more groups (not variant groups).
  - Add to variant groups: to add your selection of products in a variant group.
  - Publish products (EE Enterprise only): to mass publish products.
  - Unpublish products (EE Enterprise only - available from the Published product’s grid): to mass unpublish products
- Edit products sequentially: to edit product one after the other through their product edit forms.
- Move products in categories:
  - Classify products in categories: to add product into categories.
  - Move products to categories: to change your product categorization
  - Remove products from categories: to remove products from one or more categories at once.

::: info  
In order to perform a bulk operation on products, you need the rights to each possible action, and also the general permission to perform bulk actions on products.
:::

# How to?

1.  Select the desired products in the datagrid with the appropriate filters.
1.  Tick the products on which you want to perform the operation via the selection tool: «All» for all the products recorded, «All visible» for all visible products on the ongoing page, «none» for none of the products:
  ![image](../img/dummy.png)
1.  Click on “Bulk Actions”,
1.  Select “Change product information”,
  ![image](../img/dummy.png)
1.  Select the operation to be performed from the screen menu (see the list of operations on the next page),
1.  According to the selected operation, the next page of configuration changes.

| Operations  | Step of configuration  |
|:------------|:-----------------------|
| Change status | Select the status to be applied: enable or disable  |
| Edit common attributes  | Add attributes to the product form to set the values ​​to be applied. The changes will be done for the scope and the locale selected in the product’s grid. <br>If you have several locales or scopes, you will have to do several mass actions.                  |
| Change the product family | Select the family to be applied on products.   |
| Add to groups     | Check the groups in which the products will be brought together.       |
| Add to a variant group  | Select the variant group in which the products will be gathered.         |
| Publish products  | Confirm the action.     |
| Unpublish products  | Confirm the action.     |
| Classify products in categories<br>Move products to categories<br>Remove products from categories | Tick the categories in which the products will be classified, moved or removed.   |

Confirm the action via the popin message.

The action is processed to the back-end, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified.

![image](../img/dummy.png)

When you click on the notification, you access the report page of the action.

![image](../img/dummy.png)

::: ee
After some of the bulk actions the rules will be automatically applied.
:::

## Categorize, move or remove products

In order to save you some time, you can also directly categorize products in categories without an import / export thanks to a bulk action menu in the product grid.

1.  Search for products in the datagrid with the appropriate filters.
2.  Select the products to be removed via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
  ![image](../img/dummy.png)
3.  Click on “Bulk Actions”,
4.  Select “Move products in categories”,
  ![image](../img/dummy.png)
5.  Select the operation to be performed from the screen menu (see the list of operations on the next page),
6.  According to the selected operation, the next page of configuration changes.

| Operations                  | Step of configuration |
|:----------------------------|:----------------------|
| Classify products in categories | The products will be positionned into the selected categories, the existing placement is kept. |
| Move products to categories     | The products will be moved into the selected categories, the existing placement is lost.       |
| Remove products from categories | The products will be removed from the selected categories.                                     |

Confirm the action via the popin message.

# Delete multiple products

To delete multiple products:
1.  Search for products in the datagrid with the appropriate filters.
2.  Select the products to be removed via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
![image](../img/dummy.png)
3.  Click on “Bulk Actions”,
4.  Select “Delete Products”,
![image](../img/dummy.png)
5.  Confirm the action in the confirmation popin.
