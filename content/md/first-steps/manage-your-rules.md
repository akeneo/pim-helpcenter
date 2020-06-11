---
id: manage-your-rules
themes: boost-your-productivity, catalog-settings
title: Manage your **rules**
popular: false
ee-only: true
related: what-is-a-rule
---

# Overview

A rule allows you to automatically enrich some of your product information. It relies on automatic actions based on conditions. You can use it on attributes, categories, system attributes (status, completeness...).  
For more details, please refer to [the dedicated article](get-started-with-the-rules-engine.html).

# View all rules

The `Settings/Rules` screen displays a grid with all the rules that have been created and imported in the PIM.  
You can search on the rule code or label.

![image](../img/Settings_Rules.png)

In the last column, there is a tag. Thanks to these tags, you can see at a glance the action type behind each rule (add, copy, concatenate, set, calculate, remove, clear) :wink:

# Calculate the number of affected products for rules

To help you define the conditions for your rules and validate them, you can calculate the number of matching products that the rule will process.

The first time a rule is executed, it can match many products. The following time, you might have zero `Affected products` or only a few.

1.  To use this action, select one or several rules by ticking them on the left side of the screen
1.  Click on `Calculate the affected products`
1.  Then confirm the action in the pop in
1.  A flash message confirming the action will be displayed and you will be notified once the calculation is done.

![image](../img/Settings_RulesCalculate.png)

The number of affected products will appear on the right side of your screen in the `Affected products` column.


# Execute rules

:::info
Rules are regularly executed after a bulk action or after imports with rules.
:::

But you can also execute rules on your own. You can execute:
*   one specific rule
*   a selection of rules
*   all your rules (be aware, this action could take a long time)

:::info
The rules support [product models](what-about-products-variants.html#what-is-a-product-model), so rules can be defined also on attributes at the product model level (or sub product model level).
:::

The rules execution summary is accessible via the `process tracker`.

![image](../img/Rules_ProcessTracker.png)

In this summary, you can easily access the details of the execution: how many rules were executed, how many products/product models were updated, warnings...

![image](../img/Rules_Summary.png)

## Execute a single rule

To execute a rule, click on the `Execute` button at the end of each line in the grid.  
A confirmation message validates the action of executing a rule.

![image](../img/Settings_RulesExecution1.png)


## Execute a selection of rules

You can also execute several rules at the same time:
1.  Select one or several rules by ticking them on the left side of the screen
1.  Click on `Execute`
1.  Then confirm the action in the pop in
1.  A flash message confirming the action will be displayed and you will be notified once the execution is done

![image](../img/Settings_RulesExecutionNotif.png)

# Create a rule

Rules are exclusively created by YML imports. You need to create your YML file like explained on our online technical documentation: [General information about rule format](https://docs.akeneo.com/latest/manipulate_pim_data/rule/general_information_on_rule_format.html#enrichment-rule-structure) and import it in the PIM using the `Rule import in YML` import job.  
We also detail in [this article](get-started-with-the-rules-engine.html), how to select products and the list of available actions.

::: info
For more details about how to execute an import, please refer to [Import your data](imports.html).
:::

You can also export your rules. For that, execute the `Rule export in YML` export job.

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

![image](../img/Settings_RulesDeleteHover.png)

::: info  
If you do not see the `Delete` button, it might be because you do not have the relevant rights. Please refer to [Manage your user roles](build-your-user-roles.html).
:::

## Delete a selection of rules

You can also delete several rules at the same time:
1.  Select one or several rules by ticking them on the left side of the screen  
1.  Click on `Delete`
1.  Then, confirm the action in the pop in.

![image](../img/Settings_RulesBulkActionDelete.png)
