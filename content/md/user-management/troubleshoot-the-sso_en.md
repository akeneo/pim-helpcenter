---
id: troubleshoot-the-sso
themes: user-management
title: How to **troubleshoot** the Single Sign-On
popular: false
ee-only: true
related: configure-saml-sso
priority: low
---

# Overview

Single Sign-On is a powerful tool for productivity but sometimes, as multiple applications are concerned, it can be a hassle to troubleshoot when something goes wrong.

Here are a few tips to help you understand what is going on between your `IdP` and your `SP`.

:::tips
Not familiar with the terms `Identity Provider`, `IdP`, `Service Provider`, `SP`? You can find a glossary in this [article](configure-saml-sso.html).
:::

# Check your IdP configuration

1. First, make sure that the configuration you have in your Identity Provider is consistent with the information from your SP:
   * the `Entity ID` of the SP
   * the `ACS URL`
1. Make sure that there is no typo or missing characters.
1. Ensure that the claims are defined in the IdP: at least an **akeneo_uid** attribute must be declared and must send the information that will be checked against the username in the PIM.
1. Check if the users are created in your authentication server and are allowed to access the PIM.

# Check your PIM configuration

1. On the PIM's side, make sure that the information regarding the IdP are correct:
   * the `Entity ID` of the IdP
   * the `Sign-on URL`
   * the `Logout URL`
   * the certificate
1. Check if the **akeneo_uid** information received from the `IdP` corresponds to real usernames in the PIM. If not, the SSO process will not be able to match the **akeneo_uid** with the username from the PIM and access will be denied.

# I can't access my PIM?

Enabling the Single Sign-On feature takes over the classic login process in the PIM. Each time a user will try to access the PIM, they will be redirected to the `IdP`.
So, if the **SSO server is not available** (maintenance, network issues, etc.) or **your PIM is not well configured**, your users won't be able to log into the PIM, and neither would you, even if you are the administrator.

That is why we kept the **classical login interface** in the PIM for maintenance purposes. You can access it using the following URL: [https://your-pim-url/user/login](https://your-pim-url/user/login).

:::info
For now, this classical login route is not restricted to certain users so anyone can access it.
:::

# Have a look at the technical log files

The Single Sign-On configuration page in the PIM allows you to download the technical log files regarding the SSO process authentication.
The log files can be downloaded as a zip archive containing the logs for the previous days, one file per day, for the last 10 days.

![image](sso-download-logs.png)

# Go deeper into your IdP

Many `Identity Providers` have tools to diagnose a faulty or non working SSO.
Searching your IdP documentation on _'Troubleshoot SSO'_ can help you finding tools.
