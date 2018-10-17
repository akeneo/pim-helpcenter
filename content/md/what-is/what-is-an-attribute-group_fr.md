---
id: what-is-an-attribute-group
themes: akeneo-concepts
title: Qu'est-ce qu'un **groupe d'attributs**?
popular: false
ee-only: false
related: manage-your-attribute-groups
---

# Définition

![what-is-an-attribute-group](/img/Settings_What-is-an-attribute-group.svg)

Les groupes d'attributs sont utilisés pour :
1. Regrouper des attributs ensemble afin de faciliter leur enrichissement par les utilisateurs du PIM
1. Sur l'Edition Entreprise, organiser le travail d'enrichissement sur les produits par différents contributeurs (ou utilisateurs).

Par exemple, vous avez la possibilité de regrouper tous les attributs Marketing (nom du produit, description, etc.) dans un groupe d'attributs `Marketing`.

# Dans la fiche produit

Dès lors qu'un groupe d'attributs est créé, celui-ci apparaîtra automatiquement dans la fiche d'un produit qui possède au moins un attribut présent dans ce groupe.

Dans l'exemple ci-dessous, nous avons trois groupes d'attributs affichés : `Marketing`, `Technical` et `Media`.

![in the product form](/img/Products_ExampleofAttributeGroups.gif)

Si aucun des attributs d'un groupe n'est utilisé par une famille de produits, alors ce groupe d'attributs ne sera pas visible dans la fiche produit.

Vous pouvez également ajouter ou supprimer un attribut, ou définir un ordre pour vos attributs pour chaque groupe d'attributs. Merci de vous référer à notre article sur la [Gestion des groupes d'attributs](/fr/articles/manage-your-attribute-groups.html) pour plus d'informations à ce sujet.

# Spécificités de l'Edition Entreprise

:::ee
Dans l'Edition Entreprise, vous pouvez définir des permissions pour vos groupes d'attributs.
Vous pourrez restreindre la visibilité ou l'édition de certains attributs à un ou plusieurs groupes d'utilisateurs en utilisant **les permissions avancées sur les groupes d'attributs**.
Certains utilisateurs pourront donc **éditer des attributs**, d'autres seulement **voir les valeurs de ces attributs** ou bien n'auront **aucune permission**. C'est-à-dire qu'ils ne pourront pas accéder aux données d'un ou plusieurs attributs appartenant au même groupe.


Par exemple, l'équipe Marketing sera uniquement en mesure de renseigner les valeurs du groupe d'attributs `Marketing`, tandis qu'ils ne pourront que consulter les informations renseignées pour les attributs du groupe d'attributs `Technical`.
:::

![Permissions per users](/img/Settings_PermissionsOnAttributeGroups_fr.png)
