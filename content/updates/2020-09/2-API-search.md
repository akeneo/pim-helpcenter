---
pim_announcement_img: ./img/api-filters.png
pim_announcement_alt_img: "API documentation about attribute filters"
pim_announcement_audience:
- CE
- EE
---

# New updates to ease API catalog structure synchronization
::: meta-data type="New" features="API, Connectivity" available="early September" link-to-doc="https://api.akeneo.com/documentation/filter.html"
:::

We added new filters on the `search` parameter which enables you to add filters to catalog structure endpoints. Moreover, we added **attribute group labels** inside the attribute endpoints.  

Those two enhancements will help reduce further the number of data to process, the size of the API call responses, and the number of API calls needed to synchronize your catalog structure. 

## The new filters

Here are the new filters:
- **updated date**: allows you to retrieve only data updated since a specific date and hour (now also available for attribute groups), 
- **code**: allows you to filter on specific codes (now also available for attribute groups and categories), 
- **parent**: allows you to retrieve all sub-categories of a parent category (only available for categories).  

Let's take an example: you have several category trees in your PIM, and you want to synchronise only the `eCommerce` category tree with your eCommerce backend.

The following filter enables you to retrieve only the categories that are in the `eCommerce` category tree:

```
/api/rest/v1/categories?search={"parent":[{"operator":"=","value":"ecommerce"}]}
```  

::: tips
You can combine filters to achieve powerful results!
:::
 
## Attribute group labels inside the attribute endpoints  
Imagine you want to share your product data thanks to your online catalog.  

Before our modification, your catalog should have:
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
                "_links": {
                    "self": {
                        "href": "http://test-dev-feature-octopus.core.akeneo.com/api/rest/v1/attributes/auto_exposure"
                    }
                },
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
                "_links": {
                    "self": {
                        "href": "http://test-dev-feature-octopus.core.akeneo.com/api/rest/v1/attributes/auto_focus_lock"
                    }
                },
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
            {
                "_links": {
                    "self": {
                        "href": "http://test-dev-feature-octopus.core.akeneo.com/api/rest/v1/attributes/care_instructions"
                    }
                },
                "code": "care_instructions",
                "type": "pim_catalog_textarea",
                "group": "product",
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
                "sort_order": 7,
                "localizable": false,
                "scopable": false,
                "labels": {
                    "de_DE": "Care instructions",
                    "en_US": "Care instructions",
                    "fr_FR": "Instructions d'entretien"
                },
                "auto_option_sorting": null,
                "group_labels": {
                    "en_US": "Product",
                    "fr_FR": "Produit",
                    "de_DE": "Product"
                }
            }
        ]
    }
}
```

::: more
[How to filter attributes?](https://api.akeneo.com/documentation/filter.html#filter-attributes)  
[How to filter attribute groups?](https://api.akeneo.com/documentation/filter.html#filter-attribute-groups)  
[How to filter families?](https://api.akeneo.com/documentation/filter.html#filter-families)  
[How to filter categories?](https://api.akeneo.com/documentation/filter.html#filter-categories)  
[How to get back attributes data?](https://api.akeneo.com/api-reference.html#get_attributes)
:::
