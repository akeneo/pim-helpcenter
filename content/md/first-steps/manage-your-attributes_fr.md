---
id: manage-your-attributes
themes: catalog-settings
title: Gérer vos **attributs**
popular: false
ee-only: false
related: what-is-an-attribute
---


Si vous n'êtes pas familier avec le concept des attributs, vous pouvez lire l'article : [Qu'est-ce qu'un attribut ?](what-is-an-attribute.html#mainContent)

# Comment créer un attribut ?

Akeneo propose plusieurs types d'attributs. Découvrez tous les attributs disponibles sur l'article : [Introduction aux types d'attributs Akeneo](what-is-an-attribute.html#definition-of-an-attribute). Assurez-vous de choisir le type d'attribut **le plus approprié pour répondre parfaitement à vos besoins**.    
Par exemple, si vous devez vous assurer que vos utilisateurs sélectionneront l'une des options prédéfinies, sélectionnez un type d'attribut `Liste à choix unique` au lieu d'un champ texte libre. Créez un attribut `métrique` pour indiquer le poids/taille/longueur... de vos produits.

Pour créer un attribut dans Akeneo PIM :
1. Aller dans `Paramètres / Attributs`.
1. Cliquez sur le bouton `Créer un attribut` :
  ![image](Settings_AttributesCTAButton_fr.png)
1. Sélectionnez le type d'attribut souhaité :
  ![image](Settings_Attributes_Create2_fr.png)
1. La page de modification des attributs est affiché, remplissez les propriétés suivantes :  
    Sous `Paramètres généraux` :
    - Un **code** (obligatoire) pour identifier l'attribut.
    - Un **type** basé sur le type d'attribut sélectionné dans l'écran précédent.
    - Un **groupe d'attributs** (obligatoire) dans lequel le nouvel attribut sera ajouté.    
En plus de ces attributs obligatoires, vous pouvez sélectionner les propriétés suivantes :
    - **Valeur unique** (Oui/Non) : active cette propriété si la valeur de cet attribut doit être unique. Par défaut, il prend la valeur Oui pour le type d'attribut `Identifier`.
    - **Valeur par canal** (Oui/Non) : activez cette propriété si vous prévoyez d'avoir différentes valeurs de produit par canal.
    - **Valeur par locale** (Oui/Non) : activez cette propriété si vous prévoyez d'avoir différentes valeurs de produit par locale.
    - **Lecture seule** (Oui/Non) **_(édition Entreprise uniquement)_** : pour éviter que cet attribut ne soit modifié dans l'interface utilisateur, il ne sera mis à jour que par import, API ou règles.
    - **Utilisable dans la grille** (Oui/Non) : si vous voulez filtrer sur cet attribut dans les grilles du produit ou l'utiliser comme colonne.
    - **Spécifique à une locale** : cet attribut ne sera disponible que pour certaines locales.      
Sous `Paramètres de validation`, ajoutez des validations pour contrôler vos données :
    - **Paramètres de validation** : chaque attribut est accompagné de paramètres de validation (voir [Ajouter des paramètres de validation des attributs](#ajouter-des-paramètres-de-validation-des-attributs)).    
1. Cliquez sur `Sauvegarder` pour créer votre attribut.

:::warning
**Certaines propriétés d'attribut ne peuvent pas être modifiées par la suite, comme par exemple `code`, `valeur unique`, `valeur par canal` et `valeur par locale`**. Assurez-vous qu'elles correspondent à vos besoins !
:::

:::warning
Veuillez noter que les **codes d'attributs suivants ne peuvent pas être utilisés** dans Akeneo PIM :    
`id`, `identifier`, `Identifier`, `associationTypes`, `category`, `categories`, `categoryId`, `completeness`, `enabled`, `family`, `Family`, `groups`, `associations`, `products`, `scope`, `treeId`, `values`, `label`, `LABEL`, `Label`, `parent`. Nous vous recommandons fortement de ne pas utiliser ces codes même si la casse des lettres est différente, par exemple `Id`, `Groups`.
:::

## Ajouter des paramètres de validation des attributs

Chaque attribut a des propriétés spécifiques pour ajouter plus de contrôle sur les valeurs de l'attribut :
- **Attribut Date** :
  - *Date mini* : la date la plus petite qui peut être acceptée.
  - *Date maxi* : la date la plus grande qui peut être acceptée.
- **Attribut Texte** :
  - *Nombre maximum de caractères* : nombre maximum de caractères qu'une valeur d'attribut peut avoir.
  - *Règle de validation* : comment la valeur doit être validée : par exemple une URL, un Email, ou en utilisant une expression régulière.
- **Attribut Zone de texte** :
  - *Nombre maximum de caractères* : nombre maximum de caractères qu'une valeur d'attribut peut avoir.
  - *Éditeur de texte enrichi activé* (Oui/Non) : active la fonction WYSIWYG.
- **Attribut Fichier** et **Image** :
  - *Taille maximale autorisée en MB* : taille maximale pour les fichiers.
  - *Extensions autorisées* : la ou les extensions autorisées.
- **Attribut Unité de mesure** :
  - *Valeurs négatives autorisées* pour cet attribut (Oui/Non).
  - *Valeurs décimales autorisées* pour cet attribut (Oui/Non).
  - *Nombre min* : la plus petite valeur autorisée.
  - *Nombre max* : la valeur la plus élevée autorisée
  - *Type de mesure* : unité de mesure de la famille à utiliser pour l'attribut (poids, dimensions, surface, etc.).
  - *Unité de mesure par défaut* : utilisé lors de l'affichage de la page Produit
- **Attribut Prix** :
  - *Valeurs décimales autorisées* pour cet attribut (Oui/Non).
  - *Nombre min* : la plus petite valeur autorisée.
  - *Nombre max* : la valeur la plus élevée autorisée
- **Attribut Nombre** :
  - *Valeurs négatives autorisées* pour cet attribut (Oui/Non).
  - *Valeurs décimales autorisées* pour cet attribut (Oui/Non).
  - *Nombre min* : la plus petite valeur autorisée.
  - *Nombre max* : la valeur la plus élevée autorisée
- **Attribut Lien simple vers une entité référentielle** & **Lien multiple vers une entité référentielle _(édition Entreprise uniquement)_** :
  - *Entité référentielle liée* : l'entité référentielle liée à cet attribut.
- **Attribut Liste à choix unique de données référentielles** & **Liste à choix multiples de données référentielles** :
  - *Type de données de référence* : choisissez une donnée de référence existante à lier à votre attribut.

Pour le type d'attribut texte, vous pouvez ajouter une expression régulière pour valider le contenu de l'entrée. Par exemple, pour contrôler le bon format d'un code EAN13, ajoutez une règle de validation basée sur l'expression régulière suivante : `/^[0-9]{13}$/`

![paramètres de validation](Settings_EAN_fr.png)

:::info
Les types d'attributs **Liste à choix unique** et **Liste à choix multiples**, ainsi que l'attribut **Oui/Non** (booléen) n'ont aucune propriété de validation spécifique.
:::

## Traduisez vos libellés d'attributs

Une fois votre attribut créé, traduisez-le ! Vous pouvez ajouter une **traduction pour chaque locale activée** sous l'onglet `Traduction des libellés`. Si vous avez besoin de modifier d'autres propriétés d'attributs, veuillez vous référer à la section [Modifier les propriétés d'attributs](manage-your-attributes.html#modifier-les-propriétés-des-attributs).

:::tips
Les types d'attributs **Liste à choix unique** et **Liste à choix multiples** doivent **rarement être localisables** car toutes leurs options peuvent être traduites dans n'importe quelle locale activée du PIM.
:::

## Modifier les propriétés des attributs

Pour modifier un attribut :
1.  Aller dans `Paramètres / Attributs`.
2.  Sélectionnez l'attribut à modifier dans la grille et cliquez sur la ligne ou sur le raccourci de modification
![image](Settings_AttributesModifyAnAttributes_fr.gif)
3.  Modifiez les propriétés et cliquez sur `Enregistrer`.
![image](Settings_Attributes_Properties_fr.png)

Vous pouvez modifier les propriétés suivantes d'un attribut :
- **Groupe d'attributs** : le groupe d'attributs auquel appartient l'attribut.
- **Libellés** : ce sont des libellés qui apparaissent lorsqu'ils sont affichés dans le PIM.
- **Spécifique à une locale** : si l'attribut doit s'appliquer à des locales spécifiques, pas à toutes.
- **Utilisable dans la grille** : si l'attribut peut être affiché en colonne ou utilisé comme filtre dans la grille de produits _(éditions Communautaire et Entreprise)_ ou dans la grille de propositions _(édition Entreprise uniquement)_.
- **Lecture seule** : lorsqu'elle est activée, elle empêche la modification de cet attribut dans l'interface utilisateur, elle ne peut être mise à jour que par des imports ou des règles _(édition Entreprise uniquement)_.
- **Paramètres de validation** (voir [Paramètres selon les types d'attributs spécifiques](#ajouter-des-paramètres-de-validation-des-attributs))
- **Options** (pour les types d'attributs simples ou multi-sélectionnés uniquement) : ce sont des valeurs prédéfinies que l'utilisateur peut sélectionner.

# Trouvez vos attributs

Allez dans `Paramètres / Attributs`, pour voir tous les attributs existants ou en créer un nouveau.

La grille d'attributs affiche 25 attributs par page. Pour parcourir les pages d'attributs, cliquez sur le numéro de page que vous voulez atteindre ou utilisez les filtres.

![image](Settings_Attributes_fr.png)    

Vous pouvez trier les attributs en cliquant sur l'en-tête de colonne de la grille.

## Recherche sur la grille

### Sur son libellé

Pour trouver rapidement un attribut, utilisez la barre de recherche située au-dessus de la grille. Utilisez votre libellé d'attributs pour trouver ce que vous cherchez.

![image](Settings_UsetheSearchBar_fr.gif)

:::warning
Si votre attribut n'a pas de libellé traduit, il n'apparaîtra pas dans les résultats de la recherche. **Assurez-vous que votre attribut a ses libellés traduites.**
:::

### Utiliser des filtres

D'autres filtres sont disponibles sur le côté droit de l'écran, vous pouvez rechercher des attributs en fonction de leur code, type...

![image](Settings_AttributesFilters_fr.png)

1.  Entrez vos critères de filtrage
1.  La grille est automatiquement mise à jour lorsqu'un nouveau filtre est défini.

Vous pouvez filtrer sur les informations d'attribut suivantes :
- Le code d'attribut
- Le type d'attribut (liste à choix multiples)
- Le groupe d'attributs auquel il appartient (liste à choix multiples)
- La propriété `Décliné par canal` (Oui/Non) (une valeur par canal)
- La propriété `Localisable` (Oui/Non) (une valeur par locale)
- La propriété `Intelligent` (Oui/Non) s'il y a une règle qui affecte cet attribut _(édition Entreprise uniquement)_

:::info
Par défaut, les attributs seront affichés dans la locale du catalogue sélectionnée dans la grille de produits. Si un code d'attribut apparaît entre parenthèses comme *[couleur]*, cela signifie qu'il n'a pas été traduit dans la locale courante.
:::

## Actions de raccourcis sur chaque attribut

Un ensemble d'actions est disponible pour chaque attribut. Vous trouverez sur le côté droit de la grille. Les boutons sont visibles lorsque vous passez votre souris sur la ligne.

![image](Settings_AttributesGridHover_fr.png)

:::info
Les actions de raccourci ne s'affichent que si vous avez obtenu les droits appropriés. Veuillez vous référer à [Gérer vos rôles utilisateur](build-your-user-roles.html) pour en savoir plus sur les rôles.
:::

# Gérer les options d'attributs simples et multi-sélections

Vous pouvez définir des valeurs d'option pour des types d'attributs simples et à sélection multiple. Les options peuvent être ajoutées, modifiées, triées ou supprimées.

![image](Settings_Attributes_Options_fr.png)

## Trouver les options de l'attribut

Pour gérer vos options d'attributs simples et multi-sélections, supprimez une option ou ajoutez-en une nouvelle :
1. Aller à `Paramètres / Attributs`.
1. Sélectionnez l'attribut à modifier, puis cliquez sur la ligne correspondante dans la grille de données des attributs.
1. Cliquez sur l'onglet `Options`.

## Ajouter une nouvelle option

1. Cliquez sur le bouton `Ajouter une option`
1. Donner un code unique à la nouvelle option
1. Cliquez sur la coche verte à la fin de la ligne d'option pour confirmer la création ou sur la croix pour annuler la création de l'option.


![image](Settings_Attributes_AddOption_fr.gif)

L'option est instantanément créée.

:::warning
Vous pouvez **ajouter et mettre à jour plusieurs lignes à la fois mais vous devrez sauvegarder chaque ligne avant de quitter la page**.
Vous ne pouvez pas utiliser le bouton principal `Enregistrer` pour enregistrer vos nouvelles options.
:::

## Modifier les libellés des options

1.  Cliquez sur l'icône du petit crayon pour changer le libellé ou le code de l'option.
1.  Cliquez sur la coche verte pour confirmer ou sur la croix pour annuler.

![image](Settings_Attributes_OptionsEdit_fr.png)

## Supprimer une option

Cliquez sur le bouton `Supprimer` pour supprimer une option.

![image](Settings_Attributes_OptionsDelete_fr.png)

:::warning
Une option supprimée ne peut plus être utilisée comme valeur pour l'attribut d'un produit. Si un produit avait cette valeur, elle sera supprimée de l'attribut du produit.
:::

:::warning
**Si une option d'attribut est utilisée dans une variante de produit ou un modèle de produit comme valeur d'axe de variante, l'option ne peut pas être supprimée**, un message d'erreur s'affiche. Veuillez consulter l'article [qu'est-ce qu'une variante de famille](what-about-products-variants.html#qu_est_ce_qu_une_variante_de_famille) pour plus de détails sur les axes des variantes.
:::

:::ee
Une option utilisée par un produit publié ne peut pas être supprimée. Annulez la publication du produit pour pouvoir supprimer l'option.
:::

## Options de tri

Les options peuvent être **triées automatiquement par ordre alphabétique** en utilisant le bouton basculant `Trier automatiquement les options par ordre alphabétique` en haut de la page des options de l'attribut.    
Si vous souhaitez définir votre propre tri, vous **pouvez glisser-déposer les lignes d'options pour réorganiser manuellement les options**.

![image](Settings_AttributesDraganddropOption_fr.gif)

# Gérer les règles sur les attributs _(édition Entreprise seulement)_

Si vous n'êtes pas familier avec le concept de règles, vous pouvez lire notre article[Qu'est-ce qu'une règle ?](what-is-a-rule.html).   

Si une règle s'applique à votre attribut, cette règle sera visible sous l'onglet `Règles`.

![image](Settings_Attributes_Rules_fr.png)

L'écran `Règles` est composé de plusieurs informations :
- **Code de la règle** : le nom de la règle importée
- **Condition(s) de la règle** : les conditions d'application de la règle, commençant par `Si`.
- **Action(s) de la règle** : les actions à faire si le produit correspond à la (aux) condition(s), commençant par `Alors`.
- **Nombre de produits affectés** (si calculé) : le nombre de produits affectés par la règle (ce calcul peut être effectué à partir de la page `Paramètres / Règles`, voir la section dédiée [Calculer le nombre de produits affectés pour les règles](manage-your-rules.html#calculate-the-number-of-affected-products-for-rules).

Les règles doivent être lues de gauche à droite : conditions puis actions.   

Comme sur la page ` Réglages/Règles `, vous pouvez exécuter ou supprimer des règles depuis l'onglet `Règles`.

:::info
Toutes les règles actives peuvent être consultées à partir de la page ` Réglages/Règles `. Consultez notre[Démarrez avec le moteur de règles] (manage-your-rules.html#calculate-the-number-of-affected-products-for-rules) pour tout savoir sur les règles.
:::

# Vérifiez l'historique des attributs

**Toutes les modifications apportées aux attributs sont sauvegardées et visibles dans l'historique de l'attribut**, par exemple : un changement de libellé, un changement de propriété, etc.

Pour chaque modification, une version d'attribut est créée. Les informations suivantes sont recherchées pour chaque version :
- la personne ou le système qui a apporté les modifications
- La date et l'heure (jusqu'à quelques secondes) des changements.
- L'ancienne valeur et la nouvelle valeur de chaque champ modifié

Pour afficher les versions des attributs :
1.  Ouvrir et modifier la page d'attributs
1.  Cliquez sur l'onglet `Historique` et la liste des versions s'affiche.

:::ee
Contrairement aux produits, vous ne pouvez pas restaurer ou réinitialiser la version d'un attribut.
:::

# Effacer un attribut

:::warning
Veuillez d'abord supprimer votre attribut des familles dans lesquelles il est utilisé et ensuite des produits. Après cela, vous pourrez supprimer votre attribut en toute sécurité.
:::

Vous avez deux façons de supprimer un attribut :

Par la page de modification des attributs :
1. Sélectionnez l'attribut à supprimer
1. Cliquez sur `...` pour d'autres actions et ensuite sur `Supprimer` dans le coin supérieur droit.
  ![image](Settings_Attributes_Delete_fr.png)
1. Confirmez l'action dans le popin

Par le raccourci `Supprimer` dans la grille :
  ![image](Settings_Attributes_GridDeleteHover_fr.png)
1. Sélectionnez l'attribut que vous voulez supprimer de la grille d'attributs
1. Placez votre souris sur la ligne d'attribut dans la grille, le bouton `Supprimer` est invité (icône poubelle)
1. Cliquez sur l'icône de la corbeille
1. Confirmez l'action dans le popin

**L'attribut et toutes ses informations pertinentes seront supprimés dans Akeneo PIM. Une fois que vous avez confirmé l'action, elle ne peut plus être annulée**.

:::ee
Un attribut utilisé dans un produit publié ne peut pas être supprimé. Vous devez d'abord dépublier le(s) produit(s), puis supprimer l'attribut.
:::

:::warning
Si vous ne pouvez pas accéder à la page des attributs ou si vous ne pouvez pas ajouter/supprimer un attribut, c'est probablement parce que vous n'en avez pas la permission. Veuillez vous référer à [Gérer vos rôles utilisateur](build-your-user-roles.html) pour en savoir plus sur les rôles.
:::
