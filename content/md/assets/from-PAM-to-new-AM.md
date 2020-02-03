---
id: from-PAM-to-new-AM
themes: manage-your-assets
title: From PAM to new Asset Manager
popular: true
ee-only: true
related: upload-assets, assets-transformation, pam-migration-guide, what-about-assets
---

# From non-structured assets to structured ones

You may know our famous PAM, Product Asset Manager. If not, just a short laius. Since 2015, Akeneo PIM has enabled you to manage assets thanks to the PAM. But the way we managed assets was quite different than with our brand new Asset Manager. Let's see why.

An "old PAM asset" was a non-structured object which had some particularities.

## Properties
In the PAM, it was impossible to add attributes to the assets. They all had the same properties (a code, a description, tags, an end of use date).

## Asset localization
The assets could be localizable but not their values, creating localizable assets. In fact, only the file was localizable (meaning that you could have one file per locale), but not the values of the properties. For example, if you had 2 activated locales, you could have 2 different files but they would have the same description, tags, etc.

## Transformations per channel
One very important thing in the PAM was the transformations feature. By default, all the assets had different variations per channel, and it was mandatory. You imported `reference files` and a `variation` per channel was automatically created. If you wanted to use assets in your product sheets, you had to define these transformations in order to get a variation per channel. You never used the reference file in your product forms.    

## The assets collection product attribute
The `assets collection` product attribute could not have different values per locale/channel. It was totally impossible to define a value per locale neither per channel on this specific product attribute type. The localization was hold by the asset itself.

## Asset categories
Before the 4.0 version, there were asset categories. Just as the products, you had the possibility to organize your assets thanks to categories and category trees. And there were also specific permissions on these categories: it was possible to define view or edit rights so that the users can only view or edit the assets that are part of the category.

# What has changed?
With the new Asset Manager, come new concepts.

## A new concept: the asset families
With the new Asset Manager, we introduce a new concept: the asset families. It makes the asset management much more powerful than before since it is now possible to define a structure by asset family. You can also define permissions by asset families. It allows you to access or not the content of the family. Learn more about the asset families [here](manage-asset-families.html).

## Tags management
The way we handled `tags` was not efficient enough.  
Indeed, it was impossible for you to manage the list of tags created, and also impossible to delete tags.  

That is why we replaced our old tag-management by the possibility to manage them with a `simple or multi-select` attribute type. This way, you have a dedicated screen to see all your tags, to translate them into different languages, and delete them if needed. It also avoids duplicates.  

If you used tags to reference your product, you should be very happy to learn that, as it is now possible to add as many attributes as needed to your assets, you can easily create an asset attribute called `product reference` for example. You will be able to search for this value in the asset library.  

:::info
Thus, in the new asset manager, there is a dedicated tab in each asset, where you can list all the products linked to this asset. Very useful ;)
:::

:::tips
You had asset categories and/or tags, and you wonder how you could retrieve them? We recommend you to read our [step-by-step guide](pam-migration-guide.html) for the migration :wink:
:::

## About the transformations
We radically changed the way to define asset transformations. They are not applied per channel anymore, and you can use the reference file in your product sheets. You can also have up to 10 transformations per asset family. This way, you are able to define that, for your ecommerce channel, you want 3 different transformations.
Each variation is created in a new attribute of the asset.

Discover how new transformations work in the [dedicated article](assets-transformation.html).

# With a new asset manager come new powerful features
Of course, we improved our existing asset management features. But we also added new ones, that very worth it. Let's discover them!

## Automatic link between assets & products
We know that most of you use a convention to name your assets, often containing the reference of the product, which makes it possible to define a rule to automate the link between assets and products.
We really wanted to ease your daily work, that is why we worked on that specific feature in order to propose it natively in the PIM, that we call the `product link rule`. All the details are [here](assets-product-link-rules.html).

## Enrich your assets with more attributes
As mentioned above, you can add up to 100 attributes per asset family, in order to add marketing information to your assets. The list of available attributes is described in [this article](manage-asset-families.html#add-an-attribute).

## All media can be managed in Akeneo, even those stored outside of the PIM
Because we know that your assets can be stored on specific media servers, or in a DAM, we introduced a new attribute type `media link` in the Asset Manager, which enables you to add url link in your assets. This way, you can have in your PIM, videos stored on Youtube for example ;)

## Assets deserve completeness
As for the products, we think that defining a completeness level on assets can be very important. It allows you to be way more rigorous in your assets enrichment work. To do that, just tick the `required for completeness` checkbox in your attribute settings.

## I have specific values per locale, what should I do?
Depending on your use cases, we have 2 solutions for you.

### I have .pdf files for my notices: the same notice is declined into several languages.
For this use case, we advise you to create one asset (let's say `Yali_notice`), with a `media file` or `media link` attribute type, that you will choose as the `attribute used as main media`. Tick the property `value per locale` in the attribute settings. If you want to add other attributes to enrich your notice (for example, a short description), you can add a text attribute type and select the same property `value per locale`. This way, you will be able to upload, let's say, the english version of your notice in the english locale, and the french one in the french locale.

::: info
It's exactly the same when you have different values per channel.
:::

### I sell swimwears and I can't use the same images depending on the selling country.
Indeed, some countries have restriction rules regarding the media. For example, to sell your `floral_bikini` swimwear, you will use images with models in Europe, but not in United Arab Emirates. This way, this time, you won't use the same asset but you will create two different assets: one with the model, one with the bikini only. But, you will create an `asset collection` product attribute, and you will choose the parameter `value per locale`. It will enable you to have a different asset collection depending on the locale!

::: info
It's exactly the same when you have different values per channel.
:::

::: tips
It wouldn't make any sense to apply those 2 solutions at the same time, we let you choose the one which suits best your needs.
:::

# How to migrate from PAM to new Asset Manager?
We hope you understood all the new concepts of the 4.0 Asset Manager and the differences with the current PAM. You must be eager to use this new Asset Manager, so let's see how to do that!

The first step is to migrate your PIM in 4.0.
And then, you can migrate your PAM assets to the new Asset Manager.

:::tips
To ease the PAM assets migration, we wrote a dedicated [step-by-step migration guide ](pam-migration-guide.html) to explain you how to do it.
:::

# Q&A

## What happened to my asset categories?
Don't be surprised: there are no asset categories anymore in the 4.0 Asset Manager. If you used them in your PAM assets, don't worry, there are ways to retrieve them.
- You had 100 or less than 100 asset categories? Depending on the path you choose for your asset migration, you can create a `single option` or `multiple options` attribute type in your asset family that you will call "categories", and then fill in the options with your asset categories.
- You had more than 100 asset categories? Depending on the path you choose for your asset migration, you can create a `text` attribute type in your asset family that you will call "categories", and then retrieve your asset categories separated by a coma.
Thanks to these two possibilities, you will be able to search for your assets, based on their old categories. Indeed, in the Asset Manager, you can search on options (thanks to filters) and on text attributes (with a search bar).
More information on the different migration strategies [here](pam-migration-guide.html#how-can-I-migrate-my-PAM-assets?)

## I defined permissions on categories, how should I do now?
In the Asset Manager, the permissions are managed at the asset family level. It enables users to have edit rights or only view rights on the family.

## I defined fake transformations in the PAM, what should I do now?
In the PAM, transformations were mandatory to use assets in your product sheets. It was impossible to define 0 transformation and use the reference file in the product. So, you probably used "fake" transformations (for instance: `scale: "99%" or "100%"`, or `colorspace: "rgb"`).
With the new Asset Manager, transformations are not mandatory anymore. If you want to generate variations, the only thing to do is to fill in the `transformations` property of the asset family. If you don't, any variation will be created :wink:. More information about the asset transformations [here](assets-transformation.html)

## I used the "tags" property, how can I retrieve my old tags?
In the Asset Manager, it's possible to handle tags thanks to a `single option` or `multiple options` attribute type. It allows you to have a dedicated screen to manage your assets.

