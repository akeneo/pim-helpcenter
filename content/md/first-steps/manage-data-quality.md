---
id: manage-data-quality
themes: catalog-settings
title: Manage your **data quality**
popular: false
ee-only: true
related: understand-data-quality, improve-data-quality, access-rights-on-data-quality
---
# Overview
Learn how to get the most out of the Data Quality Insights feature.

# Activate and deactivate Data Quality Insights
In order to check, score and get recommendations on the product data that truly matters to craft a great product experience, you can disable Data Quality Insights for non-relevant attribute groups (ie. ERP, internal…).  
By doing so, you will be able to highlight the quality of the attributes that are the most valuable for your customers.

:::info
Data Quality Insights is activated by default for all attribute groups.

You must be granted a specific permission by the administrator to be able to edit attribute groups.
:::

![Image data quality attribute group activation](../img/data-quality-attribute-group-activation.png)

To activate data quality insights from an attribute group:
1.  Go to `Settings/Attribute groups`
2.  Click on an attribute group name
3.  Set `Data Quality activation` to Yes

To deactivate data quality insights from an attribute group:
1.  Go to `Settings/Attribute groups`
2.  Click on an attribute group name
3.  Set `Data Quality activation` to No

:::info
Deactivating data quality calculation for some attribute groups will trigger a new calculation of your Enrichment and Consistency grades. Depending on the size of your catalog, this action can take up to a few hours. When they are available, you will be able to access the results on the data quality dashboard.
:::

## Global view of attribute group activation
To know which attribute groups are taken into account in the Quality Score, you can check the attribute group grid in the settings.

![Image data quality attribute groups grid](../img/data-quality-attribute-groups-grid.png)

:::info
In the data quality panel of the product edit form, you can see which attribute groups are activated for the product you are working on.

![Image data quality attribute groups reminder](../img/data-quality-attribute-groups-reminder.png)
:::

# Manage your dictionary
Either because your product names are unique or due to industry acronyms that are not part of regular dictionaries, you can add words in your personal dictionary to fit your special needs and avoid miscalculation of your Quality Score.

Several ways to add words to the `Dictionary`:
- Through the "ignore" feature in the spell-check pop-in displayed when a possible typo error is detected
- In the `Locales` settings screen

![Image data quality spelling](../img/data-quality-spelling.png)
:::

:::info
To save you time, in addition to the manual ways, Akeneo PIM searches all words used in your product data (in text, text area attributes and attribute and option labels. If a word that counts a minimum of 3 letters is found at least 10 times, then this word will be automatically added to your personal dictionary.)
:::

## Locales dictionary
For users with rights to edit locales, it is possible to add, edit or delete words in the dictionary.
Go to `Settings/Locales/Dictionary`

![Image data quality dictionary](../img/data-quality-dictionary.png)
:::

Several ways to add words from the `Dictionary` screens
- For several locales, by clicking on a locale name and using the mass action to add the same word or words for the selected locales
- For a single locale, by using the "add words" box

![Image data quality add words to dictionary](../img/data-quality-add-words-dictionary.png)

:::info
To add several words at a time, separate them with comas "," or space.
You can add up to 100 words at a time.
Words are case-insensitive: you can either type them all in lower or uppercases.
:::
