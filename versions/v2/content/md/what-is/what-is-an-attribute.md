---
id: what-is-an-attribute
themes: first-steps, akeneo-concepts
title: What is an **attribute**?
related: manage-your-attributes, what-is-an-attribute-group
---

# Definition of an attribute

An attribute is a product’s characteristic. Each product is composed of different attributes.

Depending on your Akeneo Edition version, you can have up to 15 attribute types:
- **identifier**: a unique code that identifies your product
- **text** and **text area**: used for text data. A **text** attribute is **limited to 255 characters**, if you need more text data, use the **text area** attribute type.
- **simple** or **multi select**
- **reference data** (simple and multi select)
- **boolean** (yes/no)
- **date**
- **number**
- **price**
- **metric** (with automatic conversions): this attribute type allows you to **automatically convert metric values into others to fit your export needs**. See the [Manage your Channels](manage-your-channels.html#create-a-channel) article.
- **media file**: a simple file (pdf file for instance) or an image
- **[asset collection](work-with-assets.html)**: digital resources like a video, picture, pdf file... _(Entreprise Edition only)_

Attributes are gathered into [attribute groups](what-is-an-attribute-group.html) in Akeneo.

:::info
The only mandatory attribute is the **Identifier attribute type**. You first need to create an identifier attribute type before creating products.    
You can only have one **identifier attribute type** in your PIM.
:::


:::tips
To store GTIN, EAN13, UPC… in your PIM, use the **text attribute type** and use a regular Expression to make sure that your codes will contain the exact number of digits required.  
For instance, to store an EAN13 in Akeneo, which contains 13 digits, add a validation rule based on the following regular expression: `/^[0-9]{13}$/`
:::


# About scopable, localisable and locale specific attributes

An attribute can have several specific properties: it can be localizable, locale specific and/or scopable.

::: info
You can mix and match attribute properties to achieve a powerful result.
:::

## _Scopable_ attribute

Finally, an attribute can be scopable. **An attribute is scopable if its values differ for each channel.**

For instance, you might want:
- a short description for your e-commerce website
- a even shorter for your mobile app
- a long one for your print catalog

## _Localisable_ attribute

A **localisable attribute can have different values per locale.**  
This allows you to manage a product translations according to the activated PIM locales.  

For instance, a localisable attribute will enable you to have one product name for each locale activated in your PIM. It is mostly used for text or (simple or multi) select attributes.

## _Locale specific_ attribute

Some **attributes can be shown only for specific locales**. We will call them locale specific.

For instance, a cold resistance attribute for Russia, a Canadian tax only for Canada.
