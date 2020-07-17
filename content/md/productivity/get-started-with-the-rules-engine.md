---
id: get-started-with-the-rules-engine
themes: boost-your-productivity, catalog-settings
title: Get started with the **rules engine**
popular: false
ee-only: true
related: what-is-a-rule
---

The rules engine can radically boost your productivity in the PIM by automating actions. As explained in [this article](what-is-a-rule.html), a rule enables you to automatically apply **one or several actions** to a specific **list of products and product models**. To set the targeted products, you have to define `conditions` (that are composed by fields and operators).  

The rules are defined in a YML file that you can import in the PIM, using a dedicated job profile.   

This feature is very, like, really powerful, and the use cases are countless. In order to guide you in the rules engine usage, we wrote this article where you will find out what you can use it for and how it works.

# Name your rules

Each rule must have a unique code. It can also have a label per enabled PIM locale. This label will appear under `Settings`/`Rules` and be also visible in your product form under your smart attributes.
You can add the labels settings anywhere in your rule. In the example below, it is placed at the end of the rule, and it adds labels for your American English and French locales, here is the expected format:

```YML
  camera_copy_name_to_model:
        priority: 0
        conditions:
            - field: family
              operator: IN
              value:
                - camcorders
            - field: camera_model_name
              operator: EMPTY
        actions:
            - type: copy
              from_field: name
              to_field: camera_model_name
        labels:
            en_US: 'Copy name to model'
            fr_FR: 'Copie nom vers modèle'
```

If you do not want to add labels to your rule, leave the labels settings with { }.

```YML
labels: {}
```

:::warning
If no label is set, the rule code will appear into brackets [ ] in the PIM user interface.
:::

You will also be able to search on your rule labels under `Settings`/`Rules`.

# Available actions

As of today, 7 actions are available in the rules engine:
- copy
- add
- set
- remove
- concatenate
- clear
- calculate

What are these actions for? Let's discover it :wink:

## Copy

The `Copy` action enables you to copy an attribute value in another one.

The expected values are:
 - `from_field`: the code of the attribute to be copied
 - `to_field`: the attribute code where the value will be copied
 - `from_locale`: the locale code of the value to be copied *(optional)*
 - `from_scope`: the channel code of the value to be copied *(optional)*
 - `to_locale`: the locale code where the value will be copied *(optional)*
 - `to_scope`: the channel code where the value will be copied *(optional)*

It is possible to copy values from an attribute type to another attribute of the same type (for example: from a `text` attribute type to another `text` attribute type).  
And you can go even further.  It is possible to copy attribute values in another attribute value field even if they are two different types of values. :wink: There are some exceptions mind you! Check out the list below.

You can copy the given attribute to a selection of attribute types that we defined based on logical criteria:
#### You can copy the option code of a **simple select** attribute to:
- a **reference entity single link** attribute *(the record must already exist)*
- a **text** attribute
- a **textarea** attribute

#### You can copy the option codes of a **multi select** attribute to:
- a **reference entity multiple link** attribute *(the records must already exist)*
- a **text** attribute *(the codes are separated by a comma)*
- a **textarea** attribute *(the codes are separated by a comma)*

#### You can copy the value of a **text** attribute to:
- a **textarea** attribute
- a **simple select** attribute *(the option code must already exist)*
- a **reference entity single link** attribute *(the record must already exist)*

#### You can copy the value of an **identifier** attribute to:
- a **text** attribute
- a **textarea** attribute

#### You can copy the value of a **date** attribute to:
- a **text** attribute
- a **textarea** attribute

:::info
The date will be copied into the ISO 8601 format (ex: 2019-01-25T12:00:00+01:00).
:::

#### You can copy the value of a **measurement** attribute to:
- a **text** attribute
- a **textarea** attribute
- a **number** attribute

#### You can copy the value of a **number** attribute to:
- a **text** attribute
- a **textarea** attribute
- a **measurement** attribute

#### You can copy the value of a **price** attribute to:
- a **text** attribute
- a **textarea** attribute

#### You can copy the value of a **reference entity single link** attribute to:
- a **text** attribute
- a **textarea** attribute
- a **simple select** attribute *(the option code of the simple select attribute must already exist)*

#### You can copy the value of a **reference entity multiple links** attribute to:
- a **text** attribute
- a **textarea** attribute
- a **multi select** attribute *(the option codes of the multi select attribute must already exist)*



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

The `Add` action allows you to add values to a multi-select attribute or a reference entity multiple link attribute. Also, it makes it possible to add a product to categories and to groups too.

The expected values are:
- `field`: the attribute code or property
- `items`: the value codes. It has to be an array of the items you need to add.
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

### Example

To add the “t-shirts” category to a set of products, the action will be as follows:

```YML
  actions:
      - type: add
          field: categories
          items:
            - t-shirts
```

#### Add associations

The `add` action can also associate **products/product models/groups** without removing previously associated ones. You can choose to only associate products or product models or groups, or any combination you like.

For instance, the following action will associate the `product_42` product and the `tshirt` group to your product (while **keeping previously associated products and groups**), and **won't update the associated product models**.

```YML
  actions:
      - type: add
        field: associations
        items:
            X_SELL:
                products:
                  - product_42
                groups:
                  - tshirts
```

## Set

The `Set` action assigns values to attributes but also to the following properties: categories, status (enabled/disabled), groups, family, associations.
Beware, the previous values will be replaced by the new ones.

The expected values are:
- `field`: the attribute code or property
- `value`: the attribute value or property value
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

### Example

To set the *“My very new description for purple T-shirt”* value to your `description` attribute in the `en_US` locale and for the `e-commerce` channel, the action will be as follows:

For instance, the following actions will **disable** the product and set its **family** to `shoes`. It will also **categorize** it in `casual` and `women` (while uncategorizing it from its previous categories), and **add** it to the `summer` group (while removing it from its previous groups).

```YML
  actions:
      - type: set
        field: enabled
        value: false
      - type: set
        field: family
        value: shoes
      - type: set
        field: categories
        value:
           - casual
           - women
      - type: set
        field: groups
        value:
          - summer
```

#### Set associations

Just like for the add action, you can choose to associate any combination of **products**, **product_models** or **groups** for each association type.
You can decide which associated **products**, **product_models** or **groups** you want to update. The other ones will not be updated.

In the example below, you can see that the following action will **replace the associated products** for the `X_SELL` association, but **won't replace associated product models or groups**.  
And for the `UPSELL` association, it will **replace the associated product models and groups but not the associated products**.

```YML
  actions:
      - type: set
        field: associations
        value:
            X_SELL:
                products:
                  - product_42
                  - another_product
            UPSELL:
                product_models:
                  - amor
                groups:
                  - tshirts
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

:::info
The action is only for attribute values :wink:.
:::

The possible source attribute types are:
 - text
 - textarea
 - date
 - identifier
 - measurement
 - number
 - price collection
 - simple select
 - multi select (values are separated by a comma)
 - reference entity single link
 - reference entity multiple link

The possible target attribute types are:
 - text
 - textarea

**The parameters `from` and `to` are required in this format. Depending on the source attribute type, some optional keys can be added.**

The expected values are:

**`from`**
- `field`: the attribute code.
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)
- `format`: format of the date following the PHP format [specification](https://www.php.net/manual/en/function.date.php) (optional, only relevant for `date` attributes). By default, it is *Y-m-d* (e.g. *2020-01-31*)
- `currency`: the currency code for which the price is assigned (optional, only relevant for `price_collection` attributes). By default, all the prices in the collection are displayed, separated by a comma.
- `label_locale`: the locale code for the label of the option or record (optional, only relevant for `simple select`, `multi-select`, `reference entity single link` and `reference entity multiple link` attributes). By default, the code of the option is used. Here is an example:
```YML
  actions:
    - type: concatenate
      from:
          - field: brand
          - field: color
            label_locale: en_US
          - field: name
            scope: ecommerce
            locale: en_US
```

**`to`**
- `field`: the attribute code.
- `locale`: the locale code for which the value is assigned (optional)
- `scope`: the channel code for which the value is assigned (optional)

### Example

To concatenate the **brand** (non localizable and non scopable) and the **model** in the `en_US` locale into the **product title** value in the `en_US` locale, the action will be as follows:

```YML
  actions:
    - type: concatenate
      from:
          - field: brand
          - field: model
            locale: en_US
      to:
          field: product_title
          locale: en_US
```
## Clear
This action clears the value(s) assigned to an attribute, product categories, product groups, or product associations.

The expected values are:
 - `field`: the attribute code, "categories", "groups" or "associations".
 - `locale`: the locale code for which the value is assigned (optional).
 - `scope`: the channel code for which the value is assigned (optional).

### Examples

To clear the brand in `en_US` locale, the action will be as follows:

```YML
  actions:
    - type: clear
      field: brand
      locale: en_US
```

To clear all the categories that are linked to products, the action will be as follows:

```YML
  actions:
    - type: clear
      field: categories
```

To clear all the product associations, the action will be as follows:

```YML
  actions:
    - type: clear
      field: associations
```

## Calculate

This action allows calculating numeric attribute values, with simple mathematical operations (addition, subtraction, multiplication, and division).

This action only accepts number, measurement or price collection attributes for both the source and the destination.

The action is split into 3 required steps, and 1 optional:

**destination**: the value you want to update. It is composed of:

- `field`: the attribute code *(required)*
- `locale`: locale code if the attribute is localizable *(optional)*
- `scope`: channel code if the attribute is scopable *(optional)*
- `currency`: currency code if the attribute is a price collection *(required if the destination attribute type is a price collection)*
- `unit`: unit code if the attribute is a measurement *(optional, the default measurement unit of the attribute will be used if not set)*

**source**: the first operand of the operation. It requires at least either a value or a field and additional items. For instance, you can have:

- `value`: a constant numeric value - decimal separator: dot, no thousands separator, e.g: *1515.14* *(required)*

OR:

- `field`: attribute code of the source value *(required)*
- `locale`: locale code if the attribute is localizable *(optional)*
- `scope`: channel code if the attribute is scopable *(optional)*
- `currency`: currency code if the attribute is a price collection *(required if the source attribute type is a price collection)*

**operation_list**: the list of operations to execute *(at least one operation is required)*

It is exactly the same format as the **source** property, with an additional required field:

- `operator`: can be either *add*, *subtract*, *multiply* or *divide* *(required)*

::: warning
The operations are applied in the order they are provided, regardless of any mathematical priority.
For instance, 5 - 3 + 2 x 5 will result in ((5 - 3) + 2) x 5) = 20
:::

If a product value required in an operation is empty, or if a division by zero occurs, the product won't be updated.

**round_precision** (optional): rounds the final result of the operation(s)

If this parameter is not specified or if the value is null, the final result will not be rounded.
The round precision can be:

- a positive number: it represents the number of decimals to keep
- 0: rounded with no decimal
- a negative number: the rounding will occur before the decimal point (example with precision of `-1`: `81` becomes `80`, with precision of `-2`: `81` becomes `100`)

If the destination attribute does not allow decimals, the action can be applied only when the result is an integer.
This behavior can be changed by setting up the *round_precision* to 0: the result will be rounded and the action will be applied.

### Examples

For instance, in order to calculate the volume of a cone (volume = (π x R² x h) / 3), given a radius and a height, you can use the following action:

```YML
  actions:
      - type: calculate
        destination:
          field: volume
          unit: CUBE_CENTIMETER
        source:
          value: 3.14
        operation_list:
          - operator: multiply
            field: radius
          - operator: multiply
            field: radius
          - operator: multiply
            field: height
          - operator: divide
            value: 3
```

The following action will calculate a price in euros, based on the price in dollars and a ratio, and round the result to the nearest integer value:

```YML
  actions:
      - type: calculate
        round_precision: 0
        destination:
          field: price
          scope: ecommerce
          currency: EUR
        source:
          field: price
          scope: ecommerce
          currency: USD
        operation_list:
          - operator: multiply
            field: ratio
```

::: warning
When using measurement attributes, their value will be converted to the default measurement unit defined for the attribute.
For instance, a `Length` attribute can have a 'CENTIMETER' default unit and yet its value for the product is 1 INCH. In that case, the value will be converted to 2.54 (1 inch = 2.54 cm).
:::

::: warning
Also, no consistency check is performed regarding the units, you can perfectly multiply a frequency by a length, and put the result in a price attribute, even if it makes no sense :)
:::


# Available fields

Now that you have discovered all the [available actions](#available-actions), you can easily see which ones can be useful in your daily work :wink:. But, to write a rule, you have to define your product selection. To do so, you need to know what are the available **fields** and their **operators**.

:::info
Keep in mind that the filters (or "fields") that are used in the rules, are the same than in the product grid.
:::

As of today, 7 fields are supported in the rules engine, and each of them has it's own business rules. Here we go!

## Created

The possible operators for the `created` field are:
- =
- !=
- '>'
- <
- BETWEEN
- NOT BETWEEN
- EMPTY
- NOT EMPTY

::: info
The format of the date is:
- "yyyy-mm-dd HH:MM:SS" (UTC time)
- "now"
- "\<relative date format\>" (see [below](#focus-on-the-relative-date-format))

If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

:::warning
The "relative date format" only works with the `<`, `>`, `=` and `!=` operators.
:::

### Example

```YML
- field: created
  operator: =
  value: "2015-01-23 00:00:00"
- field: created
  operator: <
  value: "-10 days"
```

## Updated

The possible operators for the `updated` field are:  
- =
- !=
- '>'
- <
- BETWEEN
- NOT BETWEEN
- EMPTY
- NOT EMPTY

::: info
The format of the date is:
- "yyyy-mm-dd HH:MM:SS" (UTC time)
- "now"
- "\<relative date format\>" (see [below](#focus-on-the-relative-date-format))

If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

:::warning
The "relative date format" only works with the `<`, `>`, `=` and `!=` operators.
:::

### Example

```YML
-
  field: updated
  operator: =
  value: "2015-01-23 00:00:00"
-
  field: updated
  operator: '>'
  value: "-1 year"
```

#### Focus on the "relative date format"
The *relative date format* allows to specify dates that are relative to the rule execution date, it is formatted as follows:

**<+/->\<count\> \<unit\>**, with:

- **"+"** means a date in the future, **"-"** a date in the past
- **count** is an integer
- **unit** is one of the following values: *minute*, *hour*, *day*, *week*, *month* or *year* with an optional final *s*

For instance, **+1 month** means *in one month*, and **-2 days** means *2 days ago*

:::warning
Obviously, for the `created` and `updated` properties, the only relevant relative date format is the "past" relative date.
:::

## Enabled (status)

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
- '>'
- <

### Example

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

## Family

The possible operators for the `family` field are:  
- IN
- NOT IN
- EMPTY
- NOT EMPTY

::: warning
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

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


## Groups

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
The `value` field expects the group codes.
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

## Text/Textarea

The possible operators for the `text/textarea` attribute types are:  

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

## Measurement

The possible operators for the `measurement` attribute type are:  
- <
- <=
- =
- !=
- '>'
- '>='
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
- '>'
- '>='
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
- '>'
- =
- !=
- BETWEEN
- NOT BETWEEN
- EMPTY
- NOT EMPTY

::: info
The format of the date is:
- "yyyy-mm-dd"
- "now"
- "\<relative date format\>" (see [below](#focus-on-the-relative-date-format-2))

If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

:::warning
The "relative date format" only works with the `<`, `>`, `=` and `!=` operators.
:::

### Example

```YML
-
  field: release_date
  operator: =
  value: "2015-01-23"
-
  field: creation_date
  operator: '>'
  value: "-1 year"
```

#### Focus on the "relative date format"
The *relative date format* allows to specify dates that are relative to the rule execution date, it is formatted as follows:

**<+/->\<count\> \<unit\>**, with:

- **"+"** means a date in the future, **"-"** a date in the past
- **count** is an integer
- **unit** is one of the following values: *day*, *week*, *month* or *year* with an optional final *s*

For instance, **+1 month** means *in one month*, and **-2 days** means *2 days ago*

### Example

```YML
field: created_date
operator: '>'
value: "2016-05-12"
```

:::warning
The "relative date format" is based on the UTC timezone. It means that if you are located in Eastern Australia (UTC +10) and the rules are executed on the 06/22/20 at 8:00am, the "relative date" will be based on the 06/21/20
:::

## Price collection

The possible operators for the `Price collection` attribute type are:  
- <
- <=
- =
- !=
- '>'
- '>='
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

## Asset collection

The possible operators for the `Asset Collection` attribute type are:  
- IN
- NOT IN
- EMPTY
- NOT EMPTY

:::info
If the operator is EMPTY or NOT EMPTY, the value element will be ignored.
:::

### Example

```YML
field: packshot
operator: IN
value: [my_product_packshot]
```

In this example, we select all the products that have the "my_product_packshot" asset in their "packshot" asset collection.

We expect an **array** of asset codes as `value`.  


# A real example
You're done with all these specifications!

We hope that you perfectly understand the rules engine operation now. But to make it crystal clear, we thought it would be better to take a real example of a rule :wink:.

Let's say that, among all the attributes of your product form, you have one `price collection` attribute type and a `boolean` attribute type.
In the price collection, you define the price of your product in USD. The boolean attribute is used to define if your product is ready to be sent to your ecommerce platform (if it is set to "yes", it means that the product is ready).

Manually changing the status of the boolean attribute is time-consuming and a very repetitive task... But for the rules engine, it's a perfect match!
The mission of the rules engine here is to **automate the status change of the boolean once the price attribute has a value.**

To do so, follow these steps:
1. Open a text editor to write the YML code of the rule.
1. Write this:

```YML
my_rule:
  conditions:
    - field: basic_price
      operator: NOT EMPTY
      value:
        amount: null
        currency: EUR
  actions:
    - field: ecommerce_ready
      value: true
      type: set
```

And finally, import your YML file using the Akeneo rules import job.


If you want to directly execute the rule:
1. Go to `Settings`, `Rules`
1. Click on the "play" button on your rule line and confirm.

The rule is executed :wink:.
