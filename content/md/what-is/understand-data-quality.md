---
id: understand-data-quality
themes: first-steps
title: Understand **data quality**
popular: false
ee-only: true
related: improve-data-quality
---

# About data quality
What is this **red, orange or green A, B, C, D, E displayed on my product edit form**? What are the **enrichment** and **consistency** grades?

**This is data quality insights!**

Because rich, coherent and consistent product data is important in order to deliver great product experiences, we introduced the concept of "data quality" in our PIM.
Akeneo's data quality is information about your product data quality: it helps you measure your data quality along two axes: **enrichment** and **consistency**.
Each of these axes has a grade ranging from A to E. The grades can be seen on several screens in the PIM.

![Image data quality badges](../img/data-quality-grades.png)

# How is enrichment calculated?
The **enrichment grade** is calculated on the percentage of attributes filled in your product edit form (whether the attributes are required for completeness or not).

Checking the `data quality insights` panel in the product edit form allows you to quickly see which attributes need to be filled to improve your data quality grade for enrichment.

::: tips
From the `data quality insights` panel, by clicking on the "Display all missing attributes", you can easily access a product edit form filtered on all the attributes that need to be filled.
:::

# How is consistency calculated?

The **consistency grade** is calculated on several criteria. The mix of the following criteria help the PIM determine the grade for consistency:
- Spell check: text and text areas are checked for spelling mistakes.
- Title formatting: the attribute as main title is checked for optimised writing.
- Upper cases formatting: the PIM checks whether text area attributes are correctly formatted for upper cases.
- Lower cases formatting: the PIM checks whether text area attributes are correctly formatted for lower cases.

::: info
Spell check is available for English, French, German and Spanish locales.
Spell check is usable with text and simple text area attributes.
:::

::: info
Title formatting suggestion is available for English locales.
:::

::: tips
From the `data quality insights` panel, by clicking on the "Display all improvable attributes", you can easily access a product edit form filtered on all the attributes that need to be checked for consistency.
:::

::: success
To fully take advantage of the Title formatting criteria, set your product title as attribute as main title
:::

# Where to see data quality grades?
Data quality grades for **enrichment** and **consistency** are displayed as badges on various screens of the PIM.

## On your dashboard
Your **dashboard** offers multiple ways of measuring your catalog's enrichment and consistency. You can choose to view data quality on the whole catalog, on a family or on a category.

![Image data quality dashboard](../img/data-quality-dashboard.png)

## In your product grid
Your **product grid** will display the enrichment and consistency grades for each product.

![Image product grid](../img/data-quality-grid.png)

## On your product edit form
Your **product edit form** will display the enrichment and consistency grades for each product.

![Image product edit form](../img/data-quality-pef.png)

::: info
Enrichment and consistency grades are not yet calculated on product variant and product models. Stay tuned for our future releases!
:::

## In your data quality insights panel (product edit form)
Clicking on `data quality insights` in the product edit form leads you to a panel dedicated so that you understand your grades.
![Image data quality panel](../img/data-quality-panel.png)

::: tips
Thanks to the data quality panel, get recommendations on how to improve your data quality grades!
:::

# How often are the data quality grades refreshed?
The grades are updated:
- after an import,
- after a product is saved.
