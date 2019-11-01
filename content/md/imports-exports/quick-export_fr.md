---
id: quick-export
themes: products-super-power, import-export-data
title: "Effectuer un **Export rapide** de vos produits"
popular: false
related: products-grid, exports, monitor-jobs
---

# Quoi ?

Akeneo vous permet d'exporter le résultat de votre recherche ou une sélection de produits de la grille Produits vers un fichier CSV ou un fichier XLSX. Ceci peut être utilisé pour récupérer des informations structurées sur les produits et ainsi créer vos propres rapports, graphiques, etc.

# Comment ?
Pour effectuer l'export des informations produit à partir de la grille des produits :
1. Recherchez des produits dans la grille avec les filtres appropriés
1. Sélectionnez les produits sur lesquels vous voulez effectuer l'opération :
    - En cochant dans la grille produit
    - Via l'outil de sélection `Tous` pour sélectionner tous les produits filtrés
    - Via l'outil de sélection `Tous les éléments visibles`   
    - (vous pouvez remettre à 0 la sélection via l'outil de sélection `Aucune`)
![image](Produits_BulkActions_fr.png)
1.  Cliquez sur le bouton `Export Rapide` qui s'affiche en bas de l'écran et sélectionnez :
    - `Excel (Contexte de la grille)` pour générer des fichiers Excel en fonction de votre vue actuelle
    - `Excel (Tous les attributs)` pour générer des fichiers Excel avec tous les attributs des produits
    - `CSV (Contexte de la grille)` pour générer des fichiers CSV en fonction de votre vue courante
    - `CSV (Tous les attributs)` pour générer des fichiers CSV avec tous les attributs des produits

![image](Produits_QuickExportDropdropdown_fr.png)

L'action est traitée comme une tâche en arrière plan, afin que vous puissiez continuer à travailler sur le PIM. Lorsque le processus est terminé, vous êtes le seul utilisateur à être notifié. Ensuite, lorsque vous cliquez sur la notification, vous accédez à la page de rapport de l'action.

![image](Products_QuickExportNotification_fr.gif)

Sur la page de rapport, vous pouvez télécharger les fichiers générés.

![image](Produits_QuickExportDownload_fr.png)

Deux fichiers sont créés :
1. Un fichier avec les produits sélectionnés nommé `products_export_<Code Locale Active>_<Code Canal Actif>_Date_Heure.xlsx` ou avec l'extension `.csv`
2. Un fichier avec les modèles de produits sélectionnés nommé `product_models_export_<Code Locale Active>_<Code Canal Actif>_Date_Heure.xlsx` ou avec l'extension `.csv`

Les fichiers créés contiennent une ligne par produit ou modèle de produit exporté et une colonne pour chaque information produit disponible. Le format du fichier généré est le même que pour l'import et l'export du produit au format CSV ou XLSX avec le connecteur Akeneo.

![image](Exporte_XLSXexample_fr.png)

::: warning
Notez que les variantes d'un modèle de produit sélectionné ne sont pas exportées. Pour les exporter, il faut filtrer la grille produit pour les afficher et ensuite les sélectionner.
:::

Seul le canal sélectionné est pris en compte, et donc toutes les informations de toutes les locales pour le canal sont exportées. La locale sélectionnée n'est pas prise en compte.

Pour cette export à partir de la grille, la complétude, le statut des produits, leur classification ne sont pas pris en compte pour déterminer quelles informations peuvent être exportées. Tous les produits et modèles de produits sélectionnés dans la grille de produits, quels que soient leurs détails, sont exportés vers le fichier CSV ou le fichier XLSX.

::: warning
Notez que les colonnes suivantes ne sont pas exportées : `Libellé`, `Image`, `Complet`, `Créé le`, `Mis à jour le` et `Produits variants`.
:::

::: ee
L'export rapide prend en compte les permissions des utilisateurs sur les locales  et les groupes d'attributs :
  * Si un utilisateur n'a pas de droit de vue sur une locale, les valeurs localisables pour cette locale ne sont pas exportées.
  * Si un utilisateur n'a pas le droit de vue sur un groupe d'attributs, les attributs de ce groupe d'attributs ne sont pas exportés.
:::
