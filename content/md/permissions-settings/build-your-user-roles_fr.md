---
id: build-your-user-roles
themes: permissions-settings
title: Construisez vos **rôles Utilisateur**
popular: false
ee-only: false
related: manage-the-interface-and-actions-accesses, manage-the-web-api-permissions, what-is-a-role, what-is-a-user
---

# Vue d'ensemble
Les rôles Utilisateur visent à définir les permissions sur les actions/vues du PIM et les accès aux points d'accès [API](http://api.akeneo.com).

L'article suivant vous donnera plus de détails sur la façon de construire vos rôles Utilisateur et comment les assigner aux utilisateurs.

# Créer un rôle

Pour créer un nouveau rôle :
1. Connectez-vous avec un compte utilisateur ayant le droit de créer un rôle
1. Allez dans `Système` et cliquez sur le menu `Rôles`
1. Cliquez sur le bouton `Créer un rôle`, remplissez le formulaire et donnez un nom au rôle
    ![image](System_Roles_fr.png)
1. Cliquez sur le bouton `Enregistrer` pour ajouter le nouveau rôle
1. Sélectionnez ensuite les permissions pour le rôle.

Pour mieux comprendre ce qui se cache derrière chaque permission, n'hésitez pas à jeter un coup d'œil aux articles suivants : [Gérer l'interface et les accès aux actions](manage-the-interface-and-actions-accesses.html) et [Gérer les permissions de l'API Web](manage-the-web-api-permissions.html)

# Modifier le nom d'un rôle

Pour modifier le nom d'un rôle :
1.  Connectez-vous avec un compte utilisateur ayant le droit de modifier un rôle
1.  Allez à `Système`/`Rôles`
1.  Cliquez sur le rôle que vous voulez modifier
1.  Changez son nom
1.  Cliquez sur `Sauvegarder` pour mettre à jour le rôle

::: info
Un nom de rôle ne peut pas comporter plus de 25 caractères.
:::

# Attribuer un rôle à un utilisateur

Lorsque vous avez défini vos rôles, vous pouvez les affecter à vos utilisateurs. De cette façon, il leur permettra d'avoir des droits d'accès dans le PIM.

Pour modifier l'appartenance d'un utilisateur :
1. Connectez-vous avec un compte utilisateur ayant le droit de modifier un rôle
1. Allez à `Système`/`Rôles`
1. Cliquez sur le rôle à modifier et allez sous l'onglet `Utilisateurs`
    ![image](System_Roles_Users_Users_fr.png)
1. La liste des utilisateurs s'affiche. Les utilisateurs appartenant actuellement au rôle peuvent être facilement identifiés par la case à cocher dans la première colonne `a le rôle`
1. Recherchez les utilisateurs et cochez les cases pour ajouter des utilisateurs au rôle. Et dans l'autre sens, décochez les cases pour les utilisateurs à supprimer du rôle
1. Cliquez sur le bouton `Enregistrer` pour mettre à jour le rôle

Les droits qui ont été accordés ou supprimés aux utilisateurs sont automatiquement appliqués. Les changements de droits seront mis à jour lors du chargement de la prochaine page PIM.

::: info
Un utilisateur peut avoir plusieurs rôles. Dans ce cas, les autorisations sont cumulatives : les droits les plus permissifs sont appliqués.
:::

::: tips
Il est aussi possible d'ajouter des rôles directement via la page du profil d'un utilisateur.
:::

# Supprimer un rôle

Avant de supprimer un rôle, vous devez vérifier si ce rôle est actuellement affecté à certains utilisateurs.

Pour supprimer un rôle :
1. Connectez-vous avec un compte utilisateur ayant le droit de modifier un rôle
1. Allez à `Système`/`Rôles`.
1. Vous avez deux façons de procéder :
    - Cliquez sur le rôle à supprimer, puis cliquez sur le bouton `...` dans le coin supérieur droit, puis sélectionnez `Supprimer`.
    - Ou cliquez sur l'icône `Supprimer` de la corbeille directement dans la grille des rôles.
1. Confirmez ensuite la suppression du rôle.

::: warning
Veuillez d'abord vérifier l'impact potentiel de la suppression d'un rôle auquel les utilisateurs ont été associés. Par exemple, si le rôle `Job` était le seul moyen pour l'utilisateur d'avoir un droit spécifique, alors en raison de la suppression du rôle, l'utilisateur n'aura plus son droit d'accès dans le PIM.
:::
