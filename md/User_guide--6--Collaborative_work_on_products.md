# Collaborative work on products (Enterprise Edition Only)

## Teamwork Assistant

A Teamwork Assistant project is a new way of organizing your work around a specific activity. It will help you to plan your work alone or as a team.

For instance, you are launching a Summer brand product range and you must have it online on your website by the end of May. All your product information must be filled by this date. All users that need to contribute on this new product range will know what they have to do.

All users part of a project will be able to see at a glance their product’s selection enrichment progress and they will be automatically notified when new information will have to be filled in and it will ease the working processes and communication between workers.

> **Scalability note**  
  The Teamwork Assistant has been designed to support a Medium Catalog (see our Scalability guide), ie we do not recommend you to create a project with more than 50 000 products, 400 attributes, 15 attribute Groups.

### Information about a project

You can have only one project’s creator but you can have several contributors. A contributor is an Akeneo PIM user that will work on the project.

Depending on his/her permissions, he will be more or less active and will get tasks notifications.

The project creator is the only one who can edit and/or delete the project he created.

You can see a project in the Views/Projects selector only if you are concerned by this project.

### How to create a project?

Any PIM user can create a project. You do not need any specific rights or permissions.

You can create as many projects as you want, but remember a project is a combination of a channel and a locale. For each combination, you will have to create a new project.

For instance, you are launching a new product range in France in April, in May for your UK market and in July for Germany. For each launch, you will need to create one project, one for each locale.

**A project needs the following information:**
*   one locale,
*   one channel,
*   a product’s category (or a subcategory),
*   Optional: you can also customize your product’s grid: add/remove attribute filters and/or customize the grid’s columns.

> **Notes**  
  1. If you select a category, all its subcategories will also be added.
  1. You only need the view permission on a category or subcategory to select it.

You first need to set up your project’s environment: select a locale, a scope, products...

**Prepare your project:**
1.  Go to Enrich/Products,
1.  Click on the Views/Projects selector,
1.  Select «Projects»,
![image](../img/Akn_dashboard.jpg)
1.  Select a locale on the product grid using the locale dropdown menu (remember you only see the locales you have permissions on),
1.  Select a channel on the product grid using the channel dropdown menu,
1.  Select your products’ category/ies or subcategory/ies,
1.  And if you’d like to, add some filters and change the columns’ configuration,

You are now ready to create a new project!

**Create a project:**
1.  Click on the “+” icon nearby the Views/Projects selector,
![image](../img/Akn_dashboard.jpg)
1.  The project creation’s window appears:
![image](../img/Akn_dashboard.jpg)
1.  You can now add:
  *   a project’s label: the name you want to give your project e.g. ‘New Summer Collection Website’
  *   a project’s due date: the date the project must be over at, for instance, 30/May/2017)
  *   a project’s description: the project’s description will appear on the dashboard.
1.  Click on “Save” to finalize the project’s creation.

**Your project is now saved and it will be calculated. Calculation is a process that will check for each product:**
  *   The family it belongs to,
  *   The required attributes of the family and if they are already filled in,
  *   The attribute groups of required attributes,
  *   The user groups having the edit permissions on attribute groups, selected categories and locale.

> **Note**  
  Don't worry, project calculation may take a while, so your project may not be visible right away

The project follows the lifecycle of the catalog and evolves with it. It really reflects the status of the catalog and what each user has to do. For example, if a catalog gets some new products, the project will be impacted and the users will have new products to work on.

> **Note**  
  A project is updated when you save a product in the Product Edit Form or in a sequential Edit and once per 24 hours to handle catalog structure updates.

### How to find a project?

All projects you can work on or projects you have created can be visible from the Views/Projects selector.

A search field is available above the list: start typing the first letters of the project’s label and the list will be updated with the projects’ labels matching your request:

![image](../img/Akn_dashboard.jpg)

Along with the project’s label, you will find other information:

*   A percentage: this is the percentage of products completed according to your permission(s) (see done products). You might not have rights on all products.
*   A color (green: done, orange: in progress, red: to do),
*   The project’s due date,
*   Its channel and locale.

Your project is also added in the dashboard through a new widget: See Dashboard widget’s project section.

### How to edit a project?

If you have created the project, you can edit all project’s information: label, due date and/or description but you cannot edit the project’s settings like the product’s category, locale, channel, active filter views. If you need to do so, then you will have to create a new project.

Select your project in the project’s list.

Click on the pencil icon, a project window is prompted:

*   You can edit label, due date and/or description
*   Click on «Save» and the project will be updated accordingly

![image](../img/Akn_dashboard.jpg)

### How to delete a project?

If you have created the project, you can delete it when:

*   the project is completed and your products are ready to be exported,
*   you do not need it anymore,
*   some settings have changed: locale and/or channel so you need to create a new project.

Drag your mouse over the project’s label, the project will be greyed out and two small icons will appear on the right side.

Click on the red cross icon to delete the project.

Once you click on the red cross icon, a confirmation window is prompted:

*   Click on «Yes, delete project» to definitely remove the project.

Be aware this operation cannot be reverted.

### Project’s notifications

With the Teamwork Assistant, you can follow up your product’s enrichment progress and receive notifications.

**A user will be notified when:**
*   a new project he/she needs to work on is created,
*   his/her tasks are not 100% completed 7, 3 or 1 days before the due date,
*   the project is completed,

Notifications are automatic. A contributor is notified when he/she has work to do: basically, attributes to fill in.

**Who is notified?**

According to the project’s channel, locale, category, the contributors having edit right on attribute group, category and locale will be notified in the PIM Notification center if they have empty required attributes to enrich.

**Example of notifications:**

A project «US Spring Bags Collection 2017» has been created for the en_US locale, E-commerce channel and for the bags category.

Three users have edit permissions on the locale en_US and on the Bags category, they all will work on this project.

*   Mary is a marketing assistant, she has edit permission on Marketing and Design attribute groups
*   Tony is an intern in the Purchasing department, he only has view permission on Purchase attribute group
*   Bob is a quality assistant, he has edit permission on Quality attribute group.

**Here is a small tab summing up in which cases all 3 users will be notified.**

| Attributes and users having permissions | Is the attribute filled in? | Is the attribute required for completeness? | Will the user be notified?                                                                                     |
|:----------------------------------------|:----------------------------|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| **Marketing (Mary)**                    |                             |                                             |                                                                                                                |
| Name                                    | YES                         | YES                                         | No, Mary will not be notified since the attribute is already filled in.                                        |
| Release date                            | NO                          | YES                                         | Yes, Mary will be notified since the attribute is not filled in.                                               |
| Price                                   | NO                          | NO                                          | No, Mary will not be notified since the attribute is not required for completeness.                            |
| **Design (Mary)**                       |                             |                                             |                                                                                                                |
| Main color                              | YES                         | NO                                          | No, Mary will not be notified since the attribute is not required for completeness.                            |
| Bag style                               | NO                          | YES                                         | Yes, Mary will be notified since the attribute is not filled in.                                               |
| **Purchase (Tony)**                     |                             |                                             |                                                                                                                |
| Brand                                   | YES                         | YES                                         | No, Tony will not be notified since the attribute is already filled in. Anyway Tony has only view permissions. |
| Supplier                                | YES                         | YES                                         | No, Tony will not be notified since the attribute is already filled in. Anyway Tony has only view permissions. |
| **Quality (Bob)**                       |                             |                                             |                                                                                                                |
| Tests reports                           | NO                          | YES                                         | Yes, Bob will be notified since the attribute is not filled in.                                                |
| Material                                | NO                          | YES                                         | Yes, Bob will be notified since the attribute is not filled in.                                                |

Mary will be notified once at the project creation to enrich Release date and Bag style, as these attributes are empty and required attributes.

Tony will not be notified as he only has view permissions on Purchase attribute Group - only users with edit permissions can actually work on the project and thus get notified.

Bob will be notified to enrich tests reports and material attributes belonging to the Quality attribute group.

The project’s creator and the contributors will be notified when the project is calculated.

**Additional information about notifications**

Project’s contributors and creator are notified at different steps of a project:

1.  At the project’s creation,
1.  On the due date reminder: when a project is not 100% complete, 7, 3 and 1 days before due date,
1.  At the end of the project: when a project is 100% complete.

> **Note**
  Our developer guide (aka our cookbook) contains additional information about how to customize notifications and change the number of default days for the reminder (See Customize notification)

### Presentation of the dashboard’s widget

A new widget will display you key information on your dashboard. You will see information like the remaining number of products that have none of the required attributes filled in the TODO section, the number of products with at least one required attribute in the IN PROGRESS section and finally the number of products that are complete in the DONE section.

Under each figure, you will find a percentage. Each percentage will inform you about the 3 statuses’ progress.

When you are working on a project it is also added to the widget with 3 key figures:

| Labels                 | Definitions                                                                |
|:-----------------------|:---------------------------------------------------------------------------|
| TODO                   | Number of products with no required attributes filled in the user can edit |
| % TODO PRODUCTS        | (Number of TODO products*100)/ number of products I have to enrich         |
| IN PROGRESS            | Number of products with at least one required attribute the user can edit  |
| % IN PROGRESS PRODUCTS | (Number of IN PROGRESS products*100)/ number of products I have to enrich  |
| DONE                   | Number of complete products with all required attributes the user can edit |

### Browse projects and users

In addition to figures, the widget also allows you to look for projects and users.

**Browse projects**

Click on the dropdown icon next to the project locale. Current projects will be displayed, sorted by nearest due date.

A search toolbar is available on the top of the list: start typing the first letters of your project’s label, the list will be updated accordingly.

![image](../img/Akn_dashboard.jpg)

**Browse users**

As a project creator, you can search for a user to know his progress on a project. Click on the dropdown icon next to the user and start typing the first letters of his name.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  The project creator is the only one who can select «All contributor» or another contributor.

If you have no project, the widget will display users the message: You have no current project, start a new project.

![image](../img/Akn_dashboard.jpg)

## Workflow & Proposals

Thanks to the Enterprise Edition permissions on categories and attribute groups, you can elaborate workflows to enrich your products. Some users will have ownership of products, they will be able to approve or reject contributions sent from users having only the edit permissions on categories.

### Statuses of products

In the Enterprise Edition version, two more product information are displayed on the product’s header:

*   The user group(s) owner of the product
*   The status of the product form, see below for more information about product form’s statuses.

For further details on the user group(s) in charge of the product, you can review the section “Send my product proposal for approval”.

The statuses visible on the Product Edit Form enable you to know which information is displayed in the form. You can have the following statuses on the product form:

*   **Working copy:** this is the current form approved by the Product Manager.
*   **In progress:** this is the approved product form with your changes in progress. In other words, this a draft for your product form.
*   **Waiting for approval:** you are waiting for your draft to be approved by the product manager.

![image](../img/Akn_dashboard.jpg)

### Contribute to a working copy

A product edit form will have the «working copy» status if you did not previously submit new values for the product information (attributes).

If you have permissions to edit or view an attribute group, the group will appear in the attribute groups list on the left side of the product form.

If you have no permission, you will not see the groups.

If you only have the view permission (only read access no edition possible), the attributes will be displayed but you will not be able to edit them. They will appear as grayed out.

![image](../img/Akn_dashboard.jpg)

You are able to edit all the product’s attributes of an attribute group on which you have the edit permission on the product values of the relevant locale.

AKENEO TIP: Easily find the product you have edit permissions on by using the Permission filter on the product’s grid!

Make changes on your product and click on “Save”:

![image](../img/Akn_dashboard.jpg)

Be aware, your proposal has not been sent yet for approval/refusal.

**You have now created your own working copy of the product! How could you say?**
*   The status record has been changed into “In progress”
*   All new changes applied are displayed. For each change an icon is visible nearby the attribute. Place your mouse over the icon, you can view the ongoing approved value.
![image](../img/Akn_dashboard.jpg)
*   A new button is prompted in blue “Send for approval“: for further details on this action, please refer to the section “Send my product proposal for approval“.

You can come back later on your product draft version to finish your enrichment work on the product.

### Contribute on my current version (aka a product’s draft)

A product edit form will have the “In progress” status after you propose new values for the product information (attributes), it also means it has not been yet sent for approval to product managers.

You can send your draft for approval at any time to the product manager. Please refer to the section “Send my product proposal for approval”.

**You can carry on working on the product’s proposal**

If you change an information that you have not yet recorded, it will be added to your draft when you will save it.

Case 1: the description attribute, no value has been yet approved. The value you are saving = “example of description” is added to your draft. If you edit an information you have already saved, the new changes will be saved in your draft. The old values will be deleted.

Case 2: the description attribute, no value has been yet approved. The saved value is “example of description“ but you change it into “This product is awesome”.

When you click on the “Save Draft” button, the value “This product is awesome” will be added to your draft, and the value “example of description” will be deleted from your draft.

If you propose the same value as the one that has been already approved, the value will not be added to your draft.

For example: the weight attribute. Its approved value corresponds to “5 KG”. You have changed the value to “50 KG” and you save the value. Then you realize that you have made a mistake and enter “5 KG” and you click on the save button. No value will be recorded in your draft for the “Weight” attribute. It will remains “5 KG”.

**View the working copy or my draft in another locale and/or channel**

To view the values of a working copy or your draft (in another locale / channel) or another contributor draft:

1.  Click on the button “Compare / Translate” to display the right panel.
1.  By default, the values of the working copy are displayed. However, you may change the selection with the drop down list on top of the right panel (see below).
![image](../img/Akn_dashboard.jpg)
1.  You can change the channel and the locale in the two drop down lists on top of the right panel.

| Selection           | Attributes and values displayed                                                                                |
|:--------------------|:---------------------------------------------------------------------------------------------------------------|
| Working copy        | Only the attributes with a different value between my draft and the working copy are displayed.                |
| My draft            | All the attributes values updated in my draft are displayed.                                                   |
| Contributor’s draft | Only the attributes with a different value between the contributor’s draft and the working copy are displayed. |

### Contribute to my product proposal awaiting for approval

A product form will have the “Waiting for approval” status when you have entered new values for the product information (attributes), and that they have been sent to product managers for approval, but the new values have not been yet validated.

If you have forgotten a product change or want to complete your proposal, you can do it like for the other statuses.

When you save your work, your draft will be updated and the product status will go back to “In progress” and it will be again sent for approval to the product managers who review your changes.

### Send my product proposal for approval

Once you have created your product draft, a blue button appears in the header of the product form: “Send for approval”.

![image](../img/Akn_dashboard.jpg)

1.  This button allows you to turn your input into a proposal that will be submitted to the product managers so they can approve or reject your proposal.
1.  You can add an optional comment for the product managers about your proposal.
1.  Click on “Send” to send your proposal for approval.
1.  A notification is sent to the product managers to review your proposal.

![image](../img/Akn_dashboard.jpg)

### Proposal’s review by product managers

When the product managers review your proposal, they can:

*   Approve or reject all your proposals: they can approve everything or fully reject the proposal.
*   Approve or reject partially your proposal: they can approve or reject only some changes of the proposal.

| Product manager action                              | My draft                                                                                | Working copy                                               | Draft status         |
|:----------------------------------------------------|:----------------------------------------------------------------------------------------|:-----------------------------------------------------------|:---------------------|
| Approve all your proposal                           | Your draft is deleted.                                                                  | The values proposed in your draft are saved in the product | Working copy         |
| Reject all your proposal                            | Your draft is still there with your changes.                                            | No update of the product                                   | In progress          |
| Partially approve your proposal                     | The changes approved are deleted from your draft.                                       |                                                            |                      |
| Your draft contains only your changes not reviewed. | The values approved are saved in the product                                            | Waiting for approval                                       |                      |
| Partially reject your proposal                      | Your draft is still there with your changes rejected and your changes not yet reviewed. | No update of the product                                   | Waiting for approval |

When the product managers validate, reject or delete your proposal, you receive a notification with an optional comment.

Click on the proposal’s notification to open the product.

![image](../img/Akn_dashboard.jpg)

When the product managers validate or reject partially your proposal, you receive a notification with the details of the changes approved and an optional comment.

Click on the proposal’s notification to open the product.

![image](../img/Akn_dashboard.jpg)

If you didn’t receive a notification after the products managers have validated or rejected your proposal, check your notifications preferences in your user account

### Manage product’s proposals

A proposal is a set of values for product attributes, written by a single contributor. For instance, if two contributors are modifying the same product, 2 proposals will be then created

![image](../img/Akn_dashboard.jpg)

According to your rights, you will be able to list these proposals, to view them in order to approve, reject or even delete them.

### List the proposals to review

You have 2 ways to list the product proposals:

*   From the Akeneo dashboard, through the “Proposals” widget,
*   From the menu in Enrich/Proposals.

Any user whose configuration in the PIM defines his role as in charge of some products (role of a product owner), has a specific entry in the menu: Enrich/Proposals. This page allows to list all the proposals of all the products you own, and that you have to review (the proposals with the status “In progress” are not displayed in the grid).

Any user whose configuration in the PIM defines his role as in charge of some products, has a specific widget on the Akeneo Dashboard.

![image](../img/Akn_dashboard.jpg)

This widget lists the last 10 proposals submitted by contributors to the product manager in charge of reviewing the drafts. Each widget line is a proposal (by product and by user).

Reminder: a contributor can only send one single proposal per product. A proposal can gather several changes on a product.

Each proposal has a shortcut button to be reviewed.

### Review the products’ proposals

**You have 4 ways to review products’ proposals:**
*   From the Akeneo dashboard, click on the “Review” button in the “Proposals” widget.
*   From the notifications bell, click on the proposal notification displayed.
*   From the Product Edit Form, click on the “Proposal” tab.
*   From the Proposals Grid, click on the menu Enrich/Proposals.

The two first actions and the last action take you straight to all product proposals, whereas the 3rd one will only display you the Product’s proposals.

![image](../img/Akn_dashboard.jpg)

> **Note**  
  If you didn’t receive a notification when the contributors send to approve a proposal, check your notifications preferences in your user account.

**The proposals have the following properties:**
*   An author (aka the contributor),
*   The changes made on the attributes, whatever the locale or the channel is,
*   A date and time sent for review,
*   A status.

**Some filters are available on the proposals’ grid:**
*   Author: to filter on the contributor of the proposal
*   Proposed at: to filter on the date sent to review the proposal
*   Product label: to filter on the product updated by the proposal
*   Attribute: to filter on the attribute concerned by the proposal

**You can review the proposals and its changes according to your permissions on attributes groups and locales:**
*   You view only the changes you have the view permissions on.
*   You can review (approve or reject) only the changes you have the edit permissions on.

**Statuses of the proposals**

A proposal can have several statuses, according to your permissions (on attributes groups and locales):

| Status                    | Details                                                                                                                                                           | Actions available                                                      |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| In progress               | The contributor is still working on the proposal, it is not yet completed. <br>Hence it is not possible to review it (it is not displayed in the proposals grid). | You can delete the draft in the Product form, “Proposal” tab.          |
| Waiting for approval      | The proposal is complete and has been sent by the contributor. <br>You have all the permissions to review the proposal changes.                                   | You can approve or reject all the proposal.                            |
| Can be partially reviewed | The proposal is complete and has been sent by the contributor. <br>You have partial permissions to review the proposal changes.                                   | You can approve or reject only the changes on values with edit rights. |
| Can’t be reviewed         | You have no permission to review the proposal changes.                                                                                                            | No action is available on the proposal.                                |

> **Notes**  
  1 - For the proposals having the statuses “Can’t be reviewed” and “Can be partially reviewed”, you cannot review the proposals or all the proposals because you don’t have the right to edit some or all attributes values in the proposal. Please contact your administrator to update your permissions.
  2 - The proposals with the status “In progress” are not displayed in the proposals grid, only in the product form tab “Proposal”.
  3 - If you have only view rights on some changes, the changes are displayed but you can do any action for this change.

![image](../img/Akn_dashboard.jpg)

**Review actions on proposals**

A product manager can review all the proposals (approve or reject a proposal) or can partially review a proposal (approve or reject a change or somes changes) according to her/his permissions.

| Product manager action | Contributor’s draft                                                                                 | Product working copy                         | Proposal                                            |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:---------------------------------------------|:----------------------------------------------------|
| Approve a proposal     | The values approved are deleted from the draft.                                                     | The values approved are saved in the product | The values approved are deleted from the proposal.  |
| Reject a proposal      | The draft contains the changes rejected and not yet reviewed.                                       | No update of the product                     | The values rejected are deleted from the proposal.  |
| Approve a change       | The change approved is deleted from the draft.<br>The draft contains only the changes not reviewed. | The value approved is saved in the product   | The value approved is    deleted from the proposal. |
| Reject a change        | The draft contains the changes rejected and not yet reviewed.                                       | No update of the product                     | The values approved is deleted from the proposal.   |

**Approve a proposal**

Approving a proposal will validate the proposed values. When a proposal is validated, the values are added to the product, and the PIM creates a new product version. Finally the proposal is deleted from the list of the product proposals.

**To approve a proposal:**
1.  Go on the products’ proposals list.
1.  Drag your mouse over a proposal having the statuses “waiting for approval” or “can be partially reviewed”. The proposal will be greyed out and the “Approve all” icon will appear.
![image](../img/Akn_dashboard.jpg)
1.  Click on the check mark button to accept the proposal
1.  A window appears displaying a comment text box, you can leave a note for the contributor.
1.  Click on “Send” to validate the proposal (with or without a comment). A notification is sent to the contributor.

To partially approve a proposal, click on the green check mark right above the suggestion.

![image](../img/Akn_dashboard.jpg)

The popin window is closed and a green flash message appears on your screen. Only the changes on values with edit rights are approved, added to the product and deleted from the proposal.

If you have the permissions to approve all the changes (status “waiting for approval”), the proposal is fully deleted. Otherwise the proposal is kept with the changes not approved and the status is updated from “can be partially reviewed” to “can’t be reviewed”. Another product manager will have to review these changes.

You can check that the product information has been well added to the product if you go to the Product’s “Attributes” tab. You can also check that a new product version has been well created in the “History” tab.

**Reject a proposal**

Rejecting a proposal will refuse the suggested values (with edit rights) and it enables the contributor to change the proposed values or even delete the proposal.

**To reject a proposal:**
1.  Check the product proposals.
1.  Drag your mouse over the proposal having the statuses “ waiting for approval” or “can be partially reviewed”. The proposal will be greyed out and the “Reject all“ icon will be displayed.
![image](../img/Akn_dashboard.jpg)
1.  Click on the button red cross <span class="CharOverride-10"> to reject the proposal.
1.  A window appears displaying a comment text box, you can leave a note for the contributor.
1.  Click on “Send” to reject the proposal (with or without a comment). A notification is sent to the contributor.

To partially reject a proposal, click on the green check mark right above the suggestion.
The popin window is closed and a green flash message appears on your screen. The rejected values are not added to the product.

![image](../img/Akn_dashboard.jpg)

Only the changes on values with edit rights are rejected, added to the contributor’s draft and deleted from the proposal. If you have the permissions to review all the changes, the proposal is moved to the status “In progress”.

Otherwise the proposal is kept with the changes not yet rejected and the status “can’t be reviewed”. Another product manager will have to review these changes.

**Approve a change**

You can approve each change of the proposal one by one, according to your permissions. When a change is approved, the value is added to the product, which creates a new product version. The change approved is deleted from the proposal.

**To approve a change:**
1.  List the product proposals.
1.  For the proposals with the status “waiting for approval” or “can be partially reviewed” and the changes on values with edit rights, the icon is displayed.
![image](../img/Akn_dashboard.jpg)
1.  Click on the button to approve the change.
1.  You can add an optional comment for the contributor about your approval.
1.  Click on “Send” to approve the change. A notification is sent to the contributor.

![image](../img/Akn_dashboard.jpg)

A confirmation message appears. The value approved is added to the product and deleted from the proposal.

If there is no more change to review, the proposal is deleted. Else the proposal is kept with the changes not reviewed.

You can check that the product information is added to the product if you go to the “Attributes” tab. You can also check that a new product version has been created in the “History” tab.

**Reject a change**

Your can reject each change of a proposal one by one, according to your permissions. When a change is rejected, the value is added in the contributor’s draft. The change rejected is deleted from the proposal.

**To reject a change:**
1.  List the product proposals.
1.  For the proposals with the status “waiting for approval” or “can be partially reviewed” and the changes on values with edit rights, the icon is displayed.
![image](../img/Akn_dashboard.jpg)
1.  Click on the button to reject the change.
1.  You can add an optional comment for the contributor about your rejection.
1.  Click on “Send” to reject the proposal. A notification is sent to the contributor.

![image](../img/Akn_dashboard.jpg)

A confirmation message appears. The value rejected is not added to the product.

The value rejected is added in the contributor’s draft and deleted from the proposal.

If there is no more change to review, the proposal is deleted. Else the proposal is kept with the changes not reviewed.

**Delete a proposal**

Only proposals having the “In progress” status can be deleted by the product manager, according to his permissions, in the Product Edit Form tab “Proposal”.

Deleting a proposal updates the list of current proposals in order to make the contributor’s work easier.

Deleting a proposal also deletes all suggested new values: the contributor will not able to find her/his changes anymore on the relevant product.

**To delete a proposal:**
1.  Open the product and display the tab “Proposals”.
1.  When mousing over the proposal’s line with the “In progress” status, the icon “Remove“ will be displayed.
![image](../img/Akn_dashboard.jpg)
1.  Click on the button to delete the proposal.
1.  You can add an optional comment for the contributor about your deletion.
![image](../img/Akn_dashboard.jpg)
1.  Click on “Send” to delete the proposal. A notification is sent to the contributor.

The values deleted are not added to the product and the proposal is deleted.

> **Notes**  
  1. For the proposal having the “Can’t be deleted” status, you cannot delete the proposal because you don’t have the right to edit a change in the proposal. Please contact your administrator to update your permissions.
  2. If you have edit rights only on some changes of a proposal, only these changes will be deleted in the proposal. The proposal will be kept with the other changes.

**Mass review products’ proposals**

When you have a lot of proposals to review, you can see them all in the proposals grid accessible from Enrich > Proposals.

![image](../img/Akn_dashboard.jpg)

**To mass review the products’ proposals:**
1.  Tick the proposals you want to approve or reject in the proposals grid.
1.  Click on the “Approve” or “Reject” action.
1.  Add an optional comment for the contributor.
1.  Click on “Send” to approve/reject the proposals. A notification is sent to the contributor.

![image](../img/Akn_dashboard.jpg)

The action is performed as a back-end task. The report page is displayed so you can follow the execution of the action.

![image](../img/Akn_dashboard.jpg)

> **Notes**  
  1 - For a proposal having the “Can be reviewed partially” status, you can only review the changes you have edit rights on, the other changes are skipped during the mass review. Please contact your administrator to update your permissions accordingly.
  2 - For proposals having the “Can’t be reviewed” status, you cannot review the changes of this proposal because you have no edit right on the values, the proposal is skipped during the mass review. Please contact your administrator to update your permissions accordingly.

**View the contributors’ drafts**

You can view the inputs coming from the contributors in order to know what they have already enriched:

1.  Click on the <span class="CharOverride-25">“Compare/Translate” button to display the right panel.
1.  By default, the product’s values of working copy are displayed. However, you can change this using the drop down menu on top of the right panel (see below).
![image](../img/Akn_dashboard.jpg)
1.  You can change the channel and the locale using the two drop down lists on top of the right panel.

| Selection           | Attributes and values displayed                                                                                        |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------|
| Working copy        | Only the attributes localizable or scopable are displayed.                                                             |
| Contributor’s draft | Only the attributes with a different value between the contributor’s draft and the product working copy are displayed. |


## Manage the publication process

In the PIM, you can manage two different versions of a very same product, one published version used for export and another version to prepare for instance the next collection or season of products.

Publishing products defines which version of a product will be used for export. The export of attributes, categories, etc... does not take into account the notion of «publication».

### What kind of information is published?

For example, a product is complete for all locales activated for the «Web» channel, this complete version is the 5th. The product is enabled and classified in the Web channel category tree.

When you will «publish this version» of this product, all its information will be saved and the PIM will created a «published» version, this published version will be used for the export.

Once you have published a product, you can still edit all its information, for instance, change its name, its description, its price... Publishing a product allows you to start working on a new version of the product without changing the exported data.

New information will not be taken into account in the export until you click again on «Publish this version».

**Use case for associations between published products**

Only associations between published products are exported. An association of a published product with a non-published product, will not be visible in the export.

To associate 2 published products, for instance, Product A to Product B: Product B must be published before you create the association between those 2 products.

**Use case for other product information**

If you change other product information else than attributes or associations, such as category classification, product activation (enabled / disabled), group membership and family change, the information will be updated in the export, they are not kept for the published product.

### Publish a product

**How to publish a product?**

To publish a product:

1.  Open a product edit form,
1.  Click on the “Publish this version” button.

The current version is published. In the “History” tab, the published version is indicated by a blue «P» label as shown below:

![image](../img/Akn_dashboard.jpg)

If you click on «More» to open the complete History page, the Published version will have the Published label, as shown below:

![image](../img/Akn_dashboard.jpg)

**Publish several products at once**

To publish several products simultaneously:

1.  Tick the products in the product grid.
1.  Click on the Bulk Actions button, select «mass edit» action.
1.  Choose the “Publish products” operation:
    *   If you are in charge of all the products you have selected, follow the steps and all selected products will be published.
    *   If you are in charge of some of the products: a message will inform you that you will only be able to publish the relevant products on which you have the own right. Then, follow the steps and only the products you manage will be published. The other products will not be published.
    *   If you are in charge of none of product you have selected, an error message will inform you that you do this action you do not have permission to publish these products. Click on the “Back” button to exit the mass edit process.

**Check the published products**

To check which products are published:

1.  Go to Enrich/Published products.
1.  The published product grid is the same as the product grid.

![image](../img/Akn_dashboard.jpg)

But some features will not be available on this grid:

*   You will not be able to create a new product from this page,
*   You will not be able to delete any published products,
*   You will not be able to modify any published products.

The views are specific to the published product grid. Hence, the views of unpublished products are not shared with the grid of published products.

> **Notes**  
  1. Like for the product grid, you can define a default view when you open the published product grid in your user account, refer to Change your default preferences.
  2. This option is available in your account, only if you have already created a custom view in the published product grid, if not, the field will not appear.

The attributes, families, groups, and categories are taken into account by published product versions and cannot be deleted.

The visual guide to mass edit offers to execute specific operations on published products, just like “unpublishing products”.

It is not possible to edit published products, you can only view them.

### View a published Product Edit Form

To view a published product form:

1.  Go to Enrich/Published products.
1.  Click on the product.
1.  The Product Edit Form is displayed.

![image](../img/Akn_dashboard.jpg)

The display is the same as the unpublished product edit form. For more information, you can refer to the section, “Viewing a product form”. Also, if you do not have the appropriate rights to see some attribute groups at least, these latter will not be displayed.

When you are in charge of the published product which is viewed, there are two buttons available in the header on the right side:

*   Edit the current product version (working copy): clicking on this button will redirect you to the Unpublished Product Edit Form.

![image](../img/Akn_dashboard.jpg)

*   Unpublish

![image](../img/Akn_dashboard.jpg)

### Unpublish products

Unpublishing products remove the product’s version from being used in the exports.

Unpublishing products only impacts the export of products. The export of attributes, categories, etc... does not take into account the concept of unpublishing product.

**Unpublish a single product**

To unpublish one product:

1.  Go to Enrich/Published Products or Enrich/Products.
1.  Click on your product.
1.  Click on the “Unpublish” button if you’re on the published version (see screenshot below).
![image](../img/Akn_dashboard.jpg)
1.  Click on small arrow nearby the Publish this version button and select Unpublish if you are on the unpublished product grid.

![image](../img/Akn_dashboard.jpg)

The product will be no longer published. The product will not be listed anymore in the published product grid.

**Unpublish several products at once**

To unpublish several products at the same time:

1.  Go to Enrich/Published products.
1.  Tick the products in the grid.
1.  Click on the Bulk Actions button, and select the Mass Edit action.
![image](../img/Akn_dashboard.jpg)
1.  Select the “Unpublish Products” operation:
    *   If you are in charge of all selected products, follow the steps and all
        products will be unpublished.
    *   If you are in charge of only part of the selected products: a message will appear to inform you that you can only unpublish the products for on which you have own rights. Then follow the next steps and only the products you own will be unpublished. The other products will not be unpublished.
    *   If you are in charge of none of the selected products: an error message will appear to inform you that you cannot unpublish the products because you do not have the rights to do so. Click on the “Back” button to exit the mass edit process.

    The combination of actions to unpublish / restore a version allows to push new information to a product version.
