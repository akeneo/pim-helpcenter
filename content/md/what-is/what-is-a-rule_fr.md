---
id: what-is-a-rule
themes: boost-your-productivity, akeneo-concepts
title: Qu'est-ce qu'une **règle**?
popular: false
ee-only: true
related: manage-your-rules
---

# Définition d'une règle

Une règle est une liste d'actions et de conditions qui permet d'automatiser l'enrichissement de vos données produit. 
Par exemple, l'utilisation des règles permet :
- de catégoriser automatiquement des nouveaux produits en fonction de leur famille
- de copier la valeur d'un attribut dans un autre attribut du même type 
- de définir une valeur par défaut dans un champ vide
- d'assigner des familles à de nouveaux produits

Les règles peuvent uniquement être importées dans Akeneo via un fichier YML, mais vous pouvez les gérer directement depuis l'interface du PIM. Consultez notre article sur [Comment gérer vos règles](/articles/manage-your-rules.html). 

Les règles peuvent être priorisées de 0 à 100, une règle avec un niveau de priorité défini à 100 sera appliquée avant une règle ayant un niveau de priorité de 10 ou 50.

# Exemple d'une règle

Il vous faut une ou plusieurs conditions pour déclencher une action. Par exemple, pour configurer la marque `Canon` pour tous les caméscopes Canon qui n'ont pas encore de Marque renseignée dans le PIM, il vous faudra créer une règle comme celle-ci :

SI:
- mon produit appartient à la famille `Caméscopes`
- l'attribut Nom de mon produit contient le mot `Canon`
- l'attribut Marque de mon produit est `vide` 

ALORS:
définir la valeur `Canon` dans l'attribut Marque de mon produit 

Vous trouverez ci-dessous un exemple du format YML attendu pour cette règle.

```yaml
rules:
    camera_set_canon_brand:
        priority: 0
        conditions:
            -   field: family.code
                operator: IN
                value:
                    - camcorders
            -   field: name
                operator: CONTAINS
                value: Canon
            -   field: camera_brand.code
                operator: 'NOT IN'
                value:
                    - canon_brand
        actions:
            -   type: set
                field: camera_brand
                value: canon_brand
``` 
::: info
Vous trouverez davantage d'informations sur toutes les conditions/actions et sur la création de vos propres règles en parcourant notre documentation technique: [Informations générales sur le format des règles](https://docs.akeneo.com/2.0/manipulate_pim_data/rule/general_information_on_rule_format.html#enrichment-rule-structure).
:::
