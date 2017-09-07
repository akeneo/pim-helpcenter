---
id: manage-your-group-types
themes: catalog-settings
title: Manage your **group types**
popular: false
ee-only: false
---

# Overview

Groups are used to bring products together.

You can group all the products on a selection of products to create a gift list, for example a collection of products on the same theme (Spiderman for instance).

By default the PIM offers two types of groups Related and Variant, you can create more.

![image](../img/dummy.png)

Once you have created a product group type, it can be used when creating a product group (Enrich/Groups).

![image](../img/dummy.png)

Groups types are required to create a product group. There is no default group. Akeneo advises to create a default group type with code “RELATED”.

The group type “VARIANT” is directly managed by the Akeneo PIM application, it cannot be removed.

# List the group types

To start, go to Settings/Group types. From the datagrid of the types groups page, there are many ways to work as described below.

## Group’s grid pagination

The group’s grid displays between 10 and 100 groups per page. By default, the grid displays 25 groups per page, you can change this by clicking on «View per page» and select the number of groups you wish to see per page.

The datagrid of group types displays a page number. All group types are displayed in the datagrid per set of N group types. The number of group types is indicated at the top right of the grid.

This number of group types per page can be changed if you click on the drop down list to select another number:

![image](../img/dummy.png)

## Filter on group types

The group type datagrid comes with a filter bar. You can filter on the group type’s code and on the group types’ labels.

![image](../img/dummy.png)

1.  Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.
1.  The grid is automatically updated as a new filter is added.

## Sort out group types

To sort out the group types, you can click on a column header in the grid.

## Shortcut actions on group type

There is a set of actions available for each type of group, localised in the last column in the grid. The buttons are displayed when you hover your mouse over the line.

![image](../img/dummy.png)

::: info
The shortcut actions are displayed if you have been granted the appropriate rights.
:::

# Create a group type

You must have the permission to create a group type from the PIM.

To create a group type:
1.  Click on “Create group type”.
1.  Select the group type code you want to create.
1.  Confirm.

The group type has now been created and the edit page is displayed.
Some properties can be changed or added.

# Edit a group type

To edit a group:
1.  Go to Settings/Group types.
1.  Click on the group type you want to edit in the grid.

The edit form is displayed. Only the labels can be edited for a group type.

The code cannot be changed once created. Click on the “save” button to save your changes.

# Delete a group type

To delete a group type:
1.  Go to Settings/Group types,
1.  Click on the group type to remove,
1.  Click on the “Delete” button,

The group type is deleted.

::: warning
If a group type is already used by at least one group, then the group type cannot be deleted: an error message appears to tell the user that the group type is used and therefore cannot be deleted.
:::
