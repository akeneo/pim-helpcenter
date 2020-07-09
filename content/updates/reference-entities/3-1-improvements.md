# 3.1 improvements 

## Filter on the options and reference entities links attributes in the grid
This new enhancement extends the full text search implemented in 3.0 so that you can search for other attribute types that have single/multiple options and reference entity single/multiple links. For these attribute types, an exact search is useful to find the records with a specific value. This capability means you can filter on these attribute types in the records grid.

How can I use this? Here are some examples:
- If a «Brand» reference entity has a «Designers» attribute linked to a
«Designer» reference entity, you can search for all brands where the designer is «Ron Arad.»
- If a «Brand» reference entity has a «Country» attribute with a list of options, you can search for brands with the country «Italy.»
- If a «Recipe» reference entity has an «Ingredients» attribute linked to an «Ingredient» reference entity, you can search all recipes with the ingredient «Tomato.»

Furthermore, you can combine filters to search for “Ron Arad” AND “Italy” making working with reference entities simpler and more productive.


## Display the options and reference entities links in the reference entities grid
The values of these attributes types (single/multiple options and reference entity single/multiple links) are also now displayed in the records grid.  Options or records links labels are displayed in the selected locale.

## Record completeness added to reference entity links
When working within products, it can be useful to know whether all the reference entities records are complete -- in 3.1 this is now possible, and appears for the product or the record when a reference entity record is linked to it.
