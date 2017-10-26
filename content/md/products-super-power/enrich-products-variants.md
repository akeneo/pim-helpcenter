---
id: enrich-products-variants
themes: products-super-power
title: "**Enrich** your products with variants"
popular: false
ee-only: false
related: create-a-product, work-on-a-product, manage-your-families
---

# Display products with variants

Products with variants are displayed in the grid, they can be managed and enriched in the same way as other products.

By default, the [product model](/articles/what-about-products-variants.html#what-is-a-product-model) is displayed in the grid.

::: tips
To recognize a product model in the grid, it's displayed with a pile of pictures which means that some variant products are behind this model.
:::

A product model has no completeness, but you can follow the completeness of its variant products in the column `Variant products` in the grid, with:
- 1st number: the number of complete variant products for this product model  
- 2nd number: the total number of variant products behind this product model

For example, on the 1st product model, 2 variant products are complete out of the 5 variant products.

![image](../img/dummy.png)

::: info
If the background of the `Variant products` is:
- Red: all products of the product model are incomplete
- Yellow: at least one product of the product model is complete
- Green: all products of the product model are complete
:::

# Search for products with variants

## Filter on your attributes

To easily manage the products with variants and their until 3 levels of enrichment, we have added a smart search in the grid for products with variants to automatically display what you are looking for.

By default, the product models are displayed in the grid.
For example, you have a model of t-shirt which vary by color (blue, red, grey) and by size (S, M, L, XL).

![image](../img/dummy.png)

As done on e-commerce websites, if you are looking for clothing with the color "red", the red t-shirt will be automatically displayed in the grid.

![image](../img/dummy.png)

If you are looking for clothing with the color "red" and the size "S", the red S t-shirt will be displayed with its completeness.

![image](../img/dummy.png)

## Filter on the completeness

A product model has no completeness but its variant products have a completeness.

For the completeness filter `Complete`:
- If `Yes`, the product models with at least one variant product complete are displayed in the grid
- If `No`, the product models with at least one variant product incomplete are displayed in the grid
- If `All`, there is no filter on the completeness

# Edit products with variants

Click on a [product model](/articles/what-about-products-variants.html#what-is-a-product-model) on the grid or create a new product model to display the product form for products with variants.

The products with variants are enriched in the same product form than products without any variant.

For more details about the product form, you can read [How enrich a product](/articles/work-on-a-product.html).

## Header and infos

For products with variants, the number of variant products behind the model and the number of complete variant products for the model are displayed in the product form header (`Variant products`).

![image](../img/dummy.png)

For products with variants, the following properties are displayed in the `Product infos`:
- Family: All the products of a product model belong to the same family
- **Variant**: A [family variant](/articles/what-about-products-variants.html#what-is-a-family-variant) defines how the products with variants are structured
- Created: Creation date and user who create the product model
- Last update: Updated date and user who last update the product model

![image](../img/dummy.png)

## Navigate among your products with variants

The product form for products with variants has a navigation component to navigate among your products with variants structure and display the different variant levels.   
You can enrich easily the common properties or the specific properties for a variant level.

This navigation component is composed of:
- `COMMON`: you can enrich the common properties for all the products of this model
- `Variant axes labels level 1`: you can enrich the properties which vary according to the variant axes level 1 of this model (`COLOR` in our example)
- `Variant axes labels level 2`: if your family variant has 2 variant levels, you can enrich the properties which vary for each product of this model (`SIZE` in our example)

![image](../img/dummy.png)

1.  Click on the small arrow next to the `Variant axes labels level 1` to display the values available for this product model (`COLOR` in our example)

![image](../img/dummy.png)

1.  Click on a line to reload the product form with the properties of the variant axes values selected
1.  Click on the small arrow next to the `Variant axes labels level 2` to display the values available for this product model (`SIZE` in our example)

![image](../img/dummy.png)

1.  Click on a line to reload the product form with the properties of the variant axes values selected   

In the navigation component, you can also view the number of variant products complete for a product model or the completeness of the product if it's the last variant level (product level).

::: info
We manage the following common properties for products with variants:
- Attributes
- Categories
:::

## Enrich their attributes

In `COMMON`, in the tab `Attributes`, you can enrich the common attributes for the products of this product model (the common attributes are defined in the [family variant](/articles/manage-your-families.html#manage-familys-variants)).

![image](../img/dummy.png)

::: info
In a variant level, you can view the common attributes but you can not update them. If you would like to update them, go in `COMMON` (message _This attribute can be updated on the common attributes_) or in the dedicated level (message example _This attribute can be updated on the attributes by Color_).
:::


## Categorize

In `COMMON`, in the tab `Categories`, you can classify the model and all its children products in categories.

You can then add categories for a specific variant level. For example, your model is categorized in `T-shirts` and for the color blue, you can add them to a dedicated category `Marine`.

![image](../img/dummy.png)

::: info
You can add categories on the products for this product model but on a product you can not remove a category of its parent, the category is disabled in the tree. If you would like to remove it, go in `COMMON` or in the dedicated level.
:::

# View their history

For each change, a new version is created. What is tracked down for each version:
- The author or system that made the changes
- The date and time (up to seconds) at which the changes took place
- The old and the new value of each amended product information

The list of versions are displayed in the tab `History`.

::: info
In `COMMON`, only the common properties (attributes and categories) will be versioned. You can use the navigation component to display the versions of each variant level.
:::
