---
id: create-a-product
themes: products-super-power
title: "**Créer** des produits"
popular: false
related: products-grid, work-on-a-product, enrich-products-variants
---

# Vue d'ensemble

Vous pouvez créer des produits directement dans le PIM ou via [imports](imports.html).
La création du produit est soumise à des droits spécifiques.

# Créer un produit
1.  Pour créer un produit, cliquez sur `Créer` dans le coin supérieur droit de la grille des produits :
    ![Créer un produit](Products_CreateProduct_fr.png)
1.  Sélectionnez `Produit`
1.  Spécifiez un identifiant unique de produit
1.  Sélectionnez une famille pour le nouveau produit
1.  Cliquez sur `Enregistrer`

![Enregistrer votre nouveau produit](Products_CreateProduct1_fr.png)

Le produit est créé et sa fiche Produit est affichée, vous pouvez commencer à remplir ses attributs. Pour plus de détails sur l'enrichissement du produit, vous pouvez lire l'article : [Enrichir votre produit](work-on-a-product.html).

::: info
Un produit peut être créé sans famille, mais aucun attribut ne sera affiché dans la fiche Produit, sauf l'identifiant du produit (un produit hérite automatiquement des attributs définis au niveau de la famille).
:::

::: info
Veuillez noter que vous devez d'abord créer un attribut de type `Identifiant` avant d'ajouter un produit à partir de l'interface utilisateur, veuillez consulter l'article : [Qu'est-ce qu'un attribut ?](what-is-an-attribute.html)
:::

# Créer un modèle de produit
Un modèle de produit est utilisé pour **gérer les produits à variantes**, il regroupe les variantes d'un produit et facilite l'enrichissement de leurs propriétés communes. Pour en savoir plus sur les produits à variantes, consultez l'article : [Qu'en est-il des produits à variantes ?](what-about-products-variants.html).

1.  Pour créer un modèle de produit, cliquez sur `Créer` dans le coin supérieur droit de la grille de produits
1.  Sélectionnez `Modèle de produit`
1.  Spécifiez un code unique pour identifier le modèle de produit
1.  Choisissez une famille
1.  Choisissez une variante de famille ([une variante de famille](what-about-products-variants.html) définit comment les produits à variantes sont structurés)
1.  Cliquez sur `Enregistrer`

![Enregistrer votre nouveau modèle de produit](Products_CreateProductModel1_fr.png)

Le modèle de produit est créé et sa fiche Produit est affichée, vous pouvez commencer à remplir ses attributs. Pour plus de détails, vous pouvez lire notre article : [Enrichissez vos produits à variantes](enrich-products-variants.html).

::: info
Seules les familles avec au moins une variante de famille sont répertoriées. Pour gérer les variantes de famille, reportez-vous à notre article : [Gérer les variantes de famille](manage-your-families.html).
:::
