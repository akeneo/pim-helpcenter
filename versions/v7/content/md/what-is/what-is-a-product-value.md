---
id: what-is-a-product-value
themes: akeneo-concepts
title: What is a **product value**?
popular: false
related: catalog-volume-monitoring
---

# Product value = product information

Your PIM is a storage, a container, right? And what do you store inside your PIM? Product information.   

So simple. "Product value" is just another wording for the “product information” notion. It’s the P and I that compose the PIM. 🙂

In the PIM, you can find your number of product values in a dedicated dashboard: the [catalog volume monitoring](catalog-volume-monitoring.html) screen.

# An example

To make it very simple, let’s take an example.  
In the Akeneo PIM screenshot below, there are several product values: the value of the name, the picture, the brand, the collection and the description, 5 product values in total.

![Product values in the product form](../img/Products_PEF_ProductValue.png)

As you can see, the description in this example is “scopable” and “localisable”, meaning that it has a different value for each channel and each activated locale.   
So, in fact, there are not really 5 product values. There are more, because the description does not store one single value, but _n*m_ values, _n_ being the number of channels and _m_ being the number of activated locales.

Let's say that, in my example, they are 3 channels and 2 locales activated for each channel. Now, let's count the product values:
- one product value for the name,
- one product value for the picture,
- one product value for the brand,
- one product value for the collection,
- 3*2 product values for the description.

The total number of product values in our example is 10. :) Easy peasy!

::: info
We only count as product values, the ones that are completed. It means that if the description for the `French` locale on the `Ecommerce` channel is missing, there will only be 9 product values, in my above example.
:::
