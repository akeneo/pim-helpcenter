---
id: what-is-a-family
themes: first-steps, akeneo-concepts
title: What is a family?
---

# Definition of a family

![what-is-a-family](../img/What-is-a-family.svg)

A family is **a set of attributes** that is shared by products belonging to the same family. In other words, a family can be considered to something similar as a **product template**.

When a product is added to a family, it automatically inherits from all attributes defined at the family level. A product **can belong to only one family** (but a product can be without family, in this case, it has no default attributes).

Finally, the family manages **the product’s completeness**.

Here are some examples of families:
- a `camcorders` family,
- a `mugs` family,
- a `sofas` family,
- a `fridges` family,
- a `hammers` family...

All these types of products have **their own characteristics**, a camcorder will have for instance the following attributes in its family:
- a product identifier (a `sku` for instance),
- a GTIN/EAN/UPC/ASIN code,
- a brand,
- a commercial name,
- a description,
- a sensor type,
- a lens type,
- an optical zoom,
- a screen type,
- exposure modes...

The family `Camcorders` will **gather all these attributes**, and they will be automatically added to any new product added to this family.

A hammer will also have a product identifier (a sku for instance), a GTIN/EAN code, a name, a description, but it will have its own attributes like a handle length, a handle material, a weight, a material...

So, a family can use all the attributes available in the PIM and a same attribute can be used in several families, most of your products will have a description, a name, an identifier...

# Properties of families

Each family has **a code and a label**. The label can be translated in any activated locale.

::: tips
- A product **can belong to only one family**.
- A product **without family has no default attributes and no completeness**.
- A family **defines the completeness of products**.
:::

Each family also has a **completeness**. Learn how to set your product completeness in the [Completeness](what-is-the-completeness.html) article.

Find more information about how to create, update, edit the properties of your families in the [Manage your families](manage-your-families.html) article.
