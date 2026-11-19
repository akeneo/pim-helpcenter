---
id: what-is-an-event-subscription
themes: connectivity, import-export-data
title: What is an **event subscription**?
popular: false
ee: false
related: manage-event-subscription, how-to-connect-my-pim-legacy, manage-your-connections
---

# Introduction

Some extensions of the [Akeneo App Store](https://marketplace.akeneo.com) use events to synchronize the Akeneo PIM product data with other applications. 

To use these extensions, you need to enable an event subscription that relies on the connections in the Akeneo PIM. 

::: info
You will find everything you need to create a new connection in the following page: [Create a connection](manage-your-connections.html#create-a-connection). 
:::

# Overview
Before you enable an event subscription, you may want to know what it is, and what it does. 

## What happens when you enable an event subscription on a connection?

1. A user or a third-party triggers an event in Akeneo PIM. 
2. Akeneo PIM sends a message that contains product data and the event type to the connected third-party. 
3. The connected third-party acknowledges the message reception, then processes the message.
4. The product data is synchronized with the connected third-party. 

## Who/what can trigger an event?

Events can be triggered:
- By any user in the Akeneo PIM interface, 
- Through the REST API by a third-party application,
- By the Rules Engine, 
- By launching data imports.

## Which events are triggered by Akeneo PIM?

Akeneo PIM triggers an event when:
- a product is updated, created or deleted,
- a product variant is updated, created or deleted,
- a product model is updated, created or deleted.


::: info
You will find more information about product types in Akeneo PIM in the following page: [**Create** products](create-a-product.html).
:::

### What is considered as a product update?

Akeneo PIM triggers product update message when: 
- a product identifier is updated,
- a product main media is updated,
- a product attribute value is updated,
- a product is classified or unclassified,
- a product family is updated,
- a product status is updated,
- a product association is created or removed,
- an association quantity is updated,
- an asset link is created or removed,
- a reference entity is created or removed,
- a previous version of a product is restored,
- the bulk action _Change the parent product model_ is launched,
- the bulk action _Add to existing product model_ is launched,
- the action to convert a product variant to a simple product, 
- and the action that allows you to edit a variant axis value.
