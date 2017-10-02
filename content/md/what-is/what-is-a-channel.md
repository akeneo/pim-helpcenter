---
id: what-is-a-channel
themes: first-steps, akeneo-concepts
title: What is a **channel**?
popular: true
---

# Definition of a channel
A channel in Akeneo defines a selection of products and information to export. A channel can be a website, a print catalog, a mobile application...

# What's the use of channel?
A channel defines a selection of products and information to export.

It works like a filter on the product catalog and has the following properties:
- It is linked to a category tree (and only one!)
- It has one or more enabled [locales](articles/what-is-a-locale.html)
- it has one or several currencies
- it has a dedicated [completeness](articles/what-is-the-completeness.html)  

::: tips
A channel is also known as a **scope** in Akeneo PIM.
:::

Additional properties:
- it has its own [asset transformation](articles/assets-transformation.html)
- it has its own metrics conversion.

## How many channels do I need?

You might need a new channel if and only if you need a different content for a same attribute (for example Description for the web and Description for the Mobile application) or you need a different [completeness](articles/what-is-the-completeness.html) (for example Web needs 50 Attributes but Mobile application only 30).
