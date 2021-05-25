---
pim_announcement_audience:
- EE
- CE
---

# Highlight the most enriched products on your channels
::: meta-data type="Improvement" features="Productivity" available="late May" in="EE,GE" link-to-doc="https://api.akeneo.com/concepts/products.html#product"

When developing your connectors, you can now ask for the product completeness whenever retrieving products. Thanks to this piece of information, you can easily push forward the most enriched products on your different channels.

Also, if your PIM is connected to your BI tool, the product completeness can be very useful to follow KPIs such as ...

Below is a product example in JSON with its associated completeness for all its channels/locales combinations.
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
