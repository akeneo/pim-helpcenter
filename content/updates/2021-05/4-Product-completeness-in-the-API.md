---
pim_announcement_audience:
- EE
- CE
---

# Retrieve product completeness through API
::: meta-data type="Improvement" features="Productivity" available="late May" in="EE,GE" link-to-doc="https://api.akeneo.com/concepts/products.html#product"

 You can now retrieve your products' completeness in the REST API product data returns. This turns in handy when you need to connect your PIM to third-party systems. For instance, you can then use it to select the most enriched products before you share them to your different channels.

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
[How to connect the PIM to my channels?](../articles/how-to-connect-my-pim.html)
:::
