# A brand new feature in 3.0

In Akeneo PIM 3.0, we introduced this brand new feature: the Reference entities.  

## A new notion in the PIM
Reference entities have their own attributes, their own lifecycle, and can be linked to products. These entities may have dedicated pages on the e-commerce website or their information may enrich each product page.

![Reference entities notion scheme](../img/what-about-reference-entities.png)

Reference entities are created, enriched, and managed in a new section in the PIM from a dedicated “Entities” menu.

![Reference entities screen](../img/ref_entities_list.png)

In the screenshot below, `Brand` is the reference entity and it includes a list of brands - Fatboy, Kartell, Muuto, etc. A brand is described by an image, a label, a code, a country, a designer, a founded date, a photo, and a description. 

![Record list of the `Brand` reference entity](../img/ref_entities_record_list.png)

## Permissions & completeness
Reference entities are subject to permissions, and completeness can be calculated for each record in a reference entity.

![Completeness by record](../img/completeness_by_record.jpg)

## Link to products
The reference entity records can be linked to products through two new product attributes types:
- Reference entity single link (for example: linking one brand to
a product),
- Reference entity multiple links (for example: linking several care
instructions to a product).

## Link between reference entities
It is also possible to link reference entities together, such as designers to a brand, and cities to countries.  
As you can see in the screenshot below, we can link the `Starck` designer to the `Kartell` brand.

![Link between the Kartell and Starck reference entities](../img/Records_link_entity.png)

## Import and export
Reference entities and their records can be imported and exported via the API. This is useful if you already have reference entity data stored elsewhere in your IT landscape. 

![Reference entities API endpoints listing](../img/ref_entities_endpoints.png)

The [API endpoints](https://api.akeneo.com/api-reference-index.html#Referenceentities) we crafted for you, will help you easily import reference entities and their corresponding records from those external systems into the PIM - as well as to export records to distribute to your various channels such as marketplaces and ecommerce platforms.
