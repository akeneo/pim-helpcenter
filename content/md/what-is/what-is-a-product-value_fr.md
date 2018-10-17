---
id: what-is-a-product-value
themes: akeneo-concepts
title: Qu'est-ce qu'une **valeur de produit**?
popular: false
related: catalog-volume-monitoring
---

# Valeur de produit = information produit

Votre PIM est un espace de stockage, un conteneur, n'est-ce pas ? Et donc, que stockez-vous à l'intérieur de votre PIM ? De l'information produit.   

C'est simple. Une "valeur de produit" est juste un autre terme pour désigner une “information produit”. C'est le P et le I qui forment les initiales de votre PIM. 🙂

Dans le PIM, vous pouvez retrouver le nombre de valeurs de produit dans un tableau de bord dédié : la [volumétrie du catalogue](/fr/articles/catalog-volume-monitoring.html).

# Exemple

Pour faire simple, prenons un exemple.  
Dans la capture d'écran du PIM Akeneo ci-dessous, il y a plusieurs valeurs de produit : le nom, l'image, la marque, la collection et la description, 5 valeurs de produit au total.

![Product values in the product form](/img/Products_PEF_ProductValue.png)

Comme vous pouvez le voir, la description dans cet exemple est “scopable” et “localisable”, c'est-à-dire qu'elle a une valeur différente par canal et par locale activée.   
Donc, au final, il y a plus que 5 valeurs de produit ici puisque la description ne contient pas une seule valeur, mais _n*m_ valeurs, _n_ étant le nombre de canaux et _m_ étant le nombre de locales activées.

Pour l'exemple, disons que notre PIM est configuré avec 3 canaux et 2 locales activées pour chaque canal. Maintenant, comptons les valeurs de produit:
- 1 valeur de produit pour le nom,
- 1 valeur de produit pour l'image,
- 1 valeur de produit pour la marque,
- 1 valeur de produit pour la collection,
- 3*2 valeurs de produit pour la description.

Le nombre total de valeurs de produit dans cet exemple est donc 10. :) Facile comme tout !

::: info
Seules sont comptées comme valeurs de produit celles qui sont renseignées dans le PIM. Cela signifie que si la description pour la locale `Français` dans le canal `Ecommerce` est manquante, on ne comptera que 9 valeurs de produit dans notre exemple ci-dessus.
:::
