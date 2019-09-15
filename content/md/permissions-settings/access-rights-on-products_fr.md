---
id: access-rights-on-products
themes: permissions-settings
title: Gérer les droits de votre **catalogue**
popular: false
ee-only: true
related: what-is-a-user-group, what-is-a-user, build-your-user-groups
priority: low
---

# Les bases

Une fois que vous avez [créé vos groupes d'utilisateurs](build-your-user-groups.html) et y avez placé des utilisateurs, vous pouvez commencer à définir pour chacun de ces groupes d'utilisateurs les parties du catalogue qu'ils pourront voir/modifier.

## Droits d’accès aux informations sur le produit

Les droits d'accès vous permettent de configurer l'étendue du rôle et la visibilité des utilisateurs sur le catalogue de produits dans le PIM.

Vous pouvez définir des droits d'accès sur 3 axes:
- **Locales** : si un catalogue de produits est disponible dans plusieurs locales, il est possible de définir pour chaque groupe d'utilisateurs les locales pouvant être visualisées et/ou modifiées.
- **Catégories** : Si un catalogue de produits utilise l'arborescence de classification dans le PIM, il est possible de définir pour chaque groupe d'utilisateurs les produits pouvant être visualisés et/ou modifiés, en fonction de la classification des produits dans les différentes catégories.
- **Groupes d'attributs** : Si un catalogue de produits utilise le groupe d'attributs dans le système PIM, il est possible de définir pour chaque groupe d'utilisateurs les attributs pouvant être visualisés et/ou modifiés, en fonction du groupe d'attributs dans lequel ils sont positionnés. .

## Hiérarchie des droits d'accès aux informations sur le produit

Pour chaque axe, il y a 3 niveaux d'accès :
- Pas de droits : les informations sont cachées à l'utilisateur
- Permission de voir l'information
- Permission de modifier des informations

Les droits étant soumis à 3 axes, la hiérarchie évite tout conflit en définissant les autorisations pour chaque groupe d'utilisateurs. La hiérarchie des axes est la suivante :
- Locale
     - Catégorie
         - Groupe d'attributs

Comment appliquer la règle de la hiérarchie ? Il faut au moins un droit d’accès sur l’axe parent pour appliquer la règle de l’axe enfant.

Cela semble complexe ? N'ayez pas peur ! Vous trouverez ci-dessous quelques exemples pour illustrer l'application de la règle de hiérarchie à chaque groupe d'utilisateurs.

### Exemple 1
Un utilisateur possède les droits suivants :
- Locale `de_DE` : pas de droit
- Catégorie `Chaussures` : droits de visualisation et de modification
- Groupe d'attributs `Général` : droits de visualisation et de modification

Cet utilisateur ne verra jamais les produits de la catégorie `Chaussures`, ni ne modifiera les attributs du groupe` Général` dans la locale `de_DE` car il n'a pas accès à cette locale, et il ne pourra jamais les voir.

### Exemple 2
Maintenant, donnons au même utilisateur le droit de voir la locale `en_US` :
- Locale `de_DE` : pas de droits
- Locale `en_US` : droit de visualisation
- Catégorie `Chaussures` : droit de visualisation et de modification
- Groupe d'attributs `Général` : droits de visualisation et de modification

L'utilisateur peut voir les produits de la catégorie `Chaussures` et les attributs du groupe `Général` dans la locale `en_US`, mais il ne peut pas les modifier car il dispose uniquement d'une autorisation d'affichage pour la locale `en_US`.

### Exemple 3
Enfin, donnons au même utilisateur le droit de modifier dans la locale `fr_FR` :
- Locale `de_DE` : pas de droits
- Locale `en_US` : droit de visualisation
- Locale `fr_FR` : droit de modification
- Catégorie `Chaussures` : droits de visualisation et de modification
- Groupe d'attributs `Général` : droits de visualisation et de modification

Dans la locale `fr_FR`, l'utilisateur peut modifier les produits de la catégorie `Chaussures` et les attributs du groupe `Général`. Il ne peut voir que les produits et leurs attributs dans la locale `en_US` et il ne peut pas voir les informations sur les produits dans la locale `de_DE`.

# Droits en fonction de la locale
Il est possible de définir pour chaque [groupe d'utilisateurs](what-is-a-user-group.html), sur quelle [locale](what-is-a-locale.html) les informations sur le produit peuvent être visualisées et/ou modifiées.

## Trois niveaux d'accès
Il existe trois niveaux d’accès basés sur les locales. Chacun est décrit dans les sections ci-dessous.

### Le droit de modification
Si un utilisateur **a le droit de modifier les informations sur le produit** pour une locale spécifique (c’est-à-dire que l’un de ses groupes d'utilisateurs possède au moins l’autorisation `Autorisé à modifier les informations`), cette locale sera affichée dans le menu déroulant des locales disponibles :
- dans la grille des produits
- Dans la grille de produits publiés _(édition Enterprise uniquement)_
- dans la fiche produit
- lors de la traduction des informations sur le produit dans la fiche produit

Il pourra également importer des données de produit sur cette locale.

### Le droit de visualisation
Si un utilisateur **a le droit de n’afficher que les informations sur le produit** pour une locale spécifique (c’est-à-dire que ses groupes d’utilisateurs disposent uniquement de l’autorisation `Autorisé à voir les informations`), les locales spécifiques seront affichées dans le menu déroulant des locales disponibles :
- dans la grille des produits
- Dans la grille de produits publiés _(édition Enterprise uniquement)_
- dans la fiche produit
- lors de la traduction des informations sur le produit dans la fiche produit.

Mais il ne pourra pas modifier les données de produit dans la fiche produit, ni importer des données de produit sur cette locale spécifique.

### Aucun droit
Si un utilisateur **n'a pas le droit de voir ni de modifier les informations produit** pour une locale spécifique, cette locale ne sera pas affichée dans le menu déroulant des locales disponibles :
- dans la grille des produits
- Dans la grille de produits publiée _(édition Enterprise uniquement)_
- dans la fiche produit
- lors de la traduction des informations sur le produit dans la fiche produit.

Il ne pourra pas modifier les données dans la fiche produit, ni importer des données sur cette locale spécifique.

## Définir les droits des groupes d'utilisateurs
Alors maintenant, vous comprenez mieux comment les droits en fonction des locales fonctionnent, configurons-les dans l'interface :
1. Allez dans `Paramètres` et sélectionnez le menu `Locales`
1. Sélectionnez la locale dans la grille ou à l'aide des filtres de grille.
1. Cliquez sur l'onglet `Permissions`
   ![Définir les droits sur les groupes d'utilisateurs](Settings_LocalesPermissions_fr.png)
1. Cliquez dans les champs pour ajouter des [groupes d'utilisateurs](what-is-a-user-group.html) et leur accorder des autorisations.
1. Cliquez sur le bouton `Enregistrer`

Les autorisations sont immédiatement appliquées aux utilisateurs.

## Un exemple

Julia fait partie du groupe d'utilisateurs `Equipe France` et dispose des droits nécessaires pour modifier les informations produit concernant les locales `fr_FR`.   
Robert fait partie du groupe d'utilisateurs `Manager` qui ne dispose que du droit de visualiser les informations sur le produit concernant les locales `fr_FR`.    
Mary fait partie du groupe d'utilisateurs `Equipe Allemagne` et ne dispose d'aucun droit sur les informations produit concernant les locales `fr_FR`.  

![Un exemple pour mieux comprendre](Settings_LocalesUserGroupsRights_fr.png)

# Droits en fonction des catégories
Il est possible de définir pour chaque [groupe d'utilisateurs](what-is-a-user-group.html), quels produits peuvent être visualisés et/ou modifiés et/ou possédés, en fonction de leur classement dans les [catégories](what-is-a-category.html).

## Quatre niveaux d'accès
Il existe quatre niveaux d’accès que vous pouvez accorder à vos [groupes d'utilisateurs](what-is-a-user-group.html) dans chacune de vos catégories.

### Le droit Propriétaire
Si un utilisateur **est propriétaire des informations produit** pour les produits appartenant à une catégorie donnée (c’est-à-dire qu'un de ses groupes d’utilisateurs dispose au minimum de l’autorisation `Autorisé à gérer les produits`), il sera en mesure de:
* Voir et modifier les informations sur le produit directement; plutôt que de passer par le [workflow de propositions](propositions-workflow.html)
* Voir/réviser les [propositions actuelles](review-products-propositions.html) des valeurs des produits
* Approuver/rejeter ou approuver partiellement les [propositions](review-products-propositions.html) des valeurs à réviser
* Publier/annuler la publication d'une version du produit
* Voir/Modifier les [associations](products-associations.html) de produits  et [catégories](what-is-a-category.html)

### Le droit de modification
Si un utilisateur **a uniquement le droit de modifier les informations produit** pour les produits appartenant à une catégorie donnée (c’est-à-dire que ses groupes d’utilisateurs disposent de l’autorisation `Autorisé à modifier les produits`), il sera en mesure de:
* Voir les informations sur le produit
* Créer un produit [brouillon](workflow.html) qui devra être approuvé par le chef de produit
* Générer / envoyer une proposition qui sera traitée par le chef de produit

### Le droit de visualisation
Si un utilisateur **a le droit de ne voir que les informations produit** pour les produits appartenant à une catégorie donnée (c’est-à-dire que ses groupes d’utilisateurs ne disposent que de la permission `Autorisé à voir les produits`), il ne pourra voir que les informations produit. et c'est tout. Pas de possibilité de le modifier.

### Aucun droit
Si un utilisateur **n'a pas le droit de voir ni de modifier les informations produit** pour les produits appartenant à une catégorie donnée, il ne pourra ni visualiser ni modifier les informations produit, quel que soit l'écran du PIM.

::: info
Dans le cas où un utilisateur n'a pas le droit de voir ou de modifier les informations sur le produit pour une catégorie donnée, nous masquons cette catégorie afin de rendre l'interface utilisateur encore plus simple.
:::

::: tips
Si vous supprimez le droit d'afficher les produits d'une catégorie donnée, le PIM supprimera également automatiquement ses droits de modification et de gestion des produits de cette catégorie.
Même chose si vous supprimez le droit de modifier les produits d'une catégorie donnée, le PIM supprimera également automatiquement le droit de gestion des produits de cette catégorie.
:::

## Un exemple
Prenons plusieurs exemples pour rendre cela plus clair.

Julia est la responsable produit de son entreprise. Elle fait partie du groupe d'utilisateurs `Gestionnaire Informatique`.
Mary est une stagiaire et fait donc partie du groupe d’utilisateurs `Rédacteur`.    
Ensuite, nous avons Marco, le fournisseur. Il fait partie du groupe d'utilisateurs `Fournisseur`.   
Pour finir, Elise appartient au groupe d’utilisateurs `Gestionnaire Habillement`.

Comme vous pouvez le voir dans la capture d'écran ci-dessous, le groupe d'utilisateurs `Gestionnaire Informatique` est propriétaire des produits de la catégorie `Informatique et électronique`, alors que le groupe d'utilisateurs `Rédacteur` ne dispose que de droits de modification et que le groupe d'utilisateurs `Fournisseur` n'a que le droit de visualisation. Comme il n’apparaît nulle part, le `Gestionnaire Habillement` n’a aucun droit sur les produits de la catégorie `Informatique et électronique  `.
![Un exemple](Settings_ExamplePermissions1_fr.png)

Maintenant, imaginons que le produit `Samsung Galaxy Tab S 3` ne soit classé que dans la catégorie `Informatique et électronique`. À la suite de l'application de ces droits :
- Julia obtiendra la page produit suivante pour le produit `Samsung Galaxy Tab S 3`
  ![Ce que voit Julia](Products_ExampleJulia_fr.png)
- Mary obtiendra la page produit suivante pour le produit `Samsung Galaxy Tab S 3`. Vous pouvez remarquer que les entrées de menu `Catégories`, `Associations` et `Propositions` sont masquées, dans ce cas.
  ![Ce que voit Marie](Products_ExampleMary_fr.png)
- Marco obtiendra la page produit suivante pour le produit `Samsung Galaxy Tab S 3`. Vous pouvez remarquer que les valeurs d'attributs sont grisées car leur modification n'est pas autorisée dans ce cas.
  ![Ce que voit Marco](Products_ExampleMarco_fr.png)
- Elis ne pourra pas accéder à la fiche produit du produit `Samsung Galaxy Tab S 3`. Elle ne pourra même pas voir la catégorie `Informatique et électronique` dans l'arborescence des catégories.

## Définir les droits des groupes d'utilisateurs
Alors maintenant, vous comprenez mieux comment les droits en fonction des catégories fonctionnent, configurons-le dans l'interface :
1. Allez dans `Paramètres` et sélectionnez l'entrée `Catégories`
1. Sélectionnez la catégorie pour y définir les autorisations
1. Allez dans l'onglet `Permissions`
1. Cliquez dans les champs pour ajouter des groupes d'utilisateurs et leur accorder des autorisations.
   ![Définir les groupes d'utilisateurs](Settings_CategoriesPermissions_fr.png)
1. Cliquez sur le bouton `Enregistrer`

Les autorisations sont immédiatement appliquées aux utilisateurs.

:::info
Par défaut, tous les utilisateurs ont tous les droits sur les catégories d'actif créées via le groupe d'utilisateurs `All`, qui est le groupe d'utilisateurs par défaut. Si vous définissez des autorisations pour des groupes spécifiques, supprimez le groupe d'utilisateurs `All`.
:::

## Quelques astuces cruciales

### Un produit, plusieurs catégories

Si un produit appartient à plusieurs catégories d'un arbre ou plus, le droit le plus permissif est appliqué au produit.

**Exemple**
Le produit A est classé dans :
  - la catégorie `Marque`, sur laquelle le groupe d'utilisateurs `Fournisseur` a un droit Propriétaire.
  - la catégorie `Tshirt`, sur laquelle le groupe d'utilisateurs `Fournisseur` n'a qu'un droit de modification.
  - la catégorie `Jaune`, dans laquelle le groupe d'utilisateurs `Fournisseur` n'a qu'un droit de visualisation.    
Maintenant, imaginons que Mary soit dans le groupe d’utilisateurs `Fournisseur`. Elle aura le droit Propriétaire sur le produit A.

### Un produit, pas de catégorie

Si un produit n'est pas du tout classé, par défaut, tous les utilisateurs du PIM auront un droit Propriétaire sur ce produit.

:::info
Pour éviter cela, il est possible de passer par des règles pour classer automatiquement les produits. Reportez vous à l'article sur les [Règles](what-is-a-rule.html).
:::

### Un utilisateur, plusieurs groupes d'utilisateurs

Si un utilisateur appartient à plusieurs groupes d'utilisateurs, le droit le plus permissif est appliqué au produit.

**Exemple**
Le produit A est classé dans la catégorie `Tshirt`, sur lequel :
- le groupe d'utilisateurs `Fournisseur` a un droit de propriété
- le groupe d'utilisateurs `Manager` n'a qu'un droit de vue
Maintenant, imaginons que Mary soit à la fois dans les groupes d'utilisateurs `Fournisseur` et `Manager`. Elle aura le droit de propriétaire sur le produit A.

### L'option `Appliquer les changements aux sous-catégories`

Dans l'onglet `Permissions`, il y a une option appelée `Appliquer les changements aux sous-catégories`. Cette option est cochée par défaut. Cela signifie que les autorisations que vous avez accordées à votre catégorie actuelle seront appliquées à toutes ses sous-catégories.

Comme vous pouvez le voir dans l'exemple ci-dessous, l'option `Appliquer les changements aux sous-catégories` est cochée pour la catégorie parente. Ainsi, toutes ses sous-catégories auront exactement la même configuration de groupes d'utilisateurs pour les droits d'affichage et de modification.

![Appliquer les changements aux sous-catégories](Settings_CategoriesPermissionsApplytoAllChildren_fr.png)

# Droits en fonction des groupes d'attributs
Il est possible de définir pour chaque [groupe d'utilisateurs](what-is-a-user-group.html), quelles valeurs d'[attribut](what-is-an-attribute.html) des produits peuvent être visualisées et/ou modifiées, en fonction de leurs [groupes d'attributs](what-is-an-attribut-group.html).

## Trois niveaux d'accès
Il y a trois niveaux d'accès basés sur les [groupes d'attributs](what-is-an-attribut-group.html). Chacun est décrit dans les sections ci-dessous.

### Le droit de modification
Si un utilisateur **a le droit de modifier les informations produit** pour un groupe d'attributs spécifique (c'est-à-dire que ses groupes d'utilisateurs ont au moins l'autorisation `Autorisé à modifier les attributs`) :
* Dans la fiche produit, les valeurs de tous les attributs du groupe sont activées et peuvent être modifiées (sous réserve que l'attribut ne soit pas en lecture seule)
* Lors de l'utilisation d'un import de produit, les valeurs de tous les attributs du groupe peuvent être mises à jour (sous réserve que l'attribut ne soit pas en lecture seule)
* Lors de l'export de produits, les valeurs de tous les attributs du groupe seront exportées

### Le droit de visualisation
Si un utilisateur **n'a que le droit de voir les informations sur le produit** pour un groupe d'attributs spécifique (c'est-à-dire que ses groupes d'utilisateurs ne disposent que de l'autorisation `Autorisé à voir les attributs`) :
* Dans la fiche produit, les valeurs de tous les attributs du groupe sont désactivées et ne peuvent pas être modifiées.
* Lors de l'utilisation d'un import de produit, les valeurs de tous les attributs du groupe ne peuvent pas être mises à jour.
* Lors de l'export de produits, les valeurs de tous les attributs du groupe seront exportées

### Aucun droit
Si un utilisateur **n'a pas le droit de voir ni de modifier les informations produit** pour un groupe d'attributs spécifique :
* Dans la fiche produit, les valeurs de tous les attributs du groupe ne sont pas affichées et ne peuvent donc pas être modifiées.
* Lors de l'utilisation d'un import de produit, les valeurs de tous les attributs du groupe ne peuvent pas être mises à jour.
* Lors de l'export de produits, les valeurs de tous les attributs du groupe ne seront pas exportées
* Les vues utilisant les [groupes d'attributs](what-is-an-attribut-group.html) (colonnes ou filtres) ne sont pas affichées dans la liste des vues.

## Un exemple
Prenons un exemple avec la configuration des autorisations des groupes d'utilisateurs suivante, concernant le groupe d'attributs `Marketing`.
![Autorisations de marketing](Settings_AttributesgroupsMarketingExample1_fr.png)

Julia appartient au groupe d'utilisateurs `Marketing` qui a le droit de modifier les informations sur le produit concernant le groupe d'attributs `Marketing`. En conséquence, dans la fiche produit, elle peut afficher/modifier les informations produit de ce groupe d'attributs, comme vous pouvez le voir sur la capture d'écran ci-dessous.
![Le cas de Julia](Products_AttributesgroupsMarketingExample2_fr.png)

Robert fait partie du groupe d'utilisateurs `Interne` qui dispose uniquement du droit de visualiser les informations sur le produit concernant le groupe d'attributs `Marketing`. En conséquence, dans la fiche produit, il ne peut afficher que les informations produit de ce groupe d'attributs, comme vous pouvez le voir sur la capture d'écran ci-dessous. Les attributs de ce groupe d'attributs sont grisés.
![Le cas de Robert](Products_AttributesgroupsMarketingExample3_fr.png)

Mary fait partie du groupe d'utilisateurs `Équipe d'achats` qui n'a aucun droit sur les informations produit concernant le groupe d'attributs `Marketing`. En conséquence, dans la fiche produit, elle ne peut pas voir du tout le groupe d'attributs `Marketing`, ni ses attributs, comme vous pouvez le voir sur la capture d'écran ci-dessous.
![Le cas de Mary](Products_AttributesgroupsMarketingExample4_fr.png)

## Définir les droits des groupes d'utilisateurs
Alors maintenant, vous comprenez mieux comment fonctionnent les droits en fonction des [groupes d'attributs](what-is-an-attribut-group.html), configurons-le dans l'interface :
1. Allez dans `Paramètres` et cliquez sur l'entrée `Groupes d'attributs`
1. Sélectionnez le groupe d'attributs dans la grille
1. Cliquez sur l'onglet `Permissions`
1. Cliquez sur les champs pour sélectionner les groupes d'utilisateurs ayant les droits appropriés
1. Cliquez sur le bouton `Enregistrer`

Les droits sont immédiatement appliqués aux utilisateurs.
