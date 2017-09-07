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
1.  Log in with a user account having the rights to create a role (System: Create a role)
1.  Go to System/Users Management/Roles,
1.  Click on “Create role” button, fill in the form and give a name to the role,
![image](../img/dummy.png)
1.  Click on “Save” to add the new role,
1.  Then select the permissions for the role. The different permissions are detailed in the sections below.

## Set permissions on actions

Permissions on actions are granted according to the user’s role(s). The following table lists all the rights and the features that are attached to it.

In the following tables, you will see on the left side the permission’s name and on the right side its description.

| Permissions on association types | |
|---------------------------|--------------|
| Create an association type    | Gives access to “Create association type” button in Settings/Association types                                                                     |
| Edit an association type      | User is able to edit the association types under Settings/Association types                                                                        |
| View association type history | User can access the «History» tab of a specific association. He must also have the permission to «edit an association type».                       |
| List association types        | User can see and access the «Settings/Association types» menu.                                                                                     |
| Remove an association type    | User can delete an association type from the association type form. Under «Settings/Association types», select an association and click on Delete. |


| Permissions on attributes | |
|---------------------------|--------------|
| Create an attribute | In Settings/Attributes, the user can click on “Create a attribute” button.                                  |
| Edit an attribute   | User can edit the attribute’s properties.    |
| View attribute history | User can see the attribute’s history.    |
| List attributes   | User can see and access all attributes listed under Settings/Attributes.                                                      |
| Remove an attribute  | User can remove an attribute on the Attribute page through the «Delete» button  |
| Sort attributes inside attribute groups | User can sort attributes by dragging and droping them, under Settings/Attribute Groups, Attributes tab of an attribute group |


| Permissions on attribute groups | |
|---------------------------|--------------|
| Add attribute to a group | User can access the “Add attributes” button under the “Attributes” tab in Settings/Attribute groups.  |
| Create an attribute group | User can access the “Create attribute group” black cross icon (on the top of attribute groups names) in Settings/Attribute groups. |
| Edit an attribute group | User can edit an attribute group.   |
| View attribute group history | User can access the “History” tab of attribute groups.|
| List attribute groups | User can see and access all attribute groups listed under Settings/Attribute Groups. |
| Remove an attribute group | User can remove an attribute group on the Attribute page through the «Delete» button. |
| Remove an attribute from a group | User can remove an attribute from the attribute group, by clicking on the trash icon. |
| Sort attribute groups | User can sort attribute groups by dragging and droping them up and down. |
| Manage attribute group permissions (EE) | User can access to the “Permissions” tab on the attribute group and set permissions on them. |


| Permissions on categories | |
|---------------------------|--------------|
| Create a category                | User can create a new category with a right click on the tree and select “Create” in Enrich/Categories. |
| Edit a category                  | User can edit a category. |
| View category history | User can access the “History” tab of categories. |
| List categories | User can see and access all categories and category trees listed under Enrich/Categories. |
| Remove a category | User can remove a category using the «Delete» button. |
| Manage category permissions (EE) | User has access to the “Permissions” tab on a category. |

| Permissions on channels | |
|---------------------------|--------------|
| Create a channel     | User can create a new channel with the “Create channel” button in the Setting/Channels. |
| Edit a channel       | User can edit a channel’s information. |
| View channel history | User can access the “History” tab of channels. |
| List channels | User can see and access all channels listed under Settings/Channels. |
| Remove a channel | User can remove a channel group on the Channel’s page through the «Delete» button.  |

| Permissions on currencies | |
|---------------------------|--------------|
| List Currency     | User can see all (active and inactive) currencies listed under Settings/Currencies.            |
| Toggle currencies | User can activate/deactivate currencies using the toggle button on the right side of the page. |

| Permissions on families | |
|---------------------------|--------------|
| Create a family             | User can create a new family with the “Create family” button in the Setting/Families. |
| Edit attributes of a family | User can edit the attributes of a family, Attributes tab.                             |
| Edit properties of a family | User can edit the properties of a family, Properties tab.                             |
| View family history | User can access the “History” tab of families. |
| List families               | User can see and access all families listed under Settings/Families.              |
| Remove a family             | User can remove a family on the family’s page through the «Delete» button.        |

| Permissions on groups | |
|---------------------------|--------------|
| Create a group     | User can create a new group with the “Create group” button in the Enrich/Groups. |
| Edit a group       | User can edit the group’s properties. |
| View group history | User can access the “History” tab of groups. |
| List of groups     | User can see and access all groups listed under Enrich/Groups.               |
| Remove a group     | User can remove a group on the group’s page through the «Delete» button.     |

| Permissions on group types | |
|---------------------------|--------------|
| Create a group type | User can create a new group type with the “Create group type” button in Settings/Group types. |
| Edit a group type   | User can edit the group type’s properties.   |
| List group types    | User can see the group types in Settings/Group types. |
| Remove a group type | User can remove a group type on the group type’s page through the «Delete» button.        |

| Permissions on locales | |
|---------------------------|--------------|
| List locales      | User can see the locales in Settings/Locales |
| Manage locale permissions (EE) | User can manager locales permissions for users under the “Permissions” tab in the locale’s page. |

| Permissions on products | |
|---------------------------|--------------|
| Add an attribute to a product                  | User can add attributes to a product using the “Add Attributes” button in the product edit form.    |
| Add product to groups                          | User can add products to group, in Enrich/Groups he will see the tab “Products”.                    |
| Add product to a variant group                 | User can add products to a variant group, in Enrich/Variant groups he will see the tab “Products”.  |
| View the association types of a product        | User can see the “Associations” tab in the product edit form.                                  |
| Consult the categories of a product            | User can see the “Categories” tab in the product edit form.                                    |
| Change product Family                          | User can change the product’s family in the product header by clicking on the link “Family”.      |
| Change state of product                        | User can change the status of the product: “enable” or “disable” directly in the header of the product.  |
| Comment products                               | User can see the “Comments” tab in the product’s edit form.                                              |
| Create a product                               | User can create a new product in the Product’s grid through “Create product” button.                |
| Download the product as PDF                    | User will be able to generate a PDF file containing all the product’s information using the “PDF” button on the top of the product edit form. |
| Edit attributes of a product                   | User can edit the product’s attributes under the “Attributes” tab of the product edit form.   |
| View product history                           | User can see the “History” tab in the product edit form.                                       |
| List products                                  | User can see the list of products in several pages: on the product’s grid in Enrich/Products, as well as on the “Associations” tab of the product, in Groups... |
| Product mass edit actions | User can make mass actions on the product’s grid. |
| Remove a product                               | User can remove a product from the PIM using the “Delete” button in the product edit form.      |
| Remove an attribute from a product             | User can remove an attribute from a product using the “cross” icon next to attributes added to the product.                                                                  |
| List asset categories in the asset picker (EE) | User can access the “Manage assets” button to open the asset picker and list the asset categories.        |
| Restore a product (EE)                         | User can restore a previous version of a product using the “restore” button in the product’s history page.  |
| Manage published products (EE)                 | User can access the published products grid in Enrich/Published Products.                         |

| Permissions on assets (Enterprise Edition only) | |
|---------------------------|--------------|
| Consult the categories of an asset | User can see the asset categories, under the “Categories” tab of the asset edit form.                     |
| Create an asset                    | User can create a new asset, using the “Create Asset” button in Enrich/ |
| Enrich asset      | User can access the asset edition page.             |
| Mass-upload assets | User can mass upload assets in Collect/Upload assets. |
| Remove asset                       | User can delete an asset using the “Delete” button in the asset edition page and also access the bulk actions   to mass delete assets. |

| Permissions on asset categories (Enterprise Edition only) | |
|---------------------------|--------------|
| Create an asset category       | User can create a new asset category with a right click on the tree and select “Create” in Enrich/Asset categories. |
| Edit an asset category            | User can edit an asset category.     |
| View asset category history       | User can access the “History” tab of asset categories.        |
| List asset categories             | User can see and access all asset categories and asset category trees listed under Enrich/Asset categories.     |
| Manage asset category permissions | User has access to the “Permissions” tab on the asset category form.                                                |
| Remove an asset category          | User can remove an asset category using the «Delete» button.                                                    |

| Permissions on rules (Enterprise Edition only) | |
|---------------------------|--------------|
| Delete rules                                  | User can delete rules in Settings/Rules, using the trash icon or the mass delete action.        |
| Execute rules                                 | User can run rules in Settings/Rules, using the run icon, the top button “Execute Rules” or the mass action “Execute the selected rules”. |
| Calculate the affected products for the rules | User can run the bulk action “Calculate the affected products” to see how many products are impacted by a rule.                           |
| View rules  | User can view the active rules in Settings/Rules.         |

| Permissions on export profiles | |
|---------------------------|--------------|
| Download exported files                   | User can download a generated export file in the export profile execution page using “Download generated file“ button.                                              |
| Download export report log                | User can download the log of the exported file in the export profile execution page using “Download log“ button.                                                    |
| View export reports list                  | User can access the list of exported files in Spread/Exports history.                      |
| View export report log details            | On the list of exports history, user can access the “Show“ icon to check the report’s details.   |
| Edit an export profile content            | User can customise the content of a product export profile. On the export profile, click on ”Edit” button and go under the ”Content” tab.                               |
| Show an export profile content            | User can see the content of a product export profile. On the export profile, click on ”Content” tab.      |
| Create an export profile                  | User can create a new export profile in Spread/Export profiles using the “Create export profile” button.   |
| Edit an export profile                    | User can edit an export profile. After selecting a specific export job, he will see the “Edit” button and a shortcut the export profile line.                           |
| View export profile history               | User can access the “History” tab of an export profile.                             |
| View export profiles list                 | User can access the menu Spread/Export profiles to see the list of export profiles.      |
| Launch an export profile                  | User can run an export using the “Export now” button in the export profile’s page.   |
| Edit an export profile general properties | User can edit the general properties of an export profile. After selecting a specific export job, he will see the “Edit” button and a shortcut the export profile line. |
| Show an export profile general properties | User can view the general properties of an export profile. After selecting a specific export job, he will be able to access the “General properties” tab of the export. |
| Remove an export profile                  | User can remove an export profile using the “Delete” button in the export profile edit form.     |
| Show an export profile                    | User can view information of an export profile.                                          |
| Manage export profile permissions         | User can access and edit the permissions to run and edit the job profile. He will see the “Permissions” tab in the edit page of an export profile.                      |

| Permissions on import profiles | |
|---------------------------|--------------|
| Download imported files | User can download the imported file in the import profile execution page using the “Download read file“ button.  |
| Download import report log | User can download the log of the imported file in the import profile execution page using “Download log“ button.  |
| View import reports list           | User can access the list of imported files in Collect/Imports history.                                       |
| View import reports details        | On the list of importd history, user can access the “Show“ icon to check the report’s details. |
| Create an import profile           | User can create a new import profile in Collect/Import profiles using the “Create import profile” button. |
| Edit an import profile             | User can edit an import profile. After selecting a specific import job, he will see the “Edit” button and a shortcut the import profile line.      |
| View import profile history        | User can access the “History” tab of an import profile.           |
| View import profiles list          | User can access the menu Collect/Import profiles to see the list of import profiles.      |
| Launch an import profile   | User can launch an import using the “Import now” and “Upload and Import now” buttons in the import profile’s page.   |
| Remove an import profile           | User can remove an import profile using the “Delete” button in the import profile edit form.      |
| Show an import profile | User can view information of an import profile.   |
| Manage import profiles permissions | User can access and edit the permissions to run and edit the job profile. He will see the “Permissions” tab in the edit page of an import profile. |

| Permissions on system | |
|---------------------------|--------------|
| System configuration | User can access System/Configuration page.    |
| Create a user group  | User can create a new user group in the PIM. He can click on System/Users management/Groups and then use the “Create group” button to add a new user group. |
| Remove a user group  | User can remove a user group from the PIM using the “Delete” button in the user group edition page.   |
| Edit user groups     | User can edit the user groups, he will see the “Save” button in the edition page of user groups.  |
| List user groups     | User will see the list of the user groups in System/Users management/Groups.         |
| Create a role        | User can create a new role in the PIM. He can click on System/Users management/Roles and then use the “Create role” button to add a new role.               |
| Remove a role        | User can remove a role from the PIM using the “Delete” button in the role edition page.             |
| Edit a role          | User can edit the roles, he will see the “Save” button in the edition page of roles.                                          |
| List roles           | User will see the list of roles in System/Users management/Roles                                                         |
| Create a user        | User can create a new user in the PIM. He can click on System/Users management/Users and then use the “Create user” button to add a new user.               |
| Remove a user        | User can remove a user from the PIM using the “Delete” button in User edition page.       |
| Edit users           | User can edit users, he will see the “Save” button in the edition page of users.      |
| List users           | User will see the list of users in System/Users management/Users.                            |
| System information   | User will see the System Information of the PIM installation and will be able to download this information using the “TXT” button.                              |
| Manage the API connections | User can access the page System/API connections  |
| View process tracker | User can access the page System/Process tracker.  |

## Set permissions on the Web API

Permissions on the [Web API](https://api.akeneo.com) are also granted according to th user’s role(s). The following table lists all the rights and the features that are attached to it.

### Overall access
First, there is a permission that grants access to the overall Web API. It is called "Overall Web API".

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
1.  Log in with a user account having rights to edit a role (System: Edit Role).
1.  Go to System/Users Management/Roles.
1.  Click on the role you want to modify.
1.  Change its name.
1.  Click on “Save” to update the role.

::: info
A role’s name cannot be longer than 25 characters.
:::

# Assign a role to a user

When you've set your roles, your can assign them to your users. This way, it will allows them to have access rights in the PIM.

To change the membership of a user:
1.  Log in with a user account having rights to edit a role (System: Edit Role).
1.  Go to System/Users Management/Roles.
1.  Click on the role to edit and go under the “Users” tab
![image](../img/dummy.png)
1.  The list of users is displayed. Users currently belonging to the role can be easily identified by the check box in the first column “has role”.
1.  Look for the users and check boxes to add users to the role. And the other way around, uncheck the boxes for users to be removed from the role.
1.  Click on “Save” button to update the role.

The rights which have been granted to or removed from users are automatically applied. Changes on rights will be updated on the next PIM page’s loading.

::: info
One user can have several roles. In this case, permissions are cumulative: the rights the most permissive are applied.
:::

# Delete a role

Before deleting a role, you should check if this role is currently assigned to some users.

To delete a role:
1.  Log in with a user account having rights to edit a role (System: Remove a role).
1.  Go to System/Users Management/Roles.
1.  You have two ways to proceed:
    - Click on the role to remove and click on the “Delete” button on the top right corner.
    - Or click on the “Delete” trash icon directly from the grid dragging the mouse on the role you want to delete.
1.  Then confirm the suppression of the role.

::: warning
Please check first the potential impact of the removal of a role on which users have been associated to. For instance, if the role job was the only way for the user to have a specific right, then due to the role suppression, the user will have no longer his access right in the PIM.
:::
