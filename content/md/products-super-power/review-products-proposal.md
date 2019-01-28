---
id: review-products-proposals
themes: boost-your-productivity, collaborative-work
title: Review product **proposals**
ee-only: true
related: proposals-workflow, build-your-user-groups, what-is-a-user-group, access-rights-on-products
---

# Overview

A [proposal](proposals-workflow.html) is a set of attribute values, written by a single contributor.

::: info
If two contributors are modifying the same product, then 2 proposals will be created.
:::

If you [own a product](access-rights-on-products.html#the-owner-right), you will be able to list its proposals, in order to approve, reject or even delete them.

# List all the proposals to review

You have 2 ways to list the product proposals:
*   From the dashboard, through the `Proposals` widget: this widget lists the last 10 submitted proposals. Each widget line is a proposal.
  ![image](../img/Dashboard_Proposals.png)
*   From the `Proposals` entry in `Activity`
  ![image](../img/Dashboard_ActivityProposals.png)

::: tips
The proposals with the status `In progress` are not displayed in these grids.
:::

::: info
**Reminder**  
A contributor can only send one single proposal per product.  
A proposal can gather several changes on a product.
:::

# Filter the proposals

To quickly find products with proposals, a search bar on product label and product identifier is available. Its behaviour is the same as in the [product grid](products-grid.html#search-by-label-and-identifier.html).

The proposal grid also includes [filter management](products-grid.html#use-filters) to search on new attributes values. By default, the PIM displays the following filters: family, author, proposed date and SKU.

![image](../img/Products_Proposals_Filter.png)

::: info
If you are missing an attribute in the Filters menu, check if it is well activated as [`usable in grid`](manage-your-attributes.html#edit-attribute-properties).
:::

# Review the proposals

You have 4 ways to review products’ proposals:
- from the dashboard, click on the `Review` button in the `Proposals` widget
- from the notifications center, click on the proposal notification
- from the product form, click on the `Proposals` menu entry in the left panel
- from the `Proposals` entry in `Activity`

The two first actions and the last action take you straight to all product proposals, whereas the 3rd one will only display the current product’s proposals.

![image](../img/Products_Proposals.png)

::: tips
If you didn’t receive a notification when the contributors send to approve a proposal, check your [notifications preferences](manage-your-account.html#your-notifications-preferences-ee-only) in your user account. ;)
:::

The proposals have the following properties:
- An author (aka the contributor)
- The changes made on the attributes, whatever the locale or the channel is
- A date and time sent for review
- A status

They are some filters available on each of the proposals’ grids. Do not hesitate to take advantage of them in order to filter your proposals.

You can review the proposals and its changes according to [your permissions on attributes groups and locales](access-rights-on-products.html):
- You can view only the changes you have the view permissions on
- You can review (approve or reject) only the changes you have the edit permissions on

# Statuses of the proposals

A proposal can have several statuses, according to your rights on attribute groups and locales:

| Status | Details | Actions available |
|:-------|:--------|:------------------|
| `In progress`               | The contributor is still working on the proposal, it is not yet completed. Hence, it is not possible to review it (it is not displayed in the proposals grid) | You can delete the draft in the product form, in the `Proposals` menu entry         |
| `Waiting for approval`      | The proposal is complete and has been sent by the contributor. You have all the permissions to review the proposal changes | You can approve or reject all the proposal   |
| `Can be partially reviewed` | The proposal is complete and has been sent by the contributor. You have partial permissions to review the proposal changes | You can approve or reject only the changes on values on which you have an edit rights |
| `Can’t be reviewed`  | You have no permission to review the proposal changes | No action is available on the proposal                            |

![image](../img/Dashboard_ProposalsStatus.png)

::: info
If you have only view rights on some changes, the changes are displayed but you can do any action for this change.
:::

# Review actions on proposals

A product manager can review all the proposals (approve or reject a proposal) or can partially review a proposal (approve or reject a change or somes changes) according to his permissions. These actions are also available as mass actions to be even more efficient.  
He can also delete proposals.

## Approve a proposal

Approving a proposal will validate the proposed values. When a proposal is validated, the values are added to the product, and the PIM creates a new product version. Finally, the proposal is deleted from the list of the product proposals.

To approve a proposal:
1.  Go to the products’ proposals list, in the `Activity` menu for example
1.  Drag your mouse over a proposal having the statuses `Waiting for approval` or `Can be partially reviewed`. The proposal will be greyed out and the `Approve all` button will appear
  ![image](../img/Dashboard_ProposalsAccepted.png)
1.  Click on the `Approve all` button
1.  A window appears displaying a comment text box, you can leave a note for the contributor
1.  Click on `Send` to validate the proposal (with or without a comment). The popin window is closed, a green flash message appears on your screen and a notification is sent to the contributor.

Only the changes on values with edit rights are approved, added to the product and deleted from the proposal.

If you have the permissions to approve all the changes (status `Waiting for approval`), the proposal is fully deleted. Otherwise the proposal is kept with the not approved changes and the status is updated from `Can be partially reviewed` to `Can’t be reviewed`. Another product manager will have to review these changes.

::: tips
You can check that the product information has been well added to the product if you go to the product form. You can also check that a new product version has been well created in the `History` menu entry of the product form.
:::

## Reject a proposal

Rejecting a proposal will refuse the suggested values (with edit rights) and it enables the contributor to change the proposed values or even delete the proposal.

To reject a proposal:
1.  Go to the products’ proposals list, in the `Activity` menu for example
1.  Drag your mouse over the proposal having the statuses `Waiting for approval` or `Can be partially reviewed`. The proposal will be greyed out and the `Reject all` button will be displayed
  ![image](../img/Dashboard_ProposalsRejected.png)
1.  Click on the `Reject all` button
1.  A window appears displaying a comment text box, you can leave a note for the contributor
1.  Click on `Send` to reject the proposal (with or without a comment). The popin window is closed, a green flash message appears on your screen and a notification is sent to the contributor.

Only the changes on values with edit rights are rejected, added to the contributor’s draft and deleted from the proposal.  
If you have the permissions to review all the changes, the proposal is moved to the `In progress` status.
Otherwise the proposal is kept with the not yet rejected changes and its status is moved to `Can’t be reviewed`. Another product manager will have to review these changes.

## Approve a change

You can approve each change of the proposal one by one, according to your permissions. When a change is approved, the value is added to the product, which creates a new product version. The approved change is deleted from the proposal.

To approve a change:
1.  Go to the products’ proposals list, in the `Activity` menu for example
1.  For the proposals with the `Waiting for approval` or `can be partially reviewed` status, if you have edit rights on the changes on values, a checkmark green button is displayed
    ![image](../img/Dashboard_ProposalsAccepted2.png)
1.  Click on the button to approve the change
1.  You can add an optional comment for the contributor about your approval
1.  Click on `Send` to approve the change. A notification is sent to the contributor

A confirmation message appears. The approved value is added to the product and deleted from the proposal.

If there is no more change to review, the proposal is deleted. Otherwise the proposal is kept with the not reviewed changes.

::: tips
You can check that the product information has been well added to the product if you go to the product form. You can also check that a new product version has been well created in the `History` menu entry of the product form.
:::

## Reject a change

Your can reject each change of a proposal one by one, according to your permissions. When a change is rejected, the value is added in the contributor’s draft. The rejected change is deleted from the proposal.

To reject a change:
1.  Go to the products’ proposals list, in the `Activity` menu for example
1.  For the proposals with the status `waiting for approval` or `can be partially reviewed`,  if you have edit rights on the changes on values, a cross red button is displayed
    ![image](../img/Dashboard_ProposalsRejected2.png)
1.  Click on the button to reject the change
1.  You can add an optional comment for the contributor about your rejection
1.  Click on `Send` to reject the proposal. A notification is sent to the contributor

A confirmation message appears. The rejected value is not added to the product. But it is added to the contributor’s draft and deleted from the proposal.

If there is no more change to review, the proposal is deleted. Otherwise, the proposal is kept with the not reviewed changes.

## Delete a proposal

Only proposals having the `In progress` status can be deleted by the product manager, according to his permissions, in the product form in the `Proposals` menu entry.

Deleting a proposal updates the list of current proposals in order to make the contributor’s work easier.

Deleting a proposal also deletes all suggested new values: the contributor will not be able to find her/his changes anymore on the relevant product.

To delete a proposal:
1.  Open the product and click on the `Proposals` menu entry
1.  When mousing over the proposal’s line with the `In progress` status, the `Remove` button will be displayed
    ![image](../img/Products_ProposalsInProgressRemove.png)
1.  Click on the `Remove` button
1.  You can add an optional comment for the contributor about your deletion
1.  Click on `Send` to delete the proposal. A notification is sent to the contributor

The deleted values are not added to the product and the proposal is deleted.

::: info
If you only have edit rights on some changes of a proposal, only these changes will be deleted in the proposal. The proposal will be kept with the other changes.
:::

## Mass review proposals

When you have a lot of proposals to review, you can see them all in the proposals grid accessible from `Activity` > `Proposals`.

To mass review the products’ proposals:
1.  Tick the proposals you want to approve or reject in the proposals grid
1.  Click on the `Approve all selected` or `Reject all selected` button in the toolbar that is displayed at the bottom of the grid
  ![image](../img/Dashboard_MassEditProposals.png)
1.  Add an optional comment for the contributor
1.  Click on `Send` to approve/reject the proposals. A notification is sent to the contributor

The action is performed as a back-end task. The report page is displayed so you can follow the execution of the action.

![image](../img/Dashboard_MassEditProposals2.png)

::: warning
For a proposal having the `Can be reviewed partially` status, you can only review the changes you have edit rights on, the other changes are skipped during the mass review.  
For proposals having the `Can’t be reviewed` status, you cannot review the changes of this proposal because you have no edit right on the values, the proposal is skipped during the mass review.
:::

# View the contributors’ drafts

You can view the inputs coming from the contributors in order to know what they have already enriched:
1.  Go to a product form on which you are owner
1.  Click on the `...` button then choose the `Compare/Translate` option in the dropdown
1.  By default, the product’s values of the working copy are displayed. However, you can change this using the following dropdown menu, choose `XX's draft`, XX being the name of the contributor you want to see the draft values
  ![image](../img/Products_CompareTranslateDrafts.png)
1.  The values in the XX contributor's draft are displayed
