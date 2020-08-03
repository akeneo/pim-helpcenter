# Reference entities: a new Akeneo PIM feature
::: meta-data eeOnly="true" since-version="3.0" link-to-doc="../articles/what-about-reference-entities.html"

Reference entities are meant to manage additional data in the PIM. Use them to manage product-related information such as product colors, sizes, ingredients, care instructions, and more -- or leverage them to provide additional non product-related data like information on brands, designers, looks, rooms, countries, and much more.
 
Reference entities have their own attributes, their own lifecycle, and can be linked to products. These entities may have dedicated pages on the e-commerce website or their information may enrich each product page.

In the example below, three reference entities enrich our awesome pair of socks:
- the `Care instructions` reference entity,
- the `Colors` reference entity,
- the `Brand` reference entity.

![Reference entities notion scheme](../img/what-about-reference-entities.png)

Reference entities are created, enriched, and managed in a new section in the PIM from a dedicated `Entities` menu.

![Reference entities screen](../img/ref_entities_list.png)

In the screenshot below, `Brand` is a reference entity and it includes a list of brands - Fatboy, Kartell, Muuto, etc. A brand is described by an image, a label, a code, a country, a designer, a founded date, a photo, and a description. 

![Record list of the `Brand` reference entity](../img/ref_entities_record_list.png)
