---
id: how-to-manage-my-publications
themes: products-super-power
title: Manage **publishing**
popular: false
ee-only: true
related: publish-workflow, work-on-a-product
---

# Publish products

## Publish a single product

To publish a product:
1.  Select a product in the grid,
1.  Open the product form
1.  Click on the "..." in the top right corner of the screen
1.  Select `Publish this version` in the dropdown

The current version will be published. In the `History` tab, the published version is indicated by a blue `Published` button as shown below:

![Published History Button](../img/Products_PublishedHistoryButton.png)

If you click on the arrow to open the complete `History` page, the published version will have the `Published` label, as shown below:

![Published History Button dropdown](../img/Products_PublishedHistoryDropdown.png)

## Publish several products at once

To publish several products simultaneously:

1.  Select products in the product grid
1.  Click on the `Bulk Actions` button at the bottom of the screen, select the `Publish` action
1.  Choose the `Publish products` operation and click on `Next`:
    *   If you have the own permission on all the products you have selected, follow the steps and all the selected products will be published
    *   If you have the own permission on some of these products: a message will inform you that you will only be able to publish the relevant products on which you have the own right. Then, follow the steps and only the products you manage will be published. The other products will not be published
    *   If you do not have the own permission on any of the selected products: an error message will inform you that you do not have permission to publish these products. Click on the `Back` button to exit the mass edit process

::: info
**Product models cannot be not published**, if you select a product model in the grid, **only its variant products will be published**.
Variant products will be published with all their attributes: their own attribute values as well as their parents, and with the link to their parent product model (`parent` attribute)
:::

# View the published products

## List the published products

To check which products are published:

1.  Go to the Product grid
1.  Click on the "..." in the top right corner of the screen
1.  Select `Published Products` in the dropdown

![Publish](../img/Products_PublishedGrid.png)

Note that some features are not available from this grid:

*   You will not be able to create a new product from this page
*   You will not be able to delete any published products
*   You will not be able to edit any published products

The views are specific to the published product grid. Hence, the views of unpublished products are not shared with the grid of published products.

:::ee
  1. Like on the product grid, you can define a published product grid default view in your user account, learn how to set up this default published grid view in the [Manage your account](manage-your-account.html#your-favorite-catalog-and-product-grid-settings) article.
  2. This option will be visible in your account if you have already created a custom view in the published product grid, if not, the field will not appear.
:::

Attributes, families, groups and categories are taken into account by published product versions and cannot be deleted.    

Only one mass action is available on published products: `Unpublish`.

## View a published product

From the published product grid:
1.  Go to the published product grid
1.  Select a published product
1.  Its product form is displayed

From the product grid:
1.  Click on the "..." in the top right corner of the screen
1.  Select `Published products` in the dropdown
1.  The published product grid is displayed
1.  Select a published product
1.  Its product form is displayed

![Published Products](../img/Products-PublishedProducts.png)

:::info
Published product information can only be viewed, they cannot be edited.
:::

Product information are displayed the same way as in the product form, to learn more about the product form, read the [Enrich your product](work-on-a-product.html) article. 
Permissions are also applied on published products, so if you do not have the appropriate rights to see some attribute groups, they will not be displayed.

When you own the ongoing published product, there are two actions available in the header on the right side:

*   Edit the current product version (working copy): clicking on this button will redirect you to the unpublished product form.

![Edit working copy or Unpublish buttons](../img/Products-PublishedProduct2.png)

*   Unpublish: to unpublish this product

# Unpublish products

Unpublishing products remove the product’s version from being used in the published product exports.

Unpublishing products only impact the export of published products. The export of attributes, categories, etc does not take into account the concept of unpublishing product.

## Unpublish a single product

You can unpublish a product from the main product form or from the published product grid.

From the published product grid:
1.  Go to the published product grid (click on the `...` on the top right corner of the product grid screen)
1.  Click on the small papersheet icon displayed on product rollover in the grid (see screenshot below)

:::info
You can also unpublish the product directly from the published product form.
:::

![Unpublished a product from the grid](../img/Products-PublishedProduct3.png)

From the product grid:
1.  Go to the product grid
1.  Select the product to unpublish
1.  Click on the `...` on the top right corner, 
1.  Click on `Unpublish`

The product will no longer be published and the product will not be listed anymore in the published product grid.

## Unpublish several products at once

To unpublish several products at the same time:
1.  Go to the published product grid (click on the `...` in the top right corner of the product grid screen)
1.  Select published products in the grid, the bulk action menu will appear at the bottom of the screen
1.  Click on `Bulk action`
1.  Then click on `Unpublish` button
![Bulk Actions on Publish products](../img/Products-PublishedProduct4.png)
1.  Select the `Unpublish` operation:
    *   If you have the own permission on all the products you have selected, follow the steps and all the selected products will be unpublished.
    *   If you have the own permission on some of these published products: a message will inform you that you will only be able to unpublish the relevant products on which you have the own right. Then, follow the steps and only the products you own will be unpublished. The other products will not be unpublished.
    *   If you do not have the own permission on any of the selected products: an error message will inform you that you do not have permission to unpublish these products. Click on the `Back` button to exit the mass edit process.
