---
id: how-to-connect-my-pim
themes: connectivity, import-export-data
title: How to **connect** my PIM?
popular: true
ee-only: false
related: what-is-a-connection, manage-your-connections, connection-dashboard
---

# Meet the "Connections"

A PIM without any third party connection is pretty useless, right?

Indeed, for your PIM to properly work, you first need to connect it to the data flows that are coming from your ERP, DAM or even MDM.  
Once your products are enriched into the PIM, you then need them to be delivered to all your channels, being syndication, e-commerce or publishing platforms.  
Maybe, you also need to connect your PIM to a translation tool to enrich your data even more efficiently. One can also think to connect the PIM to some BI tools, in order to get reports on the enrichment workload.

In the end, all those data flows represent a great deal of connections around your PIM.

In the PIM, there is a concept that will help you connect any third party you might think of, to boost the powers of your PIM. It is called the `Connections`. :tada:

To get a complete definition of what connections are, [here you go](what-is-a-connection.html)!

# Steps to a successful connection

Wondering how to properly connect your PIM to third-party solutions such as ERPs, DAMs, MDMs, ecommerce platforms, translating and syndication tools...?  

You have landed in the right place! Here are the 3 crucial steps for a good connection.

## _Step 1_ | Create a connection
To do so, you can follow the dedicated article right [here](manage-your-connections.html).

## _Step 2_ | Develop a connector from scratch or install a pre-existing one  
It totally depends on which third-party you want to connect with.

For example, if you want to connect your PIM to Magento, we already provide an API-based connector on our [marketplace](https://marketplace.akeneo.com/extension/akeneo-connector-magento-2-enterprise-edition).  
So, your first reflex will be to check if there is an API-based connector on the marketplace for your needs.

::: warning
Your connector should be API-based in order to be compatible with our connections. Want to know why you need to use the API to connect your PIM? The answer is right [here](#why-should-i-use-the-api).
:::

There may be some third parties for which no API-based connector was created and available on our marketplace. In this case, you will have to develop it to cover your own needs.  
We provide guides to help you in this task. For example, here is how you can [connect to a DAM](https://api.akeneo.com/guides/dam-connection/introduction.html) with our API. If you can't find a guide covering your use case, we recommend you to get familiar with our [API documentation](https://api.akeneo.com).

## _Step 3_ | Use the credentials in the connector
That's the easiest part. When you created your connection, the PIM provided you with a set of credentials: a client id, a secret, a username and a password. Put those credentials into your connector. It will be used to authenticate your API calls.

And... that's it! :)

You can now enjoy your connection. By the way, you will surely need to monitor what is happening on this data flow. There is a feature for that. It is called `Connection dashboard`. Eager to know more? [Click here!](connection-dashboard.html)

You still have questions on how to properly connect the PIM to third-parties? Good news, we got you covered! There is a ["How to connect the PIM" guide](https://api.akeneo.com/getting-started/connect-the-pim-4x/welcome.html), on our API website. Don't hesitate to have a look at it! 

# Why should I use the API?

You may have understood it, but yes, we recommend the use of our API to create PIM connectors.

Here is why.

1. The API is the most **stable** way to create connectors. It means that API-based connectors don't need to be migrated whenever your PIM is updated to a newer version. Which is a big plus, when you know that the cost of a migration project is usually quite high.
2. We worked a lot to improve the **performances** of the API. For example, you will experience a better speed when you export product through the API than if you use our basic CSV export stack.
3. This is the **only way to connect the PIM for our Serenity customers**. Indeed, the Serinity offer only provides a SaaS platform, on which you cannot customize anything. As a consequence, the API is your one and only way to connect the PIM. You can use it to create entire workflows around your PIM, that will create products or request them, depending on your needs.

You can also find out more reasons to connect the PIM via the API, [directly on our dear API website](https://api.akeneo.com/documentation/introduction.html#why-should-you-use-our-api)!

::: tips
Want to know more about the API? You can easily send your first request by following this [simple guide](https://api.akeneo.com/getting-started/your-first-tutorial-4x/welcome.html).
:::


