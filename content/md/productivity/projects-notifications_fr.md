---
id: projects-notifications
themes: boost-your-productivity
title: Comprendre vos **notifications** des projets
popular: false
ee-only: true
---

# Vue d'ensemble

Avec l'assistant de travail collaboratif (aka Teamwork Assistant), vous pouvez suivre l'avancement de l'enrichissement de vos produits et recevoir des notifications liées aux [projets](what-is-a-project.html).

Un utilisateur sera averti quand :
- un nouveau projet sur lequel il doit travailler est créé
- ses tâches ne sont pas achevées à 100 % 7, 3 ou 1 jours avant la date d'échéance
- le projet est terminé

Les notifications sont automatiques. Un contributeur est averti lorsqu'il/elle a du travail à faire : des attributs obligatoires et encore vides sont à remplir.

::: panel-link Projets?![Si vous ne savez pas ce qu'est un projet, nous avons un article juste pour vous ! :wink:](what-is-a-project.html)
:::

# Qui est notifié ?

En fonction du canal, de la locale, de la catégorie du projet, les contributeurs ayant un droit de modification sur le groupe d'attributs, la catégorie et la locale seront notifiés dans le centre de notification PIM s'ils ont des attributs vides à enrichir.

# Un exemple concret

Un projet _«FR Collection Sacs Printemps 2019»_ a été créé pour la locale fr_FR, le canal E-commerce et pour la catégorie sacs.

Trois utilisateurs ont les permissions de modification ou de visualisation sur la locale fr_FR et sur la catégorie Sacs, ils travailleront tous sur ce projet.

- **Marie** est assistante marketing, elle a la permission de modification les groupes d'attributs Marketing et Design.
- **Tony** est stagiaire au service Achats, il n'a qu'une permission de visualisation sur le groupe d'attributs Achats.
- **Bob** est un assistant qualité, il a la permission de modification le groupe d'attributs Qualité.

Voici un petit tableau résumant les cas dans lesquels les 3 utilisateurs seront notifiés.

|**Attributs et utilisateurs ayant des permissions** |   **L'attribut est-il rempli ?** | **L'attribut est-il requis dans la complétude ?** | **L'utilisateur sera-t-il averti ?** |
|:--------------------------------------------|:--------------------------------|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| _Marketing (Marie)_                         |                                 |                                                 |                                                                                                                |
| Nom                                         | OUI                             | OUI                                             | Non, Marie ne sera pas notifiée puisque l'attribut est déjà rempli.                                               |
| Date de lancement                           | NON                             | OUI                                             | Oui, Marie sera notifiée puisque l'attribut n'est pas rempli.                                               |
| Prix                                        | NON                             | NON                                             | Non, Marie ne sera pas notifiée puisque l'attribut n'est pas requis pour la complétude.                                           |
| _Design (Marie)_                            |                                 |                                                 |                                                                                                                |
| Couleur principale                          | OUI                             | NON                                             | Non, Marie ne sera pas notifiée puisque l'attribut n'est pas requis pour la  complétude.                                           |
| Style de Sac                                | NON                             | OUI                                             | Oui, Marie sera notifiée puisque l'attribut n'est pas rempli.                                               |
| _Achats (Tony)_                             |                                 |                                                 |                                                                                                                |
| Marque                                      | OUI                             | OUI                                             | Non, Tony ne sera pas notifié puisque l'attribut est déjà rempli. De toute façon, Tony n'a que des permissions de visualisation. |
| Fournisseur                                 | OUI                             | OUI                                             | Non, Tony ne sera pas notifié puisque l'attribut est déjà rempli. De toute façon, Tony n'a que des permissions de visualisation. |
| _Qualité (Bob)_                             |                                 |                                                 |                                                                                                                |
| Rapports de tests                           | NON                             | OUI                                             | Oui, Bob sera notifiée puisque l'attribut n'est pas rempli.                                               |
| Matériels                                   | NON                             | OUI                                             | Oui, Bob sera notifiée puisque l'attribut n'est pas rempli.                                               |

Marie sera notifiée une fois lors de la création du projet pour enrichir la date de sortie et le style de sac, car ces attributs sont vides et obligatoires.

Tony ne sera pas notifié car il n'a que des droits de visualisation sur le groupe d'attributs Achats - seuls les utilisateurs ayant des droits de modification peuvent réellement travailler sur le projet et donc être notifiés.

Bob sera notifié pour enrichir les rapports de tests et les attributs matériels appartenant au groupe d'attributs Qualité.

Le créateur du projet et les contributeurs seront avertis lorsque le projet sera calculé.

# Renseignements supplémentaires

Les contributeurs et le créateur du projet sont avertis à différentes étapes d'un projet :

1.  Lors de la création du projet
1.  Au rappel de la date d'échéance : lorsqu'un projet n'est pas terminé à 100 %, 7, 3 et 1 jours avant la date d'échéance
1.  A la fin du projet : lorsqu'un projet est terminé à 100%

::: info
Notre guide du développeur (aussi appelé notre Cookbook) contient des informations supplémentaires sur la façon de personnaliser les notifications et de modifier le nombre de jours par défaut pour le rappel : [Voir Personnaliser la notification](https://docs.akeneo.com/latest/manipulate_pim_data/teamwork_assistant/customize_notification.html#overview).
:::
