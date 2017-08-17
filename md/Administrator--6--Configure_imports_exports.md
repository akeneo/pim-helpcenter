# Configure imports / exports

This is available and can be done only if the rights have been granted to the user.

In the Enterprise Edition version, the permission to execute the job for the imports and exports can be customized for each import and export profile.

## What is a import or export profile?

An import or export profile allows to perform imports or exports in or from the PIM. For each type, the profile format is based on:

*   A code to identify the import or export profile.
*   A job with a connector to define what will make the import or export when executing. For instance, a product import in CSV or XLSX file, category export in CSV or XLSX to a Magento platform.
*   A set of configuration fields, available as a form in the PIM. Each job can have its own configuration. Thus the job configuration form “product import” in CSV connector in Akeneo will be different from the job configuration form “product import” in XLSX or from any customised job created.

    Some service applications are directly provided in the PIM to execute imports and exports:

*   The property “Allow send file to the server Yes / No” can be used by all job imports of any connector requiring a file as a data source to process.
*   Selecting channels is strongly recommended for use by all job export of any connectors, applying the rules of product selection implemented in the Akeneo PIM to export. However, the use of a channel to run a job export of products is not mandatory in the PIM.

## Browsing profiles of imports / exports

**To view the available import profiles:**

1.  Log in with a user account with permissions to “View the list of profiles” for imports
1.  Go to Collect/Import Profiles
![image](../img/Akn_dashboard.jpg)
1.  To narrow down the list of imports displayed, use the available filters above the grid of Import profiles

To see the information on an import profile, click on the row in the grid

**To view the available profiles of export in the PIM:**

![image](../img/Akn_dashboard.jpg)

1.  Log in with a user account with permissions for the “View the list of profiles” for export
1.  Go to Spread/Export Profiles
![image](../img/Akn_dashboard.jpg)
1.  To narrow down the list of export displayed, use the available filters above the grid of Export profiles.

To view the information of an export profile, click on the line in the grid:

![image](../img/Akn_dashboard.jpg)

## Creating a new import or export profile

**To create a new import profile:**

1.  Log in with a user account with “Create an import profile” permissions
1.  Go to the Collect/Import Profiles
1.  Click on “Create import profile”
![image](../img/Akn_dashboard.jpg)
1.  All fields in the pop-up window must be filled in:
![image](../img/Akn_dashboard.jpg)
  *   A unique code
  *   A name for the label to identify the profile more easily in the PIM
  *   A job to execute the task.

  The list of jobs matches all the jobs available to perform imports, for all installed and configured connectors with Akeneo PIM.

1.  Click on “Save” to finalise the profile’s creation. The profile page screen is displayed. It is then possible to configure the job import.

**To create a new export profile:**

1.  Log in with a user account with “Create export profile” permissions
1.  Go to the Spread/Export Profiles
1.  Click on the top right button
![image](../img/Akn_dashboard.jpg)
1.  All fields in the pop-up window must be filled in:
![image](../img/Akn_dashboard.jpg)
  *   A unique code
  *   A name for the label to identify the profile more easily in the PIM
  *   A job to execute the task.

    The list of jobs matches all the jobs available to perform exports, for all installed and configured connectors with Akeneo PIM.

1. Click on “Save” to create the export profile. The profile page screen is displayed. It is possible to configure the job export.

## Modify import/export

If a user has no rights granted to modify an import or export profile due to his role, then the permissions which he may benefit due to his group (Enterprise Edition rights) will not be applied. For instance, if a user does not have the “edit profiles of imports” permission, his Enterprise Edition rights to edit a specific import profile is ignored.

**To modify an import profile:**

1.  Log in with Account user with edit import profile permission.
1.  Go to the Collect/Import Profiles menu.
1.  Click on the import profile that needs to be modified.
1.  Click on the “Edit” button. In the tab “General properties”, the code and label properties are available for all import profiles, the Global Settings properties depend of the import job. For example for the CSV product import:

|  |  |
|:-|:-|
|  |  |

1.  Make your changes
1.  Click on “Save” to update the profile.


> **Note**
  For other import job properties, refer to the contextual help or the connector documentation.


**To edit an export profile:**

1.  Connect with a user account with edit permission for an export profile.
1.  Go to the Spread/Export Profiles.
1.  Click on the Export profile that needs to be modified.
1.  Click on “Edit”, go under the tab “General properties”. The code and label properties are available for all export profiles, the Global Settings properties depend of the export job. For example for the CSV product export:

You will find the following properties:

![image](../img/Akn_dashboard.jpg)

|  |  |
|:-|:-|
|  |  |

> **Note**
  Be aware that exporting more than 1GB of medias can lead to a memory leak. For more information about this please refer to our cookbook: https://docs.akeneo.com/1.7/reference/scalabilityguide/morethan1GBofproductmediatoexport.html#more-than-1gb-of-product-media-to-export


The CSV and XLSX product exports come with an additional tab: Content in which you can filter information to export.

1.  Go under the «Content» tab to edit information to export.

|  |  |
|:-|:-|
|  |  |


|  |  |
|:-|:-|
|  |  |


1.  Click on the «Add attributes» button on the right side of the page.
1.  Once you are all set, click on “Save” to update the export profile.

> **Note**
  For other export jobs properties, refer to the contextual help  or the connector documentation.

## Jobs execution details

You have several ways to follow the status of a job (import, export, mass edit, rules...)

*   You’re notified by a flash message when the job starts
*   A notification appears on screen when the job is completed.
*   A widget gives you the status on Akeneo dashboard
*   On the Process Tracker page (System/Process Tracker), you can access the status and job report.
*   From the execution details page for imports and exports
*   With the email notification once the job is complete

### Imports & exports reports

**To review an import report:**

1.  Go to Collect/Import history,

    On the history page, you can clearly see the status of your import: completed, started or failed thanks to the colors.

1.  Click on the notification of the complete import or select your import executed displayed in the grid.
1.  The page of the import job appears:.


![image](../img/Akn_dashboard.jpg)

The details of the executing import job are shown on the page. The details are related to each executed import/export profile. For more detailed information, please refer to the documentation of the used Akeneo connector for the execution.

### Bulk actions execution reports

**View a report of a bulk action**

1.  Two ways to display a report:
    *   Go to System/Process Tracker
    *   Click on the notification of the completed action
1.  The page of the report is then displayed:The details of the executing bulk action are shown on the page.

![image](../img/Akn_dashboard.jpg)
