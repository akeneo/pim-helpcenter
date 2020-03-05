---
id: get-started-with-the-rules-engine
themes: boost-your-productivity, catalog-settings
title: Get started with the **rules engine**
popular: false
ee-only: true
related: what-is-a-rule
---

The rules engine can radically boost your productivity in the PIM by automating actions. The rules are defined in a YML file that you can import in the PIM, using a dedicated job profile.   

This feature is very, like, really powerful, but it can also be a bit complex to apprehend. Reading this article, you will find out what you can use it for and how it works.

Some words about the general behavior: a rule is composed of 1 or several conditions to target a list of products, and applicates 1 or several actions to this list.


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

You have a *scopable* and *localizable* attribute called `description`. You can copy its content from the `en_US` locale and the `print` channel to the `en_US` locale and the `e-commerce` channel. The action will be defined as follows:

```YML
  actions:
      - type: copy
          from_field: description
          from_locale: en_US
          from_scope: print
          to_field: description
          to_locale: en_US
          to_scope: ecommerce
```

## Add

The `Add` action allows you to add values to a multi-select attribute or a reference entity multiple link attribute. Also, it makes it possible to add a product to categories, to association and to groups too.

The expected values are:
- `field`: the attribute code or property
- `items`: the value codes. It has to be an array of the items to add.
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

#### Example

To add the “t-shirts” category to a set of products, the action will be as follows:

```YML
  actions:
      - type: add
          field: categories
          items:
            - t-shirts
```

### Set

The `Set` action assigns value(s) to every attributes, categories, family, associations, groups, the "parent" field, or the "enabled" field.

The expected values are:
- `field`: the attribute code or property
- `value`: the attribute value or property value
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

#### Example

To set the *“My very new description for purple T-shirt”* value to your `description` attribute in the `en_US` locale and for the `e-commerce` channel, the action will be as follows:

```YML
  actions:
      - type:   set
          field:  description
          locale: en_US
          scope:  ecommerce
          value:  "My very new description for purple tshirt"
```

## Remove

The `Remove` action enables you to remove values from a multi-select attribute, a reference entity multiple link attribute, a product category or a group.

The expected values are:
- `field`: the attribute code or “categories”
- `items`: the value codes to remove
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)
- `include_children`: if true, then it also applies the removal of the children to the given categories. It is only applicable if the field is set to “categories” (It's optional. By default, it is set to false)


### Example

To remove the “t-shirts” category, the action will be as follows:

```YML
  actions:
      - type: remove
          field: categories
          items:
            - t-shirts
```

To remove the “clothing” category and its children, the action will be as follows:
```YML
  actions:
      - type: remove
          field: categories
          items:
            - clothing
          include_children: true
```

To unclassify products from the whole “Master catalog” tree, the action will be as follows:

```YML
  actions:
      - type: remove
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
          - field: brand
          - field: model
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
            - field: model
              locale: en_US
            - field: color
              locale: en_US
            - field: release_date
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

Now that you have discovered all the available actions,


il faut filtrer les produits. gardez en tete que les filtres utilisés dans les rules sont les mêmes que dans la grille produit.


it's important to have in mind all the **fields** and their **operators** that we support in the rules engine. The "fields" are the different product properties on which you can filter (in other words, it defines your **selection**).

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
If you want to select the activated products, set the value to "true". If you want to select the deactivated ones, set it to "false".
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
The `value` field requires a percentage.
:::

### Family

The possible operators for the `family` field are:  
- IN
- NOT IN
- EMPTY
- NOT EMPTY

::: warning
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
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
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
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

Now that the actions and the fields don't have any secret for you anymore, you can discover which attribute types you can use as *targets* for your rules. It means that these attributes can receive the values you defined in your rules.

## Text/Text area

The possible operators for the `text/text area` attribute types are:  

- STARTS WITH
- ENDS WITH
- CONTAINS
- DOES NOT CONTAIN
- =
- !=
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: description
operator: CONTAINS
value: "Awesome product"
```
**text** can be written with or without quotation marks.

## Metric

The possible operators for the `metric` attribute type are:  
- <
- <=
- =
- !=
- “>”
- “>=”
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: weight
operator: =
value:
 amount: 0.5
 unit: KILOGRAM
```

We expect **numeric value** and **measurement unit code** in the following format:
- dot “.” is the decimal separator,
- there is no space between thousands.

## Boolean

The possible operators for the `boolean` attribute type are:  
- =
- !=

### Example

```YML
field: shippable_us
operator: =
value: false
```

:::info
If you want your rule to be applied to a boolean attribute type that is set to "Yes", you should set "true" as `value`. If you want your rule to be applied to a boolean attribute type that is set to "No", you should set "false" as `value`.
:::

## Simple select list / Reference Entity single link

The possible operators for the `Simple select list` / `Reference entity single link` attribute types are:  
- IN
- NOT IN
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: size
operator: IN
value:
 - xxl
```

We expect **option code** as `value`.


## Multiselect list / Reference Entity multiple link

The possible operators for the `Multiselect list` / `Reference entity multiple link` attribute types are:  

- IN
- NOT IN
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: material
operator: IN
value:
 - GOLD
 - LEATHER
```
We expect **option code** as `value`.

## Number

The possible operators for the `Number` attribute type are:  
- <
- <=
- =
- !=
- ">"
- ">="
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: min_age
operator: =
value: 12
```
We expect **a number** as `value`.

## Date

The possible operators for the `Date` attribute type are:  
- <
- ">"
- =
- !=
- BETWEEN
- NOT BETWEEN
- EMPTY
- NOT EMPTY

The expected date format is: **yyyy-mm-dd**

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::


## Example

```YML
field: created_date
operator: ">"
value: "2016-05-12"
```

## Price

The possible operators for the `Price` attribute type are:  
- <
- <=
- =
- !=
- ">"
- ">="
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

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

We expect **numeric value** and **currency code** in the following format:
- dot “.” is the decimal separator,
- there is no space between thousands.


## Picture or file

The possible operators for the `Picture` or `File` attribute types are:  
- STARTS WITH
- ENDS WITH
- CONTAINS
- DOES NOT CONTAIN
- =
- !=
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: small_image
operator: CONTAINS
value: ../../../
 src/PimEnterprise/Bundle/InstallerBundle/Resources/fixtures/icecat_demo/images/AKNTS_PB.jpg
```

We expect a **text** as `value`.
