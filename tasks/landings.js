/**
 * Compile the homepage with Handlebars
 */
var gulp = require('gulp');
var hbs = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(hbs);
var rename = require('gulp-rename');
var flatmap = require('gulp-flatmap');
var path = require('path');
var revReplace = require('gulp-rev-replace');
var tap = require('gulp-tap');
var frontMatter = require('gulp-front-matter');

var majorVersion = 'serenity';

// This task goes through every Markdown articles looking for "popular" articles
// in order to find information such as their title and path.
var popularArticles;
gulp.task('grab-related-articles', function(){
    popularArticles = [];
    return gulp.src('content/md/**/*.md')
                .pipe(frontMatter({property: 'fm',remove: true}))
                .pipe(tap(function(file, t) {
                    var id = file.fm['id'] == undefined ? '' : file.fm['id'];
                    if(id && file.fm['popular']){
                        var title = file.fm['title'] == undefined ? '' : file.fm['title'];
                        var titleWithBold = title.replace(/\*\*/, '<strong>').replace(/\*\*/, '</strong>');
                        var article = {articleName: titleWithBold, articlePath: id + '.html'};
                        popularArticles.push(article);
                    }
                }));
});

// This task builds the homepage
gulp.task('landings', ['clean-dist','less', 'grab-related-articles'], function() {
    // When all information about the popular articles are gathered,
    // we inject this data into the Handlebars template of the homepage.
    // Finally, the resulting HTML is saved into "dist".
    return gulp.src('src/index.handlebars')
            .pipe(flatmap(function(stream, file){
                return gulp.src(file.path)
                        .pipe(gulpHandlebars({
                            popularArticles: popularArticles,
                            majorVersion: majorVersion
                        }, {
                            partialsDirectory: ['./src/partials']
                        }))
                        .pipe(rename(path.basename(file.path).replace(/\.handlebars$/, '.html')))
                        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                        .pipe(gulp.dest('dist/pim/' + majorVersion));
                }));
});
