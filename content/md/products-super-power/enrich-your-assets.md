---
id: enrich-your-assets
themes: products-super-power, manage-your-assets
title: "Enrich your **assets**"
popular: false
ee-only: right
related:
---

# The asset library
When you open the `Assets` menu, you discover the assets in a mosaic view, that we call the **asset library**.

![Asset library](../img/Asset_library.png)

Assets are displayed by asset families. By default, the first asset family is selected.

::: info
If you don't have any asset family, the first thing to do is to create your first one, and then you will be able to add assets.
:::

# Search for assets
Because we really want to help you in your daily work, we focused our efforts on the search.

## Full text search

As for the Reference Entity feature, you benefit from a powerful search in the Asset Manager. With the **full text search**, you can search on code, label and text attribute types.

For example, if you search for the word *« famous »*, all the assets containing the word *« famous »* in their code, label or text attribute types will be displayed.  

![Search for assets with a keyword](../img/Assets_Search_1_word.png)

And we can go further.
If you search for *"famous"* and *"bags"*, then only the record containing both *"famous"* and *"bags"* words will be displayed.

![Search for assets with several keywords](../img/Assets_Search_2_words.png)

## Filter on options

There are also filters on the left, where you retrieve the options of the single/multiple options attributes. It can be very powerful if you use these options to manage tags on your assets for example.

![Asset library](../img/Asset_filter_options.png)

The operator is an `in list` operator. If you are looking for the packshot with the room "kitchen" OR "leaving room", the packshots with the room "kitchen" OR the room "leaving roomd" will be displayed.

You can combine filters. For instance, you can search on all packshots with the material "wood" AND the color "brown".

An option can be removed from a filter using the cross.

To empty a filter, you can click on the eraser.


# Edit an asset

Of course, you can edit an asset in order to change values or add new ones. Nothing simpler: just go on an asset and add/change the values you want.

As for a product, you can define if you want a **different content according to channels**, and the same applies on **locales**.
You can find a **locale and channel switcher** on each asset, meaning that if you need to translate values for example, you can do it simply switching from a locale to another.

![Locale switcher on the asset library](../img/Assets_locale_switcher.png)

In the Attribute tab, if you define a *"text area"* attribute for your assets, you can tick the parameter `rich text editor`. This will give you access to a set of options to improve the format of your text. For example, you can change the font, the size, etc. You can also add a link, a video, an image.
In fact, the Rich text editor offers a large bunch of possibilities!

![Assets text area](../img/Assets_text_area.png)

# Display the products linked to an asset
You can see the first products linked to an asset in the `Products` tab directly from an asset.

To display the 1st products linked to the asset `atmosphere_alpha`:
1. Go to the `atmosphere_alpha` asset
1. Then click on the `Products` tab
1. To open a product, just click on it and the product form will open in a new tab.

![Product asset link](../img/Assets_display_products.png)

In this `Products` tab, the 20 first products linked to an asset (for the selected product attribute) are displayed as well as the total number of products linked ("xx results").

If more than 20 products are linked to the asset, a message is displayed after the last products:

![Product asset link](../img/Assets_display_all.png)

If you want to display all the products linked to an asset, you just have to click on the `View all products` button, it will open the product grid with a filter on the product attribute linked and the `atmosphere_alpha` value.
Then, from the product grid, you can search and launch enrichment actions on these products.

::: info
If no products are displayed in the `Products` tab, there are two possible reasons:
1. Your asset family is not linked to a product attribute, you first have to [create a new product attribute](manage-your-attributes.html#create-an-attribute) linked to the asset family.
1. The selected product attribute doesn't have any product linked to the asset. You first have to link products to the asset.
:::

::: info
If the `View all products` button is not displayed, [check that the product attribute](manage-your-attributes.html#edit-attribute-properties) is set as `usable in grid`.
:::

# Follow the assets completeness

Like for products, we calculate [completeness](manage-assets.html) on assets.

In the assets, several indicators show you the status of your completeness and which attributes are missing.
- **Yellow bullet points** in front of each missing required attribute, showing that you have to complete this attribute to improve the completeness.
- The **completeness percentage** in the header of the asset informs you of the completeness level.   

You also have the completeness indicator directly on the asset thumbnail in the library.

The completeness is **automatically calculated** as soon as we enrich a required attribute. It means that the bullet point will disappear as soon as the required attribute is filled, and same for the completeness percentage evolution.

# Delete assets

## Delete an asset
You can delete an asset or all the assets of an asset family.
 To delete an asset, click on the asset, then on the `...` button at the top right corner of the header, and `delete`.

## Delete all the assets
To delete all the assets of a family, click on the `...` button at the top right corner of the header's asset library, then `delete all records`.

::: tips
To delete all the assets of an asset family, you **need to check that no asset of this family is used in a product**. Otherwise you will not be able to delete it.
:::
