---
pim_announcement_audience:
- CE
- EE
---

# Option labels in product API synchronization  
::: meta-data type="Improvement" features="API, Connectivity" available="mid-September"
:::

To help you reduce the number of API calls needed to synchronize your product data, we added option labels inside the product endpoints.

You can now find the option labels directly inside your product values, in a new property called `linked_data`.

![The new `linked_data` property in the product value](../img/linked_data_new_property.png)

Let's take an example!

If you use our API to display product content on a website, or to create marketing/sales materials, before this update, your connector needed to retrieve product attribute values by calling the `GET /products` endpoint. Then, for each attribute with a list of options, a `GET /attributes` was required to get the related labels.

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

In this example, we **avoid 5 API calls per product**. Can you imagine the impact for a catalog which contains thousands of products?

::: more
[How to get product data with the Akeneo API?](https://api.akeneo.com/api-reference.html#get_products)  
:::
