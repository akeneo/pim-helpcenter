---
id: what-is-a-channel
themes: first-steps, akeneo-concepts
title: What is a **channel**?
popular: true
---

# Definition of a channel
A channel in Akeneo defines a selection of products and information to export. A channel can be a website, a print catalog, a mobile application...

![Channels](../img/Settings_What-is-a-channels.svg)

# What's the use of channel?
A channel defines a selection of products and information to export.

It works like a filter on the product catalog and has the following properties:
- It is linked to a category tree (and only one!)
- It has one or more enabled [locales](what-is-a-locale.html)
- It has one or several currencies
- It has a dedicated [completeness](what-is-the-completeness.html)  

::: tips
A channel is also known as a **scope** in Akeneo PIM.
:::

Additional properties:
- It has its own [asset transformations](assets-transformation.html)
- It has its own metric conversions.

## How many channels do I need?

You might need a new channel if and only if you need a different content for a same attribute (for example a Description for the web and another Description for a Mobile application) or if you need a different [completeness](what-is-the-completeness.html) (for example Web channel needs 50 Attributes but Mobile application only 30).
