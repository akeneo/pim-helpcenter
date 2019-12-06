---
id: categorize-a-product
themes: products-super-power
title: "**Catégoriser** un produit"
popular: false
ee-only: false
related: what-is-a-category
---

# Vue d'ensemble

Un produit peut être classé dans un ou plusieurs arbres de catégories.
Un produit peut être classé dans aucune, une ou plusieurs catégories de chaque arbre de catégories.

# Cochez les catégories dans lesquelles un produit est classé

Vous avez 2 façons de procéder :

## Par la fiche produit

1.  Cliquez sur le menu `Catégories`
1.  Un point vert à proximité de l'arbre des catégories indique si le produit est classé dans cet arbre. A côté du nom de l'arbre des catégories, un numéro vous indique dans combien de catégories le produit a été ajouté 
1.  Cliquez sur le nom de l'arbre des catégories pour voir les catégories auxquelles appartiennent les produits

## Par le raccourci dans la grille

1.  Sélectionnez un produit dans la grille des produits
1.  Passez votre souris sur la ligne de produits dans la grille, puis le bouton de catégorie (icône de dossier) s'affiche
![grille de survol](Products_GridHover_fr.png)
1.  Cliquez sur le bouton `Classer le produit`
1.  L'onglet Catégorie de la fiche produit s'affiche
1.  Un point vert à proximité de l'arbre des catégories indique si le produit est classé dans cet arbre. A côté du nom de l'arbre des catégories, un numéro vous indique dans combien de catégories le produit est ajouté
1.  Cliquez sur le nom de l'arbre des catégories pour voir les catégories auxquelles appartiennent les produits

Par défaut, l'arborescence de la première catégorie est affichée et affiche uniquement les catégories dans lesquelles le produit est classé sont développées. Les catégories dans lesquelles le produit est classé sont cochées.

::: info
Les arbres de catégories sont triés par ordre de création.
:::

![image des catégories](Products_PEF6_Category_fr.png)

# Classer/déclasser un produit dans / à partir de catégories de l'interface utilisateur

Pour classer/déclasser un produit :
1.  Sélectionnez votre produit dans la grille de produits Produit
1.  Cliquez sur le menu `Catégories` à gauche de l'écran
1.  Sélectionnez l'arbre de catégories approprié si vous avez plus d'un arbre de catégories
1.  Cochez les catégories dans lesquelles vous voulez classer le produit
1.  et/ou décocher les catégories dans lesquelles le produit ne doit plus être référencé
1.  Cliquez ensuite sur le bouton `Enregistrer`

# Classer les produits par catégories en utilisant les imports

Vous pouvez également mettre à jour les catégories de vos produits en utilisant les imports de produits. Pour ce faire, ajoutez le code de catégorie dans la colonne `categories` utilisée pour importer des catégories : [lancer un import de produits](imports.html).

::: info
Les tâches d'import de produits écrasent les données du produit actuel, donc si vous voulez ajouter de nouvelles catégories, assurez-vous que vous avez les catégories existantes dans votre fichier importé.
:::

# Déclasser les produits des catégories en utilisant les imports

Si vous souhaitez supprimer un produit d'une catégorie par le biais des imports, supprimez simplement le code de catégorie de la colonne `categories` et importez votre fichier.

# Enlever des produits des catégories en utilisant des règles (EE seulement)

Cette action peut également être effectuée par une règle, veuillez contacter votre administrateur pour plus d'informations.
