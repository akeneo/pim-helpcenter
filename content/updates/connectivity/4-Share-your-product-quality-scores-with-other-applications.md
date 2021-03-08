# Share your product quality score with other applications
::: meta-data type="New" ee-only="false" link-to-doc="https://api.akeneo.com/concepts/products.html#product"

Are you interested in sending your product quality score to third-party applications to compare this score with your other KPIs, such as the number of sales or the number of product returns? Or maybe, you'd like to know which products should be highlighted on your website depending on the quality of their enrichment level? Well, great news! It is now possible thanks to an evolution of our REST API. 

Indeed, a new `quality_scores` field is now available in our JSON product format when requesting products via the API. So you can now use and leverage this information in all the third-party apps your PIM is connected to.

```json
{
 "identifier": "1111111195",
 "family": "clothing",
 "parent": "jack_brown",
 "categories": [
     "tshirts"
 ],
 "quality_scores": [
    {
        "scope": "ecommerce",
        "locale": "en_US",
        "data": "A"
    }
 ],
 "enabled": true,
 "values": {...},
 "created": "2017-10-05T11:25:48+02:00",
 "updated": "2017-10-05T11:25:48+02:00",
 "associations": {},
 "quantified_associations": {}
}
```
