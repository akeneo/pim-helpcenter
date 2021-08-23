---
id: how-to-connect-my-pim-legacy
themes: connectivity, import-export-data
title: How to **connect** my PIM (legacy)?
popular: true
ee: false
related: what-is-a-connection, manage-your-connections, connection-dashboard, what-is-the-pim-marketplace, what-is-an-event-subscription
---

# Meet the "Connect" menu

You need to gather all your product data, and this is why you use Akeneo PIM. But, you also need to retrieve product data or share them, right?

Indeed, for your PIM to work correctly, you first need to connect it to the data flows that are coming from your ERP, DAM, or even MDM.  
Once your products are enriched into the PIM, you need them to be delivered to all your channels, such as syndication, e-commerce, or publishing platforms.  
Maybe, you also need to connect your PIM to a translation tool to enrich your data more efficiently. You can also consider combining the PIM with some BI tools to get reports on the enrichment workload.


In the PIM, there is a concept that helps you connect any third party you might think of to boost the powers of your PIM. It is called `Connections`. :tada:

Want to know more? Ellen is going to give you some pointers on what this amazing feature is about.

<iframe width="100%" height="470" style="margin-right: 0; margin-left: 0;" src="https://www.youtube.com/embed/ado5f4HkTTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To get a complete definition of what connections are, you can read our article [What is a connection?](what-is-a-connection.html)!

# Steps to a successful connection

Wondering how to properly connect your PIM to third-party solutions such as ERPs, DAMs, MDMs, ecommerce platforms, translating and syndication tools...?  

You have landed in the right place! Here are the 3 crucial steps for a good connection.

## _Step 1_ | Create a connection
To do so, you can follow the dedicated article right [here](manage-your-connections.html).

## _Step 2_ | Activate an existing extension or develop your own from scratch
It totally depends on which third-party you want to connect with.

Thanks to our community and partners, we have plenty of extensions ready to be activated on your PIM. To find them, go to your PIM `Connect` menu, click on `Marketplace`, and here you are! 

The PIM Marketplace page allows you to access our Marketplace and display all the extensions compatible with your PIM.
For example, if you want to connect your PIM to Magento 2, we provide the [Akeneo connector](https://help.akeneo.com/magento2-connector/index.html).

So, your first reflex should be to check if there is already an existing extension on the marketplace for your needs.

There may be some third parties for which no API-based extension was created and available on our marketplace. In this case, you will have to develop it to cover your own needs.  
We provide guides to help you in this task. For example, here is how you can [connect to a DAM](https://api.akeneo.com/guides/dam-connection/introduction.html) with our API. If you can't find a guide covering your use case, we recommend you to get familiar with our [API documentation](https://api.akeneo.com).

::: tips
We publish new extensions regularly, so don't forget to keep an eye on our [marketplace](https://marketplace.akeneo.com/)! :wink:
:::

## _Step 3_ | Use the credentials in the extension
That's the easiest part. When you created your connection, the PIM provides you with a set of credentials: a client id, a secret, a username, and a password. Put those credentials into your extension. They will be used to authenticate your API calls.

And... that's it! :)

You can now enjoy your connection. To monitor how your fresh connection is working, you can go to `Data flows`. Eager to know more? [Click here!](connection-dashboard.html)

You still have questions on how to properly connect the PIM to third parties? There is a ["How to connect the PIM" guide](https://api.akeneo.com/getting-started/connect-the-pim-4x/welcome.html), on our API website. Don't hesitate to have a look at it! 

# Why should I use the API?

You may have understood it, but yes, we recommend the use of our API to create PIM extension.

Here is why.

1. The API is the most **stable** way to create extensions. It means that API-based extensions don't need to be migrated whenever your PIM is updated to a newer version. Which is a big plus, when you know that the cost of a migration project is usually quite high.
2. We worked a lot to improve the **performances** of the API. For example, you will experience a better speed when you export products through the API than if you use our basic CSV export stack.
3. This is the **only way to connect the PIM for our SaaS customers**. You can use it to create entire workflows around your PIM, that will create products or request them, depending on your needs.

You can also find more reasons to connect the PIM via the API, [directly on our dear API website](https://api.akeneo.com/documentation/introduction.html#why-should-you-use-our-api)!

::: tips
Want to know more about the API? You can easily send your first request by following this [simple guide](https://api.akeneo.com/getting-started/your-first-tutorial-4x/welcome.html).
:::
