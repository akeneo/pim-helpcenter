---
id: what-is-a-family
themes: first-steps, akeneo-concepts
title: What is the aim of **families**?
---

# Definition

A family is a set of attributes that are shared by products belonging to this family. In other words, a family can be considered as a template for products.

A product family can use all the attributes available in the PIM. Several families of products can use the same attributes.

When a product is associated to a family, the product automatically inherits from all attributes defined at the family level. A product can belong to only one family (but a product does not have to belong to a family, in this case, it has no default attributes). Moreover, the family helps managing the product’s completeness.

### Example
A family can be:
- a mug,
- a T-shirt,
- a pair of shoes.

Each product family has a code and a label that can be translated. A product family can use all the attributes available in the PIM.

This means that a product family is used as a product model: the set of attributes generates the product edit form automatically and each product belonging to the same family has the same attributes.

### Example
The _“Mug”_ family is composed of the following attributes:
- Name,
- Weight,
- Description,
- Color.

If a product belongs to the _“Mug”_ family, the above attributes are automatically added to the product. These attributes cannot be removed from the product.

# Key rules

- Any product can be part of a family, but a product can be without a family. In this case, the product has no default attributes.
- A family can also define the completeness of products.


# Differences between families and categories

- Tree/categories is a way to classify your products.
One product can be in n categories.

- Family is set of attributes to enrich a product.
  One product belongs to only one family.