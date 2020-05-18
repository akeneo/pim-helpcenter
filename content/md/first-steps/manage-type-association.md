---
id: manage-your-association-types
themes: catalog-settings
title: Manage your **association types**
popular: false
ee-only: false
---

# Overview

Associations types are used to link products together.

For example, you can link a product to its accessories. The code for this association type could be “ACCESSORIES”.

There are two different association types:
*   The 1-way association (product A is associated with product B).
*   The 2-way association (when product A is associated with product B, then product B will be automatically associated with product A).

:::info
The association types are mandatory to create a link between two products. There is no default association types.
:::

![image](../img/Settings_AssociationsTypes.png)

Once you have created an association type between products, it can be used while editing a product (in the tab `Associations`).

![image](../img/Products_PEF7.png)

# View the association types

Read our [Association types](manage-your-association-types.html) section to find out what they are.

# Create an association type

:::info
You must have the permission to create an association type from the PIM.
:::

## Create a 1-way association type

To create a 1-way association type:
1.  Click on `Create association type`
1.  Fill in the code of the association type you want to create
1.  Click on Save

:::tips
The association type has now been created and the edit page is displayed.  
The labels can be changed.
:::

## Create a 2-way association type

To create a 2-way association type:
1.  Click on `Create association type`
1.  Select the code of the association type you want to create
1.  Set the "2-way association" button to "Yes"
1.  Click on Save

![image](../img/Association_types_2-way_button.png)

:::tips
The association type has now been created and the edit page is displayed.  
The labels can be changed.
:::

:::warning
The 2-way association property cannot be updated once the association type is created.
:::

# Edit an association type

To edit an association type:
1.  Go to `Settings/Association Types`
1.  Click on the association type you want to edit in the grid
1.  The edit form appears
1.  Only the labels can be edited for a type of association  
1.  Click on the `Save` button to save your changes

:::info
The code cannot be changed once the association type is created.
:::

:::warning
The 2-way association property can’t be updated.
:::

# Delete an association type

To remove an association type:
1.  Go to `Settings/Association types`
1.  Click on the association type you want to delete from the grid
1.  Click on the `Delete` button
1.  Confirm the action via the validation message

The association type is then deleted.

:::warning
If an association type is used by at least one product, then the association type cannot be deleted: an error message is displayed to let the user know that the association type is used and cannot be deleted.
:::

# Check the association type history

Changes made on association types are recorded and visible in the history tab of the association type.

For each change, a version of the association type is created. The following information is tracked down for each version:

*   The person or system that generated changes
*   The date and time (up to seconds) at which the changes took place
*   The old value and the new value of each field modified.

To view the versions of an association type:

1.  Open & edit the association type page.
1.  Click on the `History` tab. The list of versions will be displayed.
