---
id: access-rights-on-entities
themes: permissions-settings, manage-your-reference-entities
title: Set rights on your **reference entities**
popular: false
ee-only: true
ge-only: false
related: what-about-reference-entities, manage-your-reference-entities, build-your-user-groups
---

# The basics

Once you have [created your 1st reference entity](manage-reference-entities.html) and [created your user groups](build-your-user-groups.html), you can begin to define for each of these user groups if they will be able to display/edit this reference entity and its data.

# Rights depending on the reference entity

You can define which user groups can view or edit a reference entity, its properties, its attributes and its records.

For reference entities, we have 2 levels of access: the view right and the edit right.

::: warning
It’s not possible to hide a reference entity.
:::

## The edit right
The edit right means add, edit and delete rights.  
If a user belonging to a user group has right to `EDIT` a reference entity, he will be able to:
*   Edit the properties of this reference entity
*   Add, edit and delete the attributes of this reference entity
*   Add, edit and delete a record of this reference entity
*   Delete this reference entity

:::info
If you want only some users to be able to edit the attributes of a reference entity or delete a record, you can also manage accesses on the actions according to [the user roles](build-your-user-roles.html). Please refer to [this article](manage-the-interface-and-actions-accesses.html#rights-on-reference-entities-ee-only) to have more information.
:::

## The view right
If a user belonging to a user group has right to `VIEW` a reference entity, he will only be able to display the reference entity data (properties, attributes, records) and that's all.  
He won't be able to edit or delete it.

## Set rights on a reference entity
To define the rights on a reference entity, follow these steps:
1.  Go to the `Permissions` tab of the reference entity
1.  For each user group, tick to give the `VIEW` or `EDIT` rights
1.  Click on the `Save` button to save the Permissions
![image](../img/ReferenceEntity_Permissions.png)

For example, a user in the `Manager` group can edit this `Brand` reference entity, so he can add and edit attributes or add and enrich some brands.
A user in the `Clothes managers` group can only view this `Brand` reference entity, so he can only view its attributes and also view its brands.

:::tips
If you want all your user groups to have the edit rights, click on `EDIT` in the columns title and all the user groups will be ticked with `EDIT` rights.  
If you want almost all your user groups to have the view rights, click on `VIEW` in the columns title and all the user groups will be ticked with `VIEW` rights. And then, add the `EDIT` right to some user groups.
:::

:::warning
At least one user group should have `EDIT` rights on a reference entity to manage the permissions on this reference entity.
:::

# Rights depending on the locales
It is possible to define for each [user group](what-is-a-user-group.html), on which [locale](what-is-a-locale.html) the reference entity data can be viewed or edited.

For reference entities, we have 2 levels of access on locales: the view right and the edit right.

::: warning
It is not possible to hide a locale in a reference entity.
:::

## The edit right
The edit right means add and edit rights.  
If a user belonging to a user group has right to `EDIT` a reference entity, he will be able to:
*   Edit the reference entities labels for a locale
*   Edit the reference entities attributes labels for a locale
*   Edit the reference entity records values for a locale if the attribute is localizable

## The view right
If a user belonging to a user group has right to `VIEW` on a locale, he will only be able to display the reference entity data on this locale (properties, attributes, records) and that's all.  
He won't be able to edit it.

## Set rights on a locale
To define the rights on a locale, please refer to [this article](access-rights-on-products.html#set-rights-to-user-groups).
