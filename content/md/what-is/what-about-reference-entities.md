---
id: what-about-reference-entities
themes: first-steps, manage-your-reference-entities
title: What is a **reference entity**?
popular: true
ee-only: true
related: manage-reference-entities, enrich-your-reference-entity-records
---

# Introduction to reference entities

In order to present you quickly this attribute type, let's take an example of a product page.  
![Reference entity use case](../img/what-about-reference-entities.png)

As you can see above are **many types of product information** visible on this page: text, images... 

Some information are **shared between different products** (such as care instructions, or colors or even brands). This **data can be complex to manage because it has its own attributes** (e.g. a label, a logo, a description or photos).  
Those information may have dedicated pages on one's e-commerce website (e.g. a webpage describing a brand) or their information may be used to enrich product pages (e.g. the logo of a brand).

# A bit of vocabulary

## What is a reference entity?

A **reference entity** allows you to create and enrich natively in the PIM those **common information** that are **shared and related to products**.   
A reference entity has its **own attributes**, its **own life cycle** and can be linked to products or to another reference entity.  
It allows enriching common data related to products with a rich content (text, images...), more complex than just a code and labels.

For example, you can create a reference entity to manage your brands, designers, manufacturers, product collections or ranges, artists, cities, countries, colors, sizes, materials, care instructions, technologies, ingredients...

Let's take an example with a reference entity called `Brand` and a list of brands (Kartell, Alessi, Fatboy, Fermob...).   

A brand is described by the following information:
- a code
- a label
- an image
- a description
- a photo
- a country


## What is a record?

For the `Brand` reference entity, a record contains all the information regarding a brand like `Kartell` or `Fermob`.

![Reference entity record](../img/what-about-reference-entities_record.png)


:::info
A record may be related to one or several products.
:::

# Let's create your first reference entity!

From a single place, in a dedicated `Entities` menu, you can create your first reference entity, define its records attributes, enrich its first records and link them to products. Let's go!
1. [Create your 1st reference entity](/articles/manage-reference-entities.html#create-a-reference-entity)
1. [Add and enrich its 1st records](/articles/enrich-your-reference-entity-records.html)
1. [Define a new product attribute to link this reference entity to products](/articles/manage-your-attributes.html#create-an-attribute)
1. [Link the products to the reference entity records](/articles/work-on-a-product.html)
