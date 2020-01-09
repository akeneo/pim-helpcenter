---
id: about-naming-convention
themes: administration, manage-your-assets
title: About the **assets naming convention**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

## Focus on the naming convention

We noticed that you, our dear customers, usually name your asset files or asset codes using precious information:
- the SKU of the product corresponding to the asset,
- the locale into which your user guides are translated,
- the asset function: _Is it a frontview, backview,...?_,
- ...

The idea of the naming convention feature is to be able to extract those pieces of information and use them to automatically enrich your assets with new attributes.

By defining a naming convention, for each [asset family](#the-asset-family), the PIM will be able to split the asset code or the main media filename, in order to extract the information you want and use it to populate asset attributes.
This operation is done automatically by the PIM upon each asset creation.

::: info
This naming convention is defined at the [asset family](#the-asset-family) level.
:::

::: tips
The naming convention is perfect to automatically populate the asset attributes that will then be used by the [product link rule](#focus-on-the-product-link-rule). :wink:
:::

The JSON format of the naming convention contains several parts:
- the [`source` part](#the-source-string),
- the [`pattern` part](#the-split-pattern),
- a [boolean stating whether to abort the asset creation in case there was an error during the application of the naming convention](#Abortion-on-error).

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
    "pattern": "/(?P<product_ref>.*)-.*-(?P<attribute_ref>.*)\.jpg/",
    "abort_asset_creation_on_error": true
  }
}
```

Still not comfortable with the naming convention? Don't hesitate to go through the next sections where we detail each part of the naming convention format.

### The source property

The `source` property allows you to define on which string the split will be applied. It can be either:
- the asset code,
- the code of the main media attribute of your family.

It follows this format:
```json
{
  "source": {
    "property": CODE_OR_ATTRIBUTE_CODE,
    "locale": SOURCE_LOCALE_CODE,
    "channel": SOURCE_CHANNEL_CODE
  },...
}
```

In this formula:
 - `CODE_OR_ATTRIBUTE_CODE` can be either:
     + the _"code"_ string: when you want the asset code to be used as the source string,
     + the code of the main media asset attribute of the family: when you want the filename of the main media to be used as the source string.
 - `SOURCE_LOCALE_CODE` is an existing locale code when `CODE_OR_ATTRIBUTE_CODE` is the code of the main media asset attribute of the family and this one is localizable.
 - `SOURCE_CHANNEL_CODE` is an existing channel code when `CODE_OR_ATTRIBUTE_CODE` is the code of the main media asset attribute of the family and this one has a value for channel.

::: warning
The `property`, `locale` and `channel` properties are mandatory.  
The `locale` property should be set to `null` if:
- `CODE_OR_ATTRIBUTE_CODE` is equal to _"code"_,
- `CODE_OR_ATTRIBUTE_CODE` is equal to the code of the main media attribute and this one is not localizable.  
The `channel` property should be set to `null` if:
- `CODE_OR_ATTRIBUTE_CODE` is equal to _"code"_,
- `CODE_OR_ATTRIBUTE_CODE` is equal to the code of the main media attribute and this one is not scopable.  
:::

### The split pattern

The `pattern` property allows you to define how the PIM should split the [source string](#the-source-string). Then, the result of the split will automatically populate the corresponding asset attributes.

The split pattern should be a string. It should be given as a regular expression.  
In order for the PIM to know into which asset attributes the result of the split should be sent, this regular expression should contain one or several named capture groups.  
Note that the names of these capture groups should be equal to the code of existing asset attribute of the family and these asset attributes can only be [`text` attributes](#the-text-attribute) and [`number` attributes](#the-number-attribute).

::: warning
These asset attributes cannot be localizable neither scopable.
:::

::: tips
Not comfortable with regular expressions? You can try yours [right here](https://regex101.com/)!
:::

Let's take an example to make this clearer!
```regexp
/(?P<product_ref>.*)-.*-(?P<attribute_ref>.*)\.jpg/
```
The regexp above will split the source string into three parts, thanks to two named capture groups:
- `(?P<product_ref>.*)` is the first capture group. It is named `product_ref`. So, the result of this capture will be sent into the `product_ref` asset attribute. The `product_ref` attribute should exist in the asset family.
This conversation was marked as resolved by NolwennP
- `(?P<attribute_ref>.*)` is the second capture group. It is named `attribute_ref`. So, the result of this capture will be sent to the `attribute_ref` asset attribute. The `attribute_ref` attribute should exist in the asset family.
Let's say our source string is equal to `allie_jean-picture-packshot.png`. After the naming convention application, the `product_ref` asset attribute will contain the value "allie_jean" and the `attribute_ref` asset attribute will contain the value "packshot".

### Abortion on error

Sometimes, the application of the naming convention will fail. For example, it is the case if the regular expression did not capture any group. In this case, you can choose if you still want the corresponding asset to be created. As a result, the asset won't be created and you will be able to submit it again with a better filename/code for example.

To allow this behavior, set the `abort_asset_creation_on_error` to `true`.

If you want the asset to be created even if the naming convention application failed, set the property to `false`.
