---
id: what-about-measurements
themes: first-steps
title: What about **measurements**?
popular: false
ee-only: false
related: manage-your-measurements
---

# Introduction to the measurements

If you want to **store your product information with measurement**, i.e. weight, length or frequency inside your PIM, you will need [measurement families](#what-is-a-measurement-family) .

The measurements will be really helpful when you are exporting products for a given channel and you want these measurement attributes to be converted to the units you set in the [given channel](manage-your-channels.html#create-a-channel).

A measurement attribute is a single-line field with a first field containing a value and a second one containing a measurement unit.

Below is an example of a `Weight` [measurement attribute](manage-your-attributes.html#create-an-attribute) with a value of `533` for the `Gram` unit.

![Example of a measurement attribute](../img/Settings_Measurement_Attribute.png)

# What is a measurement family?

A measurement family is used to gather the units concerning the same kind of value for a product measurement, i.e. a weight, a length, a frequency, etc.

For example, the `Weight` measurement family allows you to store the weight of products in grams, kilograms, ounces, pounds, etc.

# What about the measurement units?

For each measurement family, **a unit is defined as standard and used to convert the other units**.

For example, for the `Weight` measurement family, `Kilogram` is the standard unit to convert all the other weight units.

To convert a unit to the standard unit you have to define one or several conversion operations.

# Let's create your first measurements!

In the`Settings` menu, there is a dedicated `Measurements` entry where you can list all the existing measurement families, create your own measurement families with their units or add units to the existing measurement families.

Then you will be able to add `Measurement` attributes, enrich your products with measurement data and convert them during product exports.

Let's go!
1. [List the existing measurement families with their units](manage-your-measurements.html#see-all-your-measurement-families)
1. [Create your own measurement family with its units](manage-your-measurements.html#how-to-create-a-measurement-family)
1. [Define a new product attribute type Measurement](manage-your-attributes.html#create-an-attribute)
1. [Define the conversion units for each measurement attribute by channel](manage-your-channels.html#create-a-channel)
