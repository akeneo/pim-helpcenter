---
id: manage-reference-entities
themes: catalog-settings, manage-your-reference-entities
title: Manage your **reference entities**
popular: false
ee-only: true
related: what-about-reference-entities, enrich-your-reference-entity-records
---

# Display the reference entities

To display the existing [reference entities](/articles/what-about-reference-entities.html), click on `Entities` menu.   

By default, no reference entity is created, from this single place, you can:
- Create your 1st reference entity
- Define its properties (`Properties` tab)
- Define its records attributes (`Attributes` tab)
- Create and enrich its records (`Records` tab)
- Define which user groups can view or edit this reference entity and its records (`Permissions` tab)

If a reference entity has already been created, simply click on it to access its information.

![image](../img/ReferenceEntity_ListEntities.png)

# Create a reference entity

To create a [reference entity](/articles/what-about-reference-entities.html), follow these steps:
1.  Go to `Entities` menu
1.  Click on `Create` button
1.  Input the label of the reference entity in the current catalog locale
1.  The code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1.  Click on `Save` button

![image](../img/ReferenceEntity_CreateEntity.png)

Then you can [define its properties](/articles/manage-reference-entities.html#define-its-properties) (`Properties` tab) and [define its records attributes](/articles/manage-reference-entities.html#define-its-records-attributes) (`Attributes` tab).

# Define its properties
In `Properties` tab, you can edit the label of the reference entity and upload an image used to identify the reference entity in the PIM.

You can also translate the label of the reference entity by switching the current catalog locale in the header.

![image](../img/ReferenceEntity_EditProperties.png)

# Define its records attributes
In `Attributes` tab, you can define what are the attributes for the records of this reference entity.
For example, a `Brand` reference entity could be described by the following information: a code, a label, an image, a country, a designer, a foundation date, a photo, a description.

## Add an attribute
To add an attribute, follow these steps:
1.  Go to `Attributes` tab for a reference entity
1.  Click on `Add an attribute` button
1.  Input the label of the attribute in the current catalog locale
1.  The code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1.  Select the attribute type:
 ![image](../img/ReferenceEntity_AddAttribute_Type.png)
    - **Text**: for text or text area attributes
    - **Reference entity simple link**: to link a record to only one entity record
    - **Reference entity multiple link**: to link a record to several entity records
    - **Single option**: to define a list of options with a single choice
    - **Multiple options**: to define a list of options with multiple choices
1.  If the attribute type is a **reference entity simple/multiple link**, select the reference entity to link to this attribute in the list
1.  Tick `Value per locale` if your record could have different values per locale for this attribute
1.  Tick `Value per channel` if your record could have different values per channel for this attribute
1.  Click on `Save` button  

The attribute is now created and an edit pop-in opens with the attribute parameters depending on the attribute type.

![image](../img/ReferenceEntity_AddAttribute.png)

:::warning
These attributes parameters, except the label, can't be edited afterwards.  
:::

## Edit an attribute
To edit an attribute, follow these steps:
1.  Go to `Attributes` tab for a reference entity
1.  Click on `Edit` icon
1.  An edit pop-in opens with the attribute parameters depending on the attribute type
1.  You can translate the label of the attribute by switching the current locale in the header
 ![image](../img/ReferenceEntity_EditAttribute.png)
1.  Depending on the attribute type, set the specific parameters for the attribute (see below the specific parameters)
1.  Click on `Save` button

### Edit a text attribute
 - *Maximum number of characters*: maximum number of characters that an attribute value can have
 - *Text area*: long text

If `Text area`:
 - *Rich Text Editor*: activates the WYSIWYG feature to format the text

If not `Text area`:
 - *Validation rule*: defines how the value should be validated (such as an URL, an email, or using a regular expression)

### Edit an image attribute
  - *Max file size (MB):* maximum file size allowed in MB
  - *Allowed extensions*: allowed extensions files (gif, jpeg, jpg, pdf, png...)

### Edit a single/multiple options attribute  
  - A `Manage options` button to [manage the options of the list](/articles/manage-reference-entities.html#manage-the-options)

### Edit a reference entity simple/multiple link attribute    
  - *Related reference entity*: the reference entity linked to this attribute, this information cannot be updated

## Manage the options
To define the options for a single/multiple options attribute, follow these steps:
1.  Go to `Attributes` tab for a reference entity
1.  Click on `Edit` icon for the attribute
1.  An edit pop-in opens with the attribute parameters
1.  Click on the `Manage options` button
1.  A fullscreen opens to manage the options

### Add options
1. Write your option label
1. The option code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1. Write your next option label
1. Click on `Save` button, the fullscreen is closed

:::warning
The code can't be edited afterwards, you can only edit/translate the label.  
:::

:::tips
To quickly input all your options, you just have to input the 1st label, then press `Enter`, input the 2nd label, then press `Enter` and so on...
:::

### Translate options
1. Change the catalog locale using the switcher
1. Translate the option label
1. Translate the next option label
1. Click on `Save` button, the fullscreen is closed

:::info
To help you for the translation, the labels of the option on other locales are displayed in the right panel.
:::

:::tips
To quickly translate all your options, you just have to translate the 1st label, then press `Enter`, translate the 2nd label, then press `Enter` and so on...
:::


### Remove options
To remove an option, click on the cross at the end of the option line.

**TO COMPLETE**

## Define the completeness
To define the attribute required for the completeness of a record:
1.  Go to `Attributes` tab for a reference entity
1.  Click on `Edit` icon for an attribute
1.  Tick `Required for completeness` if this attribute is required for the completeness of a record

![image](../img/ReferenceEntity_EditAttribute_Completeness.png)

If this attribute is not required for the completeness, untick `Required for completeness`.

## Delete an attribute
To delete an attribute, follow these steps:
1.  Go to `Attributes` tab for a reference entity
1.  Click on `Edit` icon for the attribute you want to delete
1.  An edit pop-in opens with the attribute parameters
1.  Click on `Delete the attribute` button
1.  A confirmation pop-in opens to confirm that you want to delete the attributes
1.  Click on `Delete` button

::: warning
The attribute and its relevant information will be deleted in the records of the reference entity. Once you have confirmed the action, it cannot be reverted.
:::

# Delete a reference entity
To delete a reference entity, follow these steps:
1.  Go to `Properties` tab for the reference entity you want to delete
1.  Click on `...` for other actions and then `Delete entity`
1.  A confirmation pop-in opens to confirm that you want to delete the reference entity
1.  Click on `Delete` button

::: warning
You cannot delete a reference entity if:
- This reference entity has some records: you need to first [delete the records of this reference entity](/articles/enrich-your-reference-entity-records.md).
- This reference entity is linked to some product attributes: you need to first [delete the related product attributes](/articles/manage-your-attributes.html#delete-an-attribute) to this reference entity.
:::

# Set permissions on a reference entity
**TO COMPLETE**
