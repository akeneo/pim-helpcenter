---
id: manage-your-account
themes: first-steps
title: Manage your **account**
popular: false
related: manage-your-users, what-is-a-user-role, what-is-a-user-group, build-your-user-roles, build-your-user-groups, workflow
---

# Access your account information

To access your account information:
1.  Click on your picture in the top right corner
2.  In the dropdown, click on `My Account` to display your profile

![image](../img/Dashboard_DropdownMenuUser.png)

# Edit your account information

Click on `Edit` to change your profile information or settings. New tabs will appear once in edit mode: `Groups and Roles` and `Password`.

::: ee
Enterprise Edition clients will also see a `Notifications` tab to manage notifications for the [proposals workflow](proposals-workflow.html) (feature only available on the EE version).
:::

## Your general information

Under the `General` tab, you will be able to edit your personal information: username, firstname, lastname, add/remove your picture and your email address.

![image](../img/System_users_Profil_edit.png)

## Your favorite catalog and product grid settings

Under the `Additional` tab, you will be able to define your default catalog settings. You will find the following information:
- `Catalog locale`: your default locale
- `Catalog scope`: your defaut channel
- `Default tree`: your default category tree
- `Default asset tree` (_EE only_): your default asset category tree
- `Product grid filters`: your default product grid filters. This setting will be used on the product grid and on the published product grid (_EE only_)
- `Default product grid view`: your default view used in the product grid.
- `Default published product grid view` (_EE only_): your default view used in the published products grid

::: tips
You first need to create at least one view to be able to see this field and to set a default view in your account.
:::

::: tips
The search bar available on top of the product grid behaves like a filter, it can be added using the `label or identifier` filter in the `Product grid filters` field.
:::

::: info
If no default filters are defined, the system attributes (family, groups, status, completeness, creation date, updated date, product identifier, permissions, label or identifier filter) will be used as default filters on the product grid.
:::

## Your groups and roles

To edit your [user groups](what-is-a-user-group.html) and [roles](what-is-a-user-roles.html):
1. Click on the `Groups and Roles` tab
1. On the top of the page, you will see the user group(s) you belong to, and then your user role(s). Check/uncheck to change your groups/roles.
2. Click on `Save` to save your changes

![image](../img/System_users_Profil_edit_grpandroles.png)

::: ee
In the Enterprise Edition, you will see two additional fields:
- a tickbox to activate `Email notifications`. If activated, you will receive automatic emails when exports or imports are finished.
- an `Asset delay reminder` field. If activated, you will receive a notification to remind you N days before the end-of-use date of an asset
:::

## Your password

Still in edition mode in your profile account:
1.  Click on the `Password` tab
2.  Change your password
3.  Click on `Save` to save your changes

![image](../img/System_users_Profil_edit_password.png)

## Your interface default language

You can choose in which language you want your PIM interface to be.

Still in edition mode in your profile account:
1.  Click on the `Interfaces` tab
2.  Select the default language for your account (`UI locale` field)
3.  Click on `Save` to save your changes

![image](../img/System_users_Profil_edit_interfaces.png)

This UI locale is used all over the PIM interface: menus, screens labels, messages… Dates, numbers and currencies will be formatted according to the locale you chose. Below are some examples of formats.

| User UI locale | Date format | Number format | Currency format     |
|:--------------|:----------------|:------------------|:-------------|
| French (France)  | 08/03/2019      | 12,5       | 90,50 $US        |
| German (Germany)  | 08.03.19        | 12,5        | 90,50 $        |
| English (United States) | 03/08/2019 | 12.5    | $90.50            |

## Your interface default time zone

You can choose on which time zone you want your PIM interface to be.

Still in edition mode in your profile account:
1.  Click on the `Interfaces` tab
2.  Select the default language for your account (`Time zone` field)
3.  Click on `Save` to save your changes

This time zone is used all over the PIM interface: Product Form meta data and `History` panel, product grid, [last operations widget](discover-the-dashboard.html#last-operations) of the dashboard, [process tracker](monitor-jobs.html#how-to-monitor), [published products grid](how-to-manage-my-publications.html#view-the-published-products) (EE only) and [asset grid](work-with-assets.html#view-the-assets-list) (EE only).

## Your notifications preferences _(EE only)_

Still in edition mode in your profile account:
1. Click on the `Notifications` tab
2. Toggle the yes/no button to the right or left of the notification to edit
3.  Click on `Save` to save your changes

If you wonder how to use these preferences, take a look below.

### The `When new proposal to review` notification

If you activate this preference, you will receive notifications everytime you will have a [proposal](proposals-workflow.html) to review.

![image](../img/System_users_Profil_edit_notifs.png)

::: info
You will only see this option in the case you own at least one product, meaning you have the `Own products` permission for at least one category. To learn more about this permission, it's [here](access-rights-on-products.html)!
:::

### The `When proposal is approved or rejected` notification

If you activate this preference, you will receive notifications when your [proposals](proposals-workflow.html) are approved or rejected by your reviewers.

![image](../img/System_users_Profil_edit_notifs2.png)

::: info
You will only see this option in the case you have only edit rights on at least one product, meaning you only have the `Edit products` permission for at least one category. To learn more about this permission, it's [here](access-rights-on-products.html)!
:::
