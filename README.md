# Akeneo PIM Help center
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

The help center website is then available on `http://localhost:8000/pim/v6/`.
Files located in the content and src directories are watched for changes, so when developing or writing new articles you do not need to launch any other task.

## Deployment of the v6 version

### Automatic

Master branch is the v6 version.

Once you merge a PR into the `v6` branch, it is automatically deployed on the production server. You have nothing to do.

### Manual

In case you want to re deploy the v6 documentation, [look at the latest merge in v6 in Circle CI](https://app.circleci.com/pipelines/github/akeneo/pim-helpcenter?branch=master) and click on _Deployment_.

Then click on _Rerun_.


## Documentation contribution

It's right [here](https://github.com/akeneo/pim-helpcenter/wiki).
