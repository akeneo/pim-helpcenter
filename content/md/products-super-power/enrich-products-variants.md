---
id: enrich-products-variants
themes: products-super-power
title: "**Enrich** your products with variants"
popular: false
ee-only: false
related: what-about-products-variants, manage-your-families, create-a-product, work-on-a-product
---

# Display products with variants

Products with variants are displayed in the grid, they can be managed and enriched in the same way as other products.

By default, the [product model](/articles/what-about-products-variants.html#what-is-a-product-model) is displayed in the grid.

![Grid with product models](../img/Products_ProductModel_grid.png)

::: tips
To recognize a product model in the grid, it's displayed with a pile of pictures which means that some variant products are behind this model.
:::

A product model has no completeness, but you can follow the completeness of its variant products in the column `Variant products` in the grid, with:
- 1st number: the number of complete variant products for this product model  
- 2nd number: the total number of variant products behind this product model

For example, on the 1st product model, 2 variant products are complete out of the 6 variant products.

![Variant products for product models](../img/Products_ProductModel_grid_VariantsProducts.png)

::: info
If the background of the `Variant products` is:
- Red: all products of the product model are incomplete
- Yellow: at least one product of the product model is complete
- Green: all products of the product model are complete
:::

# Search for products with variants

## Filter on your attributes

To easily manage the products with variants and their until 3 levels of enrichment, we have added a **smart** search in the grid for products with variants to automatically display what you are looking for.

By default, the product models are displayed in the grid.
For example, you have a model of t-shirt which vary by color (blue, red, grey) and by size (S, M, L, XL).

![Grid with product models](../img/Products_ProductModel_Search1.png)

As done on e-commerce websites, if you are looking for clothing with the color "red", the red t-shirt will be automatically displayed in the grid.

![Search results with color red](../img/Products_ProductModel_Search2.png)

If you are looking for clothing with the color "red" and the size "S", the red S t-shirt will be displayed with its completeness.

![Search results with color red and size S](../img/Products_ProductModel_Search3.png)

:::tips
If you would like to display only products in the grid, you just have to filter on an attribute that is always at the product level, whatever the [family variant](/articles/what-about-products-variants.html#what-is-a-family-variant), for example the identifier ("SKU").
:::

## Filter on the completeness

A product model has no completeness but its variant products have a completeness.

For the completeness filter `Complete`:
- If you select `Yes`, the product models with at least one variant product complete are displayed in the grid
- If you select `No`, the product models with at least one variant product incomplete are displayed in the grid
- If you select `All`, there is no filter on the completeness

## Filter on the parent product model (_since 2.1_)

To display the children of a product model, you can filter on the `parent` attribute in the product grid with the product model code.

You can also add a `parent` column in the grid to display the parent product model code. This column is not displayed by default, you can add it by clicking on `Columns`.

![Search on parent](../img/Products_ProductModel_SearchParent.png)


# Edit products with variants

Click on a [product model](/articles/what-about-products-variants.html#what-is-a-product-model) on the grid or create a new product model to display the product form for products with variants.

The products with variants are enriched in the same product form than products without any variant.

For more details about the product form, you can read [Enrich your product](/articles/work-on-a-product.html).

## Header and infos

For product models, the following properties are displayed in the product form header:
- The number of complete variant products out of the number of variant products for a product model in `Variant products` (ex: 2/6 means that 2 variants out of 6 for the product model are complete)
- The total `missing required attributes` (_since the 2.1_) for a product model. If you click on it, it displays only the attributes that are required for the completeness but that are still incomplete (it filters on display `All missing required attributes`).

![Header for product model](../img/Products_ProductModel_Header.png)

For product models, the following properties are displayed in the `Product infos`:
- Family: All the products of a product model belong to the same family
- **Variant**: A [family variant](/articles/what-about-products-variants.html#what-is-a-family-variant) defines how the products with variants are structured
- Created: Creation date and user who create the product model
- Last update: Updated date and user who last update the product model

![Product form for product model](../img/Products_ProductModel_PEF.png)

## Navigate among your products with variants

The product form for products with variants has a navigation component to navigate among your products with variants structure and display the different variant levels.   
You can enrich easily the common properties or the specific properties for a variant level.

This navigation component is composed of:
- `COMMON`: you can enrich the common properties for all the products of this model
- `Variant axes labels level 1`: you can enrich the properties which vary according to the variant axes level 1 of this model (`COLOR` in our example)
- `Variant axes labels level 2`: if your family variant has 2 variant levels, you can enrich the properties which vary for each product of this model (`SIZE` in our example)

![Navigation component for product model](../img/Products_ProductModel_PEFEnrich1.png)

1.  Click on the small arrow next to the `Variant axes labels level 1` to display the values available for this product model (`COLOR` in our example)  
  ![Navigation by color for product model](../img/Products_ProductModel_PEFNav1.png)
2.  Click on a line to reload the product form with the properties of the variant axes values selected
3.  Click on the small arrow next to the `Variant axes labels level 2` to display the values available for this product model (`SIZE` in our example)
  ![Navigation by size for product model](../img/Products_ProductModel_PEFNav2.png)
4.  Click on a line to reload the product form with the properties of the variant axes values selected   

In the navigation component, you can also view the number of variant products complete for a product model or the completeness of the product if it's the last variant level (product level).

::: info
We manage the following common properties for products with variants:
- Attributes
- Categories
:::

## Enrich their attributes

In `COMMON`, in the `Attributes` tab, you can enrich the common attributes for the products of this product model (the common attributes are defined in the [family variant](/articles/manage-your-families.html#manage-familys-variants)).

![COMMON for product model](../img/Products_ProductModel_PEFEnrich1.png)

::: info
In a variant level, you can view the common attributes but you can not update them. If you would like to update them, go in `COMMON` (message _This attribute can be updated on the common attributes_) or in the dedicated level (message example _This attribute can be updated on the attributes by Color_).
:::

![SIZE for product model](../img/Products_ProductModel_PEFEnrich2.png)

## Categorize

In `COMMON`, in the `Categories` tab, you can classify the model and all its children products in categories.

You can then add categories for a specific variant level. For example, your model is categorized in `T-shirts` and for the color blue, you can add them to a dedicated category `Marine`.

![SIZE for product model](../img/Products_ProductModel_PEFCategory.png)

::: info
You can add categories on the products for this product model but on a product you can not remove a category of its parent, the category is disabled in the tree. If you would like to remove it, go in `COMMON` or in the dedicated level.
:::

# Add a variant

You can add a variant to a product model from the product form via the navigation component.

1.  In the navigation component, click on the `Add new` button, a pop-in is displayed
  ![Add new variant](../img/Products_ProductModel_AddProduct_1.png)
1.  Select or enter the values for the variant axes
1.  Specify a product model code or a product identifier depending on the variant level
  ![Add new variant](../img/Products_ProductModel_AddProduct_2.png)
1.  Click on `Confirm`
  ![Add new variant](../img/Products_ProductModel_AddProduct_3.png)

The variant is added to the product model and its form is displayed, you can start filling its attributes.

::: info
If the [family variant](/articles/what-about-products-variants.html#what-is-a-family-variant) has 2 variant levels (for example by color then by size), you can add a variant `COLOR` at the 1st variant level as a product model (with a code) or you can also add a variant `SIZE` to a `COLOR` at the 2nd variant level as a variant product (with a product identifier).
:::

# View their history

For each change, a new version is created. What is tracked down for each version:
- The author or system that made the changes
- The date and time (up to seconds) at which the changes took place
- The old and the new value of each amended product information

The list of versions are displayed in the `History` tab.

::: info
In `COMMON`, only the common properties (attributes and categories) will be versioned. You can use the navigation component to display the versions of each variant level.
:::

# Delete a product model

You can delete a product model from the product grid or the product form.

## From the product grid
1.  Hover your mouse over the product model line in the grid, then the delete button (a trash icon) will be displayed
1.  Click on the `Delete` button
1.  A confirmation pop-in opens
  ![Add new variant](../img/Products_ProductModel_Delete.png)
1.  Then click on `Delete` to confirm you want to delete the product model and its children

:::warning
The product model and all its children (product models and variant products) are deleted.
:::

:::info
It's not possible to mass delete product models from the product grid, because the delete of a product model could delete in cascade lots of children product models and variant products.
:::

## From the product form
1.  Open the product form for a product model
1.  Click on the `...` in the top right corner of the screen
1.  Select `Delete` in the dropdown
1.  A confirmation pop-in opens
  ![Add new variant](../img/Products_ProductModel_Delete.png)
1.  Then click on `Delete` to confirm you want to delete the product model and its children

:::warning
The product model and all its children (product models and variant products) are deleted.
:::  
