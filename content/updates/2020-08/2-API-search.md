---
pim_announcement_img: ./img/api-filters.png
pim_announcement_alt_img: "API documentation about attribute filters"
pim_announcement_audience:
- CE
- EE
---

# New filters to simplify API catalog structure exports
::: meta-data type="New" features="API, Connectivity" available="late August" link-to-doc="https://api.akeneo.com/documentation/filter.html"
:::

A new `search` parameter enables you to add filters to catalog structure endpoints. It will help reduce the number of data to process and the size of the API call responses.

Here are the available filters:
- **updated date**: allows you to retrieve only data updated since a specific date and hour (available for attribute groups, attributes, and families), 
- **code**: allows you to filter on specific codes (available for attribute groups, attributes, categories and families), 
- **type**: allows you to filter on attributes from a specific type (only available for attributes),
- **parent**: allows you to retrieve all sub-categories of a parent category (only available for categories).  

You can combine filters to achieve powerful results!

Let's take an example: you have an eCommerce platform that uses your PIM data. You know the list of all the attributes you need, and your application synchronizes the catalog structure every day at 3 PM.  

The following filter enables you to retrieve all attributes updated since the 2020-08-26 at 15:00 and matching one of the listed codes (brand, size, description, name, picture, color, secondary_color):

```
/api/rest/v1/attributes?search={"updated": [{ "operator": ">", "value": "2020-08-26T15:00:00Z"}],"code": [{ "operator": "IN", "value": ["brand","size","description","name","picture","color","secondary_color"]}]
```

::: more
[How to filter attributes?](https://api.akeneo.com/documentation/filter.html#filter-attributes)  
[How to filter attribute groups?](https://api.akeneo.com/documentation/filter.html#filter-attribute-groups)  
[How to filter families?](https://api.akeneo.com/documentation/filter.html#filter-families)  
[How to filter categories?](https://api.akeneo.com/documentation/filter.html#filter-categories)  
:::
