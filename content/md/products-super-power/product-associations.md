---
id: products-associations
themes: products-super-power
title: "**Associations** of products"
popular: false
ee: false
related: manage-your-association-types
---

# Overview

A product may be associated with none or several other products or product groups. This type of link has a direction: 1-way or 2-way. Please read our [Association Types documentation](manage-your-association-types.html#Overview) for more information.

These types of associations enable you to define relationships, such as an alternative product, a substitution between products, a cross-sell/up-sell option or even a product set composed of different quantities of products.

# View the product’s associations

To check the association types:
1.  Open the relevant product edit form
1.  Click on the `Associations` tab
1.  Click on the association type name on the left-hand side
1.  Click on the `Show groups` button on the right-hand side of the tab to display the product groups grid
1.  Click on the `Show products` button on the right-hand side of the tab to display the product grid

:::info
You can define associations on [product models](what-about-products-variants.html#what-is-a-product-model), please refer to this [article](enrich-products-variants.html#associate) for more details.
:::

Only the associated products or [product models](what-about-products-variants.html#what-is-a-product-model) are displayed in the `Associations` tab.

![View the associated products](../img/Products_ProductsAssociated21.png)

The total number of associations is displayed per product or product model (the figure is visible after the `Associations` tab label) and per association type (figure visible in the `Association type` list).
![View the number of associations](../img/Products_Products_Associated_Figures.png)

By default, if the product has no association for the selected association type, nothing is displayed in the `Associations` tab.

![No association](../img/Products_Products_No_Association.png)

# About associations' order

Today, it is not possible to define a specific order of your associated products/product models.
The current order is following those rules:
* Associated products are first displayed, then associated product models are displayed after.
* Associated products/product models are ordered by an alpha-numerical logic based on their internal ID (visible in the URL).  

For instance, if you associated the products "e9af9526-08df-4177-a7bc-34016b231d0c", "02255102-39ee-41cd-87af-340d1a3fe5cd", "732b0fe5-1159-4802-8c3d-a68eff1ba158" and the product model "1568", the default order logic will be the following:
1. Product "02255102-39ee-41cd-87af-340d1a3fe5cd" (it starts with a "0", the lowest figure here)
1. Product "732b0fe5-1159-4802-8c3d-a68eff1ba158" (it starts with a "7" which comes after "0")
1. Product "e9af9526-08df-4177-a7bc-34016b231d0c" (it starts with alphabetical value "e" which come after numerical values)
1. Product model "1568"

:::info
If you export your associated products/product models using the API or XLSX/CSV files, the order will be the same as explained in the paragraph above.
:::

# Open an associated product
1.  Open the relevant product edit form
1.  Click on the `Associations` tab
1.  Select the association type
1.  Click on an associated product or product model
1.  The associated product or product model opens in a new tab

# Add/remove associations to/from a product

To add associations, there is a picker to select the products or [product models](what-about-products-variants.html#what-is-a-product-model) you want to associate. Depending on the association type selected, there are two different ways to do so:

## A: add associations to a product

1.  Open the Product Form
1.  Click on the `Associations` tab
1.  Select the association type
1.  Click on the `Add associations` button
  ![Add association](../img/Products_Products_Add_Associations.png)
1.  The picker to select product or product models opens
  ![Add association product picker](../img/Products_Products_Associations_Picker2.png)
1.  Filter on the categories, on the label or identifier or add filters to find the products or product models to associate
1.  Tick in the grid the products or product models to associate, they are displayed in the basket
  ![Tick products to associate](../img/Products_Products_Associations_Basket2.png)
1.  Click on the `Confirm` button
1.  The products or product models you associate to the current product are displayed in the `Associations` tab
  ![View the associated products](../img/Products_ProductsAssociated21.png)

:::info
A product can also be associated to a [product model](what-about-products-variants.html#what-is-a-product-model).
:::

:::warning
If you want to associate your products/product models with 2-way associations via an XLSX/CSV import, please note that the PIM processes the import information line by line. So if different products A & B are associated with a same product C, make sure that the product C is also associated with products A & B, otherwise the associations made on the previous lines will be removed.
:::

:::warning
Please note that you should not associate more than 100 products/product models per one product/product model. If you exceed this number, you might expect performance issues.
:::

## B: add associations to a product using an association type with quantities

1.  Create a **product** or a **product model** that will be the base of your product set
1.  Open the product form
1.  Click on the `Associations` tab
1.  Select the association type with quantities you created (please read our [Association Types](manage-your-association-types.html#create-an-association-type-with-quantities) documentation for more information.)
  ![Select an association type](../img/Products_Products_Associations_Select_Association_type.png)
1.  Click on `Add associations`
1.  The picker to select product or product models opens
  ![Associations products picker](../img/Products_Products_Associations_Picker.png)
1.  Filter on the categories, on the label or identifier or add filters to find the products or product models you want to associate
1. In the grid, tick the products or product models to associate. They are displayed in the basket:
  ![Tick products to associate](../img/Products_Products_Associations_Basket.png)
1.  Click on `Confirm`
1.  The products or product models you associate to the current product are displayed in the `Associations` tab
  ![View the associated products](../img/Products_Products_Associations_associations_results.png)
1.  Adjust the quantities for each associated product/product model
  ![Adjust associated products quantities](../img/Products_Products_Associations_Quantities.png)
1.  Click on `Save`

:::warning
Quantities must be positive integers, between 1 and 2,147,483,647.  
Using the association type with quantities, please note that you cannot associate more than 100 products/product models per one product/product model.
:::

## Remove associations from a product

To remove an association:
1.  Open the Product Form
1.  Click on the `Associations` tab
1.  Select the association type
1.  Hover a product or product model associated
1.  Click on the cross to remove the association
1.  Click on `Save`

![Remove associations](../img/Products_Products_Remove_Association.png)

:::warning
If you wish to remove associations with quantities, the step 4 won't be available as the associated products will be displayed as a list, not as a gallery. In that case, please skip it to the step 5.
:::

:::info
A product that has been associated using a 2-way association will be removed on both sides.  Please read our [Association Types](manage-your-association-types.html#Overview) documentation for more information.
:::
