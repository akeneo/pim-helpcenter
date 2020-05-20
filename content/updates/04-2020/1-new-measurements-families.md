# New: add your own measurement units

## A new screen to manage measurements
::: meta-data type="New" features="Measurements, Data Governance" available="mid-April" link-to-doc="../articles/manage-your-measurements.html"
:::

**In order to give you more flexibility, we have improved the way we manage metrics in the PIM.**    
We are very glad to introduce our **new `Measurements` feature**.
Alongside standard measurement families (eg. weight, length, volume...), create your custom measurement families per your needs (eg. inductance, luminance...) and add the units you deem necessary (Henry, Lambert...).

![List measurement families](../img/Settings_Measurement_Families.png)

If you want additional units for an existing or new measurement family, easily add them manually directly from the user interface.

![Edition of units](../img/Settings_Measurement_Families_Edit_Unit.png)

You now have **full control over your measurement families**: easily add, update, or delete measurement units or measurement families that you are not using.

## New dedicated API endpoints
::: meta-data type="New" features="Measurements, Data Governance" available="mid-April" link-to-doc="https://api.akeneo.com/api-reference-index.html#Measurementfamily"
:::

We also introduced two new API endpoints for the measurement families:
- A first endpoint to [retrieve all the measurement families](https://api.akeneo.com/api-reference.html#measurement_families_get_list) with their units and conversion,
- A second endpoint to [create and update measurement families](https://api.akeneo.com/api-reference.html#patch_measurement_families) with their units and conversion.

Our previous endpoints about [metric families](https://api.akeneo.com/api-reference.html#Measurefamily) still work but the new ones are more powerful. Indeed, they allow creating/updating measurement families and they guarantee the order of the conversion calculations.

::: more
[What are measurements?](../articles/what-about-measurements.html)
:::
