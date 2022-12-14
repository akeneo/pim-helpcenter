---
id: publish-workflow
themes: products-super-power
title: Product **publication**, the "2 versions/1 product" feature
popular: false
ee: true
ge: false
related: how-to-manage-my-publications, products-associations
---

# Overview

In the PIM, you can manage **two different versions** of a very same product: one **published version** that can be exported (using a published product export profile) and **another version** that is used to prepare the next collection or season of products, for instance.

This is handle by what we call the **Publication** feature.

# A publication example

This is really simple. Imagine one of your product is complete for all locales activated for the *E-commerce* channel. The product is enabled and classified in the *E-commerce* channel category tree.

You are satisfied by your product information for this product, so you hit the `Publish` button.

![image](../img/Products_PublishProductExample.png)

**What's happening?**    
In fact, this *takes a snapshot* of your product information at this very moment. This *snapshot* represents the *published version* of your product.

**What happens next?**   
You can still edit all your product information, for instance, change its description or composition for the next season...  
But it won't impact the published version of your product you created earlier and it won't be exported to your *E-commerce* channel.

This way, you end up with two versions of your dear product at the same time:
- one is *frozen*: this is your published version, exported to your channel
- one can still be *modified*: this is your product current version

As you can see, this feature can be really useful, especially as it allows you to start working on a new version of the product without changing the version that is used as exported data to your channels.

# Which information is published?

Only your **attribute values**, **associations** and **category classifications** are frozen in your published product. If you change them later, in the working copy of your product, the changes won't be applied to your published product.

::: warning
This is not the case if you change other product information such as product activation (enabled/disabled), group membership and family. The information will also be updated in your published product.
:::

# Published products & associations

## Add an association between multiple published products
Products associated to a published product should also be published, if you want to see the associations between those products in your published product. Learn more about associations in the [Associations of products](products-associations.html) article.
In other words, an association of a published product A with a non-published product B, will not be visible in your published product A.

To associate 2 published products, for instance, *Product A* to *Product B*:
1. Publish your *Product B*
2. Create the association in the *Product A*, with your *Product B*
3. Publish the *Product A*

::: warning
If you edited the values of products B & C associated with product A, and if product A has been published, you need to unpublish and republish product A to consider the changes.
:::

::: warning
Associations for published products will only be visible via the API and XLSX or CSV exports. That means you won’t see the `Associations` tab on the product edit form of published products. Please note that associations with quantities aren’t compatible with published products.
:::

::: warning
Published products are not compatible with the associations inherited from product models.
::: 
