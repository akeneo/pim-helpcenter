---
id: what-is-the-completeness
themes: first-steps
title: Understand product **completeness**
popular: true
related: product-completeness
---

# About the completeness
What is this **red, orange or green progress bar displayed on my dashboard**? What means **the percentage on my product grid**?

**This is the completeness!**

Because product information matters to us, we introduced the concept of "completeness" in our PIM.
Akeneo's completeness is an information about your enrichment quality: it tells you how many attributes are filled in for your products.

# Where to see the completeness?
The completeness can be displayed as a **progress bar** or as a **percentage** in the PIM.

## On your dashboard
Your **dashboard** will display the overall completeness for each combination channel/locale

![SCREENSHOT dashboard](../img/Dashboard.png)

## In your product grid
Your **product grid** will display the completeness for each product as a percentage

![SCREENSHOT product grid](../img/Products_Project.png)

## On your product edit form
Your **product edit form** will display the completeness for each product, as well as for each variant if it is a product model

![SCREENSHOT product completeness](../img/Products_PEF1.png)

![SCREENSHOT if variant products](../img/Products_VariantProdcut2.png)

## In your completeness panel (product edit form)
![SCREENSHOT completeness panel](../img/Products_PEF_CompletenessPanel.png)

::: tips
Thanks to the completeness panel, get the list of empty attributes and fill them in!
:::

# How do I set up my completeness?
The **completeness is defined by a [family](what-is-a-family.html)**, a **[locale](what-is-a-locale.html)** and a **[channel](what-is-a-channel.html)**.


Then, once you know which attributes have to be taken into account for each family, in other words, **which attributes must be filled in to export your product**, go to `Settings/Family`.
Select a family and under the tab `Attributes`, tick attributes to take them into account in the completeness calculation or untick them to remove them from completeness calculation.

![SCREENSHOT GIF tick untick products](../img/Settings_Families_Attributes_Completeness.gif)

It's easy as pie!

::: success
To determine which attributes to set as required, try to answer the following question: which product information do I absolutely need to display on my website, app...? Is it the same for all my channels?
:::

# How is it calculated?
The **completeness calculation takes into account several parameters**: the attributes defined as mandatory for the product family, the locales enabled for the channel... The PIM checks all the attributes filled in and all the attributes missing a value, and display you a percentage.

A product is considered as **complete** (when it has a completeness of 100%, meaning when all its required attributes have a value.

![SCREENSHOT](../img/Products_PEF12Completeness.png))

# How often is my completeness refreshed?
The completeness is regenerated:
- after an import,
- after a mass action,
- after the rules are executed,
- after you edit your family,
- after a product is saved...

::: warning
You can refresh your completeness using the command ```app/console pim:completeness:calculate``` (not available for Serenity edition)
:::
