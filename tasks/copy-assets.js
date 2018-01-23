/**
 * Copy html, css, js and image files into dist directory
 */
var gulp = require('gulp');
var rename = require('gulp-rename');
var merge = require('merge-stream');

gulp.task('copy-assets', ['clean-dist'], function(){
    var lib = gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/handlebars/handlebars.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/docsearch.js/dist/cdn/docsearch.min.js'])
        .pipe(gulp.dest('dist/js/'));
    var css = gulp.src(['node_modules/docsearch.js/dist/cdn/docsearch.min.css'])
        .pipe(gulp.dest('dist/css/'));
    var fonts = gulp.src(['node_modules/typeface-comfortaa/files/*',
              'node_modules/lato-font/fonts/lato-light/*',
              'node_modules/lato-font/fonts/lato-light-italic/*',
              'node_modules/lato-font/fonts/lato-normal/*',
              'node_modules/lato-font/fonts/lato-normal-italic/*',
              'node_modules/lato-font/fonts/lato-medium/*',
              'node_modules/lato-font/fonts/lato-medium-italic/*',
              'node_modules/lato-font/fonts/lato-semibold/*',
              'node_modules/lato-font/fonts/lato-semibold-italic/*',
              'node_modules/lato-font/fonts/lato-bold/*',
              'node_modules/lato-font/fonts/lato-bold-italic/*'])
        .pipe(gulp.dest('dist/fonts/'));
    var img = gulp.src('content/img/**/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/img/'));
    var img = gulp.src('content/pdf-user-guides/**/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/pdf-user-guides/'));
    var articleImg = gulp.src('content/md/*/img/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/img/'));

    return merge(lib, css, fonts, img, articleImg);
});
