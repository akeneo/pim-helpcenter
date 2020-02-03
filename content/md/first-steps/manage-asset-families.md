---
id: manage-asset-families
themes: catalog-settings, manage-your-assets
title: Manage your **asset families**
popular: false
ee-only: true
related: what-about-assets, enrich-your-assets
---

# Create an asset family

When you open the `Assets` menu, you discover the asset library. On this screen, we display the existing assets **by asset family**.

::: warning
It is not possible to have an asset without asset family. So if you don't have any asset family, the first thing to do is to create one.
:::

To create an asset family, click on `Create` then `Create an asset family`.

![Create a family in the asset library](../img/Assets_LibraryCreateFamily.png)


Once it is done, you will arrive on the asset family settings, where you can:
- [Define the asset attributes ](#define-its-asset-attributes) (`Attributes` tab)
- [Define the family properties ](#define-the-asset-family-properties) (`Properties` tab)
- [Define the family permissions](#set-rights-on-an-asset-family) (`Permissions` tab)
- [Define and edit the product link rules](#define-product-link-rules-on-an-asset-family) (`Product link rules` tab)
- [Define and edit the asset transformations](#define-asset-transformations-in-an-asset-family) (`Transformations` tab)

# Define its asset attributes
In the `Attributes` tab, you can define what are the attributes for the assets.  
For example, a `Video` asset family could be described by the following information:
- a code
- a label
- a Youtube link
- tags
- a description
- a duration

![Asset family attributes](../img/Assets_Attributes.png)

## Add an attribute
To add an attribute, follow these steps:
1.  Go to the `Attributes` tab of an asset family
1.  Click on `Add an attribute`
1.  Input the label of the attribute in the current catalog locale
1.  The code is automatically generated using the label but you can update it (this code must be unique and may only contain letters, numbers and underscores)
1.  Select the attribute type:
    - **Media file**: for images and files stored internally
    - **Media link**: for images and files stores externally (when you have a url link)
    - **Text**: for text or text area attributes. You can also use the `rich text editor` for this attribute type.
    - **Number**: for number attributes
    - **Single option**: to define a list of options with a single choice
    - **Multiple options**: to define a list of options with multiple choices
1.  Tick `Value per locale` if your asset has different values per locale for this attribute
1.  Tick `Value per channel` if your asset has different values per channel for this attribute
1.  Click on the `Save` button or press `Enter` to add the attribute

![Add attributes](../img/Assets_AddAttributes.png)

The attribute is now created and an edit pop-in opens with the attribute parameters depending on the attribute type.

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 100 attributes per asset family for this feature. If you try to create more than 100 attributes, you will have a blocking message.
:::

## Edit an attribute
To edit an attribute, follow these steps:
1.  Go to the `Attributes` tab of an asset family
1.  Click on the `Edit` icon
1.  An edit pop-in opens with the attribute parameters depending on the attribute type
1.  You can translate the label of the attribute by switching the current locale in the header
 ![Locale switcher on asset attributes](../img/Assets_AttributesLocaleSwitcher.png)
1.  You can define if this attribute is required for the asset completeness or not (see the [Define the completeness](#define-the-completeness) part).
1.  It is also possible to set each attribute as `read only in the UI`. It means that it is impossible to change this attribute value (see the [Read only](#set-an-attribute-as-read-only) part).
1.  Depending on the attribute type, set the specific parameters of the attribute (see below the specific parameters)
1.  Click on the `Save` button or press `Enter` to save the attribute parameters

### Edit a media file attribute
 - *Max file size (MB)*: maximum file size allowed in MB
 - *Media type*: choose either `image`, `pdf` or `other`. It has an impact on the preview but there is no control. It means that if you choose `pdf` as media type, you can still add an image in this attribute but we won't generate any preview.
 - *Allowed extensions*: allowed files extensions (gif, jpeg, jpg, pdf, png...)

:::info
Note that there is no preview for the `other` media type.
:::

### Edit a media link attribute
 - *Prefix*: to put a prefix on all the media link (for example: `mydam`)
 - *Suffix*: to put a suffix on all the media link (for example: `.thumbnail.jpg`)
 - *Media type*: choose either `image`, `pdf`, `youtube` or `other`

:::info
Note that there is no preview for the `other` media type.
:::

:::info
The prefix and suffix are not mandatory.
:::

#### Specificity for Youtube links
If you want to use a Youtube url link in your asset, you have to put the ID of the video, not the entire url link.

For instance: in the asset edition screen, instead of putting the entire url link `https://www.youtube.com/watch?v=Lp8N8VhoaahhQ` in the media link attribute, you must put the **ID of the video** which is: `Lp8N8VhoaahhQ`. You'll discover immediately the thumbnail of the video. :wink:   

![Youtube link](../img/Assets_YoutubeLink.png)

Also, no need to add prefix and suffix on Youtube links: **these fields must be empty**.


### Edit a text attribute
 - *Maximum number of characters*: maximum number of characters that an attribute value can have
 - *Text area*: long text

If `Text area`:
 - *Rich Text Editor*: activates the WYSIWYG feature to format the text

If not `Text area`:
 - *Validation rule*: defines how the value should be validated (such as an URL, an email, or using a regular expression)

### Edit a number attribute
   - *Decimal values allowed*: allows decimal values for this attribute
   - *Min value*: the smallest value allowed
   - *Max value*: the largest value allowed

:::tips
To allow positive values only, define a `min value` equals to 0.  
To allow negative values only, define a `max value` equals to 0.
:::   

### Edit a single/multiple options attribute  
  - The `Manage options` button enables to [manage the options of the list](#manage-the-options)


## Manage the options
The single/multiple options attributes can be very useful to manage your tags on assets, since you can search for assets thanks to these options.

To define the options of a single/multiple options attribute, follow these steps:
1.  Go to the `Attributes` tab of an asset family
1.  Click on the `Edit` icon of the attribute
1.  An edit pop-in opens with the attribute parameters
1.  Click on the `Manage options` button
1.  A fullscreen opens to manage the options

![Manage options](../img/Assets_ManageOptions.png)

### Add options
1. Write your option label
1. The option code is automatically generated using the label, but it can also be updated (this code must be unique and may only contain letters, numbers and underscores)
1. Write your next option label
1. Click on the `Save` button, the fullscreen is closed

![Add options](../img/Assets_AddOptions.png)

:::warning
The code can't be edited afterwards, you can only edit/translate the label.  
:::

:::tips
To quickly input all your options:
1. You just have to input the 1st option label
1. Then press `Enter`
1. Input the 2nd option label
1. Then press `Enter`
1. And so on...
:::

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 100 options per attribute for this feature. If you try to create more than 100 options, you will have a blocking message.  
:::

### Translate options
1. Change the catalog locale using the switcher
1. Translate the option label
1. Translate the next option label
1. Click on the `Save` button, the fullscreen is closed

![Translate options](../img/Assets_TranslateOptions.png)

:::info
To help you for the translation, the labels of the option on other locales are displayed in the right panel.
:::

:::tips
To quickly translate all your options:
1. You just have to translate the 1st option label
1. Then press `Enter`
1. Translate the 2nd option label
1. Then press `Enter`
1. And so on...
:::

### Remove options
To remove an option, click on the cross at the end of the option line.

## Define the completeness
To define the attributes required for the completeness of an asset:
1.  Go to the `Attributes` tab of an asset family
1.  Click on the `Edit` icon of an attribute
1.  Tick `Required for completeness` if this attribute is required for the completeness of an asset
1. Click on `Save` or press `Enter`

![Asset attribute completeness](../img/Assets_AttributeCompleteness.png)

If this attribute is not required for the completeness, untick `Required for completeness`.

## Set an attribute as read only
If you don't want the users to be able to modify an attribute value:
1. Go to the `Attributes` tab of an asset family
1. Click on the `Edit` icon of an attribute
1. Tick `Read only in the UI`
1. Click on `Save` or press `Enter`

:::tips
It can be useful if this attribute is automatically populated. For example, if this is a `target` attribute of a transformation, or if the value comes from a third party tool such as a DAM.
:::

## Delete an attribute
To delete an attribute, follow these steps:
1.  Go to the `Attributes` tab of an asset family
1.  Click on the `Edit` icon of the attribute you want to delete
1.  An edit pop-in opens with the attribute parameters
1.  Click on `Delete the attribute`
1.  A confirmation pop-in opens to confirm that you want to delete the attributes
1.  Click on the `Delete` button

::: warning
The attribute and its relevant information will be deleted in the assets of the asset family. Once you have confirmed the action, it cannot be reverted.
:::

# Define the asset family properties
In the `Properties` tab, you can edit the label of the asset family but also **choose which attribute is used as main media** for the assets of this family. The `main media` attribute is the attribute that:
- is used to be displayed in the **asset grid** and in the **product grid**,
- is used as the **asset thumbnail** on each **asset page** and **product form** that contains this asset
- is used to **mass upload assets** in the family.

You can choose to use either a `media link` or a `media file` attribute type.

:::info
As explained in the [upload asset part](create-and-display-assets.html#upload-and-create-several-assets-at-the-same-time), you can't mass upload asset in an asset family whose the `attribute as main media` is a `media link` attribute type.
:::

You can also translate the label of the asset family by switching the current catalog locale in the header.

![Asset family properties](../img/Assets_AssetFamilyProperties.png)

## Delete an asset family
To delete an asset family, follow these steps:
1.  Go to the `Properties` tab of the asset family you want to delete
1.  In the top right corner of the header, click on `...` for other actions and then `Delete family`
1.  A confirmation pop-in opens to confirm that you want to delete the asset family
1.  Click on `Delete`

![Asset family deletion](../img/Assets_FamilyDeletion.png)


::: warning
You cannot delete an asset family if:
- This asset family has some assets: first, you need to [delete the assets of this asset family](work-on-your-assets.html#delete-assets).
- This asset family is linked to some product attributes: then, you need to [delete the related product attributes](manage-your-attributes.html#delete-an-attribute) to this asset family.
:::

# Define product link rules on an asset family
The product link rule enables you to automatically link assets to products, based on assets name or attributes. This rule is defined at the asset family level.

This rule is launched by the PIM after the asset creation.

The product link rule format is quite technical to define but if you want to go deeper into this powerful feature, [this article](assets-product-link-rules.html) is made for you ;)

:::warning
The product link rule is only available to link assets to products. Yet, linking assets to product models has to be done manually, for now.
:::

:::info
You can have up to two different product link rules for one given asset family.
:::

A piece of advice: when defining two different rules on an asset family, make sure you define different product selections in each rule, as shown in the example above. Why? Because you could experience performance issues. If you want to assign your assets to two different product attributes on a given selection of products, use one single rule, with two assignments in the assign_assets_to field.

# Define asset transformations in an asset family
It is possible to define transformations at the asset family level. It means that, for each asset of a given asset family, transformations will be automatically applied.

The settings of the transformations is done via the API or via the UI, in the `Transformations` tab of an asset family.
I recommend you to read [this article](assets-transformation.html) to know how to define the asset transformations.

The following operations are available:
- `colorspace` (change the image's colorspace)
    - parameters:
        - `colorspace` (string): one value among `rgb`, `cmyk` or `grey` (mandatory)
- `scale` (resize image while keeping the width/height proportions)
    - parameters: (at least one of the following)
        - `width` (int > 0): new width of the image in pixels
        - `height` (int > 0): new height of the image in pixels
        - `ratio` (int > 0): ratio (in %) ratio for the image resizing. If set, will take priority over the 2 other parameters
- `thumbnail` (make a cropped thumbnail, image proportions are preserved)
    - parameters:
        - `width` (int > 0): width of the generated thumbnail in pixels (mandatory)
        - `height` (int > 0): height of the generated thumbnail in pixels (mandatory)
- `resize` (resize without preserving the proportions)
    - parameters:
        - `width` (int > 0): width of the new image in pixels (mandatory)
        - `height` (int > 0): height of the new image in pixels (mandatory)
- `resolution` (change image resolution)
    - parameters:
        - `resolution-unit` (string) one value among `ppi`, `ppc` (mandatory)
        - `resolution-x` (int > 0) new horizontal resolution (mandatory)
        - `resolution-y` (int > 0) new vertical resolution (mandatory)

  :::info
  The asset transformations are not mandatory, and you can define up to 10 transformations per family.
  :::

# Set rights on an asset family
To set rights on an asset family, please read [this article](access-rights-on-asset-families.html).

Now you can [create](create-and-display-assets.html) and [enrich](work-on-your-assets.html) your assets !
