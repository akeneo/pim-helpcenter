---
id: manage-the-web-api-permissions
themes: permissions-settings
title: Gérer vos permissions des **API Web**
popular: false
ee-only: false
related: build-your-user-roles, what-is-a-role, what-is-a-user, manage-the-interface-and-actions-accesses
---

# Définir les autorisations sur l'API Web

Les autorisations sur l'[API Web](https://api.akeneo.com) sont accordées en fonction du(des) [rôle(s) de l'utilisateur](what-is-a-role.html).

Pour modifier les autorisations de l'API Web pour un rôle d'utilisateur :
1. Allez sur `Système` et cliquez sur l'entrée du menu `Rôles`
1. Cliquez sur le rôle à modifier
1. Cliquez sur l'onglet `Autorisations de l'API Web`
    ![image](System_Roles_WebAPIPermissions_fr.png)
1. Cochez / décochez les autorisations souhaitées
1. Cliquez sur le bouton `Enregistrer` pour confirmer vos modifications.

Les sections suivantes vous donneront une explication détaillée de ce que chaque autorisation accorde. N'hésitez pas à y jeter un coup d'oeil.

# Donner l'accès global
Il existe une autorisation qui donne l’accès à l'API Web. Celle-ci s'appelle `Accès API Web général`.

Les utilisateurs dotés d'au moins un rôle ayant cette autorisation, auront accès à l'API. Cela signifie qu'ils pourront utiliser les endpoints de l’API (en fonction des droits sur chaque endpoint, cf section suivante).

Si cette option est désactivée, les utilisateurs dotés uniquement de ce rôle ne pourront pas appeler les endpoints de l'API.

# Donner l'accès par endpoints
Vous pouvez également préciser les endpoints que vous souhaitez que vos utilisateurs d'API puissent appeler.

Les tableaux suivants récapitulent les autorisations que vous trouverez pour limiter l'accès à l'API, endpoint par endpoint.

:::info
Les appels API se font via :
- GET : pour récupérer les informations contenues dans le PIM
- POST : pour créer les données dans le PIM
- PATCH : pour créer ou mettre à jour les données dans le PIM
:::

| Endpoints des Attributs           |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les attributs | Donne l'autorisation de POST et PATCH sur le endpoint d'attribut |
| Liste des attributs | Donne la permission de GET sur le endpoint d'attribut |

| Endpoints des options d'attribut  |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les options d'attributs | Donne l'autorisation de POST et PATCH sur le endpoint des options d'attributs |
| Liste les options d'attributs | Donne la permission de GET sur le endpoint des options d'attributs |

| Endpoints des Catégories          |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les catégories | Donne la permission de POST et PATCH sur le endpoint des catégories |
| Liste des catégories | Donne la permission de GET sur le endpoint des catégories |

| Endpoints des familles            |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les familles | Donne la permission de POST et de PATCH sur le endpoint des familles |
| Liste des familles | Donne la permission de GET sur le endpoint des familles |

| Endpoints des variantes de famille|                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les variantes de famille | Donne la permission de POST et de PATCH sur le endpoint des variantes de famille |
| Liste des variantes de famille | Donne la permission de GET sur le endpoint des variantes de famille |

| Endpoints des canaux              |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les canaux | Donne la permission de POST et PATCH sur le endpoint des canaux |
| Liste des canaux | Donne la permission de GET sur le endpoint des canaux |

| Endpoints des locales             |                                          |
|:----------------------------------|:-----------------------------------------|
| Liste des locales | Donne l'autorisation de GET sur le endpoint des locales |

| Endpoints des groupes d'attributs   |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les groupes d'attributs | Donne l'autorisation de POST et PATCH sur le endpoint des groupes d'attributs |
| Liste des groupes d'attributs | Autorise GET sur le endpoint des groupes d'attributs |

| Endpoints des devises             |                                          |
|:----------------------------------|:-----------------------------------------|
| Liste des devises | Donne la permission de GET sur le endpoint des devises |

| Endpoints des types d'association |                                          |
|:----------------------------------|:-----------------------------------------|
| Créer et mettre à jour les types d'association | Donne l'autorisation de POST et de PATCH sur le endpoint des types d'association |
| Liste des types d'association | Donne la permission de GET sur le endpoint des types d'association |

Pour plus de détails sur ces autorisations, consultez notre [section dédiée](https://api.akeneo.com/documentation/security.html#authorization) dans la documentation de l'API.
