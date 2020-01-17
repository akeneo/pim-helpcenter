---
id: from-PAM-to-new-AM
themes: manage-your-assets
title: From PAM to new Asset Manager
popular: true
ee-only: true
related: upload-assets, assets-transformation, how-to-migrate-from-pam
---

# From non-structured assets to structured ones

You may know our famous PAM, Product Asset Manager. If not, just a short laius. Since 2015, Akeneo PIM has enabled you to manage assets thanks to the PAM. But the way we managed assets was quite different than with our brand new Asset Manager. Let's see why.

An "old PAM asset" was a non-structured object which had some particularities.

## All the assets had the same properties
In the PAM, it was impossible to add attributes to the assets. They all had the same properties (a code, a description, tags, an end of use date).

## The assets could be localisable but not their values
It was possible to create localisable assets. In fact, only the file was localisable (meaning that you could have one file per locale), but not the values of the properties. For example, if you had 2 activated locales, you could have 2 different files but they would have the same description, tags, etc.

## The assets had mandatory transformations per channel
One very important thing in the PAM was the transformations feature. By default, all the assets had different variations per channel. You imported `reference files` and a `variation` per channel was automatically created. If you wanted to use assets in your product sheets, you had to define these transformations in order to get a variation per channel. You never used the reference file in your product forms.    

## The `assets collection` product attribute could not have different values per locale/channel.
It was totally impossible to define a value per locale neither per channel on this specific product attribute type. The localization was hold by the asset itself.

## There were asset categories with rights on these categories
As for the products, you had the possibility to organize your assets thanks to categories and category trees. There were permissions on that categories. It was possible to have view rights or edit rights on assets of these categories.

# What has changed?
With the new Asset Manager, come new concepts.

## From asset categories to asset families
We replaced the asset categories by the `Asset Families`, making it much more powerful since, in addition to the possibility to organize your assets, it is now possible to define a structure by asset family. You can also define permissions by asset families. It allows you to access or not the content of the family.

## Tags management
The way we handled `tags` was not efficient enough.  
Indeed, it was impossible for you to manage the list of tags created, and also impossible to delete tags.  

That is why we replaced our old tag-management by the possibility to manage them with a `simple or multi-select` attribute type. This way, you have a dedicated screen to see all your tags, to translate them into different languages, and delete them if needed. It also avoids duplicates.  

If you used tags to reference your product, you should be very happy to learn that, as it is now possible to add as many attributes as needed to your assets, you can easily create an asset attribute called `product reference` for example. You will be able to search for this value in the asset library.  

:::info
Thus, in the new asset manager, there is a dedicated tab in each asset, where you can list all the products linked to this asset. Very useful ;)
:::

:::tips
You had asset categories and/or tags, and you wonder how you could retrieve them? We recommend you to read our [step-by-step guide](#) for the migration ;)
:::

## About the transformations
We radically changed the way to define asset transformations. They are not applied per channel anymore, and you can use the reference file in your product sheets. You can also have up to 10 transformations per asset family. This way, you are able to define that, for your ecommerce channel, you want 3 different transformations.
Each variation is created in a new attribute of the asset.

Discover how new transformations work in the [dedicated article](#).

# With a new asset manager come new powerful features
Of course, we improved our existing asset management features. But we also added new ones, that very worth it. Let's discover them!

## Automatic link between assets & products
We know that most of you use a convention to name your assets, often containing the reference of the product, which makes it possible to define a rule to automate the link between assets and products.
We really wanted to ease your daily work, that is why we worked on that specific feature in order to propose it natively in the PIM, that we call the `product link rule`. All the details are [here](#).

## Enrich your assets with more attributes
As mentioned above, you can add up to 100 attributes per asset family, in order to add marketing information to your assets. The list of available attributes is described in [this article](#).

## All media can be managed in Akeneo, even those stored outside of the PIM
Because we know that your assets can be stored on specific media servers, or in a DAM, we introduced a new attribute type `media link` in the Asset Manager, which enables you to add url link in your assets. This way, you can have in your PIM, videos stored on Youtube for example ;)

## Assets deserve completeness
As for the products, we think that defining a completeness level on assets can be very important. It allows you to be way more rigorous in your assets enrichment work. To do that, just tick the `required for completeness` checkbox in your attribute settings.

## I have specific values per locale, what should I do?
Depending on your usecases, we have 2 solutions for you.

### I have .pdf files for my notices: the same notice is declined into several languages.
For this usecase, we advise you to create one asset (let's say `Yali_notice`), with a `media file` or `media link` attribute type, that you will choose as the `attribute used as main media`. Tick the property `value per locale` in the attribute settings. If you want to add other attributes to enrich your notice (for example, a short description), you can add a text attribute type and select the same property `value per locale`. This way, you will be able to upload, let's say, the english version of your notice in the english locale, and the french one in the french locale.

::: info
It's exactly the same when you have different values per channel.
:::

### I sell swimwears and I can't use the same images depending on the selling country.
Indeed, some countries have restriction rules regarding the media. For example, to sell your `floral_bikini` swimwear, you will use images with models in Europe, but not in United Arab Emirates. This way, this time, you won't use the same asset but you will create two different assets: one with the model, one with the bikini only. But, you will create an `asset collection` product attribute, and you will choose the parameter `value per locale`. It will enable you to have a different asset collection depending on the locale!

[screenshot](localisable_attribute)

::: info
It's exactly the same when you have different values per channel.
:::

::: tips
It wouldn't make any sense to apply those 2 solutions at the same time, we let you choose the one which suits best your needs.
:::

# How to migrate from PAM to new Asset Manager?
You understood all the new concepts of the 4.0 Asset Manager and the differences with the current PAM and you are eager to use this new Asset Manager!

The first step is to migrate your PIM in 4.0.
And then, you can migrate your PAM assets to the new Asset Manager.

To ease the PAM assets migration, we wrote a dedicated [step-by-step migration guide ](how-to-migrate-from-pam.html) to explain you how to do it.
