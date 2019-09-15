---
id: restore-a-product
themes: products-super-power
title: Restaurer une **version précédente du produit**
popular: false
ee-only: true
---

# Quelques cas d'utilisation concrets

## Un cas d'utilisation très simple

Vous venez de remarquer qu'il y a beaucoup d'erreurs dans les informations produit d'un produit donné. Vous ne savez pas ce qui s'est passé, mais quelqu'un a foutu en l'air vos précieuses informations. Vous aimeriez donc pouvoir remonter le temps pour obtenir une version de ce produit dont les informations sont bien meilleures.

C'est tout à fait possible avec la fonction de restauration. Vous pouvez parcourir tout l'historique d'un produit pour trouver une version qui est bonne selon votre point de vue et ensuite la restaurer. Trop fastoche ! :)

**Avant de restaurer**
![avant de restaurer](Produits_PEFHistory1_fr.png)

**Après restauration**
![après restauration](Produits_PEFHistory2_fr.png)

## Un autre cas d'utilisation

Imaginez le cas suivant : vous avez un [produit publié](publish-workflow.html), dont l'information est diffusée sur différents canaux. Vous êtes en train d'enrichir la fiche produit avec de nouvelles photos, une description plus détaillée et un nouveau prix.
Mais une nouvelle législation vous oblige d'un seul coup à mettre à jour votre version publiée actuelle afin de promouvoir de nouvelles informations sur le produit : son poids par exemple.
Malheureusement, vos améliorations sur la page produit ne sont pas terminées et vous ne voulez toujours pas les publier. Que pouvez-vous faire ?

### La magie de la restauration

Le PIM Akeneo vous permet de restaurer votre version publiée afin d'y travailler et de revenir ensuite à votre dernière copie de travail.

Restaurer une version signifie revenir à une version antérieure. Par exemple, si vous avez 5 versions de produit, il est possible de revenir à la version #3, qui ne prendra pas en compte les changements effectués par la suite.

::: info
La restauration d'une version ne supprime pas les informations, mais génère une nouvelle version représentant la version restaurée.
:::

Dans cet exemple, la version nouvellement créée contient tous les changements générés par la version restaurée #3, dans ce cas : cela annulera le changement de prix et d'image.

Il est alors possible d'ajouter un poids au produit, de sauvegarder la modification et de la publier. Ainsi, la forme du produit publié n'a pas été modifiée, seul le poids a été ajouté.

Pour revenir à la version actuelle qui est actuellement enrichie (incluant le prix et l'image), il suffit de restaurer la version qui contient les modifications.

# Comment ?

Pour restaurer une version :
1.  Aller dans `Produits`
1.  Cliquez sur le produit à restaurer
1.  Cliquez sur l'entrée de menu `Historique`
1.  Cliquez sur le bouton `Restaurer` qui se trouve sur la ligne de la version du produit que vous voulez restaurer.

![comment restaurer un produit](Products_PEFHistoryProcess_fr.gif)

La version est restaurée.

:::warning
Votre administrateur peut utiliser la purge d'entités, dans ce cas vous ne verrez que la première et la dernière version de votre produit.
:::

:::info
Vous ne pouvez restaurer qu'un seul produit à la fois. Il n'y a pas d'action de masse pour cette fonction de restauration.
:::
