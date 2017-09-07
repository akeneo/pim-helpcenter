/**
 * Copy html, css, js and image files into dist directory
 */
var gulp = require('gulp');
var merge = require('merge-stream');

gulp.task('copy-assets', ['clean-dist'], function(){
    var lib = gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/handlebars/handlebars.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest('dist/js/'));
    var fonts = gulp.src(['node_modules/typeface-comfortaa/files/*',
              'node_modules/lato-font/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts/'));
    var img = gulp.src('content/img/*')
        .pipe(gulp.dest('dist/img/'));

    return merge(lib, fonts, img);
});
