---
id: manage-your-attributes
themes: catalog-settings
title: Manage your **attributes**
popular: false
ee: false
related: what-is-an-attribute
---

If you are not familiar with the concept of attributes, you can read the [What is an attribute?](what-is-an-attribute.html#mainContent) article.

# How to create an attribute?

Akeneo proposes several types of attributes. Discover all attributes available in the [Introduction to Akeneo attribute types](what-is-an-attribute.html#definition-of-an-attribute) article. Make sure you pick the **most appropriate attribute type that perfectly matches your needs**.    
For example, if you want to make sure that your PIM users will select one option from a list of predefined options, select a simple select attribute type instead of a free text field. Create a `Measurement` attribute to add a weight/size/length... for your products.

To create an attribute in Akeneo PIM:
1. Go to `Settings/Attributes`
1. Click on the `Create attribute` button:
  ![image](../img/Settings_AttributesCTAButton.png)
1. Select the attribute type you want:
  ![image](../img/Settings_Attributes_Create2.png)
1. The attribute edit form is displayed, fill in the following properties:  
    Under `General Parameters`:
    - A **code** (required) to identify the attribute.
    - A **type** based on the attribute type selected in the previous screen.
    - An **attribute group** (required) to which the new attribute will be added.    
In addition to these required attributes, you can select the following properties:
    - **Unique value** (Yes/No): enable this property if the value of this attribute must be unique. By default, it is set to yes for `Identifier` attribute type.
    - **Value per channel** (Yes/No): enable this property if you plan to have different product values per channel.
    - **Value per locale** (Yes/No): enable this property if you plan to have different product values per locale.
    - **Read only** (Yes/No) **_(Enterprise Edition only)_**: to prevent this attribute from being edited through the UI, it will only be updated through imports, API or rules
    - **Usable in grid** (Yes/No): if you want to filter on this attribute in the product grid or use it as a column.
    - **Locale specific**: this attribute will only be available for some locales.      
Under `Validation Parameters`, add validations to control your data:
    - **Validation parameters**: each attribute comes with validation parameters (see [Add attributes validation parameters](#add-attributes-validation-parameters)).    
1. Click on `Save` to create your attribute.

:::warning
**Some attribute properties cannot be edited afterwards, such as `code`, `unique value`, `value per channel` and `value per locale`** make sure they fit your needs!
:::

::: warning
Please note that the **following attribute codes cannot be used** in Akeneo PIM:    
`id`, `ID`,`identifier`, `Identifier`, `associationTypes`, `category`, `categories`, `categoryId`, `completeness`, `enabled`, `family`, `Family`, `*_groups`, `associations`, `*_products`, `scope`, `treeId`, `values`, `label`, `LABEL`, `Label`, `parent`. We strongly recommend you not to use any of these codes even if the letter case is different, for instance `Id`, `Groups`.
:::

## Add attributes validation parameters

Each attribute has specific properties to add more control on attribute's values:
- **Date attribute**:
  - *Min date*: the earliest date that can be accepted
  - *Max date*: the latest date that can be accepted
- **Text attribute**:
  - *Maximum number of characters*: maximum number of characters that an attribute value can have
  - *Validation rule*: how the value should be validated: such as an URL, as an Email, or using a regular expression
- **Text area attribute**:
  - *Maximum number of characters*: maximum number of characters that an attribute value can have
  - *Enable WYSIWYG*: activates the WYSIWYG feature
- **File attribute** and **image attribute**:
  - *Maximum size allowed in MB*
  - *Allowed extensions files*
- **[Measurement attribute](what-about-measurements.html)**:
  - *Allow negative values* for the attribute
  - *Allow decimal values* for this attribute
  - *Minimum value*: the smallest value allowed
  - *Maximum value*: the largest value allowed
  - *Measurement family*: the measurement family used for the attribute (weight, length, area, etc. )
  - The *default measurement unit*: the unit selected by default to enter a value for the measurement attribute
- **Price attribute**:
  - *Allow decimals* for the attribute values
  - *minimum value*: the smallest allowed value
  - *maximum value*: the largest allowed value
- **Number attribute**:
  - *Allow negative values* for the attribute
  - *Allow decimals*
  - *Minimum value*: the smallest allowed value
  - *Maximum value*: the largest allowed value
- **Reference entity single link attribute** & **reference entity multiple links attribute _(Enterprise Edition only)_**:
  - *Related reference entity*: the reference entity linked to this attribute
- **Reference data simple select attribute** & **reference data multi select**:
  - *Reference data type*: choose an existing reference data value to link to your attribute
- **Asset collection attribute _(Enterprise Edition only)_**:
  - *Related asset family*: the asset family linked to this attribute
- **Table attribute _(Enterprise and Growth Editions only)_**: depending on your column types, there can be several validation parameters:
  - `text` column type: *Maximum number of characters* (it must be less than 100 characters)
  - `number` column type:   
    - *Allow decimals*
    - *Minimum value*: the smallest allowed value
    - *Maximum value*: the largest allowed value

For the text attribute type, you can add a regular expression to validate the content of the input. For instance, to control the right format of a EAN13 code, add a validation rule based on the following regular expression: `/^[0-9]{13}$/`

![Validation parameters](../img/Settings_EAN.png)

::: info
The **simple** and **multi select** attribute types, as well as **Yes/No** (boolean) attribute have no specific validation properties.
:::

## Translate your attribute labels

Once your attribute is created, translate it! You can add a **translation for each enabled locales** under the `Label translations` tab. If you need to edit some other attribute's property, please refer to the section [Edit attribute properties](manage-your-attributes.html#edit-attribute-properties).

::: tips
**Simple** and **multi select** attribute types **rarely need to be localisable** since all their options can be translated in any enabled locales in the PIM.
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
- **Validation parameters** (see [Add attributes validation parameters](#add-attributes-validation-parameters))
- **Options** (for simple or multi select attribute types only): these are predefined values that the user can select

# Find your attributes

Go to `Settings/Attributes`, to see all the existing attributes or create a new one.

The attribute grid displays 25 attributes per page. To browse attributes pages, click on the page number you want to reach or use the filters.

![image](../img/Settings_Attributes.png)    

You can sort out attributes by clicking on the column header on the grid.

## Search on the grid

### On its label

To quickly find an attribute, use the search bar available above the grid. Use your attributes label to find what you are looking for.

![image](../img/Settings-UsetheSearchBar.gif)

::: warning
If your attribute does not have any label translated, it will not pop in the search results. **Make sure your attribute has its labels translated.**
:::

### Use filters

Other filters are available on the right side of the screen, you can search attributes based on their code, type...

![image](../img/Settings_AttributesFilters.png)

1.  Enter your filter criteria
1.  The grid is automatically updated when a new filter is set

You can filter on the following attribute information:
- The attribute code
- The attribute type
- The attribute group it belongs to
- The family it belongs to
- The `scopable` property (one value per channel)
- The `localizable` property (one value per locale)
- The `smart` property (Yes/No) if there is a rule impacting this attribute _(Enterprise Edition only)_
- The `quality` status (Good/To improve) if there are spelling typos to correct _(Enterprise Edition only)_

::: info
By default, attributes will be displayed in the catalog locale selected in the product grid. If an attribute code appears into brackets like *[color]*, it means it has not been translated into the current locale.
:::

## Shortcut actions on each attribute

There is a set of actions available for each attribute. You can find on the right side of the grid. Buttons are visible when you hover your mouse over the line.

![image](../img/Settings-AttributesGridHover.png)

::: info
The shortcut actions are only displayed if you have been granted the appropriate rights. Please refer to [Manage your user roles](build-your-user-roles.html) to learn more about roles.
:::

# Manage simple and multi selects attribute options

You can define option values for simple and multi select attribute types. Options can be added, edited, sorted or deleted.

![image](../img/Settings_Attributes_Options.png)

:::tips
Leading and trailing spaces are not allowed for attribute options and will be automatically removed when entering an option that contains one.
:::

## Find the attribute options

To manage your simple and multi selects attribute options, remove an option or add a new one:
1. Go to `Settings/Attributes`
1. Select the attribute to edit, then click on the relevant row in the attribute datagrid
1. Click on the `Options` tab

## Add a new option

1. Click on `Add an option` button
1. Give a unique code to the new option
1. Click on the `Done` button

The option is instantly created.

::: warning
You cannot use the main `Save` button to record your new options.
:::

## Edit option labels

1.  Click on the option name in the left column of the screen
1.  Edit the labels you wish to update
1.  Click on the `Done` button


## Delete an option

1.  Roll-over the option name in the left column of the screen  
1.  Click on the cross at the end of the blue line


::: warning
A deleted option can no longer be used as a value for the attribute of a product. If a product had this value, it will be removed from the product's attribute.
:::

::: warning
**If an attribute option is used in a variant product or a product model as a variant axis value, the option cannot be removed**, an error message will be displayed. Please refer to the [what is a family variant](what-about-products-variants.html#what-is-a-family-variant) article for more details about variant axes.
:::

::: ee
An option that is used by a published product cannot be deleted. Unpublish the product to be able to delete the option.
:::

## Sort options

Options can be **automatically sorted by alphabetical order** using the toggle button `Sort automatically options by alphabetical order` on the top of the attribute's options page.    
If you want to define your own sort, you **can drag and drop option rows to reorder options manually**.

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

There are two ways to remove an attribute:
* Through the attribute edit form
* Through the delete shortcut in the grid

When you remove an attribute, all the product values set for this attribute will be cleared. If you want to keep them, please read [the dedicated section](manage-your-attributes.html#delete-an-attribute-and-keep-the-related-data).

::: warning
If you cannot access the attribute page or if you cannot add/delete an attribute, it is probably because you do not have the permission to.  
Please refer to [Manage your user roles](build-your-user-roles.html) to learn about roles.
:::

::: warning
If you are using an Akeneo connector, make sure your data mapping is updated in the connector to maintain accurate data consistency.
:::

::: ee
An attribute that is used in a published product cannot be deleted. You first need to unpublish the product and then delete the attribute.
:::

## Delete an attribute without keeping the related data

### Through the attribute edit form

1. Go to `Settings` / `Attributes`
1. Select the attribute you want to delete
1. Click on `...` for other actions and then `Delete` on the top right corner
  ![Attribute deletion - trash can](../img/Settings_Attributes_Delete.png)
1. Confirm the action in the popin

### Through the delete shortcut in the grid

1. Go to `Settings` / `Attributes`
1. Select the attribute you want to remove from the attribute grid
1. Place your mouse over the line of the attribute in the grid, a trash can icon appears
  ![Attribute deletion - hover](../img/Settings_Attributes_Grid_Delete_Hover.png)
1. Click on it
1. Confirm the action in the popin

::: warning
The attribute and all its relevant information will be deleted in Akeneo PIM. Once you have confirmed the action, it cannot be reverted.
:::

## Delete an attribute and keep the related data

If you need to change an attribute property (to make it scopable and/or localizable), or if you want to change the attribute type (from a simple text to a text area for instance), you need to delete the attribute.  
Before doing so, **if you plan to create another attribute using the same code**, and if you want to keep the data already input for this attribute, you will need to:
1. [Export the product information](manage-your-attributes.html#first-step-export-the-product-information)
1. [Export the families and/or family variants](manage-your-attributes.html#second-step-export-the-families-andor-family-variants)
1. [Delete the attribute](manage-your-attributes.html#third-step-delete-the-attribute)
1. [Create a new attribute](manage-your-attributes.html#fourth-step-create-the-new-attribute)
1. [Import back the families and/or family variants](manage-your-attributes.html#fifth-step-import-back-the-families-andor-family-variants)
1. [Import the product information back](manage-your-attributes.html#sixth-step-import-the-product-information-back)

This walkthrough will help you go through the different steps.

### First step: export the product information

::: info
Before you begin, make sure you know how to configure a new export profile. If you need more help, please read our page on [How to create a new product export profile](#product-export-builder.html#create-a-new-product-export-profile).
:::

1. Go to `Exports` and click on `Create export profile`
1. Define a code and a label
1. Select the job in the `job` field, whether you want to export products or product models (if you need to export both, you will need to create an export profile for each)
![Select the job to export your data](../img/Delete-Attribute_Job_Export-profile.png)
1.  In `Content`, filter the products by clicking on `Add attribute` and select the attribute you want to delete
1.  Set the value to `Is not empty`
![Select the appropriate attribute](../img/Delete-Attribute_Job_Export-profile_Content.png)
1. In `Global settings`, make sure the option `Export with labels` is not activated
1. Check the different other options (channel, locales, format...) to refine your export and click on `Save`
1.  Click on `Export now`

::: warning
If you plan to delete a simple or multi select attribute, and if you want to keep their data, you will also need to export the attribute options through the Akeneo default export profile named `Demo XLSX attribute option export`. If this profile is not available in your PIM, please go back to the third step, and instead of selecting the product or the product model job, select the attribute options export.
:::
![Export attribute options](../img/Delete-Attribute_Job_Export-Attribute-options.png)

### Second step: export the families and/or family variants
1. Go to `Exports` and click on `Create export profile`
1. Define a code and a label
1. Select the job in the `job` field, whether you want to export the families or the family variants
1. Click on `Save` and on `Export now`

### Third step: delete the attribute

To delete the attribute, you have two options:
* From the [attribute edit form](manage-your-attributes.html#through-the-attribute-edit-form)
* From the [delete shortcut](manage-your-attributes.html#through-the-delete-shortcut-in-the-grid) in the grid

### Fourth step: create the new attribute

To complete this step, please read [how to create an attribute](manage-your-attributes.html#how-to-create-an-attribute).
Here you can create the new attribute using the same code that was used for the attribute you just deleted.

::: warning
Once you've deleted an attribute, a process starts in order to clear all product values set for this attribute. While this process is running, you cannot create another attribute with the exact same code.
:::

![Attribute deletion - Attribute code blacklisted](../img/Settings_Attributes_code_blacklisted.png)

### Fifth step: import back the families and/or family variants

1. Go to `Imports` and click on `Create import profile`
1. Define a code and a label
1. Select the job in the `job` field, whether you want to import the families or the family variants
1. Drop your file and click on `Upload and import now`

### Sixth step: import the product information back

1. Go to `Imports` and click on `Create import profile`
1. Define a code and a label
1. Select the job in the `job` field, whether you want to import products, product models and/or attribute options (if you need to export all of them, you will need to create an import profile for each)  
![Select the job to export your data](../img/Delete-Attribute_Job_Import-profile.png)
1. Check the different options (format, enable product...) to refine your import and click on `Save`
1. Drop your file and click on `Upload and import now`

::: success
This walkthrough is now complete, and you should have kept your data. Congratulations! ;)
:::
