---
id: manage-your-connections
themes: connectivity
title: Manage your **connections**
popular: false
ee-only: false
related: what-is-a-connection, how-to-connect-my-pim, connection-dashboard
---

::: info
Wondering what `Connections` are? Let's discover what this concept is together [right here](what-is-a-connection.html).
:::

# See at a glance all your connections

In the PIM, you can easily see all its connections to third-parties, such as ERPs, DAMs, ecommerce platforms, syndication tools,...

To do so, click on the `System` menu and then, on the `Connections` submenu.  
The following screen should be displayed.

![Connections overview](../img/connections-overview.png)

As an example, here, we have 3 connections around this PIM:
- 2 source connections: an ERP and a retail collaboration platform,
- one destination connection: an e-commerce platform.

Those 3 third-parties are either sending or receving information to/from the PIM.

::: tips
There is no connection declared here yet? Discover [what a connection is here](what-is-a-connection.html) and then don't hesitate to [create a new one](#create-a-connection)! :wink:
:::

# Create a connection

To [connect your PIM](how-to-connect-my-pim.html) to a third-party solution, you will need to create a connection.

::: info
You can create up to 50 connections. :rocket:
:::

Here are the simple steps to create a connection:
1. Click on the `System` menu.
2. Click on the `Connections` submenu.
3. Click on the `Create` button.
4. In the `Label` field, enter the name of your connector. For example, if you wish to connect your PIM to Magento, write `Magento` or `Magento connector`.  
_Sidenote: the code of the connection is automatically generated based on the label. You can keep it as is or change it, it's up to you!_
5. Choose the flow type of your connection. To choose wisely, see the section [below](#choose-your-flow-type).

You're done! :tada:

Once your connection is created, you'll be able to assign it a visual in order to easily see which connection it refers to. For example, if your connection represents your connection to Magento, you may want to put a picture of the Magento logo, exactly like in the screenshot below.

![A logo for your connection image](../img/connection-image-choice.png)

After creating the connection, you'll also be given a set of credentials to authenticate your connector. See this [section](#grab-your-credentials), to know more.

# Choose your flow type

When you create or update a connection, you have to define a "flow type". But what does it mean?

The flow type is a central concept in the connection notion. It allows you to characterize the data flows that will interact with your PIM. More precisely it allows to indicate the **direction** of a given flow.

It will determine the way your connection flows are monitored in the [connection dashboard](connection-dashboard.html) feature.

This flow type has three available options you'll have to choose from. The next sections describe each of them. It will help make your decision.

## The `Source connection` flow type

Choose this option for you connection whenever it represents a data flow entering the PIM. For example, your data flow is mainly creating or updating PIM data, such as products, product models, assets, reference entities,...

::: info
With this flow type, you can connect ERP, DAM, MDM,...
:::

If you choose this option, the connection dashboard feature will focus on the data that is pushed inside the PIM via this connection.

## The `Destination connection` flow type

Choose this option for you connection whenever it represents a data flow that is mainly extracting product information from your PIM.

::: info
With this flow type, you can connect e-commerce platforms, publishing and syndication tools...
:::

If you choose this option, the connection dashboard feature will focus on the data that is pushed outside the PIM via this connection.

## The `Other` flow type

Choose this option whenever you can't opt for none of the options above.

::: warning
Try avoiding choosing this option. Indeed, you won't have any connection monitoring for your `Others` connections, as we can't know what is the direction of your flows in this connection.
:::

::: tips
You may be tempted to declare the connections connecting to translation tools as `Others`. Indeed, in this case, product information in one language is being retrieved from the PIM to be translated. Then, once the translation is done, the translated product information is pushed back in the PIM. So, it is both a `Source` and a `Destination` connection.  
That being said, even in this case, we advise you to choose between the two options, instead of choosing `Others`. The question you should ask yourself here is _"Do I wish to have a monitoring of the flows that are going out or the flows that are going in?"_.
:::

# Grab your credentials

Whenever you create a connection, the PIM automatically generates a set of credentials for you. These credentials are necessary if you want to make any API calls to the PIM. Don't hesitate to [learn more about the authentication over the API in our dedicated API website](https://api.akeneo.com/documentation/authentication.html).

These credentials consist of 4 different strings:
- the `client id`,
- the `secret`,
- the connection `username`,
- the connection `password`.

To access the client id, the secret and the username, go to `System` / `Connections`, click on the connection for which you want to see the credentials. They are displayed on the right side of the screen in the `Credentials` column.

![Credentials in the connection form](../img/credentials-in-connection-form.png)

You can easily copy/paste the credentials by clicking on the button next to them.

![Copy/paste credentials](../img/copy-paste-credentials.png)

The password is only showed once to you, just after the connection creation. So, make sure you save it somewhere.

![Password is showed only once](password-showed-only-once.png) <!-- TODO -->

::: tips
You forgot your password? Don't worry, you can regenerate a new one. Take a look at the [Regenerate your connection password](#regenerate-your-connection-password) section.
:::

Use these credentials to authenticate the API calls in the connector that matches your connection. For this step, take a look at this [guide](https://api.akeneo.com/getting-started/connect-the-pim-4x/step-3.html).

# Revoke/regenerate your connection secret

In some cases, your connection secret may have leaked and fallen into the wrong hands. So you want to revoke this secret, to avoid enabling these "wrong hands" to access your PIM via the API.

::: info
Along with the secret revocation, the PIM will automatically regenerate a new secret for you.
:::

Here are the simple steps to go through to revoke your secret:
1. Click on the `System` menu.
2. Click on the `Connections` submenu.
3. Click on the connection for which you want to revoke the secret.
4. In the `Credentials` section, on the right side of the `Secret` line, click on the regenerate icon button.
![Revoke/Regenerate icon button](../img/regenerate-icon-button.png)
5. A popin asks you for confirmation. Click on the `Regenerate` button.
 
The current secret will be revoked. It means that no one will be able to use it anymore to authenticate their API calls.  
Also, a new secret has been generated. Be sure to use this new one in your connector, in order to be able to make API calls again.

::: warning
As you may have understood, revoking a secret can have an impact on the connector linked to your connection. Indeed, when you revoke a secret that is used by one of your connectors, all its API calls will automatically stop working and send 401 errors instead. You won't be authenticated anymore.  
To be authenticated again, launch a new [authentication request](https://api.akeneo.com/api-reference.html#post_token) using the new generated secret.
:::

::: tips
Don't really know how the authentication via API works? [Don't worry, there is documentation to help you! It's right here!](https://api.akeneo.com/documentation/authentication.html)
:::

# Regenerate your connection password

The PIM shows you the connection password only once, at the connection creation. In case you may have forgotten it, you can regenerate a new one.  

Here's how:
1. Click on the `System` menu.
2. Click on the `Connections` submenu.
3. Click on the connection for which you want to revoke the password.
4. In the `Credentials` section, on the right side of the `Password` line, click on the regenerate icon button.
![Regenerate password icon button](../img/regenerate-password-icon-button.png) <!-- TODO -->
5. A popin asks you for confirmation. Click on the `Regenerate` button.

The current password will be deleted and a new one is generated. It means that no one will be able to use it anymore to authenticate their API calls.  
Be sure to use the new password in your connector, in order to be able to make API calls again.

::: warning
As you may have understood, regenerating a password can have an impact on the connector linked to your connection. Indeed, when you regenerate a password that is used by one of your connectors, all its API calls will automatically stop working and send 401 errors instead. You won't be authenticated anymore.  
To be authenticated again, launch a new [authentication request](https://api.akeneo.com/api-reference.html#post_token) using the new generated password.
:::

::: tips
Don't really know how the authentication via API works? [Don't worry, there is a documentation to help you! It's right here!](https://api.akeneo.com/documentation/authentication.html)
:::

# Delete a connection

If you created a connection you don't want to use anymore, you can delete it.

1. Click on the `System` menu.
2. Click on the `Connections` submenu.
3. Click on the connection you want to delete.
4. Click on the `...` in the top right corner of your screen.
5. Click on the `Delete` option.
![Delete a connection](../img/delete-a-connection.png) <!-- TODO -->
6. A popin asks you for confirmation. Click on the `Delete` button.

As a result, your connection will be deleted. It means that: 
- you won't be able anymore to follow its data flows inside the [connection dashboard](connection-dashboard.html),
- the credentials that were generated with the connection, will be revoked. The API authentication made with these credentials will be revoked as well. It means that all the API calls using a token that was generated based on these credentials will now send 401 errors. If this does not ring any bell to you, you might want to learn more about [authentication in the API right here](https://api.akeneo.com/documentation/authentication.html). :wink:
