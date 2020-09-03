---
pim_announcement_img: ./img/api-filters.png
pim_announcement_alt_img: "API documentation about attribute filters"
pim_announcement_audience:
- CE
- EE
---

# New updates to ease attribute synchronization with the API
::: meta-data type="New" features="API, Connectivity" available="late August" link-to-doc="https://api.akeneo.com/documentation/filter.html"
:::

A **new `search` parameter** enables you to add filters when retrieving attributes. Moreover, we added **attribute group labels** inside the attribute endpoints.

Those two enhancements will help reduce the number of data to process, the size of the API call responses, and the number of API calls needed to synchronize your catalog structure. 

## The `search` parameter  

Here are the available filters:
- **updated date**: allows you to retrieve only data updated since a specific date and hour,
- **code**: allows you to filter on specific codes, 
- **type**: allows you to filter on attributes from a specific type.

You can combine filters to achieve powerful results!

Let's take an example: you have an eCommerce platform that uses your PIM data. You know the list of all the attributes you need, and your application synchronizes the catalog structure every day at 3 PM.  

The following filter enables you to retrieve all attributes updated since the 2020-08-26 at 15:00 and matching one of the listed codes (brand, size, description, name, picture, color, secondary_color):

```
/api/rest/v1/attributes?search={"updated": [{ "operator": ">", "value": "2020-08-26T15:00:00Z"}],"code": [{ "operator": "IN", "value": ["brand","size","description","name","picture","color","secondary_color"]}]
```  

 
## Attribute group labels inside the attribute endpoints  
Let's take an example! You want to share your product data thanks to your online catalog.  
Before our modification, your catalog application should have:
- retrieved the attributes data, 
- gotten back the attribute groups data, 
- then re-created the attribute organization.  

With attribute group labels inside the attributes endpoint, your catalog app only need to call the attributes endpoint!

GET `/api/rest/v1/attributes` example:
```
{
    [...]
    "_embedded": {
        "items": [
            {
                "code": "auto_exposure",
                "type": "pim_catalog_boolean",
                "group": "marketing",
                "unique": false,
                "useable_as_grid_filter": true,
                "allowed_extensions": [],
                "metric_family": null,
                "default_metric_unit": null,
                "reference_data_name": null,
                "available_locales": [],
                "max_characters": null,
                "validation_rule": null,
                "validation_regexp": null,
                "wysiwyg_enabled": null,
                "number_min": null,
                "number_max": null,
                "decimals_allowed": null,
                "negative_allowed": null,
                "date_min": null,
                "date_max": null,
                "max_file_size": null,
                "minimum_input_length": null,
                "sort_order": 39,
                "localizable": false,
                "scopable": false,
                "labels": {
                    "de_DE": "Auto exposureq2r32",
                    "en_US": "Auto exposure23r32",
                    "fr_FR": "Auto exposure"
                },
                "auto_option_sorting": null,
                "group_labels": {
                    "en_US": "Marketing",
                    "fr_FR": "Marketing",
                    "de_DE": "Marketing"
                }
            },
            {
                "code": "auto_focus_lock",
                "type": "pim_catalog_boolean",
                "group": "technical",
                "unique": false,
                "useable_as_grid_filter": true,
                "allowed_extensions": [],
                "metric_family": null,
                "default_metric_unit": null,
                "reference_data_name": null,
                "available_locales": [],
                "max_characters": null,
                "validation_rule": null,
                "validation_regexp": null,
                "wysiwyg_enabled": null,
                "number_min": null,
                "number_max": null,
                "decimals_allowed": null,
                "negative_allowed": null,
                "date_min": null,
                "date_max": null,
                "max_file_size": null,
                "minimum_input_length": null,
                "sort_order": 33,
                "localizable": false,
                "scopable": false,
                "labels": {
                    "de_DE": "Auto focus lock",
                    "en_US": "Auto focus lock",
                    "fr_FR": "Auto focus lock"
                },
                "auto_option_sorting": null,
                "group_labels": {
                    "en_US": "Technical",
                    "fr_FR": "Technique",
                    "de_DE": "Technische"
                }
            },
            [...]
        ]
    }
}
```

::: more
[How to filter attributes?](https://api.akeneo.com/documentation/filter.html#filter-attributes)  
[How to get back attributes data?](https://api.akeneo.com/api-reference.html#get_attributes)
:::
