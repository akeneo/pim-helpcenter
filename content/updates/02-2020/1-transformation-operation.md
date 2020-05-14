# Optimize the weight of your images
::: meta-data type="Improvement" features="Asset Manager" available="20th of February"
:::

Before applying transformations on your assets, we first convert your files into png to avoid any loss of image quality loss. This conversion can increase the size of your media files. If you need to reduce the size of your images, you can now use a new operation `optimize_jpeg`.    
This transformation operation will compress your file to a jpeg.

The `optimize_jpeg` operation must be the last operation of your transformation. Set a quality number between 1 (high compression=lower quality) and 100 (low compression=higher quality). This way, you can easily optimize the weight of your new images.

![Optimize jpeg transformation](../img/Optimize_jpeg_transformation.png)

::: more
[What is a transformation?](../articles/assets-transformation.html) [Available asset transformation operations](/articles/assets-transformation.html#transformation-operations)
:::
