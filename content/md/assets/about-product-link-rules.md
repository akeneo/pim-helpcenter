---
id: assets-product-link-rules
themes: administration, manage-your-assets
title: About the **product link rules**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# What is a product link rule?
The product link rule enables you to automatically link assets to products, based on asset name or attributes. This rule is defined at the asset family level.

This rule is launched by the PIM after the asset is created.

You can define the product link rules via the [API](#https://api.akeneo.com/documentation/asset-manager.html#introduction) or directly in the PIM user interface, by editing a JSON field. The format is exactly the same in the API and in the PIM interface.

::: warning
The product link rule is only available to link assets to products. Yet, linking assets to product models has to be done manually, for now.
:::

::: info
You can have up to two different product link rules for one given asset family.
:::

A product link rule is divided into two parts:
- the `product_selections` part,
- the `assign_assets_to` part.

::: info
A piece of advice: when defining two different rules on an asset family, make sure you define different product selections in each rule, as shown in the example above. Why? Because you could experience performance issues. If you want to assign your assets to two different product attributes on a given selection of products, use one single rule, with two assignments in the `assign_assets_to` field. See the Product value assignment section for an example.
:::

[Product link rules](image "Product link rules")

Looks barbaric? Don't freak out! The following sections are here to help you understand this rule and how you can make the most of it. You'll see, it's super powerful! 😃

## Product selection
The first part of the rule is a property called `product_selections`. This property will allow you to define a selection of products for which you want to automatically link the assets of the asset family.

In one single product link rule, you can define one or several product selections.

To see the format of the `product selection`, please read [this article](https://api.akeneo.com/documentation/asset-manager.html#link-with-products-and-product-models) on our API website ;)

::: info
You can use multiple conditions to make your selection. Those conditions are cumulated. For example, you can select the products that are **both** enabled **and** in the `men` category.
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

## Product value assignment

Once you have chosen and selected the products you want to apply the rule on, it is time to think about where, in the products, you want to assign those assets.

This is done in the second part of the product link rule, in the `assign_assets_to` property. Thanks to this property, you will define to which product value you want to assign your assets. In other words, which attribute, locale and scope of the products you want to link your assets to. You can also decide whether you want to **add** new assets or **replace** the existing ones inside this product attribute.

# Asset values extrapolation
"Asset values extrapolation"? What the hell is that? It's the clever naming I just came up with to explain one last thing about the product link rule.

You now know how to [select your products](#product_selection), and then [assign your assets](#product_value_assignment) in the right product attribute. That's a good start.

But in some cases, you might need the rule to be a bit more powerful so it answers your expectations.
As an example is better than 10,000 words, let's imagine this situation.

## How does it work?
You put all your user guides in the same asset family, called `user_instructions`.
On the one hand, you have an asset of this family, let's say the user guide for a particular TV, the `XMLD500 TV`. This user guide asset has the following code: `XMLD500_fr_FR_user_guide`. It is the French version of the user guide for this TV.  
On the other hand, you have your TV which SKU is `XMLD500`. The product sheet of this TV has an asset collection attribute called `user_guides`. It is localizable.  
Now, what you want is to automatically link the `XMLD500_fr_FR_user_guide` to the `XMLD500` product, in the right attribute on the right locale, ie the French locale.

How do you do that? I'll tell you. You're gonna need "**asset value extrapolation**".

"Asset value extrapolation" is a mechanism by which you can target specific asset values in various fields of the product link rule so that they can be interpreted depending on the asset it is currently linking.

As a prerequisite for this rule to work, we would need **two new attributes** in the structure of our `user_instructions` asset family. One named `product_ref`, and the other `locale`.
In our example, for our `XMLD500_fr_FR_user_guide` asset, we would store the values `XMLD500` into the `product_ref` attribute and `fr_FR` in the `locale` attribute.

::: info
Those two new attributes can be easily filled by using the API and a simple regular expression on the code of the asset, as both information, the product reference and the locale are already in the code.
:::

In fine, the PIM is going to select the product which SKU is `XMLD500` and assign the asset to the `user_instructions` product attribute on the `fr_FR` locale. Exactly what we wanted. 😉
