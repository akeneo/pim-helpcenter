---
id: import-export-automation
themes: import-export-data
title: Automate and schedule <!---all---> product imports/exports
popular: false
ee: true
ge: true
related: imports, exports, tailored-export, tailored-import,
---

# Overview

This feature helps you to automatize your product imports and/or exports, and is available only for our Enterprise Edition or Growth Edition users.
You will be able to:
* Connect your product imports/exports to remote SFTP storages.
<!---* Automate them by scheduling their executions.--->

# Connect your import/export to a remote server

::: info
For now, the only remote connection supported is SFTP.
:::

To connect your product import/export to a remote storage:
1. Go to `Imports` or `Exports`
1. Select the profile you would like to automate
1. Click `Edit` in the top right corner
1. Click `Properties`
1. Under "Connection", select `SFTP`
![Select a connection type](../img/Automation_connection_type.png)
1. Fill in all fields: `Filepath`, `Host` & `Port`, `Login` and `Password`
![Fill in all fields](../img/Automation_SFTP_configured.png)
1. Click `Save` in the top right corner of the screen

::: tips
* If you want to automate your product exports, we support the patterns `%job_label%` & `%datetime%`. You can create a filepath like "/myfolder1/mysubfolder2/export_%job_label%_%datetime%.xlsx".
* You can use the `Test connection settings` button to check your settings and make sure your connection is valid.
:::

# Automate your import/export profile

Once you connected your import/export profile to a remote server, go back to the root of your profile by clicking on its name in the breadcrumb, and simply click on `Import now` to import from your SFTP server or `Export now` to export to your SFTP server.

Please note that if you're importing from a remote server, the configured host will be displayed.
![Host displayed](../img/Automation_import_host_displayed.png)

::: info
For now, there is no possibility to define a scheduling for a full automation of your import/export profile. This will come later this year, stay tuned ;)
:::
