---
id: product-completeness
themes: products-super-power
title: Follow your **product**'s completeness
popular: false
ee-only: false
related: completeness
---

# Overview

In Akeneo PIM, a product is considered as complete if all its required values are filled in.

The completeness for a product is defined according to several aspects:
- According to a family: for instance a product from the family “TV” will not have the same information that another product from the family “Book”
- According to a locale: a product can be considered complete in French but not in English as the translation has not been finished
- According to a channel: a product can be complete for an iPad application but not for an E-commerce website due to different data requirements

Therefore the [completeness](what-is-the-completeness.html) of a product is a percentage that represents the number of required attributes for a channel and a family, and which have values.

# Display the product’s completeness

In the product form, you have two different ways to display the product completeness: via the `Completeness` panel or thanks to the completeness widget.

## Completeness panel

Click on the `Completeness` panel on the left side of the product form to display a panel summing up your product’s completeness:

![Completeness panel](../img/Products_PEFCompleteness.png)

The panel sums up the product’s completeness according to the channels.

::: info
Nearby each channel, a percentage is displayed:
- The figure indicates the average completeness of the channel over the activated locales
- The color bar shows the enrichment’s progress:
    - a grey bar means that the average completeness of the channel is lower than 1%
    - an orange bar means that the average completeness of the locale is between 1 and 99%
    - a green one means that all products are complete for this locale
:::

If a locale is not activated for a channel, its completeness progress bar will not be displayed.

## Completeness widget

In the product form header, a bar is displayed with a percentage.
This percentage represents the product completeness for the selected channel and locale.

The bar is orange if the product is uncomplete and green if it is complete.
By clicking on the down arrow, you will display the different locales and the missing required attributes per locale.

For each locale you will see a percentage of completeness, if the progress bar is orange it means that all your required attributes are not all filled in yet!

The list of missing required
attributes is displayed below the completeness progress bar. If you click on the label of the missing attribute, the product form will be updated accordingly to put the focus on missing attribute value so you can fill it in directly.

When a locale is not activated for a channel, the completeness progress bar is not displayed.

# Highlighted attributes

To help you focus on the prioritised attributes, empty required attributes are highlighted in the product form. A required attribute is an attribute mandatory for the completeness.

A yellow dot is displayed just after an attribute group label if it has at least one missing required attribute. Nearby the yellow dot, you will also see the number of missing required attributes for this attribute group.
This helpful yellow dot is also displayed in front of an attribute to let you know this attribute is required for completeness and is empty.

Once a required attributes will be filled in, the bullet point disappears.

![Highlighted attributes](../img/Products_CompleteAProductProcess.gif)

To be even more efficient in the product form, you can filter on these missing required attributes and go straight to the point.
This is very easy: just click on the drop down `Display all attributes` and select `All missing required attributes`. That's it! We told you it was very quick :wink:.

Just an additional thing you should be aware of: as we display the attributes of all attributes groups in the product form, you don't need to switch from an attribute group to the other to enrich attributes belonging to different attributes groups. Of course, you can switch to a specific attribute group if required thanks to the dropdown `Attribute group`.

As a consequence, if you select the Attribute group marketing and the `Missing required attributes` filter, the missing required attributes of the attribute group marketing will be displayed in the product form.

:::info
In the Enterprise Edition, the yellow dot is displayed nearby a missing required attribute you have the right to edit.
:::

:::warning
Asset attributes must have a variation generated for the selected channel (and locale if your reference file is localisable) to have their completeness filled. If the yellow dot remains even if you have an asset file associated to your product, check if it has a variation for your channel.
:::
