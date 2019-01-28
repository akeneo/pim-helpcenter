---
id: what-is-a-role
themes: akeneo-concepts, permissions-settings
title: Qu'est-ce qu'un **rôle**?
related: handle-your-user-permissions, build-your-user-roles, manage-the-interface-and-actions-accesses, manage-the-web-api-permissions
---

# Définition
Un rôle est un ensemble de permissions pour diverses actions dans le PIM (exemple: créer un produit, supprimer un produit, voir une grille d'attributs...).

Un rôle peut-être assigné à un ou plusieurs utilisateurs. Par exemple, vous pouvez imaginer créer un rôle appelé `Administrateur` qui donnera plus de droits qu'un autre rôle appelé `Manager` lui-même possédant plus de droits qu'un troisième rôle appelé `Stagiaire`.

![image](../img/System_users_Profil_edit_grpandroles_fr.png)

Un utilisateur peut avoir un à plusieurs rôles. Dans le cas d'un utilisateur possédant plusieurs rôles, les permissions données pour chaque rôle sont cumulées.

# Exemple

Mary est une stagiaire. Nous ne souhaitons pas qu'elle puisse créer de nouveaux produits. Ainsi, nous lui avons assigné le rôle `Stagiaire`. Ce rôle ne lui donne pas le droit de créer un nouveau produit, comme vous pouvez le constater dans la capture d'écran ci-dessous. 

![image](../img/System_RolesUsersPermission_MaryIntern_fr.png)

Facile !
