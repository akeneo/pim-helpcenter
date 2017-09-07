---
id: publish-workflow
themes: products-super-power
title: The **publication**, the "2 versions/1 product" feature
popular: false
ee-only: true
---

# Overview

In the PIM, you can manage two different versions of a very same product, one published version used for export and another version to prepare for instance the next collection or season of products.

This is the job of the publication feature.

Publishing products defines which version of a product will be used for export.

::: info
The export of attributes, categories, etc... does not take into account the notion of «publication».
:::

# The publication process with an example

For example, a product is complete for all locales activated for the «Web» channel, this complete version is the 5th. The product is enabled and classified in the Web channel category tree.

When you will «publish this version» of this product, all its information will be saved and the PIM will created a «published» version, this published version will be used for the export.

Once you have published a product, you can still edit all its information, for instance, change its name, its description, its price... Publishing a product allows you to start working on a new version of the product without changing the exported data.

New information will not be taken into account in the export until you click again on «Publish this version».

# Use case for associations between published products

Only associations between published products are exported. An association of a published product with a non-published product, will not be visible in the export.

To associate 2 published products, for instance, Product A to Product B: Product B must be published before you create the association between those 2 products.

# Use case for other product information

If you change other product information else than attributes or associations, such as category classification, product activation (enabled / disabled), group membership and family change, the information will be updated in the export, they are not kept for the published product.