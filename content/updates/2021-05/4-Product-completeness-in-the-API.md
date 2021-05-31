---
pim_announcement_audience:
- EE
- CE
---

# Retrieve product completeness through API
::: meta-data type="Improvement" features="Productivity" available="late May" in="EE,GE" link-to-doc="https://api.akeneo.com/concepts/products.html#product"

When connecting your PIM to other applications through the API, you can now ask for the product completeness whenever retrieving products. Thanks to this piece of information, you can easily push forward the most enriched products on your different channels.

Also, if your PIM is connected to your BI tool, the product completeness can be very useful to follow KPIs such as the product completeness percentage per family for example.

Below is a JSON example of a product with its completeness across all channel/locale combinations.
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
