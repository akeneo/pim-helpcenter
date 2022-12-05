---
id: how-to-connect-my-pim-with-apps
themes: connectivity, import-export-data
title: How to **connect my PIM with Apps**?
popular: false
ee: false
related: manage-your-apps, connection-dashboard
---

# What is an App?

Apps are the best way to connect Akeneo PIM with third parties.

Apps can retrieve and push data from and into Akeneo PIM through the REST API. Thanks to a step-by-step activation process integrated into the Akeneo PIM interface, anyone can connect an App to Akeneo PIM despite these technical interactions.

![What's an app schema](../img/whats-an-app.png)


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
- Go to the `Permissions` tab and select the System entry
- Finally enable the `Manage apps` option.

![Role manage apps](../img/role-manage-apps.png)


# How to connect an App?

::: info
You can connect up to 50 third-parties through connections and connected Apps. 
:::

To enable an App, click on `Connect` on the App card on the PIM App Store page. 

As soon as you click on `Connect`, the App will open in a new tab. 

At this point you are entering the App world, it is independent of the PIM. If you need more help, you will find everything you need in the App documentation using the `More info` button.

::: tips
`Connect` may be disabled. If that's the case, that means you don't have the `Manage apps` permission on your PIM. Please get in touch with an Administrator.  To know how to grant or get permissions, please read the [Who can connect an App](how-to-connect-my-pim-with-apps.html#who-can-connect-apps) section.
:::

To interact with your PIM, any App needs authorization and permissions. This is why we created the `Authorization wizard`.

A wizard is a **step-by-step activation process** that will accompany you on the path to a successful App implementation.

This wizard contains either one step (CE or GE) or three steps (EE only).

## Grant authorization to your App

During the installation, the App will ask you to grant it access to your user information or to parts of your PIM: catalog structure, products, assets, reference entities, etc.

When the following page appears in your PIM, please read the list of all required authorizations, then click on `Allow` or `Allow and next`. If you made a mistake or don't want the App to access your PIM, you can abort the installation process by clicking on `Cancel`.

![Step Authentication](../img/wizard-authentication.png)

![Step Authorizations](../img/wizard-authorization.png)

::: info
Apps may need your user information in order to ease your authentication to access the App interface.
:::

### No specific authorizations have been requested

If you see the following message, it means the App needs no specific authorization. 

![Authorizations Step - No specific authorizations](../img/wizard-authorization-no-specific-auth.png)

When it happens, the App will only be able to retrieve your PIM version and edition.

## Give permissions to your App `EE`

::: warning
The following paragraphs are for EE customers only.
:::

As you use the Enterprise Edition, your PIM has a permission management system. In addition to authorizations, the App needs permissions to access product data.

![Permissions step](../img/wizard-permissions-edit.png)

As you may know, the Akeneo PIM permission system works on three axes: categories, locales, and attribute groups.

### Category trees
    
To ease the permission settings, we display only category trees that exist in your PIM.

For example, let's take a look at a catalog with three trees:

- `Master catalog`: where you categorize all your products,
- `Ecommerce`: categories related to your e-commerce website,
- `Print`: categories related to your print catalog.

In the wizard, you would see three options. If you're setting permissions for an App that will connect Akeneo PIM with your ERP, you'd probably give the `Own` permission on the `Master catalog` tree only.

<img class="img-responsive in-article" alt="Step Permissions Own category trees" src="../img/wizard-step2-own-category-trees.png" style="max-width: 500px;">

#### Which level should you give your App?

- **The Own level**

If you want your App to create, update, or delete products without going through proposals in your PIM, you should give your App the `Own` level.

- **The Edit level**

On the contrary, if you prefer to validate any product creation or update made by the App, use the `Edit` level for your category tree(s) and leave the `Own` level empty. For instance, this could be useful if you connect your PIM with a translation tool and you want to proofread all the suggested translations. This `Edit` permission level uses proposals to reject or approve suggestions or new additions. 

- **The View level**

The third option is the `View` level. In that case, the App will only see the products categorized in one or several categories of the tree(s) you select.

#### Example

Your products are categorized as you can see below. You have defined the `Own`, `Edit`, and `View` permission levels for the `Ecommerce` tree only. The App will not have any access to the other trees (Print and Master Catalog).

<img class="img-responsive in-article" alt="Step Category tree permissions" src="../img/wizard-step2-trees-permissions.png" style="max-width: 500px;">

As the `Hat` product is categorized in the `Ecommerce` tree, the App will be able to update or delete it. Also, the App can create any new product in the `Ecommerce` tree.

![Step Permissions Hat product](../img/wizard-step2-hat-product.png)

On the contrary, your App couldn't retrieve or update the `Braided hat` product data because this product is only categorized in the `Print` tree.

![Step Permissions Braided hat product](../img/wizard-step2-braided-hat-product.png)


### Locales

Thanks to the locales permission, you can configure whether the App will be allowed to update product information for a specific locale or not.

#### Which level should you give your App?

- **The Edit level**

Thanks to that field, you can allow an App to update product data in specific locales.

- **The View level**

If you only give the `View` level and not the `Edit` one, your App will see product data in the selected locales but won't be able to update it.

#### Example

You connect a translation App to translate your product data from French to English and German.

If you don't want the App to update the French locale values, you should only give it the `View` permission level.

Give the `Edit` permission level to both German and English locale for the App to translate and therefore update the values.

Here you can see how it would look like in the UI. 

<img class="img-responsive in-article" alt="Step Permissions Locales" src="../img/wizard-step2-locales.png" style="max-width: 500px;">


### Attribute groups

In Akeneo PIM, you can organize your attributes in groups to help you display related attributes one after the other in the interface. We also use these attribute groups to give rights to an App. Thanks to the attribute group's permission, you can configure whether the App will update product information for specific attributes or not.

#### Which level should you give your App?

- **The Edit level**

Thanks to that field, you can allow an App to update product data for a specific list of attributes.

- **The View level**

If you only give the `View` level and not the `Edit` one, your App will see product data for attributes in the selected attribute groups but won't be able to update it.

#### Example

You are connecting an App to synchronize your product data with your e-commerce solution. Some product data you see in Akeneo PIM are relevant for your e-commerce solution, but others are useless.

For example, data you put in `ERP` and `technical` groups attributes will never go online, therefore the App doesn't need any kind of access to those groups. 

On the contrary, product data in the `ecommerce`, `marketing`, and `media` groups are crucial for selling your products online.

This App will only retrieve data and never create, update or delete products in your PIM, which means the `View` level is enough for this particular need.

The best solution here is to set up your permissions as in the following screenshot.

<img class="img-responsive in-article" alt="Step Permissions Attribute groups" src="../img/wizard-step2-att-groups.png" style="max-width: 500px;">

::: warning
The App may require some more configuration. 
Check the App interface or documentation to assure you don't forget anything.
:::


# How to configure catalogs for Apps? 

## What's a catalog?
With catalogs, you can configure which products you want to share with an app thanks to a product selection composed of one or several criteria that allow you to filter products.

When an app uses catalogs to retrieve product data, it automatically enables the Catalogs tab and creates catalogs for this app in your PIM.
To configure your catalogs, go to the `Connect > Connected Apps`, click on `Manage app`, and then click on `Catalogs`. 

Here you access the list of all the catalogs the app can manage with a label and a status. 

![Catalog list](../img/app-catalog-list.png)

Click on the catalog you want to set up to access the configuration interface. 

When you access a catalog, you will see two tabs:
- `Settings`: where you can enable or disable a catalog,
- `Product selection`: where you will configure criteria to filter your product selection.

::: info
If you can't click on `Manage apps`, please read our paragraph [Who can connect apps?](#who-can-connect-apps)
:::

## How to configure a product selection?
In the `Product selection` tab, you can define selection criteria. They are the attributes or system fields you can use to filter your products. Altogether, the criteria will create your Product selection.

::: warning
When there are no criteria, your whole PIM catalog is selected. 
:::

You will find the system fields at the top of the list and below are all the attributes gathered by attribute groups. There is a search bar to help you find the attributes. 

Each time you add a criterion, its color turns purple to inform you that it is already used.  
A new line appears in the product selection.

Let's see how a line is organized.

1. You will find the system fields or attribute you chose in purple on the left. 
2. Then, you have to choose an operator. Depending on the filter, the operator list changes. 

The following fields vary depending on your filter. There can be up to 3 types of fields.  
- You can have the value field. For example, if your filter is a multi-select attribute type, you can choose which options you want to filter on.
- If your filter has a value per channel and/or per locale, the channel and locale fields appear to let you choose which locale/channel you want to filter on.

If you want to remove a condition, click on the cross at the end of the line.

### Available conditions
To select your products, you can use the following system fields and attribute types of the PIM as conditions:
- Status
- Category
- Completeness
- Family
- Simple select attribute
- Text attribute
- Measurement attribute
- Yes/No attribute
- Multi-select attribute
- Number attribute
- Text area attribute
- Date attribute
- Identifier 
- Measurement


## How to enable or disable a catalog?
Once you finish configuring your catalog, go to the `Settings` tab and update the Enabled value to `Yes`. 

As soon as you enable a catalog, the app will be able to retrieve your product selection data. 

On the contrary, if you want to stop the catalog synchronization between Akeneo PIM and the app, go to the `Settings` tab and update the Enabled value to `No`. 

::: info
All new catalogs are disabled by default when you connect an app. It's up to you to enable them when your configuration is ready. 
:::