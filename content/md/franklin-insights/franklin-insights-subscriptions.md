---
id: franklin-insights-subscriptions
themes: franklin-insights
title: Franklin Insights **subscriptions**
ee-only: true
related: franklin-insights-getting-started, franklin-insights-mappings, franklin-key-figures
---

# Overview

Once you [activate the Franklin connection](franklin-insights-getting-started.html#franklin-activation) and perform the [mapping of Franklin identifiers](franklin-insights-mappings.html#identifiers-mapping), you have everything you need in order to **subscribe products to Franklin for automatic enrichment**.

When you subscribe a product to Franklin, Franklin **collects and validates information on demand** from hundreds of sources and its internal database, and then utilizes **Big Data, Artificial Intelligence, and Machine Learning** in order to provide you with **rich, accurate, and structured product information suggestions**.

# How to subscribe products

You have 2 ways to subscribe products to Franklin.

## Via the Product Edit Form

![image](../img/Akeneo_Screenshot_Franklin_Insights_PEF_Subscription.png)

## Via bulk action

![image](../img/Akeneo_Screenshot_Franklin_Insights_Bulk_Actions.png)

In order for you to receive attribute values proposals for subscribed and enriched products, you need to **match between Franklin’s attributes and your catalog attributes** in each family using the [Franklin attributes mapping UI](franklin-insights-mappings.html#identifiers-mapping).

# Filter on subscribed products in the product grid

In order to easily find the subscribed or unsubscribed products, we added a filter `Franklin subscription` in the product grid. Thus, you can easily display the products in the grid and [bulk subscribe or unsubscribe](franklin-insights-subscriptions.html#via-bulk-action) them.

The available choices for this new filter are:
- `All`: products will be displayed in the product grid regardless of their subscription status
- `Enabled`: only the subscribed products will be displayed in the product grid
- `Disabled`: only the unsubscribed products will be displayed in the product grid

::: info
1. By default, the filter is set to `All`.
2. It is displayed only if [Franklin is activated](franklin-insights-getting-started.html#franklin-activation).
:::

::: tips
To make it even more comfortable to work with subscribed products, you can also use `Franklin subscription` [as a column](products-grid.html#configure-grid-columns) in the product grid.
:::

# What you need to know about product subscriptions

-	A Franklin product subscription **costs 1 credit**.
-	A Franklin product subscription is for **1 year**.
-	Franklin will **continuously** try to enrich the product throughout the year.
-	The credit for the subscription is **consumed only if Franklin was able to suggest at least 5 attributes suggestions** for the product.
-	The credit is given back to you if the **subscription period has passed and Franklin generated less than 5 attributes suggestions** for the product.
-	You can also get your credit back prior to the end of the subscription period by **unsubscribing the product** (the credit will be given back **if it has not yet been consumed**).

# Product subscription requirements

Each product must have:
-	**Sufficient identifiers input**:
Brand & MPN
and / or UPC
and / or ASIN.
-	**Valid identifiers input**: UPC must be 12 digits, ASIN must be 10-character alphanumeric.
-	**A family**.
