---
pim_announcement_img: ./img/measurements-api_in_app.png
pim_announcement_alt_img: "Measurement endpoints"
pim_announcement_audience:
- CE
- EE
---

# New endpoints to manage measurements
::: meta-data type="New" features="Measurements, Data Governance" available="mid-April"
:::

We introduced two new API endpoints to create, update and list your measurement families.

They are the following:
- A first endpoint to [retrieve all the measurement families](https://api.akeneo.com/api-reference.html#measurement_families_get_list) with their units and conversion,
- A second endpoint to [create and update measurement families](https://api.akeneo.com/api-reference.html#patch_measurement_families) with their units and conversion.

![Measurement endpoints](../img/measurements-api.png)

Our previous endpoints about [metric families](https://api.akeneo.com/api-reference.html#Measurefamily) still work but the new ones are more powerful. Indeed, they allow creating/updating measurement families and they guarantee the order of the conversion calculations.

::: more
[What are measurements?](../articles/what-about-measurements.html)
:::
