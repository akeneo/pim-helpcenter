---
id: import-export-automation
themes: import-export-data
title: Automate your product imports/exports
popular: false
ee: true
ge: true
related: imports, exports, tailored-export, tailored-import,
---

# Overview

This feature allows you to automate your product imports and/or exports, and is available only for our Enterprise Edition or Growth Edition users.
You will be able to:
* Connect your product imports/exports to remote SFTP storages.
<!---* Automate them by scheduling their executions.--->

# Connect your import/export to a remote server

::: info
For now, the only remote connection supported is SFTP.
Supported jobs: Tailored Export in XLSX, Tailored Import in XLSX, classical Product Export in XLSX and Product Import in XLSX are available. Stay tuned!
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
* If you want to automate your product exports, we support the patterns `%job_label%` & `%datetime%`. You can combine them to create a filepath like the following: "/myfolder1/mysubfolder2/export_%job_label%_%datetime%.xlsx".
* You can use the `Test connection settings` button to check your settings and make sure your connection is valid.
* You can import media files with a .ZIP archive. Your spreadhsheet should contain a filepath column.
* If you export media files to a remote server, it will create a folder with the spreadsheet and the related media files. This folder won't be compressed.
:::

# Automate your import/export profile

::: info
For now, the scheduling of your import/export profile is not possible. This will come later this year, stay tuned!
:::

Once you have connected your import/export profile to a remote server, go back to the root of your profile by clicking on its name in the breadcrumb, and simply click on `Import now` to import from an SFTP server or `Export now` to export to an SFTP server.

Please note that if you're importing from a remote server, the host you configured will be displayed.
![Host displayed](../img/Automation_import_host_displayed.png)
