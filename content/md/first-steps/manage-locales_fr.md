---
id: manage-your-locales
themes: catalog-settings
title: Gérer vos **locales**
popular: false
ee-only: false
related: what-is-a-locale
---

# Gérez vos locales

## Voir les locales disponibles

Pour afficher les locales disponibles dans Akeneo, accédez à `Paramètres / Locales`. Vous pouvez trouver une locale en utilisant son code. Vous pouvez également filtrer sur son statut `Activé` : Tous / Oui / Non.

![Afficher les locales](Settings_Locales_fr.png)

# Comment activer/désactiver une locale ?

Une **locale est activée lorsqu'elle est ajoutée à un canal**. Elle ne peut pas être activée à partir de la page des locales ou via un import de locale en CSV ou XLSX. Pour savoir comment activer les locales à partir du canal, consultez l'article suivant : [Gérer vos canaux](manage-your-channels.html).

:::info
Une locale activée signifie qu'elle est utilisée dans au moins un canal.
Si une locale est désactivée, cela signifie qu'elle n'est utilisée dans aucun canal.
:::

# Comment ajouter une nouvelle locale ?

Akeneo propose plus de 200 locales par défaut, mais s'il vous manque une locale ou si vous avez besoin d'une locale personnalisée, il est très facile d'en ajouter une nouvelle à l'aide des imports.

## Format de la nouvelle locale

Votre nouvelle locale doit respecter l'un des formats suivants: xx_YY, xxx_YY, xx_YY_ZZ ... Si vous importez une locale `es_DE`, elle apparaîtra comme `Espagnol (Allemagne)` dans Akeneo. Si vous importez une locale appelé `Francais_test_web`, elle apparaîtra sous la forme `Francais (test, Web)`.

Le PIM limite à 20 le nombre de caractères pouvant être utilisés pour un nom de locale.

## Étapes pour ajouter une nouvelle locale

Par exemple, pour ajouter une locale `fr_HK`, procédez comme suit:
1. Créez un fichier d'import en XLSX ou CSV contenant une colonne de `code` de locale et votre nouveau code de locale, comme ci-dessous :   
    `code`  
    `fr_HK`   
1. Importez ce fichier à l’aide du traitement `csv_locale_import` ou` xlsx_locale_import`. Une fois le fichier importé, la ou les nouvelles locales apparaîtront sous `Paramètres / locales`.
1. Pour l'activer et l'ajouter à un canal, allez dans `Paramètres / Canaux` et ajoutez-la dans le champ `Locales`. Si vous ne la trouvez pas, utilisez un import de canal (csv ou xlsx) et ajoutez le code `fr_HK` dans la colonne `locales` avec vos locales actuellement activées pour ce canal, le cas échéant.

Et c'est tout ! Votre locale `fr_HK` est activée pour votre canal ! Vous pourrez la trouver dans votre grille de produits, ainsi que dans les fiches Produit.

:::ee
Si vous ne voyez pas vos nouvelles locales dans l'interface utilisateur, c'est peut-être parce que vous avez oublié de lui attribuer des autorisations dans `Paramètres / Locales`. Sélectionnez vos locales et allez dans l'onglet `Autorisations`. Pour savoir comment configurer les autorisations sur les locales, consultez l'article [Définir les droits en fonction des locales](access-rights-on-products.html#droits-en-fonction-de-la-locale).
:::

:::warning
Vous pouvez facilement ajouter des locales, mais **vous ne pouvez pas les supprimer ensuite de l'interface utilisateur**. Veuillez vous assurer que vous avez vraiment besoin de locales supplémentaires avant de les importer !
:::

# Définir les autorisations sur les locales

:::ee
Comme pour les groupes d'attributs et les catégories, vous pouvez définir des autorisations spécifiques sur les locales. Consultez l'article [Définir les droits en fonction des locales](access-rights-on-products.html#droits-en-fonction-de-la-locale) pour savoir comment ajouter/supprimer des autorisations sur les locales.
:::
