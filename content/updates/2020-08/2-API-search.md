---
pim_announcement_img: ./img/api-filters.png
pim_announcement_alt_img: "API documentation about attribute filters"
pim_announcement_audience:
- CE
- EE
---

# Only get what you need thanks to our new API filter
::: meta-data type="New" features="API, Connectivity" available="late August" link-to-doc="https://api.akeneo.com/documentation/filter.html"
:::

We added a new `search` parameter to reduce the number of data to process and the size of the API call responses.
You can now add filters on product structure endpoints. 

Here is the list of the available filters:
- updated date, 
- code, 
- type: only available for attributes. It allows you to filter all attributes of a specific type. 
- parent: only available for categories. Thanks to this filter, you can retrieve all sub-categories of a parent category. 

For example, the following filter will help you to retrieve all the simple select attributes that are mentionned in the `code` list, and have been updated since the 2020-07-23 at 15:19.

![Example of combined filters](../img/api-filters.png)


::: more
[How to filter attributes?](https://api.akeneo.com/documentation/filter.html#filter-attributes)  
[How to filter attribute groups?](https://api.akeneo.com/documentation/filter.html#filter-attribute-groups)  
[How to filter families?](https://api.akeneo.com/documentation/filter.html#filter-families)  
[How to filter categories?](https://api.akeneo.com/documentation/filter.html#filter-categories)  
:::
