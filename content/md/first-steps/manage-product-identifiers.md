---
id: manage-product-identifiers
themes: catalog-settings
title: Manage your product **identifiers**
popular: true
ee: true
ge: true
related: manage-your-attributes
---

You might need to identify products in the PIM for various reasons: search for a specific product, update one or more products, or even synchronize product data with other systems.

# How to identify a product?

SKU used to be the only product identifier in the PIM.
There are now 2 ways to identify a product:
1. Use the identifier attribute called SKU
1. Use the product UUID, which is the most future-proof method

# Manage your products with the Identifier attribute

## Description of the Identifier attribute

The identifier is an attribute with a few specific characteristics:
- Right now, only one identifier attribute is created by default. It is always called “SKU” as the attribute code can't be modified. Only its label can be modified.
- The value of this attribute must be unique per product.
- This attribute is not localizable (per locale) nor scopable (per channel).

::: warning
The identifier attribute has evolved:
- SKU is now optional, meaning this field can stay empty when creating a new product.
- This attribute can also be deleted from family attributes and be unselected from being required for product completeness.
:::

## Search for products with the identifier attribute

One of the big benefits of the identifier attribute is to be able to identify your products by all means.

On the PIM, you can search for a product with its identifier in two different ways:
- Use the search bar at the top of the product grid if you search for one specific product,
- or use the filter on the left with the in-list function if you want to display a list of several products.

## Update your products with the API

8 API endpoints are available to help you identify your products, update them, or even delete them. The identifier attribute is the key entry to identify specific products from your PIM.

Please refer to [api.akeneo.com](https://api.akeneo.com/) for more details.

::: warning
New API endpoints have been created, working with “UUID” product identifiers, which is the most future-proof way to identify products. Please note that you can not call or update products without SKU with the ‘old’ API endpoints. We recommend you to use the new API endpoints.
:::

# Manage your products with the UUID

## Description of the UUID, the new technical product identifier

Introduced in September 2022, the UUID is a technical product identifier assigned to every product in the PIM.

Here are some characteristics of this identifier:
- The UUID is **not an attribute** but a technical identifier. Therefore, it won’t be displayed as a product value unlike the identifier attribute.
- The UUID is **immutable**, meaning it can’t be modified or deleted after the product creation unlike the identifier attribute.
- The value of each UUID is **unique** in a PIM.

Every product must have a UUID assigned at the product creation. This can be done in 2 different ways:
- A UUID is randomly assigned to a product in the PIM during the product creation.
- A UUID can also be manually assigned during product creation but only with an import process or the API.

::: warning
The assigned UUID must match the **Version 4 UUID** standard.   
To help you validate your UUID format, here is the link to an [online validator](https://createuuid.com/validator/).
:::

The UUID is visible in the following places:
- The URL of the product in the PIM,
- and the product API.


## Update your products with imports

When exporting your products from the PIM, your downloaded files can now contain a new column named “UUID”. Unlike the identifier attribute, you are sure that all your products have a UUID, meaning it is the best way to update your products when re-importing your file in the PIM.

::: info
The UUID column is hidden by default. If you want to display this column, [Update your export profile](exports.html#update-an-export-profile) and activate 'With Product UUID' before running your export.
:::

Once you have modified your product details in the file, ensure the “UUID” column is still included in the document as it will help identify your products to update them.

Here are a few use cases when importing products:
- *You can create a product with no SKU & no UUID:* a new product will be created and a UUID will be randomly assigned.
- *You can create a product with a SKU and no UUID:* a new product will be created with this SKU and a UUID will be randomly assigned.
- *You can update a product only with its UUID:* the product will be updated even if the SKU is not available.
- *You can update a product only with its SKU:* the product will be updated even if the UUID is not available.
- *You can update the SKU of a product using its UUID:* the product will be updated with a new SKU.
- *You can create a product with my own UUID:* you can generate a v4 UUID anywhere (on this website for ex.) and add it during the product creation process.

Here is the table listing all usecases depending on what you fill in the UUID and SKU columns:
| uuid | sku | family | name-en_US | Result |
| --- | --- | --- | --- | --- |
|  | SKU-ex01 | tshirt | Existing product | Update product having SKU = SKU-ex01 |
|  | SKU-new01 | tshirt | New product | Create product with generated uuid and SKU = SKU-new01 |
|  |  | tshirt | New product | Create product with generated uuid and no SKU |
| uuid-0001 | SKU-ex02 | tshirt | Existing product | Update product having uuid = uuid-0001 |
| uuid-0002 | SKU-new02 | tshirt | New product | Create product with uuid = uuid-0002 and SKU = SKU-new02 |
| uuid-0003 |  | tshirt | Existing product | Update product having uuid = uuid-0003 and no SKU |
| uuid-0004 |  | tshirt | New product | Create product with uuid = uuid-0004 and no SKU |


## Update your products with the API

New API endpoints have been created to help you identify your products, update them, or even delete them by using their UUID. They are very similar to old endpoints using the product’s SKU.

This is the most future-proof way to identify and modify your products regardless of the presence of a SKU, this is why we advise you to update your API configuration with these new endpoints.

Please refer to our guide [From product identifier to product UUID](https://api.akeneo.com/getting-started/from-identifiers-to-uuid-7x/welcome.html) for more details.
