---
id: manage-data-quality
themes: catalog-settings
title: Manage your **data quality**
popular: false
ee-only: true
related: understand-data-quality, improve-data-quality, access-rights-on-data-quality
---

# Overview

In order to check, score and get recommendations on the product data that truly matters to craft a great product experience, you can disable Data Quality Insights for non-relevant attribute groups (ie. ERP, internal…).  
By doing so, you will be able to highlight the quality of the attributes that are the most valuable for your customers.

:::info
Data Quality Insights is activated by default for all attribute groups.
:::

# Data Quality Insights activation and deactivation

:::info
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

# Global view of attribute group activation
To know which attribute groups are taken into account in the Quality Score, you can check the attribute group grid in the settings.

![Image data quality attribute groups grid](../img/data-quality-attribute-groups-grid.png)

:::info
In the data quality panel of the product edit form, you are reminded which attribute groups are activated for the product you are working on.

![Image data quality attribute groups reminder](../img/data-quality-attribute-groups-reminder.png)
:::
