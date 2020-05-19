# New measurement feature
::: meta-data type="New features" features="Measurements, Data Governance" available="16th of April" link-to-doc="../articles/what-about-measurements.html"
:::

**In order to give you more flexibility, we have improved the way we managed metrics in the PIM.** We are very glad to introduce you our new `Measurements` feature. All your measurement units will be gathered into measurement families, each family has its own units.

## Create your custom measurement families

You can now start creating your own measurement families under `Settings`/`Measurements`.  add new measurements per your needs (eg: inductance, luminance...) with their units (Henry, Lambert...) and conversion operations.

![List measurement families](../img/Settings_Measurement_Families.png)

Easily add new units to existing measurement families

If you need additional units for a specific measurement family, easily add it by yourself.

![Edition of units](../img/Settings_Measurement_Families_Edit_Unit.png)

You have full control on your measurement families, delete measurement units or families you are not using, and easily create new ones depending on your needs.

## New dedicated API endpoints

We also introduced two new API endpoints for the measurement families:
- One [endpoint to retrieve all the measurement families with their units and conversion](https://api.akeneo.com/api-reference.html#measurement_families_get_list),
- One [endpoint to create and update measurements families with their units and conversion](https://api.akeneo.com/api-reference.html#patch_measurement_families).

The [previous endpoints about metrics families](https://api.akeneo.com/api-reference.html#Measurefamily) still work but the new ones are more powerful. Indeed, they allow to create/update measurement families and they guarantee the order of the conversion operations.

::: more
[What about measurement?](../articles/what-about-measurements.html)
:::
