---
id: manage-the-interface-and-actions-accesses
themes: permissions-settings
title: Gérer les accès à l'**interface et aux actions**
popular: false
ee-only: false
related: build-your-user-roles, what-is-a-role, what-is-a-user, manage-the-web-api-permissions
---

# Vue d'ensemble

Les autorisations sur les actions et sur les parties de l'interface sont accordées en fonction du(des) [rôle(s) de l'utilisateur](what-is-a-role.html).

Pour modifier les autorisations d'un rôle d'utilisateur :
1. Allez dans `Système` et cliquez sur le menu `Rôles`
1. Cliquez sur le rôle à modifier
1. Cliquez sur l'onglet `Autorisations`
    ![image](System_Roles_Permission_fr.png)
1. Cochez/décochez les autorisations que vous voulez
1. Cliquez sur le bouton `Enregistrer` pour confirmer vos modifications

Pour presque chaque écran et bouton du PIM, vous pouvez dire si un utilisateur peut le voir/utiliser ou non. Les sections suivantes énumèrent tous les droits et les fonctionnalités qui y sont attachés, selon la partie de l'application où ils se trouvent.

# Droits sur les pages produits

## Autorisations sur les produits

| Nom de l'autorisation                                   | Effet sur l'interface |
|---------------------------------------------------------|--------------|
| Abonnement de produits à Franklin Insights              | EFFET INCONNU A CE JOUR |
| Supprimer les associations d'un produit                 | L'utilisateur peut supprimer une association dans l'onglet `Associations` en utilisant la croix |
| Ajouter un produit à des groupes                        | L'utilisateur peut ajouter des produits au groupe, dans `Paramètres` / `Groupes` il verra l'onglet `Produits` |
| Ajouter des associations à un produit                   | L'utilisateur peut ajouter des associations dans l'onglet `Associations` en utilisant le bouton `Ajouter des associations` |
| Afficher les associations d'un produit                  |  L'utilisateur peut voir le menu `Associations` dans la fiche produit  |
| Consulter les catégories d'un produit                   | L'utilisateur peut voir le menu `Catégories` dans la fiche produit |
| Changer la famille du produit                           | L'utilisateur peut modifier la famille du produit dans le panneau à gauche de la fiche produit (hors variante) |
| Changer l'état du produit                               | L'utilisateur peut changer l'état du produit : `activé` ou `désactivé` directement dans le panneau à gauche de la fiche produit |
| Commenter les produits                                  | L'utilisateur peut voir le menu `Commentaires` dans la fiche produit |
| Créer un produit                                        | L'utilisateur peut créer un nouveau produit dans la grille des produits en cliquant sur le bouton `Créer` |
| Télécharger le produit en PDF                           | L'utilisateur pourra générer un fichier PDF contenant toutes les informations sur le produit en utilisant le bouton `PDF` dans le menu déroulant `...` en haut de la fiche produit |
| Modifier les attributs du produit                       | L'utilisateur peut modifier les attributs du produit sous le menu `Attributs` de la fiche produit |
| Afficher l'historique du produit                        | L'utilisateur peut voir le menu `Historique` dans la fiche produit |
| Liste des produits                                      | L'utilisateur peut voir la liste des produits dans plusieurs pages : sur la grille des produits dans le menu `Produits`, ainsi que dans le menu `Associations` de la fiche produit, dans `Groupes`... |
| Actions d'édition en masse des produits                 | L'utilisateur peut effectuer des actions de masse sur la grille des produits |
| Supprimer un produit                                    | L'utilisateur peut supprimer un produit du PIM en utilisant le bouton `Supprimer` dans le menu déroulant `...` en haut de la fiche produit, ou en utilisant directement l'icône de la corbeille dans la grille des produits |
| Supprimer un attribut d'un produit                      | L'utilisateur peut supprimer un attribut d'un produit en utilisant l'icône `croix` à côté des attributs ajoutés au produit |
| Supprimer une ressource d'une collection _(seulement en EE)_ | L'utilisateur peut supprimer une ressource en utilisant la croix |
| Liste les catégories de ressources dans le sélecteur d'éléments _(seulement en EE)_ | L'utilisateur peut accéder au bouton `Gérer les ressources` pour ouvrir le sélecteur de ressources et lister les catégories de ressources |
| Restaurer un produit _(seulement en EE)_                | L'utilisateur peut restaurer une version précédente d'un produit en utilisant le bouton `Restaurer` dans la page d'historique du produit |
| Gérer les produits publiés _(seulement en EE)_          | L'utilisateur peut accéder à la grille des produits publiés en cliquant sur le bouton `Produits publiés` dans le menu déroulant `...` en haut de la grille des produits |


## Autorisations sur les modèles de produits

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Afficher les catégories d'un modèle de produit | L'utilisateur peut voir le menu `Catégories` dans la fiche produit d'un modèle de produit |
| Créer un modèle de produit | L'utilisateur peut créer un nouveau modèle de produit dans la grille de produits à l'aide du bouton `Créer` |
| Modifier les attributs du modèle de produit | L'utilisateur peut modifier les attributs d'un modèle de produit sous le menu `Attributs` de la fiche produit d'un modèle de produit |
| Afficher l'historique d'un modèle de produit | L'utilisateur peut voir le menu `Historique` dans la fiche produit d'un modèle de produit |
| Supprimer un modèle de produit | L'utilisateur peut supprimer un modèle de produit du PIM à l'aide du bouton `Supprimer` dans le menu déroulant `...` en haut de la fiche produit, ou en utilisant directement l'icône Corbeille dans la grille produit |


# Droits sur les ressources
## Autorisations sur les ressources _(seulement en EE)_

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Consulter les catégories d'une ressource | L'utilisateur peut voir les catégories des ressources, sous l'onglet `Catégories` de la page de ressources |
| Créer une ressource | L'utilisateur peut créer une nouvelle ressource, en utilisant le bouton `Créer une ressource` dans `Ressources` |
| Enrichir les ressources | L'utilisateur peut accéder à la page de ressources |
| Envoi en masse des ressources | L'utilisateur peut charger en masse des ressources dans `Ressources` en cliquant sur `Télécharger les ressources` dans le menu déroulant `...` |
| Supprimer une ressource | L'utilisateur peut supprimer une ressource en cliquant sur `Supprimer` dans le menu déroulant `...` de la page de modification des ressources. Il peut également utiliser l'action de masse pour supprimer en masse des ressources |


## Autorisations sur les catégories des ressources _(seulement en EE)_

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer une catégorie de ressources | L'utilisateur peut créer une nouvelle catégorie de ressources en cliquant avec le bouton droit de la souris sur l'arborescence et en sélectionnant `Créer une nouvelle catégorie` dans `Paramètres` / `Catégories de ressources` |
| Modifier une catégorie de ressources | L'utilisateur peut modifier les catégories des ressources |
| Afficher l'historique des catégories de ressources | L'utilisateur peut accéder à l'onglet `Historique` des catégories de ressources |
| Liste des catégories de ressources | L'utilisateur peut voir et accéder à toutes les catégories de ressources et arborescences de catégories de ressources listées dans `Paramètres` / `Catégories de ressources` |
| Gérer les autorisations de category de ressources | L'utilisateur a accès à l'onglet `Autorisations` du formulaire des catégories de ressources |
| Supprimer une catégorie de ressources | L'utilisateur peut supprimer une catégorie de ressources en cliquant sur `Supprimer` dans le menu déroulant `...` |

# Droits sur les entités référentielles _(seulement en EE)_

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Ajouter un attribut à une entité référentielle | L'utilisateur peut ajouter un attribut à une entité référentielle dans l'onglet `Attributs`, en utilisant le bouton `Ajouter un attribut` |
| Supprimer un attribut d'une entité référentielle | L'utilisateur peut supprimer un attribut d'une entité référentielle dans l'onglet `Attributs`, en utilisant le bouton `Supprimer l'attribut` |
| Modifier un attribut d'une entité référentielle | L'utilisateur peut modifier un attribut d'une entité référentielle dans l'onglet `Attributs`, en utilisant l'icône `Modification` |
| Supprimer une option | L'utilisateur peut supprimer une option d'un attribut d'options unique ou multiple dans l'onglet `Attributs`, en utilisant le bouton `Gérer les options` et la croix dans la liste des options |
| Modifier les options | L'utilisateur peut gérer les options d'un attribut d'options unique ou multiple dans l'onglet `Attributs`, en utilisant le bouton `Gérer les options` |
| Créer un enregistrement | L'utilisateur peut ajouter un enregistrement à une entité référentielle dans l'onglet `Enregistrements`, en utilisant le bouton `Créer` |
| Supprimer un enregistrement | L'utilisateur peut supprimer un enregistrement dans l'onglet `Enregistrements`, en utilisant l'icône de suppression dans la grille ou en cliquant sur `...` pour d'autres actions et ensuite sur `Supprimer` dans le formulaire d'enregistrement |
| Supprimer tous les enregistrement de l'entité | L'utilisateur peut supprimer tous les enregistrements d'une entité référentielle dans l'onglet `Enregistrements`, en cliquant sur `...` pour les autres actions puis sur `Supprimer tous les enregistrements` |
| Modifier les enregistrements | L'utilisateur peut modifier un enregistrement d'une entité référentielle dans l'onglet `Enregistrements`, en utilisant l'icône `Modifier` de la grille ou en double-cliquant sur l'enregistrement |
| Liste des produits liés à l'enregistrement | L'utilisateur peut lister les produits liés à une nouvelle entité référentielle via l'onglet `Produits` |
| Créer une entité | L'utilisateur peut créer une nouvelle entité référentielle dans le menu `Entités`, en utilisant le bouton `Créer` |
| Supprimer une entité | L'utilisateur peut supprimer une entité référentielle dans l'onglet `Propriétés`, en cliquant sur `...` pour d'autres actions et ensuite sur `Supprimer une entité` |
| Modifier les propriétés de l'entité | L'utilisateur peut modifier les propriétés d'une entité référentielle dans l'onglet `Propriétés` |
| Gérer les permissions d’entité référentielle | L'utilisateur peut définir les autorisations d'une entité référentielle dans l'onglet `Autorisations` |

# Droits sur les profils d'export

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Télécharger les fichiers exportés | L'utilisateur peut télécharger un fichier d'export généré dans la page d'exécution du profil d'export en utilisant le bouton `Télécharger le fichier généré` |
| Télécharger le rapport d'export | L'utilisateur peut télécharger le journal du fichier exporté à l'aide du bouton `Télécharger le journal` dans le menu déroulant `...` en haut de la page d'exécution du profil d'export |
| Visualiser la liste des rapports d'export | L'utilisateur peut accéder à la liste des fichiers exportés dans la section `Dernières opérations` d'un profil d'export |
| Visualiser les détails du rapport d'export | L'utilisateur peut cliquer sur l'icône `Œil` pour vérifier les détails du rapport, dans la section `Dernières opérations` d'un profil d'export |
| Modifier le contenu d'un profil d'export | L'utilisateur peut personnaliser le contenu d'un profil d'export de produit. Sur un profil d'export, il peut cliquer sur le bouton `Modifier` et passer sous l'onglet `Contenu` |
| Voir le contenu d'un profil d'export | L'utilisateur peut voir le contenu d'un profil d'export de produit. Sur un profil d'export, il peut cliquer sur l'onglet `Contenu` |
| Créer un profil d'export | L'utilisateur peut créer un nouveau profil d'export dans `Exports` en utilisant le bouton `Créer un profil d'export` |
| Modifier un profil d'export | L'utilisateur peut modifier un profil d'export. Sur un profil d'export, il peut voir le bouton `Editer` et un raccourci la ligne du profil d'export |
| Afficher l'historique du profil d'export | L'utilisateur peut accéder à l'onglet `Historique` d'un profil d'export |
| Visualiser la liste des profils d'export | L'utilisateur peut accéder au menu `Exportations` pour voir la liste des profils d'export |
| Lancer un profil d'export | L'utilisateur peut lancer une export en utilisant le bouton `Exporter maintenant` dans une page de profil d'export |
| Modifier les propriétés générales d'un profil d'export | L'utilisateur peut modifier les propriétés générales d'un profil d'export. Après avoir sélectionné un travail d'export spécifique, il verra le bouton `Modifier` et un raccourci sur la ligne de profil d'export |
| Voir les propriétés générales d'un profil d'export | L'utilisateur peut afficher les propriétés générales d'un profil d'export. Après avoir sélectionné une tâche d'export spécifique, il pourra accéder à l'onglet `Propriétés générales` de l'export |
| Supprimer un profil d'export | L'utilisateur peut supprimer un profil d'export en utilisant le bouton `Supprimer` dans le menu déroulant `...`, lors de la modification du formulaire de profil d'export. Il peut également le supprimer en cliquant sur l'icône de la corbeille dans la grille des profils d'export.    |
| Voir le profil d'export | L'utilisateur peut afficher les informations d'un profil d'export |
| Gérer les permissions par profils d'export _(seulement en EE)_ | L'utilisateur peut accéder et modifier les autorisations pour exécuter et modifier le profil de poste. Il verra l'onglet `Autorisations` dans la page d'édition d'un profil d'export |

# Droits sur les profils d'import

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Télécharger les fichiers importés | L'utilisateur peut télécharger le fichier importé dans la page d'exécution du profil d'import en utilisant le bouton `Télécharger les fichiers lus` |
| Télécharger le rapport d'import | L'utilisateur peut télécharger le journal du fichier importé dans la page d'exécution du profil d'import en utilisant le bouton `Télécharger les logs` dans le menu déroulant `...` |
| Visualiser la liste des rapports d'import | L'utilisateur peut accéder à la liste des exécutions dans la section `Dernières exécutions` d'un profil d'import |
| Visualiser les détails du rapport d'import | L'utilisateur peut cliquer sur l'icône `Œil` pour vérifier les détails du rapport, dans la section `Dernières exécutions` d'un profil d'import |
| Créer un profil d'import | L'utilisateur peut créer un nouveau profil d'import dans `Import` en utilisant le bouton `Créer un profil d'import` |
| Modifier un profil d'import | L'utilisateur peut modifier un profil d'import. Sur un profil d'import, il peut voir le bouton `Modifier` et un raccourci la ligne du profil d'import |
| Afficher l'historique du profil d'import | L'utilisateur peut accéder à l'onglet `Historique` d'un profil d'import |
| Visualiser la liste des profils d'import | L'utilisateur peut accéder au menu `Import` pour voir la liste des profils d'import |
| Lancer un profil d'import | L'utilisateur peut lancer un import en utilisant les boutons `Importer maintenant` et `Déposer un fichier` dans la page du profil d'import |
| Supprimer un profil d'import | L'utilisateur peut supprimer un profil d'import à l'aide du bouton `Supprimer` du formulaire de profil d'import. Il peut également le supprimer en cliquant sur l'icône de la corbeille dans la grille des profils d'import |
| Voir le profil d'import | L'utilisateur peut afficher les informations d'un profil d'import |
| Gérer les permissions par profils d'import _(seulement en EE)_ | L'utilisateur peut accéder et modifier les autorisations d'exécuter et de modifier le profil d'import. Il verra l'onglet `Autorisations` dans la page de modification d'un profil d'import |

# Droits sur les Paramètres

## Autorisations sur les types d'association

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer un type d'association | L'utilisateur peut voir et cliquer sur le bouton `Créer un type d'association` dans `Paramètres` / `Types d'association` |
| Modifier un type d'association | L'utilisateur peut éditer les types d'association sous `Paramètres` / `Types d'association` |
| Afficher l'historique du type d'association | L'utilisateur peut accéder à l'onglet `Historique` des types d'association. Il doit également avoir l'autorisation d'éditer un type d'association |
| Liste des types d'association | L'utilisateur peut voir et accéder à l'entrée de menu `Paramètres` / `Types d'association` |
| Supprimer un type d'association | L'utilisateur peut supprimer un type d'association sous `Paramètres` / `Types d'association` via la grille des types d'association ou via le menu déroulant `...` lorsqu'il se trouve sur une page de type association |

## Autorisations sur les attributs

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|  
| Créer un attribut | L'utilisateur peut voir la fin cliquer sur le bouton `Créer un attribut` dans `Paramètres` / `Attributs` |
| Modifier un attribut   | L'utilisateur peut modifier les propriétés de l'attribut sous `Paramètres` / `Attributs` |
| Afficher l'historique de l'attribut | L'utilisateur peut accéder à l'onglet `Historique` des attributs    |
| Liste des attributs | L'utilisateur peut voir et accéder à l'entrée de menu `Paramètres` / `Attributs` |
| Supprimer un attribut | L'utilisateur peut supprimer un attribut sous l'entrée de menu `Paramètres` / `Attributs`  |
| Trier les attributs au sein d'un groupe d'attributs | L'utilisateur peut trier les attributs par glisser-déposer, sous l'entrée de menu `Paramètres` / `Attributs` dans l'onglet `Attributs` d'un groupe d'attributs |


## Autorisations sur les groupes d'attributs

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Ajouter l'attribut à un groupe | L'utilisateur peut accéder au menu déroulant `Ajouter des attributs` sous l'onglet `Attributs` dans `Paramètres` / `Groupes d'attributs`  |
| Créer un groupe d'attributs | L'utilisateur peut voir et cliquer sur le `Créer` dans `Paramètres` / `Groupes d'attributs` |
| Modifier un groupe d'attributs | L'utilisateur peut modifier un groupe d'attributs sous l'entrée de menu `Paramètres` / `Groupes d'attributs`  |
| Afficher l'historique du groupe d'attributs | L'utilisateur peut accéder à l'onglet `Historique` des groupes d'attributs |
| Liste des groupes d'attributs | L'utilisateur peut voir et accéder à tous les groupes d'attributs listés sous `Paramètres` / `Groupes d'attributs` |
| Supprimer un groupe d'attributs | L'utilisateur peut supprimer un groupe d'attributs sous l'entrée de menu `Paramètres` / `Groupes d'attributs` |
| Supprimer l'attribut d'un groupe | L'utilisateur peut supprimer un attribut du groupe d'attributs, en cliquant sur l'icône de la corbeille |
| Trier les groupes d'attributs | L'utilisateur peut trier les groupes d'attributs par glisser-déposer vers le haut et vers le bas |
| Gérer les permissions par groupes d'attributs _(seulement en EE)_ | L'utilisateur peut accéder à l'onglet `Autorisations` du groupe d'attributs et définir les autorisations sur ces derniers |


## Autorisations sur les catégories

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer une catégorie | L'utilisateur peut créer une nouvelle catégorie en cliquant avec le bouton droit de la souris sur l'arbre et en cliquant sur le bouton `Créer une nouvelle catégorie` dans l'entrée de menu `Paramètres` / `Catégories` |
| Modifier une catégorie | L'utilisateur peut modifier une catégorie |
| Afficher l'historique de la catégorie | L'utilisateur peut accéder à l'onglet `Historique` des catégories |
| Liste des catégories | L'utilisateur peut voir et accéder à toutes les catégories et arborescences de catégories listées sous l'entrée de menu `Paramètres` / `Catégories` |
| Supprimer une catégorie | L'utilisateur peut supprimer une catégorie à l'aide du bouton `Supprimer` |
| Gérer les permissions par catégories _(seulement en EE)_ | L'utilisateur a accès à l'onglet `Autorisations` d'une catégorie |

## Autorisations sur les canaux

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer un canal | L'utilisateur peut créer un nouveau canal avec le bouton `Créer un canal` dans les `Paramètres` / `Canaux` |
| Modifier un canal | L'utilisateur peut modifier les informations d'un canal |
| Afficher l'historique du canal | L'utilisateur peut accéder à l'onglet `Historique` des canaux |
| Liste des canaux | L'utilisateur peut voir et accéder à tous les canaux listés sous `Paramètres` / `Canaux` |
| Supprimer un canal | L'utilisateur peut supprimer un canal sur la page du canal à l'aide du bouton `Supprimer`  |

## Autorisations sur les devises

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Liste des devises | L'utilisateur peut voir toutes les devises (actives et inactives) listées dans les `Paramètres` / `Devises` |
| Activer / désactiver des devises | L'utilisateur peut activer/désactiver les devises à l'aide du bouton `Changer le statut` situé sur le côté droit de la grille |

## Autorisations sur les familles

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer une famille | L'utilisateur peut créer une nouvelle famille avec le bouton `Créer une famille` dans le menu `Paramètres` / `Familles` |
| Modifier les attributs d'une famille | L'utilisateur peut modifier les attributs d'une famille, dans l'onglet `Attributs` |
| Modifier les propriétés d'une famille | L'utilisateur peut modifier les propriétés d'une famille, dans l'onglet `Propriétés` |
| Modifier une variante de famille | L'utilisateur peut modifier les variantes de famille, dans l'onglet `Variantes` |
| Afficher l'historique de la famille |  L'utilisateur peut accéder à l'onglet `Historique` des familles |
| Liste des familles | L'utilisateur peut voir et accéder à toutes les familles listées sous la rubrique `Paramètres` / `Familles` |
| Supprimer une famille | L'utilisateur peut supprimer une famille sur la page de la famille à l'aide du bouton `Supprimer` |
| Supprimer une variante de famille | L'utilisateur peut supprimer une variante de famille sur la page des variantes de famille à l'aide du bouton `corbeille` |

## Autorisations sur les groupes

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer un groupe | L'utilisateur peut créer un nouveau groupe avec le bouton `Créer un groupe` dans les `Paramètres` / `Groupes` |
| Modifier un groupe | L'utilisateur peut modifier les propriétés du groupe |
| Afficher l'historique du groupe | L'utilisateur peut accéder à l'onglet `Historique` des groupes |
| Liste des groupes | L'utilisateur peut voir et accéder à tous les groupes listés sous le menu `Paramètres` / `Groupes` |
| Supprimer un groupe | L'utilisateur peut supprimer un groupe de la page du groupe à l'aide du bouton `Supprimer`   |

## Autorisations sur les types de groupes

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Créer un type de groupe | L'utilisateur peut créer un nouveau type de groupe avec le bouton `Créer des types de groupe` dans `Paramètres` / `Types de groupe` |
| Modifier un type de groupe   | L'utilisateur peut modifier les propriétés du type de groupe   |
| Liste des types de groupe | L'utilisateur peut voir les types de groupe dans `Paramètres` / `Types de groupe` |
| Supprimer un type de groupe | L'utilisateur peut supprimer un type de groupe sur la page du type de groupe à l'aide du bouton `Supprimer` |

## Autorisations sur les locales

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Liste des locales | L'utilisateur peut voir les locales dans `Paramètres` / `Locales` |
| Gérer les permissions par locales _(seulement en EE)_ | L'utilisateur peut gérer les autorisations pour les utilisateurs sous l'onglet `Autorisations` dans la page des locales |

## Autorisations sur les règles _(seulement en EE)_

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Supprimer les règles  | L'utilisateur peut supprimer des règles dans `Paramètres` / `Règles`, en utilisant l'icône poubelle ou l'action de masse `Supprimer`       |
| Exécuter les règles | L'utilisateur peut exécuter des règles dans `Paramètres` / `Règles`, en utilisant l'icône `Exécuter`, le bouton du haut `Exécuter les règles` ou l'action de masse `Exécuter` |
| Calculer le nombre de produits affectés par les règles | L'utilisateur peut exécuter l'action de masse `Calculer les produits affectés` pour voir combien de produits sont affectés par une règle |
| Afficher les règles | L'utilisateur peut voir les règles actives dans `Paramètres` / `Règles` |


# Autorisations sur les pages Système

| Nom de l'autorisation     | Effet sur l'interface |
|---------------------------|--------------|
| Configuration système | L'utilisateur peut accéder à `Système` / `Configuration`    |
| Gérer le Single Sign-On (SSO) | L'utilisateur peut accéder à `Système` / `Single Sign-On basée sur SAML` |
| Gérer la connection à Franklin Insights | L'utilisateur peut accéder à `Système` / `Connexion à Franklin Insights` |
| Créer un groupe d'utilisateurs  | L'utilisateur peut créer un nouveau groupe d'utilisateurs dans le PIM. Il peut cliquer sur `Système` / `Groupes` puis utiliser le bouton `Créer un groupe` pour ajouter un nouveau groupe d'utilisateurs |
| Supprimer un groupe d'utilisateurs  | L'utilisateur peut supprimer un groupe d'utilisateurs du PIM à l'aide du bouton `Supprimer` dans le menu déroulant `...` de la page du groupe d'utilisateurs |
| Modifier les groupes d'utilisateurs | L'utilisateur peut modifier les groupes d'utilisateurs, il verra le bouton `Enregistrer` dans la page de modification des groupes d'utilisateurs |
| Liste des groupes d'utilisateurs | L'utilisateur verra la liste des groupes d'utilisateurs dans `Système` / `Groupes d'utilisateurs` |
| Créer un rôle  | L'utilisateur peut créer un nouveau rôle dans le PIM. Il peut cliquer sur `Système` / `Rôles` et ensuite utiliser le bouton `Créer un rôle` pour ajouter un nouveau rôle |
| Supprimer un rôle | L'utilisateur peut supprimer un rôle du PIM en utilisant le bouton `Supprimer` dans le menu déroulant `...` de la page des rôles |
| Modifier un rôle | L'utilisateur peut modifier les rôles, il verra le bouton `Enregistrer` dans la page de modification des rôles |
| Liste des rôles | L'utilisateur verra la liste des rôles dans `Système` / `Rôles` |
| Créer un utilisateur | L'utilisateur peut créer un nouvel utilisateur dans le PIM. Il peut cliquer sur `Système` / `Utilisateurs` puis utiliser le bouton `Créer un utilisateur` pour ajouter un nouvel utilisateur |
| Supprimer un utilisateur | L'utilisateur peut supprimer un utilisateur du PIM à l'aide du bouton `Supprimer` dans la page de les utilisateurs |
| Modifier les utilisateurs | L'utilisateur peut modifier les utilisateurs, il verra le bouton `Enregistrer` dans la page de modification des utilisateurs |
| Liste des utilisateurs | L'utilisateur verra la liste des utilisateurs dans `Système` / `Utilisateurs` |
| Informations système | L'utilisateur verra le menu `Informations système` sous `Système`. Il pourra télécharger ces informations à l'aide du bouton `TXT` |
| Gérer les connexions API | L'utilisateur peut accéder à la page `Système` / `Connexions API`  |
| Voir les processus exécutés | L'utilisateur peut accéder à la page `Activité` / `Tracker de processus`  |
