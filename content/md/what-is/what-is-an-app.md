---
id: what-is-an-app
themes: akeneo-concepts, connectivity
title: What is an **app**?
popular: false
ee-only: false
related: manage-your-apps, how-to-connect-my-pim, app-monitoring
---

# In a few words

A PIM without any third party connection is pretty useless, right?

Indeed, for your PIM to properly work, you first need to connect it to the data flows that are coming from your ERP, DAM or even MDM.  
Once your products are enriched into the PIM, you then need them to be delivered to all your channels, being syndication, e-commerce or publishing platforms.  
Maybe, you also need to connect your PIM to a translation tool to enrich your data even more efficiently. One can also think to connect the PIM to some BI tools, in order to get reports on the enrichment workload.

In the end, all those data flows represent a great deal of connections around your PIM.

Apps are here to help you boost your connectivity. With apps, you can easily know which data flows surround your PIM. In fact, an app identifies one particular data flow. It can be seen as a door to the PIM for your connection.

Let's take an example to make this clearer. Below is an illustration of the `app` concept.

![An example of a PIM with its apps](../img/one_PIM_several_apps.svg)

In this example, the PIM has 6 declared apps.

There are 3 apps that are sending data into this PIM:
- A product flow coming from an ERP (`SAP`),
- An asset flow coming from a DAM (`Bynder`),
- Another flow, mixing both products and assets, coming from a retail platform (`Alkemics`).

There are also 2 destination apps declared for this particular PIM:
- A flow sending product information to an ecommerce platform (`Magento`),
- A flow sending product information to a publishing platform (`Priint`).

To finish, this PIM is also connected to a translation service (`TextMaster`).

# Dive into the apps benefit

First of all, apps will generate your API credentials for you. That is very useful since apps aim at declaring connections that are based on the API.

It will also provide you with some monitoring of the data flow going through your app. Eager to know more about this feature? Take a look [here](app-monitoring.html)!



