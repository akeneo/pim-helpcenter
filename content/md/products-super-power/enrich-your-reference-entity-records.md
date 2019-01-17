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
1. Go to your `Brand` entity (you are automatically on the records grid)
1. Then click on the `Add new` button, choose a label for the record (the code is automatically generated but you can change it if needed).

::: tips
If you have several records to add:
1. Tick `Create another record`
1. Input the first record's label and press "Enter"
1. Input the second record's label and press "Enter"
1. Do it for each record then save.  

You’ll stay in the creation pop-in to add quickly as many records as needed.  Note that we defined a limitation of 1 million records per reference entity to guarantee that the PIM is functional and runs smoothly.
:::

## Display records
To see the records of the reference entity, click on the `Records` tab in the left menu. You will see the records grid, where all the records of the entity are listed.

### The records grid
The records grid is quite different than the products' one. Thereafter are the novelties of this grid:
- The line with the attributes names is frozen: it allows you to scroll down the page, while **continuing to see the name of the attributes**
- The first 4 columns with image, label, code and completeness are also frozen. We added an **horizontal scroll** in order to see the content of all the columns
- We also added a tooltip to **preview the content** of a text attribute directly in the grid
- Finally, there is an **infinite scroll down** on this grid, which allows you to gather all the records in the same page.

::: tips
When you scroll down in the grid, only the first 500 results are displayed (in order to avoid performances issues). When you arrive at the end of the first 500 records, a message is displayed *"You just scrolled through the first 500 results out of 10005 records. To see more, try with more specific search criteria."*
:::

Of course, you can still edit or delete a record thanks to the buttons at the end of each line.

## Search for a record

### Full text search

Our goal is to facilitate your work and to **increase your productivity**. To make this possible, we made a very powerful search in the grid of records. Indeed, we implemented a **full text search** which allows you to search on code, label and text attribute types.

For example, if you use the word *« famous »* in the description of a record, then you can type *« famous »* in the records grid search bar and all the records containing the word *« famous »* in their code, label or text attribute types will be displayed.  
And we can go further.

Let's consider you use the word *"amazing"* in the description of two records, then if you type *"amazing"* in the records grid search bar, both records will be displayed. If you search for *"dark"* and *"amazing"*,then only the record containing both *"dark"* and *"amazing"* words will be displayed.

### Filter on completeness

You can also filter on completeness in order to see the records that are complete/incomplete, or choose to see all the records, no matter their completeness.

::: tips
To know how to define the completeness on each attribute, please take a look at this [article](/articles/manage-reference-entities.html)
:::

## Edit a record

Of course, you can edit a record in order to change values or add new ones. Nothing simpler: just go on a record and add/change the values you want.

As for a product, you can define if you want a **different content according to channels**, and same for **locales**.
You can find a **locale and channel switcher** on each record, meaning that if you need to translate values for example, you can do it simply switching from a locale to another.

![Locale switcher on the records grid](../img/Records_locale_switcher.png)

In the Attribute tab, if you defined a *"text area"* attribute for your records, you can tick the parameter `rich text editor`.   This will give you access to a set of options to improve the formate of your text. For example, you can change the font, the size, etc. You can also add a link, a video, an image.
In fact, the Rich text editor offers a large bunch of possibilities!

![Records text area](../img/Records_text_area.png)


## Follow the records' completeness

We also worked on the records completeness. As in the product grid, several indicators show you the status of your completeness and what is missing.
- **Yellow bullet points** in front of each missing required attribute, showing that you have to complete this attribute to improve the completeness.
- The **completeness percentage** in the header of the record informs you of the completeness level.   

*So, what's new?*

The completeness is **automatically calculated** as soon as we enrich a required attribute. It means that the bullet point will disappear as soon as the required attribute is filled, and same for the completeness percentage evolution.


## Link a record to another record

It is also possible to link a record to another one, and it is very simple.

For example, you can link a *brand* (let's say *"Kartell"*) to the record *"Philippe Starck"*, or to several records designers belonging to the *"Designer"* entity.  
Please refer to this [article](/articles/manage-reference-entities.html#add-an-attribute) to discover how to do so.

Once you've chosen which entity is linked, you can see a new selector with all the records of the linked entity.

::: tips
Click on the `link` button on each record line in the selector to preview the record! It opens automatically a new tab in your browser.
:::

## Delete records

### Delete a record
You can delete a record or all the records of an entity.
 To delete a record, 2 choices:
- Either directly in the records grid, clicking on the *trashcan* button on each record line.
- Either in the details of the record, clicking on the `...` button in the top right corner of the header then `delete`.

### Delete all the records
To delete all the records of an entity, click on the `...` button in the top right corner of the header's records grid then `delete all records`.

::: tips
To delete all the records of an entity, you need to check that no record of this entity is linked to other entities or used in a product.
:::
