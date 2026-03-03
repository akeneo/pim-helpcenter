---
id: new-products-grid
themes: products-super-power
title: Get familiar with the **new product grid**
popular: false
ee: false
related: products-grid, manage-your-views, what-is-a-category, what-is-a-channel, what-is-a-locale, product-mass-actions
---

# Where is the new product grid?

To access your products, click on the `Products` menu. You will land on the product grid.

This page is your central workspace for browsing, searching, filtering, and managing your entire catalog: products, product models, categories, filters, channels, and locales are all accessible from here.

<!-- ![The new product grid](../img/NewProductGrid_Overview.png) -->

If available on your instance, a version toggle in the left panel lets you switch between the `Classic` grid and the `New` grid. Your preference is remembered across sessions.

In the following sections, we will walk through each area of the grid and how to set up your work environment.

# Locale & channel context

## Select a channel

On the left panel, use the `Channel` dropdown to select your working channel (also called scope). The selected channel determines:
- Which attribute values are displayed in the grid
- Which completeness percentages are shown
- Which locales are available for selection

<!-- ![Select a channel](../img/NewProductGrid_Channel.png) -->

The channel selected on the product grid page is also applied when you open a product form.

::: info
The available channels depend on the locale selected. If you don't find your channel, the locale you selected may not be required for that channel. To add a locale to a channel, refer to the "Manage channels" section in the PIM Catalog Settings Guide.
:::

## Select a locale context

Below the channel selector, choose your working locale. The locale selection impacts the following information on the page:
- The category labels in the category panel
- The attribute labels used as filters and column headers
- The attribute option labels displayed as values
- The product labels shown in the grid
- The completeness displayed (its percentage)

<!-- ![Select a locale](../img/NewProductGrid_Locale.png) -->

::: info
1. The locales displayed have been added to at least one channel. If you do not see your working locale, you may not have the appropriate access rights to view or edit products for this locale (Enterprise Edition). Contact your administrator if needed. Another possibility is that the locale is not required by any channel and therefore is not activated.
2. The working locale selected on the product grid page is also applied when you edit or view a product form.
3. The working locale is different from the user interface locale of the user.
:::

::: ee
In the Workflows mode, a `Task` badge appears next to channels and locales that have workflow tasks assigned to you, helping you quickly identify where action is needed.
:::

# Category panel

## Browse product categories

Click the category filter in the left panel to open the category browsing panel. This panel allows you to navigate between category trees and categories. It displays all categories you have access to.

Click on a category name to filter the grid and display only the products classified in that category. Use the dropdown at the top of the panel to switch between category trees.

<!-- ![Browse categories](../img/NewProductGrid_CategoryPanel.png) -->

::: ee
In the Enterprise Edition, you can define specific rights on categories and category trees to determine which user groups can see, edit, or own products. Categories or trees you don't have view permission on are hidden from the panel.
:::

## Include sub-categories

By default, selecting a category also includes products classified in its sub-categories. Uncheck `Include sub-categories` if you want to see only the products directly classified in the selected category.

## Select multiple categories

Use the checkboxes next to category names to filter the grid on several categories at once. This is useful when you need to review products across multiple parts of your catalog at the same time.

## View unclassified products

At the bottom of the category panel, click `Unclassified products` to display all products that have not been assigned to any category.

::: warning
Remember that unclassified products are not exported.
:::

## Close the category panel

Click the `Done` button at the bottom of the panel to close it, or click anywhere on the grid area. You can also resize the panel horizontally by dragging its edge.

# Search and filter products

## Search by label or identifier

To quickly find products, a search bar is available at the top of the grid. The search applies to the product identifier (or [product model](what-about-products-variants.html#what-is-a-product-model) code) and the label (attribute used as "label" in the [product family](manage-your-families.html#create-a-family)).

The behavior of the search is a "contains" filter. For example, if you type in "can", it will display all the products or product models with an identifier/code or a label which contains "can".

<!-- ![Search by label or identifier](../img/NewProductGrid_Search.png) -->

::: tips
You don't need to press Enter to search. Enter a few characters and the grid updates automatically.
:::

::: info
If the label is localizable or scopable, the search takes into account the locale and the channel selected in the grid.
:::

## Use filters

The product grid includes filter management. Active filters appear in the left panel, below the channel and locale selectors. Click on any active filter to set its operator and value.

<!-- ![Use filters](../img/NewProductGrid_Filters.png) -->

The filters can be applied on the following product information:
- Product information managed by the PIM: Family, Groups, Status, Complete, Creation date, Updated date, product identifier, Permissions, and more
- Product information managed via the attributes

::: info
If an attribute or an attribute option is not translated in the active locale, its code will be displayed in brackets like [name]. Only attributes having the property "usable as grid filter" enabled are available to be used as filters.
:::

::: ee
Only the attributes that you can view or edit are available in the list of filters on the product grid.
:::

## Add or remove filters

Click the `Manage filters` button in the left panel to open the filter management panel. From there:

1. Use the search field at the top to find a specific property or attribute by name
1. Check the box next to an item to add it as an active filter
1. Uncheck an active filter to remove it from the left panel
1. Click `Done` to close the panel

<!-- ![Manage filters](../img/NewProductGrid_ManageFilters.png) -->

Filters are organized in two sections:
- **System**: built-in product properties (Family, Status, Completeness, etc.)
- **Attribute groups**: product attributes grouped by their attribute group, sorted by group order

::: info
You can activate up to **30 filters** at the same time. When the limit is reached, a message is displayed and no additional filters can be added until you remove an existing one. The search bar does not count toward this limit.
:::

## Reset all filters

To clear all active filter values at once, click the reset option in the `Manage filters` button area. This resets filter values to their defaults without removing the filters themselves.

# Customise the grid

## Configure grid columns

You can select which columns you would like to see in the grid. Click on the column configurator to choose which attributes and properties appear as columns. Use the search field to find a specific attribute, then toggle its visibility.

<!-- ![Configure columns](../img/NewProductGrid_Columns.png) -->

::: info
Like for filters, only attributes having the property "usable as grid filter" activated can be used as columns.

And like for categories and locales, if you are an Enterprise Edition client and cannot see an attribute, this is more likely because you do not have the permission to view it.
:::

## Adjust the number of rows per page

The grid displays 25 products per page by default. Use the `Rows per page` selector next to the search bar to choose between 25, 50, 100, or 200 products per page. Your preference is saved across sessions.

::: info
The grid can display up to 10,000 results. Use filters to narrow down your results if you have a larger catalog.
:::

## Sort values within the grid

Click on a column header to sort products by that attribute. Click again to toggle between ascending and descending order.

# Views, Projects, and Workflows

A dropdown in the left panel lets you switch between three operational modes. Each mode provides a different way to organize your work in the grid.

<!-- ![Feature selector](../img/NewProductGrid_FeatureSelector.png) -->

## Views

Views let you save and reload a specific grid configuration — including your active filters, visible columns, and sort order — under a custom name.

1. Configure the grid with the filters, columns, and sorting you want
1. Click `Save as` and give your view a name
1. To reload a saved view, select it from the views dropdown

When your current grid configuration differs from the saved view, an indicator shows that unsaved changes exist. You can update the view to save your new configuration, or discard the changes by reloading the view.

::: tips
For more details on creating, editing, and managing views, refer to [Manage your views](manage-your-views.html).
:::

## Projects (Teamwork Assistant)

Projects allow you to share a grid configuration tied to a specific channel and locale with your team, so everyone works on the same set of products.

1. Configure the grid with the relevant channel, locale, filters, and columns
1. Click `Create project` and fill in the project details
1. Team members can select the project from the dropdown to load its configuration

::: info
Projects are available when the Teamwork Assistant feature is activated on your instance.
:::

::: ee
## Workflows

In Workflows mode, the grid focuses on your assigned workflow tasks. Select a workflow step from the left panel to display the products that require your action.

Channels and locales with assigned tasks are highlighted with a `Task` badge for quick identification.
:::

# Take action on products

## Create a product

Click the `Create` button in the top-right corner of the grid. A creation wizard opens where you can:

1. Choose to create a **Product** or a **Product model**
1. For a product: optionally select a family, then fill in the required fields
1. For a product model: select a family and a family variant, then fill in the required fields

After creation, you are redirected to the product edit form to continue enrichment.

::: info
The `Create` button is available if you have the "Create a product" permission. It is hidden in Workflows mode.
:::

## Select products

Use the checkboxes on each row to select individual products. A toolbar appears at the bottom of the grid with selection options:

- **Select all**: selects every product matching your current filters, across all pages
- **Select all visible**: selects only the products displayed on the current page
- **Unselect all**: clears the entire selection

## Mass actions

When products are selected, the toolbar at the bottom of the grid gives you access to the following actions:

- **Mass edit**: apply changes to all selected products at once (update attribute values, add to categories, change families, etc.)
- **Sequential edit**: open selected products one by one in the product edit form, navigating between them
- **Quick export**: export the selected products to a file
- **Delete**: permanently remove the selected products from the catalog

::: tips
For more details on each mass action, refer to [Bulk actions on products](product-mass-actions.html).
:::

::: ee
In Workflows mode, additional actions are available to complete or approve workflow tasks for the selected products.
:::

## Inline editing

When available, an `Edit` button appears in the grid header. Click it to activate inline editing mode:

1. Modify attribute values directly in the grid cells, without opening each product form
1. A counter tracks how many changes are pending
1. Click `Save` to apply all changes at once, or `Cancel` to discard them

<!-- ![Inline editing mode](../img/NewProductGrid_EditMode.png) -->

::: tips
Inline editing is especially useful for quick updates across several products. For example, updating a release date or a simple select value on a batch of products takes just a few clicks.
:::
