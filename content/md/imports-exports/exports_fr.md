---
id: exports
themes: import-export-data
title: "**Exporter** vos données"
popular: false
ee-only: false
related: monitor-jobs, product-export-builder, access-rights-on-imports-exports, imports
---

# Vue d'ensemble

Cette fonctionnalité vous permet de fournir des informations sur vos produits à des tiers comme des plateformes de commerce électronique, des applications mobiles, des fournisseurs... ou plus simplement, si vous souhaitez extraire des informations du PIM pour votre propre usage.

Vous avez plusieurs façons d'exporter les informations sur vos produits :
- Vous pouvez télécharger manuellement le fichier d'export : vous exécutez le traitement depuis l'interface utilisateur PIM et vous téléchargez le fichier généré.
- Vous envoyez automatiquement le fichier d'export à un tiers, en définissant un chemin dans la configuration du profil d'export qui permet au PIM de déposer automatiquement le fichier lors de l'exécution de la commande.

Lors de l'export de données, le PIM Akeneo extrait les données du PIM et les convertit dans un certain format vers un fichier ou directement vers une application tierce (par exemple Magento).

::: info
Les exports peuvent se faire en deux formats : CSV et XSLX.
:::

Vous pouvez exporter des données produit, bien sûr, mais aussi des entités de catalogue telles que les familles, les catégories, les attributs...

## Étapes d'un export
Le processus d'export des fichiers est très simple. Il se compose de :
1.  Création d'un profil d'export (voir ci-dessous pour plus d'informations à ce sujet)
1.  Lancement de l'export de fichiers CSV ou XLSX

## Qu'est-ce qu'un profil d'export ?
Un profil d'export permet d'effectuer des exports à partir du PIM. Ce format de profil est basé sur :
- Un code pour identifier le profil d'export
- Une tâche pour définir ce que va faire l'export lors de l'exécution. Par exemple, un export de catégorie dans un fichier XLSX ou un export de produit dans un fichier CSV vers une plate-forme Magento.
- Un ensemble de champs de configuration, disponibles sous forme de formulaire dans le PIM. Chaque profil d'export peut avoir sa propre configuration.

# Parcourez vos profils d'export

Pour afficher les profils d'export disponibles :
1.  Connectez-vous avec un compte utilisateur avec les permissions pour `Voir la liste des profils` pour les exports
1.  Allez dans le menu `Exports`
![image](Exports_Mainpage_fr.png)
1.  Pour affiner la liste des profils d'export affichés, utilisez les filtres disponibles au-dessus de la grille ou la barre de recherche qui effectuera la recherche sur le libellé

Pour voir les informations d'un profil d'export, cliquez sur la ligne dans la grille
![image](Exports_Mainpage2_fr.png)

# Créer un nouveau profil d'export

Pour créer un nouveau profil d'export :
1.  Connectez-vous à l'aide d'un compte utilisateur avec les permissions `Créer un profil d'export`
1.  Allez dans le menu `Exports`
1.  Cliquez sur `Créer un profil d'export`
![image](Exports_MainpageCreateExportExportProfile_fr.png)
1.  Tous les champs de la fenêtre pop-up doivent être remplis :
    - Un code unique
    - Un libellé pour identifier plus facilement le profil
    - Une tâche en fonction de ce que vous souhaitez exporter
![image](Exporte_CreateExportProfile1_fr.png)
1.  Cliquez sur `Enregistrer` pour finaliser la création du profil d'export. L'écran de la page de profil s'affiche. Vous pouvez ensuite le configurer.

# Mettre à jour un profil d'export

Pour mettre à jour un profil d'export :
1.  Se connecter avec un compte utilisateur
1.  Allez dans le menu `Exports`
1.  Cliquez sur le profil d'export à modifier
1.  Cliquez sur le bouton `Modifier`
1.  Apportez vos modifications
1.  Cliquez sur `Enregistrer` pour mettre à jour le profil

![image](Exports_Edit_fr.png)

Dans l'onglet `Propriétés générales`, vous pouvez éditer l'étiquette de votre profil.  
Dans l'onglet `Paramètres globaux`, les propriétés dépendent de la tâche d'export. Par exemple, pour l'export de produits CSV, vous trouverez les propriétés suivantes :

| Propriété           | Détails |
|:--------------------|:----------|
| Chemin du fichier   | Définit où générer le fichier exporté _(Non disponible dans l'offre Serenity)_ |
| Séparateur de décimal| Définit le caractère utilisé comme séparateur décimal dans le fichier exporté. |
| Format de date      | Définit le format utilisé pour les dates dans le fichier exporté |
| Délimiteur          | Définit le caractère de délimitation des champs du fichier CSV |
| Caractère d'encadrement | Définit le caractère d'encadrement des champs dans le fichier CSV |
| Avec en-tête        | Définit si la première ligne du fichier exporté contient les noms des colonnes.|
| Exporter des fichiers et des images | Désactive l'archivage multimédia des images, les images ne seront pas exportées dans le fichier et la colonne image ne sera pas présente dans l'export |
| Nombre de lignes par fichier | Définit le nombre limite de lignes par fichier pour l'export XSLX |

Dans le cas des produits et des exports de produits publiés, vous verrez qu'il y a un onglet supplémentaire appelé `Contenu`. Dans cet onglet, vous pourrez définir précisément le produit ou les données produit publiées que vous souhaitez exporter. Pour en savoir plus sur cette fonctionnalité appelée `Product Export Builder`, jetez un coup d'œil à cet [article](product-export-builder.html).

::: ee
Si un utilisateur n'a pas le droit de modifier un profil d'export en raison de son rôle, les permissions dont il peut bénéficier en raison de son (ses) groupe(s) d'utilisateurs _(EE uniquement)_ ne seront pas appliquées. Par exemple, si un utilisateur n'a pas l'autorisation d'éditer les profils d'export, ses droits liés à l'édition Enterprise pour éditer un profil d'export spécifique sont ignorés.
:::


# Exécuter un export

## Comment faire
1.  Allez dans le menu `Exports` pour voir la liste des profils d'export disponibles
1.  Sélectionnez le profil d'export à exécuter et cliquez sur la ligne correspondante
1.  La page de profil d'export s'affiche. Cliquez sur le bouton `Exporter maintenant`
1.  La page de l'exécution de l'export est affichée. La page se rafraîchit pour indiquer à quel stade se trouve l'export

::: tips
Pour éviter des ralentissements, si l'export est trop volumineux, la page s'arrête de se rafraichir et un bouton `Rafraichir` s'affiche.
:::

Lorsque l'export se termine, une notification est disponible dans le coin supérieur droit du PIM.

![image](Exports_ExportProcess_fr.gif)

Un email peut également être envoyé en fonction de votre configuration utilisateur. Pour plus de détails à ce sujet, veuillez consulter l'article [Gérer votre compte](manage-your-account.html).

## Avec les droits des groupes d'utilisateurs _(EE seulement)_

#### Droits sur l'information produit
Dans le cas des *exports de produits et de produits publiés*, le PIM prend en compte vos permissions en fonction des [groupes d'utilisateurs](what-is-a-user-group.html) où vous vous trouvez.
Exemples :
- Si vous **n'avez pas de droit de visualisation** sur les produits qui sont dans la catégorie `Accessoires`, vous ne pourrez exporter aucune information sur ces produits
- Si vous **n'avez pas le droit de visualisation** sur le groupe d'attributs `Marketing`, vous ne pourrez pas exporter les informations produit des attributs de ce groupe d'attributs
- Si vous **n'avez pas de droit de visualisation** sur la locale `fr_FR`, vous ne pourrez exporter aucune donnée produit concernant cette locale

Pour en savoir plus sur le fonctionnement des droits sur les données produits dans le PIM, consultez l'article [Droits d'accès aux produits](access-rights-on-products.html).

#### Droits sur l'exécution de l'export
La permission d'exécuter des exports peut être personnalisée pour chaque profil d'export. Donc si vous ne pouvez pas lancer un export, assurez-vous que vous avez le droit de l'exécuter dans l'onglet `Autorisations` de votre profil d'export en mode édition. Voir l'article [Droits d'accès aux imports/exports](access-rights-on-imports-exports.html) pour plus de détails.
