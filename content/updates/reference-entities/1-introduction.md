# Feature introduction in 3.0

Reference entities have their own attributes, their own lifecycle, and can be linked to products. These entities may have dedicated pages on the e-commerce website or their information may enrich each product page.

Reference entities are created, enriched, and managed in a new section in the PIM from a dedicated “Entities” menu.

In the screenshot below, «Brand» is the reference entity and it includes a list of brands - Fatboy, Kartell, Muuto, etc. A brand is described by an image, a label, a code, a country, a designer, a founded date, a photo, and a description. 

Reference entities are subject to permissions, and completeness can be calculated for each record in a reference entity.
The reference entity records can be linked to products through two new product attributes types:
- Reference entity single link (for example: linking one brand to
a product),
- Reference entity multiple links (for example: linking several care
instructions to a product).

It is also possible to link reference entities together, such as designers to a brand, and cities to countries.
Reference entities and their records can be imported and exported via the API. This is useful if you already have reference entity data stored elsewhere in your IT landscape. API endpoints help you easily import reference entities and their corresponding records from those external systems into the PIM - as well as to export records to distribute to your various channels such as marketplaces and ecommerce platforms.
