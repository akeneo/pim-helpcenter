

# Manage attributes

To fit the PIM application to your needs, Akeneo enables you to define attributes. For example, if you need to capture data about the weight of your products, you can add an attribute type as ‘metric’.

You will be able to select the most appropriate attribute type for your needs, please refer to the section below. For example, you can choose to create a field as a text, in which users can write what they want, or as a drop down list with a selection of values, forcing users to select from a list of predefined options.

Once you have created a new attribute (see below), you’ll need to assign it to one or more families or directly to a product to make it available to users.

To learn more on how the attributes and products interact, please refer to “Adding attributes to a product” or “Add attributes to a family” section.

Attributes are always optional data fields. This means that all attributes can be with no values for the products except the SKU, which identifies a product, and is therefore mandatory with a value entered as of you create a product.

## View attributes

To start, go to Settings > Attributes. From this page, you will have several options to work with the datagrid of attributes as described below.

### Attribute’s grid pagination

The attribute’s grid displays between 10 and 100 attributes per page. By default, the grid displays 25 attributes per page, you can change this by clicking on «View per page» and select the number of attributes you wish to see per page.

![image](../img/Akn_dashboard.jpg)

In order to navigate through the different pages of the attribute datagrid, the navigation buttons “next” and “previous” are available above the grid. Eventually, the page number is displayed at the center. You can directly go to a specific page by amending the field of the ongoing page number.

### Filter on attributes

The attribute datagrid comes with a filter bar.

![image](../img/Akn_dashboard.jpg)

1.  Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.
1.  The grid is automatically updated when a new filter is added.

Labels filters are localised: If an attribute has a label in the locale preference, then this wording is used. If there is no available language, then the attribute code will be displayed in brackets. For example: [COLOR].

**Filters can be sorted out on the following attribute information:**
*   The code,
*   The label,
*   The attribute type,
*   The “scopable” property,
*   The “localizable” property,
*   The group it belongs to,
*   If there is a set of conditions and actions to execute the rule for a smart attribute (Enterprise Edition only).

### Sort out product attributes

To sort out the attributes, you can click on the column header in the datagrid.

> **Note**  
  The following type of information cannot be used to sort out the list: the attribute type and if it is a smart attribute (an attribute affected by a rule).

### Shortcut actions on each attribute

There is a set of actions available for each attribute, that you can find in the last column of the grid. The buttons are prompted when you hover your mouse over the line.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  The shortcut actions are only displayed if you have been granted the appropriate rights

## Create an attribute

To create an attribute from the PIM user interface (without going through imports), you must have a specific permission. If you do not have it, please contact your administrator.

**To create an attribute in the PIM:**
1.  Go on Settings/Attributes,
1.  Click on the “Create attribute” button.

![image](../img/Akn_dashboard.jpg)

1.  Select the attribute type you want to create.

![image](../img/Akn_dashboard.jpg)

1.  The attribute edit page is displayed. The following properties are required to create an attribute:
    *   A code
    *   A value per channel (Yes/No): use this field if your attribute values depend on the channels.
    *   A value per locale (Yes/No): use this field if your attribute values depend on the locales.
    *   Unique value (will be available or required according to the attribute type)
    *   Locale specific: if it must apply to specific locales not all of them.
    *   Read only attribute (Enterprise Edition only): to prevent this attribute from being edited in the UI and only through imports or rules.
    *   Validation parameters: depending on the attribute type chosen
    *   Attribute group: the attribute group the attribute will belong to
    *   Usable as a grid filter (whether or not the attribute can be displayed as a column or used as a filter in the product’s grid)
1.  Then click on “Save”

    The attribute has been created and some properties can be added or amended over time.


> **Warning**  
  Please note that the following attribute codes cannot be used in Akeneo PIM:  
  id, associationTypes, category, categories, categoryId, completeness, enabled, family, groups, associations, products, scope, treeId, values


## Edit attribute properties

**You can change the following properties of an attribute**

*   Labels: these are labels that appear when they are displayed in the PIM.
*   Specific properties to attributes (see below)
*   Options (for simple- or multi-select attribute types only): these are predefined values that the user can select
*   The attribute group: the group the attribute belongs to.

**To edit an attribute:**

1.  Go to Settings/Attributes.
1.  Select the attribute to edit in the datagrid and click on the line or on the shortcut.
![image](../img/Akn_dashboard.jpg)
1.  Change the properties and click on Save.
![image](../img/Akn_dashboard.jpg)

### Validation by setting properties for the different attribute types

**Each attribute has specific properties to validate values:**

*   Date:
  *   Min date: the earliest date that can be accepted
  *   Max date: the latest date that can be accepted
*   A short text field: text
  *   Maximum number of characters: maximum number of characters that an attribute value can have.
  *   Validation rule: how the value should be validated: such as an URL, as an Email, or using a regular expression.
*   A long text field: text area
  *   Maximum number of characters: like for the previous text attribute type
  *   Enable WYSIWYG: activates the WYSIWYG feature.
*   File and picture:
  *   Maximum size allowed in MB
  *   Allowed extensions files: png, jpg, pdf, doc, etc ...
*   Metric:
  *   Allow negative values for the attribute
  *   Allow decimal values for this attribute
  *   Minimum value: the smallest value allowed
  *   Maximum value: the largest value allowed
  *   Metric family: family units of measurement to be used for the attribute (weight, dimensions, area, etc. )
  *   The default unit of measurement
*   Price:
  *   Allow decimals for the attribute values
  *   minimum value: the smallest allowed value
  *   maximum value: the largest allowed value
*   Number
  *   Allow negative values for the attribute
  *   Allow decimals
  *   Minimum value: the smallest allowed value
  *   Maximum value: the largest allowed value

The simple and multi select attribute types, as well as boolean attribute (yes / no) have no specific properties to validate the attributes.

## Manage attribute options

You can define values for simple and multi-select attribute types. Options can be added, modified, sorted, or deleted.

![image](../img/Akn_dashboard.jpg)

To add new values, click on «Add an option» and save it using the small pencil icon. You can add many lines at once but you wil have to save each line before leaving the page.

You cannot use the main Save button to record your new options.

### List attribute options

**To edit an attribute options**

1. Go to Settings/Attributes.
1. Select the attribute to edit, then click on the relevant row in the attribute datagrid.
1. Click on the “Values” tab.

### Add an option

1. Click on “Add an option”.
1. Give a unique code to the new option.
1. Click on the confirm or cancel, button.

![image](../img/Akn_dashboard.jpg)

The option is instantly created.

### Edit option labels

1.  Click on the “Edit” button to change the option code. A code is unique, it means that all the attribute options have different codes.
1.  Click on the button to confirm or on the button to cancel.

![image](../img/Akn_dashboard.jpg)

### Sort out options

1.  Drag and drop the rows to reorder options manually via the icon at the beginning of each row of options.

![image](../img/Akn_dashboard.jpg)

### Delete an option

1.  Click on the “delete” button to remove an option.

![image](../img/Akn_dashboard.jpg)

A deleted option can no longer be used as a value for the attribute for a product. If a product had this value, the product has no value anymore for the attribute.

> **Enterprise Edition Note**  
  An option that is used by a published product cannot be deleted.


## Manage rules on attributes (Enterprise Edition only)

You can find the rules applied on an attribute under the “Rules” tab.

![image](../img/Akn_dashboard.jpg)

The display screen is composed of several elements:

*   The rule code
*   The conditions which are displayed below each other starting by “If”.
*   The rule’s action beginning with “Then”.
*   The number of affected products is the number of products which are selected by the rules conditions.

![image](../img/Akn_dashboard.jpg)

The rules have to be read from left to right: conditions first, then actions.

> **Note**  
  A dedicated screen lists all the rules (Settings/Rules), the rules can be applied on attributes, categories, system attributes.


Like on Settings/Rules, you can perform several actions from this grid:

*   execute rules
*   delete rules
*   calculate the number of affected products by the rule.

## Check the attribute history

Changes made on attributes are recorded and visible under the attribute’s history. For example: label change, a property change, etc.

**For each change, an attribute version is created. The following information is tracked down for each version:**

* The person or system that generated changes,
* The date and time (up to seconds) at which the changes took place,
* The old value and the new value of each modified field.

**To view the attribute versions:**

1.  Open and edit the attribute page,
1.  Click on the “History” tab and the list of version will be displayed.

Unlike products you cannot restore or revert an attribute’s versions (Enterprise Edition only).

## Delete an attribute

You can delete attributes, deleting an attribute means that all information regarding this attribute will be removed from PIM. Once you have confirmed the action, the action cannot be reverted.

**You have two ways to proceed to remove an attribute:**

* Through the attribute edit form:
  * Selet the attribute to delete,
  * Click on “Delete” on the top right corner,
  ![image](../img/Akn_dashboard.jpg)

  * Confirm the action in the popin.
* Throught the Delete shortcut in the grid:
![image](../img/Akn_dashboard.jpg)

  * Select the attribute you want to remove from the attribute datagrid.
  * Place your mouse over the line of attribute in the grid, the button delete is prompted («trash» can icon),
  * Click on the icon.
  * Confirm the action in the popin.

The attribute and all its relevant information will be deleted in Akeneo PIM.

> **Note (Enterprise Edition Only)**  
  An attribute used by a published product cannot be deleted.


# Manage attribute groups

## What is an attribute group?

Attribute groups are used to gather attributes. For instance, you can group all attributes for Marketing in a group named “Marketing”. In the example below, we have three attribute groups displayed: Marketing, Technical and Media.

![image](../img/Akn_dashboard.jpg)

Gathering attributes together aims at giving more visibility when users fill in values.

In the Enterprise Edition, you can define permissions on attribute groups, meaning you can define groups of users that are allowed to edit attributes belonging to the groups or only authorise them to view attribute’s values. For instance, Marketing Content team will only be able to enrich attributes that have been added to the Marketing attribute group, they will be able to view Technical information though.

Once you have created an attribute group and it will include at least one attribute for the product, the group will appear automatically.

If no attribute group is used for the product family nor directly added to the product, then the group does not appear in the product page when you edit your product form. You can also add, delete, and define an order in groups.


> **Note**  
  «Other» is a default attribute group managed by Akeneo and it cannot be deleted. If you do not create attribute groups, all product forms will be gathered in this group.

To manage your attribute groups, go to Settings/Attribute groups:

![image](../img/Akn_dashboard.jpg)

## Create an attribute group

You must have specific permission to create an attribute group in the PIM.

**To create an attribute group:**

1.  Go to Settings/Attribute groups,
1.  Click on “Create a new attribute group”,
![image](../img/Akn_dashboard.jpg)
1.  The page of the new attribute group is displayed. Enter a unique code and a label,
1.  Click on “Save”. The attribute group has been created and is now visible on the left side of the screen along with the other attribute groups.

Once you new attribute group is created, you can order it.

## Sort attribute groups

**To sort attribute groups:**

1.  Go to Settings/Attribute Groups,
1.  Drag and drop attribute groups you want using your mouse:
  *   place your mouse over the icon nearby attribute to move
  *   once your mouse changes into a cross, put the group higher or lower.

![image](../img/Akn_dashboard.jpg)

## Edit labels of an attribute group

**To edit an attribute group’s label:**

1.  Go to Settings/Attribute Groups,
1.  Select the attribute group to edit in the left panel and click on its label,
1.  The attribute’s page is displayed,
1.  Change its labels,
1.  Click on Save.

## Manage attributes in a group

Only the attributes belonging to the “Other” group can be added to another attribute group. To add attributes from another group, first remove it from its current group.

### Add an attribute to an attribute group

It is possible to add attributes to an attribute group.

1.  Select the attribute group, go under the “Attributes” tab,
1.  Click on “Add Attributes” (visible on the right side of the screen):
![image](../img/Akn_dashboard.jpg)
1.  Select the attributes to add by clicking on the their labels:
  *   You can find an attribute by its label via the quick search box at the top of the list.
  *   You can select all the attributes and click on the label of the attribute group.
1.  Click on the “add” button below the list.

The attributes are added to the current group.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  If you do not see the button “Add Attributes” you more likely do not have the appropriate rights to add attributes. Should it be the case, please contact your administrator.


### Check the history list of an attribute group

Changes made on an attribute group are recorded and visible under the history tab of one group. For example: label change, attribute change, etc.

**For each change, a version of the attribute group is created. The following information is tracked down for each version:**

*   The person or system that generated changes,
*   The date and time (up to seconds) at which the changes took place,
*   The old value and the new value of each modified field.

**To view the versions of an attribute:**

1.  Open and edit the page of the attribute group,
1.  Click on the “History” tab and the list of versions will be displayed.

### Remove an attribute

Attributes can be easily removed from groups.

**To remove an attribute:**

1.  From the “Attributes” tab of an attribute group, click on the “delete” icon to remove the relevant attribute.
![image](../img/Akn_dashboard.jpg)
1.  Confirm the action via the validation popin.

The attribute is put back in the group “other” and can now be added to another group.

### Sort out attributes

Like attribute groups, you can sort attributes belonging to a same group.

**To order the attributes:**

1.  Go to Settings/Attribute Groups to open the attribute group.
1.  Click on the attribute group to be edited in the left panel.
1.  Click on the “Attributes” tab to display the list of attributes included in the group.
1.  Drag and drop attribute groups you want using your mouse:
  *   place your mouse over the icon nearby the attribute to move
  *   once your mouse changes into a cross, put the attribute higher or lower.

![image](../img/Akn_dashboard.jpg)

### Delete an attribute group

Deleting an attribute group does not remove the attributes it includes. The attributes will be again visible in the default attribute group “Other”.

**To delete an attribute group**

1.  Go to Settings/Attribute Groups to list the attribute groups,
1.  Click on the attribute group to be deleted,
1.  Click on “Delete”,
1.  Confirm the action via the validation message.

# Manage families

What is a family?

A family is a set of attributes that are shared by products belonging to this family. In other words, a family can be considered as a template for products. A product family can use all the attributes available in the PIM. Several families of products can use the same attributes.

When a product is associated to a family, the product automatically inherits from all attributes defined at the family level. A product can belong to only one Family (but a product does not have to belong to a family, in this case, it has no default attributes). The family helps managing the product’s completeness.

**For instance, a family can be:**
*   A mug,
*   A T-shirt,
*   A pair of shoes.

Each product family has a code and a label that can be translated. A product family can use all the attributes available in the PIM. Several families of products can use the same attributes.

This means that a product family is used as a product model: the set of attributes generates the product edit form automatically and each product belonging to the same family has the same attributes.

Families are optional, but products that do not belong to a family cannot have a completeness calculated.

To see your families, edit them or create a new family go to Settings/Families.

## Create a family

You must be granted a specific permission to do be able to create a family.

**To create a family:**

1.  Go to Settings/Families,
1.  Click on “Create family”,
1.  The creation of a family popin is prompted.
1.  Enter a new family code (this code must be unique),
1.  Click on “Save”.

The family is now created.

**Once a familly is created, you can later edit those family information:**

*   The family’s labels for the locales enabled for the catalog,
*   Add/remove attributes from the family
*   Edit these attributes’ completeness,
*   To select the attribute to be used as «label» for the products in their product edit form.

## Edit families

### Edit family labels

**To edit the family properties:**

1.  Go to Settings/Families.
1.  Select the family to edit in the grid and click on its line.
1.  The family edit page is displayed.
1.  Under the “Properties” tab, change the labels
1.  Click on “Save”.

### Manage attributes in a family
Attributes can be shared amongst families, but an attribute can be only added once to a family.

You have several ways of adding an attribute, a group of attribute or several attributes to a family.

**Add an attribute to a family**

**From the family edit form, go under the “Attributes” tab:**

1.  Click on “Add Attributes” on the right side of the screeen:
![image](../img/Akn_dashboard.jpg)
1.  Select the attributes to add by clicking on their labels.
1.  Click on “Add”.

The attributes have been added to the current family.

**Add an attribute group to a family**

**From the family edit form, go under the “Attributes” tab:**

1.  Click on “Add attribute groups” on the right side of the screeen:
![image](../img/Akn_dashboard.jpg)
1.  Select the attribute groups to add by clicking on their labels,
1.  Click on “Add”.

> **Note**  
  If you do not see the “Add Attributes” or “Add Attribute groups” button, it might be because you do not have the relevant rights. Please contact your administrator.

### Remove an attribute

Attributes can be easily removed from families.

**To remove an attribute from a family:**

1.  Go under the “Attributes” tab
1.  Click on the “delete” icon to remove the relevant attribute.
![image](../img/Akn_dashboard.jpg)
1.  Confirm the action in the validation popin.

The attribute will be back in the add attributes’ list, if you need it later, you will be able to add it again.

## Set channel’s completeness

The completeness is displayed as a progress bar or as a percentage in the PIM. It is calculated for each product (it represents the percentage of completion of a product) and for each combination channel/locale.

A product is considered as complete (or 100% completeness) when its required attributes (defined at the family level) have values.

When an attribute is added to a family, it is not set required for any channel by default. Only your product identifier attribute is automatically added and set as required for families.

**On the atttribute’s family page:**

*   A grey circle means that the attribute is not required in the channel’s completeness,
*   A green check means that the attribute is already set as required for this channel.

### Set an attribute required for a channel

1.  Go under the “Attributes” tab,
1.  Select the attributes to be required for your family,
1.  Click on the grey circles to make them required for the channel’s completeness,
1.  Grey circles are automatically converted into a green “check”,
1.  Click on “Save”.

![image](../img/Akn_dashboard.jpg)

The attributes added will be taken in account for the completeness computing. Completeness will be then updated when next time it is executed.

### To remove an attribute as required for a channel

1.  Go under the “Attributes” tab,
1.  Select the attributes to be required for your family,
1.  Click on the green checks to removed them from being required for the channel’s completeness,
1.  Green checks are automatically converted into grey circles,
1.  Click on “Save”.

![image](../img/Akn_dashboard.jpg)

The attribute is removed from the completeness computing. Completeness will be updated then updated when executed.

## Mass edit families

Like for products can mass edit families: you can add several attributes at once for several families, and through the same action, define if they are required of not for the selected families.

## To add attributes to several families:

1.  Go to Settings/Families
1.  Select families for which the same attributes need to be added.
  *   Click on “All” to select all the existing families,
  *   Click on “All visible” to select all the families display on screen,
  *   (Click on “No” to unselect all the families),
1.  Click on the “Mass Edit” icon on the left side of the datagrid.
![image](../img/Akn_dashboard.jpg)
1.  The mass edit window is displayed.
1.  Select the operation “Set attribute requirements”
1.  Click on “Next.”
![image](../img/Akn_dashboard.jpg)
1.  Add the relevant attributes and set the attributes required for the product completeness of the channels
1.  Click on “Next”
1.  Confirm messages to add attributes to the selected families.

The attributes have now been added to families.

### Check the family history

Changes made on a family are recorded and visible under the history tab of families. For example: label change, attribute change, etc.

**For each change, a version of the family is created. The following information is tracked down for each version:**

*   The person or system that generated changes,
*   The date and time (down to seconds) at which the changes took place,
*   The old value and the new value of each modified field.

**To view the family versions:**

1.  Open and edit the family tab.
1.  Click on the “History” tab. The list of versions is displayed.

## Delete a family

Deleting a family does not delete the attributes it includes, or the products associated with it. The attributes are always available and the products keep these very same attributes: they will become “optional” and the products with no family will have no longer completeness. The values are though maintained: there is no loss of product information.

**To remove a family:**

1.  Go to Settings/Families to list the families.
1.  Click on the family to be removed.
1.  Click on the “Delete” button.
1.  Confirm the action via the validation message.

> **Note (Enterprise only)**  
  A family used by a published product cannot be deleted.


# Manage group types

Groups are used to bring products together.

You can group all the products on a selection of products to create a gift list, for example a collection of products on the same theme (Spiderman for instance).

By default the PIM offers two types of groups Related and Variant, you can create more.

![image](../img/Akn_dashboard.jpg)

Once you have created a product group type, it can be used when creating a product group (Enrich/Groups).

![image](../img/Akn_dashboard.jpg)

Groups types are required to create a product group. There is no default group. Akeneo advises to create a default group type with code “RELATED”.

The group type “VARIANT” is directly managed by the Akeneo PIM application, it cannot be removed.

## Check the group’s type

To start, go to Settings/Group types. From the datagrid of the types groups page, there are many ways to work as described below.

### Group’s grid pagination

The group’s grid displays between 10 and 100 groups per page. By default, the grid displays 25 groups per page, you can change this by clicking on «View per page» and select the number of groups you wish to see per page.

The datagrid of group types displays a page number. All group types are displayed in the datagrid per set of N group types. The number of group types is indicated at the top right of the grid.

This number of group types per page can be changed if you click on the drop down list to select another number:

![image](../img/Akn_dashboard.jpg)

### Filter on group types

The group type datagrid comes with a filter bar. You can filter on the group type’s code and on the group types’ labels.

![image](../img/Akn_dashboard.jpg)

1.  Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.
1.  The grid is automatically updated as a new filter is added.

**Sort out group types**

To sort out the group types, you can click on a column header in the grid.

### Shortcut actions on group type

There is a set of actions available for each type of group, localised in the last column in the grid. The buttons are displayed when you hover your mouse over the line.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  The shortcut actions are displayed if you have been granted the appropriate rights.


Unlike products there is no versioning available for the group types.

## Create a group type

You must have the permission to create a group type from the PIM.

**To create a group type:**
1.  Click on “Create group type”.
1.  Select the group type code you want to create.
1.  Confirm.

The group type has now been created and the edit page is displayed.
Some properties can be changed or added.

## Edit a group type

**To edit a group:**
1.  Go to Settings/Group types.
1.  Click on the group type you want to edit in the grid.

The edit form is displayed. Only the labels can be edited for a group type.

The code cannot be changed once created. Click on the “save” button to save your changes.

## Delete a group type

**To delete a group type:**

1.  Go to Settings/Group types,
1.  Click on the group type to remove,
1.  Click on the “Delete” button,

The group type is deleted.

> **Note**  
  If a group type is already used by at least one group, then the group type cannot be deleted: an error message appears to tell the user that the group type is used and therefore cannot be deleted.


# Manage association types

Associations types are used to link products together.

For example, you can link your product to their substitute product in case of inventory shortage. The code for this association type will be “SUBSTITUTION”.

![image](../img/Akn_dashboard.jpg)

Once you have created an association type between products, it can be used while editing a product.

![image](../img/Akn_dashboard.jpg)

The association types are mandatory to create a link between two products. There is no default association types.

## View the association types

To see current association types, go to Settings/Association types. From this page, there are many ways to work with the association type datagrid, as described below.

### Association’s grid pagination

The association’s grid displays between 10 and 100 associations per page. By default, the grid displays 25 associations per page, you can change this by clicking on «View per page» and select the number of associations you wish to see per page.

The association type datagrid displays a page number. All association types are displayed in the datagrid per set of N association type. The number of association type is indicated at the top right of the grid.

This number of association types per page can be changed if you click on the drop down list to select another number:

![image](../img/Akn_dashboard.jpg)

### Filter on association types

The association type datagrid comes with a filter bar. You can filter on association types’ codes and labels.

![image](../img/Akn_dashboard.jpg)

1.  Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.
1.  The grid is automatically updated as a new filter is added.

### Sort out the association types

To sort out the association types, you can click on a column header in the datagrid.

### Shortcut actions on each association type

You will be able to find a set of actions available for each association type in the last column in the grid. The buttons are displayed when you hover your mouse over the line.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  The shortcut actions are displayed if you have been granted the appropriate rights.

## Create an association type

To create an association type from the PIM user interface, you must have been granted specific permissions to do so. If this is not the case, contact your administrator.

**To create an association type:**
1.  Click on the “Create a new association type” button.
1.  Select the code of the association type you want to create.
1.  Confirm.

The association type has now been created and the edit page is displayed.

Some properties can be changed or completed.

## Edit an association type

**To edit an association type:**
1.  Go to Settings/Association Types.
1.  Click on the association type you want to edit in the datagrid.

The edit form appears. Only the labels can be edited for a type of association. The code cannot be changed once created. Click on the “save” button to save your changes.

## Delete an association type

**To remove an association type:**

1.  Go to Settings/Association types.
1.  Click on the association type you want to delete from the grid.
1.  Click on the “Delete” button.

The association type is then deleted.

> **Note**  
  If an association type is used by at least one product, then the association type cannot be deleted: an error message is displayed to let the user know that the association type is used and cannot be deleted.

## Check the association type history

Changes made on association types are recorded and visible under the history tab of the association type. For example: label change, attribute change, etc.

**For each change, a version of the association type is created. The following information is tracked down for each version**

*   The person or system that generated changes
*   The date and time (up to seconds) at which the changes took place
*   The old value and the new value of each field modified.

**To view the versions of an association type:**

1.  Open & edit the association type page.
1.  Click on the “History” tab. The list of versions will be displayed.

# Manage currencies

You have 294 currencies available in Akeneo. Currencies are used to set values for the “Price” attribute type. Currencies are not related to locales.

When a “Price” attribute type is created, it can have as many values as needed as long as the relevant currency has been activated in the PIM.

## View currencies

To view the currencies, go to Settings/Currencies. The grid displays all currencies available in the PIM.

![image](../img/Akn_dashboard.jpg)

### Currency’s grid pagination

The currency’s grid displays between 10 and 100 currencies per page. By default, the grid displays 25 currencies per page, you can change this by clicking on «View per page» and select the number of currencies you wish to see per page.

### Filter on currencies

The currency datagrid comes with a filter bar. You can filter on the code and on the currency’s status: activated: Yes/No.

![image](../img/Akn_dashboard.jpg)

### Sorting out currencies

To sort out the currencies, you can click on the column header in the datagrid.

## Enable/disable a currency

Each currency line comes with a shortcut action button to enable or disable it. Place your mouse over the line, the “status” button will appear.

![image](../img/Akn_dashboard.jpg)

To change the currency status (enable/disable), click on the button. The currency status will be changed, and the currency datagrid will be automatically updated.

> **Note**  
  The shortcut action will be displayed if you have the appropriate rights.


# Manage channels

## What is a channel?

A channel defines a selection of products and information to export. A channel is a place where your product information will be visible: for example, a website, a print catalog, a mobile application...

It has the following properties:

*   It is linked to a tree of categories: to define the selection of products to export.
*   It has one or several locales: to specify which values the channel requires (product information in French but not those in Italian, even if these values exist).
*   It has one or several currencies: to define which price attribute values the channel requires (prices in Euros and Dollars, but not in Pounds).
*   it has a dedicated completeness: to define which product information is mandatory for a product, it is configured per channel, at the family level. For instance: the product’s description must be exported for the e-commerce channel, but only the product’s name must be exported for the mobile channel.
*   it takes into account statuses: disabled products are ignored by channels.

At least one channel must be created in the PIM.

A channel can also be used to modify or create export profiles to suit your needs.

For more information on how to refer to a channel for an export profile, please refer to the “Edit Profile section export”.

> **Note**  
  A channel is also known as a «scope» in Akeneo PIM.

## List channels

To see your current channels or create a new channel go to Settings/Channels. From this page, there are many ways to work with the channel datagrid as described below.

## Channel’s grid pagination

The channel’s grid displays between 10 and 100 channels per page. By default, the grid displays 25 channels per page, you can change this by clicking on «View per page» and select the number of channels you wish to see per page.

### Use filters

The channel grid comes with a filter bar. You can filter on the channel’s code, label or category tree.

![image](../img/Akn_dashboard.jpg)

Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.

The datagrid is automatically updated as a new filter is added.

### Sort out channels

To sort out the channels, you can click on a column header in the grid.

### Shortcut actions on each channel

For each channel, you will have a shortcut action in the last column in the grid. The buttons are displayed when you hover your mouse over the line.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  The shortcut actions are displayed if you have been the appropriate rights.

## Additional information on channels

### Channel’s asset transformations (Enterprise Edition only)

If you are an Enterprise Edition client and if you are using the Product Asset Manager, you can check the current assets’ transformations under the tab «Asset transformations»

**To consult the assets transformation for a channel:**

1.  Click on the channel to consult from the channel grid.
1.  The page is displayed. Click on “Assets Transformation” tab.

![image](../img/Akn_dashboard.jpg)

To edit or add asset transformations, please refer to the Akeneo Administrateur guide and the «About Asset Transformations» section.

### Check the channel history

Changes made on a channel are recorded and visible under the history tab of channels. For example: label change, attribute change, etc.

**For each change, a version of the channel is created. The following information is tracked down for each version:**

* The person or system that generated changes,
* The date and time (down to seconds) at which the changes took place,
* The old value and the new value of each modified field.

**To view the versions of a channel:**

1. Open & edit the channel tab,
1. Click on the “History” tab, the list of versions will be displayed.

> **Note**  
  Unlike products, you cannot revert changes made on a channel.

## Create a channel

To create a channel from the PIM interface, you must have been granted specific permission to do so. If not, please contact your administrator.

**To create a channel:**
1.  Click on the “Create channel” button. The creation form of a channel is displayed.
1.  Provide information for all the mandatory fields in the property tab such as:
  *   A unique code to identify the channel in the PIM,
  *   The currencies to activate for the channel,
  *   The locales to activate for the channel,
  *   The expected category tree for the channel: this information will be used to select which products will be exported for this channel (via the tree selection), and the product information to be exported to that channel (via the selection of locales and currencies). One channel can only be linked to one category tree.
  *   Labels for the activated locales.
1.  Click on the “Save” button. The channel has now been created.

## Edit a channel

**To edit a channel:**
1.  Go Setting/Channels,
1.  Click on the channel you’d like to edit,
1.  Make your changes,
1.  Click on the “Save” button.

The channel is updated accordingly. The changes will be reflected in the PIM in the next few minutes.

## Delete a channel

**To delete a channel:**
1.  Go to Settings/Channels,
1.  Click on the channel to removee
1.  Click on “Delete”,
1.  Confirm.

The channel will be removed from the PIM, this operation cannot be reverted.

# Manage locales

An Akeneo locale is a combination of a language (English, German, French...) and a country (United States, United Kingdom, France…). Examples: English UK (en_GB), English US (en_US), English AU (en_AU). You can have one or more locales activated in your PIM. In the Enterprise Edition, you can define specific user rights on locales.

A product in Akeneo can have different values per locale for some attributes (these attributes are “localizable”). Akeneo proposes more than 200 locales.

The locales are used to set values for attributes which may differ according to the relevant language/locale.

To activate a locale, you need to add it to at least one channel. Unused locales are inactive.

## View locales

**To view locales, go to Settings/Locales:**

![image](../img/Akn_dashboard.jpg)

### Locale’s grid pagination

The locale’s grid displays between 10 and 100 locales per page. By default, the grid displays 25 locales per page, you can change this by clicking on «View per page» and select the number of locales you wish to see per page.

## Filter on locales

The locale’s grid comes with a filter bar. You can filter on the locale’s code and its status: Activated: Yes/No.

![image](../img/Akn_dashboard.jpg)

Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button. The grid is automatically updated as a new filter is added.

## Sort out locales

To sort out locales, you can click on a column header in the grid. You can sort them on code or on their status.

# Manage rules (Enterprise Edition only)

## What is a rule?

Akeneo Enterprise Edition comes with a rule engine. The rule engine allows you to product’s enrichment automatic actions based on conditions.

For instance, you can ask the system to automatically copy values between attributes, to categorize products or assign families.

The feature comes with a set of actions and conditions, for each version, the engine rule is improved. Moreover you can also create your own rules, to do so refer to our technical documentation: [How to add a custom action in the rule engine](https://docs.akeneo.com/1.7/cookbook/rule/add_custom_action_rule_engine.html).

## How to create a rule

Rules are exclusively created by YML imports. You need create your YML file like explained on our online documentation: [General information about rule format](https://docs.akeneo.com/1.7/cookbook/rule/general_information_on_rule_format.html#enrichment-rule-structure) and import it in the PIM using the import job “Rule import in YML”.

For more details about how to execute an import, please refer to the end-user guide, section «Imports & Exports».

You can also export your rules: to do so, execute the export job “Rule export in YML”.

> **Note**  
  For more details about how to execute an export, please refer to the user guide “user”, section “Launch an export”.

## View all rules

The screen Settings/Rules displays all rules created which apply on attributes, categories, system attributes (status, completeness...).

![image](../img/Akn_dashboard.jpg)

## Calculate the number of affected products for rules

To help you to validate your rules and well define your rules conditions, you can calculate the number of matching products that the rule will affect.

The fist time a rule is executed, it can match many products. The next times, you might have 0 matching products or only few:

![image](../img/Akn_dashboard.jpg)

To use this action, select one or several rules by ticking them on the left side of the screen, then click on “Bulk actions” and select “Calculate the affected products”. Then confirm the action in the pop in.

A flash message confirming the action will be displayed and you will be notified once the calculation is done. The number of affected products will appear on the right side of your screen.

## Delete rules

### To delete a single rule

To delete a rule, click on the “Delete” button at the end of each line in the datagrid.

A confirmation message validates the action of deleting a rule.

![image](../img/Akn_dashboard.jpg)

A deleted rule can no longer be executed by the rules engine. The products keep the values calculated by the deleted rule.

> **Note**  
  If you do not see the button “Delete” you do not have the appropriate rights to delete a rule. Please contact your administrator to change your rights.

## Delete a selection of rules

**You can also delete several rules at the same time:**
1.  Select the rules you want to delete
1.  Click on the bulk action menu
1.  Select «Delete the selected rules»

A confirmation message validates the action of deleting a rselection of rules.

## Execute a rule

In order to allow you to execute rules on your own, we have added an «Execute rule» action on this page. You can simply select rules and click on the top right corner button or use the bulk actions menu.

**You can execute:**
*   one specific rule,
*   a selection of rules,
*   all your rules (be aware, this action could take a long time).

![image](../img/Akn_dashboard.jpg)


THANK you.
