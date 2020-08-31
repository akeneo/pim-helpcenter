---
pim_announcement_img: ./img/option-labels.png
pim_announcement_alt_img: "Option labels inside product endpoint"
pim_announcement_audience:
- CE
- EE
---

# Options labels in product export via API
::: meta-data type="Improvement" features="API, Connectivity" available="late August" link-to-doc="https://api.akeneo.com/api-reference.html#get_products"
:::

To help you reduce the number of API calls needed to synchronize your product data, we added option labels inside the product endpoints.

Let's take an example! 

If you use our API to display product content on a website, or to create marketing/sales materials, before this update, your connector needed to retrieve product attribute values by calling the `GET /products` endpoint. Then, for each attribute with a list of options, a `GET /attributes` was required to get the related labels. 

Before the generator was only receiving codes:

```
    "values": {
        "description": [
            {
                "locale": "en_US",
                "scope": "ecommerce",
                "data": "Best bag to travel!"
            }
        ],
        "collection": [
            {
                "locale": null,
                "scope": null,
                "data": [
                    "spring_2020",
                    "summer_2020"
                ]
            }
        ],
        "brand": [
            {
                "locale": null,
                "scope": null,
                "data": "akeneo_brand"
            }
        ],
        "colors": [
            {
                "locale": null,
                "scope": null,
                "data": [
                    "brown"
                ]
            }
        ],
        "size": [
            {
                "locale": null,
                "scope": null,
                "data": "s"
            }
        ],
        "materials": [
            {
                "locale": null,
                "scope": null,
                "data": [
                    "leather",
                    "metal"
                ]
            }
        ]
    }
```

Now it receives codes and labels:

```
    "values": {
        "description": [
            {
                "locale": "en_US",
                "scope": "ecommerce",
                "data": "Best bag to travel!"
            }
        ],
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
        ],
        "brand": [
            {
                "locale": null,
                "scope": null,
                "data": "akeneo_brand",
                "linked_data": {
                    "attribute": "brand",
                    "code": "akeneo_brand",
                    "labels": {
                        "en_US": "Akeneo",
                        "fr_FR": "Akeneo"
                    }
                }
            }
        ],
        "colors": [
            {
                "locale": null,
                "scope": null,
                "data": [
                    "brown"
                ],
                "linked_data": {
                    "brown": {
                        "attribute": "colors",
                        "code": "brown",
                        "labels": {
                            "de_DE": "Braun",
                            "en_US": "Brown",
                            "fr_FR": "Marron"
                        }
                    }
                }
            }
        ],
        "size": [
            {
                "locale": null,
                "scope": null,
                "data": "s",
                "linked_data": {
                    "attribute": "size",
                    "code": "s",
                    "labels": {
                        "en_US": "S",
                        "fr_FR": "S"
                    }
                }
            }
        ],
        "materials": [
            {
                "locale": null,
                "scope": null,
                "data": [
                    "leather",
                    "metal"
                ],
                "linked_data": {
                    "leather": {
                        "attribute": "materials",
                        "code": "leather",
                        "labels": {
                            "de_DE": "Leder",
                            "en_US": "Leather",
                            "fr_FR": "Cuir"
                        }
                    },
                    "metal": {
                        "attribute": "materials",
                        "code": "metal",
                        "labels": {
                            "de_DE": "Metall",
                            "en_US": "Metal",
                            "fr_FR": "Métal"
                        }
                    }
                }
            }
        ]
    }
```

In that really simple example, we **avoid 5 API calls per product**. Imagine this improvement for a catalog which contains thousands of products! 

::: more
[How to get product data with the Akeneo API?](https://api.akeneo.com/api-reference.html#get_products)  
:::
