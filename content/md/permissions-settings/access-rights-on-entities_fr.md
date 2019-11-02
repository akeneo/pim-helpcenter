---
id: access-rights-on-entities
themes: permissions-settings, manage-your-reference-entities
title: Définissez les droits sur vos **entités référentielle**
popular: false
ee-only: true
related: what-about-reference-entities, manage-your-reference-entities, build-your-user-groups
---

# Les bases

Une fois que vous avez [créé votre 1ère entité référentielle](manage-reference-entities.html) et [créé vos groupes d'utilisateurs](build-your-user-groups.html), vous pouvez commencer à définir pour chacun de ces groupes d'utilisateurs s'ils pourront afficher/modifier cette entité référentielle et ses données.

# Droits en fonction de l'entité référentielle

Vous pouvez définir quels groupes d'utilisateurs peuvent visualiser ou modifier une entité référentielle, ses propriétés, ses attributs et ses enregistrements.

Pour les entités référentielle, nous avons 2 niveaux d'accès :
- **View** : le droit de visualisation
- **Edit** : le droit de modification.

::: warning
Il n'est pas possible de cacher une entité référentielle.
:::

## Le droit de modification
Le droit de modification signifie ajouter, modifier et supprimer des droits.  
Si un utilisateur appartenant à un groupe d'utilisateurs a le droit d'éditer une entité référentielle, il pourra :
* Modifier les propriétés de cette entité référentielle
* Ajouter, modifier et supprimer les attributs de cette entité référentielle
* Ajouter, modifier et supprimer un enregistrement de cette entité référentielle
* Supprimer cette entité référentielle

::: info
Si vous voulez que seuls certains utilisateurs puissent modifier les attributs d'une entité référentielle ou supprimer un enregistrement, vous pouvez également gérer les accès sur les actions selon [les rôles utilisateur](build-your-user-roles.html). Veuillez vous référer à [cet article](manage-the-interface-and-actions-accesses.html#rights-on-reference-entities-ee-only) pour avoir plus d'informations.
:::

## Le droit de visualisation
Si un utilisateur appartenant à un groupe d'utilisateurs a le droit de visualisation (`VIEW`) pour une entité référentielle, il ne pourra afficher que les données de l'entité référentielle (propriétés, attributs, enregistrements) et c'est tout.  
Il ne pourra pas la modifier ou la supprimer.

## Définir les droits sur une entité référentielle
Pour définir les droits sur une entité référentielle, procédez comme suit :
1.  Allez dans l'onglet `Permissions` de l'entité référentielle
1.  Pour chaque groupe d'utilisateurs, cochez pour donner les droits `VIEW` ou `EDIT`
1.  Cliquez sur le bouton `Enregistrer` pour enregistrer les permissions.
![image](ReferenceEntity_Permissions_fr.png)

Par exemple, un utilisateur du groupe `Manager` peut éditer cette entité référentielle `Marque`, ce qui lui permet d'ajouter et de modifier des attributs ou d'ajouter et d'enrichir certaines marques.
Un utilisateur dans le groupe `Gestionnaire Vetements` ne peut voir que cette entité référentielle `Marque`, donc il ne peut voir que ses attributs et voir aussi ses marques.

::: tips
Si vous voulez que tous vos groupes d'utilisateurs aient les droits de modification, cliquez sur `EDIT` dans le titre des colonnes et tous les groupes d'utilisateurs seront cochés avec les droits `EDIT`.  
Si vous voulez que presque tous vos groupes d'utilisateurs aient les droits d'affichage, cliquez sur `VIEW` dans le titre des colonnes et tous les groupes d'utilisateurs seront cochés avec `VIEW` droits. Ensuite, ajoutez le droit `EDIT` à certains groupes d'utilisateurs.
:::

::: warning
Au moins un groupe d'utilisateurs devrait avoir les droits `EDIT` sur une entité référentielle pour gérer les permissions sur cette entité référentielle.
:::

# Les droits en fonction des locales
Il est possible de définir pour chaque [groupe d'utilisateurs](what-is-a-user-group.html), sur quelle [locale](what-is-a-locale.html) les données d'entité référentielle peuvent être vues ou modifiées.

Pour les entités référentielle, nous avons 2 niveaux d'accès sur les locales : le droit de visualisation et le droit de modification.

::: warning
Il n'est pas possible de cacher une locale dans une entité référentielle.
:::

## Le droit de modification
Le droit de modification signifie les droits d'ajout et de modification.   
Si un utilisateur appartenant à un groupe d'utilisateurs a le droit de modifier une entité référentielle, il pourra :
* Modifier les libellés des entités référentielle d'une locale
* Modifier les libellés des attributs des entités référentielle pour une locale
* Modifier les valeurs des enregistrements d'entité référentielle pour une locale si l'attribut est localisable

## Le droit de visualisation
Si un utilisateur appartenant à un groupe d'utilisateurs a le droit de `VIEW` sur une locale, il ne pourra afficher que les données d'entité référentielle sur cette locale (propriétés, attributs, enregistrements) et c'est tout.  
Il ne pourra pas la modifier.

## Définir les droits sur une locale
Pour définir les droits sur une locale, veuillez vous référer à [cet article](access-rights-on-products.html#set-rights-to-user-groups).
