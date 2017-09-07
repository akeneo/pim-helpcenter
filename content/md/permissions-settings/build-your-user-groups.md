---
id: build-your-user-groups
themes: permissions-settings
title: Set **rights on the products** catalog
popular: false
ee-only: true
related: what-is-a-user-group, what-is-a-user
---

# Meet the user groups

Thanks to the user groups, you will be able to grant access to your PIM users to only certain parts of your dear products catalog.


# View the user groups list

To see which groups have been created:
1.  Log in with a user account witch has the rights to see the groups (system: List of user).
1.  Go to System/Users Management/Groups
![image](../img/dummy.png)
1.  To see the details of a user group, click on a line in the group to view the information available.

# Create a user group

1.  Log in with a user account with the rights to create a group (system: Create a group of users).
1.  Go to System/Users Management/Groups
1.  Click on “Create group” button to generate a new user group.
![image](../img/dummy.png)
1.  Fill the form to name the group.
1.  Then click on the “Save” button to update groups.

# Edit the name of a user group

1.  Log in with a user account with the rights to edit a group (system: Change a user group).
1.  Go to System/Users Management/Groups
1.  Click on the group name to be modified.
![image](../img/dummy.png)
1.  Change the name of the group.
1.  Then click on the “Save” button to update the user group.

# Assign users to a user group

When a user is created, this latter can be added to at least one of the groups that have been created in the PIM.

Assigning a user to one group or several groups, allows him/her to have permissions on the catalog.

To edit the users associated to a group:
1.  Log in with a user account with the rights to edit a group (system: Editing user groups).
1.  Go to System/Users Management/Groups
1.  Click on the user group to be modified.

  ![image](../img/dummy.png)

1.  A grid of users is displayed with the users belonging to the respective group. They can be easily identified by the check box in the first column “has group”.
1.  Look for the users and check the box to add the users to the group. And the other way around, uncheck the box to withdraw the users from the group.
1.  Then click on the “Save” button to update the group.

The rights which have been granted to or removed from users (added to or removed from the user group) are automatically applied.

# Define rights for each user groups

Once you've created your user groups and put some users in them, you can begin to define for each of these users groups which parts of the catalog they will be able to see/edit.

## Access rights on product information

Access rights enable you to configure the scope of role and visibility of users to the product catalog in the PIM.

You can define access rights on 3 axes:
- **Locales**: If a product catalog is available in several locales, it is possible to define for each user which local can be viewed and/or edited.
- **Categories**: If a product catalog uses the classification tree in the PIM, it is possible to define for each user, which products can be viewed and/or edited, depending on the classification of products in the different categories.
- **Attribute groups**: If a product catalog uses the attribute group in the PIM system, it is possible to define for each user, which attributes can be viewed and/or edited, depending on the attribute group in which they are positioned.

### Hierarchy of access rights for product information

For each axis there are 3 levels of access:
- Permission to edit information
- Permission to view information
- No rights: the information is hidden to the user

As rights are subject to 3 axis, hierarchy prevents any conflicts defining permissions for each user. The axes of the hierarchy is the following:
- Locale
    - Category
        - Attributes Group

How to apply the rule of hierarchy? It requires at least one access right to view on the parent axis to apply the rule to the child axis.

#### Examples
You will find below a couple of examples to illustrate how the rule of hierarchy applies to each user.

A user has been granted with the following rights:
- Locale “de_DE”: no right
- Category “Shoes”: view & edit permissions
- Attributes Group “General”: view & edit permissions

This user will never see the products in the category Shoes, nor edit the attributes in the “General” group in the “de_DE” locale because the user does not have access on this locale, and he will never be able to see it.

Now, let’s give the same user the permission to view the locale “en_US”:
- Locale “de_DE”: no rights & Locale “en_US”: view permission
- Category “Shoes”: view permission
- Attributes Group “General”: view & edit permissions

The user can see the products in the category “Shoes” and can see the attributes in the “General” group in the “en_US” locale, but cannot edit them because he has only a view permission for “en_US” locale.

Finally, let’s give the same user the permission to edit the locale “fr_FR”, you will see:
- Locale “de_DE”: no rights & Locale “en_US”: view permission & Locale “fr_FR”: edit permission
- Category “Shoes”: view & edit permissions
- Group of attributes “General”: view & edit permissions

On the “fr_FR” locale, the user can edit the products in the category Shoes and can edit the attributes in the “General” group. He can only see products and their attributes in “en_US” locale and he can’t see “de_DE” product’s information.

The hierarchy is thus applied to each individual axis of the rules.

### Define the level of access to products according to locales

1.  Go to Settings/Locales.
1.  Select the locale from the grid or using the grid’s filters.
1.  Click on the “Permissions” tab from the menu.
1.  Click in the fields to add user’s groups to grant them permisssions.
1.  Click on “Save”
1.  Permissions are immediately applied to users.

If a user has rights to edit product information for a specific locale, the specific locale will be displayed in the drop down menu for the available locales:
- In the product grid
- In the published product grid (Enterprise Edition only)
- In the product edit form
- When translating product information (product edit form)
- In the variant groups edit form

If a user has no rights to see nor edit product information for a specific locale, this locale will not be displayed in the drop down menu of available locales:
- In the product grid
- In the published product grid
- In the publishing product form,
- To translate product information (edit product form).

### Define the level of access rights to products according to categories

1.  Go to Enrich/Categories
1.  Select the category to set permissions on
1.  Go under the “Permissions” tab
1.  Click in the fields to add user’s groups to grant them permisssions.

  ![image](../img/dummy.png)

1.  Click on “Save”
1.  Permissions are immediately applied to users.

By default, all users are entitled to all rights on the created categories through the group “All”. If you define specific permissions for user groups, please remove the “All” group.

#### Option “Apply changes on children”

Changes made on the permissions are listed at the bottom of the “Permissions” form in the «Changes» section.

Below the list, there is an option to “apply changes on children”. This option is checked by default and can apply to all sub-categories of the edited category.

![image](../img/dummy.png)

In the example above, all sub-categories will no longer have the “All” group in any of the permission set the category, but they will keep their own configurations.

#### The "Ownership" permission

An additional right is available for categories, it’s the “Ownership” permission.

This right allows to define for each user, who is responsible for product information according to the product classification in the different categories. For more information on the user role’s scope with the “Ownership” permission, please refer to the user guide.

#### One product in several categories

A product can be classified into several categories. The most permissive rights are then applied to the product. For instance, a product is classified in 3 different categories: a first category for which the user has no rights, a second category for which the user is entitled to see the products, and a third category for which the user is entitled to edit products. Thus the user has the edit permission on the product.

<---- THIS WHOLE PART IS CRAZY SHIT, I DONT UNDERSTAND ANYTHING, SHOULD BE REWORK ---->
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


<-- END OF SHIT -->

### Define the level of access to the attributes according to the groups of attributes

1.  Got to Settings/Attribute Groups,
1.  Select the attribute group in the left panel,
1.  Click on the “Permissions” tab,
1.  Click on the fields to select the user groups entitled to the appropriate rights,
1.  Click on the “Save” button,
1.  The rights are immediately applied.


<--- AGAIN -->
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

<-- END OF AGAIN -->

## Access rights on assets

Access rights enable you to configure the scope of role and visibility of users on assets in the PIM. The scope of role and visibility is set on one axis. It is possible to define for each user, which assets can be viewed and/or edited, depending on the classification of the assets in the categories.

### Define levels of asset access rights

To set the level of access on assets according to the assets categories:
1.  Go to Enrich/Asset Categories
1.  Select the category to set permissions on in the left panel.
1.  Click on “Permissions” tab
1.  Click in the fields and select groups to grant them permissions.
1.  Click on “Save” button.
1.  Permissions are immediately applied to users.

By default, all users are entitled to all the rights on the created categories through the group “All”. If you define permissions to specific groups, remove the “All” group.

If an asset is in multiple categories of one tree or more and if the user has at least a view permission to one of the asset’s category, the user will be able to see the asset.

### Option “Apply changes on children”

Changes made on the permissions are listed at the bottom of the “Permissions” form in the «Changes» section.

Below the list, there is an option to “apply changes on children”. This option is checked by default and can apply to all sub-categories of the edited category.

![image](../img/dummy.png)

In the example above, all sub-categories will have no longer the “All” group in any of the permission category, but they will keep their own configurations.

## Access rights on import and export profiles

1. Go to Collect/Import Profiles or Spread/Export profiles,
1. Select the profile to be configured in the grid,
1. Click on “Edit”,
1. Click on Permissions,
1. Click on the fields to set permissions on,
![image](../img/dummy.png)
1. Click on “Save”,

Permissions are immediately applied.

# Move a user to another group

1. Go to System/Users Management/Users,
1. Click on the user to proceed,
1. Click on the “Edit user” button,
1. Click on the “Groups and Roles” tab from the menu  
  ![image](../img/dummy.png)
1. Check / uncheck the groups to add or remove the user from these groups,
1. Click “Save”.

# Delete a user group

Before deleting a group, you should check first if the specific group is used to entitle access rights to other users.

To delete a user group:
1.  Log in with a user account with the rights to edit a group (permission System > Remove a user group).
1.  Go to System/Users Management/Groups
1.  You have two ways to proceed:
    *   Click on the user group to be deleted and click on the “delete” button on the top right.
    *   Click on the “delete” button straight away from the grid dragging the mouse on the group you want to delete.
1.  Then confirm the message for the suppression of the group.
![image](../img/dummy.png)

::: warning
Please check first the potential impact of the removal of a group on which users are included. For instance, if the group membership was the only way for a user to have a specific right, then due to the group suppression, the user will have no longer his access right in the PIM.
:::

