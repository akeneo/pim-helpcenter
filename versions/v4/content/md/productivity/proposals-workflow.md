---
id: proposals-workflow
themes: boost-your-productivity, collaborative-work
title: Workflow & **proposals**
ee-only: true
related: review-products-proposals, build-your-user-groups, what-is-a-user-group, access-rights-on-products
---

# Overview

Thanks to the [Enterprise Edition permissions on the categories](access-rights-on-products.html#rights-depending-on-the-categories), you can elaborate workflows to enrich your products. Some users will have ownership of products, they will be able to approve or reject contributions sent from users having only the edit permissions on categories.

:::info
Proposals also work with [product models](what-about-products-variants.html#what-is-a-product-model).
:::

# Statuses of products

In the case you only have an [edit right on a product depending on its categorization](access-rights-on-products.html#rights-depending-on-the-categories), two more product information are displayed in the `Product infos` left panel in the product form:
- `Owner groups`: the name(s) of the user group(s) that own the product
- `Draft status`: the status of the product form

![image](../img/Products_DraftAndOwner.png)

The statuses visible on the product form enable you to know which information is displayed in the form. You can have the following statuses on the product form:
- `Working copy:` this is the current form approved by the product manager
- `In progress:` this is the approved product form with your changes in progress. In other words, this a draft for your product form
- `Waiting for approval:` you are waiting for your draft to be approved by the product manager



# Contribute to a working copy

First, you will have to find a product on which you only have an edit right through its categories. In the product grid, there is a filter to help you find those products: set the `Permissions` filter to `Edit`.

Select one of these products to go to its form.

You can propose changes on all the product attributes of an attribute group on which you have the edit permission on the product values of the relevant locale. For more information about these permissions, do not hesitate to check the following sections:
- [Rights depending on the locales](access-rights-on-products.html#rights-depending-on-the-locale)
- [Rights depending on the attribute groups](access-rights-on-products.html#rights-depending-on-the-attribute-groups)

Once you made your changes on the product, click on `Save`:

![image](../img/Products_InProgressStatus.png)

Be aware, your proposal has not been sent yet for approval.

You have now created your **own draft** of the product! How could you say?
- The product status has been changed into `In progress`
- All new changes applied are displayed. For each change an icon is visible nearby the attribute.
    ![image](../img/Products_DraftIcon.png)
- A new blue button is prompted in the top right corner, it's called `Send for approval`: for further details on this action, please refer to the section [Send your draft for approval](#send-your-draft-for-approval).

You can come back later on your product draft version to finish your enrichment work on the product.

# Contribute on your product draft

A product form will have the `In progress` status after you propose new values for the product information, it also means it has not been yet sent for approval to product managers. We call "product managers", whatever user that has a [owner right](access-rights-on-products.html#the-owner-right) on this product.

You can continue to enrich your current draft by changing the product attributes values. Each time you will hit the `Save` button, a new draft will be generated.

::: info
If you propose the same value as the one that has been already approved, the value will not be added to your draft.  
For example, the weight attribute. Its approved value corresponds to `5 KG`. You have changed the value to `50 KG` and you save the value. Then you realize that you have made a mistake and enter `5 KG` and you click on the save button. No value will be recorded in your draft for the `Weight` attribute. It will remains `5 KG`.
:::

Be aware that, at this stage, you still didn't send your draft for approval.

## View the working copy or your draft in another locale and/or channel

To view the values of a working copy or your draft (in another locale / channel) or another contributor draft:

1.  Click on the `...` button and select the `Compare / Translate` option in the dropdown
1.  By default, the values of the working copy are displayed. However, you may change the selection with the dropdown list on top of the right panel
1.  You can also change the channel and the locale, in the two dropdown lists on top of the right panel
    ![image](../img/Products_Compare-Translate.png)

## Send your draft for approval

### One by One

You can send your draft for approval at any time to the product manager.
Once you have created your product draft, a blue button appears in the header of the product form, it's called `Send for approval`.

![image](../img/Products_SendforApproval.png)

This button allows you to turn your draft into a proposal that will be submitted to the product managers so they can approve or reject your proposal.

You can add an optional comment for the product managers about your proposal.

The status of your product is now `Waiting for approval`.

A notification is sent to the product managers for them to know there is something to review.

![image](../img/Products_ProposalsNotification.png)

::: info
To know more about how proposals are review, take a look at the [Review product proposals](review-products-proposals.html) article.
:::

### Via a sequential edit

To increase your productivity while working with drafts we added the possibility to [sequentially edit](sequential-edit.html) drafts and send them for approval. Let's see how it works!

![sequentially-send-for-approval](../img/Productivity_proposals_sequential.png)

A new button `Send and next` has been added during the sequential edit. If your draft is ready to be reviewed, you can send it for approval and go to the next one during the sequential edit process. Of course, if the enrichment is not complete yet, you can still save your draft without sending for approval.

### Via a bulk actions

As the bulk actions are also a great way to boost your productivity while enriching products, you can also send drafts for approval at the end of the bulk actions. You just need to select the checkbox `Send for approval`.

![checkbox-bulk-send-for-approval](../img/productivity_bulk_send_for_approval.png)

At the end of the process, the contributor is notified of the number of proposals generated.

![checkbox-bulk-send-for-approval](../img/notif_bulk_send_for_approval.png)

::: info
The `Send for approval` checkbox is displayed at the end of the `Edit attribute values` and `Add attribute values` actions, regardless of the user permissions. The permission validation is calculated during a background process.
:::

# Contribute to your proposal awaiting for approval

A product form will have the `Waiting for approval` status when you have entered new values for the product information, and that they have been sent to product managers for approval, but the new values have not been yet validated.

If you have forgotten a product change or want to complete your proposal, you can do it like for the other statuses.

When you save your work, your draft will be updated and the product status will go back to `In progress`. Do not forget to hit again the `Send for approval` button once you have saved your draft.

# Proposal’s review by product managers

When the product managers review your proposal, they can:
- Approve or reject all your proposals
- Approve or reject partially your proposal

| Product manager action | Your draft | Working copy | Final product status  |
|:-----------------------|:---------|:-------------|:--------------|
| Approve all your proposal     | Your draft is deleted      | The values proposed in your draft are saved in the product | `Working copy` |
| Reject all your proposal | Your draft is still there with your changes | No update of the product                                   | `In progress` |
| Partially approve your proposal | The changes approved are deleted from your draft and your draft only contains your changes not reviewed | The values approved are saved in the product | `Waiting for approval` |
| Partially reject your proposal | Your draft is still there with your changes rejected and your changes not yet reviewed | No update of the product | `Waiting for approval` |

When the product managers validate, reject or delete your proposal, you receive a notification with an optional comment.
![image](../img/Products_ProposalsAccepted.png)

Click on the proposal’s notification to open the product form.

::: info
If you didn’t receive a notification after the products managers have validated or rejected your proposal, check your [notifications preferences](manage-your-account.html#your-notifications-preferences-ee-only) in your user account.
:::
