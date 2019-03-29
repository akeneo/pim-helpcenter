# Akeneo PIM help center
This repository holds the sources for our PIM help center, made by hand with love.

**Install/preview the PIM help center**

First, you will need [Node](https://nodejs.org/en/) as well as [Gulp-cli](https://github.com/gulpjs/gulp-cli).

Then you can run the following commands in your terminal where these sources are:
```bash
sudo npm install --global n
sudo n 7.2.0
npm install
sudo npm install --global gulp-cli
```

To run the PIM help center locally, once Node and gulp-cli installed, run in your root folder after cloning/downloading the Helpcenter sources:

```bash
npm install

gulp serve
```

The PIM help center website is then available on `localhost:8000`.
Files located in the content and src directories are watched for changes, so when developing or writing new articles you do not need to launch any other task.

**Documentation contribution**

It's right [here](https://github.com/akeneo/pim-helpcenter/wiki).
