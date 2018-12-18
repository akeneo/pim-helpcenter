---
id: manage-reference-entities
themes: catalog-settings
title: Create and manage your **reference entities**
popular: false
ee-only: true
related: what-about-reference-entities
---

# Display the reference entities

To display the existing reference entities, click on the "Entities" menu.   

By default, no reference entity is created, from this single place, you can:
- Create your 1st reference entity
- Define its properties (`Properties` tab)
- Define its records structure (`Attributes` tab)
- Create and enrich its records (`Records` tab)
- Define if user group can view or edit this reference entity (`Permissions` tab)

If a reference entity has already been created, simply click on it to access its information.

# Create a reference entity

To create a [reference entity](what-about-reference-entities), follow these steps:
1.  Go to `Entities`
1.  Click on `Create`
1.  Input the label of the reference entity in the current catalog locale
1.  The code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1.  Click on `Save`

Then you can define its properties (`Properties` tab) and its records structure (`Attributes` tab).

# Define its properties
In `Properties` tab, you can edit the label of the reference entity and upload an image used to identify the reference entity in the PIM.
You can translate the label of the reference entity by switching the current locale in the header.

# Define its attributes (records structure)
In `Attributes` tab, you can define what are the attributes for the records of this reference entity.
For example, a 'Brand' reference entity is described by the following information: a code, a label, an image, a country, a designer, a foundation date, a photo, a description.

## Add an attribute
To add an attribute, follow these steps:
1.  Go to `Attributes` for a reference entity
1.  Click on `Add an attribute`
1.  Input the label of the attribute in the current catalog locale
1.  The code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1.  Select the attribute type:
- **Text**: for text or text area attributes
- **Reference entity simple link**: to link a record to only one entity record
- **Reference entity multiple link**: to link a record to several entity records
- **Single option**: to define a list of options with a single choice
- **Multiple options**: to define a list of options with multiple choices
1.  If the attribute type is a **reference entity simple/multiple link**:
    - Select the reference entity to link to this attribute in the list
1.  Tick `Value per locale` if your record attribute values differ per locale
1.  Tick `Value per channel` if your record attribute values differ per channel
1.  Click on `Save`

:::warning
These attributes properties, except the label, can't be edited afterwards.  
:::

The attribute is created and an edit pop-in opens with the attribute parameters depending on the attribute type.

## Edit an attribute
To add an attribute, follow these steps:
1.  Go to `Attributes` for a reference entity
1.  Click on `Edit` icon
1.  You can translate the label of the attribute by switching the current locale in the header.
1.  Depending on the attribute type, each attribute has specific paramters:
- A **text** attribute:
  - *Maximum number of characters*: maximum number of characters that an attribute value can have
  - *Text area*: long text
  - *Rich Text Editor*: if `Text area`, it activates the WYSIWYG feature to format the text
  - *Validation rule*: if not `Text area`, it defines how the value should be validated (such as an URL, as an Email, or using a regular expression)
- An **image** attribute:
  - *Max file size (MB):* maximum file size allowed in MB
  - *Allowed extensions*: allowed extensions files (gif, jpeg, jpg, pdf, png...)
- A **single option** or **multiple options** attribute:
    - A `Manage options` button to manage the options of the list
- A **reference entity simple/multiple link** attribute:
    - *Related reference entity*: the reference entity linked to this attribute, this information cannot be updated

### Manage options

### Define the completeness
To define the attribute required for the completeness:
1.  Go to `Attributes` for a reference entity
1.  Click on `Edit` icon for an attribute
1.  Tick `Required for completeness` if this attribute is required for the completeness
1.  Untick `Required for completeness` if this attribute is not required for the completeness

### Delete an attribute

# Delete a reference entity

# Set permissions on a reference entity
