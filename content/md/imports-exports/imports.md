---
id: imports
themes: import-export-data, catalog-settings
title: "**Import** your data"
popular: false
ee-only: false
related: monitor-jobs, exports
---

# Overview

Importing product data is pretty convenient especially if you want to update your catalog with external sources: vendors, ERP, etc.

There are two options for the connectors to process the file to import the product information:
- Can be executed directly from the UI Akeneo PIM (uploading file)
- Or from a given path in the configuration of the import profile, enabling the Akeneo PIM to fetch the file to import when executing the command.

When importing product data, Akeneo PIM extracts the data from the file and converts them to save in the PIM.

Depending on the import profile, the import may create proposals to review so that the products are not directly updated.

CSV or XLSX file import process consists of:
1.  Creating an import profile.
1.  Building the file, manually or via a third party application.
1.  Launching the CSV or XLSX file import.

# What is a import profile?

An import profile allows to perform imports in or from the PIM. This profile format is based on:
- A code to identify the import or export profile.
- A job with a connector to define what will make the import when executing. For instance, a product import in CSV or XLSX file, category export in CSV or XLSX to a Magento platform.
- A set of configuration fields, available as a form in the PIM. Each job can have its own configuration. Thus the job configuration form “product import” in CSV connector in Akeneo will be different from the job configuration form “product import” in XLSX or from any customised job created.

# Browse profiles of imports

To view the available import profiles:
1.  Log in with a user account with permissions to “View the list of profiles” for imports
1.  Go to Collect/Import Profiles
![image](../img/dummy.png)
1.  To narrow down the list of imports displayed, use the available filters above the grid of Import profiles

To see the information on an import profile, click on the row in the grid
![image](../img/dummy.png)

# Create a new import profile

To create a new import profile:
1.  Log in with a user account with “Create an import profile” permissions
1.  Go to the Collect/Import Profiles
1.  Click on “Create import profile”
![image](../img/dummy.png)
1.  All fields in the pop-up window must be filled in:
  - A unique code
  - A name for the label to identify the profile more easily in the PIM
  - A job to execute the task.
![image](../img/dummy.png)
    The list of jobs matches all the jobs available to perform imports, for all installed and configured connectors with Akeneo PIM.
1.  Click on “Save” to finalise the profile’s creation. The profile page screen is displayed. It is then possible to configure the job import.

# Modify an import profile

If a user has no rights granted to modify an import or export profile due to his role, then the permissions which he may benefit due to his group (Enterprise Edition rights) will not be applied. For instance, if a user does not have the “edit profiles of imports” permission, his Enterprise Edition rights to edit a specific import profile is ignored.

To modify an import profile:
1.  Log in with Account user with edit import profile permission.
1.  Go to the Collect/Import Profiles menu.
1.  Click on the import profile that needs to be modified.
1.  Click on the “Edit” button. In the tab “General properties”, the code and label properties are available for all import profiles, the Global Settings properties depend of the import job. For example for the CSV product import:

| Property             | Details |
|:---------------------|:--------|
| Decimal separator    | Defines the character used as decimal separator in the imported file (for instance a dot, a comma..) |
| Date format          | Defines the format used for dates in the imported file (for instance yyyy-mm-dd, mm/dd/yyyy...)      |
| File path            | Defines the path of the file to import  |
| Delimiter            | Defines the character to delimit the fields in the file (semi-colon, comma...)|
| Enclosure   | Defines the character for the field enclosure in the file (“) |
| Escape    | Defines the escape character in the CSV file  |
| Allow file upload        | Allows a file upload from the specified path |
| Categories column        | Defines the column name for categories in the imported file  |
| Family column            | Defines the column name for family in the imported file    |
| Groups column            | Defines the column name for groups in the imported file   |
| Enable the product       | Defines the default status to create a product in Akeneo: <br>- status “enabled” if yes <br>- status “disabled” if no    |
| Compare values           | Enables the comparison between original values and imported values<br>It can speed up the the import if imported values are very similar to original values |
| Real time history update | Enables the update of the product history<br>It can be switched off to improve performances     |

1.  Make your changes
1.  Click on “Save” to update the profile.


# Run an import

To start a product import:
1.  Go to the Collect/Import Profiles menu to see the list of the import profiles available.
1.  Select the import profile you want to execute, then click on the relevant line.
1.  The page for the import profile is prompted. Click on the “Import” or “Upload and import” button if the connector enables to load a file from the PIM interface.
1.  The page of the import execution is displayed. The page refreshes continually to update the information displayed.

When the import has ended, a notification is available on the top right of the pages of Akeneo.

![image](../img/dummy.png)


An email can also be sent depending on the system configuration. For further details on this, please refer to the PIM technical documentation.

::: ee
In the Enterprise Edition version, the permission to execute the job for the imports can be customized for each import and export profile. So if you cannot launch an import, be sure that you have the right to run it.
:::
