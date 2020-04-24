# Measurement families new features
::: meta-data type="New features" features="Measurements (ex-Metrics)" available="16th of April"
:::

## New API endpoints
There are now 2 new endpoints in the API for measurement families:
- One [endpoint to retrieve all the measurement families with their units and conversion](https://api.akeneo.com/api-reference.html#measurement_families_get_list),
- One [endpoint to create and update measurements families with their units and conversion](https://api.akeneo.com/api-reference.html#patch_measurement_families).

[Previous endpoints about measure families](https://api.akeneo.com/api-reference.html#Measurefamily) still work but the new ones are more powerful. Indeed, they allow to create/update measurement families and they guarantee the order of the conversion operations.

## New administration UI
We added a new `Measurements` screen in the  `Settings` menu to administrate your measurement families and units from the user interface:
- You can create your own measurement families (ex: Inductance, luminance...) with their units (Henry, Lambert...) and conversion operations (to convert all units from the standard one).
![List measurement families](../img/Settings_Measurement_Families.png)
- You can add units to the existing measurement families.
![Edition of units](../img/Settings_Measurement_Families_Edit_Unit.png)
- You can delete the measurement families you don't want to use or remove some existing units.

If a product attribute is linked to a measurement family, you can only add units and change the translated labels and symbol of existing units.

Regarding the limits, we defined a volume limitation of 100 measurement families, 50 units per measurement family and a maximum of 5 conversion operations per unit.

For a better English, we renamed the existing `metric` attribute type, families and units in `measurement`.


::: more
[What about measurement?](../articles/what-about-measurements.html)
:::
