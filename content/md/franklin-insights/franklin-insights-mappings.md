---
id: franklin-insights-mappings
themes: franklin-insights
title: Franklin Insights **mappings**
ee-only: true
related: franklin-insights-getting-started, franklin-insights-subscriptions
---

# Overview

Franklin initially generates catalog and product information in its own format. In order to be able to subscribe products to Franklin and receive proposals, **Franklin needs to know which attributes on your PIM correspond to his**.

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

screenshot

Following the Franklin Identifiers Mapping stage, you have everything you need in order to start [subscribing products to Franklin](/franklin-insights-subscriptions.html).

# Attributes and options mapping

Once you subscribe a product to Franklin, and Franklin successfully gathers product information suggestions for this product and product family, you will be directed to the **Franklin Attributes Mapping** UI.

In order to generate proposals for the subscribed and enriched product, Franklin needs to know which of your catalog attributes correspond to his attributes suggestions. The mapping needs to be done for **each family with subscribed and enriched products**.

(screenshot)

You can **expand the Franklin attribute** in order to gain more insights regarding this attribute.  Franklin provides you with a recommended attribute type (not strictly validated), and a summary of the most frequent values for this attribute in this family, all based on **your enriched products**.

screenshot

For simple and multi select attributes, Franklin also needs to know the PIM catalog attribute options that match his. When you pick a simple or multi select attribute on the mapping screen, an icon that leads to the attribute options mapping screen will be revealed

(2 screenshots).

Once you successfully map your catalog attributes and attribute options to Franklin’s structure, **Franklin will begin to generate proposals for mapped attributes of subscribed and enriched products** :tada:.
