---
id: product-completeness
themes: products-super-power
title: Follow your **product**'s completeness
popular: false
ee-only: false
related: completeness
---

# Overview

In Akeneo PIM, a product is considered as complete if all its required values are filled in.

The completeness for a product is defined according to several aspects:
- According to a family: for instance a product from the family “TV” will not have the same information that another product from the family “Book”;
- According to a locale: a product can be considered complete in French but not in English as the translation has not been finished;
- According to a channel: a product can be complete for an iPad application but not for an E-commerce website due to different data requirements.

Therefore the completeness of a product is a percentage that represents the number of required attributes for a channel and a family, and which have values.

# Display the product’s completeness

Click on the «Completeness» tab on the right side of the product edit form to display a panel suming up your product’s completeness:

![image](../img/dummy.png)

The panel sums up the product’s completeness according to the activated locales.

Nearby each locale, a number and a progress bar:
- The figure indicates the number of channels having this locale activated.
- The color bar shows the enrichment’s progress:
    - an empty bar means that no channel is completed for this locale,
    - an orange bar means that at least one channel is complete
    - a green one means that all channels are completed for this locale.

If a locale is not activated for a channel, its completeness progress bar will not be displayed.

Click on the arrow icon near a locale to expand the completeness panel for its scopes:

![image](../img/dummy.png)

For each scope you will see a percentage of completeness, if the progress bar is not green it means that all your required attributes are not all filled in yet!

The list of missing attributes is displayed below the completeness progress bar. If you click on the label of the missing attribute, the Product Edit Form will be update accordingly to put the focus on missing attribute value so you can fill it in directly.

When a locale is not activated for a channel, the completeness progress bar is not displayed.

# Highlighted attributes

To help you focus on the prioritised attributes, we now highlight the empty required attributes in the product edit form. A required attributed is an attribute mandatory for the completeness.

On the left panel, the yellow bullet indicates you that one or more required attributes are missing in an attribute group. In addition to this information, a yellow bullet is displayed in front of the empty attribute.

Once a required attributes will be filled in, the bullet point disappears.

![image](../img/dummy.png)