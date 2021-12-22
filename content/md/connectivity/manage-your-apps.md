---
id: manage-your-apps
themes: connectivity
title: Manage your **apps**
popular: false
ee: false
related: how-to-connect-my-pim-with-apps, connection-dashboard
---

::: warning
**THIS FEATURE WILL BE AVAILABLE SOON**
:::

Now that you connected one or several apps with your Akeneo PIM, you probably want to see the list of all the connected apps and access their settings.

This is the role of the `Connect` sub-menu called `Apps`. Here you can see information about connected apps. Their name, logo, category, and who owns it.

![Connected apps](../img/connected-apps.png) 

::: info
To discover how to connect an app with your PIM, please read our article [How to connect my PIM with apps?](how-to-connect-my-pim-with-apps.html)
:::


# Who can manage and open apps?

From the `Apps` menu, users can manage and open apps.

To give you the capacity to choose who can manage or open an app, we added two new Role permissions in the PIM. 

To manage an app, at least one of your user roles needs the `Manage apps` permission, and to open a connected app interface, at least one of your user roles needs the `Open apps` permission.

To give role permission: 
- Go to `System`, then `Roles`
- Click on the role you want to update
- Go to the `Permissions` tab and select the System entry
- Finally, enable the `Manage apps` and/or `Open apps` options.

![Role manage apps](../img/role-manage-apps.png) 

::: warning
If you can't update user roles, please ask your administrator. 
:::

# Open a connected app interface
To open a connected app interface, click on `Open app` in the `Apps` menu. 
The app interface will opens in a new tab of your navigator. 

![Open app button](../img/app-card-open.png) 

When you open an app, Akeneo PIM may ask you to agree to share some of your user information to directly authenticate your on the app. To do so, click on `Agree` and you will be automaticaly redirected to the app.

![Wizard authentication](../img/wizard-authentication.png) 

 
# Manage your connected app settings

To access a connected app's settings, click on `Manage app` in the `Apps` menu. 

![Manage app button](../img/app-card-manage.png) 

Each connected app has 3 tabs: 
- Settings
- Permissions
- Error monitoring

## Choose your flow type

You can define a "flow type" after you connect an app. But what does it mean?

The flow type allows you to characterize the data flows interacting with your PIM. More precisely, it allows you to indicate the **direction** of a given flow.

It will determine how your app flows are monitored in the [data flows dashboard](connection-dashboard.html).

This flow type has three available options described in the following sections. It will help you make your decision.

### The `Other` flow type

By default, all connected apps have the `Other` flow type, so you won't have any app monitoring for your connected apps unless you update their flow type by choosing the `Data source` or the `Data destination` option.

### The `Data source` flow type

Choose this option for your app whenever it represents a data flow entering the PIM. For example, select this option if the connected app mainly creates or updates PIM data, such as products, product models, assets, or reference entities.

If you choose this option, the Data flows dashboard will focus on this app's data pushed **inside** the PIM.

::: info
With this flow type, you can connect ERP, DAM, MDM,...
:::

### The `Data destination` flow type

Choose this option for your app to represent a data flow that mainly extracts product information from your PIM.

If you choose this option, the Data flows dashboard will focus on this app's data pushed **outside** the PIM.

::: info
You can connect e-commerce, publishing, or syndication apps with this flow type.
:::

## Enable the tracking

You can choose to track a connected app in [Data flows](connection-dashboard.html).  
To do so, check `Track in Data flows dashboard` in the setting screen of the connected app you want to track.

<img class="img-responsive in-article" alt="Track checkbox" src="../img/track-checkbox.png" style="max-width: 250px;">

::: warning
We don't track apps with the `Others` flow type.  
If you want to track the data entering your PIM, [change your connected app flow type](#choose-your-flow-type) to `Data source`.  
If you want to track the data pulled out of the PIM by your app, [change your connected app flow type](#choose-your-flow-type) to `Data destination`.
:::

::: info
You can enable or disable the tracking whenever you want.  
We will stop tracking the connected app immediately, and you won't be able to select it in the filters of the Data flows dashboard. However, note that all the data collected up to that point for this connected app will still appear in some KPIs.
:::


## Consult authorizations granted to your app

To access an app's settings, click on `Manage app`, and you will access the first page of the app settings. 

This page is where you can see which authorizations have been granted during the activation process.

![Connected app Settings](../img/connected-app-settings.png)


## Setup your app permissions `EE`

::: warning
This tab is only available for EE users.
:::

To access an app's settings, click on `Manage app` and you will access the first page of the app settings, then click on the `Permissions` tab.

This page allows you to view and update permissions granted to an app.

![Connected app permissions](../img/connected-app-permissions.png) 

::: info
If you want to know more about app permissions, please read this paragraph of our documentation: [How to give permissions to your app?](how-to-connect-my-pim-with-apps.html#how-to-give-permissions-to-your-app-ee-only) 
:::

### Who can manage app permissions?

The PIM is using the following role permissions to manage who can grant permission to an app: 

- Manage attribute group permissions
- Manage category permissions
- Manage locale permissions

If your user doesn't have these permissions, the fields related to permission will be blocked. 

![Connected app Permissions on categories](../img/connected-app-permissions-categories.png)

![Connected app Permissions on locales](../img/connected-app-permissions-locales.png)

![Connected app Permissions on attribute groups](../img/connected-app-permissions-att-groups.png)

# Delete an app

If you connected an app you don't want to use anymore, you can delete it.

1. Click on `Connect`.
2. Click on `Apps`.
3. Click on the app you want to delete.
4. Click on `...` in the top right corner of your screen.
5. And click on `Delete`.
6. A pop-in asks you for confirmation. Again, click on `Delete`.

As a result, your app will be deleted from your PIM. It means that:

- you will no longer be able to follow its data flows from the Data flows dashboard,
- your app won't be able to read, edit or delete data in your PIM. If you ever need this app again, you will have to connect it again from the PIM marketplace.