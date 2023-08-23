---
pim_announcement_audience:
- EE
---

# Improved asset synchronization within your connectors
::: meta-data type="Improvement" features="Connectivity" available="mid-June" in="EE"

When requesting assets via the REST API, you can ask to retrieve all the assets updated on a date range, since a number of days, or even before a given date. This should heavily help you improve the performance of your asset synchronization in your connectors.

We also added the creation and last updated date in the asset format as you can see below.
```json
        {
  "code": "sku_54628_picture1",
  "values": {...},
  "created": "2021-05-31T09:23:34+00:00",
  "updated": "2021-05-31T09:23:34+00:00"
}
```

::: more
[How to connect my PIM?](../articles/how-to-connect-my-pim-legacy.html)
:::
