---
id: assets-transformation
themes: administration, manage-your-assets
title: About the **assets transformations**
popular: false
ee-only: true
---

# Overview
For each channel, you can define transformations that will be applied to each of your assets so as to create a variation.

If no asset transformation is set for your channel, the PIM will not be able to generate a variation.

::: warning
If the reference file (the original asset) does not fit the transformation requirements, for instance, it’s too small to be resized, the transformation will not be done.
:::

# Check the current assets transformations

You can check if your channel has its own asset transformation by going to Settings/Channel then click on your channel, and go under the tab Asset Transformations.

![image](../img/dummy.png)

# Add asset transformations for a channel

You have to import a YML file by executing the job “Asset channel configuration import in YML”.

1.  Go to Imports/Import profiles
1.  Create a new import job or use an existing job
1.  Make your YML file with your transformations

![image](../img/dummy.png)

1.  Upload your YML file and process the file

You can find more details about the format of the file in our [technical cookboo](https://docs.akeneo.com/latest/index.html).
For more details about how to execute an import, please refer to the user guide “User”, section “Launch an import”.

You can define one or more asset transformation per channel. Imports work in update mode, new transformations added will replace the current ones.

### Available assets transformations

To find all assets transformations available, go on our Knowledge Base page: [Akeneo PAM asset transformation](https://www.akeneo.com/fr/knowledge-base/akeneo-pam-transformations/).

# Update assets transformations

To change assets transformations for your channels, you need to reimport a new YML file and upload it into Akeneo.

If you want to add new transformations to a channel, add the existing ones in the imported file if you want to keep them.

::: info
You need to install ImageMagick to be able to set asset transformations.
ImageMagick library proposes other types of asset transformations, meaning that you can add more transformation types.
:::

# Export assets transformations

You can export your asset transformations in a YML file by executing the export job “Asset channel configuration export in YML”. This YML file will contains all available asset transformations for all your channels. For more details about how to execute an export, please refer to the user guide “end-user”, section “Launch an export”.
