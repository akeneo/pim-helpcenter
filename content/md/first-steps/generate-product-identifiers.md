---
id: generate-product-identifiers
themes: catalog-settings
title: Generate product **identifiers**
popular: true
ee: true
ge: true
related: about-product-identifiers
---

# Identifier Generator

# Overview

The Identifier Generator is the new way to **automate the generation of your identifiers** during the creation process of your products, allowing you to **create and structure product identifiers matching your needs**. 

With our feature, you will have the ability to:

- create the structure of your identifiers with product attributes
- select your targeted products by families
- manage custom abbreviations for each property

:::tips
More features will be released soon, such as:

- the creation of several identifier generators
- the possibility to complete the structure with the code of a record from a reference entity
- the ability to select your targeted products by categories
:::

# Create an Identifier Generator

To create an identifier generator, click on `Settings` and then `Identifier Generator`.

:::info
If you don’t see the `Identifier Generator` icon or don’t see the `Create` button, check with your Administrator that you have the permission to create identifier generators.
:::

**Be aware that once you have created the identifier structure and saved the generator, your generator is enabled, meaning identifiers will be generated when creating or updating products without SKU.**


:::tips
If you need time to set up your identifier generator and make sure it is not enabled until you have decided to, initiate a temporary product selection with contrary conditions, for example, by adding the following two conditions:
- Family `is empty`
- Family `is not empty`
:::


# Define your identifier structure

Create the identifier structure of your choice by defining a template that will be applied for each product that matches your identifier selection. 


Here are the type of properties that you can add to the structure, when selecting `Add new property`:

## Add free text properties:

- you can have 1 or more free text properties
- every ‘free text’ property should not exceed 100 characters. Leading or trailing spaces are not accepted in these properties.


## Add a family, with the possibility to choose:

- either its full code
- its first characters
- or to define its nomenclature by selecting the number of characters but also the operator `Is equal to` or `Lower than or equals to`. For more information about the nomenclature, please refer to our dedicated paragraph below. 


## Add an auto number (or incremental number):

- Choose the minimum number of digits for the structure of your auto number
- Choose a minimum number that your auto number will start from
- The structure of your identifier must only contain one auto number


For example, if the number of digits is 4 and the minimum number is 1, then the first number generated will be 0001.

**Please find below the different use cases for auto numbers and prefixes:**

| The last identifier generated is | and if | the next identifier generated is |
| --- | --- | --- |
| AKN001 | A new product is created | AKN002 |
| AKN001 | A product is imported with AKN060 as the identifier | AKN061 |
| AKN232 | AKN235 is created by a user in the UI | AKN236 |
| AKN999 | A new product is created | AKN1000 |



**If you would like to have more tailored identifier generators, we can recommend you to:**

## Add the delimiter of your choice

The delimiter is not added by default in the structure.

If you tick the box `Use delimiters between each property`, a `-` delimiter will be added between every property of your structure. This delimiter can be changed.

A delimiter must not be a comma, a semicolon, or a leading/trailing space.

:::info
It is only possible to create one delimiter for the entire structure of an identifier generator.

If you would like to **create several delimiters within your structure** (ex: AKN-PRODUCT/001), then we recommend creating free text properties, for example:
- Free text: AKN
- Free Text: -
- Free Text: PRODUCT
- Free text: /
- Auto number: 001
:::

## Use your own nomenclature

You will have the possibility to automatically generate a nomenclature, by adding abbreviations of your choices for families or simple select attributes in your identifier structure. 

A few things to know about the nomenclature:
- All abbreviations will be shared by all your Identifier Generators.
- By default, the nomenclature is empty. You can select `Use your own nomenclature` as the format, and start to edit your nomenclature.


**To edit your nomenclature:**
- Select the operator that should trigger the generation of your abbreviations for each of your families codes or simple select attributes options:
    - **it can be either `Is equal to`.** 
    For example, if you select this operator and ‘3’ as your number of characters, abbreviations of ‘3’ characters will be generated automatically. Codes or options of less characters will be displayed as errors and identifiers won’t be generated. You will have the possibility to manually modify them or to adjust the number of characters or operator from your nomenclature to be able to save. Filters are also available on the top right corner to help you identify them.
    - **or ‘Lower than or equals to’: it will accept codes that have less characters than the number you defined.**
    For example, if you have ‘CD’ as a family code and you have set up your nomenclature to be generated with 3 characters for all other families, your Identifier Generator will be ready to be saved if you have selected the operator `Lower than or equals`.
    
:::tips
If you would like start over your nomenclature, untick the box `Generate nomenclature automatically` and fill in the nomenclature manually. You also have the possibility to select another format for this property by going back to the `Identifier structure` properties and selecting `Use first characters` or `Use the entire code`.
:::

![image](../img/Settings_IdentifierGenerator_ProductSelection.png)

:::info 
The structure of your Identifier Generator should match the existing constraints of your identifier attribute (number of characters, regex, etc.), or an identifier won’t be generated.
:::

:::warning
Please note that you will be able to create a **maximum of 20 properties** (including one or several free texts and an auto number).
:::


# Define your product selection

Add conditions to your product selection if you want to:
- automate the creation of identifiers for a targeted selection of products
- have multiple structures of identifiers for different selection of products (to be released soon).

Here is the type of conditions that you can add to the structure:
1. **the Family of the product**
1. **the status of the product** (`enabled` or `disabled`)
1. **one or several options from Simple Select Attributes** of the product

In our example below, an identifier will be generated for each newly created (or updated and saved) product that is in the `Family/Accessories` and has a status `Enabled`.


![image](../img/Settings_IdentifierGenerator_ProductSelection.png)

:::tips
You will soon be able to add multi select attribute options and categories to your product selection.
:::


# Edit your settings

The label of your identifier generator should not exceed 255 characters. You can also add translations for your Identifier Generator in each of your available locales. 

When creating your Identifier Generator, you will have the possibility to select **Text transformation capabilities**. For example, if you select `No text transformation`, the structure of your Identifier Generator will remain as it has been pre-filled (ex: Tshirt-AKN-001).

On the other hand, here are examples of how your structure will be modified: 
- If you select `Uppercase`, your structure will be modified in uppercase (ex: TSHIRT-AKN-001).
- If you select `Lowercase`, your structure will be modified in lowercase (ex: tshirt-akn-001).

# Manage permissions 

By default, all users will have the right to view the Identifier Generator but also to view generators. Administrators will be able to remove this access to a user.

If an Administrator unticks all permissions for a user, this user will not be able to access the ‘Identifier Generator’ section in the `Settings` of his interface.

Administrators will manage access rights to other users with the following permissions:
- `View Generators`: Users will see the list of generators and consult the settings of each one of them, but they won’t be able to create, edit, or delete generators.
- `Manage Generators`: Users will have the full rights to create and modify generators.

:::info
By default, new users added to the PIM will have the `View Generators` access.
:::

:::info
When launching the feature, users will be assigned the same permissions level as the one they already have for our Rule Engine feature. 
For example, if an user has the right to `Edit` Rules, he/she will have the right to create/edit an `Identifier Generator`. Then, for new companies and users, they will have the `View` access by default *(view the ‘Identifier Generator’ but also to view generators settings).*
:::

# When is my Identifier generated?
- **When a product is created or updated:** in the User Interface, via an import or via the API.
- **Only when a product has no existing SKU:** we will never modify or delete an identifier that is already assigned to a product.

::: warning
**Existing products are not automatically updated after the creation of the generator.** To assign a new identifier to an existing product matching your Identifier Generator settings, you will need to modify the concerned product and save it.
:::


# How to delete or modify an Identifier Generator?

If you would like to delete or modify an existing Identifier Generator, it is important to take note that all previously generated product identifiers will remain assigned to your products.

Only newly created or modified and saved products will be impacted.

If you want to modify or delete an identifier generator:
1. Access the list of generators
1. Move your mouse on the generator you want to modify or delete
1. Edit or delete the generator.
