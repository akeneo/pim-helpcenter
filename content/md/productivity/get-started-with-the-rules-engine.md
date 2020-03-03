---
id: get-started-with-the-rules-engine
themes: boost-your-productivity, catalog-settings
title: Get started with the **rules engine**
popular: false
ee-only: true
related: what-is-a-rule
---

The rules engine can radically boost your productivity in the PIM by automating actions. The rules are defined in a YML file that you can import in the PIM, using a dedicated job profile.   

This feature is very (like, really) powerful, but it can also be a bit complex to apprehend. Reading this article, you will know what you can do with and how you should use it.


# Available actions

As of today, 5 actions are available in the rules engine:
- copy
- add
- set
- remove
- concatenate

What are these actions for? Let's discover it :wink:

## Copy

The `Copy` action enables you to copy an attribute value into another one.

The expected values are:
 - `from_field`: the code of the attribute to be copied
 - `to_field`: the attribute code the value will be copied into
 - `from_locale`: the locale code of the value to be copied *(optional)*
 - `from_scope`: the channel code of the value to be copied *(optional)*
 - `to_locale`: the locale code the value will be copied into *(optional)*
 - `to_scope`: the channel code the value will be copied into *(optional)*


### Example

You have a *scopable* and *localizable* attribute called `description`. You can copy its content from `en_US` locale and `print` channel to the `en_US` locale and `e-commerce` channel. The action will be defined as follows:

```YML
  actions:
      type: copy
        from_field: description
        from_locale: en_US
        from_scope: print
        to_field: description
        to_locale: en_US
        to_scope: ecommerce
```

## Add

The `Add` action allows adding values to a multi-select attribute or a reference entity multiple link attribute. Also, it allows to add a product to categories.

The expected values are:
- `field`: the attribute code
- `value`: the attribute value
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

#### Example

To add the “t-shirts” category, the action will be as follows:

```YML
  actions:
      type: add
        field: categories
        items:
          - t-shirts
```

### Set

The `Set` action assigns value(s) to every attributes, categories, family, associations, groups, the "parent" field, or the "enabled" field.

The expected values are:
- `field`: the attribute code or category code or family code
- `value`: the attribute value or category code or family code
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

#### Example

To set the *“My very new description for purple T-shirt”* value to your `description` attribute in the `en_US` locale and for the `e-commerce` channel, the action will be as follows:

```YML
  actions:
      type:   set
        field:  description
        locale: en_US
        scope:  ecommerce
        value:  "My very new description for purple tshirt"
```

## Remove

The `Remove` action enables you to remove values from a multi-select attribute, a reference entity multiple link attribute or a product category.

The expected values are:
- `field`: the attribute code or “categories”
- `items`: the values to remove
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)
- `include_children`: if true, then also apply the removal of the children to the given categories. Only applicable if field is set to “categories” (optional, default to false)


### Example

To remove the “t-shirts” category, the action will be as follows:

```YML
  actions:
      type: remove
        field: categories
        items:
          - t-shirts
```

To remove the “clothing” category and its children, the action will be as follows:
```YML
  actions:
      type: remove
      field: categories
      items:
        - clothing
      include_children: true
```

To unclassify products from the whole “Master catalog” tree, the action will be as follows:

```YML
  actions:
      type: remove
      field: categories
      items:
        - master
      include_children: true
```

## Concatenate

The `Concatenate` action concatenates at least two values into a single value. A space separates each source value.

The possible source attribute types are:
 - text
 - text area
 - date
 - identifier
 - metric
 - number
 - price collection
 - simple or multi select (option codes)

The possible target attribute types are:
 - text
 - text area

**The parameters `from` and `to` are required in this format. Depending on the source attribute type, some optional keys can be added.**

The expected values are:

**`from`**
- `field`: the attribute code.
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)
- For `date` attribute: the format of the date following the PHP format [specification](https://www.php.net/manual/en/function.date.php) (Optional). By default, it is *Y-m-d* (e.g. *2020-01-31*)
- For `price collection` attribute: the currency code for which the price is assigned (Optional). By default all the prices in the collection are displayed, separated by a coma.

**`to`**
- `field`: the attribute code.
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

### Example

To concatenate the **brand** (non localizable and non scopable) and the **model** in the `en_US` locale into the **description** value in the `en_US` locale, the action will be as follows:

```YML
  actions:
    - type: concatenate
        from:
            field: brand
            field: model
            locale: en_US
        to:
            field: description
            locale: en_US
```

To concatenate the **model** in the `en_US` locale, the **color** in the `en_US` locale and the **year of the release date** into the **title** value in the `en_US` locale, the action will be as follows:

```YML
  actions:
    - type: concatenate
        from:
            field: model
            locale: en_US
            field: color
            locale: en_US
            field: release_date
            format: Y
        to:
            field: title
            locale: en_US
```

To concatenate the **model** in the `en_US` locale and the **price** in USD from the `mobile` channel into the **subtitle** value in the `en_US` locale and the `mobile` channel, the action will be as follows:

```YML
  actions:
    - type: concatenate
        from:
          - field: model
            locale: en_US
          - field: price
            scope: mobile
            currency: USD
        to:
            field: subtitle
            locale: en_US
            scope: mobile
```

Now that you know all the actions that are available, it's important to have in mind all the **fields** and their **operators** that we support in the rules engine. We call "fields" the different product properties on which you can filter (in other words, it corresponds to your **selection**).

# Available fields

As of today, 7 fields are supported in the rules engine, and each of them has it's own business rules. Here we go!

## Created

The possible operators for the `created` field are:
- =
- !=
- “>”
- <
- BETWEEN
- NOT BETWEEN
- EMPTY
- NOT EMPTY

::: info
The format of the date is: yyyy-mm-dd.
:::

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::


### Example

```YML
field: created
operator: =
value: "2015-01-23"
```


## Updated

The possible operators for the `updated` field are:  
- =
- !=
- “>”
- <
- BETWEEN
- NOT BETWEEN
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::


### Example

```YML
field: updated
operator: =
value: "2015-01-23"
```

::: info
The format of the date is: yyyy-mm-dd.
:::

## Enabled

The possible operators for the `enabled` field are:  
- =
- !=

### Example

```YML
field: enabled
operator: =
value: false
```

::: info
If you want to select the activated products, set "true". If you want to select the deactivated ones, set "false".
:::

## Completeness

The possible operators for the `completeness` field are:  
- =
- !=
- “>”
- <

#### Example

```YML
field: completeness
locale: fr_FR
scope: print
operator: =
value: "100"
```

::: warning
The `locale` and `scope` elements are mandatory.
:::

::: info
The `value` field expects a percentage.
:::

### Family

The possible operators for the `family` field are:  
- IN
- NOT IN
- EMPTY
- NOT EMPTY

::: warning
If the operator is EMPTY or NOT EMPTY, the value element will be ignored. |
:::

#### Example

```YML
field: family
operator: IN
value:
 - camcorders
 - digital_cameras
```

::: info
The `field` expects the family code.
:::


### Groups

The possible operators for the `groups` field are:  

- IN
- NOT IN
- EMPTY
- NOT EMPTY

::: warning
If the operator is EMPTY or NOT EMPTY, the value element will be ignored. |
:::

### Example

```YML
field: groups
operator: IN
value:
 - oro_tshirts
 - akeneo_tshirts
```

::: info
The `field` expects the group code.
:::

## Categories

The possible operators for the `categories` field are:  

- IN
- NOT IN
- UNCLASSIFIED
- IN OR UNCLASSIFIED
- IN CHILDREN
- NOT IN CHILDREN

### Example

```YML
field: categories
operator: IN
value:
 - C0056
 - F677
```

::: info
The `field` expects the category code.
:::

# Attribute types

## Text/Text area

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Text/Text area |<ul><li>STARTS WITH</li><li>ENDS WITH</li><li>CONTAINS</li><li>DOES NOT CONTAIN</li><li>=</li><li>!=</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Text, with or without quotation marks. If the operator is EMPTY or NOT EMPTY, the value element will be ignored. |

### Example

```YML
field: description
operator: CONTAINS
value: "Awesome product"
```

## Metric

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Metric |<ul><li><</li><li><=</li><li>=</li><li>!=</li><li>=</li><li>!=</li><li>“>”</li><li>“>=”</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Numeric value and measure unit code. Dot “.” is the decimal separator. No space between thousands. If the operator is EMPTY or NOT EMPTY, the value element will be ignored. |

### Example

```YML
field: weight
operator: =
value:
 amount: 0.5
 unit: KILOGRAM
```

## Boolean

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Boolean |<ul><li>=</li><li>!=</li></ul> | Yes => “true” ; No => “false” |

### Example

```YML
field: shippable_us
operator: =
value: false
```

## Simple select list / Reference Entity single link

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Simple select list / Reference Entity single link |<ul><li>IN</li><li>NOT IN</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Option code. If the operator is EMPTY or NOT EMPTY, the value element will be ignored. NOT IN (red, blue) means != red and != blue |

### Example

```YML
field: shippable_us
operator: =
value: false
```

## Multiselect list / Reference Entity multiple link

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Multiselect list / Reference Entity multiple link |<ul><li>IN</li><li>NOT IN</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Option code. If the operator is EMPTY or NOT EMPTY, the value element will be ignored. NOT IN (red, blue) means != red and != blue |

### Example

```YML
field: material
operator: IN
value:
 - GOLD
 - LEATHER
```

## Number

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Number |<ul><li><</li><li><=</li><li>=</li><li>!=</li><li>">"</li><li>">="</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Number. If operator is EMPTY or NOT EMPTY, value element will be ignored |

### Example

```YML
field: min_age
operator: =
value: 12
```

## Date

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Date |<ul><li><</li><li>">"</li><li>=</li><li>!=</li><li>BETWEEN</li><li>NOT BETWEEN</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Format date: yyyy-mm-dd. If the operator is EMPTY or NOT EMPTY, values information is ignored. |

## Example

```YML
field: created_date
operator: ">"
value: "2016-05-12"
```

## Price

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Price |<ul><li><</li><li><</li><li><=</li><li>=</li><li>!=</li><li>">"</li><li>">="</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Numeric value and currency code. Dot “.” is the decimal separator. No space between thousands. If the operator is EMPTY or NOT EMPTY, the value element will be ignored. |

### Example

```YML
field: basic_price
operator: <=
value:
  amount: 12
  currency: EUR

field: null_price
operator: NOT EMPTY
value:
  amount: null
  currency: EUR
```

## Picture or file

| Attribute type | Operator | Value |
| -------------- | ---------| ------|
| Picture or file |<ul><li>STARTS WITH</li><li>ENDS WITH</li><li>CONTAINS</li><li>DOES NOT CONTAIN</li><li>=</li><li>!=</li><li>EMPTY</li><li>NOT EMPTY</li></ul> | Text. If the operator is EMPTY or NOT EMPTY, the value element will be ignored. |

### Example

```YML
field: small_image
operator: CONTAINS
value: ../../../
 src/PimEnterprise/Bundle/InstallerBundle/Resources/fixtures/icecat_demo/images/AKNTS_PB.jpg
```
