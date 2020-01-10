---
id: manage-the-web-api-permissions
themes: permissions-settings
title: Manage the **Web API** permissions
popular: false
ee-only: false
related: build-your-user-roles, what-is-a-role, what-is-a-user, manage-the-interface-and-actions-accesses
---

# Set permissions on the Web API

Permissions on the [Web API](https://api.akeneo.com) are granted according to the [connection user role](manage-your-connections.html#configure-the-connection-user-role).

To change Web API permissions for one user role:
1. Go to `System` and click on the `Roles` menu entry
1. Click on the role to edit
1. Click on the `Web API Permissions` tab
    ![image](../img/System_Roles_WebAPIPermissions.png)
1. Check/uncheck the permissions you want
1. Click on the `Save` button to confirm your changes

::: warning
Whenever you are setting up a connection user role, we strongly advise to only set permissions under the `Web API permissions` tab. No UI permission should be checked for your connection user role, as this user role shouldn't be used for logging into the PIM.
:::

The following sections will give you a detailed explanation of what each permission grant. Do not hesitate to take a look.

# Give the overall access
First, there is a permission that grants access to the overall Web API. It is called `Overall Web API`.

If it is turned on for a given role, it will give an overall access to the API to the users that have this role. Meaning these users would be able to call any endpoints in the API.

If it is turned off, the users that have this role won't be able to make calls to the API endpoints.

# Give access by endpoints
You can also be more precise in terms of endpoints you want your API users to call.

The following tables sum up the permissions you will find to restrict the access to the API, endpoint by endpoint.

| Channel endpoints  |                                        |
|:--------------|:------------------------------------------------|
| List channels | Gives permission to GET on the channel endpoint |
| Create and update channels | Gives permission to POST and PATCH on the channel endpoint |

| Locale endpoints |                                                |
|:-------------|:-----------------------------------------------|
| List locales | Gives permission to GET on the locale endpoint |

| Currency endpoints |                                                |
|:-------------|:-----------------------------------------------|
| List currencies | Gives permission to GET on the currency endpoint |

| Family endpoints |                                       |
|:------------------------|:--------------------------------------|
| List families              | Gives permission to GET on the family endpoint |
| Create and update families | Gives permission to POST and PATCH on the family endpoint |

| Attribute endpoints |                                       |
|:------------------------|:--------------------------------------|
| List attributes      | Gives permission to GET on the attribute endpoint |
| Create and update attributes | Gives permission to POST and PATCH on the attribute endpoint |

| Attribute option endpoints |                                       |
|:------------------------|:--------------------------------------|
| List attribute options  | Gives permission to GET on the attribute options endpoint  |
| Create and update attribute options | Gives permission to POST and PATCH on the attribute options endpoint |

| Attribute group endpoints |                                       |
|:------------------------|:--------------------------------------|
| List attribute groups  | Gives permission to GET on the attribute groups endpoint  |
| Create and update attribute groups | Gives permission to POST and PATCH on the attribute groups endpoint |

| Category endpoints |                                       |
|:------------------------|:--------------------------------------|
| List categories    | Gives permission to GET on the category endpoint   |
| Create and update categories | Gives permission to POST and PATCH on the category endpoint |

| Association type endpoints |                                       |
|:------------------------|:--------------------------------------|
| List association types    | Gives permission to GET on the association type endpoint   |
| Create and update association types | Gives permission to POST and PATCH on the association type endpoint |

For more details about these permissions, have a look to our [dedicated section](https://api.akeneo.com/documentation/security.html#authorization) in the API documentation.
