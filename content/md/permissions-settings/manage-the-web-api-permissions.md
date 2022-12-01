---
id: manage-the-web-api-permissions
themes: permissions-settings
title: Manage the **Web API** permissions
popular: false
ee: false
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

| Assets  |                                        |
|:--------------|:------------------------------------------------|
| List assets | Gives permission to retrieve assets using the API |
| Create and update assets | Gives permission to create and update assets using the API |
| Delete assets | Gives permission to delete assets using the API |
| List asset families | Gives permission to retrieve asset families using the API |
| Create and update asset families | Gives permission to create and update asset families using the API |

| Attributes  |                                        |
|:--------------|:------------------------------------------------|
| List attributes | Gives permission to retrieve attributes using the API |
| Create and update attributes | Gives permission to create and update attributes using the API |

| Attribute options  |                                        |
|:--------------|:------------------------------------------------|
| List attribute options | Gives permission to retrieve attribute options using the API |
| Create and update attribute options | Gives permission to create and update attribute options using the API |

| Categories  |                                        |
|:--------------|:------------------------------------------------|
| List categories | Gives permission to retrieve categories using the API |
| Create and update categories | Gives permission to create and update categories using the API |

| Families  |                                        |
|:--------------|:------------------------------------------------|
| List families | Gives permission to retrieve families using the API |
| Create and update families | Gives permission to create and update families using the API |

| Family variants  |                                        |
|:--------------|:------------------------------------------------|
| List family variants | Gives permission to retrieve family variants using the API |
| Create and update family variants | Gives permission to create and update family variants using the API |

| Channels  |                                        |
|:--------------|:------------------------------------------------|
| List channels | Gives permission to retrieve channels using the API |
| Create and update channels | Gives permission to create and update channels using the API |

| Locales  |                                        |
|:--------------|:------------------------------------------------|
| List locales | Gives permission to retrieve locales using the API |

| Attribute groups  |                                        |
|:--------------|:------------------------------------------------|
| List attribute groups | Gives permission to retrieve attribute groups using the API |
| Create and update attribute groups | Gives permission to create and update attribute groups using the API |

| Currencies  |                                        |
|:--------------|:------------------------------------------------|
| List currencies | Gives permission to retrieve currencies using the API |

| Association types  |                                        |
|:--------------|:------------------------------------------------|
| List association types | Gives permission to retrieve association types using the API |
| Create and update association types | Gives permission to create and update association types using the API |

| Products  |                                        |
|:--------------|:------------------------------------------------|
| List products | Gives permission to retrieve products (products and product models) using the API |
| Create and update products | Gives permission to create and update products (products and product models) using the API |
| Delete products | Gives permission to delete products (products and product models) using the API |

| Reference entities  |                                        |
|:--------------|:------------------------------------------------|
| List reference entity records | Gives permission to retrieve reference entity records using the API |
| Create and update reference entity records | Gives permission to create and update reference entity records using the API |
| List reference entities | Gives permission to retrieve reference entities using the API |
| Create and update reference entities | Gives permission to create and update reference entities using the API |

For more details about these permissions, have a look to our [dedicated section](https://api.akeneo.com/documentation/permissions.html#permissions) in the API documentation.
