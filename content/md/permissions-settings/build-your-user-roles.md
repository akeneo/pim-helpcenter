---
id: build-your-user-roles
themes: permissions-settings
title: Build your **user roles**
popular: false
ee-only: false
related: manage-the-interface-and-actions-accesses, manage-the-web-api-permissions, what-is-a-role, what-is-a-user
---

# Overview
The user roles aim at defining permissions on both PIM actions/views and accesses to the [API](http://api.akeneo.com) endpoints.

The following article will give you more details on how to build your user roles and how to assign them to users.

# Create a role

To create a new role:
1. Log in with a user account having the rights to create a role
1. Go to `System` and click on the `Roles` menu entry
1. Click on the `Create` button, fill in the form and give a name to the role
    ![image](../img/System_Roles.png)
1. Click on the `Save` button to add the new role
1. Then select the permissions for the role. The different permissions are detailed in the sections below.

To better understand what is behind each permission, do not hesitate to take a look at the following articles: [Manage the interface and actions accesses](manage-the-interface-and-actions-accesses.html) and [Manage the Web API permissions](manage-the-web-api-permissions.html)

# Edit a role’s name

To edit the name of a role:
1.  Log in with a user account having rights to edit a role
1.  Go to `System`/`Roles`
1.  Click on the role you want to modify
1.  Change its name
1.  Click on `Save` to update the role

::: info
A role name cannot be longer than 25 characters.
:::

# Assign a role to a user

When you've set your roles, your can assign them to your users. This way, it will allows them to have access rights in the PIM.

To change the membership of a user:
1. Log in with a user account having rights to edit a role
1. Go to `System`/`Roles`
1. Click on the role to edit and go under the `Users` tab
    ![image](../img/System_Roles_Users.png)
1. The list of users is displayed. Users currently belonging to the role can be easily identified by the check box in the first column `Has role`
1. Look for the users and check boxes to add users to the role. And the other way around, uncheck the boxes for users to be removed from the role
1. Click on the `Save` button to update the role

The rights which have been granted to or removed from users are automatically applied. Changes on rights will be updated on the next PIM page’s loading.

::: info
One user can have several roles. In this case, permissions are cumulative: the rights the most permissive are applied.
:::

# Delete a role

Before deleting a role, you should check if this role is currently assigned to some users.

To delete a role:
1. Log in with a user account having rights to edit a role
1. Go to `System`/`Roles`
1. You have two ways to proceed:
    - Click on the role to remove, then click on the `...` button in the top right corner, then select `Delete`
    - Or click on the `Delete` trash icon directly from the roles grid
1. Then confirm the deletion of the role

::: warning
Please check first the potential impact of the removal of a role on which users have been associated to. For instance, if the role job was the only way for the user to have a specific right, then due to the role deletion, the user will have no longer his access right in the PIM.
:::
