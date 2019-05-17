---
id: what-is-an-attribute
themes: first-steps, akeneo-concepts
title: What is an **attribute**?
related: manage-your-attributes, what-is-an-attribute-group
---

# Introduction

An attribute is a product’s characteristic. A product is usually composed of several attributes: an identification number, a name, a description, a price, a color... Depending on your Akeneo Edition version (Community or Enterprise), you can choose amongst **17 attribute types**. 

In Akeneo, attributes are gathered into **families**, so all products belonging to the same family share the same attributes. If you are not familiar with the concept of families, check our [What is family?](what-is-a-family.html) article.

You can easily create attribute groups to gather your attributes and better manage them. Read the following article to get more information about attribute groups: [What is an attribute group?](what-is-an-attribute-group.html).

# Akeneo attribute types

Here are the attribute types available in Akeneo:
- **identifier** attribute: a code to identify your product, this code must be unique. It can be a SKU, a MPN... This attribute is mandatory.
- **text** attribute: a single-line text field that can contain **up to 255 characters**, it is usually used for a product name.
- **text area** attribute: a multi-line text field that can be used for a product description.
- **simple** attribute: a single-choice select field coming with custom options. Only one value can be selected amongst the available options. 
- **multi select** attribute: a multi-choice select field coming with custom options. More than one value can be selected amongst the available options.
- **boolean** attribute: a yes/no attribute
- **date** attribute: a date field, the PIM will display a calendar to choose the date, which includes day, month and year.
- **number** attribute: a single-line field that can only contain digits. 
- **metric** attribute: a single-line field composed of a 1st field containing a number and a second field containing a metric unit. It allows you to automatically convert metric values into others to fit your export needs. You can check the [Manage your Channels](manage-your-channels.html#create-a-channel) article to have more information about this feature.
- **price** attribute: a price attribute, displayed values will depend on the currencies enabled in the PIM. Learn [here](manage-your-currencies.html#enabledisable-a-currency) how to enable or disable a currency in Akeneo PIM.
- **image** attribute: a drag and drop down zone to upload an image (extensions allowed: gif, jfif, jif, jpeg, jpg, pdf, png, psd, tif, tiff)
- **file** attribute: a drag and drop down zone to upload a file (extensions allowed: csv, doc, docx, mp3, pdf)
- **asset collection** attribute _(Entreprise Edition only)_: an advanced attribute type to manage several digital resources like a video, picture, pdf file... Read the following article [What is an asset?](what-is-an-asset.html) to learn more about this attribute type
- **reference entity simple link** attribute _(Entreprise Edition only)_: allows enriching common data related to products with a rich content (text, images...), more complex than just a code and labels. To learn more about Reference entities, read our article [What is a Reference Entity?](what-about-reference-entities.html)
- **reference entity multiple links** attribute _(Entreprise Edition only)_: the same as above but allowing you to manage multiple links
- **reference data simple select** attribute: allows you to manage any kind of data that has its own properties, as a single-choice select. 
- **reference data multi select** attribute: allows you to manage any kind of data that has its own properties, as a multi-choice select. 

:::warning
You can have only one attribute `identifier`, but you can have several attributes from the other types.
:::

:::info
The only mandatory attribute is the **Identifier attribute type**. You first need to create an identifier attribute type before creating products.    
:::

:::tips
Options for simple and multi select attributes can be translated in any enabled locale in the PIM.
:::

:::tips
To store GTIN, EAN13, UPC… in your PIM, use the **text** attribute type and use a regular expression to control the field input. 
For instance, to store an EAN13 in Akeneo, you can easily add a validation rule based on the following regular expression: `/^[0-9]{13}$/`
:::


# Additional attribute properties

An attribute can have several specific properties: it can have a value per channel, per locale or be locale specific.

::: info
You can mix and match attribute properties to achieve a powerful result.
:::

## About the `value per channel` property

This property is also called *scopable*: **an attribute is *scopable* if its values differ for each channel.**
For instance, you might want to have:
- a short description for your e-commerce website
- a even shorter for your mobile app
- a long one for your print catalog

In this case, when creating your attribute, enable the `value per channel` property.

## About the `value per locale` property

This property is also called *localisable*: **a localisable attribute can have different values per locale.** 
This allows you to manage a product translations according to the activated PIM locales.  

For instance, this feature will allow you to have one product name or a description for each locale activated in your PIM. It is mostly used for text or text area attributes.

In this case, when creating your attribute, enable the `value per locale` property.

## About the `Locale specific` property

Some **attributes must be shown only for some locales**. We will call them _locale specific_.

For instance, a cold resistance attribute for Russia, a Canadian tax only for Canada.
In this case, when creating your attribute, enable the `locale specific` property.

