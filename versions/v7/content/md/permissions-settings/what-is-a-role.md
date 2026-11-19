---
id: what-is-a-role
themes: akeneo-concepts, permissions-settings
title: What is a user **role**?
related: handle-your-user-permissions, build-your-user-roles, manage-the-interface-and-actions-accesses, manage-the-web-api-permissions
---

# Definition
A role is a set of permissions for actions available within the PIM (example: create a product, delete a product, view the attributes grid...) or with the API (example: create/update categories, list attributes,...).

A role can be assigned to one or several users. You can imagine having a role named `Administrator` that will grant more access than another role named `Manager` that will itself grant more access than a third role named `Intern`, for example.

![image](../img/System_users_Profil_edit_grpandroles.png)

One user can have one or several roles. In the case a user has several user roles, the permissions given by each of its roles are cumulated.

# Example

Mary is an intern. We do not want her to create new products. So we assigned the `Intern` user role to her. This role does not grant the right to create new products as you can see in the screenshot below.

![image](../img/System_RolesUsersPermission_MaryIntern.png)

So easy!
