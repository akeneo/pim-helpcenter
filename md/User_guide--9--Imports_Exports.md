# Imports & Exports

        Imports

        Importing product data is pretty convenient especially if you want to update your catalog with external sources: vendors, ERP, etc.

        There are two options for the connectors to process the file to import the product information:

        *   Can be executed directly from the UI Akeneo PIM (uploading file)
        *   Or from a given path in the configuration of the import profile, enabling the Akeneo PIM to fetch the file to import when executing the command.

            When importing product data, Akeneo PIM extracts the data from the file and converts them to save in the PIM.

            Depending on the import profile, the import may create proposals to review so that the products are not directly updated.

            CSV or XLSX file import process consists of:

    9.  Creating an import profile. Please refer to the administration guide for this step.
    10.  Building the file, manually or via a third party application.
    11.  Launching the CSV or XLSX <span class="CharOverride-29"> file import.


        You can change the import configuration in the context of the import profile management. Please refer to the Akeneo PIM administration guidelines for it.

        To learn more about a connector and how it works, please refer to its documentation. For example, refer to the documentation of the Akeneo connector to import CSV files or XLSX files.

        <table id="table227" class="Tableau-Notes _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-4"></colgroup>

        <thead>

        <tr class="Tableau-Notes _idGenTableRowColumn-5">

        <td class="Tableau-Notes Notes-header">

        Note

        </td>

        </tr>

        </thead>

        <tbody>

        <tr class="Tableau-Notes _idGenTableRowColumn-22">

        <td class="Tableau-Notes Notes-legende _idGenCellOverride-2">

        A connector can import product information in any required data format: File, Web API, etc.

        </td>

        </tr>

        </tbody>

        </table>

        Run an import

        To start a product import:

    12.  Go to the Collect/Import Profiles menu to see the list of the import profiles available.
    13.  Select the import profile you want to execute, then click on the relevant line.
    14.  The page for the import profile is prompted. Click on the “Import” or “Upload and import” button if the connector enables to load a file from the PIM interface.
    15.  The page of the import execution is displayed. The page refreshes continually to update the information displayed.


        When the import has ended, a notification is available on the top right of the pages of Akeneo.

        <table id="table228" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-40">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/import-notification.jpg)

        </td>

        </tr>

        </tbody>

        </table>

        An email can also be sent depending on the system configuration. For further details on this, please refer to the PIM technical documentation.

        E<a id="_idTextAnchor084"></a>xports

        This feature allows you to provide your product information to third-parties like e-commerce platforms, mobile applications, suppliers... or for other needs.

        <span class="CharOverride-21">You have several ways to export your product information:

        *   You can manually download the export file: you execute the job from the PIM user interface and you download the generated file.
        *   You automatically send the export file to the third-party, by setting a path in the export profile configuration enabling the PIM to automatically drop the file when executing the command.

            When exporting the products, Akeneo PIM extracts data from the PIM and converts it to push in a certain format to a file or directly to a third party application (eg Magento ).

            To export product information, you need to:

    16.  Have an existing export profile or create a new export profile, please refer to the administration guide for this step.
    17.  Start the export (the exported file will be in CSV or XLSX format).


        You can change the export configuration under the export profile management. Please refer to the Akeneo PIM administration guidelines to do so.

        To learn more about connectors and how they work, please refer to the relevant documentation. For instance, for more information about the CSV connector, refer to the documentation of the Akeneo connector Akeneo to export CSV files or XLSX files.

        <table id="table229" class="Tableau-Notes _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-4"></colgroup>

        <thead>

        <tr class="Tableau-Notes _idGenTableRowColumn-5">

        <td class="Tableau-Notes Notes-header">

        Note

        </td>

        </tr>

        </thead>

        <tbody>

        <tr class="Tableau-Notes _idGenTableRowColumn-22">

        <td class="Tableau-Notes Notes-legende _idGenCellOverride-2">

        A connector can export product information in any required data format: CSV, XLSX files, Web API, etc.

        </td>

        </tr>

        </tbody>

        </table>

        Export products with Product Export Builder

        You can now configure your product export profile to only export the data you need thanks to the Prodcut Export Builder. This feature allows you to filter your export data on several product and system information.

        If you are granted with the permissions, you can either create your own product export using the Product Export Builder or edit an existing product export profile.

        Create a new product export profile

        To create a product export:

    18.  Go to Spread/Export Profiles,
        2\. Click on the «Create export profile» button,
        3\. Indicate a unique export code, an export label and select the job: csv_product_export or xlsx_product_export (all fields are required)

        <table id="table230" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-40">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/CreateProductExportProfile.png)

        </td>

        </tr>

        </tbody>

        </table>

        4\. Save your new export profile.

        The PIM opens the Export Profile in Edition mode so you can customise it and select the information you want to export. You can start customising your own export profile to only export the data you need.

        Edit a product export profile

        From an existing product export profile:

    19.  Go to Spread/Export Profiles,
        2\. Click on the product export profile line to edit.
        3\. Once the export profile is displayed, click on the «Content» tab.
        4\. Click on the «Edit» button on the top right hand corner to edit the exported product information

        From a newly created product export profile:

        Click on the «Content» tab.

        To edit the product information:

        You land on a page divided in two sections:

        <table id="table231" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-61">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/Edit_Export_profile.png)

        </td>

        </tr>

        </tbody>

        </table>

        Structure Filters: this part allows you to define the structure of the exported file, namely its columns: you will have to specify a Channel and one or more locales to export (required fields). The last field «Attributes» will allow you to select the attributes to be used as file columns.

        Data Filters: this part allows you to filter your data on several product and system information such as the family, category, status, completeness or even insert a list of SKUs, you can also add new attributes to use them to filter your data.

        Use the structure filters

        To select a channel:

        <span class="CharOverride-22">Each export can only be linked to one channel, please select the relevant channel of products to export.

        To select one or more locales:

        By default, all activated locales for the channel previously selected are exported. You can export product information for one or more locales depending on your needs.

        For instance: Peter needs an export for his Spanish translator: he selects French and Spanish locales, the exported file the translator can enrich the product information for the Spanish locale based on the French product information.

        To remove a locale:

        Click on the small cross nearby the locale code.<span class="CharOverride-21">
        To add a locale:

        Start typing your locale code in the field, the PIM will automatically propose you the matching locales.
        Click on the locale to add it to the field.

        Select attributes as file columns

        Click on the «Edit» button in the field to open the Attribute Selection popin:

        <table id="table232" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-61">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/popin_columns.png)

        </td>

        </tr>

        </tbody>

        </table>

        The popin is divided in three parts: the left part shows the attribute groups, the middle part displays the attributes belonging to the selected group, and on the right side, you will find your attribute selection. By default, note that all attributes are exported.

        To make your own attribute selection, click on left side to select a specific attribute group (or All groups to display all attributes). Place your mouse on your attribute and drag and drop it into the right-most column. The selected attributes will be displayed as columns in your export file.

        <table id="table233" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-61">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/Attributes_Selected.png)

        </td>

        </tr>

        </tbody>

        </table>

        You can reorder your attributes by dragging them up and down. To clear your selection, click on the «Clear» button. To save your attribute selection, click on «Apply».

        The Attributes field will display you the number of attributes selected for the export.

        <table id="table234" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-11">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/Number_of_attributes_selected.png)

        </td>

        </tr>

        </tbody>

        </table>

        <table id="table235" class="Tableau-Notes _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-4"></colgroup>

        <thead>

        <tr class="Tableau-Notes _idGenTableRowColumn-5">

        <td class="Tableau-Notes Notes-header">

        Note

        </td>

        </tr>

        </thead>

        <tbody>

        <tr class="Tableau-Notes _idGenTableRowColumn-22">

        <td class="Tableau-Notes Notes-legende _idGenCellOverride-2">

        By default, the SKU field is exported in the product export.

        </td>

        </tr>

        </tbody>

        </table>

        Use the data filters

        To filter on families:

        By default, this filter is empty meaning that all products will be exported regardless of the family they belong to, products without families will also be exported.

        To add a family:<span class="CharOverride-12">
        If you want to export products belonging to specific families, click on the drop down list and click on the families to add in the field.

        To remove a family:<span class="CharOverride-12">
        Click on the cross nearby the family label to remove it from the field. Products belonging to this family will not be exported anymore.

        To filter on products’ statuses:

        You can also filter on the status of your products, three options available:

        *   <span class="CharOverride-15">All: to export all products whatever their status is
        *   <span class="CharOverride-15">Enabled (default option): to only export enabled products
        *   <span class="CharOverride-15">Disabled: to only export enabled products

            To use the completeness filter:

            The following drop down enables you to filter on completeness of selected locales. Four options on completeness are proposed:

        *   <span class="CharOverride-15">No condition on completeness: all products will be exported whatever their completeness is.
        *   <span class="CharOverride-15">Complete on at least one selected locale (default option): products must be complete on at least one locale
        *   <span class="CharOverride-15">Complete on all selected locales: products must be complete on all locales (if you have selected more than
            one locale).
        *   <span class="CharOverride-15">Not complete on all selected locales: products must not be complete on all locales (if you have selected
            more than one locale).

            <span class="CharOverride-15">For instance, with 4 products and 2 exported locales fr_FR and en_US:

            Product A: complete on fr_FR, uncomplete on en_US
            Product B: uncomplete on fr_FR, complete on en_US
            Product C: complete on fr_FR, complete on en_US
            Product D: uncomplete on fr_FR, uncomplete on en_US

            <span class="CharOverride-15">Exported products according to each completeness option for the locales fr_FR and en_US:

            Option 1: All products (A, B, C, D) will be exported.
            Option 2: Only products A, B, C will be exported.
            Option 3: Only product C will be exported
            Option 4: Only product D will be exported.

            To filter on date:

            You can now export your product on a specific time condition:

        *   <span class="CharOverride-15">No date condition (default option)
        *   <span class="CharOverride-15">Updated products over the last n days (e.g. 6): you want to export products updated since the last ‘n’ days:
        *   <span class="CharOverride-15">Updated products since this date: <span class="CharOverride-15"> you want to export products updated since a specific date
        *   <span class="CharOverride-15">Updated products since last export: you want to export products updated since the last export<span class="CharOverride-30">


            If you select «Updated products over the last n days (e.g. 6)», a field will be displayed nearby the drop down menu. Indicate a number of days (please only use numbers) in this field.

            If you select «Updated products since this date», the date picker will be displayed to choose a date. To change the date, click again on the date picker. To completely remove a date, select another time condition.

            To filter on categories:

            <span class="CharOverride-31">In the export builder, you can also configure the category (ies) of the channel tree you want to export.

            <span class="CharOverride-31">For example, you want to export the clothing products (categories «Clothing» in the tree) to update in mass the families because the families have been refined and new families have been created for clothing.

            <span class="CharOverride-31">By default all categories are exported. To select a category, click n the «Edit» button The categories of the channel tree are displayed:

            <table id="table236" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

            <tbody>

            <tr class="Tableau-image _idGenTableRowColumn-61">

            <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

            ![](End_User_guide-web-resources/image/export-builder-category.png)

            </td>

            </tr>

            </tbody>

            </table>

            You can expand a category and see its subcategory by clicking on the arrow:

            This arrow also enables to collapse a category.

            You can select a category and its subcatgories:

            Or only the subcategories:

            Clicking on «All products» allow you to export all categories by erasing the above selection

            To filter on SKU (or product identifiers)

            You can make a selection of identifiers to export by adding them in the SKU field. You can copy and paste a list of identifiers, they must separated by comma, space or line breaks.

            <table id="table237" class="Tableau-Notes _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-4"></colgroup>

            <thead>

            <tr class="Tableau-Notes _idGenTableRowColumn-5">

            <td class="Tableau-Notes Notes-header">

            Note

            </td>

            </tr>

            </thead>

            <tbody>

            <tr class="Tableau-Notes _idGenTableRowColumn-22">

            <td class="Tableau-Notes Notes-legende _idGenCellOverride-2">

            You can easily copy an identifier list from a csv or xlsx file and paste it in the SKU text area.

            </td>

            </tr>

            </tbody>

            </table>

            To filter on attributes

            An additional filter «Add attributes» is available on the right side of the page. This drop down menu allows you to add attributes as filters for the export.

            <table id="table238" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

            <tbody>

            <tr class="Tableau-image _idGenTableRowColumn-61">

            <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

            ![](End_User_guide-web-resources/image/Attribute_expanded.png)

            </td>

            </tr>

            </tbody>

            </table>

            Select the attributes you’d like to use as filters. Once selected, they will be displayed in the Data filters area, above the SKU field.

            For instance, you are working with a German translator, he needs to only work on products that are missing their German descriptions. You can make a filter on the description field saying:

            Only export the products having no description for German locale and e-commerce channel.

            <table id="table239" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

            <tbody>

            <tr class="Tableau-image _idGenTableRowColumn-11">

            <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

            ![](End_User_guide-web-resources/image/German_description_empty.png)

            </td>

            </tr>

            </tbody>

            </table>

            Each attribute comes with a list of operators, for instance for text area fields, you will have the following operators available:

            <table id="table240" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

            <tbody>

            <tr class="Tableau-image _idGenTableRowColumn-51">

            <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

            ![](End_User_guide-web-resources/image/operators_description.png)

            </td>

            </tr>

            </tbody>

            </table>

            <table id="table241" class="Tableau-Notes _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-4"></colgroup>

            <thead>

            <tr class="Tableau-Notes _idGenTableRowColumn-5">

            <td class="Tableau-Notes Notes-header">

            Notes

            </td>

            </tr>

            </thead>

            <tbody>

            <tr class="Tableau-Notes _idGenTableRowColumn-42">

            <td class="Tableau-Notes Notes-legende _idGenCellOverride-2">

            1\. To create a filter on an attribute, you do not need to have it as a column in your export file.

            2\. All attributes created in the PIM can be used in the Product Export Builder.

            3\. Any attribute can only be used once as a filter.

            </td>

            </tr>

            </tbody>

            </table>

            <table id="table242" class="Tableau-Notes _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-4"></colgroup>

            <thead>

            <tr class="Tableau-Notes _idGenTableRowColumn-5">

            <td class="Tableau-Notes Notes-header">

            Note on the Product Export Builder

            </td>

            </tr>

            </thead>

            <tbody>

            <tr class="Tableau-Notes _idGenTableRowColumn-32">

            <td class="Tableau-Notes Notes-legende _idGenCellOverride-2">

            The Product Export Builder feature <span class="CharOverride-14">is available for the product and published product export profiles (for the CSV and XLSX connectors)

            </td>

            </tr>

            </tbody>

            </table>

            Run an export

    20.  Go to Collect/Export Profiles to see the list of available export profiles.
    21.  Select the job profile to execute, and click on the relevant line.
    22.  The export profile page is displayed. Click on the “Export” button.
    23.  The execution of the export page is prompted. The page refreshes continually to update the information displayed.

        When the export has ended, a notification is available on the top right of the Akeneo PIM.

        <table id="table243" class="Tableau-image _idGenTablePara-1"><colgroup><col class="_idGenTableRowColumn-1"></colgroup>

        <tbody>

        <tr class="Tableau-image _idGenTableRowColumn-115">

        <td class="Tableau-image Image-cell Image-cell _idGenCellOverride-1">

        ![](End_User_guide-web-resources/image/user-exportnotif.png)

        </td>

        </tr>

        </tbody>

        </table>

        An email can also be sent depending on the system configuration. For further details on this, please refer to the technical online documentation of the PIM.

</div>

<div id="_idContainer189" class="Bloc-de-texte-standard">

<span class="CharOverride-2">THANK you!

</div>
