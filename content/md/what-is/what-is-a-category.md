---
id: what-is-a-category
themes: first-steps, akeneo-concepts
title: What is a **category**?
related: categorize-a-product
---

# Definition of a category
In Akeneo, **a category is used to classify products or assets (EE only)**. A category is always part of a main category tree (or *classification tree*).

You can have **one or more category trees** in Akeneo with an **unlimited number of levels** (categories, subcategories, sub-subcategories...).

![image of the category trees](../img/Settings_CategoryTree.png)

## Differences between families and categories

### Categories

- Trees and categories are a way to classify your products  
- A product can be in several or no categories

### Families

- A family is a *set of attributes* used to enrich a product  
- A product can only belong to one family

# How to create a new category?

A category or a category tree only needs a code to be created. You can name your category or category tree and this name can be translated to any activated locale in the PIM.
![image of category tabs](../img/Settings_CategoryTreesCreate.png)

## From the user interface

Go to `Settings`/`Categories`. To create a new category tree, click on `Create a new category` button.
![How to create a new category](../img/Settings_CreateCategoryCTA.png)

To add a new category or subcategory in this tree, select your tree in the category dropdown menu. Once the tree appears, select the tree name to add a new category or select a category to add a new subcategory.
Then right click on the selected category, a `Create` button appears.

![image of create button to add a new category](../img/Settings_CreateASubcategory.png)

## Through imports
Akeneo comes with import jobs that allow you to create or update category trees and categories. You can use them to create a new tree, update a category tree or a category labels, or add new categories or subcategories for instance.

To do so, use the search bar to find the existing job from `Imports` or click on `Create Import Profile` to add a new import.
You can choose to use a CSV or XLSX import profile.
![image of import profile](../img/Imports_CategoryTreeProfile.png)

::: tips
If you do not know the file format to import, go to `Exports`, use an existing XLSX or CSV category export profile (or create a new one) and use the exported file as a template!
:::

::: tips
To learn how to create/update a category through the API, see the [API documentation](https://api.akeneo.com/api-reference-index-17.html#Categories).
:::

# Sort categories

From the UI, you can drag & drop categories to reorder them within the tree.
![image of reordering category ](../img/Settings_SortingCategoriesProcess.gif)

If you do not have the permission to see the categories (which is a permission defined for your user role in `System`/`Roles`), you will not be able to access the category panel displayed on the left side of the screen and access to the `Settings`/`Categories` menu.

::: warning
You cannot sort category trees only categories. Trees are displayed by date of creation: new trees are displayed first.
:::

::: ee
In the Enterprise Edition, you can define specific user rights on categories, to give ownership on products. For more information about permissions on categories see the following page: [Set rights on your catalog](access-rights-on-products.html#rights-depending-on-the-categories). 
:::

# How to categorize a product?

Learn more about product categorization on the following page: [Categorize a product](categorize-a-product.html)

::: tips
A product can be categorized in none, one or several categories.
An uncategorized product will not be exported.
:::

::: warning
`category`, `categories`, `categoryId` are used for internal purposes, you cannot use these words as "codes" in the PIM.
:::
