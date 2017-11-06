---
id: review-products-proposals
themes: boost-your-productivity, collaborative-work
title: Review the product's **proposals**
ee-only: true
related: proposals-workflow, build-your-user-groups, what-is-a-user-group
---

# Overview

A proposal is a set of values for product attributes, written by a single contributor. For instance, if two contributors are modifying the same product, 2 proposals will be then created

![image](../img/dummy.png)

According to your rights, you will be able to list these proposals, to view them in order to approve, reject or even delete them.

# List the proposals to review

You have 2 ways to list the product proposals:

*   From the Akeneo dashboard, through the “Proposals” widget,
*   From the menu in Enrich/Proposals.

Any user whose configuration in the PIM defines his role as in charge of some products (role of a product owner), has a specific entry in the menu: Enrich/Proposals. This page allows to list all the proposals of all the products you own, and that you have to review (the proposals with the status “In progress” are not displayed in the grid).

Any user whose configuration in the PIM defines his role as in charge of some products, has a specific widget on the Akeneo Dashboard.

![image](../img/dummy.png)

This widget lists the last 10 proposals submitted by contributors to the product manager in charge of reviewing the drafts. Each widget line is a proposal (by product and by user).

Reminder: a contributor can only send one single proposal per product. A proposal can gather several changes on a product.

Each proposal has a shortcut button to be reviewed.

# Review the products’ proposals

You have 4 ways to review products’ proposals:
- from the Akeneo dashboard, click on the “Review” button in the “Proposals” widget.
- from the notifications bell, click on the proposal notification displayed.
- from the Product Edit Form, click on the “Proposal” tab.
- from the Proposals Grid, click on the menu Enrich/Proposals.

The two first actions and the last action take you straight to all product proposals, whereas the 3rd one will only display you the Product’s proposals.

![image](../img/dummy.png)

::: tips 
If you didn’t receive a notification when the contributors send to approve a proposal, check your notifications preferences in your user account. ;)
:::

The proposals have the following properties:
- An author (aka the contributor),
- The changes made on the attributes, whatever the locale or the channel is,
- A date and time sent for review,
- A status.

Some filters are available on the proposals’ grid:
- Author: to filter on the contributor of the proposal
- Proposed at: to filter on the date sent to review the proposal
- Product label: to filter on the product updated by the proposal
- Attribute: to filter on the attribute concerned by the proposal

You can review the proposals and its changes according to your permissions on attributes groups and locales:
- You view only the changes you have the view permissions on.
- You can review (approve or reject) only the changes you have the edit permissions on.

# Statuses of the proposals

A proposal can have several statuses, according to your permissions (on attributes groups and locales):

| Status | Details | Actions available |
|:-------|:--------|:------------------|
| In progress               | The contributor is still working on the proposal, it is not yet completed. <br>Hence it is not possible to review it (it is not displayed in the proposals grid). | You can delete the draft in the Product form, “Proposal” tab.          |
| Waiting for approval      | The proposal is complete and has been sent by the contributor. <br>You have all the permissions to review the proposal changes. | You can approve or reject all the proposal.   |
| Can be partially reviewed | The proposal is complete and has been sent by the contributor. <br>You have partial permissions to review the proposal changes. | You can approve or reject only the changes on values with edit rights. |
| Can’t be reviewed  | You have no permission to review the proposal changes. | No action is available on the proposal.                                |

::: info
  1 - For the proposals having the statuses “Can’t be reviewed” and “Can be partially reviewed”, you cannot review the proposals or all the proposals because you don’t have the right to edit some or all attributes values in the proposal. Please contact your administrator to update your permissions.
  2 - The proposals with the status “In progress” are not displayed in the proposals grid, only in the product form tab “Proposal”.
  3 - If you have only view rights on some changes, the changes are displayed but you can do any action for this change.
:::

![image](../img/dummy.png)

# Review actions on proposals

A product manager can review all the proposals (approve or reject a proposal) or can partially review a proposal (approve or reject a change or somes changes) according to her/his permissions.

| Product manager action | Contributor’s draft | Product working copy | Proposal |
|:------|:-------|:-----|:----------------------------------------------------|
| Approve a proposal         | The values approved are deleted from the draft.   | The values approved are saved in the product | The values approved are deleted from the proposal.  |
| Reject a proposal          | The draft contains the changes rejected and not yet reviewed. | No update of the product  | The values rejected are deleted from the proposal.  |
| Approve a change           | The change approved is deleted from the draft.<br>The draft contains only the changes not reviewed. | The value approved is saved in the product   | The value approved is    deleted from the proposal. |
| Reject a change  | The draft contains the changes rejected and not yet reviewed. | No update of the product | The values approved is deleted from the proposal. |

## Approve a proposal

Approving a proposal will validate the proposed values. When a proposal is validated, the values are added to the product, and the PIM creates a new product version. Finally the proposal is deleted from the list of the product proposals.

To approve a proposal:
1.  Go on the products’ proposals list.
1.  Drag your mouse over a proposal having the statuses “waiting for approval” or “can be partially reviewed”. The proposal will be greyed out and the “Approve all” icon will appear.
![image](../img/dummy.png)
1.  Click on the check mark button to accept the proposal
1.  A window appears displaying a comment text box, you can leave a note for the contributor.
1.  Click on “Send” to validate the proposal (with or without a comment). A notification is sent to the contributor.

To partially approve a proposal, click on the green check mark right above the suggestion.

![image](../img/dummy.png)

The popin window is closed and a green flash message appears on your screen. Only the changes on values with edit rights are approved, added to the product and deleted from the proposal.

If you have the permissions to approve all the changes (status “waiting for approval”), the proposal is fully deleted. Otherwise the proposal is kept with the changes not approved and the status is updated from “can be partially reviewed” to “can’t be reviewed”. Another product manager will have to review these changes.

You can check that the product information has been well added to the product if you go to the Product’s “Attributes” tab. You can also check that a new product version has been well created in the “History” tab.

## Reject a proposal

Rejecting a proposal will refuse the suggested values (with edit rights) and it enables the contributor to change the proposed values or even delete the proposal.

To reject a proposal:
1.  Check the product proposals.
1.  Drag your mouse over the proposal having the statuses “ waiting for approval” or “can be partially reviewed”. The proposal will be greyed out and the “Reject all“ icon will be displayed.
    ![image](../img/dummy.png)
1.  Click on the button red cross to reject the proposal.
1.  A window appears displaying a comment text box, you can leave a note for the contributor.
1.  Click on “Send” to reject the proposal (with or without a comment). A notification is sent to the contributor.

To partially reject a proposal, click on the green check mark right above the suggestion.
The popin window is closed and a green flash message appears on your screen. The rejected values are not added to the product.

![image](../img/dummy.png)

Only the changes on values with edit rights are rejected, added to the contributor’s draft and deleted from the proposal. If you have the permissions to review all the changes, the proposal is moved to the status “In progress”.

Otherwise the proposal is kept with the changes not yet rejected and the status “can’t be reviewed”. Another product manager will have to review these changes.

## Approve a change

You can approve each change of the proposal one by one, according to your permissions. When a change is approved, the value is added to the product, which creates a new product version. The change approved is deleted from the proposal.

To approve a change:
1.  List the product proposals.
1.  For the proposals with the status “waiting for approval” or “can be partially reviewed” and the changes on values with edit rights, the icon is displayed.
    ![image](../img/dummy.png)
1.  Click on the button to approve the change.
1.  You can add an optional comment for the contributor about your approval.
1.  Click on “Send” to approve the change. A notification is sent to the contributor.

![image](../img/dummy.png)

A confirmation message appears. The value approved is added to the product and deleted from the proposal.

If there is no more change to review, the proposal is deleted. Else the proposal is kept with the changes not reviewed.

You can check that the product information is added to the product if you go to the “Attributes” tab. You can also check that a new product version has been created in the “History” tab.

## Reject a change

Your can reject each change of a proposal one by one, according to your permissions. When a change is rejected, the value is added in the contributor’s draft. The change rejected is deleted from the proposal.

To reject a change:
1.  List the product proposals.
1.  For the proposals with the status “waiting for approval” or “can be partially reviewed” and the changes on values with edit rights, the icon is displayed.
    ![image](../img/dummy.png)
1.  Click on the button to reject the change.
1.  You can add an optional comment for the contributor about your rejection.
1.  Click on “Send” to reject the proposal. A notification is sent to the contributor.

![image](../img/dummy.png)

A confirmation message appears. The value rejected is not added to the product.

The value rejected is added in the contributor’s draft and deleted from the proposal.

If there is no more change to review, the proposal is deleted. Else the proposal is kept with the changes not reviewed.

## Delete a proposal

Only proposals having the “In progress” status can be deleted by the product manager, according to his permissions, in the Product Edit Form tab “Proposal”.

Deleting a proposal updates the list of current proposals in order to make the contributor’s work easier.

Deleting a proposal also deletes all suggested new values: the contributor will not able to find her/his changes anymore on the relevant product.

To delete a proposal:
1.  Open the product and display the tab “Proposals”.
1.  When mousing over the proposal’s line with the “In progress” status, the icon “Remove“ will be displayed.
    ![image](../img/dummy.png)
1.  Click on the button to delete the proposal.
1.  You can add an optional comment for the contributor about your deletion.
    ![image](../img/dummy.png)
1.  Click on “Send” to delete the proposal. A notification is sent to the contributor.

The values deleted are not added to the product and the proposal is deleted.

::: info 
  1. For the proposal having the “Can’t be deleted” status, you cannot delete the proposal because you don’t have the right to edit a change in the proposal. Please contact your administrator to update your permissions.
  2. If you have edit rights only on some changes of a proposal, only these changes will be deleted in the proposal. The proposal will be kept with the other changes.
:::

## Mass review products’ proposals

When you have a lot of proposals to review, you can see them all in the proposals grid accessible from Enrich > Proposals.

![image](../img/dummy.png)

To mass review the products’ proposals:
1.  Tick the proposals you want to approve or reject in the proposals grid.
1.  Click on the “Approve” or “Reject” action.
1.  Add an optional comment for the contributor.
1.  Click on “Send” to approve/reject the proposals. A notification is sent to the contributor.

![image](../img/dummy.png)

The action is performed as a back-end task. The report page is displayed so you can follow the execution of the action.

![image](../img/dummy.png)

::: info 
  1 - For a proposal having the “Can be reviewed partially” status, you can only review the changes you have edit rights on, the other changes are skipped during the mass review. Please contact your administrator to update your permissions accordingly.
  2 - For proposals having the “Can’t be reviewed” status, you cannot review the changes of this proposal because you have no edit right on the values, the proposal is skipped during the mass review. Please contact your administrator to update your permissions accordingly.
:::

# View the contributors’ drafts

You can view the inputs coming from the contributors in order to know what they have already enriched:

1.  Click on the “Compare/Translate” button to display the right panel.
1.  By default, the product’s values of working copy are displayed. However, you can change this using the drop down menu on top of the right panel (see below).
![image](../img/dummy.png)
1.  You can change the channel and the locale using the two drop down lists on top of the right panel.

| Selection |  Attributes |
|:--------------------|:----------------------------|
| Working copy | Only the attributes localizable or scopable are displayed. |
| Contributor’s draft | Only the attributes with a different value between the contributor’s draft and the product working copy are displayed. |