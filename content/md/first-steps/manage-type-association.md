---
id: manage-your-association-types
themes: catalog-settings
title: Manage your **association types**
popular: false
ee-only: false
---

# Overview

Associations types are used to link products together.

For example, you can link your product to their substitute product in case of inventory shortage. The code for this association type will be “SUBSTITUTION”.

![image](../img/dummy.png)

Once you have created an association type between products, it can be used while editing a product.

![image](../img/dummy.png)

The association types are mandatory to create a link between two products. There is no default association types.

# View the association types

To see current association types, go to Settings/Association types. From this page, there are many ways to work with the association type datagrid, as described below.

## Association’s grid pagination

The association’s grid displays between 10 and 100 associations per page. By default, the grid displays 25 associations per page, you can change this by clicking on «View per page» and select the number of associations you wish to see per page.

The association type datagrid displays a page number. All association types are displayed in the datagrid per set of N association type. The number of association type is indicated at the top right of the grid.

This number of association types per page can be changed if you click on the drop down list to select another number:

![image](../img/dummy.png)

## Filter on association types

The association type datagrid comes with a filter bar. You can filter on association types’ codes and labels.

![image](../img/dummy.png)

1.  Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.
1.  The grid is automatically updated as a new filter is added.

## Sort out the association types

To sort out the association types, you can click on a column header in the datagrid.

## Shortcut actions on each association type

You will be able to find a set of actions available for each association type in the last column in the grid. The buttons are displayed when you hover your mouse over the line.

![image](../img/dummy.png)

::: info
The shortcut actions are displayed if you have been granted the appropriate rights.
:::

# Create an association type

To create an association type from the PIM user interface, you must have been granted specific permissions to do so. If this is not the case, contact your administrator.

To create an association type:
1.  Click on the “Create a new association type” button.
1.  Select the code of the association type you want to create.
1.  Confirm.

The association type has now been created and the edit page is displayed.

Some properties can be changed or completed.

# Edit an association type

To edit an association type:
1.  Go to Settings/Association Types.
1.  Click on the association type you want to edit in the datagrid.

The edit form appears. Only the labels can be edited for a type of association. The code cannot be changed once created. Click on the “save” button to save your changes.

# Delete an association type

To remove an association type:
1.  Go to Settings/Association types.
1.  Click on the association type you want to delete from the grid.
1.  Click on the “Delete” button.

The association type is then deleted.

::: warning
If an association type is used by at least one product, then the association type cannot be deleted: an error message is displayed to let the user know that the association type is used and cannot be deleted.
:::

# Check the association type history

Changes made on association types are recorded and visible under the history tab of the association type. For example: label change, attribute change, etc.

:For each change, a version of the association type is created. The following information is tracked down for each version:

*   The person or system that generated changes
*   The date and time (up to seconds) at which the changes took place
*   The old value and the new value of each field modified.

To view the versions of an association type:

1.  Open & edit the association type page.
1.  Click on the “History” tab. The list of versions will be displayed.
