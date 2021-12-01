---
id: manage-your-apps
themes: connectivity
title: Manage your **Apps**
popular: true
ee: false
related: how-to-connect-my-pim-with-apps, connection-dashboard
---

# Manage your connected Apps

Now that you connected one or several Apps with your Akeneo PIM, you probably want to see the list of all the connected Apps and access their settings.

This is the role of the `Connect` sub-menu called `Apps`. Here you can see information about connected Apps. Their name, logo, category, and who owns it.

![Connected apps](../img/connected-apps.png)

# Consult authorizations granted to your App

To access the settings of an App, click on `Manage App` and you will access the first page of the app settings. 

This is where you can see which authorizations have been granted during the activation process.

![Connected app Settings](../img/connected-app-settings.png)


# Setup your App permissions `EE`

::: warning
This tab is only available for EE users.
:::

To access the settings of an App, click on `Manage App` and you will access the first page of the app settings, then click on the `Permissions` tab.

This is where you can view and update permissions granted to an App.

![Connected app permissions](../img/connected-app-permissions.png) <!--Update screenshot-->

If you want to know more about App permissions, please read this paragraph of our documentation: [How to give permissions to your App?](how-to-connect-my-pim-with-apps.html#how-to-give-permissions-to-your-app-ee-only) 

## Who can manage App permissions?

To give the capacity to choose who can see the `Apps` menu and manage an App, we added a new Role permission in the PIM: `Manage Apps`. To manage an App, your user role needs it.

To give the role permission: 
- Go to `System`, then `Roles`
- Click on the role you want to update
- Go to the `Permissions` tab and select the System entry
- Finally enable the `Manage apps` option.

![Role manage apps](../img/role-manage-apps.png)

The PIM is also using the following role permissions to manage who can grant permission to an App: 

- Manage attribute group permissions
- Manage category permissions
- Manage locale permissions

If you user doesn't have these permissions, the fields related to permission will be blocked. 

![Connected app Permissions on categories](../img/connected-app-permissions-categories.png)

![Connected app Permissions on locales](../img/connected-app-permissions-locales.png)

![Connected app Permissions on attribute groups](../img/connected-app-permissions-att-groups.png)

# Delete an App

If you connected an App you don't want to use anymore, you can delete it.

1. Click on `Connect`.
2. Click on `Apps`.
3. Click on the App you want to delete.
4. Click on `...` in the top right corner of your screen.
5. And click on `Delete`.
6. A pop-in asks you for confirmation. Again, click on `Delete`.

As a result, your App will be deleted from your PIM. It means that:

- you will no longer be able to follow its data flows from the Data flows dashboard,
- your App won't be able to read, edit or delete data in your PIM. If you ever need this App again, you will have to connect it again from the PIM marketplace.