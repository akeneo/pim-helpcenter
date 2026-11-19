---
id: access-rights-on-asset-families
themes: permissions-settings, manage-your-assets
title: Set rights on your **asset families**
popular: false
ee-only: true
related: what-about-assets, manage-your-assets, build-your-user-groups
---

# The basics

Once you have [created your 1st asset family](manage-asset-families.html) and [created your user groups](build-your-user-groups.html), you can begin to define for each of these user groups if they will be able to display/edit this asset family and its data.

# Rights depending on the asset family

You can define which user groups can view or edit an asset family, its properties, its attributes and its assets.

For assets, we have 2 levels of access: the view right and the edit right.

::: warning
It’s not possible to hide an asset family.
:::

## The edit right
The edit right means add, edit and delete rights.  
If a user belonging to a user group has right to `EDIT` an asset family, he will be able to:
*   Edit the properties of this asset family
*   Add, edit and delete the attributes of this asset family
*   Add, edit and delete assets of this asset family
*   Delete this asset family

:::info
If you want only some users to be able to edit the attributes of an asset family or delete an asset, you can also manage accesses on the actions according to [the user roles](build-your-user-roles.html). Please refer to [this article](manage-the-interface-and-actions-accesses.html#rights-on-assets-ee-only) to have more information.
:::

## The view right
If a user belonging to a user group has right to `VIEW` an asset family, he will only be able to display the asset family data (properties, attributes, assets) and that's all.  
He won't be able to edit or delete it.

## Set rights on an asset family
To define the rights on an asset family, follow these steps:
1.  Go to the `Permissions` tab of the asset family
1.  For each user group, tick to give the `VIEW` or `EDIT` rights
1.  Click on the `Save` button to save the Permissions
![image](../img/Assets_FamilyPermissions.png)

For example, a user in the `Manager` group can edit the `Images` asset family, so he can add and edit attributes, transformations and product link rules, and also add and enrich some assets.
A user in the `Redactor` group can only view this `Images` asset family, so he can only view its attributes, transformations and product link rules settings, but also view its assets.

:::tips
If you want all your user groups to have the edit rights, click on `EDIT` in the columns title and all the user groups will be ticked with `EDIT` rights.  
If you want almost all your user groups to have the view rights, click on `VIEW` in the columns title and all the user groups will be ticked with `VIEW` rights. And then, add the `EDIT` right to some user groups.
:::

:::warning
At least one user group should have `EDIT` rights on an asset family to manage the permissions on this family.
:::

# Rights depending on the locales
It is possible to define for each [user group](what-is-a-user-group.html), on which [locale](what-is-a-locale.html) the asset family data can be viewed or edited.

For assets, we have 2 levels of access on locales: the view right and the edit right.

::: warning
It is not possible to hide a locale in an asset family.
:::

## The edit right
The edit right means add and edit rights.  
If a user belonging to a user group has right to `EDIT` an asset family, he will be able to:
*   Edit the asset family labels for a locale
*   Edit the asset family attributes labels for a locale
*   Edit the asset values for a locale if the attribute is localizable

## The view right
If a user belonging to a user group has right to `VIEW` on a locale, he will only be able to display the asset family data on this locale (properties, attributes, assets) and that's all.  
He won't be able to edit it.

## Set rights on a locale
To define the rights on a locale, please refer to [this article](access-rights-on-products.html#set-rights-to-user-groups).
