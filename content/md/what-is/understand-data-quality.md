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
This new capability helps you measure your data quality along two axes: **enrichment** and **consistency**.  
Each of these two axes has a score from A to E. The scores can be seen on several PIM screens.


# How is enrichment calculated?
The **enrichment grade** is calculated as the percentage of attributes with values in your product edit form (whether the attributes are required for completeness or not).

Checking the `data quality insights` panel in the product edit form allows you to quickly see which attributes need to be filled in to improve your data quality grade for enrichment.

::: tips
From the `data quality insights` panel, by clicking on the "Display all missing attributes", you can easily access a product edit form filtered on all the attributes that need to be filled in.
:::

# How is consistency calculated?

The **consistency grade** is calculated on several criteria. The mix of the following criteria helps the PIM determine the grade for consistency:
- Spell check: localizable text and text areas are checked for spelling mistakes.
- Title formatting: the attribute used as **main label** is checked to optimize writing.
- Uppercases formatting: the PIM checks whether text area attributes are correctly formatted for upper cases.
- Lowercases formatting: the PIM checks whether text area attributes are correctly formatted for lower cases.

::: info
Spell check is available for the English, French, German, Spanish, Italian, Dutch, Danish, Swedish, Norwegian and Portuguese (Brazilian) locales.
Spell check is usable with localizable text and text area attributes.
:::

::: info
Title formatting suggestions are available for English locales. In order to check title formatting, the attribute must be a localisable text attribute.
:::

::: tips
From the `data quality insights` panel, by clicking on the "Display all improvable attributes", you can easily access a product edit form filtered on all the attributes that need to be checked for consistency.
:::

::: success
To take full advantage of the Title formatting criteria, set your product title attribute as the **main label**.
:::

# Where to see data quality grades?
Data quality grades for **enrichment** and **consistency** are displayed as badges on PIM screens.

## On your dashboard
Your **dashboard** offers multiple ways of measuring your catalog's enrichment and consistency. You can choose to view data quality on the whole catalog, on a family, or on a category.

![Image data quality dashboard](../img/data-quality-dashboard.png)

## In your product grid
Your **product grid** will display the enrichment and consistency grades for each product.

![Image product grid](../img/data-quality-grid.png)

## On your product edit form
Your **product edit form** will display the enrichment and consistency grades for each product.

![Image product edit form](../img/data-quality-pef.png)


## In your data quality insights panel (product edit form)
Clicking on `data quality insights` in the product edit form takes you to a dedicated panel where you'll find what you need to understand your grades.
![Image data quality panel](../img/data-quality-panel.png)

There are several types of recommendations:
- "Everything is good": all the checked attributes are correct.
- "Attribute label": attribute labels are clickable so you can improve them easily.
- "N/A": if the recommendation is "N/A" (Not Applicable) it means that the criteria is not relevant for the given product. For example, "N/A" will be displayed for spell-check if you don't have any localizable text or text area attributes.
- "In progress": the criteria is being checked.

![Image data quality panel](../img/data-quality-panel_inprogress.png)


::: info
Checking the quality of the **Title formatting** attribute can take up to 30 minutes. A global consistency grade is given during the process to give immediate feedback on the other criteria.
:::

# How often are the data quality grades refreshed?
The grades are updated:
- after an import,
- after a product is saved.