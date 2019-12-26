---
id: manage-your-connections
themes: connectivity
title: Manage your **connections**
popular: false
ee-only: false
related: what-is-a-connection, how-to-connect-my-pim, connection-dashboard
---

# Create a connection

To [connect your PIM](how-to-connect-my-pim.html) to a third-party solution, you will need to create a connection.

::: info
Wondering what `Connections` are? Let's discover what this concept is together [right here](what-is-a-connection.html).
:::

Here are the simple steps to create an connection:
1. Click on the `System` menu.
2. Click on the `Connections` submenu.
3. Click on the `Create` button.
4. In the `Label` field, enter the name of your connector. For example, if you wish to connect your PIM to Magento, write `Magento` or `Magento connector`.  
_Sidenote: the code of the connection is automatically generated based on the label. You can keep it as is or change it, it's up to you!_
5. Choose the flow type of your connection. To choose wisely, see the section [below](#choose-your-flow-type).

You're done! :tada:

Once your connection is created, you'll be able to assign it a visual in order to easily see to which connection it refers to. For example, if your connection represents your connection to Magento, you may want to put a picture of the Magento logo, exactly like in the screenshot below.

![Magento connection](magento_connection.png) <!-- TODO once all the cards for the edit form are done -->

After the connection creation, you'll also be given a set of credentials to authenticate your connector. See this [section](#grab-your-credentials), to know more.

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

Whenever you create a connection, the PIM automatically generates a set of credentials for you.

These credentials consist of 4 different strings:
- the `client id`,
- the `secret`,
- the connection `username`,
- the connection `password`.

To access the client id, the secret and the username, go to `System` / `Connecitons`, click on the connection for which you want to see the credentials. They are displayed on the right side of the screen in the `Credentials` column.

![Client id & secret in the connection form](client_id_and_secret_in_the_connection_form.png) <!-- TODO once all edit form cards are merged -->

You can easily copy/paste the credentials by clicking on the button next to them.

![Copy/paste credentials](copy_paste_credentials.png) <!-- TODO once all edit form cards are merged -->

The password is only showed once to you, just after the connection creation. So, make sure you save it somewhere.

![Password is showed only once](password_showed_only_once.png) <!-- TODO once all edit form cards are merged -->

Use these credentials to authenticate the API calls in the connector that matches your connection. For this step, take a look at this [guide]() <!-- TODO add link when doc is written -->. 




