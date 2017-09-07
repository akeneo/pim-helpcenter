---
id: what-is-an-attribute
themes: first-steps, akeneo-concepts
title: What is an **attribute**?
related: manage-your-attributes
---

# Definition

An attribute is a product’s characteristic. Each product is composed of different attributes.

Depending on your Akeneo Edition version, you can have up to 13 attribute types: 
- text and text area,
- simple or multiselect,
- [reference data](/articles/what-is-a-reference-data.html),
- boolean (yes/no),
- date,
- number, 
- price, 
- metric (with an automatic conversion) 
- image,
- assets (digital resources like a video, picture, pdf file...).

Attributes are gathered into attribute groups in Akeneo.

# Attribute properties
Hereafter, we present the differents types of attributes.

::: info
You can mix and match attribute properties to achieve a powerful result.
:::

## _Localisable_ attribute

An attribute can have several specific properties: it can be localisable, locale specific and/or scopable.

A localisable attribute can have different values per locale. This allows you to manage a product’s translations according to the activated PIM locales. For instance, a localisable attribute will enable you to have one article name for each locale activated in your PIM. It is mostly used for text or (simple or multi) select attributes.

## _Locale specific_ attribute

Some attributes can be shown only for specific locales. We will call them locale specific. For instance, a cold resistance attribute for Russia, a Canadian tax only for Canada.

## _Scopable_ attribute

Finally, your attribute can be scopable. An attribute is scopable if its values differ for each channel, for instance, you might like one short description for your e-commerce website, maybe one even shorter for your mobile app but a long one for your print catalog. It’s possible with Akeneo
