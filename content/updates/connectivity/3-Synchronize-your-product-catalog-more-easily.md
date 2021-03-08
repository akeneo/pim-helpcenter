# Synchronize your product catalog more easily

## Option labels in the product endpoints
::: meta-data type="Improvement" ee-only="false" link-to-doc="https://api.akeneo.com/concepts/products.html#the-global-format"
:::

To help you reduce the number of API calls needed to synchronize your product data, we added option labels inside the product endpoints. You can now find the option labels directly inside your product values, in a new property called `linked_data`.

Let's take an example! If you use our API to display product content on a website, or to create marketing/sales materials, before this update, your connector needed to retrieve product attribute values by calling the `GET /products` endpoint. Then, for each attribute with a list of options, a `GET /attributes` was required to get the related labels.

Before the connector only received codes inside the product values.

```json
{
    "collection": [
        {
            "locale": null,
            "scope": null,
            "data": [
                "spring_2020",
                "summer_2020"
            ]
        }
    ]
}
```

Now, it receives codes and labels:

```json
{
    "collection": [
        {
            "locale": null,
            "scope": null,
            "data": [
                "spring_2020",
                "summer_2020"
            ],
            "linked_data": {
                "spring_2020": {
                    "attribute": "collection",
                    "code": "spring_2020",
                    "labels": {
                        "de_DE": "Frühling 2020",
                        "en_US": "Spring 2020",
                        "fr_FR": "Printemps 2020"
                    }
                },
                "summer_2020": {
                    "attribute": "collection",
                    "code": "summer_2020",
                    "labels": {
                        "de_DE": "Sommer 2020",
                        "en_US": "Summer 2020",
                        "fr_FR": "Été 2020"
                    }
                }
            }
        }
    ]
}
```

In this example, we avoid 5 API calls per product. Can you imagine the impact on a catalog that contains thousands of products?

## New filters on categories, attributes, families and attribute groups
::: meta-data type="Improvement" ee-only="false" link-to-doc="TODO"
:::
We introduced a new `search` parameter when retrieving attributes, families, categories, or attribute groups. It allows you to add filters to your requests which will help reduce the amount of data to process and the size of the API call responses.

Here are the available filters:
- **code**: allows you to filter on specific codes,
- **updated date**: allows you to retrieve only data updated since a specific date and hour (only available for attributes, families and attribute groups),
- **type**: allows you to filter on attributes from a specific type (only available for attributes),
- **parent**: allows you to retrieve all sub-categories of a parent category (only available for categories).

You can combine filters for more powerful results!

Let's take an example: you have an eCommerce platform that uses your PIM data. You know the list of all the attributes you need, and your application synchronizes the catalog structure every day at 3 PM.  

The following filter enables you to retrieve all the attributes updated since August 26th, 2020 at 03:00 pm and matching one of the listed codes (brand, size, description, name, picture, color, secondary_color):

```
/api/rest/v1/attributes?search={"updated": [{ "operator": ">", "value": "2020-08-26T15:00:00Z"}],"code": [{ "operator": "IN", "value": ["brand","size","description","name","picture","color","secondary_color"]}]
```

## Attribute group labels in the attribute endpoints  
::: meta-data type="New" ee-only="false" link-to-doc="https://api.akeneo.com/api-reference.html#get_attributes__code_"
:::

To further reduce the number of API requests when syncing your product catalog, we now also send attribute group labels whenever you request attributes. Indeed, there is now a new `group_labels` property in the attribute format:
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
No need to call the attribute group endpoint to get them. Neat!
