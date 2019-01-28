---
id: assets-transformation
themes: administration, manage-your-assets
title: About the **assets transformations**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# Overview
For each channel, you can define a specific asset transformation. This transformation will be applied on each assets created in the PIM and will be used to generate asset variations for your [channels](what-is-a-channel.html).
**Asset transformations can be imported using a YML file**, you will find more information in the Add a transformation to a channel section below.

If no asset transformation is set for a channel, the PIM will not be able to generate a variation. 

::: warning
If the reference file (the original asset) does not fit the transformation requirements, for instance, if it’s too small to be resized, the transformation will not be applied and a message will be displayed in the interface.
:::

The following assets transformation are available:
- `resolution`: change an image resolution, available options are:
    - `resolution`: resolution value
    - `resolution-unit`: unit of the resolution (possible values : ppc, ppi)
- `colorspace`: change an image color space (available values are: grey, cmyk, rgb)
- `resize`: resize an image without keeping its proportions, available options are:
    - `width`: in pixels
    - `height`: in pixels
- `scale`: scale an image, available options are:
    - `width`: in pixels
    - `height`: in pixels
    - `ratio`: scaling percentage
- `thumbnail`: create a miniature image (the image proportion is kept), available options are:
    - `width`: maximum width in pixels
    - `height`: maximum height in pixels

You can combine transformations, for instance, you can have a `scale` transformation and a `colorspace` transformation at the same time. The YML file to upload will look like the following one:

```yml
asset_channel_configurations:
    mobile:
        configuration:
            scale:
                ratio: 50
            colorspace:
                colorspace: gray
```

If the assets transformation given above are not enough for you, you can create new assets transformations. You can define new types of assets transformations by following the [technical cookbook](https://docs.akeneo.com/latest/manipulate_pim_data/product_asset/add_new_transformation.html) we prepared for you.

::: tips
**You'd like to keep your reference file as it is for your channel's variations? Use a 100% scale transformation**!
:::

::: warning
**The PIM only generates variations for image files having the extensions: .jpg, .jpeg, .png...**       
Natively, the PIM cannot generate variations for a PDF file or AVI files for instance.
:::

# Check your current assets transformations

You can check if your channel has its own asset transformation by going to `Settings`/`Channels` then click on your channel, and go under the tab `Asset transformations`.

![image](../img/Settings_ChannelsAssetsTransformations.png)

If there is no transformation, add a new transformation.

# Add a transformation to a channel

To add an asset transformation to your channel, you need to use an import profile. 
The expected file format is YML. You will find below an example of a YML file:

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

When your YML file is ready:
1.  Go to `Imports`
1.  Create a new import profile or use an existing one that is running the `Asset channel configuration import in Yaml` job
1.  Upload your YML file and process the file

For more details about how to execute an import, please refer to the [imports](imports.html) article.

::: info
You can update the asset transformations for your channels by reimporting a new YML file into Akeneo. It is not possible to remove an asset transformation from the UI.
:::

# Export assets transformations

You can export your asset transformations in a YML file by executing the `Asset channel configuration export in YML` job. The YML file generated will contain all available asset transformations for all your channels.  

1.  Go to `Exports`
1.  Click on an export profile that is running the `Asset channel configuration export in Yaml` job
1.  Click on `Export now`
1.  Once the export is finished, click on `Download generated files` to download the YML file

For more details about how to execute an export, please refer to the article dedicated to [exports](exports.html).

::: tips
If you need to edit your asset transformation, simply export your current asset transformations, edit the YML file and reimport it!
:::
