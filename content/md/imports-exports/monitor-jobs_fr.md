---
id: monitor-jobs
themes: import-export-data, administration
title: Suivez les exécutions des **traitements**
popular: false
ee-only: false
related: imports, exports, product-export-builder, discover-the-dashboard, what-is-a-rule, what-is-a-project, product-mass-actions
---

# Qu'est-ce qu'un traitement ?

Un traitement peut être:
- un [import](imports.html),
- un [export](exports.html),
- une [édition en masse](product-mass-actions.html),
- une exécution de [règle](what-is-a-rule.html) _(EE uniquement)_
- un calcul de [projet](what-is-a-project.html)  _(EE uniquement)_

Vous avez plusieurs façons de suivre le statut d'un traitement. 

# Comment surveiller ?
Tout d'abord, pour les actions en tache de fond comme une édition de masse ou une exécution de règle, vous êtes averti par un message flash lorsque le travail commence.
![image](Settings_Calculation1_fr.png)

Ensuite, lorsque le travail est terminé, une notification apparaît en haut de votre écran.
![image](Settings_Calculation2_fr.png)

Il existe une page de suivi des processus qui vous donnera la liste complète de tous les travaux que vous avez lancés. Pour y accéder, allez à `Activité` et cliquez sur l'entrée du menu `Traqueur de processus`.
![image](Settings_Calculation3_fr.png)

Le widget `Dernières opérations` sur le tableau de bord Akeneo vous indiquera également le statut de vos travaux lancés.
![image](Dashboard_Calculation4_fr.png)

:::info
Les couleurs correspondent à :
- <span style="color:green">Vert</span> si tout est bon
- <span style="color:orange">Jaune</span> si des avertissements ont été remontés lors de l'exécution du traitement
- <span style="color:red">Rouge</span> si le traitement ne s'est pas terminé correctement

Le nombre affiché correspond au nombre d'avertissements ou erreurs remontés pendant le traitement.
:::

## Rapports d'exécution des imports et exports

Vous pouvez également avoir plus de détails lorsque vous avez exécuté un import ou un export. Pour examiner leur rapport:
1. Allez dans `Imports`
1. Sélectionnez dans la liste le travail de profil pour lequel vous souhaitez afficher le rapport
1. Vous pouvez clairement voir le statut de votre import: `Démarré`, `Terminé` ou `Echoué` grâce à un code de couleur
1. Cliquez sur votre import/export
1. La page du détail du travail d'import/export doit apparaître

![image](Exports_Calculation5_fr.png)

Les détails du travail d'import/export en cours sont affichés sur la page. Les détails sont liés à chaque profil d'import/export exécuté.

::: info
Pour les administrateurs du PIM :
Il est impossible de lister les exécutions des traitements lancés par d'autres utilisateurs du PIM.
Cependant, à des fins d'analyse, il est possible de visualiser le détail d'un traitement si l'utilisateur vous fournit l'URL complète du rapport d'exécution d'un traitement.
:::

## Rapports d'exécution des actions en masse

Vous pouvez également avoir plus de détails lorsque vous exécutez une action en masse. Pour examiner leur rapport:
1. Allez sur `Activité` / `Traqueur de processus` ou cliquez sur la notification de l'action de masse terminée
1. La page du rapport est alors affichée: les détails de l'action en bloc en cours d'exécution sont affichés sur la page

![image](Dashboard_Calculation6_fr.png)
