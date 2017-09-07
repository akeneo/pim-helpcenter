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

You will be able to select the most appropriate attribute type for your needs, please refer to the section below. For example, you can choose to create a field as a text, in which users can write what they want, or as a drop down list with a selection of values, forcing users to select from a list of predefined options.

Once you have created a new attribute (see below), you’ll need to assign it to one or more families or directly to a product to make it available to users.

To learn more on how the attributes and products interact, please refer to “Adding attributes to a product” or “Add attributes to a family” section.

Attributes are always optional data fields. This means that all attributes can be with no values for the products except the SKU, which identifies a product, and is therefore mandatory with a value entered as of you create a product.

# List attributes

To start, go to Settings > Attributes. From this page, you will have several options to work with the datagrid of attributes as described below.

## Attribute’s grid pagination

The attribute’s grid displays between 10 and 100 attributes per page. By default, the grid displays 25 attributes per page, you can change this by clicking on «View per page» and select the number of attributes you wish to see per page.

![image](../img/dummy.png)

In order to navigate through the different pages of the attribute datagrid, the navigation buttons “next” and “previous” are available above the grid. Eventually, the page number is displayed at the center. You can directly go to a specific page by amending the field of the ongoing page number.

## Filter on attributes

The attribute datagrid comes with a filter bar.

![image](../img/dummy.png)

1.  Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.
1.  The grid is automatically updated when a new filter is added.

Labels filters are localised: If an attribute has a label in the locale preference, then this wording is used. If there is no available language, then the attribute code will be displayed in brackets. For example: [COLOR].

Filters can be sorted out on the following attribute information:
- The code,
- The label,
- The attribute type,
- The “scopable” property,
- The “localizable” property,
- The group it belongs to,
- If there is a set of conditions and actions to execute the rule for a smart attribute (Enterprise Edition only).

## Sort out product attributes

To sort out the attributes, you can click on the column header in the datagrid.

::: info
The following type of information cannot be used to sort out the list: the attribute type and if it is a smart attribute (an attribute affected by a rule).
:::

## Shortcut actions on each attribute

There is a set of actions available for each attribute, that you can find in the last column of the grid. The buttons are prompted when you hover your mouse over the line.

![image](../img/dummy.png)

::: info
The shortcut actions are only displayed if you have been granted the appropriate rights
:::

## Create an attribute

To create an attribute from the PIM user interface (without going through imports), you must have a specific permission. If you do not have it, please contact your administrator.

To create an attribute in the PIM:
1.  Go on Settings/Attributes,
1.  Click on the “Create attribute” button.

![image](../img/dummy.png)

1.  Select the attribute type you want to create.

![image](../img/dummy.png)

1.  The attribute edit page is displayed. The following properties are required to create an attribute:
    - A code
    - A value per channel (Yes/No): use this field if your attribute values depend on the channels.
    - A value per locale (Yes/No): use this field if your attribute values depend on the locales.
    - Unique value (will be available or required according to the attribute type)
    - Locale specific: if it must apply to specific locales not all of them.
    - Read only attribute (Enterprise Edition only): to prevent this attribute from being edited in the UI and only through imports or rules.
    - Validation parameters: depending on the attribute type chosen
    - Attribute group: the attribute group the attribute will belong to
    - Usable as a grid filter (whether or not the attribute can be displayed as a column or used as a filter in the product’s grid)
1.  Then click on “Save”

The attribute has been created and some properties can be added or amended over time.


::: warning
Please note that the following attribute codes cannot be used in Akeneo PIM:

id, associationTypes, category, categories, categoryId, completeness, enabled, family, groups, associations, products, scope, treeId, values
:::


# Edit attribute properties

You can change the following properties of an attribute:
- Labels: these are labels that appear when they are displayed in the PIM.
- Specific properties to attributes (see below)
- Options (for simple- or multi-select attribute types only): these are predefined values that the user can select
- The attribute group: the group the attribute belongs to.

To edit an attribute:
1.  Go to Settings/Attributes.
1.  Select the attribute to edit in the datagrid and click on the line or on the shortcut.
![image](../img/dummy.png)
1.  Change the properties and click on Save.
![image](../img/dummy.png)

## Validation for the different attribute types

Each attribute has specific properties to validate values:
- Date:
  - Min date: the earliest date that can be accepted
  - Max date: the latest date that can be accepted
- A short text field: text
  - Maximum number of characters: maximum number of characters that an attribute value can have.
  - Validation rule: how the value should be validated: such as an URL, as an Email, or using a regular expression.
- A long text field: text area
  - Maximum number of characters: like for the previous text attribute type
  - Enable WYSIWYG: activates the WYSIWYG feature.
- File and picture:
  - Maximum size allowed in MB
  - Allowed extensions files: png, jpg, pdf, doc, etc ...
- Metric:
  - Allow negative values for the attribute
  - Allow decimal values for this attribute
  - Minimum value: the smallest value allowed
  - Maximum value: the largest value allowed
  - Metric family: family units of measurement to be used for the attribute (weight, dimensions, area, etc. )
  - The default unit of measurement
- Price:
  - Allow decimals for the attribute values
  - minimum value: the smallest allowed value
  - maximum value: the largest allowed value
- Number
  - Allow negative values for the attribute
  - Allow decimals
  - Minimum value: the smallest allowed value
  - Maximum value: the largest allowed value

The simple and multi select attribute types, as well as boolean attribute (yes / no) have no specific properties to validate the attributes.

## Manage attribute options

You can define values for simple and multi-select attribute types. Options can be added, modified, sorted, or deleted.

![image](../img/dummy.png)

To add new values, click on «Add an option» and save it using the small pencil icon. You can add many lines at once but you wil have to save each line before leaving the page.

You cannot use the main Save button to record your new options.

### List attribute options

To edit an attribute option:
1. Go to Settings/Attributes.
1. Select the attribute to edit, then click on the relevant row in the attribute datagrid.
1. Click on the “Values” tab.

### Add an option

1. Click on “Add an option”.
1. Give a unique code to the new option.
1. Click on the confirm or cancel, button.

![image](../img/dummy.png)

The option is instantly created.

### Edit option labels

1.  Click on the “Edit” button to change the option code. A code is unique, it means that all the attribute options have different codes.
1.  Click on the button to confirm or on the button to cancel.

![image](../img/dummy.png)

### Sort out options

1.  Drag and drop the rows to reorder options manually via the icon at the beginning of each row of options.

![image](../img/dummy.png)

### Delete an option

1.  Click on the “delete” button to remove an option.

![image](../img/dummy.png)

A deleted option can no longer be used as a value for the attribute for a product. If a product had this value, the product has no value anymore for the attribute.

::: ee
An option that is used by a published product cannot be deleted.
:::


## Manage rules on attributes (EE)

You can find the rules applied on an attribute under the “Rules” tab.

![image](../img/dummy.png)

The display screen is composed of several elements:
- The rule code
- The conditions which are displayed below each other starting by “If”.
- The rule’s action beginning with “Then”.
- The number of affected products is the number of products which are selected by the rules conditions.

![image](../img/dummy.png)

The rules have to be read from left to right: conditions first, then actions.

::: info
A dedicated screen lists all the rules (Settings/Rules), the rules can be applied on attributes, categories, system attributes.
:::

Like on Settings/Rules, you can perform several actions from this grid:
- execute rules
- delete rules
- calculate the number of affected products by the rule.

# Check the attribute history

Changes made on attributes are recorded and visible under the attribute’s history. For example: label change, a property change, etc.

For each change, an attribute version is created. The following information is tracked down for each version:
- The person or system that generated changes,
- The date and time (up to seconds) at which the changes took place,
- The old value and the new value of each modified field.

To view the attribute versions:
1.  Open and edit the attribute page,
1.  Click on the “History” tab and the list of version will be displayed.

Unlike products you cannot restore or revert an attribute’s versions (Enterprise Edition only).

# Delete an attribute

You can delete attributes, deleting an attribute means that all information regarding this attribute will be removed from PIM. Once you have confirmed the action, the action cannot be reverted.

You have two ways to proceed to remove an attribute.
Through the attribute edit form:
- Selet the attribute to delete,
- Click on “Delete” on the top right corner,
  ![image](../img/dummy.png)
- Confirm the action in the popin.

Throught the Delete shortcut in the grid:
  ![image](../img/dummy.png)
- Select the attribute you want to remove from the attribute datagrid.
- Place your mouse over the line of attribute in the grid, the button delete is prompted («trash» can icon),
- Click on the icon.
- Confirm the action in the popin.

The attribute and all its relevant information will be deleted in Akeneo PIM.

::: ee
An attribute used by a published product cannot be deleted.
:::
