---
id: manage-event-subscription
themes: connectivity, import-export-data
title: Subscribe and manage **events**
popular: true
ee: false
related: what-is-an-event-subscription, how-to-connect-my-pim-legacy, manage-your-connections
---

::: info
Before we jump right in, if you need to refresh your memory about [event subscriptions](what-is-an-event-subscription.html), take a look at our dedicated page.
::: 


You are about to set up your first event-enabled extension and you want to make sure it works. 
You've come to the right place. 

On this page, you'll find answers to the following questions:
- How to enable an event subscription?
- How to configure the link with my extension?

# Activate

First, an event subscription relies on the Akeneo PIM Connections feature, so you'll need to create a Connection first if you don't already have one.
You will find everything you need on the [Create a connection](manage-your-connections.html#create-a-connection) page. 

In order to enable the feature, go to the `Event Subscription` configuration page, then use the toggle to turn it on.

![Event subscription page](../img/event-subscription-helper.png)

::: warning
To ensure the proper functioning of your Akeneo PIM, you can connect **up to 3 connections** to the Event subscription feature.
::: 

Now, let's move on to the URL configuration, and soon you'll be able to receive events.

# Configure

## Configure and confirm your request URL

::: tips
Before configuring your request URL, please check our [security constraints regarding this field](https://api.akeneo.com/events-documentation/security.html#constraints-on-ip-addresses).
:::

Please fill in the URL field with your server URL to configure your request URL. Then, before saving the form, click on `Test` to check if the URL works. To help you, Akeneo PIM will display the response code of the test request. 

Here are some examples of responses you may encounter. 
![URL Warnings](../img/url-warnings.png)

::: info
If the third-party server takes too much time to answer, your initial attempt at URL verification may fail due to a timeout, so use the `Test` button to relaunch the verification.
:::

## Choose your favorite product format
There are two ways to identify products in the PIM, and this is why you can choose from the `Event Subscription` page which API format you will receive in events. 

![UUID option](../img/uuid-option.png)

If you want to receive the product identified by their UUID, enable this option; if not, let it be disabled. 

::: info
To know more about ways to identify products, please read our [Manage your product identifiers](manage-product-identifiers.html) article, and for more information about API formats, please go to our [API documentation website](https://api.akeneo.com/concepts/products.html#product).
:::

## Manage your permissions

The Event subscription leverages Akeneo PIM permissions to control access to product data. 

For example, suppose your extension needs to receive product update events only for your eCommerce products. In that case, you need to give your connection user group at least the `read` permission on the `eCommerce` category tree, which is where your products are organized.

::: warning
If you create, update or delete a product with no category, the PIM will send an event to all the enabled event subscriptions. 
:::

::: info
You will find everything you need about connection user groups and permissions on the [Manage your connections](manage-your-connections.html#configure-the-connection-user-group) page. 
:::


### More information about permissions

Let's take an example!

1. Your connection can view the English GB and French locales. 
2. Your connection has the read permission on the eCommerce category tree. 
3. Your connection has the read permission on eCommerce, ERP, Marketing, and Media attribute groups.

When a product is created, updated, or deleted, you'll receive an event if: 

- at least one product category is in the eCommerce category tree,
- an attribute value has been updated, regardless of its attribute group,
- an attribute value has been updated, regardless of the current locale.

You only receive attribute values in the eCommerce, ERP, Marketing, and Media attribute groups and English GB and French locales in the payload.

::: warning
That means that you will receive an event if someone updates the German description of the product even if your connection is not allowed to see it. Same thing if someone updates an attribute that belongs to another attribute group.
:::

::: info
If you are not comfortable with Akeneo PIM permissions, check the following article [Set rights on your catalog](access-rights-on-products.html)
:::

# Debug

Now, everything is set-up, you probably want to be sure your event subscription is working well. 

To do so, we added a new submenu, `Event logs`, where you have access to several log levels that will help you to understand why you did or didn't receive some of the events.

![Event logs UI](../img/event-log-ui.gif)

In addition, we added filters on log levels and log date and time to help you find the right log quickly.

![Filter on log levels](../img/event-filter-on-levels.png)

![Filter on log date and time](../img/event-filter-on-datetime.png)

::: warning
You may have differences in date format between the list and the filter.  
The date and time formats of the filter use your browser configuration, and the list relies on your PIM settings.
:::


Moreover, the search bar allows you to refine your research even more.

![Download logs button](../img/event-logs-searchbar.png)


Finally, you still have access to the `Download logs` button that allows you to download a `.txt` file with all the logs related to an event subscription. 

![Download logs button](../img/connection-download-logs-button.png)

::: info
Want to know more about each type of log? 
Please, read our article [Debug and fix issues related to the Events API](https://api.akeneo.com/events-documentation/subscription.html#debugging-events) on the [api.akeneo.com](https://api.akeneo.com/) website. 
:::
