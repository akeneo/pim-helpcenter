# About asset transformations (Enterprise Edition only)

Set assets transformations for your channels

Add asset transformations for a channel

You have to import a YML file by executing the job “Asset channel configuration import in YML”.

1.  Go to Imports/Import profiles
1.  Create a new import job or use an existing job
1.  Make your YML file with your transformations

![image](../img/Akn_dashboard.jpg)

1.  Upload your YML file and process the file

> **Note**
  You can find more details about the format of the file in our technical cookbook (https://docs.akeneo.com/latest/index.html).
For more details about how to execute an import, please refer to the user guide “User”, section “Launch an import”.


You can define one or more asset transformation per channel. Imports work in update mode, new transformations added will replace the current ones.

### Available assets transformations

To find all assets transformations available, go on our Knowledge Base page: [Akeneo PAM asset transformation](https://www.akeneo.com/fr/knowledge-base/akeneo-pam-transformations/).

### Update assets transformations

To change asset transformations for your channels, you need to reimport a new YML file and upload it into Akeneo.

If you want to add new transformation to a channel, add the existing ones in the imported file if you want to keep them.

> **Note**
  You need to install ImageMagick to be able to set asset transformations.
ImageMagick library proposes other types of asset transformations, meaning that you can add more transformation types.


**Check the current assets transformation**

You can check if your channel has its own asset transformation by going to Settings/Channel then click on your channel, and go under the tab Asset Transformations.

> **Note**
  If no asset transformation is set for your channel, the PIM will not be able to generate a variation.
If the reference file (the original asset) does not fit the transformation requirements, for instance, it’s too small to be resized, the transformation will not be done.


**Export assets transformation**

You can export your asset transformations in a YML file by executing the export job “Asset channel configuration export in YML”. This YML file will contains all available asset transformations for all your channels. For more details about how to execute an export, please refer to the user guide “end-user”, section “Launch an export”.
