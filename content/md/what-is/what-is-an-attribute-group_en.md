---
id: what-is-an-attribute-group
themes: akeneo-concepts
title: What is an **attribute group**?
popular: false
ee-only: false
related: manage-your-attribute-groups
---

# Definition

![what-is-an-attribute-group](/img/Settings_What-is-an-attribute-group.svg)

Attribute groups are used to:
1. Gather attributes together to give more visibility when users fill in values
1. Organize the work of the different contributors on products in the *Enterprise Edition*

For instance, you can group all attributes for Marketing in a group named `Marketing`.

# In the product form

Once you have created an attribute group, the group will appear automatically in your product form if the product has at least one attribute in this group.

In the example below, we have three attribute groups displayed: `Marketing`, `Technical` and `Media`.

![in the product form](/img/Products_ExampleofAttributeGroups.gif)

If an attribute group is not used for the product family, then the attribute group does not appear in the product form when you edit your product.

You can also add, delete, and define an order in attribute groups, please refer to [Manage your attribute groups](/fr/articles/manage-your-attribute-groups.html).

# Specificity for the Enterprise Edition

:::ee
In the Enterprise Edition, you can define permissions on attribute groups, meaning you can define groups of users that are allowed to edit attributes belonging to the groups or only allow them to view attribute’s values.

For instance, Marketing team will only be able to enrich attributes that have been added to the `Marketing` attribute group, they will be able to view `Technical` information though.
:::

![Permissions per users](/img/Settings_PermissionsOnAttributeGroups.png)
