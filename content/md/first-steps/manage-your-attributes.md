---
id: manage-your-attributes
themes: catalog-settings
title: Manage your **attributes**
popular: false
ee-only: false
related: what-is-an-attribute
---

If you are not familiar with the concept of attributes, you can read our [What is an attribute?](what-is-an-attribute.html#mainContent) article.

# See your attributes

Go to `Settings/Attributes`, to see all the existing attributes or create a new one. 

## Attribute grid pagination

The attribute grid displays 25 attributes per page. To browse attributes pages, click on the page number you want to reach or use the filters.

![image](../img/Settings_Attributes.png)    

You can sort out attributes by clicking on the column header on the grid.

## Search on a attribute label

To quickly find an attribute, use the search bar available above the grid. Use your attributes label to find what you are looking for.

![image](../img/Settings-UsetheSearchBar.gif)

::: warning
If your attribute does not have any label translated, it will not pop in the search results. **Make sure your attribute has its labels translated.**
:::

## Filter on attributes

The attribute grid comes with a filter bar.

![image](../img/Settings_AttributesFilters.png)

1.  Enter your filter criteria
1.  The grid is automatically updated when a new filter is set

You can filter on the following attribute information:
- The attribute type
- The attribute group it belongs to
- The `scopable` property (one value per channel)
- The `localizable` property (one value per locale)
- The `smart` property (Yes/No) if there is a rule defined on this attribute _(Entreprise Edition only)_

::: info
By default, attributes will be displayed in the catalog locale selected in the product grid. If an attribute code appears into brackets like *[color]*, it means it has not been translated into the current locale.
:::

## Shortcut actions on each attribute

There is a set of actions available for each attribute. You can find on the right side of the grid. Buttons are visible when you hover your mouse over the line.

![image](../img/Settings-AttributesGridHover.png)

::: info
The shortcut actions are only displayed if you have been granted the appropriate rights. Please refer to [Manage your user roles](build-your-user-roles.html) to learn more about roles.
:::

# Create an attribute

Let's create an attribute! You will be able to select the **most appropriate attribute type to perfectly match your needs**.    
For example, you can choose to create a text attribute (free text) or a drop down list (simple or multi select) with a selection of values, to make sure users will select one of the predefined options. Create a `metric` attribute to fill in the weight/size/length... of your products.

To create an attribute in the PIM:
1. Go to `Settings/Attributes`
1. Click on the `Create attribute` button
  ![image](../img/Settings_AttributesCTAButton.png)
1. Select the attribute type you want to create
  ![image](../img/Settings_Attributes_Create1.png)
1. The attribute edit page is displayed. The following properties are required to finalise the creation of your attribute:
    - A **code** to identify the attribute
    - An **attribute group**: the attribute group the attribute will belong to
    - A **unique value** (Yes/No): if the value for this attribute is unique (field available or required depending on the attribute type)
    - A **value per channel** (Yes/No): Will your product attribute values differ on the channels?
    - A **value per locale** (Yes/No): Will your product attribute values differ on the locales?
    - **Locale specific**: to enable this attribute only to specific locales and not all of them
    - **Usable in grid**: whether or not the attribute can be displayed as a column or used as a filter in the product grid _(Community and Enterprise Edition)_ or in the proposal grid _(Enterprise Edition only)_
    - **Read only**: when enabled it prevents this attribute from being edited through the UI, it can only be updated through imports, API or rules _(Enterprise Edition only)_
    - **Validation parameters**: depending on the attribute type chosen (see [Validation for the different attribute types](#validation-for-the-different-attribute-types)).    
1. Click on `Save` to create your attribute.

The attribute is now created, you **can add a translation for each enabled locales** under the `Label translations` tab. If you need to edit some other attribute's property, please refer to the section [Edit attribute properties](manage-your-attributes.html#edit-attribute-properties)

::: tips
**Simple** and **multi select** attribute types **do rarely need to be localisable** since all their options can be translated in any enabled locales in the PIM.
:::

::: warning
Please note that the **following attribute codes cannot be used** in Akeneo PIM:    
`id`, `identifier`, `Identifier`, `associationTypes`, `category`, `categories`, `categoryId`, `completeness`, `enabled`, `family`, `Family`, `groups`, `associations`, `products`, `scope`, `treeId`, `values`, `label`, `LABEL`, `Label`, `parent`.    
We strongly recommend you to do not use any of these codes even if the letter case is different, for instance `Id`, `Groups`.
:::

::: warning
If you cannot access the attribute page or if you cannot add a new attribute, it is probably because you do not have the role permission to. Please refer to [Manage your user roles](build-your-user-roles.html) to learn more about roles.
:::

## Validation for the different attribute types

Each attribute has specific properties to add more control on attribute's values:
- **Date** attribute:
  - *Min date*: the earliest date that can be accepted
  - *Max date*: the latest date that can be accepted
- A short text field: **text** attribute:
  - *Maximum number of characters*: maximum number of characters that an attribute value can have
  - *Validation rule*: how the value should be validated: such as an URL, as an Email, or using a regular expression
- A long text field: **text area** attribute:
  - *Maximum number of characters*: maximum number of characters that an attribute value can have
  - *Enable WYSIWYG*: activates the WYSIWYG feature
- **File** and **image** attributes:
  - *Maximum size allowed in MB*
  - *Allowed extensions files*: png, jpg, pdf, doc, etc ...
- **Metric** attribute:
  - *Allow negative values* for the attribute
  - *Allow decimal values* for this attribute
  - *Minimum value*: the smallest value allowed
  - *Maximum value*: the largest value allowed
  - *Metric family*: family measurement unit to be used for the attribute (weight, dimensions, area, etc. )
  - The *default unit of measurement*
- **Price** attribute:
  - *Allow decimals* for the attribute values
  - *minimum value*: the smallest allowed value
  - *maximum value*: the largest allowed value
- **Number** attribute:
  - *Allow negative values* for the attribute
  - *Allow decimals*
  - *Minimum value*: the smallest allowed value
  - *Maximum value*: the largest allowed value

For instance, you can add a regular expression on a text field to use it for EAN codes. As they contain 13 digits, we can add a validation rule based on the following regular expression: `/^[0-9]{13}$/`

![Validation parameters](../img/Settings_EAN.png)

::: info
The **simple** and **multi select** attribute types, as well as **Yes/No** (boolean) attribute have no specific validation properties.
:::

# Edit attribute properties

To edit an attribute:
1.  Go to `Settings/Attributes`
2.  Select the attribute to edit in the grid and click on the line or on the edition shortcut
![image](../img/Settings_AttributesModifyAnAttributes.gif)
3.  Change the properties and click on `Save`
![image](../img/Settings_Attributes_Properties.png)

You can change the following properties of an attribute:
- **Attribute group**: the attribute group the attribute belongs to
- **Labels**: these are labels that appear when they are displayed in the PIM
- **Locale specific**: if it must apply to specific locales not all of them
- **Usable in grid**: whether or not the attribute can be displayed as a column or used as a filter in the product grid _(Community and Enterprise Edition)_ or in the proposal grid _(Enterprise Edition only)_
- **Read only**: when enabled it prevents this attribute from being edited in the UI, it can only be updated through imports or rules _(Enterprise Edition only)_
- **Validation parameters** (see [Validation for the different attribute types](#validation-for-the-different-attribute-types))
- **Options** (for simple or multi select attribute types only): these are predefined values that the user can select

::: warning
After an attribute is created, it is not possible to change the following properties:
- its **code**
- its **type**
- the **unique value** property
- the **value per channel** property
- the **value per locale** property
:::

# Manage attribute options

You can define option values for simple and multi select attribute types. Options can be added, edited, sorted or deleted.

![image](../img/Settings_Attributes_Options.png)

## See attribute options

To see your attribute options, remove an option or add a new one:
1. Go to `Settings/Attributes`
1. Select the attribute to edit, then click on the relevant row in the attribute datagrid
1. Click on the `Options` tab

## Add a new option

1. Click on `Add an option` button
1. Give a unique code to the new option
1. Click on the green checkmark at the end of the option line to confirm the creation or on the cross to cancel the option's creation.

![image](../img/Settings-AttributesAddOption.gif)

The option is instantly created.

::: warning
You can **add and update many lines at once but you will have to save each line before leaving the page**.
You cannot use the main `Save` button to record your new options.
:::

## Edit option labels

1.  Click on the small pencil icon change the option label(s) or code
1.  Click on the green checkmark to confirm or on the cross to cancel

![image](../img/Settings_Attributes_OptionsEdit.png)

## Sort out options

Options can be **automatically sorted by alphabetical order** using the toggle button `Sort automatically options by alphabetical order` on the top of the attribute's options page.
If you want to define your own sort, you **can drag and drop option rows to reorder options manually**.

![image](../img/Settings_AttributesDraganddropOption.gif)

## Delete an option

Click on the `Delete` button to remove an option

![image](../img/Settings_Attributes_OptionsDelete.png)

::: warning
A deleted option can no longer be used as a value for the attribute of a product. If a product had this value, it will be removed from the product's attribute.
:::

::: warning
**If an attribute option is used in a variant product or a product model as a variant axis value, the option cannot be removed**, an error message will be displayed. Please refer to the [what is a family variant](what-about-products-variants.html#what-is-a-family-variant) article for more details about variant axes.
:::

::: ee
An option that is used by a published product cannot be deleted. Unpublish the product to be able to delete the option.
:::

# Manage rules on attributes _(EE only)_

If you are not familiar with the concept of rules, you can read our [What is a rule?](what-is-a-rule.html) article.   

If a rule applies to your attribute, this rule will be visible under the `Rules` tab.

![image](../img/Settings_Attributes_Rules.png)

The `Rules` screen is composed of several information:
- **Rule's code**: the name of the rule imported
- **Rule's condition(s)**: the conditions to apply the rule, starting with "If"
- **Rule’s action(s)**: the actions to do if the product matches the condition(s), starting with "Then"
- **Number of affected products** (if calculated): the number of products that are impacted by the rule (this calculation can be run from the `Settings/Rules` page, see the dedicated section [Calculate the number of affected products for rules](manage-your-rules.html#calculate-the-number-of-affected-products-for-rules).

The rules have to be read from left to right: conditions and then actions.   

Like on the `Settings/Rules` page, you can execute or delete rules from the `Rules` tab.

::: info
All active rules can be seen from the `Settings/Rules` page. See our [Get started with the rules engine](manage-your-rules.html#calculate-the-number-of-affected-products-for-rules) to learn every thing about rules.
:::

# Check the attribute history

**All changes made on attributes are saved and visible under the attribute’s history**, for example: a label change, a property change, etc.

For each change, an attribute version is created. The following information is tracked down for each version:
- The person or system that made the changes
- The date and time (up to seconds) of the changes
- The old value and the new value of each modified field

To view the attribute versions:
1.  Open and edit the attribute page
1.  Click on the `History` tab and the list of version will be displayed

::: ee
Unlike products you cannot restore or revert an attribute’s version.
:::

# Delete an attribute

::: warning
Please first delete your attribute from the families it is used in and then from the products. After this, you will be able to delete safely your attribute.
:::

You have two ways to remove an attribute:

Through the attribute edit form:
1. Select the attribute to delete
1. Click on `...` for other actions and then `Delete` on the top right corner
  ![image](../img/Settings_Attributes_Delete.png)
1. Confirm the action in the popin

Through the `Delete` shortcut in the grid:
  ![image](../img/Settings_Attributes_GridDeleteHover.png)
1. Select the attribute you want to remove from the attribute grid
1. Place your mouse over the line of attribute in the grid, the button `Delete` is prompted (trash can icon)
1. Click on the trash can icon
1. Confirm the action in the popin

**The attribute and all its relevant information will be deleted in Akeneo PIM. Once you have confirmed the action, it cannot be reverted.**

::: ee
An attribute used in a published product cannot be deleted.
:::
