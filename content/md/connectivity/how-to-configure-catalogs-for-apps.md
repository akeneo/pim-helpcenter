---
id: how-to-configure-catalogs-for-apps
themes: connectivity
title: How to configure **catalogs for Apps**?
popular: true
ee: false
related: what-is-an-app, how-to-connect-my-pim-with-apps, manage-your-apps
---

# What's a catalog?

With catalogs, you can configure which products you want to share with an app thanks to a product selection composed of one or several criteria that allow you to filter products.

When an app uses catalogs to retrieve product data, it automatically enables the Catalogs tab and creates catalogs for this app in your PIM.
To configure your catalogs, go to the `Connect > Connected Apps`, click on `Manage app`, and then click on `Catalogs`. 

Here you access the list of all the catalogs the app can manage with a label and a status. 

![Catalog list](../img/app-catalog-list.png)

Click on the catalog you want to set up to access the configuration interface. 

When you access a catalog, you will see two tabs:
- `Product selection`: where you will configure criteria to filter your product selection, 
- `Filter the values`: when a catalog is not compatible with mapping, we display this tab to allow you to choose which values to send to the app based on filters, 
- `Product mapping`: where you can map your PIM attributes with the app expected targets. 

::: info
If you can't click on `Manage apps`, please read our paragraph [Who can connect apps?](#who-can-connect-apps)
:::

# Configure a product selection

In the `Product selection` tab, you can define selection criteria. They are the attributes or system fields you can use to filter your products. Altogether, the criteria will create your Product selection.

![Catalog - Product selection](../img/app-catalog-product-selection.png)

::: warning
When there are no criteria, your whole PIM catalog is selected. 
:::

You will find the system fields at the top of the list and below are all the attributes gathered by attribute groups. There is a search bar to help you find the attributes. 

<img class="img-responsive in-article" alt="Product selection criteria" src="../img/app-catalog-criteria-selection.png" style="max-width: 700px;">

Each time you add a criterion, its color turns purple to inform you that it is already used.  
A new line appears in the product selection.

Let's see how a line is organized.

1. You will find the system fields or attribute you chose in purple on the left. 
2. Then, you have to choose an operator. Depending on the filter, the operator list changes. 

The following fields vary depending on your filter. There can be up to 3 types of fields.  
- You can have the value field. For example, if your filter is a multi-select attribute type, you can choose which options you want to filter on.
- If your filter has a value per channel and/or per locale, the channel and locale fields appear to let you choose which locale/channel you want to filter on.

If you want to remove a condition, click on the cross at the end of the line.

## Available conditions

To select your products, you can use the following system fields and attribute types of the PIM as conditions:
- Status
- Category
- Completeness
- Family
- Simple select attribute
- Text attribute
- Measurement attribute
- Yes/No attribute
- Multi-select attribute
- Number attribute
- Text area attribute
- Date attribute
- Identifier 
- Measurement

# Configure value filters

In the `Filter the values` tab, you can configure data filters to send only the data your app needs. 

## Available filters

To filter product values, you can use the following filters:
- Channels: when an attribute has value per channel, the PIM sends only product values for the selected channels
- Locales: when an attribute has value per locale, the PIM sends only product values for the selected locales
- Currencies: the PIM sends only prices for the selected currencies

## Example

You connect your e-commerce app with your PIM and want to send only data related to your e-commerce channel. 

In the `Filter the values` tab, we advise you to filter the values on your e-commerce channel as in the following screenshot. 

<img class="img-responsive in-article" alt="Catalog - Filter the values" src="../img/app-catalog-value-filters.png" style="max-width: 500px;">


# Enable/disable a catalog

Once you finish configuring your catalog, update the `Enable status` value to `Yes` in the catalog header.

<img class="img-responsive in-article" alt="Product selection criteria" src="../img/app-catalog-enable-button.png" style="max-width: 700px;">

As soon as you enable a catalog, the app will be able to retrieve your product selection data. 

On the contrary, if you want to stop the catalog synchronization between Akeneo PIM and the app, update the `Enable status` value to `No` in the catalog header. 

::: info
All new catalogs are disabled by default when you connect an app. It's up to you to enable them when your configuration is ready. 
:::
