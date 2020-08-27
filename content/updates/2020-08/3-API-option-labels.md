---
pim_announcement_img: ./img/option-labels.png
pim_announcement_alt_img: "Option labels inside product endpoint"
pim_announcement_audience:
- CE
- EE
---

# Get options labels directly inside the products endpoint
::: meta-data type="New" features="API, Connectivity" available="late August" link-to-doc="https://api.akeneo.com/api-reference.html#get_products"
:::

We improved our API to help you reduce the number of API calls needed to synchronize product data. To do so, we added option labels inside the product endpoint.

## A simple example: the PDF generation. 

Before the generator was receiving codes only: 
- collection: spring_2020, summer_2020
- brand: akeneo_brand
- color: brown
- size: s
- materials: leather, metal

Now it receives code and labels:
- collection: spring_2020 (fr_FR: Printemps 2020, en_US: Spring 2020, de_DE: Frühling 2020), summer_2020 (fr_FR: Été 2020, en_US: Summer 2020, de_DE: Sommer 2020)
- brand: akeneo_brand (fr_FR: Akeneo, en_US: Akeneo, de_DE: Akeneo)
- color: brown (fr_FR: Marron, en_US: Brown, de_DE: Braun)
- size: s (fr_FR: S, en_US: S, de_DE: S)
- materials: leather (fr_FR: Cuir, en_US: Leather, de_DE: Leder), metal (fr_FR: Métal, en_US: Metal, de_DE: Metall)

Before this update, the PDF generator needed to retrieve product attribute values by calling the `GET /products` endpoint. Then, for each attribute with an list of options, a `GET /attributes` was required to get all the related labels. 
In that really simple example, we **avoid 5 API calls per product**. Imagine this improvement for a catalog which contains thousands of products! 

![Option labels inside product endpoint](../img/option-labels.png)

::: more
[How to get product data with the Akeneo API?](https://api.akeneo.com/api-reference.html#get_products)  
:::
