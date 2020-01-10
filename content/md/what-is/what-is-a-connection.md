---
id: what-is-a-connection
themes: akeneo-concepts, connectivity
title: What is a **connection**?
popular: false
ee-only: false
related: manage-your-connections, how-to-connect-my-pim, connection-dashboard
---

# In a few words

A PIM without any third party connection is pretty useless, right?

Indeed, for your PIM to properly work, you first need to connect it to the data flows that are coming from your ERP, DAM or even MDM.  
Once your products are enriched into the PIM, you then need them to be delivered to all your channels, being syndication, e-commerce or publishing platforms.  
Maybe, you also need to connect your PIM to a translation tool to enrich your data even more efficiently. One can also think to connect the PIM to some BI tools, in order to get reports on the enrichment workload.

In the end, all those data flows represent a great deal of connections around your PIM.

![A PIM can have many connections to third-parties](../img/pim-with-many-connections.png)

The PIM **Connection** notion is here to help you boost your connectivity. :rocket:  
With Connections, you can easily know which data flows surround your PIM. In fact, a connection identifies one particular data flow. It can be seen as a door to the PIM for your third-party connector.

## A real connectivity example

Let's take an example to make this clearer. Below is an illustration of the `Connection` concept.

![An example of a PIM with its connections](../img/one_PIM_several_connections.svg)

In this example, the PIM has 6 declared connections.

There are 3 connections that are sending data into this PIM:
- A product flow coming from an ERP (`SAP`),
- An asset flow coming from a DAM (`Bynder`),
- Another flow, mixing both products and assets, coming from a retail platform (`Alkemics`).

There are also 2 destination connections declared for this particular PIM:
- A flow sending product information to an ecommerce platform (`Magento`),
- A flow sending product information to a publishing platform (`Priint`).

To finish, this PIM is also connected to a translation service (`TextMaster`).

## And how it translates into the PIM

You can easily know to which third-parties your PIM is connected to, thanks to the `Connections` screen. To access it, click on the `System` menu and then on the `Connections` submenu.  

If we go back to our previous example, here is what the `Connections` screen will look like in this case.

![Connections screen](../img/connections-screen.png)

::: info
To declare new connection around your PIM, follow the [simple steps described here](manage-your-connections.html#create-a-connection).
:::

# Dive into the connections benefit

First of all, connections will generate your API credentials for you. That is very useful since connections aim at declaring connections that are based on the API.

It will also provide you with some monitoring of the data flows going through your connection. Eager to know more about this feature? Take a look [here](connection-dashboard.html)!



