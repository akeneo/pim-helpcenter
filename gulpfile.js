var gulp = require('gulp');
var webserver = require('gulp-webserver');
var del = require('del');

var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

// Clean dist directory
gulp.task('clean-dist', function () {
  return del(['dist/*', 'tmp/*']);
});

// Watch if markdown, less, html or image files have changed
// so as to relaunch the build into dist directory
// Should be used for dev purpose
gulp.task('watch', ['create-dist'], function() {
  gulp.watch('content/md/**/*.md', ['create-dist']);
  gulp.watch('content/*.json', ['create-dist']);
  gulp.watch('styles/*.less', ['create-dist']);
  gulp.watch('src/**/*.handlebars', ['create-dist']);
  gulp.watch('content/img/*', ['create-dist']);
});

// Launch a server with dist directory exposed on it
// Should be used for dev purpose
gulp.task('launch-webserver', ['create-dist'], function() {
  return gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: '/pim/serenity/',
      host: '0.0.0.0',
    }));
});

// Build the documentation is dist directory
gulp.task('create-dist', [
  'clean-dist',
  'less',
  'copy-assets',
  'landings',
  'build-articles'
]);

// Main task that should be used for development purpose
gulp.task('serve', [
  'launch-webserver',
  'watch'
]);
