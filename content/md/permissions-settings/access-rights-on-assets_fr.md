---
id: access-rights-on-assets
themes: permissions-settings
title: Mettre des droits sur vos **ressources**
popular: false
ee-only: true
related: what-is-a-user-group, what-is-a-user, build-your-user-groups
priority: low
---

# Vue d'ensemble

Les droits d'accès vous permettent de configurer le champ de visibilité des utilisateurs sur les ressources dans le PIM. En d'autres termes, il est possible de définir pour chaque [groupe d'utilisateurs](what-is-a-user-group.html), quelles ressources peuvent être visualisées et/ou modifiées, en fonction de la classification des ressources dans leurs catégories.

## Trois niveaux d'accès

Il s'agit de trois niveaux d'accès que vous pouvez accorder à vos groupes d'utilisateurs pour chacune de vos catégories de ressources :
- `Permettre de voir les ressources` : si accordé, les utilisateurs du groupe d'utilisateurs pourront afficher les ressources de la catégorie.
- `Permettre de modifier les ressources ` : si accordé, les utilisateurs du groupe d'utilisateurs pourront faire des changements sur les ressources de la catégorie.
- `Pas de droits` : si `Permettre de voir les ressources` et `Permettre de modifier les ressources` ne sont pas accordés, les utilisateurs du groupe d'utilisateurs ne seront pas en mesure de voir ces ressources dans la catégorie

::: tips
Si vous supprimez le droit d'afficher les ressources d'une catégorie donnée, le PIM supprimera également automatiquement son droit de modifier les ressources de cette catégorie.
:::

# Définir les droits des groupes d'utilisateurs
Pour définir le niveau d'accès aux ressources en fonction des catégories de ressources :
1.  Allez dans `Paramètres` et cliquez sur le menu `Catégories de ressources`
1.  Sélectionnez la catégorie de ressources sur laquelle vous souhaitez activer les permissions, dans le panneau de gauche
1.  Cliquez sur l'onglet `Autorisations`
    ![image](Settings_AssetsCategoriesPermissions_fr.png)
1.  Cliquez dans les champs et sélectionnez les groupes pour leur accorder des permissions
1.  Cliquez sur le bouton `Enregistrer`

Les autorisations sont immédiatement appliquées aux utilisateurs en fonction de leurs groupes d'utilisateurs.

::: info
Par défaut, tous les utilisateurs ont tous les droits sur les catégories de ressources créées par l'intermédiaire du groupe d'utilisateurs `All`, qui est le groupe d'utilisateurs par défaut. Si vous définissez des permissions pour des groupes spécifiques, supprimez le groupe d'utilisateurs `All`.
:::

# Quelques conseils cruciaux

## Une ressource, plusieurs catégories

Si une ressource fait partie de plusieurs catégories de ressources d'un arbre ou plus, le droit le plus permissif s'applique à la ressource.

**Exemple**  
La ressource `main_picture_tshirt_divided.png` est classé dans :
- la catégorie `Marque`, sur laquelle le groupe d'utilisateurs `Fournisseur` dispose d'un droit de modification
- la catégorie `Tshirt`, sur laquelle le groupe d'utilisateurs `Fournisseur` n'a qu'un droit de visualisation
Maintenant, imaginez que Marie fait partie du groupe d'utilisateurs `Fournisseur`. Elle aura le droit de modification sur la ressource `main_picture_tshirt_divided.png`.

## Un utilisateur, plusieurs groupes d'utilisateurs

Si un utilisateur fait partie de plusieurs groupes d'utilisateurs, le droit le plus permissif s'applique sur la ressource.

**Exemple**  
L'actif `main_picture_tshirt_divided.png` est classé dans la catégorie `Tshirt`, sur laquelle :
- le groupe d'utilisateurs `Fournisseur` dispose d'un droit de modification
- le groupe d'utilisateurs `Manager` n'a qu'un droit de visualisation
Maintenant, imaginez que Marie est à la fois dans le groupe d'utilisateurs `Fournisseur` et dans le groupe d'utilisateurs `Manager`. Elle aura le droit de modification sur la ressource `main_picture_tshirt_divided.png`.

## L'option `Appliquer les changements aux sous-catégories`

Dans l'onglet `Autorisations`, il y a une option appelée `Appliquer les changements aux sous-catégories`. Cette option est cochée par défaut. Cela signifie que les permissions que vous avez accordées à votre catégorie actuelle s'appliqueront à toutes ses sous-catégories.  

Comme vous pouvez le voir dans l'exemple ci-dessous, l'option `Appliquer les changements aux sous-catégories` est cochée pour la catégorie parent. Ainsi, toutes ses sous-catégories auront exactement la même configuration de groupes d'utilisateurs pour les droits de visualisation et de modification. 

![image](Settings_AssetCategoriesPermissionsApplytoAllChildren_fr.png)
