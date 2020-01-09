---
id: what-is-an-attribute
themes: first-steps, akeneo-concepts
title: What is an **attribute**?
related: manage-your-attributes, what-is-an-attribute-group
---

# Introduction

An attribute is a product’s characteristic. A product is usually composed of several attributes: an identification number, a name, a description, a price, a color... Depending on your Akeneo Edition version (Community or Enterprise), you can choose amongst **17 attribute types**.

In Akeneo, attributes are gathered into **families**, so all products belonging to the same family share the same attributes. If you are not familiar with the concept of families, check our [What is family?](what-is-a-family.html) article.

You can easily create attribute groups to gather your attributes and ease their enrichment in the product form. Read the following article to get more information about attribute groups: [What is an attribute group?](what-is-an-attribute-group.html).

# Akeneo attribute types

Here are the attribute types available in Akeneo:
- **Identifier** attribute: a code to identify your product, **this code must be unique**. It can be a SKU, a MPN... **This attribute is mandatory to create products.**
- **Text** attribute: a single-line text field that can contain **up to 255 characters**, it is usually used for a product name.
- **Text area** attribute: a multi-line text field that can be used for a product description.
- **Simple select** attribute: a single-choice list coming with custom options. Only one value can be selected amongst the available options.
- **Multi select** attribute: a multi-choice list coming with custom options. More than one value can be selected amongst the available options.
- **Yes/No** attribute: a boolean attribute
- **Date** attribute: a date field, the PIM will display a calendar to choose the date, which includes day, month and year.
- **Number** attribute: a single-line field that can only contain digits.
- **Metric** attribute: a single-line field composed of a first field containing a number and a second field containing a metric unit. It allows you to automatically convert metric values into others to fit your export needs. You can check the [Manage your Channels](manage-your-channels.html#create-a-channel) article to get more information about this feature.
- **Price** attribute: a price attribute with values per currency. The displayed values will depend on the currencies enabled in the PIM. Learn [here](manage-your-currencies.html#enabledisable-a-currency) how to enable or disable a currency in Akeneo PIM.
- **Image** attribute: a drag and drop down zone to upload an image (extensions allowed: gif, jfif, jif, jpeg, jpg, pdf, png, psd, tif, tiff)
- **File** attribute: a drag and drop down zone to upload a file (allowed extensions: csv, doc, docx, mp3, pdf)
- **Asset collection** attribute **_(Enterprise Edition only)_**: an advanced attribute type to manage several digital resources like pictures, pdf files, Youtube videos... Read the following article [What is an asset?](what-is-an-asset.html) to learn more about this attribute type
- **Reference entity simple link** attribute **_(Enterprise Edition only)_**: allows enriching common data related to products with a rich content (text, images...), more complex than just a code and labels. Check our dedicated article [What is a reference entity?](what-about-reference-entities.html) to learn more about this attribute type.
- **Reference entity multiple links** attribute **_(Enterprise Edition only)_**: the same as above but allowing you to manage multiple links
- **Reference data simple select** attribute: allows you to manage any kind of data that has its own properties, as a single-choice select.
- **Reference data multi select** attribute: allows you to manage any kind of data that has its own properties, as a multi-choice select.

:::warning
You can have only one attribute `identifier`, but you can have several attributes from the other types. If you need more identifier fields, use a text field with a unique value parameter set to `Yes`.
:::

:::info
The only mandatory attribute is the **Identifier attribute type**. You first need to create an identifier attribute type before creating products.    
:::

:::tips
Options for simple and multi select attributes can be translated in any enabled locale in the PIM.
:::

:::tips
To store GTIN, EAN, UPC… in your PIM, use the **text** attribute type and use a regular expression to control the field input.  
For instance, to store an EAN13 in Akeneo which does always contain 13 digits, add a validation rule based on the following regular expression: `/^[0-9]{13}$/`
:::

## Reference entities or reference data?

### Differences between the two attribute types

**Reference entities are an Enterprise Edition feature**. To learn more about Reference entities, read our dedicated article [What is a Reference Entity?](what-about-reference-entities.html).  
Reference Data is a native Community and Enterprise Edition feature that manages links with products. They imply a custom development (installation of the [Custom Entity Bundle](https://github.com/akeneo-labs/CustomEntityBundle)) to enrich the reference data through the user interface, collect and distribute it.

::: tips
If you are starting a new Enterprise Edition project, we strongly recommend that you use the [Reference entities](manage-reference-entities.html#create-a-reference-entity).
:::

### I was using Reference data, can I transform them into Reference entities?

Yes! If you were using Reference Data in a previous PIM version, you can migrate your Reference data thanks to the [`CSVToReferenceEntity`](https://github.com/akeneo/CsvToReferenceEntity) tool.  
`CSVToReferenceEntity` will allow you to migrate data from the Custom Entity Bundle and transform them into Reference Entities records.  
This tool can also be used to initialize reference entities data from an ERP/MDM.

### I want to use Reference data, can I still use them?

Yes! Reference data are still available.

### How can I import/export Reference entities?

There is no native import/export for Reference Entities, but you can use our API to manage them. Learn about their API format and the endpoints available on our API online documentation:
[Presentation of the reference entities and their associated standard formats](https://api.akeneo.com/documentation/resources.html#reference-entities)

# Specific properties of attributes

An attribute can have several specific properties: it can have a value per channel, per locale, be locale specific, be read-only _(Enterprise Edition only)_.

::: info
You can mix and match attribute properties to achieve a powerful result.
:::

## The `value per channel` property

This property should be enabled if the attribute's values differ for each channel.
For instance, you might want to have:
- a short description for your e-commerce website
- a even shorter for your mobile app
- a long one for your print catalog

In this case, when creating your attribute, enable the `value per channel` property.

## The `value per locale` property

This property should be enabled if the attribute is meant to have different values per locale. This allows you to manage a product translations according to the activated PIM locales.  

For instance, this feature will allow you to have one product name or a description for each locale activated in your PIM. It is mostly used for text or text area attributes.

In this case, when creating your attribute, enable the `value per locale` property.

## The `Read-only` property

If you enable this property, users will not be allowed to edit the attribute through the UI, it will only be updated through imports, API or [rules](manage-your-rules.html#mainContent). The attribute will appear as greyed out in the interface.

## The `Usable in Grid` property

This property defines whether or not the attribute can be displayed as a column or used as a filter in the product grid or in the [published products grid](how-to-manage-my-publications.html#view-the-published-products) and [proposals grid](review-products-proposals.html#filter-the-proposals)

## The `Locale specific` property

Some **attributes must be shown only for some locales**. We will call them _locale specific_.

For instance, a cold resistance attribute for Russia, a Canadian tax only for Canada.
In this case, when creating your attribute, enable the `locale specific` property.
