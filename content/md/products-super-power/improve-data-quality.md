---
id: improve-data-quality
themes: products-super-power
title: Improve **data quality**
popular: false
ee-only: true
related: understand-data-quality
---

# Improving data quality
Data quality is key in offering a compelling product experience to your customers.
In Akeneo PIM you can measure and follow your data quality on two axes: **enrichment** and **consistency**.

To get a glimpse of your catalog’s overall data quality we introduced a `data quality insights` dashboard.


![Image data quality dashboard](../img/data-quality-dashboard.png)

# Follow data quality improvements
The dashboard allows you to follow your improvements both on **enrichment** and **consistency**.
You can choose the see the evolution of your data quality for:
- your entire catalog
- a chosen category
- a chosen family

![Image data quality evolution charts](../img/data-quality-charts.png)


::: tips
To see the distribution of the grades, simply mouse over the chart bar.
:::

::: success
In this view, you can see the evolution of your grades for the past 7 days or 4 weeks.
:::


# Measure data quality

From the dashboard, you can see at a glance the current grades for your favorite categories and families.

![Image data quality widgets](../img/data-quality-widgets.png)

To do so, it’s very easy:
1. Click on `Select a category` or `Select a family` from the widgets
2. Choose the categories and families you want to add to your dashboard
3. See their enrichment and consistency grades

::: success
The cherry on the cake: click on `See on the grid` to access a filtered view of your catalog to focus your work on what needs most improvements!
:::


# Improve data quality
Now that you know how to measure your catalog’s data quality, it’s easier to know which families and products need to be worked on.
To help you improve your products **enrichment** and **consistency**, simply follow the **recommendations** that can be found in the **data quality insights** panel in your product edit form.

![Image data quality panel](../img/data-quality-panel.png)
From the `data quality panel`, you will know which attributes need to be improved and how to improve them.

::: info
From the `data quality panel`, links on attribute names can take you to a specific attribute. By clicking on the `Display all improvable attributes`, you can easily access a product edit form filtered on all the attributes that need to be checked for consistency.
:::

To help you even further, in the `Attributes` panel, you can select spelling corrections and title formatting improvements.

![Image data quality spellcheck corrections](../img/data-quality-spelling.png)

::: info
Spell check is available for the English, French, German, Spanish, Italian, Dutch, Danish, Swedish, Norwegian and Portuguese (Brazilian) locales.
Spell check is usable with localizable text and text area attributes.
If you use a single locale, then spell check is usable on text and text area attributes.

Title formatting suggestion is available for English locales.

Even if they don't have permission to edit, all PIM users will be able to read data quality insights on all attributes.
:::

From the `data quality panel`, you can view attribute labels and options with spelling mistakes. By clicking on the link, you land on the **settings** screen from which you can correct these mistakes hence improving your consistency grade.

![Image data quality spellcheck on attribute option](../img/data-quality-spelling-option.gif)


# Improve data quality on variant products

If you work with variant products, you will see slight differences between grades and recommendations for simple products, product models and variant products.

For **product models**:
![Image data quality product model panel](../img/data-quality-model-panel.png)
- Data quality grades are calculated on the attributes that can be improved at the product model level.
- Recommendations are given for attributes at the product model level.

For **sub-product models**:
![Image data quality sub product model panel](../img/data-quality-sub-model-panel.png)
- Data quality grades are calculated based on the attributes that can be improved at the product model and sub-product model levels
- Recommendations are given for attributes at the product model and sub-product model levels. By clicking on an attribute name, you can go and improve an attribute in the product model or sub-product model.

For **variant products**:
![Image data quality variant panel](../img/data-quality-variant-panel.png)
- Data quality grades are calculated on the attributes that can be improved at all levels hence reflecting the data quality of the product that will be published. Data quality grades are therefore displayed in the left side bar only for product variant.
- Recommendations are given for all attributes by clicking on an attribute name, you can go and improve an attribute in the product model, the sub-product model or the variant product.

# Improve data quality on attribute labels and Options

From the `Settings` you can check and improve the data quality of your attribute labels and options.

![Image data quality attribute grid](../img/data-quality-attribute-grid.png)

In the 'quality' column, you can view whether the data quality for your attribute is "Good" or "To improve".
If the status is "To improve", you may need to correct either attribute labels for one or several locales and/or attribute options for one or several locales.

![Image data quality spell-check in attribute option](../img/data-quality-spelling-option.png)

To do so, it’s very easy:
1. Click on the attribute with the "To improve status"
2. View the number of errors you need to correct in the `òptions` and `labels` tabs of the attribute screen
3. Use the spell-check suggestions to correct them
4. Save your changes

![Image data quality spell-check in attribute option](../img/data-quality-attribute-helper.png)

::: info
A helper indicates you how many products are impacted by the errors you are about to correct.
:::
