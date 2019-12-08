---
id: publish-workflow
themes: products-super-power
title: La **Publication** de produit, la fonction "2 versions/1 produit"
popular: false
ee-only: true
related: how-to-manage-my-publications, products-associations
---

# Vue d'ensemble

Dans le PIM, vous pouvez gérer **deux versions** différentes d'un même produit : une **version publiée** qui peut être exportée (en utilisant un profil d'export de produits publiés) et **une autre version** qui est utilisée pour préparer la prochaine collection ou saison de produits, par exemple.

C'est ce que nous appelons la fonction **Publication**.

# Un exemple de publication

C'est très simple. Imaginez qu'un de vos produits soit complet pour toutes les locales activées pour le canal *E-commerce*. Le produit est activé et classé dans l'arborescence des catégories du canal *E-commerce*.

Vous êtes satisfait de l'information sur ce produit, alors vous cliquez sur le bouton `Publier`.

![image](Products_PublishProductExample_fr.png)

**Que se passe-t-il ?**    
En fait, ceci *fait un instantané* de l'information sur votre produit en ce moment même. Cet *instantané* représente la *version publiée* de votre produit.

**Que se passe-t-il ensuite ?**   
Vous pouvez toujours éditer toutes les informations de votre produit, par exemple, changer sa description ou sa composition pour la saison suivante...  
Mais cela n'aura pas d'impact sur la version publiée de votre produit que vous avez créé précédemment et il ne sera pas exporté vers votre canal *E-commerce*.

De cette façon, vous obtenez deux versions de votre cher produit en même temps :
- l'un est *figé* : c'est votre version publiée, exportée vers votre canal
- l'autre peut encore être *modifié* : c'est la version actuelle de votre produit

Comme vous pouvez le voir, cette fonctionnalité peut être très utile, d'autant plus qu'elle vous permet de commencer à travailler sur une nouvelle version du produit sans changer la version qui est utilisée comme donnée exportée vers vos canaux.

# Quelle information est publiée ?

Seules vos **valeurs d'attribut** et **associations** sont figées dans votre produit publié. Si vous les modifiez ultérieurement, dans la copie de travail de votre produit, les modifications ne seront pas appliquées à votre produit publié.

::: warning
Ce n'est pas le cas si vous modifiez d'autres informations sur le produit telles que la classification par catégorie, l'activation du produit (activé/désactivé), l'appartenance au groupe et la famille. L'information sera également mise à jour dans votre produit publié.
:::

# Produits publiés et associations

Les produits associés à un produit publié devraient également être publiés, si vous voulez voir les associations entre ces produits dans votre produit publié. Pour en savoir plus sur les associations, consultez l'article [Associations de produits](products-associations.html).
En d'autres termes, l'association d'un produit A publié avec un produit B non publié ne sera pas visible dans votre produit A publié.

Pour associer 2 produits publiés, par exemple, *Produit A* à *Produit B* :
1. Publiez votre *Produit B*.
2. Créez l'association dans le *Produit A*, avec votre *Produit B*.
3. Publier le *Produit A*.
