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

A locale in Akeneo is a **combination of a language** (English, German, Spanish, Italian, Japanese, French...) **and a country** (United States, Canada, United Kingdom, Sweden, Japan, Spain, France…). For instance, US English or American English is represented as: `en_US` and British English as: `en_GB`.   
**Akeneo offers more than 200 locales by default** that you can enable depending on your needs.  

Activating a locale in Akeneo will allow **to translate your product information** in this locale directly in Akeneo's interface. For instance, instead of having several `description` attributes: one in American English, another one in Spanish and another one in German, you can have one **unique `description` attribute that will have a specific content for each enabled locale**. We will say that this attribute is **localizable**.
A localizable attribute is an [attribute](what-is-an-attribute.html) whose values may differ according to each locale.

# Do I need one locale enabled or more?

You can have one or more locales activated in your PIM, but **a locale must be overall seen as an export language**. If you are selling the same products in countries speaking the same language like French in France, Belgium, Canada and Switzerland, you will need to have some attribute information in French, but you **do not necessarily need to enable 4 locales: fr_FR, fr_BE, fr_CA, fr_CH**. Why? Because if your product information is the same for these 4 countries, then you can only use one locale for the content :). But if the content differs depending on the targetted country, you can enable several French locales and have specific content for each country.    

:::tips
For similar content, **use our [Rules Engine](what-is-a-rule.html) to copy attributes values from a locale to another locale!** 
:::

If you can't find happiness with our 200 locales, you can still add new ones :). Follow the steps described in the [How to add a new locale](manage-your-locales.html#how-to-add-a-new-locale) article.

::: ee
**In the Enterprise Edition, you can define specific [user rights on locales](access-rights-on-products.html#rights-depending-on-the-locale)**: in other words, who can see or edit some product information for a specific locale.
:::

::: info
**Learn how to enable/disable locales** in the [Manage your locales](manage-your-locales.html) article.
:::

::: warning
Don't mix the locale concept with the interface language :)
:::
