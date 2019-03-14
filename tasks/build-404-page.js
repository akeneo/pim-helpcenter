/**
 * Compile the 404 page with Handlebars
 */
var gulp = require('gulp');
var hbs = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(hbs);
var jsonTransform = require('gulp-json-transform');
var rename = require('gulp-rename');
var flatmap = require('gulp-flatmap');
var path = require('path');
var revReplace = require('gulp-rev-replace');
var tap = require('gulp-tap');
var frontMatter = require('gulp-front-matter');
var readYaml = require('read-yaml');
var _ = require('lodash');


var majorVersion = 'v3';

var messages;
gulp.task('grab-404-messages', function(){
    return gulp.src('content/messages/*.yaml')
            .pipe(tap(function(file, t) {
                if(!messages){
                    messages = [];   
                }
                var language = /messages-(.*)\.yaml/g.exec(path.basename(file.path))[1];
                messages.push(_.extend(readYaml.sync(file.path),{language: language}));
            }));
});

// This task builds the 404 page
gulp.task('build-404-page', ['clean-dist','less', 'grab-404-messages'], function() {
    // We inject this data into the Handlebars template of the 404 page.
    // Finally, the resulting HTML is saved into "dist".
    messages.forEach(function(languageMessages){
        var language = languageMessages.language;
        var injectedStrings = Object.assign({
            majorVersion: majorVersion
        },languageMessages);
        Object.assign(injectedStrings, {selectedLanguage: language, filePath: '404.html'});
        return gulp.src('src/404.handlebars')
                .pipe(flatmap(function(stream, file){
                    return gulp.src(file.path)
                        .pipe(gulpHandlebars(injectedStrings, {
                            partialsDirectory: ['./src/partials']
                        }))
                        .pipe(rename(path.basename(file.path).replace(/\.handlebars$/, '.html')))
                        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                        .pipe(gulp.dest('./dist/pim/' + majorVersion + '/' + language + '/'));
                }));
    });
});


