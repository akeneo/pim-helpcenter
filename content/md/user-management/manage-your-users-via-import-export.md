---
id: manage-your-users-via-import-export
themes: user-management
title: Manage your users via import and export
popular: false
related: what-is-a-user-group, what-is-a-user, access-rights-on-products, access-rights-on-assets, access-rights-on-imports-exports
---

# Import/export your users

Let's say that you have to initialize your PIM, because your PIM project just starts or because you just migrate from a Flexibility offer to a Serenity one. Configure the users and their permissions can be a heavy task through the PIM UI, if you have a lot of users to set up. That's why we offer you the possibility to **import/export your users** and their information, such as their user groups and roles, their UI locale, their default category tree, etc.
To do so, just use the dedicated import/export profiles.

:::wink
In order to get the correct structure of the csv/excel file, we highly recommend you to export the users first, add the new ones in the file and then, import the updated file in the PIM.
:::

:::info
**For security purpose, it is not possible to export/import passwords**. When you create new users via an import, a provisional password is automatically created. The user will have to ask for a new password directly in the interface.
:::

# Import/export your user groups

It is also possible to import/export the **user groups** by using the dedicated import/export profiles.

:::info
Please note that you won't be able to **update the user group label** via an import. You will only be able to **create new user groups** via import. Plus, **we don’t import the users** that are in the user groups.
:::

# Import/export your user roles

As for the user groups, you can import and export **user roles** as well. The dedicated export/import profiles will let you import/export the list of user roles plus their permissions.

:::warning
Please note that you won't be able to update the role label via an import. You will only be able to create new roles via import.
:::

:::wink
You'll see when you'll export them: the list of permissions is quite complex to read, because all the permissions are listed in the same cell. That's why **we highly recommend you to use these import/export profiles only for data transfer purpose** (for instance, to transfer data from a pre-production instance to a production instance). These import/export profiles are not made for edition purpose.
:::
