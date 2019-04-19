---
id: enrich-your-reference-entity-records
themes: products-super-power, manage-your-reference-entities
title: "Enrich your **reference entity records**"
popular: false
ee-only: right
related:
---

# Add a record
Once you have created a reference entity, you can add **records**.
Let’s say that you just have created the reference entity `Brand`, you have defined its records attributes and now it is time to add new records. For example: Fermob, Kartell, Muuto, Fatboy…

To add a new brand to the reference entity `Brand`:
1. Go to your `Brand` entity (you will automatically land on the records grid)
1. Then click on the `Add new` button, choose a label for the record (the PIM will automatically take its label to generate your record's code, but you can change it if needed).

![Create a record](../img/Records_creation.png)

::: tips
If you have several records to add, you can stay in the creation pop-in to add quickly as many records as needed:
1. Input the first record label
1. Tick `Create another record`
1. Press `Enter`
1. Add the label for each record
1. Once you've done, press `Esc` or `Echap`   
:::

::: info
Note that we have defined a limitation of 1 million records per reference entity to guarantee that the PIM is functional and runs smoothly.
:::

# Display records
To see the records of the reference entity, click on the `Records` tab in the left menu. You will see the records grid, where all the records of the entity are listed.

![Records grid](../img/Records_grid.png)

## The records grid
The records grid is quite different than the products' one. Thereafter are the specific features of this grid:
- The line with the attributes names is frozen: it allows you to scroll down the page, while **continuing to see the name of the attributes**
- The first 4 columns with image, label, code and completeness are also frozen. We added an **horizontal scroll** in order to see the content of all the columns
- We also added a tooltip to **preview the content** of a text attribute directly in the grid when you hover over the text
- Finally, the grid comes with an **infinite scroll** that allows you to display up to 500 results. If you reach this limit, the grid will show the following message *"You just scrolled through the first 500 results out of 1450 records. To see more, try with more specific search criteria."*

::: info
In the 3.0 version records grid, only the following types of attributes can be displayed in the grid: code, text and image.  
_Since the 3.1 version_, the values of the attributes types single/multiple options and reference entity single/multiple links can also be displayed in the records grid.
:::

::: info
The columns' order in the records grid is frozen, it cannot be changed. By default, the grid's column order is `Image`, `Label`, `Code`, `Complete`. If you add other attributes, under the `Attributes` tab, the grid will display them according to their order of creation.
:::

Of course, you can still edit or delete a record thanks to the buttons at the end of each line.

# Search for a record

## Full text search

Our goal is to **facilitate your work** and to increase your productivity. To make this possible, we made a very powerful search in the grid of records. Indeed, we implemented a **full text search** which allows you to search on code, label and text attribute types.

For example, if you search for the word *« famous »*, all the records containing the word *« famous »* in their code, label or text attribute types will be displayed.  

![Search for records with a keyword](../img/Records_Search_1_word.png)

And we can go further.
If you search for *"famous"* and *"bags"*, then only the record containing both *"famous"* and *"bags"* words will be displayed.

![Search for records with several keywords](../img/Records_Search_2_words.png)

## Filter on completeness

You can also filter on completeness in order to see the records that are complete/incomplete, or choose to see all the records, no matter their completeness.

![Records filter on completeness](../img/Records_filter_completeness.png)

::: tips
To know how to define the required attributes for the completeness, please take a look at this [article](/articles/manage-reference-entities.html)
:::

## Filter on options and reference entity links (_since 3.1_)

_Since the 3.1 version_, we added the possibility to filter on single/multiple options or reference entity single/multiple links attributes types in the records grid. This filter allows an exact search on an reference entity option value or on a reference entity link. 

For instance:
- If a "Brand" reference entity has a "Designers" attribute linked to a "Designer" reference entity, you can search for all brands with the designer "Ron Arad".
- If a "Brand" reference entity has a "Country" attribute with a list of options, you can search for brands with the country "Italy".

![Records grid](../img/Records_filter_options.png)

The operator is an `in list` operator. If you are looking for the brand with the designer "Philippe Starck" OR "Ron Arad", the brands with the designer "Philippe Starck" OR the designer "Ron Arad" will be displayed.

You can combine filters. For instance, you can search on all brands with the country "Italy" AND the designer "Ron Arad".

A record or an option can be removed from a filter using the cross.


# Edit a record

Of course, you can edit a record in order to change values or add new ones. Nothing simpler: just go on a record and add/change the values you want.

As for a product, you can define if you want a **different content according to channels**, and the same applies on **locales**.
You can find a **locale and channel switcher** on each record, meaning that if you need to translate values for example, you can do it simply switching from a locale to another.

![Locale switcher on the records grid](../img/Records_locale_switcher.png)

In the Attribute tab, if you define a *"text area"* attribute for your records, you can tick the parameter `rich text editor`. This will give you access to a set of options to improve the format of your text. For example, you can change the font, the size, etc. You can also add a link, a video, an image.
In fact, the Rich text editor offers a large bunch of possibilities!

![Records text area](../img/Records_text_area.png)


# Follow the records completeness

Like for products, we calculate [completeness](/articles/manage-reference-entities.html) on records.

In the records, several indicators show you the status of your completeness and which attributes are missing.
- **Yellow bullet points** in front of each missing required attribute, showing that you have to complete this attribute to improve the completeness.
- The **completeness percentage** in the header of the record informs you of the completeness level.   

The completeness is **automatically calculated** as soon as we enrich a required attribute. It means that the bullet point will disappear as soon as the required attribute is filled, and same for the completeness percentage evolution.


# Link a record to another record

It is also possible to link a record to another one, and it is very simple.

For example, you can link a *Designer* (let's say *"Philippe Starck"*) to the record *"Kartell"*, or to several records brands belonging to the *"Brands"* entity.  

![Records link entity](../img/Records_link_entity_2.png)

Please refer to this [article](/articles/manage-reference-entities.html#add-an-attribute) to discover how to do so.

Once you have chosen which entity is linked, you can see a new selector with all the records of the linked entity.

::: tips
Click on the `link` icon on each record line in the selector to preview the record! It will automatically open a new tab in your browser.
:::

# Delete records

## Delete a record
You can delete a record or all the records of an entity.
 To delete a record, 2 choices:
- Either directly in the records grid, by clicking on the *trash can* button on each record line.
- Either in the details of the record, by clicking on the `...` button at the top right corner of the header then `delete`.

## Delete all the records
To delete all the records of an entity, click on the `...` button at the top right corner of the header's records grid then `delete all records`.

::: tips
To delete all the records of an entity, you **need to check that no record of this entity is linked to other entities or used in a product**. Otherwise you will not be able to delete it.
:::
