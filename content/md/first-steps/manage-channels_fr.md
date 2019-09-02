---
id: manage-your-channels
themes: catalog-settings
title: Gérer vos **canaux**
popular: false
ee-only: false
related: what-is-a-channel
---

# Lister les canaux

Pour voir vos canaux actuels, allez dans `Paramètres / Canaux`.

![Liste des canaux](Settings_Channels_fr.png)

# Créer un canal

:::info
Vous devez disposer d'une autorisation spécifique pour pouvoir créer un canal.
:::

Pour créer un canal:
1. Allez dans `Paramètres / Canaux`
1. Cliquez sur le bouton `Créer un canal`
![Créer un canal](Settings_Channels_Create_fr.png)
1. Le formulaire de création d'un canal est affiché
1. Fournissez des informations pour tous les champs obligatoires de l'onglet Propriétés, telles que:
    - Un **code unique** pour identifier le canal dans le PIM
    - Les **devises** pour le canal
    - Les **locales** à activer pour le canal : ces informations seront utilisées pour sélectionner les informations de produit à exporter pour ce canal (via la sélection de locales et de devises)
    - L'arborescence attendue **des catégories** pour le canal : cette information sera utilisée pour sélectionner les produits à exporter pour ce canal (via la sélection de l'arborescence)
    - Les **libellés** pour les locales activées
    - L'**unité de conversion** pour chaque attribut de métrique qui sera utilisé lors de l'exportation du produit
1. Cliquez sur le bouton `Enregistrer`

Le canal est maintenant créé.

:::info
Un canal ne peut être lié qu'à une seule arborescence de catégories.
:::

# Editer un canal

Pour éditer un canal:
1. Allez dans `Paramètres / Canaux`
1. Cliquez sur le canal que vous souhaitez éditer
1. Faites vos changements
1. Cliquez sur le bouton `Enregistrer`

Le canal est mis à jour en conséquence. Les changements sont reflétés dans le PIM dans les minutes qui suivent.


# Voir les transformations de ressources du canal (EE uniquement)

:::ee
Si vous êtes un client Enterprise Edition et que vous utilisez le Product Asset Manager, vous pouvez vérifier les transformations des ressources en cours sous l’onglet `Transformations de la ressource`.
:::

Pour consulter la transformation des ressources d'un canal, cliquez sur l'onglet `Transformation de la ressource`.

![image](Settings_ChannelsAssetstransformations_fr.png)

Pour modifier ou ajouter des transformations de ressources, veuillez vous reporter à [À propos des transformations de ressources](assets-transformation.html).

# Vérifier l'historique du canal

Les modifications apportées sur un canal sont enregistrées et visibles dans l'onglet `Historique` des canaux. Par exemple : changement de libellés, changement d'attribut, etc.

Pour chaque changement, une version du canal est créée. Les informations suivantes sont historisées pour chaque version:

- La personne ou le système qui a généré les changements
- la date et l'heure (en secondes) auxquelles les changements ont eu lieu
- l'ancienne valeur et la nouvelle valeur de chaque champ modifié

Pour afficher les versions d'un canal:
1. Ouvrez et éditez l'onglet de canal
1. Cliquez sur l'onglet `Historique`, la liste des versions sera affichée.

:::info
Contrairement aux produits, vous ne pouvez pas annuler les modifications apportées sur un canal.
:::

# Supprimer un canal

::: danger
Cette opération ne peut pas être annulée.
:::

Vous avez deux façons de procéder pour supprimer un canal.
À travers le page du canal :
1. Allez dans `Paramètres / Canaux` pour lister les canaux
1. Cliquez sur le canal à supprimer
1. Cliquez sur `...` pour les autres actions puis sur `Supprimer` dans le coin supérieur droit.
  ![image](Settings_ChannelDeleteEdit_fr.png)
1. Confirmez l'action via le message de validation

Par le raccourci Supprimer dans la grille :
  ![image](Settings_ChannelDeleteHover_fr.png)
1. Sélectionnez le canal que vous souhaitez supprimer dans la grille des canaux
1. Placez votre souris sur la ligne du canal dans la grille, le bouton supprimer est affiché (icône de la corbeille)
1. Cliquez sur l'icône de la corbeille
1. Confirmez l'action via le message de validation

Le canal est supprimé du PIM.
