---
id: manage-your-rules
themes: boost-your-productivity, catalog-settings
title: Démarrez avec le **moteur de règles**
popular: false
ee-only: true
related: what-is-a-rule
---

# Introduction

Une règle vous permet d'enrichir automatiquement certaines informations, grâce des actions automatiques, sur une sélection de produit basée sur des conditions. Elle s'applique sur les attributs, les catégories, les attributs du système (statut, complétude…).  
Pour plus de détails, veuillez consulter l'article : [Qu'est-ce qu'une règle](what-is-a-rule.html).

# Voir toutes les règles

L'écran `Paramètres / Règles` affiche toutes les règles créées.  
Vous pouvez effectuer une recherche sur le code de la règle.

![image](Settings_Rules_fr.png)

# Calculer le nombre de produits concernés pour les règles

Pour vous aider à valider vos règles et à bien définir vos conditions de règles, vous pouvez calculer le nombre de produits correspondants que la règle va affecter.

La première fois qu'une règle est exécutée, elle peut correspondre à de nombreux produits. Les fois suivantes, vous pourriez n'avoir aucun `Produit(s) affecté(s)` ou seulement peu.

1.  Pour utiliser cette action, sélectionnez une ou plusieurs règles en les cochant dans la partie gauche de l'écran
1.  Cliquez sur `Calculer les produits affectés`.
1.  Confirmez ensuite l'action dans le message de confirmation
1.  Un message flash confirmant l'action sera affiché et vous serez averti une fois le calcul effectué.

![image](Settings-RulesCalculation_fr.png)

Le nombre de produits affectés apparaîtra sur le côté droit de votre écran dans la colonne `Produit(s) affecté(s)`.


# Exécutez les règles

:::info
Les règles sont exécutées :
- après une action en masse
- après des imports avec exécution des règles
- via lancement automatique (CRON).
:::

Mais vous pouvez aussi exécuter les règles vous-même. Vous pouvez exécuter :
* une règle spécifique
* une sélection de règles
* toutes vos règles (attention, cette action peut prendre du temps)

:::info
Les règles prennent en charge [les modèles de produit](what-about-products-variants.html), de sorte que les règles puissent être définies également sur les attributs au niveau du modèle de produit (ou du sous-modèle de produit).
:::

## Exécutez une seule règle

Pour exécuter une règle, cliquez sur le bouton `Exécuter` à la fin de chaque ligne de la grille.  
Un message de confirmation valide l'action d'exécution d'une règle.

## Exécuter une sélection de règles

Vous pouvez également exécuter plusieurs règles en même temps :
1.  Sélectionnez une ou plusieurs règles en les cochant dans la partie gauche de l'écran
1.  Cliquez sur `Exécuter`.
1.  Confirmez ensuite l'action dans le message de confirmation
1.  Un message flash confirmant l'action sera affiché et vous serez averti lorsque l'exécution sera terminée.

# Créez une règle

Les règles sont créées exclusivement par les imports de fichier YML. Vous devez créer votre fichier YML comme expliqué dans notre documentation technique en ligne : Informations générales sur le format de [règle](https://docs.akeneo.com/latest/manipulate_pim_data/rule/general_information_on_rule_format.html) et l'importer dans le PIM en utilisant l'import `Import des règles en YAML`.

::: info
Pour plus de détails sur l'exécution d'un import, veuillez vous référer à l'article : [Importer vos données](imports.html).
:::

Vous pouvez également exporter vos règles. Pour exporter vos règles, exécutez l'export `Export des règles en YAML`.

::: info
Pour plus de détails sur la façon d'exécuter un export, veuillez vous référer à l'article : [Exporter vos données](exports.html).
:::

## Possibilités de mises à jour en fonction du niveau des attributs

Voici les possibilités existantes pour les conditions et actions des règles en fonction du niveau sur lequel sont gérés ces attributs :

Prenons l'exemple d'un sac.
Au niveau du model de produit, nous trouvons les attributs tels que la `fermeture éclair` et le `style`, et gestion de la catégorie à ce niveau.
Au niveau du produit, nous trouvons la `taille` et le `prix`

### Conditions sur le produit - Actions sur le produit

Si les conditions de règle sont toutes sur les attributs de produit et que l'action est sur un attribut de produit, les produits sont sélectionnés par la règle et les produits sont mis à jour.

Ex : Pour tous les sacs avec `taille` égale à `M`, mettre le `prix` à `150 €` .

### Conditions sur le modèle de produit - Actions sur le modèle produit

Si les conditions de règle sont toutes sur les attributs de modèle de produit et que l'action est sur un attribut de modèle de produit, les modèles de produit sont sélectionnés par la règle et les modèles de produit sont mis à jour.

Ex : Pour tous les sacs avec `fermeture éclair` égal à `vrai`, mettre le `style` à `avec zipper`.

### Conditions sur le modèle de produit - Actions sur le produit

Si les conditions de règle sont toutes sur les attributs de modèle de produit et que l'action est sur un attribut de produit, les modèles de produit sont sélectionnés par la règle mais leurs produits enfants sont mis à jour.

Ex : Pour tous les sacs avec style à `bon marché`, mettre le `prix` à `1€`.

### Conditions sur le modèle de produit et sur le produit - Actions sur le produit

Si les conditions de règle sont sur les attributs de modèle de produit et les attributs de produit et que l'action est sur un attribut de produit, les produits sont sélectionnés par la règle et mis à jour.

Ex : Pour tous les sacs avec `style` à `bon marché` et `taille` égale à `S`, mettre `prix` à `10€`.
Ex : Pour tous les sacs avec `fermeture éclair` à `vrai` et `taille` égale à `S`, mettre la catégorie `petit`.  

### Conditions sur le modèle de produit et sur le produit - Actions sur le modèle de produit

Si les conditions de règle sont sur les attributs de modèle de produit et les attributs de produit et que l'action est sur un attribut de modèle de produit, les produits sont sélectionnés par la règle, **MAIS** les modèles de produit ne sont pas mis à jour.

Ex : Pour tous les sacs avec `style` égal à `Sans zip` et `taille` égale à `S`, mettre `fermeture éclair` à `faux`

::: warning
Il est possible de créer cette règle, de calculer le nombre de produits impactés, mais cette règle ne mettra pas à jour les modèles de produit concernés.
:::

# Supprimer des règles

::: warning
Une règle supprimée ne peut plus être exécutée par le moteur de règles. Les produits conservent les valeurs calculées avant la suppression.
:::

## Supprimer une seule règle

Pour supprimer une règle, cliquez sur le bouton `Supprimer` à la fin de la ligne dans la grille.  
Un message de confirmation valide l'action de suppression d'une règle.

![image](Settings_DeleteHover_fr.png)

::: info  
Si vous ne voyez pas le bouton `Supprimer`, c'est peut-être parce que vous n'avez pas les droits nécessaires. Veuillez vous référer à l'article : [Gérer vos rôles utilisateur](build-your-user-roles.html).
:::

## Supprimer une sélection de règles

Vous pouvez également supprimer plusieurs règles en même temps :
1.  Sélectionnez une ou plusieurs règles en les cochant dans la partie gauche de l'écran  
1.  Cliquez sur `Supprimer`.
1.  Confirmez ensuite l'action dans le message de confirmation

![image](Settings_RulesBulkActionDelete_fr.png)
