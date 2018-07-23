---
id: catalog-volume-monitoring
themes: administration, akeneo-concepts, catalog-settings 
title: Suivre la **taille de votre catalogue** (since 2.3)
popular: false
related: what-is-a-product-value, what-is-an-attribute, what-is-a-family, what-is-a-channel, what-is-a-locale, what-is-a-category
---

# Un écran dédié

Un écran est disponible dans le PIM afin de suivre la taille du catalogue sur plusieurs axes.

Cet écran vous donne par exemple le nombre de familles ou le nombre moyen d'attributs par famille.

![Catalog volume monitoring dashboard](../img/Activity_CatalogVolumeMonitoring_fr.png)

::: warning
Cet écran n'est disponible que depuis la version 2.3 du PIM.
:::

# Où trouver cet écran ?

Voici les étapes afin d'accéder à ce superbe (;)) écran:

1. Cliquer sur le menu `Activité`
1. Cliquer sur le sous-menu `Volumétrie du catalogue`
1. Et voilà !

# Comment lire ce tableau de bord ?

## Les différentes sections

L'écran `Volumétrie du catalogue` est composé de plusieurs sections.

### Le nombre de valeurs de produit : l'information la plus importante

La première valeur affichée représente le nombre total de [valeurs de produit](/articles/fr/what-is-a-product-value.html) contenues dans le PIM.
C'est un très bon indicateur de la véritable valeur de votre PIM.

![Widget du nombre de valeurs de produit](../img/Activity_CatalogVolumeMonitoring_PvWidget_fr.png)

Nous vous encourageons à surveiller cette valeur régulièremeent. Plus le nombre de valeurs de produit est important, plus votre PIM vous est utile !

Nous avons écrit un [article](https://medium.com/akeneo-labs/because-your-product-catalog-typology-matters-e1a9af4c33e0) (en anglais) afin d'expliquer pourquoi le nombre de valeurs de produit est une métrique intéressante pour évaluer la taille de votre catalogue. Ne soyez pas effrayé par la taille de cet article ! Il répondra à toutes vos questions. Vous ne parlerez plus de la taille de votre catalogue de la même façon.

::: tips
Il se peut que le widget ne soit pas visible.  
Si votre PIM est auto-hébergé ou bien en PAAS, c'est probablement parce que vous ou votre administrateur n'avez pas lancé le job quotidien qui permet de calculer les valeurs du widget.

Afin de lancer ce job, veuillez vous référer à notre documentation technique [de la CE] (https://docs.akeneo.com/2.3/install_pim/manual/installation_ce_archive.html#configuring-tasks-via-crontab) ou bien [de la EE](https://docs.akeneo.com/2.3/install_pim/manual/installation_ee_archive.html#configuring-tasks-via-crontab).
:::

### Les autres sections

La section suivante `Axes qui influencent le nombre de valeurs de produit` est dédié à l'ensemble des axes qui ont un impact sur le nombre de valeurs de produit total.
Par exemple, plus vous avez de canaux, plus le nombre de valeurs de produit sera élevé.

La section `Axes liés à la structure de votre catalogue` rassemble tous les axes ayant un impact sur la structure du catalogue, tel que le nombre de familles.

Enfin, la section `Axes concernant la modélisation des produits avec variantes` affiche le nombre de modèles de produit et le nombre de [produit variants](/articles/fr/what-about-products-variants.html).

::: Edition Entreprise
Dans l'édition entreprise, une section additonnelle `Axes sur les ressources` est présente. Celle-ci renseigne sur sur la volumétrie des [assets](/articles/fr/work-with-assets.html) dans le PIM.
:::

## Les alertes

Sur certains axes, vous observerez éventuellement des alertes. Celles-ci s'affichent derrière la métrique et l'icône de l'axe est alors affiché en violet. 
![Alerte dans l'écran de volumétrie du catalogue](../img/Activity_CatalogVolumeMonitoring_Alert_fr.png)

_Qu'est-ce que signifie cette alerte ?_

Cette alerte indique que la volumétrie correspondant à l'axe est élevée. Si vous rencontrez un problème à cause de cette volumétrie, n'hésitez pas à nous contacter.
