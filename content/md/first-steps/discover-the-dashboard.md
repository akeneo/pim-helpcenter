---
id: discover-the-dashboard
themes: first-steps
title: Discover the **dashboard** in details
popular: false
related: what-is-a-project, project-widget-dashboard, imports, exports, review-products-proposals, access-rights-on-products
---

# Overview
The dashboard is the default opening page, once you've logged in.

![Overview](../img/Dashboard.png)

It is composed of several widgets. Each one is presented below.

::: tips
Wherever you are in the PIM, to go back to the dashboard, just click on the Akeneo logo on the top left corner.
:::

# Dashboard widgets

## Teamwork assistant projects _(EE only)_

In the Entreprise Edition, the first widget of the dashboard is the widget gathering the projects created with the [Teamwork Assistant](what-is-a-project.html).

![Dashboard_Project](../img/Dashboard_Project.png)

If no project is available you will see the message: «You have no current project, create a new project.»

If you want to dig deeper into this widget, there is an [article](project-widget-dashboard.html) for you. ;)

::: ee
This widget is only available for Enterprise Edition users.
:::

## Completeness over channels and locales

This widget gives you an overview of the [completeness](what-is-the-completeness.html) of your channels and locales.

![Dashboard_Completeness](../img/Dashboard_Completeness.png)

In our example, we have 3 channels:
- Mobile
- Print
- Ecommerce

Each channel has 3 activated locales:
- German (`de_DE`)
- English (`en_US`)
- French (`fr_FR`)

For each locale, there is a completeness bar, the number of products completed vs the total number of products.

::: info
All products are displayed on this widget, regardless of your [permissions on product categories](access-rights-on-products.html#rights-depending-on-the-categories).
:::


## Last operations

The next widget gathers the latest operations you've run in your PIM:
- your latest imports
- your latest exports
- your latest updates performed in the UI or that were automatically run

For each operation, you will have a status (`Completed` or `Failed`) and a shortcut to the operation details.

![Last operations](../img/Dashboard_Process.png)

::: info
To bring you more visibility on the job status, it is displayed in green when successful (no warnings), yellow when successful but with warnings (total number of warnings are also displayed), and red when it failed.
:::


## Proposals to review _(EE only)_

In the Entreprise Edition and depending on [your permissions](access-rights-on-products.html), you might see an additional widget that allows you to [review suggestion of modifications made on products](review-products-proposals.html).

![Proposals to review](../img/Activity_Proposals.png)

This widget will display the latest [proposals](proposals-workflow.html) for review. To see all pending reviews, click on the `View all` button.

::: ee
This widget is only available for Enterprise Edition users.
:::
