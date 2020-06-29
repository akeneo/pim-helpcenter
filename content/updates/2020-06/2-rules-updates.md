# Rules engine updates

At Akeneo, we aim at delivering the best user experience. A good experience with our PIM goes with a good understanding of what is going on, especially when there are errors that you have to correct.

The following improvements will help you better monitor rule executions, and help you correct errors in the rules engine that can occur when importing a YML file or when executing rules.

## Monitor rules execution under the process tracker

::: meta-data type="Improvement" features="Rules engine, Productivity" available="mid-June" link-to-doc="../articles/manage-your-rules.html#execute-rules.html"
:::

Before, the rules were executed by a **background process**. The issue was that you could not be aware of errors during the rules execution.

From now on, rules are executed by a **job**. The advantage is that you can **benefit from the job tracker** where you will be able to **see the errors/warnings** that occurred during the execution.

If the rules are launched via the UI, the user who launched the rule(s) can directly access the job execution summary.

If the rules are automatically launched, you'll need to be granted the `View all jobs in process tracker` [permission](../articles/manage-the-interface-and-actions-accesses.html).

## Improved error messages after a rule import

::: meta-data type="Improvement" features="Rules engine, Productivity" available="early June"
:::

We know that understanding errors when importing YML files containing the rules can be sometimes a bit "complicated" for you. Why? Because errors/warnings are not very clear and precise.  
In order to improve your understanding and help you fix errors, some error messages have been improved in the process tracker after a rules import.
From now on, you know in which rule is the error, and what is the error.

::: more
[What is a rule?](../articles/what-is-a-rule.html)  
[What is the rules engine?](../articles/get-started-with-the-rules-engine.html)   
[How to manage my rules?](../articles/manage-your-rules.html)
:::
