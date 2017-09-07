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
