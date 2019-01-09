---
id: manage-your-families
themes: catalog-settings
title: Manage your **families and variant families**
popular: false
ee-only: false
related: what-is-a-family
---

# Manage your families

## See all your families

To see your families, edit them or create a new family go to `Settings/Families`.       

![List of families](../img/Settings_Families.png)

## How to create a family?

**Families are used to gather attributes that are common to several products**. The [completeness](what-is-the-completeness.html) of your products is also defined at the family level.      
To create a new family, follow these steps:
1.  Go to `Settings/Families`
1.  Click on `Create family`
![Create a family](../img/Settings_Families_Create.png)
1.  The creation of a family popin is prompted
1.  Enter a new family code (this code must be unique)
1.  Click on `Save`

Your new family is now created. The family's `Properties` tab is displayed.     
You can give additional properties to your family:      
*   **Set an `attribute used as label` (required)**: a **text or identifier attribute** that will be used as the **default name for products** belonging to this family. The attribute selected as label **will appear in the product grid** (as the "Label" column) and in **the product form's header**.
*   **Set an `attribute used as the main picture`**: an **`image` or `assets collection` attribute** that will be used as **"the main picture" for products** belonging to this family. This attribute used as main image will be displayed **in the product grid** (as the "image" column) and in **the product form's header**. **Localizable and/or scopable attributes cannot be used as main product pictures**.
*   Translate the family's label with `Labels translations`: allow you to translate your family name into the locales enabled in the PIM.

These information can be edited afterwards.     

Once a family is created, you can configure your family:
*   Add/remove attributes from the family
*   Edit these attributes’ completeness

:::info
**Supported extensions for thumbnails** for `image` or `assets collection` attributes are the following: jpg, jpeg, png and gif.
:::

:::info
You must be granted a specific role permission to be able to create a family. Please refer to [Manage your user roles](build-your-user-roles.html).
:::

## Manage attributes in a family
**Attributes can be used in one or several families, but an attribute can only be added once to a family**.         

You can easily add attributes to or remove them from a family using the user interface or through [imports](imports.html).

### Add an attribute to a family

Once you are on your family edit form, go under the `Attributes` tab:
1.  Click on `Add Attributes` on the right side of the screen
![image](../img/Settings_Families_Attributes.png)
1.  Select the attributes to add by clicking on their labels
1.  Click on `Add`
1.  Click on `Save`

You can also add a group of attributes, to do so click on `Add by groups` on the right side of the screen       
![image](../img/Settings_Families_Groups.png)   
Select the attribute groups to add by clicking on their labels and click on `Add` and then `Save`.      

The attributes will be added to the current family.

::: info
If you do not see the `Add Attributes` or `Add by groups` button, it might be because you do not have the relevant rights. Please refer to [Manage your user roles](build-your-user-roles.html).
:::

### Remove an attribute

You can also remove attributes from a family:   
1.  Go under the `Attributes` tab
1.  Click on the `Delete` icon to remove the relevant attribute(s)
![image](../img/Settings_Families_Delete.png)
1.  `Save` your update

The attribute(s) will be back under the `Add attributes` list. If you need it later, you will be able to add it again.

## Manage your family’s completenesses

:::info
The **completeness represents the percentage of completion of a product**, it is displayed as a progress bar or as a percentage in the PIM. **It is calculated for each product and for each channel/locale combination.**
**A product is considered as complete** (or 100% completeness) **when its required attributes** (defined at the family level) **have values.**
For more details about the completeness, please refer to [Understand product completeness](what-is-the-completeness.html).
:::

When an attribute is added to a family, it is not set as required for any channel by default. **Only your product identifier attribute is automatically added and set as required for all families**.       

Under the attribute’s family tab, you will see
- **Circles** meaning that the attribute is **not required** in the channel’s completeness
- **Checks** meaning that the attribute is already set as **required** for this channel

### Set an attribute as required for a channel

1.  Go under the `Attributes` tab
1.  Select the attributes to be required for your family
1.  Click on the circles to make them required for the channel’s completeness
1.  Circles are automatically converted into a “check”
1.  Click on `Save`

![image](../img/Settings_FamiliesAddAttributes.gif)

:::warning
Once changes are saved, the PIM will automatically run a completeness calculation to update your product information.
:::

:::tips
Save time by using the **Family Mass action** (available from the families grid)! You will be be able to add one or several attributes (or attribute groups) to a selection of families, and also manage their completeness at the same time, read our section [Mass edit your families](manage-your-families.html#mass-edit-families) available below.
:::

### Remove an attribute as required from a channel

1.  Go under the `Attributes` tab
1.  Select the attributes required for your family
1.  Click on the checks to remove them from being required for the channel’s completeness
1.  Checks are automatically converted into circles
1.  Click on `Save`

:::warning
Once changes are saved, the PIM will automatically run a completeness calculation to update your product information.
:::

## Mass edit families

**Like for products you can mass edit families and add several attributes at once for several families**, and through the same action define if they are required or not for the selected channels.

To add attributes (or a group of attributes) to several families:
1.  Go to `Settings/Families`
1.  Check the families on which you want to add the same attributes
1.  A toolbar will be displayed at the bottom of the page: choose `All` to select all existing families, `All visible` to only select the families displayed on the current page or `None` to unselect all the families)
1.  Click on the `Bulk actions` button in the toolbar
![image](../img/Settings_FamiliesBulkActions1.png)
1.  The mass edit window will be displayed
1.  Select the operation `Set attributes requirements`
1.  Click on `Next`
![image](../img/Settings_FamiliesBulkActions2.png)
1.  Add the relevant attributes by attributes or by attribute groups
1.  Set the attributes required for the product completeness of the channels
1.  Click on `Next`
1.  Confirm the action with the `Confirm` button to add attributes to the selected families     

The attributes have been added to the families.

## Check the family history

Changes made on a family are recorded and visible under the `History` tab.      

For each change, a version of the family is created. The following information is tracked down for each version:
- The person or system that made the changes
- The date and time (down to seconds) at which the changes took place
- The old value and the new value of each modified field

To view the family versions:
1.  Open and edit the family tab.
1.  Click on the `History` tab. The list of versions is displayed

## Delete a family

::: info
Deleting a family does not remove the attributes from the PIM and does not delete the products associated to it.        
**Attributes that had values will remain visible in the product form** to keep the product information. These attributes will become “optional”.     
**Products without a family will no longer have a completeness**.
:::

You have two ways of removing a family.
Through the family form:
1. Go to `Settings/Families` to list the families
1. Click on the family to delete
1. Click on `...` for other actions and then `Delete` on the top right corner
  ![image](../img/Settings_FamilyDelete.png)
1. Confirm the action via the validation message

Through the `Delete` shortcut in the grid:
  ![image](../img/Settings_Families_DeleteHover.png)
1. Select the family you want to remove from the family datagrid
1. Place your mouse over the line of family in the grid, the button delete is prompted (trash can icon)
1. Click on the trash can icon
1. Confirm the action in the validation message

::: warning
A family with family variants cannot be deleted. You first need to [delete its family variants](manage-your-families.html#delete-a-family-variant).
:::

::: warning
A family cannot be deleted if there are some products within this family, you first need to remove the products from this family (refer to [the bulk action change family of products](product-mass-actions.html)).
:::

::: ee
A family used by a published product cannot be deleted. You first need to unpublish your products to delete the family.
:::

# Manage family variants

A [family variant](what-about-products-variants.html#what-is-a-family-variant) allows you to define the global structure of your products with variants and will enable you to create [product models](what-about-products-variants.html#what-is-a-product-model).

The family variants are managed in a dedicated tab called `Variants` in `Settings/Families`.

## See your family variants

To see the existing family variants or create a new one:
1.  Go to `Settings/Families`
1.  Select the family to edit in the grid and click on it
1.  Open the `Variants` tab for the family

![List of family variants](../img/Settings_Families_Variant_List.png)

## Display a family variant

1.  In `Settings/Families`, choose a family and open the `Variants` tab
1.  Click on a family variant to display it  
1.  The family variant details are displayed

![Display a family variant](../img/Settings_Families_Variant_Display.png)

You can see how the attributes are distributed between the different levels:
- The **common attributes** in the 1st column for all the products in a product model
- The **variant attributes for the level 1** in the 2nd column are the attributes which will vary according to the variant axes of the level 1
- If the family variant has 2 variant levels, **the variant attributes for the level 2** in the 3rd column are the attributes which vary according to the variant axes of the level 2 (and level 1)

In our clothing example which varies on 2 levels by color and then by size, the common attributes are: the name, the collection, the description, the brand, etc. The attributes that vary by color (variant level 1) are the composition, the pictures and the attributes that differ by color and size (variant level 2) are the EAN, the SKU and the weight.

## Create a new family variant

You can create one or more family variants in each family.
1.  In `Settings/Families`, choose a family and select the `Variants` tab
1.  Click on `Add variant` to create a new variant for the family
1.  The creation of a family variant popin is prompted
![Create a family variant](../img/Settings_Families_Variant_Create.png)
1.  The following properties are required to create a family variant:
    - A **code** to identify the family variant
    - A **label**
    - A number of **variant levels**: 1 or 2
    - The **variant axes** for each level: the variant axes are attributes of the family which identify the variant product in the product model. Their values must differ from a variant product to another in the product model (unicity). For examples, the `color` and `size` for a clothing model (there is only one product with the color blue and the size S and one product with the color blue and the size M for a t-shirt model), the `color` for a chair model, the `dimensions` for a mattress model.
1.  Click on `Create`, the family variant is created.

::: info
An attribute of the family could be a **variant axis** only if its attribute type is **structured**:
- **Simple select**
- **Simple reference data**
- **Reference entity simple link (EE only)**
- **Metric**
- **Boolean (Yes/No)**       

You cannot use scopable and/or localizable or locale specific attributes as variant axis.
:::  

::: info
A **family variant cannot have more than 5 attributes used as a variant axis.**
:::

Then, a screen to distribute the attributes between the different levels (`common attributes`, `variant attributes level 1` and `variant attributes level 2`) for the family variant will be displayed.
1.  Drag and drop attributes or attribute groups from the `common attributes` to the selected variant level to have these attributes managed at each variant level
![Display a family variant](../img/Settings_Families_Variant_DistributeAttributes.png)
1.  Click on `Save`, the family variant will be updated

::: info
By default, the `common attributes` are all the attributes of the family, except the variant axes attributes (available for each variant level) and the attributes with the property `unique value` at `Yes` which are at the last variant level = product level (for example the `SKU` and `EAN`).
:::

## Edit a family variant

1.  In `Settings/Families`, choose a family and open the `Variants` tab
1.  Click on a family variant
1.  The family variant edit page is displayed
![Display a family variant](../img/Settings_Families_Variant_Display.png)
1.  You can move attributes or attribute groups by a drag and drop from the `common attributes` to the selected variant level or from the `variant attributes level 1` to the `variant attributes level 2`
1.  You can remove an attribute from a variant level by clicking on the cross
1.  A confirmation opens
![Display a family variant](../img/Settings_Families_Variant_EditRemove.png)
1.  Click on `OK` to confirm the remove
1.  When you have made all your updates on the family variant attributes, click on `Save`
![Display a family variant](../img/Settings_Families_Variant_Edit.png)

::: info
Moving attributes from `common attributes` to a variant level or from the `variant attributes level 1` to the `variant attributes level 2` means that the selected attributes will be managed at another level. If **these attributes were already filled in, those values will be kept and visible in the new level**. For instance, to keep our `Clothing` example, if you move the `Description` attribute from the `common attributes` to the `variant attributes level 1`, the description previously filled in will be kept for all variant products, but you will be able to change it at the product variant level 1. Basically, you will have the possibility to fill in a description for each color.
:::

::: warning
**You cannot move a variant axis** or **an attribute with the property `unique value` at `Yes`**.
:::

## Translate a family variant label

1.  In `Settings/Families`, choose a family and open the `Variants` tab
1.  Click on a family variant
1.  The family variant edit page is displayed
1.  Select the `Label translations` tab
1.  Translate the family variant label in the different enabled locales
![Display a family variant](../img/Settings_Families_Variant_Translate.png)
1.  Click on `Save`

## Delete a family variant

::: warning
**A family variant can be deleted if it does not contain any [product model](what-about-products-variants.html#what-is-a-product-model)**. If it has product models, an error message will be displayed. You will have to delete those products to be able to delete your family variant.
:::

1.  In `Settings/Families`, choose a family and open the `Variants` tab
1.  Place your mouse over the line of the family variant you want to remove in the grid, the button delete is prompted (trash can icon)
![Display a family variant](../img/Settings_Families_Variant_Delete.png)
1.  Click on the trash can icon, a confirmation opens
1.  Click on `Delete` to confirm the action in the confirmation message
