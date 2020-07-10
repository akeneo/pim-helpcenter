# New improvements in 3.1

In 3.1, we continue to improve our brand new reference entities feature to make it even more powerful.

## New filters in the record grid
This new enhancement extends the full text search implemented in 3.0 so that you can search for other attribute types that have single/multiple options and reference entity single/multiple links. For these attribute types, an exact search is useful to find the records with a specific value. This capability means you can filter on these attribute types in the records grid.

How can I use this? Here are some examples:
- If a `Brand` reference entity has a `Designers` attribute linked to a
`Designer` reference entity, you can search for all brands where the designer is `Ron Arad`.
![The `Designer` filter in the record grid](../img/new_filters_in_the_record_grid.png)
- If a `Brand` reference entity has a `Country` attribute with a list of options, you can search for brands with the `Italy` country.
- If a `Recipe` reference entity has an `Ingredients` attribute linked to an `Ingredient` reference entity, you can search all recipes with the `Tomato`ingredient.

Furthermore, you can combine filters to search for `Ron Arad` AND `Italy`making working with reference entities simpler and more productive.

## New display in the reference entities grid
The values of the single/multiple options and reference entity single/multiple links are now displayed in the records grid.  

Options or records links labels are displayed in the selected locale.

![Option labels displayed in the record grid](../img/option_labels_displayed_in_the_grid.png)

## Record completeness added to reference entity links
When working within products, it can be useful to know whether all the reference entities records are complete. In 3.1 this is now possible, and appears for the product or the record when a reference entity record is linked to it.

![Completeness in the reference entity links](../img/ref_entities_completeness_in_links.png)
