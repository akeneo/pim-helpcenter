---
id: catalog-volume-monitoring
themes: administration, akeneo-concepts, catalog-settings 
title: Monitor your **catalog size** (since 2.3)
popular: false
related: what-is-a-product-value, what-is-an-attribute, what-is-a-family, what-is-a-channel, what-is-a-locale, what-is-a-category
---

# A dedicated screen

In the PIM, there is a dedicated dashboard that will help you monitor your catalog size on a various number of axes.

For example, you'll be able to find there the number of families or the average number of attributes per family.

![Catalog volume monitoring dashboard](../img/Activity_CatalogVolumeMonitoring.png)

::: warning
This screen is only available starting the 2.3 version of the PIM.
:::

# Where is it?

To access this amazing (;)) screen, follow these very simple steps:
1. Click on the `Activity` menu
1. Click on the `Catalog volume monitoring` menu entry
1. Enjoy!

# How to read this dashboard?

## The different sections

The `Catalog volume monitoring` screen is composed of several sections.

### The most important one: the number of product values

The first one is the most important one. It gives you the total number of [product values](/articles/what-is-a-product-value.html) that your PIM actually holds. In other terms, this indicator gives you a representation of how valuable is your PIM.

![Number of product values widget](../img/Activity_CatalogVolumeMonitoring_PvWidget.png)

We really encourage you to give a look at it from time to time. The more product values you have, the more useful your PIM is!

We wrote an [article](https://medium.com/akeneo-labs/because-your-product-catalog-typology-matters-e1a9af4c33e0) to explain you why the number of product values is a very interesting axis to measure the size of your catalog. The article is a bit long but we promise you, it's really enlighting. You will never talk about the size of the catalog you have to manage, the same way you did before. ;)

::: tips
You can't see the widget we are talking about? What a shame!  
If your PIM is on premise or on our PAAS version, it's probably because you or your administrator didn't launch the CRON job to calculate the values shown in this widget.  
To do so, please refer to our technical documentation: over [here](https://docs.akeneo.com/2.3/install_pim/manual/installation_ce_archive.html#configuring-tasks-via-crontab) for the CE and over [there](https://docs.akeneo.com/2.3/install_pim/manual/installation_ee_archive.html#configuring-tasks-via-crontab) for the EE.
:::

### The other sections

The next section `Axes that leverage your number of product values` is dedicated to the several axes that can influence your number of product values.  
For example, the more channels or locales you will have, the more product values you will have.

The `Axes related to the catalog structure` section gathers all the axes that have an impact on your catalog structure.

The `Axes regarding the variant modeling` section gathers the number of product models and [variant products](/articles/what-about-products-variants.html).

::: ee
In the Entreprise Edition, there is an additional section called `Axes on assets` that will give you the volume regarding the [assets](/articles/work-with-assets.html).
:::

## The alerts

On some axes, you will sometimes see an alert: a text appears behind the metric and the axes icon is colored in purple.
![Alert in the catalog volume monitoring screen](../img/Activity_CatalogVolumeMonitoring_Alert.png)

_What does this alert means?_  
It simply means that for this axis on which the alert is, you may have a volume that is quite high. If you encounter any problem with this volume, do not hesitate to contact us.

