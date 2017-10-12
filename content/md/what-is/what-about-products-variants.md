---
id: what-about-products-variants
themes: first-steps, products-super-power
title: What about products with **variants**?
popular: true
ee-only: false
related:
---

# About products with variants

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

# How we model products with variants?

Let's take a well-known example of products with variants that are t-shirts. A t-shirt model is available in 3 colors (grey, blue, red) and different sizes (S, M, L).

For all the colors and sizes of the t-shirt, some attributes are common, such as the name « Cotton t-shirt with a round neck », the brand « DIVIDED », the care instructions « machine wash at fourty degrees ».   
Each t-shirt color has different pictures and could have a different composition.  
Each t-shirt color could be available in different sizes: S, M or L.   
For each color/size, the identifier of the product is different (EAN, SKU) and the technical dimensions like weight, sleeves length could be different.  

![Scheme modeling products with variants](../img/scheme_variants.png)

## What is a product model?

A **product model** gathers similar products, that differ in some aspects, and allows the **enrichment of their common properties**.
A product model has no product identifier (ex: SKU) but a dedicated code.

## What is a variant product?

A **variant product** is a product, it's a **variant of a product model** and it has all the product properties (common and variant).    
A variant product has a product identifier (ex: SKU).

## What is a family variant?

From a single place, in a **family variant**, you will define all the **structure for your products with variants**.  
You will define:
- the number of variant levels: 1 or 2
- the variant axes for each level
- the distribution of attributes between common attributes and variant attributes

For our example of the t-shirts, you will define a family variant "T-shirts by color/size" with:
- the number of variant levels: 2
- the variant axes: color for the 1st level, size for the 2nd one
- the common attributes: name, brand, care instructions
- the variant attributes by color: pictures, composition
- the variant attributes by color/size: EAN, SKU

A [family](/articles/what-is-a-family.html) could have several variants. For example, a family "furnitures" varying in the number of seats for sofas or in the material for tables.

# How many levels of enrichment are managed?
With this new modeling, **up to 3 levels of enrichment can be managed for products with variants** (ex: t-shirt model, t-shirt color, t-shirt color/size):
- 2 levels of product model (we call the 1st one a "root product model" and the 2nd one a "sub product model")
- 1 level of variant product
