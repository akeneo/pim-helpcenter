---
id: what-is-a-locale
themes: first-steps, akeneo-concepts
title: What is a **locale**?
popular: false
ee-only: false
related: manage-your-locales, what-is-an-attribute, access-rights-on-products
---

# Definition of a locale

![What-is-a-locale?](../img/what-is-a-locale.svg)

A locale in Akeneo is a combination of a language (English, German, French...) and a country (United States, United Kingdom, France…). For instance, US english is represented as `en_US` and UK english as `en_UK`. **Akeneo offers more than 200 locales by default** that you can enable depending on your needs.  

Locales allow **to translate** some product information in the interface. They are also very central in the PIM because they are used to set on [attributes](what-is-an-attribute.html) values that may differ according to each locale. For instance, instead of having several `description` attributes: one for each locale enabled, you will have a **unique `description` attribute that will be filled depending on the selected locale**. We will say that this attribute is **localizable**.

# Do I need one locale enabled or more?

You can have one or more locales activated in your PIM, but **a locale must be over all seen as an export language**. If you are selling the same products in France, Belgium, Canada and Switzerland, you will need a description, name, specs... translated in French. But you **do not necessarily need to enable 4 locales: fr_FR, fr_BE, fr_CA, fr_CH**. Why? Because if your product information is the same for these 4 languages, then you can only use one locale for the content :) 

If you can't find happiness with our 200 locales, you can still add new ones :) Follow the steps described in the [How to add a new locale](manage-your-locales.html#how-to-add-a-new-locale) article.

::: ee
**In the Enterprise Edition, you can define specific user [rights on locales](access-rights-on-products.html#rights-depending-on-the-locale)**: who can see or edit some product information for a specific locale.
:::

::: info
**Learn how to enable/disable locales** in the [Manage your locales](manage-your-locales.html) article.
:::

::: warning
Don't mix the locale concept with the interface language. :)
:::
