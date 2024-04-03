---
id: how-to-connect-my-pim-with-apps
themes: connectivity
title: How to **connect my PIM with Apps**?
popular: false
ee: false
related: manage-your-apps, connection-dashboard
---

# Connect your App

::: info
You can connect up to 100 third-parties through connections and connected Apps. 
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

# Grant authorization to your App

During the installation, the App will ask you to grant it access to your user information or to parts of your PIM: catalog structure, products, assets, reference entities, etc.

When the following page appears in your PIM, please read the list of all required authorizations, then click on `Allow` or `Allow and next`. If you made a mistake or don't want the App to access your PIM, you can abort the installation process by clicking on `Cancel`.

![Step Authentication](../img/wizard-authentication.png)

![Step Authorizations](../img/wizard-authorization.png)

::: info
Apps may need your user information in order to ease your authentication to access the App interface.
:::

## No specific authorizations have been requested

If you see the following message, it means the App needs no specific authorization. 

![Authorizations Step - No specific authorizations](../img/wizard-authorization-no-specific-auth.png)

When it happens, the App will only be able to retrieve your PIM version and edition.

# Give permissions to your App `EE`

::: warning
The following paragraphs are for EE customers only.
:::

As you use the Enterprise Edition, your PIM has a permission management system. In addition to authorizations, the App needs permissions to access product data.

![Permissions step](../img/wizard-permissions-edit.png)

As you may know, the Akeneo PIM permission system works on three axes: categories, locales, and attribute groups.

## Category trees
    
To ease the permission settings, we display only category trees that exist in your PIM.

For example, let's take a look at a catalog with three trees:

- `Master catalog`: where you categorize all your products,
- `Ecommerce`: categories related to your e-commerce website,
- `Print`: categories related to your print catalog.

In the wizard, you would see three options. If you're setting permissions for an App that will connect Akeneo PIM with your ERP, you'd probably give the `Own` permission on the `Master catalog` tree only.

<img class="img-responsive in-article" alt="Step Permissions Own category trees" src="../img/wizard-step2-own-category-trees.png" style="max-width: 500px;">

### Which level should you give your App?

- **The Own level**

If you want your App to create, update, or delete products without going through proposals in your PIM, you should give your App the `Own` level.

- **The Edit level**

On the contrary, if you prefer to validate any product creation or update made by the App, use the `Edit` level for your category tree(s) and leave the `Own` level empty. For instance, this could be useful if you connect your PIM with a translation tool and you want to proofread all the suggested translations. This `Edit` permission level uses proposals to reject or approve suggestions or new additions. 

- **The View level**

The third option is the `View` level. In that case, the App will only see the products categorized in one or several categories of the tree(s) you select.

### Example

Your products are categorized as you can see below. You have defined the `Own`, `Edit`, and `View` permission levels for the `Ecommerce` tree only. The App will not have any access to the other trees (Print and Master Catalog).

<img class="img-responsive in-article" alt="Step Category tree permissions" src="../img/wizard-step2-trees-permissions.png" style="max-width: 500px;">

As the `Hat` product is categorized in the `Ecommerce` tree, the App will be able to update or delete it. Also, the App can create any new product in the `Ecommerce` tree.

![Step Permissions Hat product](../img/wizard-step2-hat-product.png)

On the contrary, your App couldn't retrieve or update the `Braided hat` product data because this product is only categorized in the `Print` tree.

![Step Permissions Braided hat product](../img/wizard-step2-braided-hat-product.png)


## Locales

Thanks to the locales permission, you can configure whether the App will be allowed to update product information for a specific locale or not.

### Which level should you give your App?

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


## Attribute groups

In Akeneo PIM, you can organize your attributes in groups to help you display related attributes one after the other in the interface. We also use these attribute groups to give rights to an App. Thanks to the attribute group's permission, you can configure whether the App will update product information for specific attributes or not.

### Which level should you give your App?

- **The Edit level**

Thanks to that field, you can allow an App to update product data for a specific list of attributes.

- **The View level**

If you only give the `View` level and not the `Edit` one, your App will see product data for attributes in the selected attribute groups but won't be able to update it.

### Example

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
