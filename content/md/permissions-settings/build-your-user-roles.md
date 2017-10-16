---
id: build-your-user-roles
themes: permissions-settings
title: Manage **interface and API accesses**
popular: false
ee-only: false
related: what-is-a-role, what-is-a-user
---

# Overview
The user roles aim at defining permissions on both PIM actions/views and accesses to the API endpoints.

The following article will give you more details on how to build your user roles and how to assign them to users.

# Create a role

To create a new role:
1.  Log in with a user account having the rights to create a role
1.  Go to `System` and click on the `Roles` menu entry
1.  Click on `Create` button, fill in the form and give a name to the role
![image](../img/dummy.png)
1.  Click on the `Save` button to add the new role
1.  Then select the permissions for the role. The different permissions are detailed in the sections below.

## Set permissions on actions

Permissions on actions are granted according to the user’s role(s). The following table lists all the rights and the features that are attached to it.

In the following tables, you will see on the left side the permission’s name and on the right side its description.

### Permissions on association types

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create an association type    | User can see and click on the `Create association type` button in `Settings`/`Association types` |
| Edit an association type      | User can edit the association types under `Settings`/`Association types`                   |
| View association type history | User can access the `History` tab of the  association types. He must also have the permission to `Edit an association type`.                   |
| List association types        | User can see and access the `Settings`/`Association types` menu entry |
| Remove an association type    | User can delete an association type under `Settings`/`Association types` menu entry|

### Permissions on attributes

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create an attribute | User can see end click on the `Create attribute`button in `Settings`/`Attributes`               |
| Edit an attribute   | User can edit the attribute’s properties under `Settings`/`Attributes`     |
| View attribute history | User can access the `History` tab of the attributes    |
| List attributes   | User can see and access the `Settings`/`Attributes` menu entry                                                 |
| Remove an attribute  | User can delete an attribute under the `Settings`/`Attributes` menu entry  |
| Sort attributes inside attribute groups | User can sort attributes by dragging and droping them,  under `Settings`/`Attributes` menu entry in the `Attributes` tab of an attribute group |


### Permissions on attribute groups

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Add attribute to a group | User can access the `Add attributes` dropdown under the `Attributes` tab in `Settings`/`Attribute groups`  |
| Create an attribute group | User can see and click on the `Create` in `Settings`/`Attribute groups` |
| Edit an attribute group | User can edit an attribute group under the `Settings`/`Attribute groups` menu entry  |
| View attribute group history | User can access the `History` tab of the attribute groups |
| List attribute groups | User can see and access all attribute groups listed under `Settings`/`Attribute groups` |
| Remove an attribute group | User can delete an attribute group uner the `Settings`/`Attribute groups` menu entry |
| Remove an attribute from a group | User can remove an attribute from the attribute group, by clicking on the trash icon |
| Sort attribute groups | User can sort attribute groups by dragging and droping them up and down |
| Manage attribute group permissions _(EE only)_ | User can access to the `Permissions` tab on the attribute group and set permissions on them |


### Permissions on categories

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create a category                | User can create a new category with a right click on the tree and click on the  `Create a new category` button in the `Settings`/`Categories` menu entry |
| Edit a category                  | User can edit a category |
| View category history | User can access the `History` tab of categories |
| List categories | User can see and access all categories and category trees listed under the `Settings`/`Categories` menu entry |
| Remove a category | User can remove a category using the `Delete` button |
| Manage category permissions _(EE only)_ | User has access to the `Permissions` tab on a category |

### Permissions on channels

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create a channel     | User can create a new channel with the `Create channel` button in the `Settings`/`Channels` |
| Edit a channel       | User can edit a channel’s information |
| View channel history | User can access the `History` tab of channels. |
| List channels | User can see and access all channels listed under `Settings`/`Channels` |
| Remove a channel | User can remove a channel group on the channel’s page through the `Delete` button  |

### Permissions on currencies

| Permission name | Effect on the interface |
|---------------------------|--------------|
| List Currency     | User can see all (active and inactive) currencies listed under `Settings`/`Currencies`            |
| Toggle currencies | User can activate/deactivate currencies using the toggle button on the right side of the grid |

### Permissions on families

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create a family             | User can create a new family with the `Create family` button in the `Setting`/`Families` |
| Edit attributes of a family | User can edit the attributes of a family, in the `Attributes` tab                           |
| Edit properties of a family | User can edit the properties of a family, in the `Properties` tab                            |
| View family history | User can access the `History` tab of families |
| List families               | User can see and access all families listed under the `Settings`/`Families`            |
| Remove a family             | User can remove a family on the family’s page through the `Delete` button       |

### Permissions on groups

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create a group     | User can create a new group with the `Create group` button in the `Settings`/`Groups` |
| Edit a group       | User can edit the group’s properties |
| View group history | User can access the `History` tab of groups |
| List of groups     | User can see and access all groups listed under the `Settings`/`Groups` menu entry |
| Remove a group     | User can remove a group on the group’s page through the `Delete` button   |

### Permissions on group types

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create a group type | User can create a new group type with the `Create group types` button in `Settings`/`Group types` |
| Edit a group type   | User can edit the group type’s properties   |
| List group types    | User can see the group types in `Settings`/`Group types` |
| Remove a group type | User can remove a group type on the group type’s page through the `Delete` button       |

### Permissions on locales

| Permission name | Effect on the interface |
|---------------------------|--------------|
| List locales      | User can see the locales in `Settings`/`Locales` |
| Manage locale permissions _(EE only)_ | User can manager locales permissions for users under the `Permissions` tab in the locale’s page |

### Permissions on products

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Add an attribute to a product                  | User can add attributes to a product using the `Add Attributes` button in the product form   |
| Add product to groups                          | User can add products to group, in `Settings`/`Groups` he will see the `Products` tab               |
| View the association types of a product        | User can see the `Associations` menu entry in the product form                                  |
| Consult the categories of a product            | User can see the `Categories` menu entry in the product form                                    |
| Change product Family                          | User can change the product’s family in the panel on the left of the product form      |
| Change state of product     | User can change the status of the product: `enable` or `disable` directly in the panel on the left of the product form  |
| Comment products | User can see the `Comments` menu entry in the product form |
| Create a product                               | User can create a new product in the product grid through the `Create product` button             |
| Download the product as PDF                | User will be able to generate a PDF file containing all the product information using the `PDF` button in the `...` dropdown on the top of the product form |
| Edit attributes of a product                   | User can edit the product’s attributes under the `Attributes` menu entry of the product form   |
| View product history | User can see the `History` menu entry in the product form  |
| List products                                  | User can see the list of products in several pages: on the product grid in `Products`, as well as on the `Associations` menu entry of the product form, in `Groups`... |
| Product mass edit actions | User can make mass actions on the product grid |
| Remove a product           | User can remove a product from the PIM using the `Delete` button in the `...` dropdown on the top of the product form      |
| Remove an attribute from a product             | User can remove an attribute from a product using the `cross` icon next to attributes added to the product                                                                  |
| List asset categories in the asset picker _(EE only)_ | User can access the `Manage assets` button to open the asset picker and list the asset categories  |
| Restore a product _(EE only)_ | User can restore a previous version of a product using the `Restore` button in the product history page  |
| Manage published products _(EE only)_   | User can access the published products grid by clicking on the `Published products` button  in the `...` dropdown on the top of the product grid |

### Permissions on assets _(EE only)_

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Consult the categories of an asset | User can see the asset categories, under the `Categories` tab of the asset form                    |
| Create an asset      | User can create a new asset, using the `Create an asset` button in `Assets` |
| Enrich asset      | User can access the asset form             |
| Mass-upload assets | User can mass upload assets in `Assets` by clicking on the `Upload assets` of the `...` dropdown |
| Remove asset                       | User can delete an asset using the `Delete` button in the asset edition page and also access the bulk actions to mass delete assets |

### Permissions on asset categories _(EE only)_

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Create an asset category       | User can create a new asset category with a right click on the tree and select `Create a new category` in `Settings`/`Asset categories` |
| Edit an asset category            | User can edit an asset category     |
| View asset category history       | User can access the `History` tab of asset categories        |
| List asset categories        | User can see and access all asset categories and asset category trees listed under `Settings`/`Asset categories`     |
| Manage asset category permissions | User has access to the `Permissions` tab on the asset category form     |
| Remove an asset category          | User can remove an asset category using the `Delete` button                                                  |

### Permissions on rules _(EE only)_

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Delete rules                                  | User can delete rules in `Settings`/`Rules`, using the trash icon or the mass delete action       |
| Execute rules | User can run rules in `Settings`/`Rules`, using the run icon, the top button `Execute Rules` or the mass action `Execute the selected rules` |
| Calculate the affected products for the rules | User can run the bulk action `Calculate the affected products` to see how many products are impacted by a rule                        |
| View rules  | User can view the active rules in `Settings`/`Rules`         |

### Permissions on export profiles

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Download exported files | User can download a generated export file in the export profile execution page using the `Download generated file` button |
| Download export report log    | User can download the log of the exported file using the `Download log` button in the `...` dropdown on the top of the export profile execution page |
| View export reports list                  | User can access the list of exported files in the `Last operations` section in an export profile   |
| View export report log details            | User can click on the `Eye` icon to check the report details, in the `Last operations` section in an export profile  |
| Edit an export profile content            | User can customise the content of a product export profile. On an export profile, he can click on the `Edit` button and go under the `Content` tab                              |
| Show an export profile content            | User can see the content of a product export profile. On a export profile, he can click on the `Content` tab      |
| Create an export profile                  | User can create a new export profile in `Exports` using the `Create export profile` button   |
| Edit an export profile      | User can edit an export profile. On an export profile, he can see the `Edit` button and a shortcut the export profile line |
| View export profile history               | User can access the `History` tab of an export profile                             |
| View export profiles list                 | User can access the menu `Exports` to see the list of export profiles    |
| Launch an export profile                  | User can run an export using the `Export now` button in an export profile page   |
| Edit an export profile general properties | User can edit the general properties of an export profile. After selecting a specific export job, he will see the `Edit` button and a shortcut the export profile line |
| Show an export profile general properties | User can view the general properties of an export profile. After selecting a specific export job, he will be able to access the `General properties` tab of the export |
| Remove an export profile                  | User can remove an export profile using the `Delete` button in the `...` dropdown, when editing the export profile form     |
| Show an export profile     | User can view information of an export profile |
| Manage export profile permissions _(EE only)_       | User can access and edit the permissions to run and edit the job profile. He will see the `Permissions` tab in the edit page of an export profile |

### Permissions on import profiles

| Permission name | Effect on the interface |
|---------------------------|--------------|
| Download imported files | User can download the imported file in the import profile execution page using the `Download read files` button  |
| Download import report log | User can download the log of the imported file in the import profile execution page using `Download log` button in the `...` dropdown  |
| View import reports list           | User can access the list of imported files in the `Last operations` section in an import profile                |
| View import reports details        | User can click on the `Eye` icon to check the report details, in the `Last operations` section in an import profile  |
| Create an import profile           | User can create a new import profile in `Import` using the `Create import profile` button. |
| Edit an import profile      | User can edit an import profile. On an import profile, he can see the `Edit` button and a shortcut the import profile line |
| View import profile history        | User can access the `History` tab of an import profile        |
| View import profiles list          | User can access the menu `Imports` to see the list of import profiles    |
| Launch an import profile   | User can launch an import using the `Import now` and `Upload and Import now` buttons in the import profile page   |
| Remove an import profile           | User can remove an import profile using the `Delete` button in the import profile form      |
| Show an import profile | User can view information of an import profile   |
| Manage import profiles permissions _(EE only)_ | User can access and edit the permissions to run and edit the job profile. He will see the `Permissions` tab in the edit page of an import profile |

### Permissions on system pages

| Permission name | Effect on the interface |
|---------------------------|--------------|
| System configuration | User can access `System`/`Configuration`    |
| Create a user group  | User can create a new user group in the PIM. He can click on `System`/`Groups` and then use the `Create group` button to add a new user group |
| Remove a user group  | User can remove a user group from the PIM using the `Delete` button in the `...` dropdown in the user group page   |
| Edit user groups     | User can edit the user groups, he will see the `Save` button in the edition page of user groups  |
| List user groups     | User will see the list of user groups in `System`/`Groups`         |
| Create a role  | User can create a new role in the PIM. He can click on `System`/`Roles` and then use the `Create role` button to add a new role      |
| Remove a role        | User can remove a role from the PIM using the `Delete` button in the `...` dropdown in the role page            |
| Edit a role          | User can edit the roles, he will see the `Save` button in the edition page of roles                                         |
| List roles           | User will see the list of roles in `System`/`Roles` |
| Create a user        | User can create a new user in the PIM. He can click on `System`/`Users` and then use the `Create user` button to add a new user   |
| Remove a user        | User can remove a user from the PIM using the `Delete` button in the user page     |
| Edit users           | User can edit users, he will see the `Save` button in the edition page of users|
| List users           | User will see the list of users in `System`/`Users` |
| System information   | User will see the `System Information` menu entry under `System`. He will be able to download this information using the `TXT` button                     |
| Manage the API connections | User can access the page `System`/`API connections`  |
| View process tracker | User can access the page `System`/`Process tracker`  |

## Set permissions on the Web API

Permissions on the [Web API](https://api.akeneo.com) are also granted according to th user’s role(s). The following table lists all the rights and the features that are attached to it.

### Overall access
First, there is a permission that grants access to the overall Web API. It is called `Overall Web API`.

If it is turned on for a given role, it will give an overall access to the API to the users that have this role. Meaning these users would be able to call any endpoints in the API.

If it is turned off, the users that have this role won't be able to make calls to the API endpoints.

### Access by endpoints
The following tables sum up the permissions you will find to restrict the access to the API, endpoint by endpoint.

| Channel endpoints  |                                        |
|:--------------|:------------------------------------------------|
| List channels | Gives permission to GET on the channel endpoint |
| Create and update channels | Gives permission to POST and PATCH on the channel endpoint |

| Locale endpoints |                                                |
|:-------------|:-----------------------------------------------|
| List locales | Gives permission to GET on the locale endpoint |

| Currency endpoints |                                                |
|:-------------|:-----------------------------------------------|
| List currencies | Gives permission to GET on the currency endpoint |

| Family endpoints |                                       |
|:------------------------|:--------------------------------------|
| List families              | Gives permission to GET on the family endpoint |
| Create and update families | Gives permission to POST and PATCH on the family endpoint |

| Attribute endpoints |                                       |
|:------------------------|:--------------------------------------|
| List attributes      | Gives permission to GET on the attribute endpoint |
| Create and update attributes | Gives permission to POST and PATCH on the attribute endpoint |

| Attribute option endpoints |                                       |
|:------------------------|:--------------------------------------|
| List attribute options  | Gives permission to GET on the attribute options endpoint  |
| Create and update attribute options | Gives permission to POST and PATCH on the attribute options endpoint |

| Attribute group endpoints |                                       |
|:------------------------|:--------------------------------------|
| List attribute groups  | Gives permission to GET on the attribute groups endpoint  |
| Create and update attribute groups | Gives permission to POST and PATCH on the attribute groups endpoint |

| Category endpoints |                                       |
|:------------------------|:--------------------------------------|
| List categories    | Gives permission to GET on the category endpoint   |
| Create and update categories | Gives permission to POST and PATCH on the category endpoint |

| Association type endpoints |                                       |
|:------------------------|:--------------------------------------|
| List association types    | Gives permission to GET on the association type endpoint   |
| Create and update association types | Gives permission to POST and PATCH on the association type endpoint |

For more details about these permissions, have a look to our [dedicated section](https://api.akeneo.com/documentation.html#authorization) in the API documentation.

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
1.  Log in with a user account having rights to edit a role
1.  Go to `System`/`Roles`
1.  Click on the role to edit and go under the `Users` tab
![image](../img/dummy.png)
1.  The list of users is displayed. Users currently belonging to the role can be easily identified by the check box in the first column `Has role`
1.  Look for the users and check boxes to add users to the role. And the other way around, uncheck the boxes for users to be removed from the role
1.  Click on the `Save` button to update the role

The rights which have been granted to or removed from users are automatically applied. Changes on rights will be updated on the next PIM page’s loading.

::: info
One user can have several roles. In this case, permissions are cumulative: the rights the most permissive are applied.
:::

# Delete a role

Before deleting a role, you should check if this role is currently assigned to some users.

To delete a role:
1.  Log in with a user account having rights to edit a role
1.  Go to `System`/`Roles`
1.  You have two ways to proceed:
    - Click on the role to remove, then click on the `...` button in the top right corner, then select `Delete`
    - Or click on the `Delete` trash icon directly from the roles grid
1.  Then confirm the deletion of the role

::: warning
Please check first the potential impact of the removal of a role on which users have been associated to. For instance, if the role job was the only way for the user to have a specific right, then due to the role deletion, the user will have no longer his access right in the PIM.
:::
