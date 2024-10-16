var gulp = require('gulp');
var webserver = require('gulp-webserver');
var del = require('del');

var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

// Clean dist directory
function cleanDist() {
  return del(['dist/*', 'tmp/*']);
}

// Watch if markdown, less, html or image files have changed
// so as to relaunch the build into dist directory
// Should be used for dev purpose
function watch() {
  gulp.watch('content/md/**/*.md', ['create-dist']);
  gulp.watch('content/*.json', ['create-dist']);
  gulp.watch('styles/*.less', ['create-dist']);
  gulp.watch('src/**/*.handlebars', ['create-dist']);
  gulp.watch('content/img/*', ['create-dist']);
  gulp.watch('content/updates/*', ['create-dist']);
  gulp.watch('content/updates/**/*.md', ['create-dist']);
  gulp.watch('content/whats-new/*.json', ['create-dist']);
  gulp.watch('content/whats-next/*.json', ['create-dist']);
  gulp.watch('content/versions-in-detail/*.json', ['create-dist']);
};
//gulp.task('watch', ['create-dist'], function() {});

// Launch a server with dist directory exposed on it
// Should be used for dev purpose
function launchWebserver() {
  return gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: '/pim/serenity/',
      host: '0.0.0.0',
    }));
};

//gulp.task('launch-webserver', ['create-dist'], function() {});

// Build the documentation is dist directory
const createDist = gulp.series(
  cleanDist,
  gulp.parallel(
    'less',
    'copy-assets',
    'landings',
    'build-articles',
    'build-monthly-updates-as-html',
    'build-monthly-updates-as-json',
    'build-whats-new-page',
    'build-whats-next-page',
    'build-versions-in-detail-page'
  )
);

//Define tasks
gulp.task('clean-dist', cleanDist);
gulp.task('watch', gulp.series(createDist, watch));
gulp.task('launch-webserver', gulp.series(createDist, launchWebserver));
gulp.task('create-dist', createDist);
gulp.task('serve', gulp.parallel('launch-webserver', 'watch'));

module.exports = {
  cleanDist,
  watch,
  launchWebserver,
  createDist
};