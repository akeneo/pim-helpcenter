# Rules engine improvements

## Tags for each action in the rules grid
::: meta-data type="Improvement" features="Productivity, Rules engine" available="early May" link-to-doc="../articles/articles/manage-your-rules.html"
:::

From now on, you can see at a glance the action type behind each rule (add, copy, concatenate, set, calculate, remove, clear) in the rules grid. To ease your readability, we defined a color code for each action type :wink:.

## New parameter in the Calculate action in order to round the result
::: meta-data type="Improvement" features="Productivity, Rules engine" available="late May" link-to-doc="../articles/articles/get-started-with-the-rules-engine.html"
:::

We added a new "round_precision" parameter in the Calculate action, in order to let the user choose the way he wants to round the result of the operation(s).

For instance, if the destination attribute is a number attribute that doesn't allow decimals, the action can be applied only when the result is an integer. This behavior can be changed by setting up the round_precision to 0: the result will be rounded and the action will be applied!
