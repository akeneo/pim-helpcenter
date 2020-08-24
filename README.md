# Akeneo Help center
This repository holds the sources for our help center, made by hand with love.

**Install/preview the help center**

Install [Docker Engine](https://docs.docker.com/engine/installation/)

### Build with docker

```bash
make build
```

This is only building the documentation. The documentation is not available with this command, as it does not launch the HTTP server.

### Build and launch HTTP server with docker

```bash
make watch
```

The help center website is then available on `http://localhost:8000/pim/serenity/`.
Files located in the content and src directories are watched for changes, so when developing or writing new articles you do not need to launch any other task.

## Deployment of the Serenity version

### Automatic

Master branch is the Serenity version.

Once you merge a PR into the `Serenity` branch, it is automatically deployed on the production server. You have nothing to do.

### Manual

In case you want to re deploy the Serenity documentation, [look at the latest merge in master](https://app.circleci.com/pipelines/github/akeneo/pim-helpcenter?branch=master) and click on _Deployment_.

![List of merged PR in master](.circleci/list_workflows.jpg)

Then click on _Rerun_.

![Re run a deployment](.circleci/re_run.jpg)


## Dropdown to choose the documentation version

The dropdown to choose the version of the documentation  is configured from a single file for every branches. The configuration of this dropdown is done in this [file](https://github.com/akeneo/pim-helpcenter/blob/master/src/versions.json). **Only the configuration file `src/versions.json` of the `master` branch is deployed.**

When you create a new branch from master, such as `v5`, don't forget to remove the deployment of this configuration file in the `v5` version. It is just one line to remove in the `deploy` step of the `Makefile`.

## Create a branch for a new major version

When you want to create a new major branch from the `master` branch, you have some modifications to do. Actually, all these operations have already been done to create the branch v4 from the master branch in this PR: https://github.com/akeneo/pim-helpcenter/pull/479.  
You have to do the same to make it work correctly.  
Note that this PR makes some changes in the navigation menu to switch versions (in the following files: src/partials/navbar-with-search.handlebars and src/index.handlebars). We changed this navigation menu since so it's normal if the handlebars changed a bit. You'll still have to update the version name inside it.

In this PR, we forgot to update the solution name to reduce Algolia's search to the version the user is browsing. You'll find an example of the lines you'll need to change in the following PR: https://github.com/akeneo/pim-helpcenter/pull/563. For example, replace `pimSerenity` by `pimv5` if you are creating the v5 new major.


## Documentation contribution

It's right [here](https://github.com/akeneo/pim-helpcenter/wiki).
TEST
