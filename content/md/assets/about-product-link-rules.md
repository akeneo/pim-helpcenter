---
id: assets-product-link-rules
themes: manage-your-assets, boost-your-productivity, catalog-settings
title: About the **product link rules**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# What if we automate the link between assets and products?

The `product link rule` feature enables you to automatically link assets to products, based on assets **attributes**. Indeed, most of you use a *naming convention* to name your assets, so it is quite simple to automate this link in order to gain time in your daily work.  

With the new Asset Manager, it is now possible to define this convention in the PIM in order to automatically make the link between your assets and your products.  

Yes, I agree with you, it looks promising ;) So let me introduce you the first part of this product link rule functionality: the `naming convention`.

## Focus on the naming convention

We noticed that you, our dear customers, usually name your asset files or asset codes using precious information:
- the SKU of the product corresponding to the asset,
- the locale into which your user guides are translated,
- the asset function: _Is it a frontview, backview,...?_,
- ...

The idea of the naming convention feature is to be able to extract those pieces of information and use them to **automatically** enrich your assets with new attributes values.

Just a reminder but an important one for you to better understand what is coming next: *the product link rule is based on asset attributes* :wink:

By defining a naming convention, for each [asset family](what-about-assets.html#what-is-an-asset-family), the PIM will be able to split the asset code or the main media filename, in order to extract the information you want and use it to populate asset attributes.
This operation is done automatically by the PIM upon each asset creation.

::: info
This naming convention is defined at the asset family level.
:::

The naming convention can be defined via the API or directly in the PIM UI, in the `Product Link Rules` tab of each asset family.

![Assets Naming Convention](../img/Assets_NamingConvention.png)

### The format of the naming convention

The JSON format of the naming convention contains several parts:
- the [`source` part](#the-source-property),
- the [`pattern` part](#the-split-pattern),
- a [boolean `abort_asset_creation_on_error`](#abortion-on-error) stating whether to abort the asset creation in case there was an error during the application of the naming convention.

```json
{
  "naming_convention": {
    "source": {...},
    "pattern": A_REGEXP,
    "abort_asset_creation_on_error": A_BOOLEAN
  }
}
```

#### Examples
```json
{
  "naming_convention": {
    "source": {
        "property": "main_asset_image",
        "channel": null,
        "locale": null
    },
    "pattern": "/(?P<product_ref>.*)\\_(?P<attribute_ref>.*)\\.jpg/",
    "abort_asset_creation_on_error": true
  }
}
```

Still not comfortable with the naming convention? Don't hesitate to go through the complete [API article](https://api.akeneo.com/concepts/asset-manager.html#focus-on-the-naming-convention) where we detail each part of the naming convention format.

#### The source property

The `source` property allows you to define on which string the split will be applied. It can be either:
- the asset code,
- the code of the main media attribute of your family.

#### The split pattern

The `pattern` property allows you to define how the PIM should split the [source value](#the-source-property). Then, the result of the split will automatically populate the corresponding asset attributes.

The split pattern should be a string. It should be given as a regular expression.  
For the PIM to know into which asset attributes the result of the split should be sent, this regular expression should contain one or several named capture groups.  
Note that the names of these capture groups should be equal to the code of existing asset attribute of the family and these asset attributes can only be `text` attributes and `number` attributes.

::: warning
These asset attributes cannot be localizable neither scopable.
:::

::: tips
Not comfortable with regular expressions? You can try yours [right here](https://regex101.com/)!
:::

Let's take an example to make this clearer!
```regexp
/(?P<product_ref>.*)_(?P<attribute_ref>.*)\\.jpg/
```

The regexp above will split the source string into two parts, thanks to two named capture groups:
- `(?P<product_ref>.*)` is the first capture group. It is named `product_ref`. So, the result of this capture will be sent into the `product_ref` asset attribute. The `product_ref` attribute should exist in the asset family.

- `(?P<attribute_ref>.*)` is the second capture group. It is named `attribute_ref`. So, the result of this capture will be sent to the `attribute_ref` asset attribute. The `attribute_ref` attribute should exist in the asset family.
Let's say our source string is equal to `Victor-packshot.png`. After the naming convention application, the `product_ref` asset attribute will contain the value "Victor" and the `attribute_ref` asset attribute will contain the value "packshot".

#### Abortion on error

Sometimes, the application of the naming convention will fail. For example, it is the case if the regular expression did not capture any group.
In this case, you can choose if you still want the corresponding asset to be created or not. To allow this behavior, set `abort_asset_creation_on_error` to `true`. As a result, the asset won't be created and you will be able to submit it again with a better filename/code for example.
If you want the asset to be created even if the naming convention application failed, set the property to `false`.

## To sum up
When all your assets filenames have the same structure (let's say: *ProductReference_ProductAttribute*), you can declare a naming convention in the PIM. It would allow you to automatically populate asset attributes with those values from the filename of your assets. Then, the product link rule would use these asset attributes in order to automatically link assets to products! :wink:

Now that you know how the naming convention feature works, we can go on discovering the *product link rule*.

# The product link rule

As said above, the product link rule is very useful when you can automate the link between assets and products.

This rule is defined at the asset family level and it is launched by the PIM after the asset is created.

You can define the product link rules via the [API](#https://api.akeneo.com/documentation/asset-manager.html#introduction) or directly in the PIM user interface, by editing a JSON field. The format is exactly the same in the API and in the PIM interface.

::: warning
The product link rule is only available to link assets to products. Yet, linking assets to product models has to be done manually, for now.
:::

::: info
You can have up to two different product link rules for one given asset family.
:::

## The product link rule format
A product link rule is divided into two parts:
- the `product_selections` part,
- the `assign_assets_to` part.

::: info
A piece of advice: when defining two different rules on an asset family, make sure you define different product selections in each rule. Why? Because you could experience performance issues. If you want to assign your assets to two different product attributes on a given selection of products, use one single rule, with two assignments in the `assign_assets_to` field. See the [Product value assignment](#product-value-assignment) section for an example.
:::

![Product Link Rules](../img/Assets_ProductLinkRules.png)

Looks difficult? Don't freak out! The following sections are here to help you understand this rule and how you can make the most of it. You'll see, it's super powerful! 😃

### Product selection
The first part of the rule is a property called `product_selections`. This property will allow you to define a selection of products for which you want to automatically link the assets of the asset family.

In one single product link rule, you can define one or several product selections.

To see the format of the `product selections`, please read [this article](https://api.akeneo.com/concepts/asset-manager.html#product-selection) on our API website ;)

::: info
You can use multiple conditions to make your selection. Those conditions are cumulative. For example, you can select the products that are **both** enabled **and** in the `men` category.
:::

Here is the list of the fields you can use to select your products:

- Among the product properties:
  * the `product family`,
  * the `product categories`,
  * the `product status`,
- Among the product attributes:
  * the `identifier` attribute,
  * the `text` attributes,
  * the `simple/multi select` attributes.

[Here](https://api.akeneo.com/documentation/asset-manager.html#product-selection) is the complete explanation of the expected JSON format.

### Product value assignment

Once you have chosen and selected the products you want to apply the rule to, it is time to think about where, in the products, you want to assign those assets.

This is done in the second part of the product link rule, in the `assign_assets_to` property. Thanks to this property, you will define to which product value you want to assign your assets. In other words, which attribute, locale and scope of the products you want to link your assets to. You can also decide whether you want to **add** new assets or **replace** the existing ones inside this product attribute.
