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
