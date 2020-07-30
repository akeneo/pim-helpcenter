---
id: manage-your-rules
themes: boost-your-productivity, catalog-settings
title: Manage your **rules**
popular: false
ee-only: true
related: what-is-a-rule
---

# Overview

A rule allows you to automatically enrich some of your product information. It relies on automatic actions based on conditions. A rule is composed of one or several conditions, that allow you to filter products/product models, and then one or several actions to update these products/product models.  
For more details, please refer to our dedicated article about [the rules engine](get-started-with-the-rules-engine.html).

To create a rule, there are two options. Either you create it via the UI, or via a YML import job.

# Create a rule in the PIM UI

:::warning
To be able to create/edit rules, you need to have the right permissions. To manage your permissions, please go to `System/Roles`, select the appropriate role and then, click on `Permissions/Rules`, and tick `Create rules` and/or `Edit rules`.
:::

To create a rule via the UI, go to `Settings/Rules` and click on `Create`. A creation popin appears. Choose a **code** and a **label** to name your rule, then validate. You rule is created! You can now define your product selection and the action.s you want to apply to your selection. Let's go!

Once your rule is created, the rule edit screen appears. On this screen, you can see two tabs: the `rule builder` and `properties`. In the `Properties` tab, you can define the [priority](what-is-a-rule.html#definition-of-a-rule) of your rule, but also its label translations. These fields can be updated afterward. The code is the only part that is immutable.

## The Rule builder tab

This screen is the most important one as this is where you can manage your conditions and actions.

:::warning
This screen is still under development, mind you! All the filters and actions are not available in the UI yet. Don't worry, you can still use the [import job](manage-your-rules.html#create-rules-via-a-yml-import) to create rules based on filters/actions that you can't find in the UI for now. When the filters/actions are not available, we display a mini-helper to inform you.
:::

The first thing to do is to filter the products you want to update with this rule. To do so, there are a bunch of filters available under the `Add condition` button.

### Product selection
In the `Product selection` part, you can define the 'Conditions'. They are the attributes or system fields you want to use to filter your products/product models. Altogether, your `Conditions` will create your 'Product selection'.

:::info
If you want to know what is the entire [list of attributes/system fields](get-started-with-the-rules-engine.html) take a look at our article.
:::

:::warning
By default, when there is no condition, your whole product catalog is selected. So if you add one or several actions, your whole catalog will be updated!
:::

At the top of the list, you will find the system fields and below, all the attributes gathered by attribute groups. There is a search bar to help you find the attributes. Each time you add a condition, its color turns to purple to inform you that it is already used. A new line appears in the product selection.

Let's see how a line is organized.

On the left, you will find the **system** fields or **attribute** you chose. It is written in purple.
Then, you have to choose an **operator**. Depending on the filter, the operator list changes.
The next fields vary depending on your filter. There can be up to 3 types of fields. You can have the **value** field. For example, if your filter is a multi-select attribute type, you can choose which options you want to filter on.

If your filter has a value per channel and/or per locale, the `channel` and `locale` fields appear, in order to let you choose which locale/channel you want to filter on.

If you want to remove a condition, just click on the cross at the end of the line.

As you can see on the left side of the `Add condition` button, there is a counter that tells you how many products/product models will be updated by this rule. It means that these conditions will impact X products/product models.
This count is automatically updated as soon as you change a condition.

#### Available conditions in the UI

You can use the following system fields and attribute types as `conditions` to select your products/product models via the PIM interface:

- Categories
- Completeness
- Family
- Multi select attribute
- Simple select attribute
- Text attribute
- Number attribute


### Add actions

Now that you have filtered your products/product models, you can add one or several actions you'll apply to them!

To do so:
1. Click on `Add action` at the top of the screen
1. Select the action you want to add. There is a search bar and a scroll bar to choose the action from a list.
1. A new section appears under the `Product selection` part.

:::info
Just like for the `Product Selection`, all the actions are not available in the UI yet. If you need to apply an action that is not managed for now, you can still import your YML file, and retrieve your rule in the PIM UI.
:::

Here is the [list of all the actions](get-started-with-the-rules-engine.html) you can do with the rules engine if you use the YML file import.

Depending on the action you choose, the template changes. The table below lists all the actions that you can add via the PIM interface.

#### Available actions in the UI

| Actions  | What they do |
|---|---|
| Set categories  | Classify your products/product models in the categories you choose, and **remove** them from their former categories.  |
| Add categories  | Add your products/product models to new categories, **without removing** them from their former categories.  |
| Set family  | Replace your products/product models family |
| Clear attribute value  | Delete values from an attribute on your product/product models selection  |
| Clear associations  | Delete all the associations of your product/product models selection  |
| Clear groups  | Delete all the groups of your product selection (product models don't have groups) |
| Clear categories  | Delete all the categories of your product/product model selection  |
| Copy attribute value  | Copy the value from an attribute to another one  |
| Remove categories  | Remove the categories of your product/product model selection  |
| Add attribute value  | Add values to a multi select or price collection attribute. It will keep the former values |
| Set attribute value  | Set values to a multi select, simple select, number, text, price collection or boolean attribute. It will remove the former values |
| Remove attribute values  | Remove values from a multi select attribute  |
| Add groups  | Add groups to your product selection (product models don't have groups)  |


## Different use cases
As explained earlier, some conditions/actions are not available in the UI yet. It means that you are not able to build all the rules you want via the PIM, and you may need to use the YML file import to do so. Let's see what happens in the following scenarios.

### All the conditions/actions you need are available in the UI
The conditions/actions that are available right now cover 80% of our clients use cases. It means that 80% of our clients' rules can be managed directly in the UI.
For example, you can **categorize** all the products/product models that are in the **"accessories" family**, and which have an empty `marketing_description` attribute in the `en_US` locale and `ecommerce` channel.
To do so, you must add two conditions. One on `family`, and another one on the `marketing_description` attribute.
Then, add the `Set category` action, and choose the category tree and the category.

![image](../img/Rules_UsecaseFullUI.png)

### Some conditions/actions are missing in the UI for now
If you need to build a rule using filters/actions that are not available in the UI yet, you must use the YML file import to create the rule. Then, when you import this file, your rule appears in the rules grid. You can open it and from the UI, you will be able to edit the conditions/actions that were available but not the ones you just added via your YML import.
Let's see how it is displayed in the UI after a YML import.

#### If your condition is not available in the UI yet
If your conditions are composed of system fields (for instance: `status`) or attribute types (for instance: `asset collection`) that we don't manage in the UI, these conditions will be displayed in a read only mode.

![image](../img/Rules_UsecaseConditionsYML.png)

#### If your action is not available in the UI yet
The action will be displayed in a read only mode.

![image](../img/Rules_UsecaseActionYML.png)

#### If in the UI, your action is available but the attribute used in this action isn't
If your action is composed of system fields or attribute types that we don't manage in the UI for now, these actions will be displayed in a read only mode.

For example, you needed to use a `set attribute value` action (already available), and a target attribute that is not supported yet such as a `boolean`. Therefore you previously imported your rule via YML.

![image](../img/Rules_UsecaseAttributeNotManaged.png)

# Create rules via a YML import
To create rules using a YML file, you need to [create](get-started-with-the-rules-engine.html) it and import it in the PIM using the `Rule import in YML` import job.

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

# Calculate the number of impacted products per rule

To help you define the conditions for your rules and validate them, you can calculate the number of matching products that the rule will process.

The first time a rule is executed, it can match many products. The following time, you might have zero `Impacted products` or only a few.

1.  To use this action, select one or several rules by ticking them on the left side of the screen
1.  Click on `Calculate the impacted products`
1.  Then confirm the action in the pop in
1.  A flash message confirming the action will be displayed and you will be notified once the calculation is done.

![image](../img/Rules_CalculateImpactedProducts.png)

The number of impacted products will appear on the right side of your screen in the `Impacted products` column.


# Execute rules

:::info
Rules are automatically executed daily at 5 am UTC.  
Rules are also regularly executed after a bulk action or after imports with rules.
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

![image](../img/Rules_Execute.png)


## Execute a selection of rules

You can also execute several rules at the same time:
1.  Select one or several rules by ticking them on the left side of the screen
1.  Click on `Execute`
1.  Then confirm the action in the pop in
1.  A flash message confirming the action will be displayed and you will be notified once the execution is done

![image](../img/Rules_BulkExecution.png)

# Delete rules

::: warning
A deleted rule can no longer be executed by the rules engine. The products keep the values calculated by the deleted rule.
:::

## Delete a single rule

To delete a rule, click on `Delete` at the end of each line in the grid.  
A confirmation message validates the action of deleting a rule.

![image](../img/Rules_Delete.png)

::: info  
If you do not see the `Delete` button, it might be because you do not have the right permissions. Please refer to [Manage your user roles](build-your-user-roles.html).
:::

## Delete a selection of rules

You can also delete several rules at the same time:
1.  Select one or several rules by ticking them on the left side of the screen  
1.  Click on `Delete`
1.  Then, confirm the action in the pop in.

![image](../img/Rules_MassDelete.png)
