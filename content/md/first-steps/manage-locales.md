---
id: manage-your-locales
themes: catalog-settings
title: Manage your **locales**
popular: false
ee-only: false
related: what-is-a-locale
---

# Manage your locales

## See the available locales 

To view the available locales in Akeneo, go to `Settings/Locales`. You can find a locale using its code. You can also filter on its status `Activated`: All/Yes/No.

![View locales](../img/Settings_Locales.png)

# How to enable/disable a locale?

A **locale is activated when it is added to a channel**, it cannot be enabled from the locale settings page or through a CSV or XLSX locale import. To learn how to enable a locale from the channel check the following article: [Manage your channels](manage-your-channels.html).

:::info
An enabled locale means that it is used in at least one channel.  
If a locale is disabled, it means it is not used in any channel.
:::

# How to add a new locale?

Akeneo offers more than 200 locales by default, but if you are missing a locale or if you need a custom locale, it is very easy to add a new one using imports.

## Format of the new locale

Your new locale has to respect one of the following formats: xx_YY, xxx_YY, xx_YY_ZZ... If you upload a `es_DE` locale, it will appear as `Spanish (Germany)` in Akeneo. If you upload a locale called `English_test_web` it will appear as `English (test, Web)`. 

The PIM limits to 20 the number of characters that can be used for a locale name.

## Steps to add a new locale

For instance, to add a `en_HK` locale, follow these steps:
1.  Create a XLSX or CSV import file containing a locale `code` column and your new locale code, like below:  
  `code`  
  `en_HK`  
1.  Import this file using the `csv_locale_import` or `xlsx_locale_import`job. Once the file is imported, the new locale will appear under `Settings/Locales`.
1.  To enable it and add it to a channel, go to `Settings/Channels` and add it in the `Locales` field. If you cannot find it, use a channel import job (csv or xlsx) and add the `en_HK` code in the `locales` column along with your current enabled locales for this channel if you have any.

And that's it! Your `en_HK` locale is activated for your channel! You will be able to find it in your Product grid, as well as in the product forms.

:::ee
If you do not see your new locales in the User Interface, it's maybe because you forgot to set permissions on it in `Settings/Locales`. Select your locale and go under the `Permissions` tab. To know how to set up permissions on locales, check the [Set Rights depending on the locale](access-rights-on-products.html#rights-depending-on-the-locale) article.
:::

:::warning
You can easily add locales, but **you cannot remove them afterwards from the user interface**. Please make sure you really need additional locales before uploading them!
:::

# Set permissions on locales

Like on attribute groups and categories, you can define specific user permissions on locales. Check the [Set Rights depending on the locale](access-rights-on-products.html#rights-depending-on-the-locale) article to know how to add/remove permissions on locales.
