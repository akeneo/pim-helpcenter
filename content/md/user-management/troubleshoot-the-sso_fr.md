---
id: troubleshoot-the-sso
themes: user-management
title: Comment dépanner **en cas de problème** le Single Sign-On ?
popular: false
ee-only: true
related: configure-saml-sso
priority: low
---

# Vue d'ensemble

Le Single Sign-On est un outil puissant pour la productivité, mais parfois, quand de multiples applications sont liées, il peut s'avérer fastidieux de le dépanner lorsque quelque chose ne va pas.

Voici quelques conseils pour vous aider à comprendre ce qui se passe entre votre `IdP` et votre `SP`.

::: tips
Vous ne connaissez pas les termes `fournisseur d'identités`, `IdP`, `fournisseur de services`, `SP` ? Vous trouverez un glossaire dans cet [article](configure-saml-sso.html).
:::

# Vérifiez votre configuration IdP

1. Tout d'abord, assurez-vous que la configuration que vous avez dans votre fournisseur d'identité est cohérente avec les informations de votre `SP` :
   * l'identité de l'entité du SP
   * l'URL `ACS`.
1. Assurez-vous qu'il n'y a pas de coquille ou de caractères manquants.
1. Assurez-vous que les revendications sont définies dans l'IdP : au moins un attribut **akeneo_uid** doit être déclaré et doit envoyer les informations qui seront vérifiées par rapport au nom d'utilisateur dans le PIM.
1. Vérifiez si les utilisateurs sont créés dans votre serveur d'authentification et sont autorisés à accéder au PIM.

# Vérifiez votre configuration PIM

1. Du côté du PIM, assurez-vous que les informations concernant l'IdP sont correctes :
   * `Entity ID` : l'identité de l'entité `IdP`
   * `URL Sign-on` : l'URL d'ouverture de session
   * `URL de déconnexion` : l'URL de déconnexion.
   * `Certificat` : le certificat
1. Vérifiez si l'information **akeneo_uid** reçue de l'`IdP` correspond aux vrais noms d'utilisateurs dans le PIM. Sinon, le processus de SSO ne pourra pas faire correspondre le **akeneo_uid** avec le nom d'utilisateur du PIM et l'accès sera refusé.

# Je n'arrive pas à accéder à mon PIM ?

L'activation de la fonction Single Sign-On prend le relais du processus de connexion classique dans le PIM. Chaque fois qu'un utilisateur tentera d'accéder au PIM, il sera redirigé vers l'`IdP`.
Ainsi, si le serveur **SSO n'est pas disponible** (maintenance, problèmes réseau, etc.) ou si **votre PIM n'est pas bien configuré**, vos utilisateurs ne pourront pas se connecter au PIM, et vous non plus, même si vous êtes l'administrateur.

C'est pourquoi nous avons conservé l'interface de connexion **classique** dans le PIM à des fins de maintenance. Vous pouvez y accéder en utilisant l'URL suivante : [https://your-pim-url/user/login](https://your-pim-url/user/login).

::: info
Pour l'instant, cette voie d'accès classique n'est pas réservée à certains utilisateurs pour que tout le monde puisse y accéder.
:::

# Jetez un coup d'oeil aux fichiers journaux techniques

La page de configuration du Single Sign-On dans le PIM vous permet de télécharger les fichiers journaux techniques concernant l'authentification du processus SSO.
Les fichiers journaux peuvent être téléchargés sous forme d'archive zip contenant les journaux des jours précédents, un fichier par jour, pour les 10 derniers jours.

![image](sso-download-logs_fr.png)

# Creusez grâce à votre IdP

De nombreux `fournisseurs d'identités` disposent d'outils pour diagnostiquer un SSO défectueux ou non fonctionnel.
La recherche de votre documentation IdP sur _'Troubleshoot SSO'_ peut vous aider à trouver des outils et des solutions.
