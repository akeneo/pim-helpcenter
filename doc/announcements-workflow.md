# Announcements workflow

An announcement is a marketing message delivered into the PIM through the communication panel. It can be: 
- either the announcement of a new feature. In that case we call it an "update".
- or any product marketing message (not implemented yet)

For now, only "updates" are pushed into the PIM, for CE and EE.

## Where are written the content of the updates?

The updates are written in this repository, in `content/updates` directory. There are multiple directories, corresponding to the month of the release of the feature.

The syntax to write the content is the markdown.

## Where are deployed the content of the updates?

The updates are deployed:

- on the helpcenter website. There is a dedicated page describing all the new features released the previous month. For example, `https://help.akeneo.com/pim/serenity/updates/2020-06.html`.
- into the PIM, in the communication panel. The content of each announcement is the first paragraph to describe the feature.

## When are deployed the content of the updates?

The updates are deployed the 5th of each month, in the PIM and on the help center website. For example, the new features of February 2020 are released on the 5th of March 2020.

The content of the directory `content/updates/2020-02` that is on `master` branch is not deployed in production before March 5th 2020.

In staging, all announcements are deployed. The content of the directory `content/updates/2020-02` that is on `master` branch is deployed in staging, even if it's not yet March 5th 2020. It allows the Product Managers and the Product Marketing Managers to check the display of the new announcements before releasing it in production. 

## How the updates are deployed?

### On the help center

It generates the HTML content from the markdown. The content of the current month or future month is not generated if the environment variable `ONLY_PREVIOUS_MONTH_UPDATES` equals `true`. Otherwise, it generates all updates.

It deploys the help center website on each PR merged on master.
Also, in order to deploy automatically the 5th of the month the released features, there is a daily deployment of the help center website.

### On Firebase

#### Push of the updates into firestore 

It generates the JSON content from the markdown. The content of the current month or future month is not generated if the environment variable `ONLY_PREVIOUS_MONTH_UPDATES` equals `true`. Otherwise, it generates all updates.

It pushes the JSON announcements on each PR merged on master, into Firestore storage.
Also, in order to deploy automatically the 5th of the month the released features, it pushes the announcements into Firestore.

To push the announcements, it uses an environment variable containing the credentials: `GOOGLE_APPLICATION_CREDENTIALS`. The credentials are directly created in Firebase project settings -> Service Accounts -> Generate new private key.

Also, it uses a `FIREBASE_PROJECT` environment variable which is the name of the Firebase project.


#### Deployment of the serverless functions

The PIM requests an external API to get the announcements. This external API is hosted on Firebase. The content is actually provided by serverless functions.

It deploys the functions at each merged into master. To deploy a firebase project, it's mandatory to create a firebase token first. You can do it in local by running `firebase login:ci` (you need to install firebase in local first, see documentation).

This token is passed thanks to the environment variable `FIREBASE_TOKEN`. The environment variable `FIREBASE_PROJECT` is also needed.
