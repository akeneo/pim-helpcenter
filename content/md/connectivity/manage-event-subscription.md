---
id: manage-event-subscription
themes: connectivity, import-export-data
title: Subscribe to **events**
popular: true
ee-only: false
related: what-is-an-event-subscription, how-to-connect-my-pim, manage-your-connections
---

::: info
Before we jump right in, if you need to refresh your memory about [event subscriptions](what-is-an-event-subscription.html), take a look at our dedicated page.
::: 


You are about to set up your first event-enabled extension and you want to make sure it works. 
You've come to the right place. 

On this page, you'll find answers to the following questions:
- How to enable an event subscription?
- How to configure the link with my extension?

# Activation

First, an event subscription relies on the Akeneo PIM Connections feature, so you'll need to create a Connection first if you don't already have one.
You will find everything you need on the [Create a connection](manage-your-connections.html#create-a-connection) page. 

In order to enable the feature, go to the `Event Subscription` configuration page, then use the toggle to turn it on.

![Event subscription page](../img/event-subscription-helper.png)

::: warning
To ensure the proper functioning of your Akeneo PIM, you can connect **up to 3 connections** to the Event subscription feature.
::: 

Now, let's move on to the URL configuration, and soon you'll be able to receive events.

# Configuration

## Request URL Configuration & Verification

It's better if your Event Request URL is confirmed before saving the form. 

To do so, please fill in the URL field with your server URL, and click on the `Test` button to check if the URL works. To help you, Akeneo PIM will display the response code of the test request. 

Here are some examples of responses you may encounter. 


![URL Warnings](../img/url-warnings.png)

::: info
If the third-party server takes too much time to answer, your initial attempt at URL verification may fail due to a timeout, so use the `Test` button to relaunch the verification.
:::

## Manage your permissions

The Event subscription leverages Akeneo PIM permissions to control access to product data. 

For example, suppose your extension needs to receive product update events only for your eCommerce products. In that case, you need to give your connection user group at least the `read` permission on the `eCommerce` category tree, which is where your products are organized.

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

In the payload, you only receive attribute values that are in the eCommerce, ERP, Marketing, and Media attribute groups and for the English GB, and French locales.

::: warning
That means that you will receive an event if someone updates the German description of the product even if your connection is not allowed to see it. Same thing if someone updates an attribute that belongs to another attribute group.
:::

::: info
If you are not comfortable with Akeneo PIM permissions, check the following article [Set rights on your catalog](access-rights-on-products.html)
:::
