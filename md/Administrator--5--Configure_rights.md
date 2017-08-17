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
