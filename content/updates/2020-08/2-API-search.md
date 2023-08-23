---
pim_announcement_img: ./img/api-filters.png
pim_announcement_alt_img: "API documentation about attribute filters"
pim_announcement_audience:
- CE
- EE
---

# Synchronize the API catalog structure more easily
::: meta-data type="New" features="API, Connectivity" available="early August"
:::

The **new `search` parameter** enables you to add filters when retrieving attributes or families.

Those filters will help reduce the amount of data to process and the size of the API call responses.

Here are the available filters:
- **updated date**: allows you to retrieve only data updated since a specific date and hour,
- **code**: allows you to filter on specific codes,
- **type**: allows you to filter on attributes from a specific type (only available for attributes).

You can combine filters to achieve powerful results!

Let's take an example: you have an eCommerce platform that uses your PIM data. You know the list of all the attributes you need, and your application synchronizes the catalog structure every day at 3 PM.  

The following filter enables you to retrieve all the attributes updated since the 2020-08-26 at 15:00 and matching one of the listed codes (brand, size, description, name, picture, color, secondary_color):

```
/api/rest/v1/attributes?search={"updated": [{ "operator": ">", "value": "2020-08-26T15:00:00Z"}],"code": [{ "operator": "IN", "value": ["brand","size","description","name","picture","color","secondary_color"]}]
```  

::: more
[How to filter attributes?](https://api.akeneo.com/documentation/filter.html#filter-attributes)  
[How to filter families?](https://api.akeneo.com/documentation/filter.html#filter-families)
:::
