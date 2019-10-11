---
id: monitor-jobs
themes: import-export-data, administration
title: Suivez les exécutions de vos **opérations**
popular: false
ee-only: false
related: imports, exports, product-export-builder, discover-the-dashboard, what-is-a-rule, what-is-a-project, product-mass-actions
---

# Qu'est-ce qu'une opération ?

Une opération (ou "tâche") peut être :
- Un [import](imports.html),
- Un [export](exports.html),
- Une [édition en masse](product-mass-actions.html),
- Une exécution de [règle](what-is-a-rule.html) _(EE uniquement)_,
- Un calcul de [projet](what-is-a-project.html)  _(EE uniquement)_.

Vous avez plusieurs façons de suivre le statut d'une opération.

# Comment surveiller ?
Tout d'abord, pour les actions en tâche de fond comme une modification en masse ou une exécution de règle, vous êtes averti par un message "flash" lorsque le travail commence.
![image](Settings_Calculation1_fr.png)

Ensuite, lorsque le travail est terminé, une notification apparaît en haut de votre écran.
![image](Settings_Calculation2_fr.png)

Il existe une page de suivi des processus qui vous donnera la liste complète de toutes les opérations que vous avez lancées. Pour y accéder, allez dans `Activité` et cliquez sur l'entrée de menu `Traqueur de processus`.
![image](Settings_Calculation3_fr.png)

Le widget `Dernières opérations` sur le tableau de bord Akeneo vous indiquera également le statut de ces dernières.
![image](Dashboard_Calculation4_fr.png)

:::info
Les couleurs correspondent à :
- <span style="color:green">Vert</span> si l'opération s'est bien déroulée,
- <span style="color:orange">Jaune</span> si des avertissements ont été remontés lors de l'exécution de l'opération,
- <span style="color:red">Rouge</span> si l'opération ne s'est pas terminée correctement.

Le nombre affiché correspond au nombre d'avertissements ou erreurs remontés pendant l'opération.
:::

## Rapports d'exécution des imports et exports

Vous pouvez également avoir plus de détails lorsque vous avez exécuté un import ou un export. Pour examiner leur rapport :
1. Allez dans `Imports`,
1. Sélectionnez dans la liste le profil pour lequel vous souhaitez afficher le rapport,
1. Vous pouvez clairement voir le statut de votre import: `Démarré`, `Terminé` ou `Echoué` grâce au code couleur,
1. Cliquez sur votre import/export,
1. La page du détail de l'import/export doit apparaître.

![image](Exports_Calculation5_fr.png)

Les détails de l'import/export en cours sont affichés sur la page. Les détails sont liés à chaque profil d'import/export exécuté.

::: info
Pour les administrateurs du PIM :
Il est impossible de lister les exécutions des traitements lancés par d'autres utilisateurs du PIM.
Cependant, à des fins d'analyse, il est possible de visualiser le détail d'une opération si l'utilisateur vous fournit l'URL complète du rapport d'exécution de celle-ci.
:::

## Rapports d'exécution des actions en masse

Vous pouvez également avoir plus de détails lorsque vous exécutez une action en masse. Pour examiner leur rapport :
1. Allez sur `Activité` / `Traqueur de processus` ou cliquez sur la notification de l'action en masse terminée,
1. La page du rapport est alors affichée : les détails de l'action en masse sont affichés sur la page.

![image](Dashboard_Calculation6_fr.png)
