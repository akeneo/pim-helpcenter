---
id: manage-your-rules
themes: boost-your-productivity, catalog-settings
title: Get started with the **rules engine**
popular: false
ee-only: true
related: what-is-a-rule
---

# Overview

A rule allows you to enrich automatically some information in your products, according to automatic actions based on conditions. It applies on attributes, categories, system attributes (status, completeness...).  
For more details, please refer to [What is a rule](what-is-a-rule.html).

# View all rules

The screen `Settings/Rules` displays all rules created.  
You can search on the rule's code.

![image](../img/Settings_Rules.png)

# Calculate the number of affected products for rules

To help you to validate your rules and well define your rules conditions, you can calculate the number of matching products that the rule will affect.

The fist time a rule is executed, it can match many products. The next times, you might have 0 `Affected products` or only few.

1.  To use this action, select one or several rules by ticking them on the left side of the screen
1.  Click on `Calculate the affected products`
1.  Then confirm the action in the pop in
1.  A flash message confirming the action will be displayed and you will be notified once the calculation is done.

![image](../img/Settings-RulesCalculation.png)

The number of affected products will appear on the right side of your screen in the column `Affected products`.


# Execute rules

:::info
Rules are regularly executed after a bulk action or after imports with rules.
:::

But you can also execute rules on your own, you can execute:
*   one specific rule
*   a selection of rules
*   all your rules (be aware, this action could take a long time)

:::info
The rules support [product models](what-about-products-variants.html#what-is-a-product-model), so rules can be defined also on attributes at the product model level (or sub product model level).
:::

## Execute a single rule

To execute a rule, click on the `Execute` button at the end of each line in the grid.  
A confirmation message validates the action of executing a rule.

## Execute a selection of rules

You can also execute several rules at the same time:
1.  Select one or several rules by ticking them on the left side of the screen
1.  Click on `Execute`
1.  Then confirm the action in the pop in
1.  A flash message confirming the action will be displayed and you will be notified once the execution is done

# Create a rule

Rules are exclusively created by YML imports. You need to create your YML file like explained on our online technical documentation: [General information about rule format](https://docs.akeneo.com/latest/manipulate_pim_data/rule/general_information_on_rule_format.html#enrichment-rule-structure) and import it in the PIM using the `Rule import in YML` import job.

::: info
For more details about how to execute an import, please refer to [Import your data](imports.html).
:::

You can also export your rules. To export your rules, execute the `Rule export in YML` export job.

::: info
For more details about how to execute an export, please refer to [Export your data](exports.html).
:::

# Delete rules

::: warning
A deleted rule can no longer be executed by the rules engine. The products keep the values calculated by the deleted rule.
:::

## Delete a single rule

To delete a rule, click on the `Delete` button at the end of each line in the grid.  
A confirmation message validates the action of deleting a rule.

![image](../img/Settings_DeleteHover.png)

::: info  
If you do not see the `Delete` button, it might be because you do not have the relevant rights. Please refer to [Manage your user roles](build-your-user-roles.html).
:::

## Delete a selection of rules

You can also delete several rules at the same time:
1.  Select one or several rules by ticking them on the left side of the screen  
1.  Click on `Delete`
1.  Then confirm the action in the pop in

![image](../img/Settings_RulesBulkActionDelete.png)
