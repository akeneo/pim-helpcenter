---
id: access-rights-on-entities
themes: permissions-settings, manage-your-reference-entities
title: Set rights on your **reference entities**
popular: false
ee-only: true
related: what-about-reference-entities, manage-your-reference-entities, build-your-user-groups
---

# The basics

Once you've [created your 1st reference entity](manage-your-reference-entities.html) and [created your user groups](build-your-user-groups.html), you can begin to define for each of these users groups if they will be able to see/edit this reference entity.

# Rights depending on the reference entity

You can define which user groups can view or edit a reference entity, its properties, its attributes and its records.

For reference entities, we have 2 levels of access: the view right and the edition right.

::: warning
It’s not possible to hide a reference entity.
:::

## The edition right
The edition right means add, edit and delete rights.  
If a user belonging to a user group that has right to `EDIT` a reference entity, he will be able to:
*   Edit the reference entities properties
*   Add, edit, delete the reference entities Attributes
*   Add, edit, delete a reference entity record
*   Delete the reference entity

## The view right
If a user belonging to a user group that has right to display a reference entity, he will only be able to view the reference entity information (properties, attributes, records) and that's all.  
He will have to possibility to edit or delete it.

## Set rights to a reference entity
To define the rights on a reference entity, follow these steps:
1.  Go to the `Permissions` tab of the reference entity
1.  For each user group, tick to give the `View` or `Edit` rights
1.  Click on the `Save` button to save the Permissions
![image](../img/ReferenceEntity_Permissions.png)

For example, a user in the `Manager` group can edit this `Brand` reference entity, so add and edit attributes or add and enrich some brands.
A user in the `Clothes managers` group only view this `Brand` reference entity, so he can only view its attributes and also view its brands.

:::tips
If you want all your user groups to have the edit rights, click on `EDIT` in the columns title and all the user groups will be ticked with `Edit` rights.
If you want almost all your user groups to have the view rights, click on `VIEW` in the columns title and all the user groups will be ticked with `View` rights. And then, tick with `Edit` rights some user groups.
:::

:::warning
At least one user group should have `EDIT` rights on a reference entity to manage the permissions on this reference entity.
:::


# Rights depending on the locales
It is possible to define for each [user group](what-is-a-user-group.html), on which [locale](what-is-a-locale.html) the reference entity information can be viewed and/or edited.
