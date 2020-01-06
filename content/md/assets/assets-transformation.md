---
id: assets-transformation
themes: administration, manage-your-assets
title: About the **assets transformations**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# Overview
For each [asset family](#the-asset-family), you can define transformations. They allow you to ask the PIM to automatically generate one or several new variations of a given media file for each asset belonging to your family.

Let's take an example to make it much clearer.

Say we have a `packshots` asset family. In its structure, it has 2 media file attributes:
- the `main_image` attribute in which is stored the main image of your packshot,
- the `thumbnail` attribute in which you want a smaller version of the main image, stored in `main_image`.

The PIM can automatically generate the thumbnail version of your main image for you, and this, thanks to the definition of a transformation!

![Asset transformation example](/img/beta/asset-transformation.svg)

For each transformation, we define:
- a label
- a media file attribute that will be used as the source for your transformation and wisely called *source* attribute: in our example, the `main_image` attribute,
- a media file attribute in which the generated file will be stored, called the *target* attribute: in our example, the `thumbnail` attribute,
- a set of ordered operations to perform on the source picture to generate the target one: in our example, a resizing.

::: info
You can have up to **10** different transformations for one given asset family and each transformation can perform several operations.
:::

You can define the asset transformations via the [API](#https://api.akeneo.com/documentation/asset-manager.html#introduction) or directly in the PIM user interface, by editing a JSON field.

Still not comfortable with transformations and want to better understand? Don't hesitate to go through the next sections where we detail each part of the transformation format.

## Label

It's basically the name you want to give to your transformation.  
It will be used in error messages whenever your transformation failed to generate your variations.

## Source file

The `source` property allows you to define in which attribute value is stored the media file you want to use as the source file for your transformation.

## Target file

The `target` property allows you to define in which attribute value the PIM should generate the new variation.

## Target filename

You can give a name to the generated target file. By default, the naming is based on the filename of the source file. You can define a suffix and/or a prefix that will be concatenated to this filename and be used as the filename of the target file.

::: warning
You need to define at least either a suffix or a prefix, as the target filename can't be the same as the source filename.
:::

Let's take an example to make this much clearer.

Let's say you have a file named `amor_red_model_picture.jpg`. You want to generate a thumbnail version of this file and you want the new generated file to be named `amor_red_model_picture_160x160.jpg`. Then, use the following properties in your transformation for the generated file to be named properly:
- filename_prefix: null,
- filename_suffix: `_160x160` .

## Transformation operations

The `operations` property allows you to define which image transformations should be applied to your source file to generate the target file.

In one single transformation, you can define one or several operations.

In the case you have several operations for the same asset family, note that they will be performed in the same order than they are defined in the `operations` array. So be sure to choose the right order for what you wish to accomplish.

::: warning
Defining the same operation type twice in the same transformation is forbidden as it would totally make no sense.
:::

Please refer to the [API documentation](https://api.akeneo.com/documentation/asset-manager.html#introduction) to discover the expected JSON format.

Here is the list of the available operations:

### Thumbnail
With the `thumbnail` type, you can automatically generate a thumbnail. It keeps the image proportions and crops it if needed.

There are 2 available parameters for this operation:
- `width`: The width of the generated thumbnail in pixels
- `height`: The height of the generated thumbnail in pixels

::: info
Both parameters are required.
:::

### Scale
With the `scale` type, you can resize image while keeping the width/height proportions.

There are 3 available parameters for this operation.
- `width`: The new width of the image in pixels
- `height`: The new height of the image in pixels
- `ratio`: The ratio (in %) for the image resizing. If defined, this parameter will take priority over the 2 other parameters.

::: info
There should be at least one of the 3 parameters defined.
:::

### Change of colorspace
With the `colorspace` type, you can change the image's colorspace. For example, you can turn it to black and white.

There is one available parameter for this operation: `colorspace`. It allows you to choose to which colorspace you want your image to be turned into. It should be one of the following values:
- `rgb`,
- `cmyk`,
- `grey`.

::: info
The `colorspace` parameter is required.
:::

::: info
The `colorspace` parameter is required.
:::

### Resolution

With the `resolution` type, you can change the image resolution.

There are 3 available parameters for this operation.

| Operator name & format | Description |
| ----------------- | -------------- |
| `resolution-x` <br>_integer > 0_ | The new horizontal resolution |
| `resolution-y` <br>_integer > 0_ | The new vertical resolution |
| `resolution-unit` <br>_string, either "ppi" or "ppc"_ | The unit in which the `resolution-x` and `resolution-y` properties were given |

::: info
All parameters are required.
:::

### Resize

With the `resize` type, you can resize image without keeping the width/height proportions.

There are 2 available parameters for this operation.

| Operator name & format | Description |
| ----------------- | -------------- |
| `width` <br>_integer > 0_ | The new width of the image in pixels |
| `height` <br>_integer > 0_ | The new height of the image in pixels |

::: info
Both parameters are required.
:::



----------------------------------

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
