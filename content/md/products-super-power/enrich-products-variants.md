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

By default, the [product model](what-about-products-variants.html#what-is-a-product-model) is displayed in the grid.

![Grid with product models](../img/Products_ProductModel_grid.png)

::: tips
To recognize a product model in the grid, it's displayed with a pile of pictures which means that some variant products are behind this model.
:::

A product model has no completeness, but you can follow the completeness of its variant products in the `Variant products` column in the grid, with:
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

To easily manage up to 3 levels of enrichment for the products with variants, we added a **smart** search in the grid to automatically display what you are looking for. Either a [product model](what-about-products-variants.html#what-is-a-product-model), or a product.

:::info
By default, if no filter in the grid, the products are grouped by product models, so the product models are displayed in the grid.
:::

Let's take an example with a t-shirt model `model-tshirt-divided` with 2 variant levels, available in 3 colors (blue, red, grey) and each color is available in 4 different sizes (S, M, L, XL).
When you open the grid, one line for this t-shirt model is displayed (12 variant products are grouped in this product model).

![Grid with product models](../img/Products_ProductModel_Search1.png)

As done on e-commerce websites, if you are looking for clothes with the color "red", red clothes will be automatically displayed in the grid.

So in our example, you add the filter on the `color` attribute and select the `red` option, the `model-tshirt-divided-red` [sub product model](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed)  is displayed in the grid (with 4 red variant products in S, M, L, XL sizes).

![Search results with color red](../img/Products_ProductModel_Search2.png)

If you are looking for clothes with the `red` color and the `S` size, red clothes with the S size will be displayed in the grid.

So in our example, you keep the filter on the `color` attribute with the `red` option and you add a filter on the attribute `size` and select the `S` option. For this t-shirt model, only one product has the color red and the size S, so the `tshirt-divided-red-s` variant product is displayed in the grid with its completeness.

![Search results with color red and size S](../img/Products_ProductModel_Search3.png)

:::tips
If you would like to display only products in the grid, you just have to filter on an attribute that is always at the product level, whatever the [family variant](what-about-products-variants.html#what-is-a-family-variant), for example the identifier ("SKU").
:::

## Filter on the categories

If you search by categories, the grid will automatically display the product models or the products classified according to the category selected in the grid.

If a product model is not classified in the selected category but its children products are, the products will be displayed in the grid.
So all the filters, attributes and categories selected in the grid, will be taken into account to display the level you would like to enrich. Either a product model, or a product.

:::info
For more details about the classification of products with variants, please read this [paragraph](enrich-products-variants.html#categorize) in the article.
:::

Let's take again our previous example, the t-shirt model "Model-tshirt-divided" is classified in the `T-shirts` category, its color red is classified in the `Christmas` category and the products with the sizes S (red S, blue S, grey S) are classified in the `Small` category.

If you click on the `T-shirts` category, the `Model-tshirt-divided` product model is displayed in the grid.

![Grid with product models](../img/Products_ProductModel_SearchCat1.png)

If you click on the `Christmas` category, the [sub product model](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed) "model-tshirt-divided-red" is displayed in the grid (same result for this t-shirt model than if you click on the T-shirts category and filter on the attribute color and the option red).

![Search results with category christmas](../img/Products_ProductModel_SearchCat2.png)

If you click on the `Small` category, the products of this product model with the sizes S are displayed in the grid (same results for this t-shirt model than if you click on the T-shirts category and filter on the attribute size and the option S).

![Search results with category small](../img/Products_ProductModel_SearchCat3.png)

## Filter on the completeness

A product model has no completeness but its variant products have a completeness.

For the completeness filter `Complete`:
- If you select `Yes`, the product models with at least one variant product complete are displayed in the grid
- If you select `No`, the product models with at least one variant product incomplete are displayed in the grid
- If you select `All`, there is no filter on the completeness

## Filter on the parent product model

To display the children of a product model, you can filter on the `parent` attribute in the product grid with the product model code.

You can also add a `parent` column in the grid to display the parent product model code. This column is not displayed by default, you can add it by clicking on `Columns`.

![Search on parent](../img/Products_ProductModel_SearchParent.png)


# Edit products with variants

Click on a [product model](what-about-products-variants.html#what-is-a-product-model) on the grid or create a new product model to display the product form for products with variants.

The products with variants are enriched in the same product form than products without any variant.

For more details about the product form, you can read [Enrich your product](work-on-a-product.html).

## Header and infos

For product models, the following properties are displayed in the product form header:
- The number of complete variant products out of the number of variant products for a product model in `Variant products` (ex: 2/6 means that 2 variants out of 6 for the product model are complete)
- The total `missing required attributes` for a product model. If you click on it, it displays only the attributes that are required for the completeness but that are still incomplete (it filters on display `All missing required attributes`).

![Header for product model](../img/Products_ProductModel_Header.png)

For product models, the following properties are displayed in the `Product infos`:
- Family: All the products of a product model belong to the same family
- **Variant**: A [family variant](what-about-products-variants.html#what-is-a-family-variant) defines how the products with variants are structured
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
3.  Click on the small arrow next to the `Variant axes labels level 2` to display the values available for this [sub product model](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed) (`SIZE` in our example)
  ![Navigation by size for product model](../img/Products_ProductModel_PEFNav2.png)
4.  Click on a line to reload the product form with the properties of the variant axes values selected   

In the navigation component, you can also view the number of variant products complete for a product model or the completeness of the product if it's the last variant level (product level).

::: info
We manage the following common properties for products with variants:
- Attributes
- Categories
:::

## Enrich their attributes

In `COMMON`, in the `Attributes` tab, you can enrich the common attributes for the products of this product model (the common attributes are defined in the [family variant](manage-your-families.html#manage-familys-variants)).

![COMMON for product model](../img/Products_ProductModel_PEFEnrich1.png)

::: info
In a variant level, you can view the common attributes but you can not update them. If you would like to update them, go in `COMMON` (message _This attribute can be updated on the common attributes_) or in the dedicated level (message example _This attribute can be updated on the attributes by Color_).
:::

![SIZE for product model](../img/Products_ProductModel_PEFEnrich2.png)

In the product form there is a filter called `Display all level specific attributes` to display only the attributes managed at the current level that can be enriched.
This is very easy: just click on the drop down `Display all attributes` and select `Display all level specific attributes`. That's it!
This filter is available only for variant products and [sub product models](what-about-products-variants.html#how-many-levels-of-enrichment-are-managed) (if family variant with 2 variant levels).

![SIZE for product model](../img/Products_ProductModel_PEFEnrich3.png)


## Categorize

In `COMMON`, in the `Categories` tab, you can classify the model and all its children products in categories.

You can then add categories for a specific variant level. For example, your model is categorized in `T-shirts` and for the color blue, you can add them to a dedicated category `Marine`.

![SIZE for product model](../img/Products_ProductModel_PEFCategory.png)

::: info
You can add categories on the products for this product model but on a product you can not remove a category of its parent, the category is disabled in the tree. If you would like to remove it, go in `COMMON` or in the dedicated level.
:::

## Associate

In `COMMON`, in the `Associations` tab, you can define associations for the whole product model and all its children products will be also associated.

For example, you can define associations for this t-shirt model.

![COMMON for product model](../img/Products_ProductModel_PEFAssociation1.png)

You can also add associations for a specific variant level. For example, you define an association only for the `Red` color.

![COLOR for product model](../img/Products_ProductModel_PEFAssociation2.png)

The products will have all the associations of their parents. Hereafter the associations for the `Red S` t-shirt.

![SIZE for product model](../img/Products_ProductModel_PEFAssociation3.png)


::: info
You can add associations on the products for this product model but on a product you can not remove an association of its parent. If you would like to remove it, go in `COMMON` or in the dedicated level.
:::


# Add a variant

You can add a variant to a product model from the product form via the navigation component. In our example, click on the `EU Shoes Size` tab nearby `Common`.

1.  In the navigation component `EU Shoes Size`, click on the `Add new` button, a pop-in is displayed
  ![Add new variant](../img/Products_ProductModel_AddProduct_1.png)
1.  Select or enter the values for the variant axes
1.  Specify a product model code or a product identifier depending on the variant level
  ![Add new variant](../img/Products_ProductModel_AddProduct_2.png)
1.  Click on `Confirm`
  ![Add new variant](../img/Products_ProductModel_AddProduct_3.png)

The variant is added to the product model and its form is displayed, you can start filling its attributes.

::: info
If the [family variant](what-about-products-variants.html#what-is-a-family-variant) has 2 variant levels (for example by color then by size), you can add a variant `COLOR` at the 1st variant level as a product model (with a code) or you can also add a variant `SIZE` to a `COLOR` at the 2nd variant level as a variant product (with a product identifier).
:::

::: ee
In the Enterprise Edition, the `ADD NEW` button will not be displayed, if the user has no edit permissions on the attribute group of the product identifier attribute.
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
You can also mass delete product models. **If you delete product models, all their children (sub product models if any and their variant products) will also be deleted.**
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
