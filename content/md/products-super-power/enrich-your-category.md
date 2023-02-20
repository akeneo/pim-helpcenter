---
id: enrich-your-category
themes: products-super-power
title: 'NEW - **Enrich** your category - Early Access'
popular: false
ee: false
related: what-is-a-category
---

# Why enrich a category?

You can enrich categories in Akeneo PIM with e-merchandising information such as images, descriptions, and SEO content to create more impactful showcases for product lines and deliver consistent and compelling product experiences across all sales channels.

# How to enrich a category?

It is easy to enrich a category with valuable content with the category template, which displays the key e-merchandising attributes that will help you describe and qualify your categories.
The category template can be activated by category tree, then applied to all categories, subcategories, and sub-subcategories of this tree. Once activated, the category template can be edited with values that are all scopable and localizable, none of the attributes are mandatory.
At any time, if you want to come back to simple category properties, you can deactivate the category template per tree, which will impact all associated categories.
From the user interface, Go to `Settings/Categories`.

![Image of the Categories](../img/enriched-categories-tree-list.png)

# Activate a category template per category tree

The category template includes attributes (text, text area, and image attribute types) to enrich categories with content such as images, descriptions, and SEO content.
To activate a new category template, hover on the tree name and click on the `Activate template` button.

![Image of the Categories](../img/enriched-categories-tree-list-hover.png)

The activation of the category tree template label and code are both automatic, and you can now view the list of pre-defined attributes available in the category template in the first `Attributes` tab.

![Image of the Categories](../img/enriched-categories-template.png)

::: info
If you cannot activate the category template, you may not have the appropriate rights to manage category templates, then please refer to the [Manage the interface and actions accesses > Rights on settings > Permissions](manage-the-interface-and-actions-accesses.html) on categories article.
:::

# To enrich a category, first, select your working context (channel/locale)

Go to `Settings/Categories` in the Akeneo PIM. To enrich the new category template’s attributes, click on the tree of your choice in the list and click on the category, subcategory or sub-subcategory you want to enrich.

![Image of the Categories](../img/enriched-categories-tree-list-template-activated.png)

![Image of the Categories](../img/enriched-categories-category-tree.png)

In the `Attributes` tab, you can view your activated template with category attributes to edit.

![Image of the Categories](../img/enriched-categories-category-details-1.png)

Your activated template will allow you to add or edit category attributes, hence enriching your categories with contents such as description, images or SEO data. To do so, first, select your working context (channel and locale).

![Image of the Categories](../img/enriched-categories-category-details-2.png)

## Select your working channel

To select the channel on which you want to edit values, select your channel in the drop-down list on the header of the `Attributes` tab.

![Image of the Categories](../img/enriched-categories-category-details-channel-selector.png)

If you want to edit several values at once, you can edit the category attributes for one channel, then another, and save all changes at once.
If you cannot find your working channel listed, perhaps the channel is not associated with the category tree you have selected: therefore it is not enabled. To manage the category tree linked to the working channel, please refer to [Manage your channels](manage-your-channels.html).

## Select your working locale

To select the locale on which you want to edit values, select your locale in the drop-down list on the header of the `Attributes` tab.

![Image of the Categories](../img/enriched-categories-category-details-locale-selector.png)

In the drop-down list, you will find the locales (that have been associated with the working channel in the `Settings`). If your working locale is not listed, perhaps the locale is not required by any of the channels: therefore it is not enabled. To add a locale to a channel, please refer to [Manage your channels](manage-your-channels.html).
For the localizable attributes (with the indicated locale on the top right of the field), the entered values will be saved only for the working locale.
If you want to edit several values at once, you can edit the category attributes for one locale, then another, and save all changes at once.

::: info
By default and to allow flexibility, you can edit any of the attributes on the category template specifically by channel and by locale, locales being dependent on the channel. None of the attributes are mandatory so you can edit and enrich only part of the attributes. However, if there is any attribute that you do not want to edit as channel- or locale-specific, then you will need to edit it separately for each channel and/or each locale one by one.
:::

# Enrich category attributes

Go to `Settings/Categories` and once a category template has been activated per tree, then you can edit attributes and enrich any of your categories.

1.  Click on the `Attributes` tab
1.  Select the channel and locale you want to enrich
1.  Complete or change your category values
1.  Click on the Save button (top right-hand corner).

---
<video controls class="img-responsive in-article">
  <source src="../img/enriched-categories-demo.mp4" type="video/mp4" />
</video>

::: info
If you cannot add category content to enrich a category, you may not have the appropriate rights to Edit category attributes, please refer to the [Manage the interface and actions accesses > Rights on settings > Permissions](manage-the-interface-and-actions-accesses.html) on categories article.
:::

::: info
We will continue to add new capabilities to our new Enriched Categories functionality throughout the year. At this time, there isn’t any impact either on the `Permissions` tab (EE only) or on the `History` tab. In addition, the template will become customizable so that you can manage the attributes you want to enrich on your categories.
:::
