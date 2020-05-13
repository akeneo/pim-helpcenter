---
id: connection-dashboard
themes: connectivity, import-export-data
title: Monitor your third-party **connections**
popular: false
ee-only: false
related: what-is-a-connection, how-to-connect-my-pim, manage-your-connections
---

# Overview

In the PIM, there is a dashboard, called the `Connection dashboard`, to help you follow your [connections](what-is-a-connection.html) activity. You can access it by clicking on the `Activity` menu, then on the `Connection dashboard` submenu. And here you are! :tada:

![Connection dashboard](../img/connection-dashboard.png)

::: info
This is still the very first version of this dashboard. In the future, it will show you many more indicators. Stay tuned! 🙂  
And also, don't hesitate to fill in the survey at the bottom of the dashboard page to vote for the next KPI you'd like to see in there.
:::

In this dashboard, for now, you can monitor both your source and destination connections.

::: tips
Empty graphs? Have you ticked the `Track this connection in the dashboard` checkbox in your connections settings?
:::

# Source connection monitoring
In this dashboard, you can easily track the following indicators from your source connections:

- the number of products that were **created** and **updated** over the last 7 days for each source,
![Number of products created by each source](../img/number-of-products-created-updated.png)
- the number of products that were **created** and **updated** over the last 7 days by all your sources.
![Number of products created by all sources](../img/number-of-products-created-updated-all-connections.png)

You can easily switch the source connection you want to monitor by clicking on the following dropdown.

![Source connection dropdown](../img/source-connection-dropdown.png)

# Destination connection monitoring
In this dashboard, you can easily track the following indicators from your destination connections:
- the number of products **sent** to each of your destinations over the last 7 days,
![Number of products sent](../img/number-of-products-sent.png)
- the total number of products **sent** to all of your destinations over the last 7 days.
![Number of products sent](../img/number-of-products-sent-all-connections.png)

You can easily switch the destination connection you want to monitor by clicking on the following dropdown.

![Destination connection dropdown](../img/destination-connection-dropdown.png)

# Error monitoring

## In the Connection dashboard
In this dashboard, you can easily track **business errors** that occurred over the last 7 days. Each square represents a connection and allows you to access the list of related errors by clicking on it. It will redirect you to the connection `Monitoring` page.

![Number of business error per connection](../img/business-errors-per-connection.png)

## In the connection Monitoring page

The `Monitoring` page displays information about **the last 100 business errors**:
- the date and time of the error,
- the error message with details,
- and, on top, a search bar to filter the list. 🔍

![Connection monitoring page](../img/connection-monitoring-page.png)

::: info
For now, we only track errors on **products creation, update, or deletion**. But, we'll add more in the future. Stay tuned! 🙂
:::