# Introduction

In this guide, you will learn how to:

*   Define the user role in order to configure the user permissions in the PIM,
*   Define the scope of responsibility and level of access to the products for user groups, according to local and categories (Enterprise Edition feature),
*   Define the level of access to groups of attributes for user groups,
*   Define the level of access to import and export profiles for user groups (Enterprise Edition feature).

# Main concepts

### A user

A user is an account access to log into the PIM, it can be used by one or several persons in a company. A user has at least one login, one password, one email and a role.

### A role

A role is a set of permissions in the PIM. A role may be assigned to one or several users.

### A permission

A permission is a right to see menus, edit products or execute a job for instance. Permissions are cumulative: the rights the most permissive are applied.  
You have two kind of permissions in the PIM: the role’s permissions for both versions (Community and Enterprise) and the advanced permissions that are only available for Enterprise Edition clients, that allow you to define specific rights on locales, attribute groups and categories.  

### A user group

A user group is a set of users grouped by a name. A user may be a part of several user groups. For example, the user group “Marketing Dpt” gathers all the users in the Marketing Department of the company. The user group “Managers” gathers all the users who are manager of a department. Some users can be in the “Marketing Dpt” only.

Advanced permissions can be applied on user groups in the Enterprise Edition. In the Community Edition, there is no permission applied on user groups.

# Manage interface & users

## Set the default PIM language

Most user interfaces in the PIM are translated. For more information about how we manage translations, please refer to the end of this guide section «<a href="">How to participate to Akeneo PIM tr</a>anslation?». You can set a default language for the interface, that will be used for all new users.

> **Note**  
  that each user can configure the interface in its own language. For instance your German team can have the PIM interface in German, whereas the US team will have the PIM in American English - this can be set in their user account (refer to the end-user guide (Manage your user account).

### Choose the default language

1.  Log in with a user account with the rights to “System” menu.
1.  Go to System/Configuration  
    ![image](../img/Akn_dashboard.jpg)
1.  Select the default language from the drop down menu.  
    ![image](../img/Akn_dashboard.jpg)
1.  Click on “Save” to apply your settings

All users in the PIM can see the firstname and lastname of other users in the application.

The user management and their access rights is available only if the rights have been given to the user.

Any PIM user can see his own account details, update his/her password, and set his/her preferences (eg working environment for local and channel).

## Manage users

### View the list of users

1.  Log in with a user account with the rights to “List of user groups”.
1.  Go to System/User Management/Users.  
![image](../img/Akn_dashboard.jpg)
1.  To narrow the list of users displayed, use the filters above the users grid.  
![image](../img/Akn_dashboard.jpg)
1.  To view information of a specific user, click on the user.

### Add a user

1.  Go on System/Users Management/Users
1.  Then click on “Create User” button on the top right corner
1.  Fill out the General information required (red asterisk),
1.  Then go on Additional to define the user default settins, this can be later changed if needed,
1.  Define a user role under the Groups and Roles tab,
1.  You can also define the default language for this user (Interfaces tab),
1.  Then click on “Save”.

The user account has been created.


> **Note**  
  An email is not automatically sent to the new user. It depends on the initial configuration of the PIM. Hence you will need to provide the login and password to the user manually.

### Assign a user to a user group

When a user is created, this latter can be added to at least one of the groups that have been created in the PIM.


> **Note (Enterprise Edition only)**  
  Assigning a user to one group or several groups allows him/her to have permissions on the catalog (EE Rights).


#### To move the user to another group:

1. Go to System/Users Management/Users,
1. Click on the user to proceed,
1. Click on the “Edit user” button,
1. Click on the “Groups and Roles” tab from the menu  
![image](../img/Akn_dashboard.jpg)
1.  Check / uncheck the groups to add or remove the user from these groups,
1.  Click “Save”.

### Assign a role to a user

Assign a role to a user allows him to have access rights in the PIM.

#### To change the membership of a user:

1.  Go to System/Users Management/Users
1.  Click on the user to proceed,
1.  Click on the “Edit user” button,
1.  Click on the “Groups and Roles” tab from the menu,  
![image](../img/Akn_dashboard.jpg)
1.  Check / uncheck the user to assign role,
1.  Click “Save”.

### Change the user general information

1.  Go to System/Users Management/Users,
1.  Click on the user to proceed,
1.  Click on the “General” tab,
1.  Make the desired changes and click on the “Save” button.

### Delete a user

1.  Go to System/Users Management/UsersClick the user to proceed,
1.  Click on the right on the “Delete” button,
![image](../img/Akn_dashboard.jpg)
1.  Then confirm you want to delete the user.

The user can no longer connect to the PIM application. Though the user actions generated in the PIM will be stored.

# Manage user groups

A user group in Akeneo PIM is a way to manage sets of users. Users can belong to multiple groups. Groups are used in the PIM to define the access rights and the visibility to the product catalog.


> **Note**  
  Roles are similar to groups, they also enable and define rights on the product catalog. The main difference is that the roles entitle rights on what the user is allowed to do in the PIM (to sum up, access to all the existing buttons and menus in the PIM).


## View the user groups list

**To see which groups have been created:**

1.  Log in with a user account witch has the rights to see the groups (system: List of user).
1.  Go to System/Users Management/Groups  
![image](../img/Akn_dashboard.jpg)
1.  To see the details of a user group, click on a line in the group to view the information available.

## Create a user group

**To create a group**

1.  Log in with a user account with the rights to create a group (system: Create a group of users).
1.  Go to System/Users Management/Groups
1.  Click on “Create group” button to generate a new user group.  
![image](../img/Akn_dashboard.jpg)
1.  Fill the form to name the group.
1.  Then click on the “Save” button to update groups.

## Edit the name of a user group

**To edit the name of a user group:**

1.  Log in with a user account with the rights to edit a group (system: Change a user group).
1.  Go to System/Users Management/Groups
1.  Click on the group name to be modified.  
![image](../img/Akn_dashboard.jpg)
1.  Change the name of the group.
1.  Then click on the “Save” button to update the user group.  

## Edit users of a user group

## To edit the users associated to a group:

1.  Log in with a user account with the rights to edit a group (system: Editing user groups).
1.  Go to System/Users Management/Groups
1.  Click on the user group to be modified.  

  ![image](../img/Akn_dashboard.jpg)

1.  A grid of users is displayed with the users belonging to the respective group. They can be easily identified by the check box in the first column “has group”.
1.  Look for the users and check the box to add the users to the group. And the other way around, uncheck the box to withdraw the users from the group.
1.  Then click on the “Save” button to update the group.  

The rights which have been granted to or removed from users (added to or removed from the user group) are automatically applied. The user can still continue to be connected to the PIM: the change on rights will be updated on the next loading of a page in the PIM.

## Delete a group of users

Before deleting a group, you should check first if the specific group is used to entitle access rights to other users.

**To delete a user group:**

1.  Log in with a user account with the rights to edit a group (permission System > Remove a user group).
1.  Go to System/Users Management/Groups
1.  You have two ways to proceed:
    *   Click on the user group to be deleted and click on the “delete” button on the top right.
    *   Click on the “delete” button straight away from the grid dragging the mouse on the group you want to delete.
1.  Then confirm the message for the suppression of the group.  
![image](../img/Akn_dashboard.jpg)
Please check first the potential impact of the removal of a group on which users are included. For instance, if the group membership was the only way for a user to have a specific right, then due to the group suppression, the user will have no longer his access right in the PIM.

# Configure rights

## Set permissions on actions

Permissions on actions are granted according to the user’s role(s). The following table lists all the rights and the features that are attached to it.

In the following tabs, you will see on the left side the permission’s name and on the right side its description.

## Permissions on association types

|                               |                                                                                                                                                    |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Create an association type    | Gives access to “Create association type” button in Settings/Association types                                                                     |
| Edit an association type      | User is able to edit the association types under Settings/Association types                                                                        |
| View association type history | User can access the «History» tab of a specific association. He must also have the permission to «edit an association type».                       |
| List association types        | User can see and access the «Settings/Association types» menu.                                                                                     |
| Remove an association type    | User can delete an association type from the association type form. Under «Settings/Association types», select an association and click on Delete. |


## Permissions on attributes

|                                         |                                                                                                                                   |
|:----------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| Create an attribute                     | In Settings/Attributes, the user can click on “Create a attribute” button.                                                        |
| Edit an attribute                       | The user can edit the attribute’s properties.                                                                                     |
| View attribute history                  | The user can see the attribute’s history.                                                                                         |
| List attributes                         | The user can see and access all attributes listed under Settings/Attributes.                                                      |
| Remove an attribute                     | The user can remove an attribute on the Attribute page through the «Delete» button                                                |
| Sort attributes inside attribute groups | Under Settings/Attribute Groups, Attributes tab of an attribute group, the user can sort attributes by dragging and droping them. |


## Permissions on attribute groups

|                                         |                                                                                                                                    |
|:----------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| Add attribute to a group                | User can access the “Add attributes” button under the “Attributes” tab in Settings/Attribute groups.                               |
| Create an attribute group               | User can access the “Create attribute group” black cross icon (on the top of attribute groups names) in Settings/Attribute groups. |
| Edit an attribute group                 | User can edit an attribute group.                                                                                                  |
| View attribute group history            | User can access the “History” tab of attribute groups.                                                                             |
| List attribute groups                   | The user can see and access all attribute groups listed under Settings/Attribute Groups.                                           |
| Remove an attribute group               | The user can remove an attribute group on the Attribute page through the «Delete» button.                                          |
| Remove an attribute from a group        | The user can remove an attribute from the attribute group, by clicking on the trash icon.                                          |
| Sort attribute groups                   | User can sort attribute groups by dragging and droping them up and down.                                                           |
| Manage attribute group permissions (EE) | User can access to the “Permissions” tab on the attribute group and set permissions on them.                                       |


## Permissions on categories

|  |  |
|:-|:-|
|  |  |

## Permissions on channels

|  |  |
|:-|:-|
|  |  |

## Permissions on currencies

|  |  |
|:-|:-|
|  |  |

## Permissions on families

|  |  |
|:-|:-|
|  |  |

## Permissions on groups

|  |  |
|:-|:-|
|  |  |

## Permissions on variant groups

|  |  |
|:-|:-|
|  |  |

## Permissions on group types

|  |  |
|:-|:-|
|  |  |

## Permissions on locales

|  |  |
|:-|:-|
|  |  |

## Permissions on products

|  |  |
|:-|:-|
|  |  |

## Permissions on assets (Enterprise Edition only)

|  |  |
|:-|:-|
|  |  |

## Permissions on asset categories (Enterprise Edition only)

|  |  |
|:-|:-|
|  |  |

## Permissions on rules (Enterprise Edition only)

|  |  |
|:-|:-|
|  |  |

## Permissions on export profiles

|  |  |
|:-|:-|
|  |  |

## Permissions on import profiles

|  |  |
|:-|:-|
|  |  |

## Permissions on system

|  |  |
|:-|:-|
|  |  |

## Set permissions on the Web API

Permissions on the Web API are granted according to the user’s role(s). The following table lists all the rights and the features that are attached to it.

|  |  |
|:-|:-|
|  |  |

For more details about these permissions, have a look to our [API documentation](https://api.akeneo.com/documentation.html#authorization).

## Configure roles

A role in Akeneo PIM is a way to manage a set of users. Users can be part of a multiple roles. Roles are used to define actions and view rights.

### See the roles

**To view the roles:**

1.  Log in with a user account having the rights to see the roles (System: List roles).
1.  Go to System/Users Management/Roles.
1.  To view the settings of a role, click on it:

    ![image](../img/Akn_dashboard.jpg)

    A page will be displayed, go under the Permissions tab to check or edit the role’s permissions.

    You can grant or revoke all entity’s permissions at once, by clicking on its name.

    If a role has all permissions granted for a specific entity, a green checkbox will be visible in front of it.

    If all permissions are revoked, a red cross will be visible.

    Finally, a light grey circle indicates that the role has partial permissions on the entity.

### Create a role

**To create a new role:**

1.  Log in with a user account having the rights to create a role (System: Create a role)
1.  Go to System/Users Management/Roles,
1.  Click on “Create role” button, fill in the form and give a name to the role,  
![image](../img/Akn_dashboard.jpg)
1.  Click on “Save” to add the new role,
1.  Then select the permissions for the role and select users.

### Edit a role’s name

**To edit the name of a role:**

1.  Log in with a user account having rights to edit a role (System: Edit Role).
1.  Go to System/Users Management/Roles.
1.  Click on the role you want to modify.
1.  Change its name.
1.  Click on “Save” to update the role.


> **Note**  
  A role’s name cannot be longer than 25 characters.


### Change a user’s role

**To edit a user’s role:**

1.  Log in with a user account having rights to edit a role (System: Edit Role).
1.  Go to System/Users Management/Roles.
1.  Click on the role to edit and go under the “Users” tab
![image](../img/Akn_dashboard.jpg)
1.  The list of users is displayed. Users currently belonging to the role can be easily identified by the check box in the first column “has role”.
1.  Look for the users and check boxes to add users to the role. And the other way around, uncheck the boxes for users to be removed from the role.
1.  Click on “Save” button to update the role.

The rights which have been granted to or removed from users are automatically applied. Changes on rights will be updated on the next PIM page’s loading.

### Delete a role

Before deleting a role, you should check if this role is currently assigned to some users.

**To delete a role:**

1.  Log in with a user account having rights to edit a role (System: Remove a role).
1.  Go to System/Users Management/Roles.
1.  You have two ways to proceed:
    *   Click on the role to remove and click on the “Delete” button on the top right corner.
    *   Or click on the “Delete” trash icon directly from the grid dragging the mouse on the role you want  
        to delete.
1.  Then confirm the suppression of the role.

    Please check first the potential impact of the removal of a role on which users have been associated to. For instance, if the role job was the only way for the user to have a specific right, then due to the role suppression, the user will have no longer his access right in the PIM.

## Configure rights on a product catalog (Enterprise Edition only)

### Access rights on assets

Access rights enable you to configure the scope of role and visibility of users on assets in the PIM. The scope of role and visibility is set on one axis:

*   It is possible to define for each user, which assets can be viewed and/or edited, depending on the classification of the assets in the categories.

### Set levels of asset access rights according to categories

**Setting the level of access on assets according to Categories:**

1.  Go to Enrich/Asset Categories
1.  Select the category to set permissions on in the left panel.
1.  Click on “Permissions” tab
1.  Click in the fields and select groups to grant them permissions.
1.  Click on “Save” button.
1.  Permissions are immediately applied to users.

By default, all users are entitled to all the rights on the created categories through the group “All”. If you define permissions to specific groups, remove the “All” group.

If an asset is in multiple categories of one tree or more and if the user has at least a view permission to one of the asset’s category, the user will be able to see the asset.

**Option “Apply changes on children”**

Changes made on the permissions are listed at the bottom of the “Permissions” form in the «Changes» section.

Below the list, there is an option to “apply changes on children”. This option is checked by default and can apply to all sub-categories of the edited category.

![image](../img/Akn_dashboard.jpg)

In the example above, all sub-categories will have no longer the “All” group in any of the permission category, but they will keep their own configurations.

### Access rights to product information (Enterprise Edition only)

Access rights enable you to configure the scope of role and visibility of users to the product catalog in the PIM.

**You can define access rights on 3 axes:**

*   Locales: if a product catalog is available in several locales, it is possible to define for each user which local can be viewed and/or edited.
*   Categories: If a product catalog uses the classification tree in the PIM, it is possible to define for each user, which products can be viewed and/or edited, depending on the classification of products in the different categories.
*   Attribute groups: if a product catalog uses the attribute group in the PIM system, it is possible to define for each user, which attributes can be viewed and/or edited, depending on the attribute group in which they are positioned.

### Hierarchy of access rights for product information (Enterprise Edition only)

**For each axis there are 3 levels of access:**

*   Permission to edit information
*   Permission to view information
*   No rights: the information is hidden to the user

As rights are subject to 3 axes, hierarchy prevents any conflicts defining permissions for each user. The axes of the hierarchy is the following:

*  Locale
    *   Category
        *   Attributes Group

How to apply the rule of hierarchy? It requires at least one access right to view on the parent axis to apply the rule to the child axis.

You will find below a couple of examples to illustrate how the rule of hierarchy applies to each user:

**A user has been granted with the following rights:**

*  Locale “deDE”: no right

Category “Shoes”: view & edit permissions

Attributes Group “General”: view & edit permissions

This user will never see the products in the category Shoes, nor edit the attributes in the “General” group in the “deDE” locale because the user does not have access on this locale, and he will never be able to see it.

**Let’s give the same user the permission to view the locale “enUS”:**

*  Locale “deDE”: no rights & Locale “enUS”: view permission

Category “Shoes”: view permission

Attributes Group “General”: view & edit permissions

The user can see the products in the category “Shoes” and can see the attributes in the “General” group in the “enUS” locale, but cannot edit them because he has only a view permission for “enUS” locale.

**Let’s give the same user the permission to edit the locale “frFR”, you will see:**

*  Locale “deDE”: no rights & Locale “enUS”: view permission & Locale “frFR”: edit permission

Category “Shoes”: view & edit permissions

Group of attributes “General”: view & edit permissions

On the “frFR” locale, the user can edit the products in the category Shoes and can edit the attributes in the “General” group. He can only see products and their attributes in “enUS” locale and he can’t see “deDE” product’s information.

The hierarchy is thus applied to each individual axis of the rules.

### Define the level of access to products according to locales

**Set the level of access to products according to locales**

1.  Go to Settings/Locales.
1.  Select the locale from the grid or using the grid’s filters.
1.  Click on the “Permissions” tab from the menu.
1.  Click in the fields to add user’s groups to grant them permisssions.
1.  Click on “Save”
1.  Permissions are immediately applied to users.

**If a user has rights to edit product information for a specific locale:**

*   The specific locale will be displayed in the drop down menu for the available locales
  *   In the product grid
  *   In the published product grid (Enterprise Edition only)
  *   In the product edit form
  *   When translating product information (product edit form)
  *   In the variant groups edit form

**If a user has no rights to see nor edit product information for a specific locale:**

*   This locale will not be displayed in the drop down menu of available locales
  *   In the product grid
  *   In the published product grid
  *   In the publishing product form,
  *   To translate product information (edit product form).

### Set the level of access rights to products according to categories

**Set the level of access to the products according to Categorie:**

1.  Go to Enrich/Categories
1.  Select the category to set permissions on
1.  Go under the “Permissions” tab
1.  Click in the fields to add user’s groups to grant them permisssions.

  ![image](../img/Akn_dashboard.jpg)

1.  Click on “Save”
1.  Permissions are immediately applied to users.

    By default, all users are entitled to all rights on the created categories through the group “All”. If you define specific permissions for user groups, please remove the “All” group.

If a product is classified in multiple categories of one or more trees and if a user has at least a view permission to its categories, he will be able to see the product.

**Option “Apply changes on children”**

Changes made on the permissions are listed at the bottom of the “Permissions” form in the «Changes» section.

Below the list, there is an option to “apply changes on children”. This option is checked by default and can apply to all sub-categories of the edited category.

![image](../img/Akn_dashboard.jpg)

In the example above, all sub-categories will no longer have the “All” group in any of the permission set the category, but they will keep their own configurations.

**Specific rights on categories: ownership & classification as multi-products**

An additional right is available for categories, it’s the “Ownership” permission.

This right allows to define for each user, who is responsible for product information according to the product classification in the different categories. For more information on the user role’s scope with the “Ownership” permission, please refer to the user guide.

A product can be classified into several categories. The most permissive rights are then applied to the product. For instance, a product is classified in 3 different categories: a first category for which the user has no rights, a second category for which the user is entitled to see the products, and a third category for which the user is entitled to edit products. Thus the user has the edit permission on the product.

The allocation of rights impacts the user behavior and what is displayed when connecting to the PIM. Below, you will find the description of the possible impacts for each right:

**Be responsible for product information in a category**

When you have the ownership permissions, you can:

*   Edit the product information directly; rather than going through the proposal’s workflow,
*   View/review the current proposals of product values,
*   Approve/reject or partially approve proposals of values that needs to be reviewed
*   Publish/unpublish a product version

**Publish product information in a category**

*   Edit a product contribution that needs to be approved by the product manager.
*   Generate a proposal that will be processed by the product manager
*   Send the proposal for review by the Product manager

**View product information in a category**

Further restrictions on product publish permission in a category:

*   Cannot edit a product contribution
*   Cannot generate a product proposal
*   Cannot send contributions for review by the product managers

**Cannot see products in a category**
Further restrictions on the product information view permission in a category:

*   In the case of a tree:
  *   Do not show the tree from the tree list on the left panel of the categories
    *   On the page Enrich/Products
    *   On the page Enrich/Published Products.
  *   Do not show products only belonging to the tree in the product grid, regardless of the filters applied, in any context:
    *   Associations,
    *   Groups,
    *   Variant groups.
*   In the case of a category:
  *   Do not show the category in the tree on the left panel of the categories
    *   On the page Enrich/Products
    *   On the page Enrich/Published Products.
  *   Do not show the category in the tree on the configuration page by mass edit “Classify products”
  *   Do not show the products belonging to this category from the product grid, regardless of the filter applied in any context:
    *   Associations,
    *   Groups,
    *   Variant groups.
*   In both cases
  *   Do not display views using the category or the tree as a filter.

### Set the level of access to the attributes according to the groups of attributes

**To do so:**

1.  Got to Settings/Attribute Groups,
1.  Select the attribute group in the left panel,
1.  Click on the “Permissions” tab,
1.  Click on the fields to select the user groups entitled to the appropriate rights,
1.  Click on the “Save” button,
1.  The rights are immediately applied.

**Publish product information in attribute group**

*   All the attributes of the group are enabled and they can be edited from the edit product page.
*   On the right side of the panel, the tab can be selected (checkbox) and use the “copy” button for the translation mode in the edit product page.
*   The attribute groups are also available in the “add attributes” option in the product edit page
*   The attribute groups are though not exported by the “quick export”.

**Cannot view product information in attribute groups**

What are the restrictions on the view permission of the attribute groups:

*   All attribute groups are disabled and cannot be edited in the edit product page.
*   There are no check box near the “copy” button in the translation mode in the edit product page.
*   The attribute groups are not offered in the “add attributes” in the product edit page.
*   The attribute groups are not exported by the “quick export” button.

**Cannot see the product information in a group of attributes**

What are the restrictions on the view permission of the attribute groups:

*   The attribute group is not visible in the edit product page nor in the view product page
*   The attribute groups are not displayed in the configuration of the pop in columns in the product grid.
*   The attribute groups are not displayed in the list of available filters in the product grid
*   The attribute groups are not exported by the “quick export” button.
*   The attribute groups are available in the “add attributes” option in the product edit page.
*   The views using the attribute groups (columns or filter) are not displayed in the list of views.

### Restore a product version (Enterprise Edition only)

This permission gives the right to restore a product version. If this permission is entitled, the user will see the “Restore” button in the grid versions.


> **Note**  
  This permission is only relevant if the user has access to the “History” tab of the products, which matches another permission: “Show product history.” This permission is given by a role.


### Access to published products

This permission enables access to the list of published products. If this right is granted, the user will see a new menu in Enrich/Published Products.

### Set access levels on import and export profiles

**To do so:**
1. Go to Collect/Import Profiles or Spread/Export profiles,
1. Select the profile to be configured in the grid,
1. Click on “Edit”,
1. Click on Permissions,
1. Click on the fields to set permissions on,
![image](../img/Akn_dashboard.jpg)
1. Click on “Save”,

Permissions are immediately applied.

# Configure imports / exports

This is available and can be done only if the rights have been granted to the user.

In the Enterprise Edition version, the permission to execute the job for the imports and exports can be customized for each import and export profile.

## What is a import or export profile?

An import or export profile allows to perform imports or exports in or from the PIM. For each type, the profile format is based on:

*   A code to identify the import or export profile.
*   A job with a connector to define what will make the import or export when executing. For instance, a product import in CSV or XLSX file, category export in CSV or XLSX to a Magento platform.
*   A set of configuration fields, available as a form in the PIM. Each job can have its own configuration. Thus the job configuration form “product import” in CSV connector in Akeneo will be different from the job configuration form “product import” in XLSX or from any customised job created.

    Some service applications are directly provided in the PIM to execute imports and exports:

*   The property “Allow send file to the server Yes / No” can be used by all job imports of any connector requiring a file as a data source to process.
*   Selecting channels is strongly recommended for use by all job export of any connectors, applying the rules of product selection implemented in the Akeneo PIM to export. However, the use of a channel to run a job export of products is not mandatory in the PIM.

## Browsing profiles of imports / exports

**To view the available import profiles:**

1.  Log in with a user account with permissions to “View the list of profiles” for imports
1.  Go to Collect/Import Profiles  
![image](../img/Akn_dashboard.jpg)
1.  To narrow down the list of imports displayed, use the available filters above the grid of Import profiles

To see the information on an import profile, click on the row in the grid

**To view the available profiles of export in the PIM:**

![image](../img/Akn_dashboard.jpg)

1.  Log in with a user account with permissions for the “View the list of profiles” for export
1.  Go to Spread/Export Profiles
![image](../img/Akn_dashboard.jpg)
1.  To narrow down the list of export displayed, use the available filters above the grid of Export profiles.

To view the information of an export profile, click on the line in the grid:  

![image](../img/Akn_dashboard.jpg)

## Creating a new import or export profile

**To create a new import profile:**

1.  Log in with a user account with “Create an import profile” permissions
1.  Go to the Collect/Import Profiles
1.  Click on “Create import profile”
![image](../img/Akn_dashboard.jpg)
1.  All fields in the pop-up window must be filled in:  
![image](../img/Akn_dashboard.jpg)
  *   A unique code
  *   A name for the label to identify the profile more easily in the PIM
  *   A job to execute the task.

  The list of jobs matches all the jobs available to perform imports, for all installed and configured connectors with Akeneo PIM.

1.  Click on “Save” to finalise the profile’s creation. The profile page screen is displayed. It is then possible to configure the job import.

**To create a new export profile:**

1.  Log in with a user account with “Create export profile” permissions
1.  Go to the Spread/Export Profiles
1.  Click on the top right button
![image](../img/Akn_dashboard.jpg)
1.  All fields in the pop-up window must be filled in:  
![image](../img/Akn_dashboard.jpg)
  *   A unique code
  *   A name for the label to identify the profile more easily in the PIM
  *   A job to execute the task.

    The list of jobs matches all the jobs available to perform exports, for all installed and configured connectors with Akeneo PIM.

1. Click on “Save” to create the export profile. The profile page screen is displayed. It is possible to configure the job export.

## Modify import/export

If a user has no rights granted to modify an import or export profile due to his role, then the permissions which he may benefit due to his group (Enterprise Edition rights) will not be applied. For instance, if a user does not have the “edit profiles of imports” permission, his Enterprise Edition rights to edit a specific import profile is ignored.

**To modify an import profile:**

1.  Log in with Account user with edit import profile permission.
1.  Go to the Collect/Import Profiles menu.
1.  Click on the import profile that needs to be modified.
1.  Click on the “Edit” button. In the tab “General properties”, the code and label properties are available for all import profiles, the Global Settings properties depend of the import job. For example for the CSV product import:  

|  |  |
|:-|:-|
|  |  |

1.  Make your changes
1.  Click on “Save” to update the profile.


> **Note**  
  For other import job properties, refer to the contextual help or the connector documentation.


**To edit an export profile:**

1.  Connect with a user account with edit permission for an export profile.
1.  Go to the Spread/Export Profiles.
1.  Click on the Export profile that needs to be modified.
1.  Click on “Edit”, go under the tab “General properties”. The code and label properties are available for all export profiles, the Global Settings properties depend of the export job. For example for the CSV product export:  

You will find the following properties:  

![image](../img/Akn_dashboard.jpg)

|  |  |
|:-|:-|
|  |  |

> **Note**  
  Be aware that exporting more than 1GB of medias can lead to a memory leak. For more information about this please refer to our cookbook: https://docs.akeneo.com/1.7/reference/scalabilityguide/morethan1GBofproductmediatoexport.html#more-than-1gb-of-product-media-to-export


The CSV and XLSX product exports come with an additional tab: Content in which you can filter information to export.

1.  Go under the «Content» tab to edit information to export.

|  |  |
|:-|:-|
|  |  |


|  |  |
|:-|:-|
|  |  |


1.  Click on the «Add attributes» button on the right side of the page.
1.  Once you are all set, click on “Save” to update the export profile.  

> **Note**  
  For other export jobs properties, refer to the contextual help  or the connector documentation.

## Jobs execution details

You have several ways to follow the status of a job (import, export, mass edit, rules...)

*   You’re notified by a flash message when the job starts
*   A notification appears on screen when the job is completed.
*   A widget gives you the status on Akeneo dashboard
*   On the Process Tracker page (System/Process Tracker), you can access the status and job report.
*   From the execution details page for imports and exports
*   With the email notification once the job is complete

### Imports & exports reports

**To review an import report:**

1.  Go to Collect/Import history,

    On the history page, you can clearly see the status of your import: completed, started or failed thanks to the colors.

1.  Click on the notification of the complete import or select your import executed displayed in the grid.
1.  The page of the import job appears:.


![image](../img/Akn_dashboard.jpg)

The details of the executing import job are shown on the page. The details are related to each executed import/export profile. For more detailed information, please refer to the documentation of the used Akeneo connector for the execution.

### Bulk actions execution reports

**View a report of a bulk action**

1.  Two ways to display a report:
    *   Go to System/Process Tracker
    *   Click on the notification of the completed action
1.  The page of the report is then displayed:The details of the executing bulk action are shown on the page.

![image](../img/Akn_dashboard.jpg)

# About asset transformations (Enterprise Edition only)

Set assets transformations for your channels

Add asset transformations for a channel

You have to import a YML file by executing the job “Asset channel configuration import in YML”.

1.  Go to Imports/Import profiles
1.  Create a new import job or use an existing job
1.  Make your YML file with your transformations  

![image](../img/Akn_dashboard.jpg)

1.  Upload your YML file and process the file

> **Note**  
  You can find more details about the format of the file in our technical cookbook (https://docs.akeneo.com/latest/index.html).
For more details about how to execute an import, please refer to the user guide “User”, section “Launch an import”.


You can define one or more asset transformation per channel. Imports work in update mode, new transformations added will replace the current ones.

### Available assets transformations

To find all assets transformations available, go on our Knowledge Base page: [Akeneo PAM asset transformation](https://www.akeneo.com/fr/knowledge-base/akeneo-pam-transformations/).

### Update assets transformations

To change asset transformations for your channels, you need to reimport a new YML file and upload it into Akeneo.

If you want to add new transformation to a channel, add the existing ones in the imported file if you want to keep them.

> **Note**  
  You need to install ImageMagick to be able to set asset transformations.
ImageMagick library proposes other types of asset transformations, meaning that you can add more transformation types.


**Check the current assets transformation**

You can check if your channel has its own asset transformation by going to Settings/Channel then click on your channel, and go under the tab Asset Transformations.

> **Note**  
  If no asset transformation is set for your channel, the PIM will not be able to generate a variation.
If the reference file (the original asset) does not fit the transformation requirements, for instance, it’s too small to be resized, the transformation will not be done.


**Export assets transformation**

You can export your asset transformations in a YML file by executing the export job “Asset channel configuration export in YML”. This YML file will contains all available asset transformations for all your channels. For more details about how to execute an export, please refer to the user guide “end-user”, section “Launch an export”.

# System Information Page

## Get your system information

**To view your system information**

In the latest versions, we have added an information page that contains technical information. To check this page, go to System/System Information.

On this page, you will have a sum up of all technical information that could be very helpful when raising a ticket: Edition version, Storage, Environment, Activated bundles… Once you land on this page, click on “TXT” button on the right hand corner to download a text file containing all this information.

This page has been developed in order to gather most of the information you need to raise tickets through our Helpdesk. Please attach the text file downloaded to your ticket (Attachment field).

# Contribute to Akeneo

Akeneo is open source, if you feel like contributing to the project, you can do this in several ways! You will find all information about contributing on the following link: [https://docs.akeneo.com/1.6/contributing/index.html](https://docs.akeneo.com/1.6/contributing/index.html).

## Contribute on our GitHub

On our [<span class="Hyperlien">GitHub repository</span>](https://github.com/akeneo/pim-community-dev/issues) you can suggest improvements, new features or simply ask question or report a bug. Go to our Issue page, and we’ll try to answer you in the best delays.

We also now propose our users to easily become contributors and we can assist them to fix issues.

> **Note**  
  If you are an Enterprise Edition client, you might have a dedicated Helpdesk board.


## Enhance the documentation

We are keen on suggestions to improve the documentation, get real use cases or tutorials explaining how you customise your PIM.

You can submit Pull Requests on our dedicated GitHub repo: https://github.com/akeneo/pim-docs. You can follow our recommendations on documentation enhancements on the following link: [https://docs.akeneo.com/1.7/contributing/documentation.html](https://docs.akeneo.com/1.7/contributing/documentation.html).

## Help us translate the PIM

By default, Akeneo PIM is set in English, we usually manage to translate the wording in French internally. Thanks to some of our employees, we have managed to translated some other languages like Russian, Portuguese... but for other languages you might miss some wordings.

Akeneo uses the application [Crowdin]( https://fr.crowdin.com/) which provides a collaborative environment for the community to translate the PIM. Sometimes some translations are missing in different languages, depending on the contributions of the community, feel free to create an account and submit translations for your language!

Access to Crowdin is free, simply register to access to Akeneo project and start contributing!  
[https://fr.crowdin.com/project/akeneo](https://fr.crowdin.com/project/akeneo) For now, here is the current status on PIM translation on Crowdin.

## Badger Program

As part of our Contributing Program, you can also claim badges! For more information, check the dedicated GitHub repository: https://github.com/akeneo/badger.

Amongst available badges get your “El Translator” badge when you help us translate the PIM, the “Core Contributor” when you merge your 1st Pull Request on our PIM Community Edition and so on!


# THANK you!
