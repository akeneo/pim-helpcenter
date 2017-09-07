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
