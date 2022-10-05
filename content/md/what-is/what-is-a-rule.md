---
id: what-is-a-rule
themes: boost-your-productivity, akeneo-concepts
title: What is a **rule**?
popular: false
ee: true
ge: false
related: manage-your-rules
---

# Definition of a rule

A rule is a set of actions and conditions that allows you to automatize data enrichment.
For instance, rules allow you to automatically:
- fill in attributes
- categorize new products
- set a default value to an empty attribute
- assign values to new products
- copy an attribute value to another attribute

A rule is defined by a code (required) and you can name it with a label as well. This label can have a value per locale.

Rules can be created and imported in Akeneo using both UI and YML file and you can manage them from the UI. Check our [How to manage your rules](manage-your-rules.html) article.

Rules can be prioritized: a rule with a priority of 100 will be applied before a rule having a priority of 10 or 50.

# Example of a rule

You need one or several conditions to trigger an action. For instance, to set the `Canon` brand to all Canon camcorders that do not have a brand yet, you'll have to create a rule like the one below:

IF:
- my product is in the `Camcorders` family
- my product attribute name contains the word: `Canon`
- my brand attribute is `empty`

THEN:
set the `Canon` value in my product brand attribute

Here is the example of the YML format expected for this rule.

```yaml
rules:
    camera_set_canon_brand:
        priority: 0
        conditions:
            -   field: family
                operator: IN
                value:
                    - camcorders
            -   field: name
                operator: CONTAINS
                value: Canon
            -   field: camera_brand
                operator: 'NOT IN'
                value:
                    - canon_brand
        actions:
            -   type: set
                field: camera_brand
                value: canon_brand
```

Now that you know what a rule is, let's dive into this powerful feature! Discover in [this article](get-started-with-the-rules-engine.html) all the available conditions and actions, and learn how to use them.

::: info
You can refer to our [technical documentation](https://docs.akeneo.com/latest/manipulate_pim_data/rule/general_information_on_rule_format.html#enrichment-rule-structure) to find out more information about the rules engine.
:::
