---
id: what-is-an-attribute
themes: first-steps, akeneo-concepts
title: Qu'est-ce qu'un **attribut**?
related: manage-your-attributes, what-is-an-attribute-group
---

# Introduction

Un attribut est une caractéristique d’un produit. Un produit est généralement composé de plusieurs attributs : un numéro d'identification, un nom, une description, un prix, une couleur... Selon le type d'édition de votre version d'Akeneo ([Communautaire ou Entreprise](https://www.akeneo.com/fr/comparer-les-editions-akeneo/)), vous pouvez choisir jusqu'à **17 types d'attributs**.

![Liste types d'attributs](attribute_type_list_fr.png)

Dans Akeneo, les attributs sont gérés en **familles**, de sorte que tous les produits appartenant à la même famille partagent les mêmes attributs. Si vous n'êtes pas familier avec le concept de famille, lisez l'article suivant : [Qu'est-ce qu'une famille?](what-is-a-family.html).

Dans Akeneo, les attributs sont regroupés en **Groupes d'attributs** pour faciliter leur enrichissement dans la fiche produit.
Vous pouvez facilement créer des groupes d'attributs pour regrouper vos attributs. Lisez l'article suivant pour obtenir plus d'informations sur les groupes d'attributs : [Qu'est-ce qu'un groupe d'attributs ?](What-is-an-attribute-group.html).

# Types d'attributs dans Akeneo

Voici les types d'attributs disponibles dans Akeneo :
- **Identifiant** : un code pour identifier votre produit, **ce code doit être unique**. Cela peut être un SKU, un EAN ... **Cet attribut est obligatoire pour créer des produits.**
- **Texte** : un champ de texte d'une seule ligne pouvant contenir **jusqu'à 255 caractères**. Il est généralement utilisé pour un nom de produit.
- **Zone de texte** : un champ de texte multi lignes pouvant être utilisé, par exemple, pour une description du produit, un conseil d'utilisation ou même une composition détaillée. Ce type d'attribut propose une option [WYSIWYG](https://fr.wikipedia.org/wiki/What_you_see_is_what_you_get).
- **Liste à choix unique** : une liste à choix unique contenant des options personnalisées. Une seule valeur peut être sélectionnée parmi les options disponibles.
- **Liste à choix multiples** : une liste à choix multiples avec des options personnalisées. Plus d'une valeur peuvent être sélectionnées parmi les options disponibles.
- **Oui / Non** : un attribut booléen
- **Date** : un champ de date, le PIM affichera un calendrier pour choisir la date, qui comprend le jour, le mois et l’année.
- **Nombre** : un champ d'une seule ligne ne pouvant contenir que des chiffres.
- **Unité de mesure** : un duo de 2 champs composé d'un premier champ contenant un nombre et d'un deuxième champ contenant une unité de mesure. Il vous permet de convertir automatiquement les valeurs en d'autres valeurs, en fonction des unités, pour répondre à vos besoins en matière d'export. Vous pouvez consulter l'article [Gérer vos canaux](manage-your-channels.html#create-a-channel) pour obtenir plus d'informations sur cette fonctionnalité.
- **Prix** : un attribut de prix avec des valeurs par devise. Les valeurs affichées dépendent des devises activées dans le PIM. Apprenez [ici](manage-your-currencies.html#enabledisable-a-currency) comment activer ou désactiver une devise dans le PIM Akeneo.
- **Image** : une zone de glisser-déposer permettant de télécharger une image (extensions autorisées : gif, jfif, jif, jpeg, jpg, pdf, png, psd, tif, tiff).
- **Fichier** : une zone de glisser-déposer pour télécharger un fichier (extensions autorisées : csv, doc, docx, mp3, pdf).
- **Collection de ressources** **_(édition Entreprise uniquement)_** : un type d'attribut avancé permettant de gérer plusieurs ressources numériques telles qu'une vidéo, une image, un fichier pdf... Lire l'article suivant [Qu'est-ce qu'une ressource ?](what-is-an-asset.html) pour en savoir plus sur ce type d'attribut.
- **Lien simple vers une entité référentielle** **_(édition Entreprise uniquement)_** : un type d'attribut avancé permettant d'enrichir les données communes relatives aux produits avec du contenu riche (texte, images...), plus complexe qu'un simple code et des étiquettes, exemple : gestion des marques liées aux produits. Consultez notre article dédié [Qu'est-ce qu'une entité de référence ?](What-about-reference-entity.html) pour en savoir plus sur ce type d'attribut.
- **Lien multiple vers une entité référentielle** **_(édition Entreprise uniquement)_** : identique au type d'attribut ci-dessus mais vous permettant de gérer plusieurs liens.
- **Liste à choix unique de données référentielles** : un type d'attribut avancé permettant de gérer tout type de données possédant ses propres propriétés, en tant que sélection à choix unique.
- **Liste à choix multiples de données référentielle** : identique au type d'attribut ci-dessus mais vous permettant de gérer plusieurs liens.

:::info
Le seul attribut obligatoire est un attribut de type `Identifiant`. Vous devez d’abord créer un attribut de type `Identifiant` avant de créer des produits.
:::

:::warning
Vous ne pouvez avoir qu'un seul attribut de type `Identifiant`, mais vous pouvez avoir plusieurs attributs parmi les autres types. Si vous avez besoin de champs d'identifiant supplémentaires, utilisez un champ de type `Texte` avec un paramètre de valeur unique défini sur `Oui`.
:::

:::tips
Les options relatives aux attributs de type `Liste à choix unique` et `Liste à choix multiples` peuvent être traduites dans n’importe quelle locale activée du PIM.
:::

:::tips
Pour stocker les codes GTIN, EAN, UPC… dans votre PIM, utilisez le type d'attribut `Texte` et utilisez une expression régulière pour contrôler la saisie du champ.
Par exemple, pour stocker un EAN13 dans Akeneo contenant toujours 13 chiffres, ajoutez une règle de validation basée sur l'expression régulière suivante: `/^[0-9]{13}$/`
:::

## Entités référentielles ou données référentielles ?

### Différences entre les deux types d'attributs

**Les entités référentielles sont une fonctionnalité de l'édition Entreprise ajoutée depuis la version 3.0**. Pour en savoir plus sur les entités référentielles, lisez notre article dédié [Qu'est-ce qu'une entité référentielles ?](What-about-reference-entity.html)

Les liens vers les données référentielles sont une fonctionnalité native des éditions Communautaire et Entreprise. Cette fonctionnalité gère les liens entre les données référentielles et les produits. Cependant les données référentielles impliquent un développement personnalisé (installation du [Bundle d'entités personnalisées](https://github.com/akeneo-labs/CustomEntityBundle)) pour enrichir les données référentielles via l'interface utilisateur, les collecter et les diffuser.

**Si vous démarrez un nouveau projet avec l'édition Entreprise à partir de la version 3.0, nous vous recommandons vivement d'utiliser les [Entités référentielles](manage-reference-entity.html#create-a-reference-entity).**

### J'utilisais des données référentielles, puis-je les transformer en entités référentielles ?

Oui ! Si vous utilisiez des données référentielles dans une version précédente du PIM, vous pouvez migrer vos données référentielles à l'aide de l'outil [`CSVToReferenceEntity`](https://github.com/akeneo/CsvToReferenceEntity).
[`CSVToReferenceEntity`](https://github.com/akeneo/CsvToReferenceEntity) vous permettra de migrer l'ensemble des données référentielles et de les transformer en enregistrements d'entités référentielles.
Cet outil peut également être utilisé pour initialiser les données d'entités référentielles à partir d'un ERP/MDM.

### J'utilisais des données référentielles, puis-je les utiliser sur les versions 3.X ?

Oui ! Les données référentielles sont toujours disponibles sur les versions 3.X.

### Comment importer/exporter des entités référentielles ?

Il n'y a pas d'import/export natif pour les entités référentielles, mais vous pouvez utiliser notre API pour les gérer. Découvrez le format de leurs API et les endpoints disponibles dans notre documentation en ligne sur les API :
[Présentation des entités référentielles et de leurs formats standard associés](https://api.akeneo.com/documentation/resources.html#reference-entities)

# Propriétés spécifiques des attributs

Un attribut peut avoir plusieurs propriétés spécifiques : il peut avoir une valeur par canal, par locale, être spécifique à une locale, être en lecture seule _(édition Entreprise uniquement)_.

![Propriétés spécifiques](specific_properties_fr.png)

:::info
Vous pouvez combiner et assortir les propriétés d'attribut pour obtenir un résultat puissant.
:::

## La propriété `Valeur unique`

Cette propriété doit être activée si 2 produits ne peuvent avoir une valeur identique pour ce champ.
Par exemple, vous voudrez peut-être vous assurer que 2 produits n'ont pas le même EAN13.

:::warning
Cela n'est pas modifiable après la création de l'attribut.
:::

## La propriété `Valeur par Canal`

Cette propriété doit être activée si les valeurs de l'attribut diffèrent pour chaque canal.
Par exemple, vous voudrez peut-être avoir :
- une courte description de votre site e-commerce
- encore plus courte pour votre application mobile
- une longue description pour votre catalogue imprimé

Dans ce cas, lors de la création de votre attribut, activez la propriété `Valeur par Canal`.

:::warning
Cela n'est pas modifiable après la création de l'attribut.
:::

## La propriété `Valeur par locale`

Cette propriété doit être activée si les valeurs de l'attribut diffèrent pour chaque locale. Cela vous permet de gérer les traductions d'un produit en fonction des locales activées dans le PIM.

Par exemple, cette fonctionnalité vous permettra d'avoir un nom de produit ou une description pour chaque locale activée dans votre PIM. Elle est principalement utilisée pour le texte ou les attributs de zone de texte.

Dans ce cas, lors de la création de votre attribut, activez la propriété `Valeur par locale`.

:::warning
Cela n'est pas modifiable après la création de l'attribut.
:::

## La propriété `Lecture seule`

Si vous activez cette propriété, les utilisateurs ne seront pas autorisés à modifier l'attribut via l'interface utilisateur. Il sera uniquement mis à jour via les imports, l'API ou les [règles](manage-your-rules.html#mainContent). L'attribut apparaîtra en grisé dans l'interface.

## La propriété `Utilisable sur la grille`

Cette propriété définit si l'attribut peut être affiché, ou non, sous forme de colonne et utilisé comme filtre dans la grille de produits ou dans la [grille de produits publiés](how-to-manage-my-publications.html#view-the-published-produits) et la [grille de propositions](review-products-propositions.html#filtre-les-propositions)

## La propriété `Spécifique à une locale`

Certains attributs **ne doivent être affichés que pour certaines locales**. Nous les appelons `spécifiques à une locale`.

Par exemple, un attribut de résistance au froid pour la Russie, une taxe canadienne uniquement pour le Canada.
Dans ce cas, lors de la création ou la modification de votre attribut, activez la propriété `spécifique à une locale`.
Il vous faudra spécifier dans quelle(s) locale(s) cet attribut sera affiché.

Dans la fiche Produit, si vous êtes sur une locale ne faisant pas parti de du paramétrage de cet attribut `spécifique à une locale`, le titre de l'attribut sera affiché et un message d'information vous indiquera que l'attribut ne peut être renseigné dans cette locale.
![Attribut non modifiable](local_specific_fr.png)
