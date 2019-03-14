---
id: what-is-a-family
themes: first-steps, akeneo-concepts
title: Qu'est-ce qu'une famille ?
---

# Définition d'une famille

![what-is-a-family](What-is-a-family.svg)

Une famille est **une sélection d'attributs** qui sont partagés par les produits appartenant à la même famille. En d'autres termes, une famille peut être assimilée à un **template de produit**.

Quand un produit est apparenté à une famille, il hérite automatiquement de tous les attributs définis au niveau de cette famille. Un produit **ne peut appartenir qu'à une seule famille** (mais un produit peut aussi ne pas avoir de famille - dans ce cas, il n'a pas d'attribut par défaut).

Enfin, la famille détermine le **niveau de complétude** d'un produit.

Voici quelques exemples de familles:
- une famille `caméscopes`,
- une famille `tasses`,
- une famille `canapés`,
- une famille `réfrigérateurs`,
- une famille `marteaux`...

Tous ces types de produits ont **leurs propres caractéristiques**, un caméscope aura par exemple les attributs suivants dans sa famille :
- un identifiant produit (comme le `sku`),
- un code GTIN/EAN/UPC/ASIN,
- une marque,
- un nom commercial,
- une description,
- un type de capteur,
- un type de lentille,
- un zoom optique,
- un type d'écran,
- des modes d'exposition...

La famille `Caméscopes` **se composera de tous ces attributs**, et chaque nouveau produit qui sera ajouté dans cette famille héritera des mêmes attributs.

Un marteau aura également un identifiant produit (comme le `sku` par exemple), un code GTIN/EAN, un nom, une description, mais il aura ses propres attributs tels qu'une taille de poignée, un type de matériau pour sa poignée, un poids, etc...

Une famille peut donc utiliser tous les attributs disponibles dans le PIM. En parallèle, un même attribut pourra être utilisé dans plusieurs familles, puisque la plupart de vos produits auront une description, un nom, un identifiant...

# Propriétés des familles

Chaque famille dispose **d'un code et d'un libellé**. Le libellé peut être traduit dans toutes les locales qui sont activées dans le PIM.

::: tips
- Un produit **ne peut appartenir qu'à une seule famille**.
- Un produit **sans famille n'a pas d'attributs par défaut et n'aura pas non plus de complétude**.
- Une famille **définit le niveau de complétude des produits**.
:::

Chaque famille aussi a un niveau de **complétude**. Découvrez comment définir une complétude pour vos produits dans notre article sur la [Complétude](what-is-the-completeness.html).

Apprenez-en plus sur comment créer, mettre à jour ou éditer les propriétés de vos familles dans notre article sur la [Gestion des familles](manage-your-families.html).
