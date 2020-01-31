---
id: franklin-insights-mappings
themes: franklin-insights
title: Franklin Insights **mappings**
ee-only: true
related: franklin-insights-getting-started, franklin-insights-subscriptions
---

# Overview

Franklin initially generates catalog and product information in its own format. In order to be able to [subscribe](franklin-insights-subscriptions.html) products to Franklin and receive [proposals](proposals-workflow.html), **Franklin needs to know which attributes on your PIM correspond to his**.

# Identifiers mapping

The first mapping stage is the **Franklin identifiers mapping**. Franklin accepts 4 different product identifiers: Brand, MPN, UPC, and ASIN.

- **Brand**: the brand name of the product (usually the same as the manufacturer, but doesn’t have to be).
- **MPN**: Manufacturer Part Number, the unique product id assigned to the product by the manufacturer.
- **UPC**: Universal Product Code, a unique 12 digits product code.
- **ASIN**: Amazon Standard Identification Number, a unique product code assigned by Amazon.

::: info
Pro tip about Brand & MPN: If you map one, you also need to map the other.
:::

In order to map Franklin’s identifiers to your catalog attributes, please select the corresponding attribute in your catalog on the mapping table. Don’t forget to save your work once the mapping is done, so we can let Franklin know :wink:

![image](../img/Akeneo_Screenshot_Franklin_Insights_Identifiers_Mapping.png)

Following the Franklin Identifiers Mapping stage, you have everything you need in order to start [subscribing products to Franklin](franklin-insights-subscriptions.html).

# Attributes and options mapping

Once you subscribe a product to Franklin, and Franklin successfully gathers product information suggestions for this product and product family, you will be directed to the **Franklin Attributes Mapping** UI.

In order to generate [proposals](proposals-workflow.html) for the subscribed and enriched product, Franklin needs to know which of your catalog attributes correspond to his attributes suggestions. The mapping needs to be done for **each family with subscribed and enriched products**.

![image](../img/Akeneo_Screenshot_Franklin_Insights_Attributes_Mapping.png)

In the family dropdown, you will be able to see **only families with subscribed products**. In the attribute mapping selection, you will be able to see **only attributes that are in the family being reviewed**. On the Franklin attributes search bar, you can find a Franklin attribute by searching for his label.

When hovering on a Franklin attribute, you will see an icon (next to the attribute name) which allows you to **expand the Franklin attribute** in order to gain more insights regarding this attribute.  Franklin provides you with a recommended attribute type (not strictly validated), and a summary of the most frequent values for this attribute in this family, all based on **your enriched products**.

For simple and multi select attributes, Franklin also needs to know the PIM catalog attribute options that match his. When you pick a simple or multi select attribute on the mapping screen, an icon that leads to the attribute options mapping screen will be revealed

![image](../img/Akeneo_Screenshot_Franklin_Insights_Attributes_Options_Entry.png)

![image](../img/Akeneo_Screenshot_Franklin_Insights_Options_Mapping.png)

Once you successfully map your catalog attributes and attribute options to Franklin’s structure, the status of these attributes and options will change from "Inactive" to "Active", and **Franklin will begin to generate proposals for mapped attributes of subscribed and enriched products** :tada:.

As Franklin needs a little time to make these calculations, the response may take some time. Hang tight, **data is coming**.

::: info
Unmapped attributes are displayed first.
:::

## Ease the mapping

### Exact match

No need to map attributes if they are the same, we do it for you: the PIM attribute is automatically mapped and saved, and a proposal is automatically generated!

![Franklin's exact match screen](../img/franklin_exact_match.png)

::: info
You will have an attribute match if the Franklin attribute code equals the PIM attribute code or its English locale label.
:::

### Suggested mapping

No need to search through a long list of your catalog attributes: if they are almost identical, we suggest the best match for the attribute. The best match is selected, and you can check the other similar ones Franklin found. When you save the attribute mapping screen, the PIM attribute is automatically mapped and saved, and a proposal is automatically generated!

![Franklin's suggested mapping screen](../img/franklin_suggested_mapping01.png)

![Franklin's suggested mapping screen](../img/franklin_suggested_mapping02.png)

### Suggest attribute creation

In case we have no mapping suggestion, we added a new `Create attribute` button. In a single action, you can create the attribute and attach it to the family you are working on without leaving the attribute mapping screen.

![image](../img/franklin_create_attribute.png)

::: info
The newly created attribute will have the following properties:
- attribute type = Franklin attribute type except for metric attributes which are created as Text attribute in the PIM
- attribute code = Franklin attribute code
- attribute label for English locale(s) = Franklin attribute code
- attribute group = Franklin (new default attribute group)
- not required for the family
:::

### Suggest attribute attachment to a family

To avoid useless navigation, if we identify that an attribute exists but is in another family, we added a `Add to family` button to easily add the attribute to the family you're working on.

![image](../img/franklin_add_to_family.png)

### Easily see the mapping progress

A progress bar has been added to the attribute mapping screen to provide you with insights related your work progress.

![image](../img/franklin_progress_bar.png)

Thus, you can see at a glance the number of mapped attributes among the total number of attributes for a dedicated family.

# Impacts of catalog changes on Franklin

As Franklin relies on your catalog attributes and options for mapping, deleting a used attribute or option (or removing it from a family) will result in its removal from the Franklin mapping information.

If the attribute is used for identifiers mapping, removing this attribute may result in unsubscription of many products. As Franklin relies on the product identifiers for data collection and generation, removing the original identifier linked to Franklin will result in the products' unsubscription.
