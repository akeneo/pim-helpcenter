# Powerful new automated rule actions

## Concatenate attribute values and free texts
::: meta-data type="New" ee-only="true" link-to-doc="../articles/get-started-with-the-rules-engine.html#concatenate"
:::

Writing product titles and descriptions can take time, but that was before! With the new `concatenate` rule action, you can now combine your attributes, add free-text fields and line breaks, and set the resulting value in another attribute. Very handy when you want to automate the creation of attractive product descriptions and other product content.

This can also be used to ensure your product information is always formatted the same way. For instance, with the creation of a rule to concatenate your product attributes `Name` + `Color` + `Size` and set this new value chain into your `Product title` attribute.

Last but not least, to avoid any mistake, you can preview the created content when setting up your rule.

![Example of an automated product description creation](../img/automated-product-description-with-rules.png)

## Calculate attribute values
::: meta-data type="New" ee-only="true" link-to-doc="../articles/get-started-with-the-rules-engine.html#calculate"
:::

From complex to simple calculations, the `calculate` rule action enables you to do mathematical operations to fill in attributes based on other attribute values. Multiply your length, width and height attributes to get a volume, or create a more complex calculation to forecast your margin. No more time wasted calculating values!

This new action comes with a `round_precision` parameter to allow you to round the final result of your rule operation(s). For example, set the number of decimal places you need or remove them all.

## Empty product values
::: meta-data type="New" ee-only="true" link-to-doc="../articles/get-started-with-the-rules-engine.html#clear"
:::

Automatically clear values from your attributes whatever their content (date, price, simple-select...) or from any other field, based on specific conditions with our new `clear` rule action. This new action also allows you to remove categories from a product, or ungroup/disassociate products from others automatically. :rocket:

## Copy an attribute value to another whatever their attribute types
::: meta-data type="Improvement" ee-only="true" link-to-doc="../articles/get-started-with-the-rules-engine.html#copy"
:::

You can now copy the value from an attribute type to another attribute type. For instance, you can create a rule to copy an option from a simple select attribute to a reference entity single link, instead of manually copy/pasting it. By automating the copy of values, you make sure you have the right data in the right place, this will get rid of some manual and error-prone tasks.

## Set or add associations
::: meta-data type="Improvement" ee-only="true" link-to-doc="../articles/get-started-with-the-rules-engine.html#add-associations"
:::

It was already possible to automatically set or add associations to products/product models/groups thanks to rules, but the format was a bit complex. So, we simplified the format so that it is easier for you to use those actions.
