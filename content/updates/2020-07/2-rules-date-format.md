---
pim_announcement_audience:
- EE
---

# A new relative date format
::: meta-data type="Improvement" features="Rules engine, Productivity" available="early July" link-to-doc="../articles/get-started-with-the-rules-engine.html#created.html"
:::

This is now possible to filter products/product models based on a **relative date** in the rules engine. This new format is available via YML import only for now, and for these 3 filters: `updated`, `created`, and `date` attribute type.

It was already possible to filter products/product models on their `creation date`, `updated date`, or a `date` attribute type. But it was not enough.
Indeed, these filters expected only **specific dates** as values.
For instance, you could parameter your rule in order to be able to *filter on products/product models that contains the value "06/23/20" for the "release date" attribute.*.
But in some cases, you may need to filter on **relative dates** as well. It can be very useful if you need to select all the products/product models that have been ***updated on the last 24 hours***, for example.

::: more
[How to manage my rules?](../articles/manage-your-rules.html)  
[What is a rule?](../articles/what-is-a-rule.html)  
[What is the rules engine?](../articles/get-started-with-the-rules-engine.html)   
:::
