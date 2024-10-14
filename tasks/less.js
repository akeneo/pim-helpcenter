/**
 * Transform less into css file that is put into dist directory
 */
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var rev = require('gulp-rev');

var majorVersion = 'serenity';

function lessFunction() {
    return gulp.src('./styles/variables.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(rev())
        .pipe(gulp.dest('./dist/pim/' + majorVersion + '/css'))
        .pipe(rev.manifest())
        .pipe( gulp.dest('./tmp/rev'));
};

// Define placeholder tasks if they don't exist
gulp.task('clean-dist', function(done) {
    console.log('clean-dist task is not defined. Create this task or remove it from the series.');
    done();
});

gulp.task('less', gulp.series('clean-dist', lessFunction));

module.exports = {
    lessFunction: lessFunction
};
