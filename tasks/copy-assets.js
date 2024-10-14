/**
 * Copy html, css, js and image files into dist directory
 */
var gulp = require('gulp');
var rename = require('gulp-rename');
var merge = require('merge-stream');

var majorVersion = 'serenity';

function copyAssets() {
    const lib = gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        //'node_modules/handlebars/handlebars.min.js',
        'node_modules/handlebars/dist/handlebars.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/docsearch.js/dist/cdn/docsearch.min.js',
        'node_modules/lodash/lodash.min.js',
        'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
        'src/js/versions.js'])
    .pipe(gulp.dest('dist/pim/' + majorVersion + '/js/'));

    const versions = gulp.src(['src/versions.json']).pipe(gulp.dest('dist/pim/'));

    const css = gulp.src(['node_modules/docsearch.js/dist/cdn/docsearch.min.css'])
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/css/'));

    const fonts = gulp.src(['node_modules/typeface-comfortaa/files/*',
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
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/fonts/'));

    const img = gulp.src('content/img/**/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/img/'));

    const articleImg = gulp.src('content/md/*/img/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/img/'));
    const updatesImg = gulp.src('content/updates/img/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/img/'));
    const updateArticlesImg = gulp.src('content/updates/*/img/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/img/'));
    const whatsNextsImg = gulp.src('content/whats-next/img/*')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('dist/pim/' + majorVersion + '/img/'));

    return merge(lib, css, fonts, img, articleImg, updatesImg, updateArticlesImg, whatsNextsImg, versions)
        .on('error', function(err) {
            console.error('Error in copy assets task:', err);
            this.emit('end');
        });
};

// Define placeholder tasks if they don't exist
gulp.task('clean-dist', function(done) {
    console.log('clean-dist task is not defined. Create this task or remove it from the series.');
    done();
});

gulp.task('copy-assets', gulp.series('clean-dist', copyAssets));

// Export the buildArticles function
module.exports = {
    copyAssets: copyAssets
};
