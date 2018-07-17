---
id: what-is-a-locale
themes: first-steps, akeneo-concepts
title: What is a **locale**?
---

# Definition of a locale

![What-is-a-locale?](../img/what-is-a-locale.svg)

A locale in Akeneo is a combination of a language (English, German, French...) and a country (United States, United Kingdom, France…). For instance, US english is en_US, UK english is en_UK.

Locales are used to translate some data in the interface.  
Locales are also really central in the PIM because they are used to set values for [attributes](/articles/what-is-an-attribute.html) which may differ according to each locale.  

If an attribute in Akeneo can have different values per locale enabled, these attributes will be called _localizable_.

# Locale properties
Akeneo offers more than 200 locales by default that you can activate following your needs. You can have one or more locales activated in your PIM.

Learn how to enable/disable locales in the [Manage your locales](/articles/manage-your-locales.html) article.

::: ee
In the Enterprise Edition, you can define specific user [rights on locales](/articles/access-rights-on-products.html#rights-depending-on-the-locale): who can see or edit some product information for a specific locale.
:::

::: warning
Don't mix the locale concept with the interface language. :)
:::
