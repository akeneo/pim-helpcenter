---
id: projects-notifications
themes: boost-your-productivity
title: Understand your project **notifications**
popular: false
ee-only: true
---

# Overview

With the Teamwork Assistant, you can follow up your product’s enrichment progress and receive notifications linked to [projects](what-is-a-project.html).

A user will be notified when:
- a new project he/she needs to work on is created,
- his/her tasks are not 100% completed 7, 3 or 1 days before the due date,
- the project is completed,

Notifications are automatic. A contributor is notified when he/she has work to do: basically, required and empty attributes to fill in.

::: panel-link Projects?![If you don't know what a project is, we have an article just for you! :wink:](what-is-a-project.html)
:::

# Who is notified?

According to the project’s channel, locale, category, the contributors having edit right on attribute group, category and locale will be notified in the PIM Notification centre if they have empty required attributes to enrich.

# A concrete example

A project _«US Spring Bags Collection 2017»_ has been created for the en_US locale, E-commerce channel and for the bags category.

Three users have edit permissions on the locale en_US and on the Bags category, they all will work on this project.

- **Mary** is a marketing assistant, she has edit permission on Marketing and Design attribute groups
- **Tony** is an intern in the Purchasing department, he only has view permission on Purchase attribute group
- **Bob** is a quality assistant, he has edit permission on Quality attribute group.

Here is a small tab summing up in which cases all 3 users will be notified.

|**Attributes and users having permissions** |   **Is the attribute filled in?** | **Is the attribute required for completeness?** | **Will the user be notified?** |
|:--------------------------------------------|:--------------------------------|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| _Marketing (Mary)_                       |                                 |                                                 |                                                                                                                |
| Name                                        | YES                             | YES                                             | No, Mary will not be notified since the attribute is already filled in.                                        |
| Release date                                | NO                              | YES                                             | Yes, Mary will be notified since the attribute is not filled in.                                               |
| Price                                       | NO                              | NO                                              | No, Mary will not be notified since the attribute is not required for completeness.                            |
| _Design (Mary)_                           |                                 |                                                 |                                                                                                                |
| Main color                                  | YES                             | NO                                              | No, Mary will not be notified since the attribute is not required for completeness.                            |
| Bag style                                   | NO                              | YES                                             | Yes, Mary will be notified since the attribute is not filled in.                                               |
| _Purchase (Tony)_                         |                                 |                                                 |                                                                                                                |
| Brand                                       | YES                             | YES                                             | No, Tony will not be notified since the attribute is already filled in. Anyway Tony has only view permissions. |
| Supplier                                    | YES                             | YES                                             | No, Tony will not be notified since the attribute is already filled in. Anyway Tony has only view permissions. |
| _Quality (Bob)_                           |                                 |                                                 |                                                                                                                |
| Tests reports                               | NO                              | YES                                             | Yes, Bob will be notified since the attribute is not filled in.                                                |
| Material                                    | NO                              | YES                                             | Yes, Bob will be notified since the attribute is not filled in.                                                |

Mary will be notified once at the project creation to enrich Release date and Bag style, as these attributes are empty and required attributes.

Tony will not be notified as he only has view permissions on Purchase attribute Group - only users with edit permissions can actually work on the project and thus get notified.

Bob will be notified to enrich tests reports and material attributes belonging to the Quality attribute group.

The project’s creator and the contributors will be notified when the project is calculated.

# Additional information

Project’s contributors and creator are notified at different steps of a project:

1.  At the project’s creation
1.  On the due date reminder: when a project is not 100% complete, 7, 3 and 1 days before due date
1.  At the end of the project: when a project is 100% complete

::: info
Our developer guide (aka our cookbook) contains additional information about how to customize notifications and change the number of default days for the reminder [See Customize notification](https://docs.akeneo.com/latest/manipulate_pim_data/teamwork_assistant/customize_notification.html#overview).
:::
