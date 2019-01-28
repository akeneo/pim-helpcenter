---
id: what-about-products-variants
themes: first-steps, products-super-power
title: What about products with **variants**?
popular: true
ee-only: false
related: enrich-products-variants, manage-your-families, create-a-product
---

# About products with variants

![Variants](../img/Products_Product%20variant.svg)

**Products with variants are products that have similarities, they are based on the same model, but differ in some aspects from one another**.

They offer customers various purchase options for a product such as different colors, sizes, dimensions, flavors, etc.

There are more and more products with variants in all businesses, here are some examples:
- T-shirts available in different colors and sizes
- Sofas varying in colors and number of seats
- Mattresses with different dimensions (for one person or 2 people)
- Smartphones varying in color and screen size
- Screwdrivers available in different dimensions
- Teas by packaging
- Fruit compotes with different flavors

# How do we model products with variants in Akeneo?

Let's take a well-known example of products with variants that are T-shirts. A T-shirt model is available in 3 colors (grey, blue, red) and different sizes (S, M, L).

For all the colors and sizes of the T-shirt, **some attributes are common**, such as the name « Cotton T-shirt with a round neck », the brand « DIVIDED », and the care instructions « machine wash at fourty degrees ».   
Each T-shirt color has **different pictures and could have a different composition**.  
Each T-shirt color could be **available in different sizes: S, M or L.**   
For each color/size, **the identifier of the product is different** (EAN, SKU) as well as **the technical specs like weight, sleeves length that could vary from a T-shirt from another.**

![Scheme modeling products with variants](../img/scheme_variants.png)

## What is a product model?

A **product model** gathers similar products, that differ in some aspects (size, color, price...). A product model is used to **enrich these products' common properties**.
A product model has **no product identifier** (ex: SKU) but a dedicated code.

## What is a variant product?

A **variant product is a product** and it is also a **variant of a product model**. It shares the common attributes of a product model but also has its own properties. A **variant product has a product identifier** (ex: SKU).

## What is a family variant?

The **family variant** will allow you to determine the **structure of your products with variants**.  
You will define:
- the number of variant levels: 1 or 2
- the variant axes for each level
- the distribution of attributes between common attributes and variant attributes

For our T-shirt example, you will create a family variant "T-shirts by color/size" with:
- the number of variant levels: 2
- the variant axes: color for the 1st level, size for the 2nd one
- the common attributes: name, brand, care instructions
- the variant attributes by color: pictures, composition
- the variant attributes by color/size: EAN, SKU

::: tips
A [family](what-is-a-family.html) can have several variants. For example, a family "furnitures" can vary on the number of seats for a sofa or on the material used for a table.
:::

# How many levels of enrichment are managed?
With this new modeling, **up to 3 levels of enrichment can be managed for products with variants** (ex: T-shirt model, T-shirt color, T-shirt color/size):
- 2 levels of product model (we call the 1st one a "root product model" and the 2nd one a "sub product model")
- 1 level of variant product

# How to create and enrich products with variants?
Now you know almost everything about products with variants and you would like to create your first products with variants, here are some articles that might interest you ;)
1.  [Create your first family variant](manage-your-families.html#create-a-family-variant)
1.  [Create your first product model ](create-a-product.html#create-a-product-model)
1.  [Enrich your products with variants](enrich-products-variants.html)
