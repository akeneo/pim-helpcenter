---
pim_announcement_img: ./img/api-filter-attributes.png
pim_announcement_alt_img: "API documentation about attribute filters"
pim_announcement_audience:
- CE
- EE
---

# New API filters and options labels inside the get products
::: meta-data type="New" features="API, Connectivity" available="late August" link-to-doc="https://api.akeneo.com/documentation/filter.html"
:::

We improved our API to decrease the number of data to process and help you reducing the number of API calls needed to synchronize product data.

## New filters on product structure API endpoints
With the new `search` parameter, you can now add filters on product structure endpoints: attributes, attribute groups, categories, and families.

For example, you can retrieve data for all attributes that have been updated since a specific date, or you can get the data from all the sub-categories of a specific tree.

## Option labels in the product endpoint response
We added option labels inside the product endpoint to help you reducing the number of API calls needed to synchronize product data.

::: more
[How to filter attributes?](https://api.akeneo.com/documentation/filter.html#filter-attributes)
[How to filter attribute groups?](https://api.akeneo.com/documentation/filter.html#filter-attribute-groups)
[How to filter families?](https://api.akeneo.com/documentation/filter.html#filter-families)
[How to filter categories?](https://api.akeneo.com/documentation/filter.html#filter-categories)
[How to get product data with the Akeneo API?](https://api.akeneo.com/api-reference.html#get_products)
:::