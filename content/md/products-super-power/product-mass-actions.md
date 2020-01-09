---
id: product-mass-actions
themes: products-super-power, boost-your-productivity

title: "**Bulk actions** on products"
popular: false
ee-only: false
related: sequential-edit
---

# Overview

Bulk operations enable you to **perform actions on multiple products at once**. These operations are performed on a selection of products from the grid.

To access the bulk actions, go on the Product grid, **select at least one product** and click on the `Bulk actions` button, at the bottom of the grid.

# Available bulk actions
Here’s the list of the bulk operations available in the PIM:
  - **Edit attributes values**: Edit the attributes values of your selection of products. For instance, set a new release date or a new value for an attribute.
  - **Add attributes values**: Add values for the multivalued attributes on your selection of products. For instance, add a collection or an asset.  
  - **Change family**: Choose/change the family of the selected products.
  - **Change status (enable/disable)**: Edit the status of one or several products, enable or disable products.
  - **Add to groups**: Add your selection of products to one or more groups.
  - **Add to categories**: Add products or product models into categories.
  - **Move between categories**: Change your products categorization
  - **Remove products from categories**: Remove products from one or more categories at once. Selected products will be uncategorized.
  - **Add to an existing product model**: Add a simple product as a variant to a [product model](what-about-products-variants.html#what-is-a-product-model) if 2 levels of variants or to a [sub product model](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed) if 3 levels of variants.
  - **Change the parent product model**: Change the parent [product model](what-about-products-variants.html#what-is-a-product-model) of variant products or [sub product models](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed).
  - **Associate to products**: Add associations for your selection of products.
  - **Publish products _(EE only)_**: Mass publish products.
  - **Unpublish products _(EE only)_)**: Mass unpublish products. This action is available in the `Published products` grid.

::: info  
In order to perform a bulk operation on products, you need the rights to each possible action, and also the general permission to perform bulk actions on products.
:::

# How to perform bulk actions?

1.  Select the desired products in the grid with the appropriate filters
1.  Tick the products you want to mass edit via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action:
![Mass edit options](../img/Products_BulkActionUppermenu.png)
1.  Click on `Bulk Actions`
1.  Select the operation to be performed from the screen menu
![Operations to be performed](../img/Products_BulkAction2.png)
1.  According to the selected operation, the next screen of configuration changes

| Operations  | Step of configuration  |
|:------------|:-----------------------|
| Edit attributes values | Add attributes to the products to set the values ​​to be applied |
| Add attributes values | Add attributes to the products to add the values ​​to be applied |
| Change family | Select the family to be applied on products   |
| Change status | Select the status to be applied: enable or disable  |
| Add to groups     | Check the groups in which the products will be brought together       |
| Add to categories<br>Move between categories<br>Remove from categories | Tick the categories in which the products will be categorized, moved or removed.   |
| Add to an existing product model  | Select the product model or sub product model to gather the products    |
| Change the parent product model  | Select the new parent product model to gather the products or [sub product models](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed) selected   |
| Associate to products  | Add associations to the selected products   |
| Publish products  | Confirm the action     |
| Unpublish products  | Confirm the action     |

Confirm the action with the `Confirm` button located in the middle of the screen.

![Confirm button](../img/Products_ConfirmBulkActions.png)

The action is processed as a background task, so you can continue to work on the PIM. When the process is done, you are the only user to be notified.

![Notification center](../img/Products_MassEditNotifications.png)

To access the Execution details of the process, click on the notification icon.

![Process tracker](../img/Products-ProcessTrackerReportMassEdit.png)

::: info
The following operations `Change status`, `Add to groups` and `Publish products` are not available for the [product models](what-about-products-variants.html#what-is-a-product-model).  
To ease these bulk actions, if you select some product models in the grid, their children variant products will be updated. For example, if you select some product models in the grid and the bulk action `Change status`, the variant products' statuses of the product models selected will be changed.
:::

::: ee
After some of the bulk actions the rules will be automatically executed.
:::

# Edit attribute values or add new attribute values

:::info
**Changes will be applied on the scope and the locale selected in the product grid**. If you have several locales or scopes to make changes on, you will have to do several bulk actions.
:::

:::tips
If you select some [product models](what-about-products-variants.html#what-is-a-product-model) in the grid, the attributes will be updated on the product models and all their children variant products according to the [family variant](what-about-products-variants.html#what-is-a-family-variant) definition. For example, if the description (defined as `common attributes`) and the weight (defined for each variant product) are mass edited, the description will be updated on the product models and the weight on each child variant product of the selected product models.
:::

:::warning
These actions will not apply on products without families.
:::

:::ee
A check box `Send for approval` is displayed in the confirmation step. If you select it and have `Edit` rights on products, you will automatically send the [drafts](https://help.akeneo.com/pim/v3/articles/proposals-workflow.html#statuses-of-products) for approval. At the end of the process, you will receive a notification with the number of proposals generated.
:::

## Edit attribute values

To ease the mass enrichment of products attributes values, you can edit the attributes values of your products thanks to the `Edit attributes values` bulk action in the product grid. For example, you can set the brand of a selection of products to Akeneo.

1.  Search for products in the grid with the appropriate filters
2.  Select the products to edit: tick the products you want to add via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
3.  Click on `Bulk Actions`
4.  Select `Edit attributes values` and then `Next`
5.  Click on `Select attributes` to select the attributes you want to update (for example the brand)
6.  Add values for the selected attributes
![Mass edit options](../img/Products_BulkActionEditAttribute.png)
7.  Click on `Next`
8.  Confirm the action with the `Confirm` button located in the middle of the screen
9.  The attributes values will be updated in the selected products

:::warning
This action **will not add new attribute to products, it will only update the attributes that already belong to the families of the selected products.**
:::

## Add new values to attributes

You can use the `Add attributes values` action to add new values to the attributes having multiple values:
 - Multi-select attributes
 - Reference data multi-select attributes
 - Assets collection attributes _(EE only)_
 - Reference entity multiple links attributes _(EE only)_

For example, you can now easily and massively add a new asset to several products or a new option value to a multi-select attribute used for several products. To do so, simply follow our steps:
1.  Search for products in the grid with the appropriate filters
2.  Select the products to edit in your product grid: tick the products you want to add via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
3.  Click on `Bulk Actions`
4.  Select `Add attributes values` and then `Next`
5.  Click on `Select attributes` to select the attributes you want to update (for example the collection)
6.  Add values for the selected attributes
![Mass edit options](../img/Products_BulkActionAddAttribute.png)
7.  Click on `Next`
8.  Confirm the action with the `Confirm` button located in the middle of the screen
9.  The attributes values will be added in the selected products. The previous attributes values are kept.

:::info
Like the `Edit attribute values`, this action **will not add new attribute to products, it will only update the attribute values that already belong to the families of the selected products.**
:::

# Categorize, move or remove products

In order to save you some time, you can also directly categorize products in categories without an import / export thanks to a bulk action in the product grid.

1.  Search for products in the grid with the appropriate filters
2.  Select the products to be categorized via the selection tool: tick the products you want to update via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
![Mass edit options](../img/Products_BulkActionUppermenu.png)
3.  Click on `Bulk Actions`
4.  Select the operation to be performed from the screen menu
5.  According to the selected operation, the next page of configuration changes


| Operations                  | Step of configuration |
|:----------------------------|:----------------------|
| Add to categories | The products will be positioned into the selected categories, the existing placement is kept |
| Move between categories     | The products will be moved into the selected categories, the existing placement is lost       |
| Remove from categories | The products will be removed from the selected categories                                     |

Confirm the action with the `Confirm` button located in the middle of the screen.

:::info
These bulk actions also support [product models](what-about-products-variants.html#what-is-a-product-model).
:::

# Add products to an existing product model

To ease the enrichment of [products with variants](what-about-products-variants.html), you can gather products in a [product model](what-about-products-variants.html#what-is-a-product-model) to allow the enrichment of their common properties.

1.  Search for products in the grid with the appropriate filters
2.  Select the products to add to an existing product model: tick the products you want to add via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
3.  Click on `Bulk Actions`
4.  Select `Add products to an existing product model` and then `Next`
5.  Select a family, a [family variant](what-about-products-variants.html#what-is-a-family-variant) and a [product model](what-about-products-variants.html#what-is-a-product-model)
![Mass edit options](../img/Products_BulkActionAddProductModel.png)
6.  Click on `Next`
7.  Confirm the action with the `Confirm` button located in the middle of the screen
8.  The products allowed will be added to the selected product model

:::info
The attributes defined as `common attributes` in the [family variant](what-about-products-variants.html#what-is-a-family-variant) will be now enriched at the product model level, the previous values for these attributes on the products are removed. For example, if you add 2 products with an existing description and you would like to gather them in a product model and manage a common description, their previous descriptions are removed.
:::

:::warning
This operation can only be performed for non variant products, so products not already linked to a product model:
  - You cannot add product models to a product model, only products.
  - You cannot change the parent product model of a variant product.
:::

# Change the parent product model

To allow more flexibility on variant products (such as merging or splitting product models), you can now change the parent product model of a variant product or a [sub product model](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed).

:::warning
The new parent product model should have the same [family variant](what-about-products-variants.html#what-is-a-family-variant) than the previous parent model, else the parent is not changed.
:::

Hereafter 2 examples of use cases:
  - In the ERP, there are 2 models of beers for the same beer that come in different sizes, one model that comes in 33cl and 75cl volume, one with 6L and 6L triple pack volume. The marketing team would like to keep only one model with all the available sizes.
  - In the ERP, the buyers have created one t-shirt model with different colors – some in basic solid colors and some with colored flowers - but the marketing team would like to split the colors in 2 different models. Technically it's the same product but it's not the same target customer and not the same description or season. Marketing would prefer 2 different product models (one with the basic solid colors and one with the colored flowers).
  ![Mass edit options](../img/Products_BulkActionChangeParentProductModelEx.png)

1.  Search for products or sub product models in the grid with the appropriate filters
2.  Select the products or sub product models to change the parent product model: tick the products or sub product models you want to add via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
![Mass edit options](../img/Products_BulkActionChangeParentProductModelSelect.png)
3.  Click on `Bulk Actions`
4.  Select `Change the parent product model` and then `Next`
5.  Select a family, a [family variant](what-about-products-variants.html#what-is-a-family-variant) and a [product model](what-about-products-variants.html#what-is-a-product-model)
![Mass edit options](../img/Products_BulkActionChangeParentProductModel.png)
6.  Click on `Next`
7.  Confirm the action with the `Confirm` button located in the middle of the screen
8.  The variant products or product models allowed will be moved to the selected product model

:::info
The attributes defined as `common attributes` in the [family variant](what-about-products-variants.html#what-is-a-family-variant) will have now the values of the new parent product model.
:::

:::warning
This operation can only be performed for variant products or [sub product models](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed), already linked to a parent product model.
:::

# Associate products

To ease the add of associations, you can mass associate products.

1.  Search for products in the grid with the appropriate filters
2.  Select the products to add associations: tick the products you want to add via the down arrow of the toolbar: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
3.  Click on `Bulk Actions`
4.  Select `Associate to products` and then `Next`
5.  Select the association type
  ![Select association type](../img/Products_BulkSelectAssociationType.png)
6.  Click on the `Add associations` button
  ![Add association](../img/Products_BulkAddAssociation.png)
7.  The picker to select products or product models opens
8.  Filter on the categories, on the label or identifier or add filters to find the products or product models to associate
9.  Tick in the grid the products or product models to associate, they are displayed in the basket
  ![Add association](../img/Products_BulkPickerAssociation.png)
10.  Click on the `Confirm` button
11.  Confirm the bulk action with the `Confirm` button located in the middle of the screen
  ![Add association](../img/Products_BulkConfirmAssociation.png)
12.  The products selected will be associated to the products and product models

:::info
You can define associations on [Product models](what-about-products-variants.html#what-is-a-product-model). So if you select product models in the grid and mass associate, the product models and their children (variant products and product models) will be associated.
:::

:::info
You can view the associations for a product in its product form, in the `Associations` tab, refer to [this article](products-associations.html) for more details.
:::

# Delete multiple products

To delete multiple products:
1.  Search for products in the grid with the appropriate filters
2.  Select the products to be removed via the selection tool: select `All` to apply changes on **all your products**, `All visible` for all visible products (ongoing page) or click on `None` to cancel the action
![Mass edit options](../img/Products_BulkActionUppermenuDelete.png)
3.  Click on `Delete` in the toolbar located at the bottom of the screen
4.  Confirm the action with the `Confirm` button
![Confirm delete](../img/Products_BulkActionUppermenuDelete2.png)

:::info
Due to safety reasons, **you cannot remove more than 1000 products at a time.**
:::

:::info
You can also mass delete [product models](what-about-products-variants.html#what-is-a-product-model). **If you delete product models, all their children (product models and variant products) are also deleted.**
:::

:::info
Like all bulk actions mass delete action is a back-end task, so you can continue to work on the PIM without experiencing slowdowns. When the process is done, you are the only user to be notified and when you click on the notification, you can access the report page.
:::
