---
id: duplicate-a-product
themes: products-super-power
title: "**Duplicate** products"
popular: false
ee-only: true
related: products-grid, work-on-a-product, create-a-product
---

# Overview

You can duplicate products directly in the PIM.

Product’s duplication is submitted to specific rights.

::: ee
This feature is only available in the Enterprise Edition.
:::

# Duplicate a product

1.  To duplicate a product, select a product in the grid to open the product form
1.  Click on `...` in the top right corner of the screen
1.  Select `Duplicate` in the dropdown
1.  Specify the unique identifier for the duplicated product
1.  Click on `Save`

![Duplicate your product](../img/Products_DuplicateProduct.png)

The product is duplicated and the form of the duplicated product is displayed, you can start changing its copied attributes.

For more details about the product enrichment, you can read [enrich your product](work-on-a-product.html).

:::info
All the product values are copied as well as categories, associations, assets and reference entities.
:::

:::info
When the product to duplicate contains an attribute defined as unique, the value for this attribute is left empty and needs to be fulfilled on the duplicated product form.
:::

::: warning
This feature is available for simple products, not variant products or product models.
:::

::: warning
The user needs to have the "Owner right" on the product. To understand what it means, don't hesitate to read how the [access rights on products](access-rights-on-products.html#rights-depending-on-the-categories) work.
:::
