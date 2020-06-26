# Rules engine updates

At Akeneo, we aim at delivering the best user experience. And a good experience of our PIM comes with a good understanding of what is happening, especially when there are errors that you have to fix.

The following improvements will radically help you to understand errors in the rules engine, either during a YML file import or during the rules execution.

## Rules execution commands become jobs

::: meta-data type="Improvement" features="Rules engine, Productivity" available="mid-June" link-to-doc="../articles/manage-your-rules.html#execute-rules.html"
:::

Before, the rules were executed by a **background process**. The issue was that you could not be aware of errors during the rules execution.

From now on, rules are executed by a **job**. The advantage is that you can **benefit from the job tracker** where you will be able to **see the errors/warnings** that occurred during the execution.

If the rules are launched via the UI, the user who launched the rule(s) can directly access the job execution summary.

If the rules are automatically launched (by a cron), the user must be granted the `view all jobs in process tracker` permission (ACL - role permissions).

## Improvement of error messages during YML file import

::: meta-data type="Improvement" features="Rules engine, Productivity" available="early-June"
:::

We know that understanding errors when importing YML files containing the rules can be sometimes a bit "complicated" for you. Why? Because errors/warnings are not very clear and precise.
In order to improve your understanding and help you fix errors, some error messages have been improved in the process tracker after a rules import.
From now on, you know in which rule is the error, and what is the error.

::: more
[What is a rule?](../articles//what-is-a-rule.html)  
[What is the rules engine?](../articles/get-started-with-the-rules-engine.html)   
[How to manage my rules?](../articles/manage-your-rules.html)
:::
