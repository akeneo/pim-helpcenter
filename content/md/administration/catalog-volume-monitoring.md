---
id: catalog-volume-monitoring
themes: administration, akeneo-concepts, catalog-settings
title: Monitor your **catalog size**
popular: false
related: what-is-a-product-value, what-is-an-attribute, what-is-a-family, what-is-a-channel, what-is-a-locale, what-is-a-category
---

# A dedicated screen

In the PIM, there is a dedicated dashboard that will help you monitor your catalog size along a variety of axes.

For example, you'll be able to track the number of families and the average number of attributes per family.

![Catalog volume monitoring dashboard](../img/Activity_CatalogVolumeMonitoring.png)

# Where is it?

To access this amazing (;)) screen, follow these very simple steps:
1. Click on the `Activity` menu
1. Click on the `Catalog volume monitoring` menu entry
1. Enjoy!

# How to read this dashboard?

## The different sections

The `Catalog volume monitoring` screen is composed of several sections.

### The most important one

The first one is the most important one. It gives you the total number of [product values](what-is-a-product-value.html) that your PIM actually holds. This indicator gives you a representation of how extensive and valuable your PIM is.

![Number of product values widget](../img/Activity_CatalogVolumeMonitoring_PvWidget.png)

We really encourage you to give a look at it from time to time. The more product values you have, the more useful your PIM is!

We wrote an [article](https://medium.com/akeneo-labs/because-your-product-catalog-typology-matters-e1a9af4c33e0) to explain why the number of product values is a very interesting axis to measure the size of your catalog. The article is a bit long but we promise you, it's really enlightening. You will never think about the size of the catalog you have to manage in the same way you did before. ;)

::: tips
You can't see the widget we are talking about? What a shame!  
If you are a Community Edition user or working on the On-Premise or PaaS version, it's probably because you or your administrator didn't launch the CRON job to calculate the values shown in this widget.  
To do so, please refer to our technical documentation: over [here](https://docs.akeneo.com/latest/install_pim/manual/installation_ce_archive.html#configuring-tasks-via-crontab) for CE and over [there](https://docs.akeneo.com/latest/install_pim/manual/installation_ee_archive.html#configuring-tasks-via-crontab) for EE.
:::

### The other sections

The next section `Axes that leverage your number of product values` is dedicated to the various axes that can influence the number of product values.  
For example, the more channels or locales you have, the more product values you will have.

The `Axes related to the catalog structure` section gathers all the axes that have an impact on your catalog structure.

The `Axes regarding the variant modeling` section gathers the number of product models and [variant products](what-about-products-variants.html).

::: ee
In the Enterprise Edition, there are additional sections called `Axes on assets families` that will give you the volume regarding [assets](what-about-assets.html), and `Axes on reference entities` that will give you the volume regarding [reference entities](what-about-reference-entities).
:::

## The alerts

On some axes, you will sometimes see an alert: text appears below the metric and the axis icon is colored in purple.
![Alert in the catalog volume monitoring screen](../img/Activity_CatalogVolumeMonitoring_Alert.png)

_What does this alert means?_  
It simply means that for this axis, you may have a volume that is quite high. If you encounter any problems at this level of volume, do not hesitate to contact us.
