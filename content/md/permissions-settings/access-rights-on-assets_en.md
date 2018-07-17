---
id: access-rights-on-assets
themes: permissions-settings
title: Set rights on your **assets**
popular: false
ee-only: true
related: what-is-a-user-group, what-is-a-user, build-your-user-groups
priority: low
---

# Overview

Access rights enable you to configure the visibility scope of users on assets in the PIM. In other words, it is possible to define for each [user group](what-is-a-user-group.html), which assets can be viewed and/or edited, depending on the classification of the assets in their categories.

## Three levels of access

They are three levels of access you can grant for your user groups on each of your asset category:
- `Allowed to view assets`: if granted, the users in the user group will be able to view the assets in the category
- `Allowed to edit assets`: if granted, the users in the user group will be able to make change on the assets in the category
- No rights: if `Allowed to view assets` and `Allowed to edit assets` are not granted, the users in the user group won't be able to see these assets in the category

::: tips
If you remove the right to view the assets on one given category, the PIM will automatically also remove its right to edit the assets on this category.
:::

# Set rights to user groups
To set the level of access on assets according to the assets categories:
1.  Go to `Settings` and click on the `Asset categories` menu entry
1.  Select the asset category to set permissions on, in the left panel
1.  Click on the `Permissions` tab
    ![image](../img/Settings_AssetsCategoriesPermissions.png)
1.  Click in the fields and select groups to grant them permissions
1.  Click on the `Save` button

Permissions are immediately applied to users according to their user groups

::: info
By default, all users are entitled to all the rights on the created asset categories through the `All` user group, which is the user group by default. If you define permissions to specific groups, remove the `All` user group.
:::

# Some crucial tips

## One asset, several categories

If an asset is in multiple asset categories of one tree or more, the most permissive right is applied on the asset.

**Example**  
The `main_picture_tshirt_divided.png` asset is categorized in:
- the `Divided brand` category, on which the `Divided supplier` user group has an edit right
- the `Tshirt` category, on which the `Divided supplier` user group only has a view right
Now, imagine Mary is in the `Divider supplier` user group. She will have the edit right on the `main_picture_tshirt_divided.png` asset.

## One user, several user groups

If a user is in several user groups, the most permissive right is applied on the asset.

**Example**  
The `main_picture_tshirt_divided.png` asset is categorized in the `Tshirt` category, on which:
- the `Divided supplier` user group has an edit right
- the `Manager` user group only has a view right
Now, imagine Mary is both in the `Divider supplier` and the `Manager` user groups. She will have the edit right on the `main_picture_tshirt_divided.png` asset.

## The `Apply changes on children` option

In the `Permissions` tab, there is an option called `Apply changes on children`. This option is checked by default. It means that the permissions you have granted to your current category will be apply to all its sub-categories.  
And vice-versa.

As you can see in the example below, the `Apply changes on children` is checked for the parent category. So all its sub-categories will get exactly the same user groups configuration for the view and edit rights.

![image](../img/Settings_AssetCategoriesPermissionsApplytoAllChildren.png)
