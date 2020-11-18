---
id: monitor-jobs
themes: import-export-data, administration
title: Follow your **jobs** execution
popular: false
ee-only: false
related: imports, exports, product-export-builder, discover-the-dashboard, what-is-a-rule, what-is-a-project, product-mass-actions
---

# What is a job?

Some actions trigger a back-end process called a "job". These actions can be:
- an [import](imports.html),
- an [export](exports.html),
- a [mass actions](product-mass-actions.html),
- a calculation of [project](what-is-a-project.html)
- a [rule](what-is-a-rule.html) execution _(EE only)_
- the approval/rejection of [approvals](proposals-workflow.html) _(EE only)_

Here is what happens when you launch a job:

1.  First, you are notified by a flash message when a job starts. Friendly warning, the approval/rejection of proposals don't trigger flash messages.
![Jobs flash message](../img/Jobs_flash-message.png)
1. Then, while the job is running, it will be listed in the Process Tracker amongst all the other jobs you launched. To access it, go to `Activity` and click on `Process tracker`.
![List of jobs in process tracker](../img/Jobs_process-tracker.png)  
Note that you can also check the status of your launched jobs on the dashboard. To access it, go to `Activity` and click on `Dashboard`.
![List of jobs in dashboard](../img/Jobs_dashboard.png)
1.  Finally, when the job is complete, a notification appears at the top of your screen. You can always go back to the job itself if you need more details.
![Notification of a job complete](../img/Jobs_notification.png)

::: tips
Please note it is possible to use the `View all jobs in Process Tracker` permission in the `Roles` page to access all the jobs launched by all the users of your PIM. To find out more, check our article on [permissions](manage-the-interface-and-actions-accesses.html#rights-on-system-pages) in our help center.
:::

# What can you find in a job detail?

A job detail is a report of a specific job.
In each job detail, you'll find information about the status of your job, which may vary depending on their status: `Started`, `Completed`, `Failed` or `Stopped` with a specific color code. You will see:
* The number of steps
* A time estimation above each step
* A table with the details of all the actions performed under each step

To access a specific job detail:
1.  Go to `Activity`/`Process Tracker`
1.  Search for the job you would like to know more about
1.  Click on the job
![Job detail example](../img/Jobs_job-detail.png)

# How to monitor your jobs?
## Import & export jobs

You can get more details when you execute an import or an export job. To access the job detail:
1.  Go to `Imports` or `Exports`
1. In the list, select the profile job you need
1.  Click on your import/export job
1.  The import/export job detail appear
![image](../img/Jobs_export-import-profiles.png)

The details of the executed import/export job are displayed and related to individual import/export profiles.

## Mass action execution jobs

You can have more details about executing a mass action. To check the report:
1.  Go to `Activity`/`Process Tracker` or click on the notification of the completed mass action
1.  The page of the report is displayed, it contains all the details about the executed mass action.
![image](../img/Dashboard_Calculation6.png)

## Searching for a job

If you want to find a specific job amongst all those listed in the process tracker, you can use the following search filters:
- By job name
- By type
- By user
- By status
![Process tracker search filters](../img/Exports_Process-Tracker-search-filters.png)

# How to stop your jobs?

It is possible to stop a running job if it was launched by mistake or if you need to review a product selection for instance. The jobs that can be stopped are the following:
* Export jobs
* Import jobs (except **families** and **family variants**)
* Mass actions (mass delete products, mass publish products, mass unpublish products)
* Rules (rules execution, calculation of impacted products)
* Proposals (approve all, reject all)

Note that **stopping a job won't revert the actions already performed**: for instance, if you launched a mass action about an attribute for a selection of products and you realize a few minutes later that you selected the wrong products, if you stop the ongoing job, the modifications done before you stopped the job won't be reverted. You will have to mass edit the modifications back.

To stop a job, there are different ways that you will find in the sections below.

:::info
The ability to stop a job is defined at the role-level. Please read our [Interface and actions accesses](manage-the-interface-and-actions-accesses.html#rights-on-system-pages) documentation for more information.
:::

## Stopping a job from the Process Tracker

1.  Go to `Activity` then `Process Tracker`
1.  Search for the ongoing job you would like to stop
1.  Click on `STOP` at the end of the job's line
![Stopping a job from the process tracker](../img/Jobs_stop-job-process-tracker.png)

## Stopping a job from the job detail itself

1.  Go to `Activity` then `Process Tracker`
1.  Search for the ongoing job you would like to stop
1.  Click on the job you'd like to stop
1.  In the top right corner, click on `STOP`
![Stopping a job from the job detail](../img/Jobs_stop-job-detail.png)

## Stopping a job from an export/import profile

1.  Go to `Imports` or `Exports`
1.  Click on the right import or export profile
1.  Under `Last execution`, look for the ongoing job you would like to stop
1.  Click on `STOP` at the end of the job's line
![Stopping a job from the job detail](../img/Jobs_stop-job-export-profile.png)
