---
id: publish-workflow
themes: products-super-power
title: The **publication**, the "2 versions/1 product" feature
popular: false
ee-only: true
related: how-to-manage-my-publications, products-associations
---

# Overview

In the PIM, you can manage **two different versions** of a very same product, one published version you can use for export to your channels and another version to prepare for instance the next collection or season of products.

This is handle by what we call the **Publication** feature.

# A publication example

This is really simple. Imagine one of your product is complete for all locales activated for the *E-commerce* channel. The product is enabled and classified in the *E-commerce* channel category tree.

You are satisfied by your product information for this product, so you hit the `Publish` button.

![image](../img/dummy.png)

**What's happening?**    
In fact, this *takes a picture* of your product information at that time. This *picture* is called the *published* version of your product.

**What happens next?**   
You can still edit all your product information, for instance, change its description or composition for the next season...  
But it won't impact the published version of your product you created earlier and it won't be exported to your *E-commerce* channel.

This way, you end up with two versions of your dear product at the same time:
- one is *frozen*: this is your published version, exported to your sales channel
- one can still be *modified*: this is your current version of your product

As you can see, this feature can be really useful, especially as it allows you to start working on a new version of the product without changing the version that is used as exported data in your channels.

# Which information is published?

Only your **attribute values** and **associations** are frozen in your published product. If you change them later, in the working copy of your product, the changes won't be applied on your published product.

::: warning
This is not the case if you change other product information such as category classification, product activation (enabled/disabled), group membership and family. The information will also be updated in your published product.
:::

# Published products & associations

Products you [associate](/articles/products-associations.html) to a published product should also be published, if you want to see the associations between those products in your published product.  
In other words, an association of a published product A with a non-published product B, will not be visible in your published product A.

To associate 2 published products, for instance, *Product A* to *Product B*:
1. Publish your *Product B*
2. Create the association in the *Product A*, with your *Product B*
3. Publish the *Product A*
