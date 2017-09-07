# Main concepts

## What is a PIM?

Akeneo PIM will allow you to gather all your product information in one single place, enrich it and spread it to several channels like a e-commerce website, a tablet or mobile application...

![image](../img/Akn_dashboard.jpg)

By product information, we mean product content stable over time. For instance, you can store and enrich marketing information like name, description, technical information like product’s characteristics, material, logistics information like a product’s size, weight… and media information like images, videos, PDF files…

## Akeneo PIM concepts

### A channel

An Akeneo channel defines a selection of products and information to export. A channel is a place where your product information will be visible: for example, a website, a print catalog, a mobile application...

A channel is also known as a «scope» in Akeneo PIM. It works like a filter on the product catalog and has the following properties:

*   It is linked to a tree of categories: to define the selection of products to export.
*   It has one or several locales: to specify which values the channel requires (product information in French but not those in Italian, even if these values exist).
*   It has one or several currencies: to define which price attribute values the channel requires (prices in Euros and Dollars, but not in Pounds).
*   it has a dedicated completeness: to define which product information is mandatory for a product, it is configured per channel, at the family level. For instance: the product’s description must be exported for the e-commerce channel, but only the product’s name must be exported for the mobile channel.
*   it takes into account statuses: disabled products are ignored by channels.

At least one channel must be created in the PIM.

### A locale

An Akeneo locale is a combination of a language (English, German, French...) and a country (United States, United Kingdom, France…). Examples: English UK (en_GB), English US (en_US), English AU (en_AU). You can have one or more locales activated in your PIM. In the Enterprise Edition, you can define specific user rights on locales.

A product in Akeneo can have different values per locale for some attributes (these attributes are “localizable”). Akeneo proposes more than 200 locales.

### A category

A category is a way of classifying products. It is part of a main category tree (or classification tree). In Akeneo, you can have multiple category trees with an unlimited number of levels (categories, subcategories, subsubcategories..).

![image](../img/Akn_dashboard.jpg)

A product can be classified in one or n categories, a product that does not belong to a category will not be exported.

In the Enterprise Edition, you can define specific user rights on categories.

### An attribute

An attribute is a product’s characteristic. Each product is composed of different attributes.

Depending on your Akeneo Edition version, you can have up to 13 attribute types: text and textArea, simple or multiselect, boolean (yes/no), date, image, price, number, metric (with an automatic conversion), assets (digital resources like a video, picture, pdf file...). Attributes are gathered into attribute groups in Akeneo.

An attribute can have several specific properties: it can be localisable, locale specific and/or scopable.

A localisable attribute can have different values per locale. This allows you to manage a product’s translations according to the activated PIM locales. For instance, a localisable attribute will enable you to have one article name for each locale activated in your PIM. It is mostly used for text or (simple or multi) select attributes.

Some attributes can be shown only for specific locales. We will call them locale specific. For instance, a cold resistance attribute for Russia, a Canadian tax only for Canada.

Finally, your attribute can be scopable. An attribute is scopable if its values differ for each channel, for instance, you might like one short description for your e-commerce website, maybe one even shorter for your mobile app but a long one for your print catalog. It’s possible with Akeneo

Mix and match attribute properties to achieve a powerful result.

For more information about localisable and scopable attributes, check our related <a href=""><span class="Hyperlien CharOverride-7">Product Focus Video</a>.

### A family

A family is a set of attributes that are shared by products belonging to this family. In other words, a family can be considered as a template for products. A product family can use all the attributes available in the PIM. Several families of products can use the same attributes.

When a product is associated to a family, the product automatically inherits from all attributes defined at the family level. A product can belong to only one Family (but a product does not have to belong to a family, in this case, it has no default attributes). The family helps managing the product’s completeness.

**For instance, a family can be:**
*   A mug,
*   A T-shirt,
*   A pair of shoes.

Each product family has a code and a label that can be translated. A product family can use all the attributes available in the PIM. Several families of products can use the same attributes.

This means that a product family is used as a product model: the set of attributes generates the product edit form automatically and each product belonging to the same family has the same attributes.

**Example: a “Mug” family is composed of the following attributes:**
*   Name,
*   Weight,
*   Description,
*   Color.

If a product belongs to the “Mug” family, the above attributes are automatically added to the product. These attributes cannot be removed from the product.

Any product can be part of a family, but a product can be without a family. In this case, the product has no default attributes. A family can also define the completeness of products.

> **Differences between families and categories:**  
  Tree/categories is a way to classify your products.
  One product can be in n categories.
  Family is set of attributes to enrich a product.
  One product belongs to only one family.

### The completeness

The completeness is an information displayed as a progress bar or as a percentage in the PIM. It is calculated for each product (it represents the percentage of completion of a product) and for each combination channel/locale.

A product is considered as complete (or 100% completeness) when its required attributes (defined at the family level) have values.

### An asset (Enterprise Edition only)

An Akeneo asset is a digital resource. It can be a image (a photo, an illustration…), a video (product’s demonstration, an animation...), an audio file (music, podcast...) or other multimedia (pdf file...) or office documents (.xlsx, .docx, .csv...). Assets are used for the Product Asset Manager, which allows you to upload several resources and then link them to one or several products.

### A connector

Connectors are external modules implemented to interact with external systems and Akeneo PIM. They manage rules for reading a source of information and they export the information according to the needs of third-party applications.

Akeneo PIM provides a platform of connectors management: various services are available like the import configuration screen.

A connector can be generated to import data (products, categories, attributes...) from different sources (ERP, CSV files, XLSX files...) into Akeneo. Other connectors can be created to export, for instance, the products from Akeneo to a e-commerce platform such as Shopify, Drupal, Magento, etc. Natively Akeneo proposes CSV and a XLSX connectors.

### Reference data

A reference data is a data that defines the set of permissible values to be used by other data fields. Reference data often represents business entities such as suppliers and materials with all the necessary detail (e.g., for suppliers: number, name, address, country and contact)

### Variant group

A variant group is a type of product group. It is used to gather products that have common characteristics, like a product range for instance. A variant group has its own properties compared to the other types of product groups:

*   A variant group has at least one variation axis (required). The variation axis allows to secure the unique combination of values for some attributes, in the products added to the group. For example, in a variant group for T-shirts with the following attributes used as axes “Color” and “Size”, there will be only one product with the values “Purple” for the attribute Color and “M” for the attribute Size in the group.
*   (Optional) it has attribute values. A variant group may have some attribute values, in order to apply them for each product belonged to the variant group.

> **Notes**  
  1 - A variant group does not allow you to set attributes for products (like families). Only attribute values are applied. E.g.: If an attribute is added to a variant group but no value is given, then the considered value is <span class="CharOverride-12">“” (empty) for all products in the group.
  2 - Only simple select attributes can be used as variation axes to secure the unique combination of data.
