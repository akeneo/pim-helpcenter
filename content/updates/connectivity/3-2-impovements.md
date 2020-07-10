# 3.2 improvements regarding product models

Version 3.2 includes two new API features that simplify development with product models and improve our developer experience when creating connectors around the PIM.

## In the product model endpoints
The API now includes the product model family in the product model format. You'll find it in the `family` property.

![Json product model format](../img/product_model_format.png)

It will make it easier to retrieve the family without making multiple calls. So neat!

## New filter when exporting products
A brand new filter on your product requests is now available: the `parent` filter. You can now very easily retrieve the variant products of a given product model, whether it’s a root or sub-product model.

![New parent filter](../img/api_parent_filter.png)

This way, you can easily re-construct the product models/variant products trees on your connector side.
