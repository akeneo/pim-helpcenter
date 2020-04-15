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

The help center website is then available on `http://localhost:8000/pim/v2/`.
Files located in the content and src directories are watched for changes, so when developing or writing new articles you do not need to launch any other task.

## Deployment of the documentation for the PIM 2.x

### Automatic

The `v2` branch is the documentation of the PIM 2.x.

Once you merge a PR into the `v2` branch, it is automatically deployed on the production server, hence updating the documentation for the PIM 2.x. You have nothing to do.

### Manual

In case you want to re deploy the documentation of the v2, [look at the latest merge in the `v2` branch](https://app.circleci.com/pipelines/github/akeneo/pim-helpcenter?branch=v2) and click on _Deployment_.

![List of merged PR in master](.circleci/list_workflows.jpg)

Then click on _Rerun_.

![Re run a deployment](.circleci/re_run.jpg)

## Documentation contribution

It's right [here](https://github.com/akeneo/pim-helpcenter/wiki).
