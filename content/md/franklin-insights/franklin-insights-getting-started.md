---
id: franklin-insights-getting-started
themes: franklin-insights
title:  Franklin Insights **getting started**
ee-only: true
related: franklin-insights-mappings, franklin-insights-subscriptions
---

# Overview

Welcome to Franklin’s world! Franklin is our new **product data intelligence assistant**, at your service :wink:

Franklin helps you on your catalog enrichment mission and guides you towards creating a **more compelling product experience, faster than ever before**.

:::info
For now, Franklin can assist retailers who operate in the United States.
:::
# Franklin activation

 PIM clients who purchase Franklin credits will receive an **activation code**. The activation code needs to be saved on the PIM on `System`/`Franklin Insights Connection` in order to activate communication between the PIM and Franklin.

![image](../img/Akeneo_Screenshot_Franklin_Insights_Connection.png)

::: warning
The Franklin activation failed? Please make sure that you pasted the code we provided correctly. If the issue persists, please let us know and we will be happy to assist :)
:::

The next step of the setup stage is to match between your catalog attributes and Franklin's identifiers on the **Franklin Identifiers Mapping UI** on `Settings`/`Franklin Insights`. You can learn more about this stage [here](/franklin-insights-mappings.html#identifiers-mapping).


# Franklin permissions

You can manage the users’ permissions for Franklin on `System`/`Roles`/`Permissions`.

There are 3 different Franklin permissions:

- **Franklin connection**: only users who have this permission active will be able to view and manage the Franklin activation on `System`/`Franklin Insights Connection`.
- **Franklin settings**: only users who have this permission active will be able to view and edit the Franklin mappings on `Settings`/`Franklin Insights`.
- **Franklin product subscription**: only users who have this permission active will be able to subscribe and unsubscribe products to and from Franklin via the Product Edit Form or bulk action.
