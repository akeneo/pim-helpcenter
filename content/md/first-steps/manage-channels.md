---
id: manage-your-channels
themes: catalog-settings
title: View, create and edit your **channels**
popular: false
ee-only: false
related: what-is-a-channel
---

# List channels

To see your current channels, go to Settings/Channels. From this page, there are many ways to work with the channel datagrid as described below.

## Channel’s grid pagination

The channel’s grid displays between 10 and 100 channels per page. By default, the grid displays 25 channels per page, you can change this by clicking on «View per page» and select the number of channels you wish to see per page.

## Use filters

The channel grid comes with a filter bar. You can filter on the channel’s code, label or category tree.

![image](../img/dummy.png)

Enter your criteria. If the displayed criteria are not sufficient or relevant you can add additional criteria by selecting from the list that appears via the “Manage filters” button.

The datagrid is automatically updated as a new filter is added.

## Sort out channels

To sort out the channels, you can click on a column header in the grid.

## Shortcut actions on each channel

For each channel, you will have a shortcut action in the last column in the grid. The buttons are displayed when you hover your mouse over the line.

![image](../img/dummy.png)

::: info
The shortcut actions are displayed if you have been the appropriate rights.
:::

# Check the channel history

Changes made on a channel are recorded and visible under the history tab of channels. For example: label change, attribute change, etc.

For each change, a version of the channel is created. The following information is tracked down for each version:

* The person or system that generated changes,
* The date and time (down to seconds) at which the changes took place,
* The old value and the new value of each modified field.

To view the versions of a channel:
1. Open & edit the channel tab,
1. Click on the “History” tab, the list of versions will be displayed.

::: info
Unlike products, you cannot revert changes made on a channel.
:::

# Create a channel

To create a channel from the PIM interface, you must have been granted specific permission to do so. If not, please contact your administrator.

To create a channel:
1.  Click on the “Create channel” button. The creation form of a channel is displayed.
1.  Provide information for all the mandatory fields in the property tab such as:
  *   A unique code to identify the channel in the PIM,
  *   The currencies to activate for the channel,
  *   The locales to activate for the channel,
  *   The expected category tree for the channel: this information will be used to select which products will be exported for this channel (via the tree selection), and the product information to be exported to that channel (via the selection of locales and currencies). One channel can only be linked to one category tree.
  *   Labels for the activated locales.
1.  Click on the “Save” button. The channel has now been created.

# Edit a channel

To edit a channel:
1.  Go Setting/Channels,
1.  Click on the channel you’d like to edit,
1.  Make your changes,
1.  Click on the “Save” button.

The channel is updated accordingly. The changes will be reflected in the PIM in the next few minutes.

# Delete a channel

To delete a channel:
1.  Go to Settings/Channels,
1.  Click on the channel to removee
1.  Click on “Delete”,
1.  Confirm.

The channel will be removed from the PIM.

::: danger
This operation cannot be reverted.
:::

# Channel’s asset transformations (EE)

If you are an Enterprise Edition client and if you are using the Product Asset Manager, you can check the current assets’ transformations under the tab «Asset transformations»

To consult the assets transformation for a channel:
1.  Click on the channel to consult from the channel grid.
1.  The page is displayed. Click on “Assets Transformation” tab.

![image](../img/dummy.png)

To edit or add asset transformations, please refer to the Akeneo Administrateur guide and the «About Asset Transformations» section.
