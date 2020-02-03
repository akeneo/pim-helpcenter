---
id: assets-transformation
themes: administration, manage-your-assets
title: About the **assets transformations**
popular: false
ee-only: true
related: work-with-assets, upload-assets
---

# Overview
For each [asset family](manage-asset-families.html), you can define transformations. They allow you to ask the PIM to automatically generate one or several new variations of a given media file for each asset belonging to your family. It can be very convenient if you need several formats of your media. For instance, on your ecommerce website, you could have a thumbnail, a fullscreen image and an horizontal one dedicated to your carousel.

How does it work in the PIM? Let's take an example to make it clear.

Say we have a `packshots` asset family. In its structure, it has 2 media file attributes:
- the `main_image` attribute in which is stored the main image of your packshot,
- the `thumbnail` attribute in which you want a smaller version of the main image, stored in `main_image`.

The PIM can automatically generate the thumbnail version of your main image for you, and this, thanks to the definition of a transformation!

![Assets Transformations](../img/Assets_Transformations.png)

For each transformation, we define:
- a label
- a media file attribute that will be used as the source for your transformation and wisely called *source* attribute: in our example, the `main_image` attribute,
- a media file attribute in which the generated file will be stored, called the *target* attribute: in our example, the `thumbnail` attribute,
- a set of ordered operations to perform on the source picture to generate the target one: in our example, a resizing.

::: info
You can have up to **10** different transformations for one given asset family and each transformation can perform several operations.
:::

You can define the asset transformations via the [API](#https://api.akeneo.com/documentation/asset-manager.html#introduction) or directly in the PIM user interface, by editing a JSON field.

![Assets Transformations Format](../img/Assets_TransformationsFormat.png)

::: warning
The asset transformations are automatically generated at the asset creation. If you edit the transformations settings after the asset creation and you want them to be applied on your existing assets, don't forget to click on `launch transformations`, so that they can be generated on all your existing assets :wink:
:::

::: info
**The PIM only generates variations for image files having the extensions: .jpg, .jpeg, .png...**       
Natively, the PIM cannot generate variations for a PDF file or AVI files for instance.
:::

Still not comfortable with transformations and want to better understand? Don't hesitate to go through the next sections where we detail each part of the transformation format.

# How does it work?

In this part, we will dig into the parameters of the transformations format and will look at an example of how this powerful feature works. Let's go!


## Label

It's basically the name you want to give to your transformation. For instance: `Thumbnail_transformation`.
It will be used in error messages whenever your transformation failed to generate your variations.

## Source file

The `source` property allows you to define in which attribute value is stored the media file you want to use as the source file for your transformation. For instance: `main_image`.

## Target file

The `target` property allows you to define in which attribute value the PIM should generate the new variation. For instance: `Thumbnail_variation`.

## Target filename

You can give a name to the generated target file. By default, the naming is based on the filename of the source file. You can define a suffix and/or a prefix that will be concatenated to this filename and be used as the filename of the target file.

::: warning
You need to define at least either a suffix or a prefix, as the target filename can't be the same as the source filename.
:::

Let's take an example to make this much clearer.

Let's say you have a file named `victor_packshot.jpg`. You want to generate a thumbnail version of this file and you want the new generated file to be named `victor_packshot_160x160.jpg`. Then, use the following properties in your transformation for the generated file to be named properly:
- filename_prefix: null,
- filename_suffix: `_160x160` .

## Transformation operations

The `operations` property allows you to define which image transformations should be applied to your source file to generate the target file.

In one single transformation, you can define one or several operations. It means that you can combine transformations: for instance, you can have a `scale` transformation and a `colorspace` transformation at the same time.

In the case where you have several operations for the same asset family, note that they will be performed in the same order as they are defined in the `operations` array. So be sure to choose the right order for what you wish to accomplish.

::: warning
Defining the same operation type twice in the same transformation is forbidden as it would totally make no sense.
:::

Please refer to the [API documentation](https://api.akeneo.com/concepts/asset-manager.html#focus-on-the-transformations) to discover the expected JSON format.

Here is the list of the available operations:

### Thumbnail
With the `thumbnail` type, you can automatically generate a thumbnail. It keeps the image proportions and crops it if needed.

| Operator name | Description |
| ----------------- | -------------- |
| `width` | The width of the generated thumbnail in pixels |
| `height` | The height of the generated thumbnail in pixels |

::: info
Both parameters are required.
:::

### Scale
With the `scale` type, you can resize the image while keeping the width/height proportions.

| Operator name | Description |
| ----------------- | -------------- |
| `width` | The new width of the image in pixels |
| `height` | The new height of the image in pixels |
| `ratio` | The ratio (in %) for the image resizing. If defined, this parameter will take priority over the 2 other parameters.|

::: info
There should be at least one of the 3 parameters defined.
:::

### Change of colorspace
With the `colorspace` type, you can change the image's colorspace. For example, you can turn it to black and white.

There is one available parameter for this operation: `colorspace`. It allows you to choose which colorspace you want your image to be turned into. It should be one of the following values:
- `rgb`,
- `cmyk`,
- `grey`.

::: info
The `colorspace` parameter is required.
:::

### Resolution

With the `resolution` type, you can change the image resolution.

There are 3 available parameters for this operation.

| Operator name | Description |
| ----------------- | -------------- |
| `resolution-x` | The new horizontal resolution |
| `resolution-y` | The new vertical resolution |
| `resolution-unit` | The unit in which the `resolution-x` and `resolution-y`  properties were given (either "ppi" or "ppc") |

::: info
All parameters are required.
:::

### Resize

With the `resize` type, you can resize an image without keeping the width/height proportions.

There are 2 available parameters for this operation.

| Operator name | Description |
| ----------------- | -------------- |
| `width` | The new width of the image in pixels |
| `height` | The new height of the image in pixels |

::: info
Both parameters are required.
:::

# Dealing with several transformations

As stated before, you can define **up to 10 transformations** by asset family. So in the case, you need several transformations for one given family, you will need to observe some business rules.

## Unicity of the target value
In the same asset family, you **cannot have two transformations with the same target**, i.e. exactly the same `attribute`, `channel` and `locale` in your `target` property.

Otherwise, your first generated target file may be erased by the next transformation.

### Example
Let's say that you have 2 transformations on your asset family:
- A transformation named "Transformation 1":
  * the `filename_prefix` property is "t1_",
  * the attribute `main_image` is the source *(non-localisable & non-scopable)*,
  * the attribute **`thumbnail`** is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.
- A transformation named "Transformation 2":
  * the `filename_prefix` property is "t2_",
  * the attribute `main_image_2` is the source *(non-localisable & non-scopable)*,
  * the attribute **`thumbnail`** is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.

This example will generate an error because both transformations have the same target.

## Non-unicity of the source value
In the same asset family, you **can have two transformations with the same source**, i.e. exactly the same `attribute`, `channel` and `locale` in your `source` property.

Indeed, it allows you to generate different versions of your source file.

### Example
Let's say that you have 2 transformations on your asset family:
- A transformation named "Transformation 1":
  * the `filename_prefix` property is "t1_",
  * the attribute **`main_image`** is the source *(non-localisable & non-scopable)*,
  * the attribute `thumbnail` is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.
- A transformation named "Transformation 2":
  * the `filename_prefix` property is "t2_",
  * the attribute **`main_image`** is the source *(non-localisable & non-scopable)*,
  * the attribute `carousel_2` is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `resize` one *(150x150)*.

This example is completely valid.

## Unicity of the target filename
In the same asset family, you **cannot have two transformations with the same target filename**, i.e. exactly the same `source`, `filename_prefix` and `filename_suffix`.

Otherwise, the PIM would create two files called exactly the same way, which can cause you trouble if you want to retrieve them.

### Example
Let's say that you have 2 transformations on your asset family:
- A transformation named "Transformation 1":
  * the `filename_prefix` property is **"thumbnail_"**,
  * the attribute `main_image` is the source *(non-localisable & non-scopable)*,
  * the attribute `thumbnail` is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.
- A transformation named "Transformation 2":
  * the `filename_prefix` property is **"thumbnail_"**,
  * the attribute `main_image` is the source *(non-localisable & non-scopable)*,
  * the attribute `thumbnail_2` is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.

This example will generate an error because both target filenames are exactly the same.

## A source value cannot be a target value

In the same asset family, you **cannot have two transformations with the first one defining a source value as the target value of the second one**. And vice versa.

### Example
Let's say that you have 2 transformations on your asset family:
- A transformation named "Transformation 1":
  * the `filename_prefix` property is "t1_",
  * the attribute `main_image` is the source *(non-localisable & non-scopable)*,
  * the attribute **`thumbnail`** is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.
- A transformation named "Transformation 2":
  * the `filename_prefix` property is "t2_",
  * the attribute **`thumbnail`** is the source *(non-localisable & non-scopable)*,
  * the attribute `thumbnail_2` is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.

This example will generate an error because the source of the second transformation is the target of the first one.

### Example
Let's say that you have 2 transformations on your asset family:
- A transformation named "Transformation 1":
  * the `filename_prefix` property is "t1_",
  * the attribute `main_image` is the source *(non-localisable & non-scopable)*,
  * the attribute **`thumbnail`** is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.
- A transformation named "Transformation 2":
  * the `filename_prefix` property is "t2_",
  * the attribute `main_image_2` is the source *(non-localisable & non-scopable)*,
  * the attribute `main_image` is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.

This example will also generate an error because both the target of the second transformation is the source of the first one.

### Example
Let's say that you have set up 2 transformations on your asset family:
- A transformation named "Transformation 1":
  * the `filename_prefix` property is "t1_",
  * the attribute `main_image` is the source (non-localisable but scopable: **channel= `ecommerce`**),
  * the attribute **`thumbnail`** is the target *(non-localisable & non-scopable)*.
  * The operation to apply is a `thumbnail` one *(150x150)*.
- A transformation named "Transformation 2":
  * the `filename_prefix` property is "t2_",
  * the attribute `main_image_2` is the source *(non-localisable & non-scopable)*,
  * the attribute `main_image` is the target (non-localisable & but scopable: **channel= `print`**),.
  * The operation to apply is a `thumbnail` one *(150x150)*.

This last example is valid because the source attribute value of the first transformation is **different** from the target attribute value of the second transformation, as they are referencing **different channels**.

All the details are in our [API](https://api.akeneo.com/concepts/asset-manager.html#focus-on-the-transformations) documentation.
