---
id: assets-transformation
themes: administration, manage-your-assets
title: About the **assets transformations**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# Overview
For each channel, you can define transformations that will be applied to each of your assets so as to create a variation for each of your channels.

If no asset transformation is set for your channel, the PIM will not be able to generate a variation.

::: warning
If the reference file (the original asset) does not fit the transformation requirements, for instance, it’s too small to be resized, the transformation will not be done.
:::

The following assets transformation are available:
- resolution: change an image resolution
- colorspace: change an image color space
- resize: resize an image without keeping its proportions
- scale: scale an image
- thumbnail: create a miniature image (the image proportion is kept)

# Check the current assets transformations

You can check if your channel has its own asset transformation by going to `Settings`/`Channels` then click on your channel, and go under the tab `Asset transformations`.

![image](../img/dummy.png)

# Manage assets transformations

You can define one or more asset transformation per channel.

## Add new transformations
To add new assets transformations for your channels, you will have to import them into the PIM. The expected file format is YML. You can find more about it in our [technical documentation](https://docs.akeneo.com/2.0/manipulate_pim_data/product_asset/add_new_transformation.html#add-a-channel-configuration-to-use-the-new-transformation).

1.  Go to `Imports`
1.  Create a new import profile or use an existing one that is running the `Asset channel configuration import in Yaml` job
1.  Upload your YML file and process the file

For more details about how to execute an import, please refer to the [Imports](/articles/imports.html) article.

## Udpdate transformations
To change assets transformations for your channels, you need to reimport a new YML file and upload it into Akeneo.

# Export assets transformations

You can export your asset transformations in a YML file by executing an export profile that is running the `Asset channel configuration export in YML` job. This YML file will contain all available asset transformations for all your channels.  
For more details about how to execute an export, please refer to the [Exports](/articles/exports.html) article.
