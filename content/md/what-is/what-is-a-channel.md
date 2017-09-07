---
id: what-is-a-channel
themes: first-steps, akeneo-concepts
title: What is a **channel**?
popular: true
---

# Definition
An Akeneo channel defines a selection of products and information to export. A channel is a place where your product information will be visible: for example, a website, a print catalog, a mobile application...

It works like a filter on the product catalog and has the following properties:

- it is linked to a tree of categories: to define the selection of products to export.
- it has one or several locales: to specify which values the channel requires (product information in French but not those in Italian, even if these values exist).
- it has one or several currencies: to define which price attribute values the channel requires (prices in Euros and Dollars, but not in Pounds).
- it has a dedicated completeness: to define which product information is mandatory for a product, it is configured per channel, at the family level. For instance: the product’s description must be exported for the e-commerce channel, but only the product’s name must be exported for the mobile channel.
- it takes into account statuses: disabled products are ignored by channels.

::: tips
A channel is also known as a «scope» in Akeneo PIM. 
:::

# Rules
At least one channel must be created in the PIM.