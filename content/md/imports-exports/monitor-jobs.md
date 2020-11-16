---
id: monitor-jobs
themes: import-export-data, administration
title: Follow your **jobs** execution
popular: false
ee-only: false
related: imports, exports, product-export-builder, discover-the-dashboard, what-is-a-rule, what-is-a-project, product-mass-actions
---

# What is a job?

Everytime you perform certain actions, a back-end process called a "job" starts. These actions can be:
- an [import](imports.html),
- an [export](exports.html),
- a [mass edit](product-mass-actions.html),
- a calculation of [project](what-is-a-project.html)
- a [rules](what-is-a-rule.html) execution _(EE only)_
- the approval/rejection of [approvals](proposals-workflow.html) _(EE only)_

The steps when a job starts is (mostly) the following:

1.  First, you are notified by a flash message when the job starts.
![image](../img/Settings_Calculation1.png)
1. Then, while the job is running, it will be listed in the Process Tracker amongst all other jobs you launched. To access it, go to `Activity` and click on `Process tracker`.
![image](../img/Settings_Calculation3.png)  
Note that the dashboard will also give you the status of your launched jobs. To access it, go to `Activity` and click on `Dashboard`.
![image](../img/Dashboard_Calculation4.png)
1.  Finally, when the job is complete, a notification appears at the top of your screen. You can always go back on the job detail to know more information.
![image](../img/Settings_Calculation2.png)

::: tips
If you want to view the jobs of all the users of your PIM (and not only yours), adding the [permission on action](manage-the-interface-and-actions-accesses.html#rights-on-system-pages) `View all jobs in Process Tracker` on your user role will grant you that privilege.
:::

# How to monitor your jobs?
## Imports & exports jobs

You can have more details when you execute an import or an export. To review their report:
1.  Go to `Imports` or `Exports`
2.  Select in the list the profile job for which you want to view the report
2.  You can clearly see the status of your import: `Completed`, `Started` or `Failed` thanks to a color code
1.  Click on your import/export
1.  The import/export job details appear

![image](../img/Exports_Calculation5.png)

The details of the executing import/export job are shown on the page. The details are related to each executed import/export profile.

## Mass actions execution jobs

You can have more details when you execute a mass action. To review their report:
1.  Go to `Activity`/`Process Tracker` or click on the notification of the completed mass action
1.  The page of the report is then displayed with the details of the executed mass action

![image](../img/Dashboard_Calculation6.png)

## Searching for a job

If you want to find a specific job amongst all those listed in the process tracker, you can use the following search filters:
- By job name
- By type
- By user
- By status

![Process tracker search filters](../img/Exports_Process-Tracker-search-filters.png)

# How to stop your jobs?

If you launched a job by error, or for any other reason, it is possible to stop an ongoing job.
To do so, there is different ways described below.

:::info
The ability to stop a job is defined at the role-level. Please read our [Interface and actions accesses](manage-the-interface-and-actions-accesses.html#rights-on-system-pages) documentation for more information.
:::

## Stoppping a job from the Dashboard

1.  Go to `Activity`/`Dashboard`
1.  Click on "STOP" next to the ongoing job you would like to stop

## Stoppping a job from the Process Tracker

1.  Go to `Activity`/`Process Tracker`
1.  Click on "STOP" next to the ongoing job you would like to stop

## Stoppping a job from the job details itself

1.  Go to `Activity`/`Process Tracker`
1.  Select the job you would like to stop
1.  Click on STOP

## Stoppping a job from an export/import profile

1.  Go to `Imports` or `Exports` depending on the job you would like to stop
1.  Select the appropriated import or export profile
1.  Under `Last execution`, click on STOP
