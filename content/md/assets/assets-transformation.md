---
id: assets-transformation
themes: administration, manage-your-assets
title: About the **assets transformations**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# Overview
For each channel, you can define transformations that will be applied to each of your assets so as to create a variation for each of your [channels](/articles/what-is-a-channel.html).

If no asset transformation is set for your channel, the PIM will not be able to generate a variation.

::: warning
If the reference file (the original asset) does not fit the transformation requirements, for instance, it’s too small to be resized, the transformation will not be done.
:::

The following assets transformation are available:
- `resolution`: change an image resolution
available options:
`resolution`: resolution value
`resolution-unit`: unit of the resolution (possible values : ppc, ppi)
- `colorspace`: change an image color space (possible values: grey, cmyk, rgb)
- `resize`: resize an image without keeping its proportions
available options:
`width`: in pixels
`height`: in pixels
- `scale`: scale an image
available options:
`width`: in pixels
`height`: in pixels
`ratio`: scaling percentage
- `thumbnail`: create a miniature image (the image proportion is kept)
available options:
`width`: maximum width in pixels
`height`: maximum height in pixels

::: tips
The assets transformation given above are not enough for you? You need a new type of assets transformations? It's totally possible! You can define new types of assets transformations by following the [technical cookbook](https://docs.akeneo.com/2.0/manipulate_pim_data/product_asset/add_new_transformation.html) we prepared for you.
:::

# Check the current assets transformations

You can check if your channel has its own asset transformation by going to `Settings`/`Channels` then click on your channel, and go under the tab `Asset transformations`.

![image](../img/Settings_ChannelsAssetsTransformations.png)

# Associate a transformation to a channel

You can define one or more asset transformation per channel.
To add new assets transformations for your channels, you will have to import them into the PIM. The expected file format is YML. Below is an example of the file.

```yml
asset_channel_configurations:
    mobile:
        configuration:
            scale:
                width: 200
            colorspace:
                colorspace: gray
    print:
        configuration:
            resize:
                width: 400
                height: 500
    ecommerce:
        configuration:
            scale:
                ratio: 50
```

When you YML file is ready:
1.  Go to `Imports`
1.  Create a new import profile or use an existing one that is running the `Asset channel configuration import in Yaml` job
1.  Upload your YML file and process the file

For more details about how to execute an import, please refer to the [Imports](/articles/imports.html) article.

::: info
You can update the assets transformations for your channels by reimporting a new YML file into Akeneo.
:::

# Export assets transformations

You can export your asset transformations in a YML file by executing an export profile that is running the `Asset channel configuration export in YML` job. This YML file will contain all available asset transformations for all your channels.  

1.  Go to `Exports`
1.  Click on an export profile that is running the `Asset channel configuration export in Yaml` job
1.  Click on `Export now`
1.  Once the export is finished, click on `Download generated files` to download the YML file

For more details about how to execute an export, please refer to the [Exports](/articles/exports.html) article.
