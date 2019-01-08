---
id: enrich-your-reference-entity-records
themes: products-super-power
title: "Enrich your reference entity records"
popular: false
ee-only: right
related:
---

# Enrich your reference entity records

## Add a record
Once you’ve created a reference entity, you can add **records**.
Let’s say that you’ve just created the reference entity `Brand`, you’ve defined it’s records' attributes and now it’s time to add new records. For example: Fermob, Kartell, Muuto, Fatboy…

To add a new brand to the reference entity `Brand`:
1. Go to your `Brand` entity (you are automatically on the records grid).
1. Then click on the `Add new` button, choose a label for the record (the code is automatically generated but you can change it if needed).

::: tips
If you have several records to add, just check `Create another record` and save: you’ll stay in the creation pop-in and you can quickly add as many records as needed.
:::

## Display records
To see the records of the reference entity, click on the `Records` tab in the left menu. You will see the records grid, where all the records of the entity are listed.

### The records grid
The records' grid is quite different than the products' one. Thereafter are the novelties of this grid:
1. The first line is frozen: it allows you to scroll down the page, while continuing to see the name of the attributes
1. The first 4 columns are also frozen since these are the system attributes and the status of the completeness. We added an horizontal scroll in order to see the content of all the columns.
1. We also added a tooltip to preview the content of a text attribute directly in the grid.
1. Finally, there is an infinite scroll down on this grid, which allows you to gather all the records in the same page.

::: tips
When you scroll in the grid, only the first 500 results are displayed (in order to avoid performances issues). When you arrive at the end of the first 500 records, a message is displayed *"You just scrolled through the first 500 results out of 10005 records. To see more, try with more specific search criteria."*
:::

Of course, you can still edit or delete a record thanks to the buttons at the end of each line. 

## Search for a record

### Full text search

Our goal is to facilitate your work and to **increase your productivity**. To make this possible, we made a very powerful search in the grid of records. Indeed, we implemented a **full text search** which allows you to search on each word used in a record.
For example, if you use the word *« famous »* in the description of a record, then you can type *« famous »* in the records grid search bar and all the records containing the word *« famous »* will be displayed.

### Filter on completeness

You can also filter on completeness in order to see the records that are complete, incomplete, or choose to see all the records, no matter their completeness.

## Edit a record

Of course, you can edit a record in order to change values or add new ones. Nothing simpler: just go on a record and add/change the values you want.

::: tips
You can download or delete the main image of the record directly in the header. Just click on the right button on the image ;)
:::

As for a product, you can define if you want a different content according to channels, and same for locales. You can find a locale and channel switcher on each record, meaning that if you need to translate values for example, you can do it simply switching from a locale to another.

(screenshot)

If you defined a *"text area"* attribute for your records, you can check the parameter `rich text editor`. This will give you access to a set of options to improve the formate of your text. For example, you can change the font, the size, justify the text, etc. You can also add a link, a video, an image. In fact, the Rich text editor offers a large bunch of possibilities!

(screenshot)

## Link a record to another record

It is also possible to link a record to another one, and it is very simple.
1. Add a new attribute to the records, choosing the attribute type `reference entity simple link` or `reference entity multiple link`.
1. Then, choose the reference entity to which your record must be linked.
1. Go back to your records grid, choose one record to edit.
You will see a new selector with all the records of the linked entity.

::: tips
Click on the `link` button on each record line in the selector to preview the record! It opens automatically a new tab in your browser.
:::

## Delete records

### Delete a record
You can delete a record or all the records of an entity.
 To delete a record, 2 choices:
- Either directly in the records grid, clicking on the *trashcan* button on each record line.
- Either in the details of the record, clicking on the `...` button then `delete`.

### Delete all the records
To delete all the records of an entity, click on the `...` button in the records grid then `delete all records`.

::: tips
To delete all the records of an entity, you need to check that no record of this entity is linked to other entities or used in a product.
:::
