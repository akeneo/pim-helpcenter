---
id: products-associations
themes: products-super-power
title: "**Associations** of products"
popular: false
ee-only: false
related: manage-your-association-types
---

# Overview

A product may be associated with none or several other products or product groups. This type of link also called a relationship has a direction: e.g. Product “A” --> Product “B” and Product “A” --> Product Group ”G”. The Product “B” and the product group “G” have no link or associations with the product “A”.

::: info
This type of relationship enables you to define relationships like an alternative product or a substitution between products for example.
:::

:::info
Since the 2.1, a product can be associated to a [product model](/articles/what-about-products-variants.html#what-is-a-product-model).
:::

:::warning
Only products can have associations, [product models](/articles/what-about-products-variants.html#what-is-a-product-model) have no association.
:::

# View the product’s associations

To check the association types:
1.  Open the relevant product edit form
1.  Click on the `Associations` tab
1.  Click on the association type name on the left-hand side
1.  Click on the `Show groups` button on the right-hand side of the tab to display the product groups grid
1.  Click on the `Show products` button on the right-hand side of the tab to display the product grid

## View the product’s associations (_until 2.0_)

![image](../img/Products_Associations.png)

The green icon in front of the name of the association type shows that the product has at least one association with another product or group of products. The first type of association is displayed in the product grid, listing the products on which the type of association has been applied.

![image](../img/Products_ProductsAssociated.png)

The associated products can be identified by the input `Yes` in green in the `Is associated` column of the grid. The boxes are also checked.

## View the product’s associations (_since 2.1_)

Only the associated products or [product models](/articles/what-about-products-variants.html#what-is-a-product-model) are displayed in the `Associations` tab.

![View the associated products](../img/Products_ProductsAssociated21.png)

By default, if the product has no association for the association type selected, nothing is displayed in the "Associations" tab.

![No association](../img/Products_ProductsNoAssociation.png)

# Add/remove associations to/from a product

## Add/remove associations to/from a product (_until 2.0_)

To associate a product with another product or group of products:
1.  Open the Product Form
1.  Click on the `Associations` tab
1.  Click on the association name on the left-hand side
1.  Find the products or the product groups and tick them
1.  Untick the products or the product groups that you no longer want to associate with the relevant product
1.  Click on the `Save` button

![image](../img/Products_ProductsAssociated.png)

## Add associations to a product (_since 2.1_)

To add associations, there is a picker to select products or [product models](/articles/what-about-products-variants.html#what-is-a-product-model) to associate:
1.  Open the Product Form
1.  Click on the `Associations` tab
1.  Select the association type
1.  Click on the `Add associations` button
  ![Add association](../img/Products_ProductsAddAssociation.png)
1.  The picker to select product or product models opens
  ![Add association](../img/Products_ProductsPickerAssociation.png)
1.  Filter on the categories, on the label or identifier or add filters to find the products or product models to associate
1.  Tick in the grid the products or product models to associate, they are displayed in the basket
  ![Add association](../img/Products_ProductsBasketAssociation.png)
1.  Click on the `Confirm` button
1.  The products or product models you associate to the current product are displayed in the `Associations` tab

![View the associated products](../img/Products_ProductsAssociated21.png)

## Remove associations from a product (_since 2.1_)

To remove an association:
1.  Open the Product Form
1.  Click on the `Associations` tab
1.  Select the association type
1.  Hover a product or product model associated
1.  Click on the cross to remove the association
1.  Click on the `Save` button

![Remove associations](../img/Products_ProductsRemoveAssociation.png)
