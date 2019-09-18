---
id: what-is-the-completeness
themes: first-steps
title: Comprendre la **complétude** des produits
popular: true
related: product-completeness
---

# A propos de la complétude
Qu'est-ce que c'est que cette barre de progression **rouge, orange ou verte qui est affichée sur mon tableau de bord** ? Que signifie **le pourcentage sur ma grille de produits** ?

**Il s'agit de la complétude !**

Parce que l'information sur les produits nous importe, nous avons introduit le concept de "complétude" dans notre PIM.
La complétude d’Akeneo est une information sur la qualité de votre enrichissement : elle vous indique le nombre d’attributs à obligatoirement renseigner dans vos produits.

# Où voir la complétude ?
La complétude s'affiche sous la forme d'une **barre de progression** ou d'un **pourcentage** dans le PIM.

## Sur votre tableau de bord
Votre **tableau de bord** affiche la complétude de vos produits pour chaque combinaison de canal et de locale.

![Tableau de bord](Dashboard_fr.png)

## Dans votre grille de produits
Votre **grille produit** affichera la complétude de chaque produit sous forme de pourcentage.

![Grille de produits](Products_Project_fr.png)

Pour les produits variants, le pourcentage est remplacé par un nombre de variantes de produits complètes, ainsi que le nombre total de variantes associées à ce modèle de produits.

![Grille de produits variants](Products_Project2_fr.png)

### Signification des couleurs pour les variantes

Trois couleurs sont possibles lorsque la grille affiche des modèles de produits associés à des variantes :
- Rouge : **Aucune variante n'est complète**, exemple : les T-shirt motif "Kurt Cobain" et Veste de motard dans la capture précédente,
- Orange : des variantes sont complètes **mais pas toutes**, exemple : le T-shirt taille unique où seulement 1 des 3 variantes est complète,
- Vert : **toutes les variantes de produits sont complètes**, exemple : le T-shirt Cotton dont les 12 variantes sont complètes.

## Sur vos pages produit
Les **pages produit** présente la complétude de chaque produit.

![Complétude du produit](Products_PEF1_fr.png)

Ainsi que de chaque variante, s'il s'agit d'un modèle de produit.

![Complétude des variantes de produits](Products_VariantProdcut2_fr.png)

## Dans votre panel de complétude (au sein de la page produit)
![Panel de complétude](Products_PEF2_fr.png)

::: tips
Grâce à ce panel de complétude, obtenez la liste des attributs vides et complétez-les !
:::

# Comment configurer votre complétude ?
La **complétude est définie par une [famille](what-is-a-family.html)**, une **[locale](what-is-a-locale.html)** et un **[canal](what-is-a-channel.html)**.

Ensuite, une fois que vous savez quels attributs doivent être pris en compte pour chaque famille, c’est-à-dire **quels attributs doivent être renseignés pour exporter votre produit**, allez dans `Paramètres / Famille`.
Sélectionnez une famille et, sous l'onglet `Attributs`, cochez les attributs pour les prendre en compte dans le calcul de complétude ou décochez-les pour les supprimer du calcul de complétude.
![Cocher ou décocher les produits](Completeness_Family_choose_fr.png)

C'est simple comme bonjour !

::: success
Pour déterminer les attributs à définir en fonction des besoins, essayez de répondre à la question suivante : quelles informations sur le produit dois-je absolument afficher sur mon site Web, mon application, ... ? Est-ce la même chose pour toutes mes canaux ?
:::

# Comment est-ce calculé ?
**Le calcul de complétude prend en compte plusieurs paramètres** : les attributs définis comme obligatoires pour la famille de produits, les locales activées pour le canal ... Le PIM vérifie tous les attributs renseignés et tous les attributs manquants, et vous affiche un pourcentage.

Un produit est considéré comme **complet** lorsqu'il a une complétude de 100%, ce qui signifie que tous ses attributs obligatoires ont une valeur.

![SCREENSHOT](Products_PEF12Completeness_fr.png)

# À quelle fréquence la complétude est-elle actualisée ?
La complétude est recalculée :
- Après un import,
- Après une action de masse,
- Après l'exécution des règles,
- Après avoir modifié votre famille,
- Après la sauvegarde d'un produit...

::: warning
Vous pouvez actualiser votre complétude en utilisant la commande ```app/console pim:completness:calculate``` (non disponible pour l'édition Serenity).
:::
