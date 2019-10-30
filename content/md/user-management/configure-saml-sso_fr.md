---
id: configure-saml-sso
themes: user-management
title: Configurez l'authentification unique **Single Sign-On** basée sur SAML 
popular: false
ee-only: true
related:
priority: low
---

# Vue d'ensemble

Le Single Sign-On (aka SSO) est un processus d'authentification qui permet à un utilisateur d'accéder à plusieurs applications avec un seul jeu d'identifiants.

L'authentification unique est une pratique courante dans les entreprises qui traitent un grand nombre d'utilisateurs et d'applications.

## Termes SAML courants

Comprendre le fonctionnement du Single Sign-On basé sur SAML peut s'avérer une tâche complexe car il introduit des termes qui peuvent être obscurs à première vue.

### Fournisseur d'identité (IdP)

Le `fournisseur d'identité` (Identity Provider aka `IdP`) est l'autorité qui vérifie l'identité de l'utilisateur et lui donne accès à l'application demandée (alias le `fournisseur de services`).

### Fournisseur de services (SP)

Le `fournisseur de services` (Service Provider aka `SP`) est la ressource hébergée à laquelle l'utilisateur tente d'accéder. Dans notre scénario, le `SP` fait partie du PIM qui gère le processus d'authentification.

#### ID de l'entité

Un ID d'entité est un nom unique au monde pour un `fournisseur d'identité` ou un `fournisseur de services`. Ce nom unique est utilisé pour identifier chaque partie dans le processus du BSP.
Pour le `Fournisseur de services`, l'ID de l'entité est automatiquement généré et correspond par défaut à l'URL des métadonnées du `SP`.

### Service à la clientèle d'affirmation de soi (ACS)

L'ACS est l'extrémité SP (URL) qui est responsable de la réception de la réponse SAML de l'IdP.

#### Métadonnées

Les métadonnées sont un ensemble d'informations fournies par l'IdP ou le SP, en format XML.
* `Fournisseur de services` : Les informations de métadonnées fournies par le SP contiennent l'ID de l'entité, le certificat X.509 utilisé pour déchiffrer les messages provenant du SP, l'URL de déconnexion et l'URL ACS.

::::tips
L'information sur les métadonnées du SP peut être consultée à l'adresse URL suivante : https://YOUR_PIM_SERVER/saml/metadata. Selon votre IdP, cette URL de métadonnées peut être importée directement dans l'IdP pour faciliter le processus de configuration.
:::

* `Fournisseur d'identité` : L'IdP peut également fournir des métadonnées pour aider à configurer la communication SAML. Pour le moment, il n'est pas possible de l'importer dans le PIM pour configurer le Single Sign-On.

## Qu'est-ce que SAML ?

SAML (Security Assertion Markup Language) est un standard basé sur XML pour l'échange de données d'authentification entre un `Identity Provider (IdP)` (tel que Microsoft Azure AD) et un `Service Provider (SP)` (dans notre cas notre PIM préféré).

# Configurez le SSO

Le Single Sign-On basé sur SAML est une communication bidirectionnelle entre un serveur d'authentification (le fournisseur d'identité) et une application (le fournisseur de services). Par conséquent, votre PIM doit être configuré pour déclarer qui sera le serveur d'authentification et comment la communication doit fonctionner.

## Recueillez des informations auprès de votre fournisseur d'identité (IdP)

Tout d'abord, avant de configurer votre PIM pour communiquer avec un `Identity Provider`, vous devrez rassembler quelques informations sur votre `IdP`. Votre département IT/administrateur SSO doit probablement avoir toutes les informations.

## Activer la fonction d'ouverture de session unique

Pour activer la fonction de Single Sign-On, il suffit de cliquer sur le bouton `SSO enabled` dans l'interface.
Une fois activée, toutes les demandes d'authentification seront redirigées vers le serveur d'authentification que vous avez spécifié.

## Configurez la section Fournisseur d'identité (IdP)

![image](SamlSSO-IdPConfiguration_fr.png)

À l'aide des renseignements que vous avez recueillis précédemment, vous pouvez remplir tous les champs requis pour communiquer avec l'IdP.
Les valeurs obligatoires sont les suivantes :
* `Entity ID` : Chaîne qui identifie de façon unique votre IdP (elle est en général fournie par votre IdP)
* `Sign-on URL` : URL qui sera utilisée lorsqu'un utilisateur essaie de se connecter au PIM
* `Logout URL` : URL qui sera utilisée lorsqu'un utilisateur demande une action de déconnexion dans le PIM
* `Certificat public` : Comme les communications sont chiffrées entre le SP et l'IdP, la clé publique IdP est nécessaire pour déchiffrer tout message entrant.

::: info
Les certificats doivent être au format X.509.
Pour plus d'informations sur le certificat X.509, vous pouvez consulter [cet article](https://en.wikipedia.org/wiki/X.509).
:::

## Configurez la section Fournisseur de services (SP)

![image](SamlSSO-SPConfiguration_fr.png)

::: info
Par défaut, la configuration du SP est automatiquement renseignée lors du premier accès à la page de configuration du SSO. Si vous voulez fournir votre propre certificat, vous pouvez coller les certificats de clés publiques et privées dans les champs correspondants.
Ces informations seront nécessaires pour configurer votre IdP.
:::

Les informations requises pour configurer le SP sont les suivantes :
* `Entity ID` : Chaîne qui identifie de façon unique votre SP (cette information doit être fournie à l'IdP)
* Certificats de clés publiques et privées : Comme les communications sont chiffrées, les clés privées et publiques sont nécessaires pour déchiffrer les messages sortants.

::: tips
Les `URL des métadonnées` et `URL de l'ACS` sont en lecture seule. Ils disposent d'une fonctionnalité de copie intégrée pour copier facilement l'URL dans le presse-papiers.
:::

::: info
Le certificat SP est auto-signé et est généré pour ne jamais expirer. Vous n'aurez jamais à le renouveler.
:::

# Désactivez le SSO

Pour désactiver la fonction de Single Sign-On, cliquez simplement sur le bouton `SSO enabled` dans l'interface.
Une fois désactivée, toutes les demandes d'authentification passeront par l'interface de connexion classique.

# Tips and tricks

## A propos des utilisateurs dans le PIM

Une fois le SSO activé, les mots de passe qui existent sur le PIM ne seront plus utilisés.
D'autre part, les utilisateurs créés dans le PIM seront toujours nécessaires pour établir la connexion entre les utilisateurs provenant de l'IdP et les droits d'utilisateur existant dans le PIM.

Vous devrez vous assurer que tous les utilisateurs potentiels de votre IdP qui peuvent accéder au PIM ont un compte configuré dans le PIM.
Les utilisateurs inconnus ne sont pas générés à la volée lorsqu'ils accèdent au PIM. Si un utilisateur n'existe pas dans le PIM, il ne pourra pas accéder au PIM et une erreur apparaîtra.

## A propos des réclamations des utilisateurs

Les réclamations de l'utilisateur sont des informations que le fournisseur de services attend lorsqu'une authentification est effectuée sur l'IdP et que la réponse positive est renvoyée au PIM.
Ces valeurs sont obligatoires pour que le Single Sign-On dans le PIM fonctionne. Votre administrateur SSO doit configurer la réponse IdP pour intégrer ces valeurs. Veuillez consulter la documentation de votre IdP pour savoir comment configurer les réclamations sur l'IdP.

La réponse IdP doit contenir les attributs suivants :
* **akeneo_uid** : Sera utilisé pour vérifier le nom d'utilisateur dans la base de données PIM. C'est la partie la plus importante de la communication SAML.
* **http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname** : Nom de l'utilisateur
* **http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname** : Prénom de l'utilisateur
* **http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress** : Email de l'utilisateur

## A propos de la sécurité

De par sa conception, afin d'avoir le processus le plus sécurisé possible, toutes les communications entre le fournisseur d'identité et le fournisseur de services doivent être chiffrées.

De plus, en ce qui concerne la sécurité, il est obligatoire d'utiliser le protocole **HTTPS** autour du PIM. L'utilisation de la communication HTTP peut constituer une violation grave de la sécurité.
