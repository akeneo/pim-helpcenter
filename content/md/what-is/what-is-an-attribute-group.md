---
id: what-is-an-attribute-group
themes: akeneo-concepts
title: What is an **attribute group**?
popular: false
ee-only: false
related: manage-your-attribute-groups
---

# Definition

![what-is-an-attribute-group](../img/Settings_What-is-an-attribute-group.svg)

Attribute groups are used to:
1. Gather attributes together to give more visibility when users fill in values
1. Organize the work of the different contributors on products in the *Enterprise Edition*

For instance, you can group all attributes for Marketing in a group named `Marketing`.

# In the product form

Once you have created an attribute group, the group will appear automatically in your product form if the product has at least one attribute in this group.

In the example below, we have three attribute groups displayed: `Marketing`, `Technical` and `Media`.

![in the product form](../img/Products_ExampleofAttributeGroups.gif)

If none of the attributes added into an attribute group is used by a product family, the attribute group will not appear in the product form.

You can also add, delete, and define an order in attribute groups, please refer to [Manage your attribute groups](manage-your-attribute-groups.html).

# Specificity for the Enterprise Edition

:::ee
In the Enterprise Edition, you can set permissions on attribute groups. You can restrict the view or the enrichment of attributes to one or more groups of users. Some users will then be able to edit attributes, others will only have a view permission to consult attributes values, and some others won't be able to see this data.

For instance, Marketing team will only be able to enrich attributes that have been added to the `Marketing` attribute group, they will be able to view `Technical` information though.
:::

![Permissions per users](../img/Settings_PermissionsOnAttributeGroups.png)
