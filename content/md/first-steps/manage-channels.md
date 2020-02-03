---
id: manage-your-channels
themes: catalog-settings
title: Manage your **channels**
popular: false
ee-only: false
related: what-is-a-channel
---

# List channels

To see your current channels, go to `Settings/Channels`.

![List of channels](../img/Settings_Channels.png)

# Create a channel

:::info
You must be granted a specific permission to be able to create a channel.
:::

To create a channel:
1.  Go to `Settings/Channels`
1.  Click on the `Create channel` button
![Create a channel](../img/Settings_Channels_Create.png)
1.  The creation form of a channel is displayed
1.  Provide information for all the mandatory fields in the property tab such as:
    - A unique **code** to identify the channel in the PIM
    - The **currencies** for the channel
    - The **locales** to activate for the channel: this information will be used to select which product information will be exported for this channel (via the selection of locales and currencies)
    - The expected **category tree** for the channel: this information will be used to select which products will be exported for this channel (via the tree selection)
    - The **labels** for the activated locales
    - The **conversion unit** for each metric attribute that will be used during the product export
1.  Click on the `Save` button

The channel is now created.

:::info
One channel can only be linked to one category tree.
:::

# Edit a channel

To edit a channel:
1.  Go to `Setting/Channels`
1.  Click on the channel you would like to edit
1.  Make your changes
1.  Click on the `Save` button

The channel is updated accordingly. The changes will be reflected in the PIM in the next few minutes.


# Check the channel history

Changes made on a channel are recorded and visible under the history tab of channels. For example: label change, attribute change, etc.

For each change, a version of the channel is created. The following information is tracked down for each version:

- The person or system that generated changes
- The date and time (down to seconds) at which the changes took place
- The old value and the new value of each modified field

To view the versions of a channel:
1. Open & edit the channel tab
1. Click on the `History` tab, the list of versions will be displayed.

::: info
Unlike products, you cannot revert changes made on a channel.
:::


# Delete a channel

::: danger
This operation cannot be reverted.
:::

You have two ways to proceed to delete a channel.
Through the channel form:
1. Go to `Settings/Channels` to list the channels
1. Click on the channel to delete
1. Click on `...` for other actions and then `Delete` on the top right corner
  ![image](../img/Settings_ChannelDeleteEdit.png)
1. Confirm the action via the validation message

Through the Delete shortcut in the grid:
  ![image](../img/Settings_ChannelDeleteHover.png)
1. Select the channel you want to remove from the channel grid
1. Place your mouse over the line of channel in the grid, the button delete is prompted (trash can icon)
1. Click on the trash can icon
1. Confirm the action via the validation message

The channel will be removed from the PIM.
