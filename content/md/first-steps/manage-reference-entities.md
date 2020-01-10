---
id: manage-reference-entities
themes: catalog-settings, manage-your-reference-entities
title: Manage your **reference entities**
popular: false
ee-only: true
related: what-about-reference-entities, enrich-your-reference-entity-records
---

# Display the reference entities

To display the existing [reference entities](/articles/what-about-reference-entities.html), click on the `Entities` menu.   

No reference entity is created by default.

From this single place, you can:
- [Create your 1st reference entity  ](/articles/manage-reference-entities.html#create-a-reference-entity)
- [Define its properties ](/articles/manage-reference-entities.html#define-its-properties) (`Properties` tab)
- [Define its records attributes ](/articles/manage-reference-entities.html#define-its-records-attributes) (`Attributes` tab)
- [Create and enrich its records ](/articles/enrich-your-reference-entity-records.html) (`Records` tab)
- [Define its permissions](/articles/manage-reference-entities.html#set-permissions-on-a-reference-entity), which user groups can view or edit this reference entity and its records  (`Permissions` tab)

If a reference entity has already been created, simply click on it to access its information.

![image](../img/ReferenceEntity_ListEntities.png)

# Create a reference entity

To create a [reference entity](/articles/what-about-reference-entities.html), follow these steps:
1.  Go to the `Entities` menu
1.  Click on the `Create` button
1.  Input the label of the reference entity in the current catalog locale
1.  The code is automatically generated using the label, but it can also be updated (this code must be unique and may only contain letters, numbers and underscores)
1.  Click on the `Save` button or press `Enter` to create the reference entity

![image](../img/ReferenceEntity_CreateEntity.png)

Then you can [define its properties](/articles/manage-reference-entities.html#define-its-properties) (`Properties` tab) and [define its records attributes](/articles/manage-reference-entities.html#define-its-records-attributes) (`Attributes` tab).

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 100 reference entities for this feature. If you try to create more than 100 reference entities, you will have a blocking message.
:::

# Define its properties
In the `Properties` tab, you can edit the label of the reference entity and upload an image used to identify the reference entity in the PIM.

You can also translate the label of the reference entity by switching the current catalog locale in the header.

![image](../img/ReferenceEntity_EditProperties.png)

# Define its records attributes
In the `Attributes` tab, you can define what are the attributes for these reference entity records.  
For example, a `Brand` reference entity could be described by the following information:
- a code
- a label
- an image
- a country
- a designer
- a foundation date
- a photo
- a description

## Add an attribute
To add an attribute, follow these steps:
1.  Go to the `Attributes` tab of a reference entity
1.  Click on the `Add an attribute` button
1.  Input the label of the attribute in the current catalog locale
1.  The code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1.  Select the attribute type:
 ![image](../img/ReferenceEntity_AddAttribute_Type.png)
    - **Image**: for images attributes
    - **Text**: for text or text area attributes
    - **Number**: for number attributes
    - **Reference entity single link**: to link a record to only one entity record
    - **Reference entity multiple links**: to link a record to several entity records
    - **Single option**: to define a list of options with a single choice
    - **Multiple options**: to define a list of options with multiple choices
1.  If the attribute type is a **reference entity single/multiple link**, select the reference entity to link to this attribute in the list
1.  Tick `Value per locale` if your record could have different values per locale for this attribute
1.  Tick `Value per channel` if your record could have different values per channel for this attribute
1.  Click on the `Save` button or press `Enter` to add the attribute

![image](../img/ReferenceEntity_AddAttribute.png)

The attribute is now created and an edit pop-in opens with the attribute parameters depending on the attribute type.

:::warning
These attributes parameters, except the label, can't be edited afterwards.  
:::

:::tips
To define a text area attribute, refer to [Edit an attribute](/articles/manage-reference-entities.html#edit-an-attribute).
:::

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 100 attributes per reference entity for this feature. If you try to create more than 100 attributes, you will have a blocking message.
:::

## Edit an attribute
To edit an attribute, follow these steps:
1.  Go to the `Attributes` tab of a reference entity
1.  Click on the `Edit` icon
1.  An edit pop-in opens with the attribute parameters depending on the attribute type
1.  You can translate the label of the attribute by switching the current locale in the header
 ![image](../img/ReferenceEntity_EditAttribute.png)
1.  Depending on the attribute type, set the specific parameters of the attribute (see below the specific parameters)
1.  Click on the `Save` button or press `Enter` to save the attribute parameters

### Edit an image attribute
  - *Max file size (MB)*: maximum file size allowed in MB
  - *Allowed extensions*: allowed files extensions (gif, jpeg, jpg, pdf, png...)

### Edit a text attribute
 - *Maximum number of characters*: maximum number of characters that an attribute value can have
 - *Text area*: long text

If `Text area`:
 - *Rich Text Editor*: activates the WYSIWYG feature to format the text

If not `Text area`:
 - *Validation rule*: defines how the value should be validated (such as an URL, an email, or using a regular expression)

### Edit a number attribute
   - *Decimal values allowed*: allows decimal values for this attribute
   - *Min value*: the smallest value allowed
   - *Max value*: the largest value allowed

:::tips
To only allow positive values, define a `min value` equals to 0.  
To only allow negative values, define a `max value` equals to 0.
:::   

### Edit a single/multiple options attribute  
  - The `Manage options` button enables to [manage the options of the list](/articles/manage-reference-entities.html#manage-the-options)

### Edit a reference entity simple/multiple link attribute    
  - *Related reference entity*: the reference entity linked to this attribute, this information cannot be updated

## Manage the options
To define the options of a single/multiple options attribute, follow these steps:
1.  Go to the `Attributes` tab of a reference entity
1.  Click on the `Edit` icon of the attribute
1.  An edit pop-in opens with the attribute parameters
1.  Click on the `Manage options` button
1.  A fullscreen opens to manage the options

![image](../img/ReferenceEntity_ManageOptions.png)

### Add options
1. Write your option label
1. The option code is automatically generated using the label, but it can also be updated (this code must be unique and may only contain letters, numbers and underscores)
1. Write your next option label
1. Click on the `Save` button, the fullscreen is closed

![image](../img/ReferenceEntity_AddOptions.png)

:::warning
The code can't be edited afterwards, you can only edit/translate the label.  
:::

:::tips
To quickly input all your options:
1. You just have to input the 1st option label
1. Then press `Enter`
1. Input the 2nd option label
1. Then press `Enter`
1. And so on...
:::

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 100 options per attribute for this feature. If you try to create more than 100 options, you will have a blocking message.  
If you need to manage more than 100 options per attribute, we advise you to create a dedicated reference entity that can be linked to this entity.
:::

### Translate options
1. Change the catalog locale using the switcher
1. Translate the option label
1. Translate the next option label
1. Click on the `Save` button, the fullscreen is closed

![image](../img/ReferenceEntity_TranslateOptions.png)

:::info
To help you for the translation, the labels of the option on other locales are displayed in the right panel.
:::

:::tips
To quickly translate all your options:
1. You just have to translate the 1st option label
1. Then press `Enter`
1. Translate the 2nd option label
1. Then press `Enter`
1. And so on...
:::


### Remove options
To remove an option, click on the cross at the end of the option line.

## Define the completeness
To define the attributes required for the completeness of a record:
1.  Go to the `Attributes` tab of a reference entity
1.  Click on the `Edit` icon of an attribute
1.  Tick `Required for completeness` if this attribute is required for the completeness of a record
1. Click on the `Save` button or press `Enter`

![image](../img/ReferenceEntity_EditAttribute_Completeness.png)

If this attribute is not required for the completeness, untick `Required for completeness`.

## Delete an attribute
To delete an attribute, follow these steps:
1.  Go to the `Attributes` tab of a reference entity
1.  Click on the `Edit` icon of the attribute you want to delete
1.  An edit pop-in opens with the attribute parameters
1.  Click on the `Delete the attribute` button
1.  A confirmation pop-in opens to confirm that you want to delete the attributes
1.  Click on the `Delete` button

::: warning
The attribute and its relevant information will be deleted in the records of the reference entity. Once you have confirmed the action, it cannot be reverted.
:::

# Delete a reference entity
To delete a reference entity, follow these steps:
1.  Go to the `Properties` tab of the reference entity you want to delete
1.  In the top right corner of the header, click on `...` for other actions and then `Delete entity`
1.  A confirmation pop-in opens to confirm that you want to delete the reference entity
1.  Click on the `Delete` button

::: warning
You cannot delete a reference entity if:
- This reference entity has some records: first, you need to [delete the records of this reference entity](/articles/enrich-your-reference-entity-records.md).
- This reference entity is linked to some product attributes: then, you need to [delete the related product attributes](/articles/manage-your-attributes.html#delete-an-attribute) to this reference entity.
:::

# Set rights on a reference entity
To set rights on a reference entity, please read [this article](/articles/access-rights-on-entities.html).
