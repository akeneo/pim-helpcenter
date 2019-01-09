---
id: project-widget-dashboard
themes: boost-your-productivity, collaborative-work
title: Discover the **project widget** in the dashboard
popular: false
ee-only: true
---

# Display key figures

A new widget will display you key information on your dashboard. You will see information like the remaining number of products that have none of the required attributes filled in the `TODO` section, the number of products with at least one required attribute in the `IN PROGRESS` section and finally the number of products that are complete in the `DONE` section.

Under each figure, you will find a percentage. Each percentage will inform you about the 3 statuses’ progress.

When you are working on a project it is also added to the widget with 3 key figures:

| Labels | Definitions |
|:-----------------------|:---------------------------------------------------------------------------|
| **TODO**                   | Number of products with no required attributes filled in the user can edit |
| **% TODO PRODUCTS**        | (Number of TODO products*100) / number of products I have to enrich         |
| **IN PROGRESS**            | Number of products with at least one required attribute the user can edit  |
| **% IN PROGRESS PRODUCTS** | (Number of IN PROGRESS products*100) / number of products I have to enrich  |
| **DONE**                   | Number of complete products with all required attributes the user can edit |

# Navigate to the product grid

When you display the project widget, you can easily see the products by clicking on the figures.
For example if you click on the widget `In Progress` which displays 25 as a figure, the product grid will be prompted and filtered with the 25 products.

::: info
If you create a project including product models, the project widget will always display the number of variant products. If you click on a project widget, the product grid will also display variant products, you can start the product enrichment!
:::

# Browse projects and users

In addition to figures, the widget also allows you to look for projects and users.

## Browse projects

Click on the dropdown icon next to the project locale. Current projects will be displayed, sorted by nearest due date.

A search toolbar is available on the top of the list: start typing the first letters of your project’s label, the list will be updated accordingly.

![image](../img/Dashboard_DropdownMenuProjects.png)

## Browse users

As a project creator, you can search for a user to know his progress on a project. Click on the dropdown icon next to the user and start typing the first letters of his name.

![image](../img/Dashboard_DropdownMenuContributors.png)

::: info
The project creator is the only one who can select `All contributor` or another contributor.
:::

If you have no project, the widget will display users the message: `You have no current project, start a new project`.

![image](../img/Dashboard_NoProject.png)
