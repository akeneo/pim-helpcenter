---
pim_announcement_img: ./img/category-filters-in-the-api.png
pim_announcement_alt_img: "API documentation about category filters"
pim_announcement_audience:
- CE
- EE
---

# New updates to ease API catalog structure synchronization

We added new filters on the `search` parameter. They enable you to add filters to catalog structure endpoints. Moreover, we added **attribute group labels** inside the attribute endpoints.  

Those two enhancements will help reduce further the number of data to process, the size of the API call responses, and the number of API calls needed to synchronize your catalog structure.

## New filters when requesting categories and attribute groups
::: meta-data type="New" features="API, Connectivity" available="early September"
:::

Here are the new filters:
- **updated date**: allows you to retrieve only data updated since a specific date and hour (now also available for attribute groups),
- **code**: allows you to filter on specific codes (now also available for attribute groups and categories),
- **parent**: allows you to retrieve all sub-categories of a parent category (only available for categories).  

Let's take an example: you have several category trees in your PIM, and you want to synchronise only the `ecommerce` category tree with your e-commerce backend.

The following filter enables you to retrieve only the categories that are in the `ecommerce` category tree:

```
/api/rest/v1/categories?search={"parent":[{"operator":"=","value":"ecommerce"}]}
```  

::: tips
You can combine filters to reach powerful results!
:::

## Attribute group labels inside the attribute endpoints  
::: meta-data type="New" features="API, Connectivity" available="early September"
:::

Let's say you have an online catalog on your website, your visitors can easily browse and find your product information in it.

Before our modification, your catalog had to:
- retrieve the attributes data,
- get back the attribute groups data,
- then re-create the attribute organization.  

With attribute group labels inside the attributes endpoint, your catalog app only needs to call the attribute endpoint!

Indeed, there is now a new `group_labels` property in the attribute format:
```json
{
    "code": "description",
    "labels": {
        "de_DE": "Beschreibung",
        "en_US": "Description",
        "fr_FR": "Description"
    },
    "type": "pim_catalog_textarea",
    "group": "marketing",
    "group_labels": {
        "de_DE": "Vermarktung",
        "en_US": "Marketing",
        "fr_FR": "Marketing"
    },
    [...]
}
```

::: more
[How to filter attribute groups?](https://api.akeneo.com/documentation/filter.html#filter-attribute-groups)  
[How to filter categories?](https://api.akeneo.com/documentation/filter.html#filter-categories)  
[What is the attribute format in the API?](https://api.akeneo.com/concepts/catalog-structure.html#attribute)
:::
