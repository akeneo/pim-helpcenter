# Work on your product data

Click on a product on the grid or create a new product to display the product edit form.

![image](../img/Akn_dashboard.jpg)

## Edit a product

1.  Click on the “Attributes” tab.
1.  Select the locale you want to edit.
![image](../img/Akn_dashboard.jpg)
1.  Change or complete your product information.
1.  Click on the “Save” button (top right hand corner).

The product is updated and a  new product version is created. You can view the product versions on the “History” tab.

> **Note for the Enterprise Edition**  
  1. You can define specific rights on locales, if you have no access to a specific locale contact your administrator.
  1. You can define specific rights on users that can check the product’s history.

### Select a working locale

For each product page, it is possible to define your working locale. The selection of the locale impacts the following information on the Product Edit Form:

* The Family label in the product header,
* The Attribute groups label,
* The Attributes label,
* The Categories label,
* The Association label.

For the localizable attributes (with the indicated locale on top of the field), the entered values will be saved only for the working locale.

If you are working on several locales, you can edit one locale then another one and save all changes at once.

The localizable attributes for some locales exclusively (locale specific), are only displayed when they are concerned by the working locale.

> **Note**  
  The global attributes are displayed regardless of the working locale. Hence, these attributes can be edited in all working locales.

**To select your working locale:**

Select the locale you want to work with.

![image](../img/Akn_dashboard.jpg)

In the drop-down menu, you will find the locales (at least those that have been added to a channel). If you cannot find your working locale listed, you have two options:

*   You do not have the appropriate rights to view or edit the product for this locale. Please contact your administrator in this case.
*   The locale is not required by any of the channels: therefore it is not enabled. To add a locale to a channel, please refer to the section “Channel configuration” in the PIM Administrator user guide.

### Select a working channel

**To select the channel you want to edit:**

Select your channel in the drop down list on the top of the Product Edit Form:

![image](../img/Akn_dashboard.jpg)

The suggested channels in the list will concern the relevant working channel (not locale ??) selected earlier.

**Edit several channels at once**

If you want to edit several channels at once, you can edit the product information for one channel then another one and save all changes at once.

### Add options to a simple or multi-select attribute

If an attribute option is missing for a select attribute type (simple or multiselect), you can directly add it within the Product Edit Form.

**From the Product Edit Form**

1.  Click on the “+” icon on the right side of the attribute.
![image](../img/Akn_dashboard.jpg)
1.  A popin appears, add the attribute option code and its label for the working locale.
![image](../img/Akn_dashboard.jpg)
1.  Click on the “Add” button to create the option, it will be automatically added to the product for this attribute.

If you do not see “+” icon, you might not have the appropriate rights to add an option. In this case, please get in touch with your administrator.

### Add/remove product attributes
You can add attributes to a product, which are not part of the product’s family.


> **Note**  
  An attribute added to the product is not added to a family. It is only added to the current product. Hence, this attribute cannot be taken into account when calculating the completeness.

**From the Product Edit Form**
1.  Click on the “Add Attributes” menu on the right side of the “Attributes” tab.
![image](../img/Akn_dashboard.jpg)
1.  Look for the attributes you want to add to your product form using their labels or codes
1.  Check the attributes you want to add, you can add several attributes at the same time. The number of attributes selected is displayed at the bottom of the drop down.
1.  Click on the “Add” button below the list.

The attributes are added to current the Product Form.

If you do not see the button “Add Attributes”, you might not have the right to add attributes. Please contact your administrator in this case.

These attributes can also be removed from the product form by clicking on the cross icon nearby each attribute added.

![image](../img/Akn_dashboard.jpg)

Only attributes added manually in the Product Edit Form can be deleted, if you do not see a cross nearby an attribute, it either means that this attribute has been added at the family level, nor that you do not have the right to remove attributes manually added. In the last case, get in touch with your administrator.

### View product information from another locale and/or channel

In the Product Edit Form, it is possible to view the values of the product for another locale or channel, to assist capturing the data on an ongoing work, like for instance when translating the product information, or retrieving the product information coming from another team (you are in the e-commerce team and you need the product information from the mobile team or the print team).

**To view the data in another locale and/or channel:**

1. Open the Product Edit Form that you need to translate.
1. Select the locale to be edited.
1. Click on the button “compare / translate” on the right side of the form («working copy» is selected by default).
1. Select the locale and channel to be displayed in the drop down menus on the right side of the form.

The localized or scopable values are displayed on the right side of the product form in the compare / translate panel.

![image](../img/Akn_dashboard.jpg)

The values on the right side can only be viewed, no edition is possible.

Additionally, it is possible to copy the values in the product form. For further details, see the next section.

### Copy product information from a locale and/or a channel

When a locale is displayed for convenient reference in the Product Edit Form (refer to the section “View product information from another locale and/or channel”) you will be able to copy the values in the product form.

**To copy the product information from a locale:**

1.  Follow the guidelines on “View product information from another locale and/or channel”.
1.  There are multiple option values that can be selected from the «Select» drop down menu on the top the «Attributes» tab.
  ![image](../img/Akn_dashboard.jpg)
  The “All” option enables you to select all localized values of the locale of reference.
  The “All visible” option enables you to select all the attribute group values displayed.
  The “None” option enables you to deselect all the localized values of the locale of reference.
1.  Click on the “Copy” button. The selected values are copied to the Product Edit Form.
  ![image](../img/Akn_dashboard.jpg)

## View the product’s versions

The history of changes applied to a product are taking into account for the following operations:

*   Changes of Attribute values in the Product Edit Form,
*   Changes on the product Status (enabled / disabled),
*   Changes on Family,
*   Changes on Association,
*   Changes on Categories,
*   Changes on Attribute groups.

**For each change, a new product version is created. What is tracked down for each version:**

*   The author or system that made the changes,
*   The date and time (up to seconds) at which the changes took place
*   The old and the new value of each amended product information.

**To view the product versions:**

1.  Open the product edit form.
1.  Click on the “History” tab to see the whole list of versions.

![image](../img/Akn_dashboard.jpg)

> **Note for Enterprise Edition**  
  The Enterprise Edition comes with a feature that allows you to rollback to a previous product version.

## Product’s completeness

In Akeneo PIM, a product is considered as complete if all its required values are filled in.

The completeness for a product is defined according to several aspects:

*   According to a family: for instance a product from the family “TV” will not have the same information that another product from the family “Book”;
*   According to a locale: a product can be considered complete in French but not in English as the translation has not been finished;
*   According to a channel: a product can be complete for an iPad application but not for an E-commerce website due to different data requirements.

Therefore the completeness of a product is a percentage that represents the number of required attributes for a channel and a family, and which have values.

### Display the product’s completeness

Click on the «Completeness» tab on the right side of the product edit form to display a panel suming up your product’s completeness:

![image](../img/Akn_dashboard.jpg)

The panel sums up the product’s completeness according to the activated locales.

**Nearby each locale, a number and a progress bar:**
*   The figure indicates the number of channels having this locale activated.
*   The color bar shows the enrichment’s progress:
    *   an empty bar means that no channel is completed for this locale,
    *   an orange bar means that at least one channel is complete
    *   a green one means that all channels are completed for this locale.

If a locale is not activated for a channel, its completeness progress bar will not be displayed.

Click on the arrow icon near a locale to expand the completeness panel for its scopes:

![image](../img/Akn_dashboard.jpg)

For each scope you will see a percentage of completeness, if the progress bar is not green it means that all your required attributes are not all filled in yet!

The list of missing attributes is displayed below the completeness progress bar. If you click on the label of the missing attribute, the Product Edit Form will be update accordingly to put the focus on missing attribute value so you can fill it in directly.

When a locale is not activated for a channel, the completeness progress bar is not displayed.

### Highlighted attributes

To help you focus on the prioritised attributes, we now highlight the empty required attributes in the product edit form. A required attributed is an attribute mandatory for the completeness.

On the left panel, the yellow bullet indicates you that one or more required attributes are missing in an attribute group. In addition to this information, a yellow bullet is displayed in front of the empty attribute.

Once a required attributes will be filled in, the bullet point disappears.

![image](../img/Akn_dashboard.jpg)

## Comment a product

Commenting a product is a convenient way to add additional product information and facilitate the collaboration between team members. Comments are available under the “Comments” tab in the Product Edit Form.

### Add comments

1.  Open the Product Edit Form of the product you want to comment,
2.  Click on the “Comments” tab:

![image](../img/Akn_dashboard.jpg)

3.  In the text field, type in your comment (there is no length restrictions),
4.  Click on the “add a new comment” button.

### Reply to a comment

You can reply to all comments made on a product.

1.  Mouse over the comment to reply to
2.  Click on the reply icon (back arrow) which appears nearby the comment.
3.  A new text field will appear. Click on “Reply” to have your new comment sent.

![image](../img/Akn_dashboard.jpg)

### Delete your comments

You can only delete your own comments.

1.  Place your mouse over the comment to delete.
2.  Click on the “trash” icon which is prompted.
3.  Confirm you want to delete the comment by clicking on the “OK” button in the popin.

![image](../img/Akn_dashboard.jpg)

## Classify a product in categories

A product can be classified in none, one or more categories. A product can be classified in one category tree or more.

### Check the categories a product is classified in

**You have 2 ways to proceed:**
*   Through the Product Edit Form:
  1.  Click on the “Categories” tab
  1.  A green check mark nearby the Category tree indicates if the product is classified in this tree. Next to the category tree name, a number tells you in how many categories the product is added.
  1.  Click on the name of a category tree to see the categories in which the products are classified.

*   Through the <span class="CharOverride-22">shortcut in the grid:
  1.  Select the product for which you want to see the classification in the grid.
  1.  Hover your mouse over the product line in the grid, then the category button (a folder icon) will be displayed
  ![image](../img/Akn_dashboard.jpg)
  1.  Click on the “Classify the product” button. The product category tab will be displayed.
  1.  A green check mark nearby the Category tree indicates if the product is classified in this tree. Next to the category tree name, a number tells you in how many categories the product is added.
  1.  Click on the name of a category tree to see the categories in which the products are classified.

By default the first category tree is displayed and only shows the categories in which the product is classified are expanded. The categories in which the product is classified are ticked.

![image](../img/Akn_dashboard.jpg)

### Classify/unclassify a product in/from categories

**To classify a product:**
1.  Open the Product Edit Form you want to classify.
1.  Click on the “Categories” tab
1.  Click on category tree name.
1.  Check the categories in which your want to classify the product
1.  Uncheck the categories in which the product should no longer be listed.
1.  Then click on the “Save” button.

**Remove products from categories using rules (Entreprise Edition only)**

This action can also be done by a rule, please contact your Administrator for further information.

## Associate products

A product may be associated with none or several other products or product groups. This type of link also called a relationship has a direction: e.g. Product “A” --> Product “B” and Product “A” --> Product Group ”G”. The Product “B” and the product group “G” have no link or associations with the product “A”.

> **Note**  
  This type of relationship enables you to define relationships like an alternative product or a substitution between products for example.

### View the product’s associations

**To check the association types:**
1.  Open the relevant product edit form.
1.  Click on the “Association” tab.
1.  Click on the association type name on the left-hand side.
1.  Click on the “Show groups” button on the right-hand side of the tab to display the product groups grid.
1.  Click on the “Show products” button on the right-hand side of the tab to display the product grid.

![image](../img/Akn_dashboard.jpg)

The green icon in front of the name of the association type shows that the product has at least one association with another product or group of products. The first type of association is displayed in the product grid, listing the products on which the type of association has been applied.

![image](../img/Akn_dashboard.jpg)

The associated products can be identified by the input “Yes” in green in the «Is associated» column of the grid. The boxes are also checked.

### Add/remove associations to/from a product

**To associate a product with another product or group of products**

1.  Open the Product Edit Form.
1.  Click on the “Associations“ tab.
1.  Click on the association name on the left-hand side.
1.  Find the products or the product groups and tick them.
1.  Untick the products or the product groups that you no longer want to associate with the relevant product.
1.  Click on the “Save” button.

## Restore a product version (Enterprise Edition Only)

Just picture the following case: you have a published product, which information is disseminated in different channels. You are currently enriching the product forms: new photos, more detailed description, new price. But a new legislation compels you all at once to update your current published version to push new information about the product: its weight for instance. Unfortunately your improvements on the product page are not completed and still you do not want to publish them. What can you do?

Akeneo PIM allows you to restore your published version in order to work on it and get back to your latest working copy afterwards.

### Introduction to the Restore feature

Restoring a version means reverting the product to an earlier version. For example, if you have 15 product versions, it is possible to go back to the version #5, which will not take into account any changes done afterwards.

![image](../img/Akn_dashboard.jpg)

In this example, restoring the version \#3 voids prices in euros and dollars and the image for the attribute “picture”.

Restoring a version does not delete information, but generates a new version representing the restored version.

![image](../img/Akn_dashboard.jpg)

In this example, the created version contains all changes generated by the restored Version #3, in this case: this will cancel the price and the picture changes.

It is possible to add weight to the product, save the change and publish it. Thus the published product form has not been changed, only the weight has been added.

To go back to the current version that is currently enriched (include the price and the picture), simply restore the version that contains the changes.

### Restore a version

**To restore a version:**
1.  Go to Enrich/Products.
1.  Click on the product to restore.
1.  Go to the “History” tab,
1.  Click on “More” to access the history’s page,
1.  Click on the “Restore” button to revert to a previous version.

![image](../img/Akn_dashboard.jpg)

The version is restored.

> **Note**  
  Your Administrator may use the purge of entities, in this case you will only see the first and last version of your product.

## Change the status of a product

The status of a product enables it not to be taken into account for export, regardless of its status (complete and classified). Thus a product with the status “disabled” will no longer be exported to a channel.

By default, note that a product is “enabled”.

**You have two ways to change a product status:**

**Through the Product Edit Form:**
1.  Open the Product Edit Form to change its status.
1.  Click on “Disabled” or “Enabled” in the product header.
![image](../img/Akn_dashboard.jpg)
1.  Click on the “Save” button.

**Through the shortcut on the product grid:**

1.  Select your product in the Product Grid.
1.  Place your mouse over the product line in the grid, the change status (two arrows icon) button is prompted.
![image](../img/Akn_dashboard.jpg)
1.  Click on the button to change its the product’s status.
1.  The product’s status is changed.

## Generate a PDF from a product form

A PDF file can be generated on demand, it will includes all the product information

> **Note for the Enterprise version**  
  The content of the PDF file matches the working copy of the product form.

**To generate a PDF file from a product form:**

1.  Open the Product Edit Form.
1.  Click on the “PDF” button in the product header.
![image](../img/Akn_dashboard.jpg)
1. The PDF file is automatically downloaded by your web browser.

> **Note**  
  The PDF file has a default template that it can be easily customised.

## Delete a product

A product can be removed directly from the PIM. If you delete a product, all the product information will also be deleted from the PIM. This action cannot be reverted.

**You have two ways to delete a product:**

* Through the Product Edit Form:
  1.  Open the Product Edit Form.
  ![image](../img/Akn_dashboard.jpg)
  1.  Click on the “Delete” button in the product’s header.
  1.  Confirm the action in the popin.

* Through the shortcut on the product grid:
  1.  Select the product you want to delete.
  1.  Place the mouse over the product line in the grid, a trash icon is displayed.
  ![image](../img/Akn_dashboard.jpg)
  1.  Click on the “Delete” button.
  1.  Confirm the action in the popin.

## Consult a product (Enterprise Edition only)

In the Enterprise Edition version, you can view a product page without having the possibility to edit it.

### View a product without editing it

From the Enrich/Products menu, you are able to consult a product through the shortcut available in the grid, in the last column.

![image](../img/Akn_dashboard.jpg)

If you do not have the edit permission on a product, when you click on a product in the grid, you will have this page prompted:

![image](../img/Akn_dashboard.jpg)

It will use the same header as you can find in the Product Edit Form: it is possible to change the locale of the viewing page. But only two tabs are shown: Attributes and Completeness.

The completeness of the product is shown under the “Completeness” tab in the same way as in the product edition mode.

![image](../img/Akn_dashboard.jpg)

### Go back to the product grid

The left arrow icon in the header enables you to go back to the product grid.

![image](../img/Akn_dashboard.jpg)

If you have the edit permission for a product, when you click on a product in the grid, the product edit form is always displayed.

## Mass actions on products

Bulk operations enable you to perform actions on multiple products at once. These operations are performed on a selection of products from the datagrid.

To access the bulk actions, go on the Product’s grid and click on Bulk actions button, on the top of the grid.

**Here’s the list of the bulk operations available in the PIM (Community and Enterprise Editions):**

*   Change Product Information
  *   Change status (enable/disable): this action allows you to edit the status of one or several products, to enable or disable the products.
  *   Edit common attributes: to edit the common attributes of your selection of products. For instance, set a new name or new value for an attribute. This action does not add attribute to products.
  *   Change the product family: to choose/change the family of the selected products.
  *   Add to groups: to add your selection of products in one or more groups (not variant groups).
  *   Add to variant groups: to add your selection of products in a variant group.
  *   Publish products (EE Enterprise only): to mass publish products.
  *   Unpublish products (EE Enterprise only - available from the Published product’s grid): to mass unpublish products
*   Edit products sequentially: to edit product one after the other through their product edit forms.
*   Move products in categories:
  *   Classify products in categories: to add product into categories.
  *   Move products to categories: to change your product categorization
  *   Remove products from categories: to remove products from one or more categories at once.

> **Note**  
  In order to perform a bulk operation on products, you need the rights to each possible action, and also the general permission to perform bulk actions on products.

### Mass edit products

1.  Select the desired products in the datagrid with the appropriate filters.
1.  Tick the products on which you want to perform the operation via the selection tool: «All» for all the products recorded, «All visible» for all visible products on the ongoing page, «none» for none of the products:
![image](../img/Akn_dashboard.jpg)
1.  Click on “Bulk Actions”,
1.  Select “Change product information”,
![image](../img/Akn_dashboard.jpg)
1.  Select the operation to be performed from the screen menu (see the list of operations on the next page),
1.  According to the selected operation, the next page of configuration changes.

| Operations                                                                                        | Step of configuration                                                                                                                                   |
|:--------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Change status                                                                                     | Select the status to be applied: enable or disable                                                                                                      |
| Edit common attributes                                                                            | Add attributes to the product form to set the values ​​to be applied. The changes will be done for the scope and the locale selected in the product’s grid. |
| If you have several locales or scopes, you will have to do several mass actions.                  |                                                                                                                                                         |
| Change the product family                                                                         | Select the family to be applied on products.                                                                                                            |
| Add to groups                                                                                     | Check the groups in which the products will be brought together.                                                                                        |
| Add to a variant group                                                                            | Select the variant group in which the products will be gathered.                                                                                        |
| Publish products                                                                                  | Confirm the action.                                                                                                                                     |
| Unpublish products                                                                                | Confirm the action.                                                                                                                                     |
| Classify products in categories<br>Move products to categories<br>Remove products from categories | Tick the categories in which the products will be classified, moved or removed.                                                                         |

Confirm the action via the popin message.

The action is processed to the back-end, so that you can continue to work on the PIM. When the process is done, you are the only user to be notified.

![image](../img/Akn_dashboard.jpg)

    When you click on the notification, you access the report page of the action.

![image](../img/Akn_dashboard.jpg)

> **Note for Enterprise Edition only**  
  After some of the bulk actions the rules will be automatically applied.

### Edit products sequentially

Sequential edit enables to display one after the other the product forms from a selection of products, without going through the product grid. This will save time allowing the navigation directly between the product forms of the selected products.

Any user with product access with edit permissions can run a sequential edit. There is no specific right to provide access to this feature.

> **Enterprise Edition Note**  
  If the user cannot edit any products from his product selection, then an error message is prompted to inform he cannot do the sequential edit.

**To start the product sequential edit:**
1.  Search for products in the datagrid with the appropriate filters.
2.  Select the products on which you want to perform the operation via the selection tool: all the
    products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column.
![image](../img/Akn_dashboard.jpg)
3.  Click on “Bulk Actions”,
4.  Select “Edit products sequentially”,
![image](../img/Akn_dashboard.jpg)
5.  The product edit page of the first product of the selection is prompted with a progress bar at the top of the page.

![image](../img/Akn_dashboard.jpg)

The progress bar tracks down the number of products that have already been changed from the total number of products of selected products. The progress bar is surrounded by two links on the left and right side.

![image](../img/Akn_dashboard.jpg)

The left link allows you to go back to the previous product, the right link to switch to the next one.

> **Note for the Enterprise Edition**  
  If the user can edit at least one product from his selection, it means that the sequential edition has started. Only the products with the read-only access rights will be displayed.

### Classify, move or remove products

In order to save you some time, you can now directly classify products in categories without an import / export thanks to a bulk action menu in the product grid.

1.  Search for products in the datagrid with the appropriate filters.
2.  Select the products to be removed via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
![image](../img/Akn_dashboard.jpg)
3.  Click on “Bulk Actions”,
4.  Select “Move products in categories”,
![image](../img/Akn_dashboard.jpg)
5.  Select the operation to be performed from the screen menu (see the list of operations on the next page),
6.  According to the selected operation, the next page of configuration changes.

| Operations                      | Step of configuration                                                                          |
|:--------------------------------|:-----------------------------------------------------------------------------------------------|
| Classify products in categories | The products will be positionned into the selected categories, the existing placement is kept. |
| Move products to categories     | The products will be moved into the selected categories, the existing placement is lost.       |
| Remove products from categories | The products will be removed from the selected categories.                                     |

Confirm the action via the popin message.

### Delete multiple products

**To delete multiple products:**
1.  Search for products in the datagrid with the appropriate filters.
2.  Select the products to be removed via the selection tool: all the products recorded, all visible products from the ongoing page, none of the products and the products for which you have ticked the 1st column
![image](../img/Akn_dashboard.jpg)
3.  Click on “Bulk Actions”,
4.  Select “Delete Products”,
![image](../img/Akn_dashboard.jpg)
5.  Confirm the action in the confirmation popin.
