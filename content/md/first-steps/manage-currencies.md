---
id: manage-your-currencies
themes: catalog-settings
title: View and enable **currencies**
popular: false
ee: false
---

# Overview

You have 294 currencies available in Akeneo. Currencies are used to set values for the `Price` attribute type. Currencies are not related to locales.

::: info
When a `Price` attribute type is created, it can have as many values as needed as long as the relevant currency has been activated in the PIM.
:::

# View currencies

To view the currencies, go to `Settings/Currencies`. The grid displays all currencies available in the PIM.   
You can search on the currency’s code and filter on its status `Activated`: `All`/`Yes`/`No`.

![View currencies](../img/Settings_Currencies.png)

# Enable/disable a currency

Each currency line comes with a shortcut action button to enable or disable it.
1.  Place your mouse over the line, the `Change status` button will appear
1.  To change the currency status (enable/disable), click on the button

The currency status will be changed, and the currency grid will be automatically updated.

![Change status of the currencies](../img/Settings_CurrenciesDisabled.gif)

::: info
The shortcut action will be displayed if you have the appropriate rights.
:::

# Add currency to a channel

For a currency to be available for a product, you will need to add the specific currency to the channel of your choice.
1. Go to `Settings/Channels` and select the channel of your product
1. Add your currency to the field `Currencies` and save.

![Add currencies to a channel](../img/Settings_Currencies_for_Channels.png)
