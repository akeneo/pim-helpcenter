---
id: what-is-a-rule
themes: boost-your-productivity, akeneo-concepts
title: What is a **rule**?
popular: false
ee-only: true
related: manage-your-rules
---

# Definition of a rule

A rule is a set of actions and conditions that allows you to automatise data enrichment. 
For instance, using rules you can:
- automatically categorise new products based their family
- copy the value from a text attribute to another text attribute
- set a default value to an empty field
- set a text attribute to another text attribute
- assign families to new products

Rules can only be imported in Akeneo using a YML file, but you can manage them from the UI. Check [How to manage your rules](manage-your-rules.html) article. 

Rules can be prioritised from 0 to 100, a rule with a priority of 100 will be applied before a rule having a priority of 10 or 50.

# Example of a rule

You need one or several conditions to trigger an action. For instance, to set the brand `Canon` to all Canon camcorders that do not have a Brand yet, you'll have to create a rule like the one below:

IF:
- my product is in the `Camcorders` family
- my product attribute names contains the word `Canon`
- my brand attribute is `empty` 

THEN:
set the value `Canon` in my product's brand attribute 

Here the example of the YML format expected for this rule.

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
Find more information about all the conditions/actions and create your own rules! To do so, refer to our technical documentation: [General information about rule format](https://docs.akeneo.com/latest/manipulate_pim_data/rule/general_information_on_rule_format.html#enrichment-rule-structure).
:::

