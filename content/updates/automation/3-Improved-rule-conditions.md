# Improved rule conditions

## Narrow down your rule selections
::: meta-data type="New" ee-only="true" link-to-doc="../articles/manage-your-rules.html#available-conditions"
:::

New condition filters are now available in the rules engine to help you better narrow down your product selection for a rule. For instance, you can now target specific product models or variants, or a list of product identifiers.

You can now filter on:
- the entity type: to target product models or products and variant products,
- family variants: to target products belonging to one or several family variants, or products with one or no family variant,
- parents: to target specific product parents or products without parents
- identifiers: to target specific products based on their product identifiers.

![The new filters in action](../img/new-filters-for-rules-conditions.png)

Don't hesitate to use those new filters. The more precise your rule conditions, the faster it will be run.

## Conditions with relative dates
::: meta-data type="Improvement" ee-only="true" link-to-doc="../articles/get-started-with-the-rules-engine.html#created"
:::

It was already possible to apply conditions on products/product models based on their `creation date`, `updated date`, or the content of a `date` attribute type. But we wanted to go further, by allowing you to not only filter on specific dates but also on relative dates. With this new functionality, you are able to apply an action on all the products created/updated for the past X days.

