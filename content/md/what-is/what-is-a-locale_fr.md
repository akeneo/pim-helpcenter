---
id: what-is-a-locale
themes: first-steps, akeneo-concepts
title: Qu'est-ce qu'une **locale**?
popular: false
ee-only: false
related: manage-your-locales, what-is-an-attribute, access-rights-on-products
---

# Définition d'une locale

![What-is-a-locale?](what-is-a-locale.svg)

Une locale dans Akeneo est la combinaison d'une langue (Anglais, Allemand, Français...) et d'un pays (Etats-Unis, Royaume-Uni, France...). Par exemple, le Français Belge sera fr_BE, tandis que le Français Canadien sera fr_CA.

Les locales sont utilisées pour traduire de l'information produit dans l'interface du PIM.  
En effet, les locales ont un rôle essentiel pour définir la valeur des [attributs](what-is-an-attribute.html) qui diffère d'une locale à une autre.  

Si un attribut utilisé dans Akeneo a différentes valeurs selon les locales activées, cet attribut sera appelé _localisable_.

# Propriétés d'une locale
Akeneo propose plus de 200 locales par défaut que vous pouvez à tout moment activer selon vos besoins. Vous pourrez choisir d'activer une ou plusieurs locales sur votre PIM.

Découvrez comment activer/désactiver des locales dans notre article [Gérer vos locales](manage-your-locales.html).

::: ee
Dans l'Edition Entreprise, vous pouvez définir des [droits spécifiques par locale](access-rights-on-products.html#rights-depending-on-the-locale) pour chaque utilisateur : qui peut voir ou éditer les informations produit pour chaque locale.
:::

::: warning
Attention à ne pas confondre le concept de locale avec la langue de l'interface. :)
:::
