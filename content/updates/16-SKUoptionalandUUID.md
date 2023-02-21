# Product Identifier Changes: SKUs Optional and UUIDs
::: meta-data type="New" features="Governance" ee-only="false" link-to-doc="../articles/manage-product-identifiers.html"

SKU is no longer mandatory when creating products in Akeneo PIM and we're introducing a new technical product identifier, the UUID. The UUID is now available to provide more flexibility in how products are identified and updated. With these changes you will be able to create products without a SKU within Akeneo PIM or via API. You may also remove the SKU from a family so that the SKU field will no longer appear on the product creation screen and the product edit form. Before beginning to create products without SKUs, please ensure that leaving the SKU field empty won’t negatively impact your existing workflows, especially any synchronization configured with third-party systems that might use SKU as a key entry. Please also update your API configuration with the newly available API endpoints using the UUID as a technical identifier.

![Create a SKU](../img/skuoptional.png)

::: more
[Read the complete documentation](../articles/manage-product-identifiers.html#update-your-products-with-the-api)
:::
