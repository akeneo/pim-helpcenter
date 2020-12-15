---
id: manage-event-subscription
themes: connectivity, import-export-data
title: Subscribe to **events**
popular: true
ee-only: false
related: what-is-the-event-subscription, how-to-connect-my-pim, manage-your-connections
---

# Activation

First of all, Event subscription relies on the connections. That is why you'll need to create a Connection, if you haven't already. 

While managing your extension, access the `Event Subscriptions` configuration page and use the toggle to turn it on. 

![Using the Akeneo Events API](../img/event-subscription-helper.png)

After a little more configuration, you'll be able to receive events.

# Configuration

## Request URL Configuration & Verification

It's better if your Events Request URL is confirmed before saving the form. To do so, we added a `Test` button on the right side of the URL field. 

Fill in the URL field with your server one and click on the `Test` button to check if the URL is working. To help you, Akeneo PIM displays the response code of the test request. 

Here are some examples of responses you may encounter. 


![URL Warnings](../img/url-warnings.png)


If the third-party server takes some time to react and your initial attempt at URL verification fails due to a timeout, use the `Test` button to launch the verification again.

## Manage your permissions

The Events API leverages Akeneo PIM's permissions to control access to events. 

For example, if your connection needs to receive product update events only for your e-commerce products, you need to give your connection user group the `read` permission on the `e-commerce` category tree.

You will find everything you need about connection user groups and permissions in the following page: [Manage your connections](manage-your-connections.html#configure-the-connection-user-group). 


### More information about permissions

If you are not comfortable with Akeneo PIM permissions, please find any information you need on the following page: [Set rights on your catalog](access-rights-on-products.html)

Let's take an example!

1. Your connection can view the English UK, and French locales. 
2. Your connection has the read permission on the e-commerce category tree. 
3. Your connection has the read permission on E-commerce, ERP, Marketing, and Media attribute groups.

When a product is created, updated, or deleted, you'll receive an event if: 

- at least one product category is in the e-commerce category tree,
- an attribute value has been updated, regardless of its attribute group,
- an attribute value has been updated, regardless of the current locale.

In the payload, you only receive attribute values that are in the E-commerce, ERP, Marketing, and Media attribute groups and for the English UK, and French locales.

::: warning
That means that you will receive an event if someone updates the German description of the product even if your connection is not allowed to see it. Same thing if someone updates an attribute which belongs to another attribute group.
:::