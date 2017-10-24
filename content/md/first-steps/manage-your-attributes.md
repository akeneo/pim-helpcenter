---
id: manage-your-attributes
themes: catalog-settings
title: Manage your **attributes**
popular: false
ee-only: false
related: what-is-an-attribute
---

# Overview

To fit the PIM application to your needs, Akeneo enables you to define attributes. For example, if you need to capture data about the weight of your products, you can add an attribute type as ‘metric’.

You will be able to select the most appropriate attribute type for your needs (see [Create an attribute](#create-an-attribute)). For example, you can choose to create a field as a text, in which users can write what they want, or as a drop down list (simple or multi select) with a selection of values, forcing users to select from a list of predefined options.

Once you have created a new attribute (see [Create an attribute](#create-an-attribute)), you’ll need to assign it to one or more families to make it available to users.

To learn more on how the attributes and families interact, please refer to [Add an attribute to a family](/articles/manage-your-families.html#manage-attributes-in-a-family).

::: info
Attributes are always **optional data fields**. This means that all attributes can have no value for the products except the attribute which identifies a product (ex: SKU), and is therefore mandatory with a value when you create a product.
:::

# List attributes

To start, go to `Settings > Attributes`. From this page, you will have several options to work with the datagrid of attributes as described below.

## Attribute grid pagination

The attribute grid displays 25 attributes per page. To browse attribute's pages, click on the page number you want to reach.

![image](../img/Settings_Attributes.png)

## Search on the attribute label

To quickly find an attribute, you can use the search bar to search on the attribute label.

![image](../img/Settings-UsetheSearchBar.gif)

::: warning 
If your attribute does not have any label translated yet, it will not pop in the search results. Make sure your attribute has its labels translated!
:::

## Filter on attributes

The attribute datagrid comes with a filter bar.

![image](../img/Settings_AttributesFilters.png)

1.  Enter your filter criteria
1.  The grid is automatically updated when a new filter is set

You can filter on the following attribute information:
- The attribute type
- The attribute group it belongs to
- The “scopable” property (one value per channel)
- The “localizable” property (one value per locale)

::: ee
You can also filter on the property "smart". The attribute is smart if there is a rule defined on this attribute.
:::

::: info
Labels filters are localised: If an attribute has a label in the locale preference, then this wording is used. If there is no available language, then the attribute code will be displayed in brackets. For example: [COLOR].
:::

## Sort out attributes

To sort out the attributes, you can click on the column header in the datagrid.

## Shortcut actions on each attribute

There is a set of actions available for each attribute, that you can find in the last column of the grid. The buttons are prompted when you hover your mouse over the line.

![image](../img/Settings-AttributesGridHover.png)

::: info
The shortcut actions are only displayed if you have been granted the appropriate rights.
:::

# Create an attribute

To create an attribute from the PIM user interface (without going through imports), you must have a specific permission. If you do not have it, please contact your administrator.

To create an attribute in the PIM:
1. Go on `Settings/Attributes`
1. Click on the `Create attribute` button
  ![image](../img/Settings_AttributesCTAButton.png)
1. Select the attribute type you want to create
  ![image](../img/Settings_Attributes_Create1.png)
1. The attribute edit page is displayed. The following properties are required to create an attribute:
    - A **code** to identify the attribute
    - An **attribute group**: the attribute group the attribute will belong to
    - **Unique value** (Yes/No): if the values for this attribute are unique (will be available or required according to the attribute type)
    - **A value per channel** (Yes/No): Yes if your attribute values depend on the channels
    - **A value per locale** (Yes/No): Yes if your attribute values depend on the locales
    - **Locale specific**: if it must apply to specific locales not all of them
    - **Usable in grid**: whether or not the attribute can be displayed as a column or used as a filter in the product grid
    - **Validation parameters**: depending on the attribute type chosen (see [Validation for the different attribute types](#validation-for-the-different-attribute-types))
1. Then click on `Save`

::: ee
The property "read only" prevents this attribute from being edited in the UI, it could be updated only through imports or rules.
:::

The attribute has been created and some properties can be added or amended over time.


::: warning
Please note that the following attribute codes cannot be used in Akeneo PIM:

id, associationTypes, category, categories, categoryId, completeness, enabled, family, groups, associations, products, scope, treeId, values, parent
:::


# Edit attribute properties

You can change the following properties of an attribute:
- **Attribute group**: the attribute group the attribute belongs to
- **Labels**: these are labels that appear when they are displayed in the PIM
- **Locale specific**: if it must apply to specific locales not all of them
- **Usable in grid**: whether or not the attribute can be displayed as a column or used as a filter in the product grid
- **Validation parameters** (see [Validation for the different attribute types](#validation-for-the-different-attribute-types))
- **Options** (for simple or multi select attribute types only): these are predefined values that the user can select

::: ee
- Read only: to prevent this attribute from being edited in the UI, it could be updated only through imports or rules.
:::

To edit an attribute:
1.  Go to `Settings/Attributes`
2.  Select the attribute to edit in the datagrid and click on the line or on the shortcut
![image](../img/Settings_AttributesModifyAnAttributes.gif)
3.  Change the properties and click on `Save`
![image](../img/Settings_Attributes_Properties.png)

## Validation for the different attribute types

Each attribute has specific properties to validate values:
- **Date**:
  - Min date: the earliest date that can be accepted
  - Max date: the latest date that can be accepted
- A short text field: **text**
  - Maximum number of characters: maximum number of characters that an attribute value can have
  - Validation rule: how the value should be validated: such as an URL, as an Email, or using a regular expression
- A long text field: **text area**
  - Maximum number of characters: like for the previous text attribute type
  - Enable WYSIWYG: activates the WYSIWYG feature
- **File** and **image**:
  - Maximum size allowed in MB
  - Allowed extensions files: png, jpg, pdf, doc, etc ...
- **Metric**:
  - Allow negative values for the attribute
  - Allow decimal values for this attribute
  - Minimum value: the smallest value allowed
  - Maximum value: the largest value allowed
  - Metric family: family units of measurement to be used for the attribute (weight, dimensions, area, etc. )
  - The default unit of measurement
- **Price**:
  - Allow decimals for the attribute values
  - minimum value: the smallest allowed value
  - maximum value: the largest allowed value
- **Number**:
  - Allow negative values for the attribute
  - Allow decimals
  - Minimum value: the smallest allowed value
  - Maximum value: the largest allowed value

::: info
The **simple** and **multi select** attribute types, as well as **Yes/No** attribute have no specific properties to validate the attributes.
:::

## Manage attribute options

You can define values for simple and multi select attribute types. Options can be added, modified, sorted, or deleted.

![image](../img/Settings_Attributes_Options.png)

To add new values, click on `Add an option` and save.
To edit values, use the small pencil icon.

::: warning
You can add and update many lines at once but you will have to save each line before leaving the page.
You cannot use the main Save button to record your new options.
:::

### List attribute options

To edit an attribute option:
1. Go to `Settings/Attributes`
1. Select the attribute to edit, then click on the relevant row in the attribute datagrid
1. Click on the `Options` tab

### Add an option

1. Click on `Add an option`
1. Give a unique code to the new option
1. Click on the confirm or cancel button

![image](../img/Settings-AttributesAddOption.gif)

The option is instantly created.

### Edit option labels

1.  Click on the small pencil icon change the option labels
1.  Click on the button to confirm or on the button to cancel

![image](../img/Settings_Attributes_OptionsEdit.png)

### Sort out options

1.  Drag and drop the rows to reorder options manually via the icon at the beginning of each row of options.

![image](../img/Settings_AttributesDraganddropOption.gif)

### Delete an option

1.  Click on the `delete` button to remove an option

![image](../img/Settings_Attributes_OptionsDelete.png)

::: warning
A deleted option can no longer be used as a value for the attribute for a product. If a product had this value, the product has no value anymore for the attribute.
:::

::: ee
An option that is used by a published product cannot be deleted.
:::


## Manage rules on attributes (EE only)

You can find the rules applied on an attribute under the `Rules` tab.

![image](../img/Settings_Attributes_Rules.png)

The display screen is composed of several elements:
- The rule code
- The conditions which are displayed below each other starting by “If”
- The rule’s action beginning with “Then”
- The number of affected products is the number of products which are selected by the rules conditions

The rules have to be read from left to right: conditions first, then actions.

::: info
A dedicated screen lists all the rules (`Settings/Rules`), the rules can be applied on attributes, categories, system attributes.
:::

Like on `Settings/Rules`, you can perform several actions from this grid:
- Execute rules
- Delete rules
- Calculate the number of affected products by the rule

# Check the attribute history

Changes made on attributes are recorded and visible under the attribute’s history. For example: label change, a property change, etc.

For each change, an attribute version is created. The following information is tracked down for each version:
- The person or system that generated changes
- The date and time (up to seconds) at which the changes took place
- The old value and the new value of each modified field

To view the attribute versions:
1.  Open and edit the attribute page
1.  Click on the `History` tab and the list of version will be displayed

::: ee
Unlike products you cannot restore or revert an attribute’s versions.
:::

# Delete an attribute

::: warning
You can delete attributes, deleting an attribute means that all information regarding this attribute will be removed from PIM. Once you have confirmed the action, the action cannot be reverted.
:::

You have two ways to proceed to remove an attribute.
Through the attribute edit form:
1. Select the attribute to delete
1. Click on `...` for other actions and then `Delete` on the top right corner
  ![image](../img/Settings_Attributes_Delete.png)
1. Confirm the action in the popin

Through the Delete shortcut in the grid:
  ![image](../img/Settings_Attributes_GridDeleteHover.png)
1. Select the attribute you want to remove from the attribute datagrid
1. Place your mouse over the line of attribute in the grid, the button delete is prompted (trash can icon)
1. Click on the trash can icon
1. Confirm the action in the popin

**The attribute and all its relevant information will be deleted in Akeneo PIM.**

::: ee
An attribute used by a published product cannot be deleted.
:::
