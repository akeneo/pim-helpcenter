# New filters in the record grid
::: meta-data eeOnly="true" since-version="3.1"

This new enhancement extends the full text search implemented in 3.0 so that you can search for other attribute types that have single/multiple options and reference entity single/multiple links. For these attribute types, an exact search is useful to find the records with a specific value. This capability means you can filter on these attribute types in the records grid.

How can you use this? Here are some examples:
- If a `Brand` reference entity has a `Designers` attribute linked to a
`Designer` reference entity, you can search for all brands where the designer is `Ron Arad`.
![The `Designer` filter in the record grid](../img/new_filters_in_the_record_grid.png)
- If a `Brand` reference entity has a `Country` attribute with a list of options, you can search for brands with the `Italy` country.
- If a `Recipe` reference entity has an `Ingredients` attribute linked to an `Ingredient` reference entity, you can search all recipes with the `Tomato`ingredient.

Furthermore, you can combine filters to search for `Ron Arad` AND `Italy`making working with reference entities simpler and more productive.
