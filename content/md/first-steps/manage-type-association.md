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

There are three different association types:
*   The 1-way association (when product A is associated with product B).
*   The 2-way association (when product A is associated with product B, then product B will be automatically associated with product A).
*   The association with quantities (when product A is associated with 2 quantities of product B and with 3 quantities of product C).

:::info
The association types are mandatory to create a link between two products. There is no default association types.
:::

![Association types list](../img/Settings_Associations_Types.png)

Once you have created an association type between products, it can be used while editing a product (in the tab `Associations`).

# View the association types

Read our [Association types](manage-your-association-types.html) section to find out what they are.

# Create an association type

:::info
You must have permission to create an association type from the PIM.
:::

## Create a 1-way association type

To create a 1-way association type:
1.  Click on `Create association type`
1.  Fill in the code of the association type you want to create
1.  Click on `Save`

::: success
The association type has now been created and the edit page is displayed.  
You can only edit the labels.
:::

## Create a 2-way association type

To create a 2-way association type:
1.  Click on `Create association type`
1.  Fill in the code of the association type you want to create
1.  Set the "2-way association" switch to "Yes"
1.  Click on `Save`

![2-way association type](../img/Settings_Associations_2-way-association-type.png)

::: success
The association type has now been created and the edit page is displayed.  
You can only edit the labels.
:::

:::warning
The 2-way association property cannot be updated once the association type is created.  2-way associations only allows two different products to be associated.
:::

## Create an association type with quantities

To create an association type with quantities:
1.  Click on `Create association type`
1.  Select the code of the association type you want to create
1.  Set the "Association with quantity" switch to "Yes"
1.  Click on `Save`

![Association type with quantities](../img/Settings_Associations_Association-type-with-quantities.png)

::: success
The association type has now been created and the edit page is displayed.  
You can only edit the labels.
:::

:::warning
The association with quantities property cannot be updated once the association type is created.
:::

# Edit an association type

To edit an association type:
1.  Go to `Settings/Association Types`
1.  Click on the association type you want to edit in the grid
1.  The edit form appears
1.  Only the labels can be edited for a type of association  
1.  Click on `Save`

::: warning
You cannot change the code once you created the association type.    
The association type is unmodifiable. It is not possible to change it to a 2-way association or to an association with quantities.
:::

# Delete an association type

To remove an association type:
1.  Go to `Settings/Association types`
1.  Click on the association type you want to delete from the grid
1.  Click on the `Delete` button
1.  Confirm the action via the validation message

::: success
The association type is then deleted.
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
