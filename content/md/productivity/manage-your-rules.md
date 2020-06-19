---
id: manage-your-rules
themes: boost-your-productivity, catalog-settings
title: Manage your **rules**
popular: false
ee-only: true
related: what-is-a-rule
---

# Overview

A rule allows you to automatically enrich some of your product information. It relies on automatic actions based on conditions. A rule is composed by one or several conditions, that allow you to filter products/product models, and then one or several actions to update these products/product models.  
For more details, please refer to [the dedicated article](get-started-with-the-rules-engine.html).

To create a rule, two choices. Either you create it via the UI, or via a YML import job.

# Create a rule in the PIM UI

To create a rule via the UI, go to `Settings/Rules` and click on `Create`. A creation popin appears. Choose a **code** and a **label** to name your rule, then validate. You rule is created! You can now define you product selection and the action(s) you want to apply to your selection. Let's go!

Once your rule is created, the rule edit screen appears. In this screen, you can see two tabs: the `rule builder` and `properties`. In the `Properties` tab, you can define the **priority** of your rule, but also its label translations. This fields can be updated afterward. Only the code is immutable.

## The Rule builder tab

This screen is the more important screen in the rules menu as this is where you can manage your conditions and actions.

:::warning
This screen is still under development, mind you! All the filters and actions are not yet available in the UI but don't worry, you can still use the [import job](##Create-rules-via-a-YML-import) to create rules based on filters/actions that are not managed yet in the UI. When the filters/actions are not ready yet in the PIM UI, we display a mini-helper to inform you.
:::

The first thing to do is to filter the products you want to update with this rule. To do so, there are a bunch of filters available under the `Add condition` button.

### Product selection
In the `Product selection` part, you can define attributes or system fields you want to use to filter your products/product models. We also name this part, the `Conditions`.

:::info
Retrieve the entire list of attributes/system fields in [this](get-started-with-the-rules-engine.html) article.
:::

:::warning
By default, when there is no condition, all your product catalog is selected. It means that, if you don't filter your products/product models (meaning that you don't add any condition) but you add one or several actions, all your catalog will be updated!
:::

The system fields are displayed first in the list, and then all the attributes are gathered by attribute groups. There is a search bar to help you find the attributes. Each time you choose a filter, its color turns to purple to inform you that it is already used, and a new line is created.

Let's see how a line is sliced.

On the left, you retrieve the system field or attribute chosen. It is written in purple.
Then, you have to choose an operator. Depending on the filter, the operator list changes. If you don't remember which operator is available for each filter, you can refer to [this](get-started-with-the-rules-engine.html) article.
Then, you have the value field, where you can put the value you want to filter on. For example, if you filter is a multi-select attribute type, you can choose which options you want to filter on.

If your filter has a value per channel and/or per locale, the `channel` and `locale` fields appear, in order to let you choose on which locale/channel you want to filter.

If you want to remove a condition, just click on the cross at the end of the line.

As you can see just next to the `Add condition` button, there is a counter that inform you how many products/product models will be updated by this rule. It means that these conditions match with X products/product models.
This count automatically changes as soon as you add/remove a condition.

### Add actions

Now that you have filtered your products/product models, you can add one or several actions to apply on!

To do so:
1. Click on `Add action` on top of the screen
1. Select the action you want to add. There is a search bar and a scroll bar to choose action among the list.
1. A new section appears under the `Product selection` part.

:::info
As for the `Product Selection`, all the actions are not yet available in the UI. If you need to apply an action that is not managed for now, you can still import your YML file, and retrieve your rule in the PIM UI.
:::

[Here](get-started-with-the-rules-engine.html) is the list of all the actions you can do with the rules engine.

Depending on the action you choose, the template changes. The table below lists all the actions that you can add via the PIM interface.

| Actions  | What they do |
|---|---|
| Set categories  | Classify your products/product models in the categories you choose, and **declassify** them from their "old" categories.  |
| Add categories  | Add your products to new categories, **without declassifying** them from their "old" categories.  |
| Set family  | Replace your products/product models family |
| Clear attribute value  | Delete values from an attribute on your products/product models selection  |


# Create rules via a YML import
To create rules using a YML file, you need to create it like explained in [this](get-started-with-the-rules-engine.html) article and import it in the PIM using the `Rule import in YML` import job.

::: info
For more details about how to execute an import, please refer to [Import your data](imports.html).
:::

:::tips
You can also export your rules. For that, execute the `Rule export in YML` export job. For more details about how to execute an export, please refer to [Export your data](exports.html).
:::


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

:::tips
In order to access the summary of nightly scheduled rules (by cron), you need to have the right to `View all jobs in process tracker` in the `Roles` permissions to be able to see them the process tracker :wink:.
:::

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
