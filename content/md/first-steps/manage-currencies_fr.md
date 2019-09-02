---
id: manage-your-currencies
themes: catalog-settings
title: Voir et activer des **devises**
popular: false
ee-only: false
related: what-is-an-attribute, what-is-a-channel
---

# Vue d'ensemble

Vous avez 294 devises de disponibles dans Akeneo. Les devises permettent de définir des valeurs pour le type d'attribut `Prix`. Les devises ne sont pas liées aux locales.

::: info
Lorsqu'un attribut de type `Prix` est créé, il peut avoir autant de valeurs que nécessaire tant que la devise correspondante a été activée dans le PIM.
:::

![Affichage des devises dans la fiche Produit](Show_ProductPageCurrencies_fr.png)


# Voir les devises

Pour afficher les devises, allez dans `Paramètres / Devises`. La grille affiche toutes les devises disponibles dans le PIM.
Vous pouvez effectuer une recherche sur le code de la devise et filtrer sur son statut `Activé` : `Tous` / `Oui` / `Non`.

![Voir les devises](Settings_Currency_fr.png)

# Activer / désactiver une devise

Chaque ligne de devise est accompagnée d'un bouton d'action de raccourci pour l'activer ou la désactiver.
1. Placez votre souris sur la ligne, le bouton `Changer le statut` apparaît
1. Pour changer le statut de la devise (activer/désactiver), cliquez sur le bouton

Le statut de la devise est modifié et la grille des devises est automatiquement mise à jour.

![Changer le statut des devises](Settings_CurrencyDisabled_fr.gif)

::: info
L'action de raccourci n'est affichée que si vous avez les droits appropriés.
:::

# Activer / désactiver une devise pour un canal

Une devise activée dans le PIM ne sera pas automatiquement associée aux canaux.

Pour que la devise soit affichée dans la fiche produit pour un canal il vous faut :
1. Allez dans `Paramètres / Canaux`
1. Cliquez sur le canal que vous souhaitez éditer
1. Ajouter ou supprimer les devises
1. Cliquez sur le bouton `Enregistrer`

![Ajouter/Supprimer une devise d'un canal](Settings_CurrencyChannel_fr.png)

La devise est immédiatement ajoutée ou supprimée du canal.
