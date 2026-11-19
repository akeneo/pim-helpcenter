---
id: manage-your-measurements
themes: catalog-settings
title: Manage your **measurements**
popular: false
ee-only: false
related: what-about-measurements, manage-your-attributes
---

# See all your measurement families

**Measurement families are used to store your product information with measurement e.g. weight, length or frequency inside your PIM**.    

[Here are a few definitions](what-about-measurements.html) to help you understand what we will speak about in this article.

To see all your measurement families, edit them or create a new one, go to the `Settings/Measurements` menu:
- *Label* is the label of a measurement family in the [UI locale](manage-your-account.html#your-interface-default-language)
- *Code* is the identifier of a measurement family
- *Standard unit* is the unit used to convert the other units of a measurement family
- *Number of units* is the number of units for a measurement family (standard unit included)

![List of measurement families](../img/Settings_Measurement_Families.png)

Type in a family code or label in the search bar to find a measurement family. You can also sort measurement family information using the columns in the grid.

# How to create a measurement family?

To create a new measurement family, follow these steps:
1.  Go to `Settings/Measurements`
1.  Click on `Create`
![Create a measurement family](../img/Settings_Measurement_Families_Create.png)
1.  The pop-in to create a measurement family is displayed
1.  Enter the new measurement family code (this code is required and must be unique)
1.  Fill in the label in the current [UI locale](manage-your-account.html#your-interface-default-language)
1.  For the **standard unit used to convert the other units of this measurement family**, add the code (this code is required and must be unique), the label in the current [UI locale](manage-your-account.html#your-interface-default-language) and the symbol
1.  Click on `Save`

The measurement family is now created and the screen to display and [add other units](#manage-units-in-a-measurement-family) opens.

![Measurement family with standard unit](../img/Settings_Measurement_Families_Standard_Unit.png)

::: warning
The **standard unit** is set once and for all.
:::

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 300 measurement families. You cannot create more than 300 measurement families.  
If you need more than 300 measurement families, please reach out to our support team and inform them about your use case.
:::

# Edit properties of a measurement family
To edit a measurement family:
1.  Go to `Settings/Measurements`
2.  Select the measurement family you want to edit in the grid and click on the line or on the edition shortcut
3.  The screen to display the measurement family opens
4.  Translate the labels in the `Properties` tab and click on `Save`

![Measurement family edit properties](../img/Settings_Measurement_Families_Properties.png)

# Manage units in a measurement family
To manage units in a measurement family:
1.  Go to `Settings/Measurements`
2.  Select the measurement family to edit in the grid and click on the line or on the edition shortcut
3.  The screen to display the measurement family opens on the `Units` tab

![Measurement family units](../img/Settings_Measurement_Families_Units.png)

## Add a unit to a measurement family
::: warning
If a [product attribute](manage-your-attributes.html#create-an-attribute) is linked to a measurement family, once a unit is created, you will only be able to edit its translated labels and symbol.
:::

Once you are on your measurement family edit form, go to the `Units` tab:
1.  Click on `Add unit`
1.  The pop-in to add a new unit to a measurement family is displayed
![Measurement family add unit](../img/Settings_Measurement_Families_Add_Unit.png)
1.  Enter the new unit code (this code is required and must be unique)
1.  Fill in the label in the current [UI locale](manage-your-account.html#your-interface-default-language) and the symbol
1.  Enter the **conversion operations to convert the unit to the standard unit** (click on `Add new operation` to add several conversion operations with their value and mathematical operator, click on the cross to remove an operation)
1.  Click on `Add`, the screen with all the units opens
![Measurement family add unit](../img/Settings_Measurement_Families_Add_Unit_Labels.png)
1.  Translate the labels of the added unit in the `Label translations` section
1.  Click on `Save`

The unit is now added.

::: info
One conversion operation per unit is required and you can have a maximum of 5 conversion operations per unit.
:::

:::info
If you have several conversion operations, **the order of the conversion operations is important**.  
For example, for the `Temperature` measurement family to convert the `Fahrenheit` unit to the standard unit `Kelvin`, you need to define 3 conversion operations:
1. Subtract 32
2. Divide by 1.8
3. Add 273.15
:::

::: tips
If you have several units to add, you can stay in the `Add a new unit` pop-in to quickly add as many units as needed:
1. Enter the first record label
1. Tick `Create another unit`
1. Press `Enter`
1. Add the code, label, symbol and conversion operation for each record
1. Once you've done, press `Esc` or `Echap`   
:::

:::info
To guarantee that the PIM is functional and runs smoothly, we defined a volume limitation of 50 units per measurement family. You cannot create more than 50 units per measurement family.  
If you need more than 50 units per measurement family, please reach out to our support team and inform them about your use case.
:::

## Edit a unit in a measurement family
::: warning
If a [product attribute](manage-your-attributes.html#create-an-attribute) is linked to a measurement family, you will only be able to change the translated labels and symbols of existing units.
:::

Once you are on your measurement family edit form, go to the `Units` tab:
1.  Click on the unit you want to edit in the list
![Measurement family edit unit](../img/Settings_Measurement_Families_Edit_Unit.png)
1.  Edit its symbol
1.  Edit its conversion operations (click on `Add new operation` to add several conversion operations with their value and mathematical operator, click on the cross to remove an operation)
1.  Translate the labels of the unit in the `Label translations` section
1.  Click on `Save`

You can change the following properties of a unit:
- *Symbol*: the symbol of the unit
- *Conversion operations*: the operations to convert the unit to the standard unit
- *Label translations*: the translated labels for the unit for all the [UI locales](manage-your-account.html#your-interface-default-language)

::: info
One conversion operation per unit is required and you can have a maximum of 5 conversion operations per unit.
:::

:::info
If you have several conversion operations, **the order of the conversion operations is important**.  
For example, for the `Temperature` measurement family to convert the `Fahrenheit` unit to the standard unit `Kelvin`, you need to define 3 conversion operations:
1. Subtract 32
2. Divide by 1.8
3. Add 273.15
![Measurement family conversion](../img/Settings_Measurement_Families_Conversion.png)
:::

## Delete a unit in a measurement family
::: warning
If a [product attribute](manage-your-attributes.html#create-an-attribute) is linked to a measurement family, you won't be able to delete its units.
:::

Once you are on your measurement family edit form, go under the `Units` tab:
1.  Click on the the `Delete unit` button
1.  Confirm the action from the validation message
1.  Click on `Save`

The unit is deleted.

# Delete a measurement family
::: warning
If a [product attribute](manage-your-attributes.html#create-an-attribute) is linked to a measurement family, you won't be able to delete the measurement family.
:::

1. Go to `Settings/Measurements` to list the measurement families
1. Click on the measurement family you want to delete
1. Click on `...` for other actions and then `Delete measurement family` on the top right corner
1. Confirm the action from the validation message

The measurement family is deleted with all its units.
