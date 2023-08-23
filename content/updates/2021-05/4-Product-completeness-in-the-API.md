---
pim_announcement_audience:
- EE
- CE
---

# Retrieve product completeness through API
::: meta-data type="Improvement" features="Productivity" available="late May" in="EE,GE"

You can now get your products’ completeness whenever retrieving products through the REST API. It gives an even more thorough vision of the products on your third-party applications. For instance, it can be used to rank or highlight the most complete products on the different sales channels.

 The product completeness is also a very useful KPI you can use, if your PIM is connected to a BI tool.


Below is a JSON example of a product with its completeness across all channel/locale.
```json
{
    "identifier": "1111111195",
    "family": "clothing",
    "values": {...},
    "completenesses": [
        {
            "scope": "ecommerce",
            "locale": "en_US",
            "data": 45
        },
        {
            "scope": "ecommerce",
            "locale": "fr_FR",
            "data": 90
        }
    ]
}
```

::: more
[How to connect the PIM to my channels?](../articles/how-to-connect-my-pim-legacy.html)
:::
