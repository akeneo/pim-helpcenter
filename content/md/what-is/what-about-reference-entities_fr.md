---
id: what-about-reference-entities
themes: first-steps, manage-your-reference-entities
title: A propos des **entités référentielles**?
popular: true
ee-only: true
related: manage-reference-entities, enrich-your-reference-entity-records
---

# Pour quelle utilisation ?

Prenons l'exemple d'une page produit.  
![cas d'utilisation d'entité référentielle](what-about-reference-entities_fr.png)

Il existe de nombreux types d'informations sur les produits tels que du texte, des images....  
Certaines informations sont partagées entre différents produits (comme la définition des instructions d'entretien, les couleurs ou les marques).  
Ces informations partagées peuvent être complexes avec leurs propres attributs (par exemple, une étiquette, un logo, une description ou des photos pour la marque).  
Ils peuvent avoir des pages dédiées sur le site de ecommerce (par exemple, des pages dédiées à chaque marque) ou leurs informations peuvent enrichir chaque page produit (par exemple, le logo de la marque).

# Un peu de vocabulaire
## Qu'est-ce qu'une entité référentielle ?

Une **entité référentielle** vous permet de créer et d'enrichir nativement dans le PIM les **informations communes** qui sont **partagées et liées aux produits**.   
Une entité référentielle a ses **propres attributs**, son **propre cycle de vie** et peut être liée à des produits ou à une autre entité référentielle.  
Il permet d'enrichir des données communes relatives à des produits riches en contenu (texte, images...), plus complexes qu'un simple code et des étiquettes.

Par exemple, vous pouvez créer une entité référentielle pour gérer vos marques, designers, fabricants, collections ou gammes de produits, artistes, villes, pays, couleurs, tailles, matériaux, instructions d'entretien, technologies, ingrédients....

Prenons un exemple avec une entité référentielle appelée `Marque` et une liste de marques (Kartell, Alessi, Fatboy, Fermob...).   

Une marque est décrite par les informations suivantes :
- un code
- un libellé
- une image
- une description
- une photo
- un pays


## Qu'est-ce qu'un enregistrement ?

Pour l'entité référentielle de la `Marque`, un enregistrement contient toutes les informations concernant une marque comme **Cartell** ou **Fermob**.

![fiche d'entité référentielle](what-about-reference-entities_record_fr.png)


::: info
Un enregistrement peut être lié à un ou plusieurs produits.
:::

# Créez votre première entité référentielle !

A partir d'un seul endroit, dans un menu dédié `Entités`, vous pouvez créer votre première entité référentielle, définir ses attributs d'enregistrements, enrichir ses premiers enregistrements et les relier aux produits. Allons-y !
1. [Créer votre 1ère entité référentielle](manage-reference-entities.html#create-a-a-reference-entity)
1. [Ajouter et enrichir ses 1ers enregistrements](enrichir-vos-enregistrements-entité-reférence.html)
1. [Définir un nouvel attribut produit pour lier cette entité référentielle aux produits](manage-your-attributes.html#create-an-attribute)
1. [Lier les produits aux fiches des entités référentielle](work-on-a-product.html)
