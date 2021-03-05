# New endpoints to manage measurements
::: meta-data type="New" ee-only="false" link-to-doc="https://api.akeneo.com/api-reference-index.html#Measurementfamily"
:::

We introduced two new API endpoints to create, update and list your measurement families.

They are the following:
- A first endpoint to [retrieve all the measurement families](https://api.akeneo.com/api-reference.html#measurement_families_get_list) with their units and conversion,
- A second endpoint to [create and update measurement families](https://api.akeneo.com/api-reference.html#patch_measurement_families) with their units and conversion.

![Measurement endpoints](../img/measurements-api.png)

:::info
Our previous endpoints about [metric families](https://api.akeneo.com/api-reference.html#Measurefamily) still work but we strongly recommend using the new ones as they are way more powerful. Indeed, they allow to create and update measurement families and they guarantee the order of the conversion calculations.
:::
