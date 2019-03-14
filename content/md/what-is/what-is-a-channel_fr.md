---
id: what-is-a-channel
themes: first-steps, akeneo-concepts
title: Qu'est-ce qu'un **canal** ?
popular: true
---

# Définition d'un canal
Un canal dans Akeneo définit une sélection de produits et d'informations à exporter. Un canal peut correspondre à un site e-commerce, un catalogue papier, une application mobile, etc...

![Channels](Settings_What-is-a-channels.svg)

# À quoi sert un canal ?
Un canal définit une sélection de produits et d'informations à exporter.

Il peut être considéré comme un filtre sur le catalogue produits avec les propriétés suivantes :
- Il est lié à un arbre de catégories (et un seul !)
- Il est rattaché à une ou plusieurs [locales](what-is-a-locale.html) activées
- Une ou plusieurs devises lui sont rattachées
- Il a sa propre [complétude](what-is-the-completeness.html)  

::: tips
Un canal peut aussi être appelé un **scope** dans Akeneo PIM.
:::

Propriétés supplémentaires :
- Il vous permet d'avoir une [transformation de ressources](assets-transformation.html) dédiée
- Il vous permet également de définir des conversions spécifiques pour chaque attribut métrique.

## De combien de canaux ai-je besoin pour mon PIM ?

Un nouveau canal sera requis dès lors que vous souhaiterez proposer un contenu différent pour un même attribut (par exemple une description pour votre site e-commerce et une autre pour votre application mobile), ou que vous souhaiterez définir un niveau de [complétude](what-is-the-completeness.html) différent (par exemple si votre site e-commerce nécessite 50 attributs quand votre application mobile en demande 30).
