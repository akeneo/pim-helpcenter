---
id: what-is-the-event-subscription
themes: connectivity, import-export-data
title: What is the **event subscription**?
popular: true
ee-only: false
related: manage-event-subscription, how-to-connect-my-pim, manage-your-connections
---

# Introduction

Some extensions of the [Akeneo marketplace](https://marketplace.akeneo.com) are using events to synchronize the Akeneo PIM product data with other applications. 

To use these extensions, you need to activate the event subscription that relies on the connections in the Akeneo PIM. 

::: info
You will find everything you need to create a new connection in the following page: [Create a connection](manage-your-connections.html#create-a-connection). 
:::

# Overview
Before activating the event subscription, you may want to know what it is, and what it does. 

## What happens when you activate the event subscription on a connection?

1. A user or another app triggers an event in the Akeneo PIM. 
2. The Akeneo PIM sends a message that contains product data and the type of the event to the connected app. 
3. The connected app acknowledges the message reception, then proccesses the message.
4. The product data is synchronized with the connected application. 

## Who can trigger an event?

Events can be triggered:
- By any user in the Akeneo PIM interface, 
- Through the REST API by a third-party application,
- By the Rules execution, 
- By launching data imports.

## Which events are triggered by the Akeneo PIM?

The Akeneo PIM triggers an event when:
- a product is updated, created or deleted,
- a product variant is updated, created or deleted,
- a product model is updated, created or deleted.


::: info
You will find more information about product types in Akeneo PIM in the following page: [**Create** products](create-a-product.html).
:::

### What is considered as a product update?

The Akeneo PIM triggers product update message when: 
- a product identifier is updated,
- a product main media is updated,
- a product attribute value is updated,
- a product is classified or unclassified,
- a product family is updated,
- a product status is updated,
- a new product association is created,
- a product association is removed,
- an association quantity is updated,
- an asset link is created,
- an asset link is removed,
- a reference entity is created,
- a reference entity is removed,
- a previous version of a product is restored,
- the bulk action _Change the parent product model_ is launched,
- the bulk action _Add to existing product model_ is launched,
- the action to change a product variant in simple product, 
- and the action thats allows you to update a variant axis value.