---
id: manage-your-apps
themes: connectivity
title: Manage your **apps**
popular: false
ee: false
related: how-to-connect-my-pim-with-apps, connection-dashboard
---

Now that you connected one or several Apps with your Akeneo PIM, you probably want to see them listed in the UI and access their settings.

This is the role of the `Connect` sub-menu called `Connected Apps`. Here you can see information about connected Apps: their name, logo, category, and who owns it.

![Connected apps](../img/connected-apps.png) 

::: info
To discover how to connect an App with your PIM, please read our article [How to connect my PIM with Apps?](how-to-connect-my-pim-with-apps.html)
:::


# Who can manage and open Apps?

From the `Connected Apps` menu, users can manage and open Apps.

To give you the capacity to choose who can manage or open an App, we added two new Role permissions in the PIM. 

To manage an App, at least one of your user roles needs the `Manage apps` permission, and to open a connected App interface, at least one of your user roles needs the `Open apps` permission.

To give role permission: 
- Go to `System`, then `Roles`
- Click on the role you want to update
- Go to `Permissions` and select the `Connect` entry
- Finally, enable the `Manage apps` and/or `Open apps` options.

![Role manage apps](../img/role-manage-apps.png) 

::: warning
If you can't update user roles, please ask your administrator. 
:::

# Open a connected App interface
To open a connected App interface, click on `Open app` in the `Connected Apps` menu. 
The App interface will open in a new tab of your navigator. 

![Open App button](../img/app-card-open.png) 

When you open an App, Akeneo PIM may ask you to agree to share some of your user information to directly authenticate you on the App. To do so, click on `Agree` and you will be automatically redirected to the App.

![Wizard authentication](../img/wizard-authentication.png) 

 
# Manage your connected App settings

To access the connected App settings, click on `Manage app` in the `Connected Apps` menu. 

![Manage App button](../img/app-card-manage.png) 

You will see 3 tabs in that section: 
- Settings
- Permissions
- Error monitoring

## Choose your flow type

You can define a "flow type" after you connect an App. But what does it mean?

The flow type allows you to characterize the data flows interacting with your PIM. More precisely, it allows you to indicate the **direction** of a given flow.

It will determine how your App flows are monitored in the [data flows dashboard](connection-dashboard.html).

This flow type has three available options described in the following sections. It will help you make your decision.

### The `Other` flow type

The `Other` flow type is the default value for all connected Apps, so there is no App monitoring for your connected Apps. To enable App monitoring, make sure you update their flow type by choosing the `Data source` or the `Data destination` option.

### The `Data source` flow type

Choose this option for your App whenever it represents a data flow entering the PIM. For example, select this option if the connected App mainly creates or updates PIM data, such as products, product models, assets, or reference entities.

If you choose this option, the Data flows dashboard will focus on this App's data pushed **into** the PIM.

::: info
With this flow type, you can connect your ERP, DAM, or MDM.
:::

### The `Data destination` flow type

Choose this option for your App to represent a data flow that mainly extracts product information from your PIM.

If you choose this option, the Data flows dashboard will focus on this App's data pushed **outside** the PIM.

::: info
You can connect your e-commerce, publishing, or syndication Apps with this flow type.
:::

## Enable Apps monitoring

You can choose to monitor a connected App in [Data flows](connection-dashboard.html).  
To do so, check `Track in Data flows dashboard` in the settings section of the connected App you want to monitor.

<img class="img-responsive in-article" alt="Track checkbox" src="../img/track-checkbox.png" style="max-width: 250px;">

::: warning
We don't monitor Apps with the `Other` flow type.  
If you want to monitor the data entering your PIM, [change your connected App flow type](#choose-your-flow-type) to `Data source`.  
If you want to monitor the data pulled out of the PIM by your App, [change your connected App flow type](#choose-your-flow-type) to `Data destination`.
:::

::: info
You can enable or disable the monitoring whenever you want.  
We will stop monitoring the connected App immediately, and you won't be able to select it in the filters of the Data flows dashboard. However, note that all the data collected up to that point for this connected App will still appear in some KPIs.
:::


## Access authorizations granted to your App

To access an App's settings, click on `Manage app`. 

Here is where you can see which authorizations have been granted during the activation process.

![Connected App Settings](../img/connected-app-settings.png)


# Update your App permissions `EE`

::: warning
This tab is only available for EE users.
:::

To access an App's settings, click on `Manage app`, then click on `Permissions`.

This page allows you to view and update permissions granted to an App.

![Connected App permissions](../img/connected-app-permissions.png) 

::: info
If you want to know more about App permissions, please read this section of our documentation: [How to give permissions to your App?](how-to-connect-my-pim-with-apps.html#how-to-give-permissions-to-your-app-ee-only) 
:::


## Who can manage App permissions?

The PIM uses the following role permissions to manage who can grant permission to an App: 

- Manage attribute group permissions
- Manage category permissions
- Manage locale permissions

If your user doesn't have these permissions, the fields related to permission will be blocked. 

![Connected app Permissions on categories](../img/connected-app-permissions-categories.png)

![Connected app Permissions on locales](../img/connected-app-permissions-locales.png)

![Connected app Permissions on attribute groups](../img/connected-app-permissions-att-groups.png)

# Delete an App

If you connected an App you don't want to use anymore, you can delete it.

1. Click on `Connect`.
2. Click on `Connected Apps`.
3. Click on the App you want to delete.
4. Click on `...` in the top right corner of your screen.
5. And click on `Delete`.
6. A pop-in asks you for confirmation. Again, click on `Delete`.

As a result, your App will be deleted from your PIM. It means that:

- you will no longer be able to follow its data flows from the Data flows dashboard,
- your App won't be able to read, edit or delete data in your PIM. If you ever need this App again, you will have to connect it again from the `App Store`.