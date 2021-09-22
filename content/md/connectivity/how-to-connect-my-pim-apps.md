---
id: how-to-connect-my-pim-with-apps
themes: connectivity, import-export-data
title: How to **connect my PIM with Apps**?
popular: true
ee-only: false
related: connection-dashboard, what-is-an-event-subscription
---

# How to connect Akeneo PIM with third parties

At Akeneo, we know that you need to centralize all your product data, but you also need to retrieve and share it. This is why we introduced the Connections in Akeneo PIM 4.0.

For 2 years, the Connections have been the best way to connect Akeneo PIM with a third party, and thanks to our community and partners, we have plenty of Connectors ready to be connected to your PIM. 

But you may know, or you don't, and that's fine, that it requires technical skills to understand and install a Connector. Moreover, the person in charge of setting up the connection must know the permission system perfectly if you are an EE customer.  

These are the reasons why we now introduce the `Apps`. 

## What is an App?
Apps are the new way to connect Akeneo PIM with third parties. But, it's also a way to interact with it. 

Apps can retrieve and push data from and into Akeneo PIM through the REST API and events. And thanks to the simple activation process, **anyone can connect an App to Akeneo PIM** despite these technical interactions. 

## Where to find Apps & Connectors?
Because we know it can be tedious to leave your work environment to find the App or Connector you need, we bring them to you. We developed the PIM `Marketplace` as a way for you to smoothly identify the most relevant App or Connector directly from your PIM interface.

<!-- SCREENSHOT TO BE UPDATED-->
![PIM Marketplace](../img/Pim-marketplace.png)

You can see all the Apps and Connectors available on our Marketplace and compatible with your Akeneo PIM version and edition. When you identify something interesting, click on `More info` to access the related documentation. 

The web marketplace is where you will read all the documentation, consult all the available screenshots, and reach the seller.

To find the Apps or Connectors you need, go to `Connect`, then click on `Marketplace`, and here you are! 

# You found the perfect App and want to connect it to your PIM

::: info
Want to connect a Connector? Please, go to our documentation: [How to connect my PIM? (legacy)](https://help.akeneo.com/pim/serenity/articles/how-to-connect-my-pim-legacy.html)
:::

<!--
There are two ways to activate an App: 
- either your App is compatible with the **fast activation**, and you see a Connect button on the Marketplace page, 
- or your App uses the **activation by link**, and you need to contact the App seller to receive the link by email.
-->

<!-- //TODO Add a screenshot with the two different buttons. -->

<!--
## Your App is compatible with the fast activation
If you see the `Connect` button in the App card on the Marketplace page, you just have to click on it, and the App will open in a new tab. --> 
To activate an App, click on `Connect` on the App card on the Marketplace page.
As soon as you click, the App will open in a new tab.
At this point, the App is in charge. If you need more help, please go to the App documentation using the `More info` button. 

::: tips
The `Connect` may be disabled. If that's the case, please get in touch with an Administrator. That means you don't have the `Manage Apps` permission on your PIM. 
:::

<!--
## Your App uses the activation by link
If the App uses the activation by link, the App card on the Marketplace page displays the `Activate by link` button. That means you'll have one simple additional step to connect your App with your PIM. 

To do so, you have to:
- Click on the `Activate by link` button, 
- Fill in the `Activation link` field and click on `Connect`.

::: info
If you don't have any activation link yet, please click on `More info` and contact the App developer to get all the information.
:::
-->

# The App requires some authorizations

To interact with your PIM, any App needs some authorization and permissions. This is why we created the `Authorization wizard`. 

This wizard contains either one step (CE or GE) or three steps (EE only). 

## All editions - Authorization step
During the installation, the App will ask you to authorize it to access some parts of your PIM: catalog structure, products, assets, reference entities, etc. 

When the following page appears in your PIM, please read the list of all required authorizations, then click on `Allow` or `Allow and next`.
If you made a mistake or don't want the App to access your PIM, you can abort the installation process by clicking on `Cancel`. 

### No specific authorizations have been requested
If you see the following screen, that means the App needs no specific authorization. However, it will be able to: 
get the list of all API endpoints, which is also available on api.akeneo.com,
get your system information. That means the App will be able to retrieve your PIM version and edition.

<!-- Add screenshot No specific authorizations have been requested screen -->

## Only for EE customers - Permission steps
As you use the Enterprise Edition, your PIM has a permission management system. In addition to authorizations, the App needs permissions. 

As you may know, the Akeneo PIM permission system works on three axes: categories, locales, and attribute groups.

### Category trees
To ease the permission settings, we display only category trees that exist in your PIM. 

For example, a catalog with three trees:
- `Master catalog`: where you categorize all your products, 
- `Ecommerce`: categories related to your e-commerce website, 
- `Print`: categories related to your print catalog. 

In the wizard, you would see three options. 
If you're setting permissions for an App that will connect Akeneo PIM with your ERP, you'd probably give the `Own` permission on the `Master catalog` tree only. 

![Wizard EE step 2 permissions](../img/wizard-step2-category-trees-own.png)

#### Which level should you give to your App?

- **The Own level**

If you want your App to create, update, or delete products **without creating proposals** in your PIM, you should give your App the `Own` level. 

- **The Edit level**

On the contrary, if you prefer to **validate any product creation or update** made by the App, add category tree(s) in the `Edit` level fields and leave the `Own` level field empty. This could be useful if you connect your PIM with a translation tool and you want to proofread all the suggested translations. 

- **The View level**

The third option is the `View` level. In that case, the App will **only see the products** categorized in one or several categories of the tree(s) you select.

#### Example

You set up your App permissions and categorized your products like on the following screenshots. 

![Wizard EE step 3 summary](../img/wizard-step3-category-trees.png)
![Hat product categories](../img/hat-all-trees.png)
![Braided hat categories](../img/hat-ecommerce-tree.png)

As the `Hat` product is categorized in the `Ecommerce` tree, your App will be able to create new products, update or delete the `Hat` product. 

On the contrary, your App couldn't retrieve or update the `Braided hat` product data because the product is only categorized in the `Print` tree. 


### Locales 

Thanks to the locales permission, you can configure either the App will update product information for a specific locale or won't. 

#### Which level should you give to your App?

- **The Edit level**

Thanks to that field, you can allow an App to **update product data in specific locales**.

- **The View level**

If you only give the `View` level and not the `Edit` one, your App will **see product data in the selected locales** but won't be able to update product data. 


#### Example

You connect a translation App to translate your product data from the French language to the English and German languages. 
So, the App needs to update English & German data. 

You could also give the `Edit` level on the French locale, but you don't want it to update French data you worked on. 

According to your need, you should configure permissions locales as in the following screenshot. 

![Wizard EE step 3 summary](../img/wizard-step3-locales.png)


### Attribute groups

#### Which level should you give to your App?

- **The Edit level**


- **The View level**


#### Example



Well done! Your App can now interact with your PIM. 

::: warning
The App may require some more configuration. 
Check the App interface or documentation to assure you forget anything. 
:::