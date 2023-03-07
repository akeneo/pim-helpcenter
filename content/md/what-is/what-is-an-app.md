---
id: what-is-an-app
themes: akeneo-concepts, connectivity
title: What is an **app**?
popular: true
ee: false
related: how-to-connect-my-pim-with-apps, manage-your-apps
---

# What's an App? 
Apps are the best way to connect Akeneo PIM with third parties. They can retrieve and push data from and into Akeneo PIM through the REST API. Thanks to a step-by-step activation process integrated into the Akeneo PIM interface, anyone can connect an App to Akeneo PIM despite these technical interactions.

![What's an app schema](../img/whats-an-app.png)

The Akeneo App Store natively gives access to best-of-breed technology partners. Today, we have more than 150 extensions, including apps, which cover a broad set of use cases that allow you to connect third-party systems with their PIM. 

When you don't find an on-the-shelf App answering your exact need on the Akeneo App Store, Custom apps allow you to develop your own app and benefit from all app features without publishing it. 

# Where to find Apps & Connectors?
Because we know it can be tedious to leave your work environment to find the App or Connector you need, we bring them to you. We developed the PIM `App Store` as a way for you to smoothly identify the most relevant App or Connector directly from your PIM interface.

![PIM App Store](../img/pim-marketplace-with-apps.gif)

You can see Apps and Connectors compatible with your Akeneo PIM version and edition. When you identify something interesting, click on `More info` to access the related documentation.

Akeneo App Store is where you will read all the documentation, consult all the available screenshots, and reach the seller.

To find the Apps or Connectors you need, in you PIM, go to the `Connect` menu, then click on `App Store`, and here you are!

::: tips
Feel free to test our new connection experience by connecting the **Akeneo Demo App**. 
:::


# Who can connect Apps?

To give the capacity to choose who can connect an App, we added a new Role permission in the PIM: `Manage apps`. 
To connect an App, your user role needs it.

Without this role permission, you won't see the `Apps` menu and won't be able to click on `Connect` as in the following screenshot.

<img class="img-responsive in-article" alt="App Store connect disabled" src="../img/marketplace-connect-disabled.png" style="max-width: 500px;">

To give the role permission: 

- Go to `System`, then `Roles`
- Click on the role you want to update
- Go to the `Permissions` tab and select the `Connect` entry
- Finally enable the `Manage apps` option.

![Role manage apps](../img/role-manage-apps.png)

::: info
To find out more about app connection, please read the [How to connect my PIM with Apps?](how-to-connect-my-pim-with-apps.html) article. 
:::
