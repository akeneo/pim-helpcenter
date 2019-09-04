---
id: catalog-volume-monitoring
themes: administration, akeneo-concepts, catalog-settings
title: Surveillez la ** taille de votre catalogue **
popular: false
related: what-is-a-product-value, what-is-an-attribute, what-is-a-family, what-is-a-channel, what-is-a-locale, what-is-a-category
---

# Un écran dédié

Dans le PIM, il existe un tableau de bord dédié qui vous aidera à surveiller la taille de votre catalogue selon divers axes.

Par exemple, vous pourrez suivre le nombre de familles et le nombre moyen d'attributs par famille.

![Tableau de bord de surveillance du volume du catalogue](Activity_CatalogVolumeMonitoring_fr.png)

# Où est-ce ?

Pour accéder à cet incroyable écran (;)), suivez ces étapes très simples :
1. Cliquez sur le menu `Activité`
1. Cliquez sur l'entrée du menu `Volumétrie du catalogue`
1. Profitez !

# Comment lire ce tableau de bord ?

## Les différentes sections

L’écran `Volumétrie du catalogue` est composé de plusieurs sections.

### La plus importante

La première est la plus importante. Elle vous donne le nombre total de [valeurs de produit](what-is-a-product-value.html) que votre PIM détient réellement. Cet indicateur vous donne une idée de l'étendue et de la valeur de votre PIM.

![Widget Nombre de valeurs de produits](Activity_CatalogVolumeMonitoring_PvWidget_fr.png)

Nous vous encourageons vraiment à y jeter un coup d'œil de temps en temps. Plus vous avez de valeurs de produit, plus votre PIM est utile !

Nous avons écrit un [article](https://medium.com/akeneo-labs/because-your-product-catalog-typology-matters-e1a9af4c33e0) pour expliquer pourquoi le nombre de valeurs de produit est un axe très intéressant pour mesurer la taille de votre catalogue. L'article est un peu long mais nous vous promettons que c'est très instructif. Vous ne penserez plus jamais à la taille du catalogue que vous devez gérer de la même manière que vous le faisiez auparavant. ;)

::: tips
Vous ne pouvez pas voir le widget dont nous parlons ? C'est dommage !  
Si vous êtes un utilisateur de l'édition communautaire ou travaillez sur une version OnPremise ou sur une version PaaS, c'est probablement parce que vous ou votre administrateur n'a pas lancé le traitement CRON pour calculer les valeurs affichées dans ce widget.
Pour ce faire, veuillez vous reporter à notre documentation technique : [ici](https://docs.akeneo.com/latest/install_pim/manual/installation_ce_archive.html#configuring-tasks-via-crontab) pour les versions CE et [ici](https://docs.akeneo.com/latest/install_pim/manual/installation_ee_archive.html#configuring-tasks-via-crontab) pour EE.
:::

### Les autres sections

La section suivante `Axes qui influencent le nombre de valeurs de produit` est dédiée aux différents axes pouvant influer sur le nombre de valeurs de produit.
Par exemple, plus vous aurez de canaux ou de locales, plus vous aurez de valeurs de produit.

La section `Axes liés à la structure de votre catalogue` regroupe tous les axes ayant un impact sur la structure de votre catalogue.

La section `Axes concernant la modélisation des produits avec variantes` regroupe le nombre de modèles de produits et de [variantes de produits](what-about-products-variants.html).

::: ee
Dans l'édition Entreprise, il y a une section supplémentaire appelée `Axes sur les ressources` qui vous donnera les informations concernant les [ressources](work-with-assets.html).
:::

## Les alertes

Vous verrez parfois une alerte sur certains axes : du texte apparaît sous la métrique et l'icône de l'axe est colorée en violet.
![Alerte dans l'écran de surveillance du volume du catalogue](Activity_CatalogVolumeMonitoring_Alert_fr.png)

_Que signifie cette alerte ?_  
Cela signifie simplement que pour cet axe, vous pouvez avoir un volume assez élevé. Si vous rencontrez des problèmes à ce niveau de volume, n'hésitez pas à nous contacter.
