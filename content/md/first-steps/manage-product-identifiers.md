---
id: manage-product-identifiers
themes: catalog-settings
title: Manage your product identifiers
popular: true
ee: true
ge: true
related: manage-your-attributes
---

You might need to identify products in the PIM for various reasons: Search for a specific product, update one or more products, or even synchronize product data with other systems.

# How to identify a product?

SKU used to be the only product identifier in the PIM.
There are now 2 ways to identify a product:
1. Use the identifier attribute called SKU
1. Use the product UUID, which is the most future-proof method

# Manage your products with the Identifier attribute

## Description of the Identifier attribute

The identifier is an attribute with a few specific characteristics:
- Right now, only one identifier attribute is created by default. It is always called “SKU” as the attribute code can't be modified. Only its label can be modified.
- The value of this attribute must be unique per product
- This attribute is not localizable (per locale) nor scopable (per channel)

::: warning
Starting in September, the identifier attribute will evolve:
- SKU will soon become optional, meaning this field can stay empty when creating a new product
- This attribute can also be deleted from family attributes and be unselected from being required for product completeness.
:::

## Search for products with the identifier attribute

One of the big benefits of the identifier attribute is to be able to identify your products by all means:
On the PIM, you can search for a product with its identifier. Use the search bar at the top of the product grid if you search for one specific product. or use the filter on the left with the in-list function if you want to display a list of several products.

## Update your products with imports

When exporting your products from the PIM, your downloaded files will contain an “ SKU “ column.
Once you have modified your product details in the file, ensure the “SKU” column is still included in the document as it will help identify your products and update them.

::: info
Exported files now contain a “UUID” column. It is now the best way to identify your products as this technical product identifier is immutable, and will work even if you have products without, SKU. [Learn more in this section](manage-product-identifiers.html#manage-your-products-with-the-uuid)
:::

## Update your products with the API

8 API endpoints are available to help you identify your products, update them, or even delete them. The identifier attribute is the key entry to identify specific products from your PIM.

Please refer to [api.akeneo.com](https://api.akeneo.com/) for more details.

::: warning
8 new API endpoints have been created, working with “UUID” product identifiers, which is the most future-proof way to identify products, especially if you have or plan to have products without SKU.
:::

# Manage your products with the UUID

## Description of the UUID, the new technical product identifier

Introduced in September 2022, the UUID is a technical product identifier assigned to every product in the PIM.

Here are some characteristics of this identifier:
- The UUID is not an attribute but a technical identifier. therefore it won’t be displayed as product values unlike the identifier attribute
- The UUID is immutable, meaning it can’t be modified or deleted after the product creation unlike the identifier attribute
- The value of each UUID is unique in the PIM

Every product must have a UUID assigned at the product creation. This can be done in 2 different ways:
- A UUID is randomly assigned to a product in the PIM during the product creation
- A UUID can also be assigned manually during product creation but only with an import process or with the API, must answer UUID format standards and must be unique

The UUID is visible in the following places:
- URL of the product in the PIM
- Product export files
- Product API

## Update your products with imports

When exporting your products from the PIM, your downloaded files will contain a new column named “UUID”. Unlike the identifier attribute, you are sure that all your products have a UUID, meaning it is the best way to update your products when re-importing your file in the PIM.

Once you have modified your product details in the file, ensure the “UUID” column is still included in the document as it will help identify your products to update them.

Here are a few use cases when importing products
- If there are no UUID nor SKU columns in a row, a new product will be created and a UUID will be generated
- If the UUID and the SKU of a product don’t match, the UUID will prevail and the current SKU will be modified by the new one
- If there is no UUID but an SKU of an existing product, the product will be updated as it always worked
- If there is a UUID but no SKU for an existing product, the product will be updated

## Update your products with the API

8 new API endpoints have been created to help you identify your products, update them, or even delete them by using their UUID. They are very similar to old endpoints using the product’s SKU.

This is the most future-proof way to identify and modify your products regardless of the presence of an SKU, this is why we advise you to update your API configuration with these new endpoints.

Please refer to [api.akeneo.com](https://api.akeneo.com/) for more details.
