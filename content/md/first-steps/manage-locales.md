---
id: manage-your-locales
themes: catalog-settings
title: View your **locales**
popular: false
ee-only: false
related: what-is-a-locale
---

# Overview

The locales are used to set values for attributes which may differ according to the relevant language/locale (for examples English UK (en_GB), English US (en_US), English AU (en_AU)).   
For more details, see [What is a locale](/articles/what-is-a-locale.html).

# View locales

To view locales, go to `Settings/Locales`.     
You can search on the locale’s code and filter on its status `Activated`: All/Yes/No.

![View locales](../img/Settings_Locales.png)

# How to enable a locale?

A locale is activated when it is added to a channel, it cannot be enabled from the locale settings page or through a CSV or XLSX locale import. To learn how to enable a locale from the channel see [Manage your channels](/articles/manage-your-channels.html).

:::info
Locales which are not used in at least one channel are shown as inactive.
:::

# How to add a new locale?

You are missing a locale? It is very simple to add a new locale using imports.
For instance, to add a `en_HK` locale, follow these steps:
1.  Create an import file XLSX or CSV containing two values: a locale `code` column like below:
`code`
`en_HK`
1.  Import this file using an import job (`csv_locale_import` or `xlsx_locale_import`). Once the file is imported, the new locale will appear under `Settings/Locales`.
1.  To enable it and add it to a channel, use a channel import job (again csv or xlsx) and add the `en_HK` code in the `locales` column.

And that's it! Your `en_HK` locale is activated for your channel!

:::warning
Your locale will not have a label thus it is not possible to add it directly in the channel's settings page.
:::
