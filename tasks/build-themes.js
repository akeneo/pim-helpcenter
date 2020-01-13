/**
 * Transform Json Themes to Themes pages
 */
var gulp = require('gulp');
var jsonTransform = require('gulp-json-transform');
var hbs = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(hbs);
var tap = require('gulp-tap');
var path = require('path');
var frontMatter = require('gulp-front-matter');
var rename = require('gulp-rename');
var revReplace = require('gulp-rev-replace');

var majorVersion = 'serenity';

gulp.task('build-themes', ['clean-dist','less'], function () {
    // For each Json file containing the Persona themes
    return gulp.src('content/*.json')
        .pipe(jsonTransform(function(data, file) {
            var personaThemes = data.themes;

            // This stream go through all Markdown articles to retrieve from their header
            // information such as their id, themes, title and if they concern only EE.
            // If the article is in one of the themes of the current persona (Julia or Peter),
            // we grab info about the article so as to display it in the end, on the page Themes.
            var stream = gulp.src('content/md/**/*.md')
                        .pipe(frontMatter({property: 'fm',remove: true}))
                        .pipe(tap(function(file, t) {
                            var id = file.fm['id'] == undefined ? '' : file.fm['id'];
                            var themes = file.fm['themes'] == undefined ? '' : file.fm['themes'].split(',');
                            var title = file.fm['title'] == undefined ? '' : file.fm['title'];
                            var eeOnly = file.fm['ee-only'] == undefined ? '' : file.fm['ee-only'];
                            // One article should have at list an id and be in one theme to be displayed on the Themes page
                            if(id && themes){
                                themes.forEach(function(theme){
                                    var trimmedTheme = theme.trim();
                                    if(personaThemes[trimmedTheme]){
                                        var titleWithBold = title.replace(/\*\*/, '<strong>').replace(/\*\*/, '</strong>');
                                        var article = {
                                            articleName: titleWithBold,
                                            articlePath: id + '.html',
                                            eeOnly: eeOnly
                                        };
                                        if(personaThemes[trimmedTheme].articles){
                                            personaThemes[trimmedTheme].articles.push(article);
                                        }else{
                                            personaThemes[trimmedTheme].articles = [article];
                                        }
                                    }
                                });
                            } else if (!id && themes){
                                console.warn('/!\\ The article in the file "' + path.basename(file.path) + '" has no id. It won\'t be displayed in any of the Themes page.');
                            }
                        }))
                        .pipe(gulp.dest('tmp/'));

            // Once the stream is finished, we know for one given persona, all the information about the articles
            // that are in its themes. So we can inject this content into the handlebars template of the Themes page
            // to create the final Theme page in HTML
            // Finally, the resulting HTML page is saved into "dist"
            return stream.on('end', function () {
                var filePath = path.basename(file.path).replace(/\.json$/, '.html');
                return gulp.src('src/themes.handlebars')
                    .pipe(gulpHandlebars({
                        themes: personaThemes,
                        title: data.title,
                        description: data.description,
                        img: data.img,
                        filePath: filePath,
                        majorVersion: majorVersion
                    }, {
                        partialsDirectory: ['./src/partials']
                    }))
                    .pipe(rename(filePath))
                    .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                    .pipe(gulp.dest('./dist/pim/' + majorVersion));
            });
        }));
});
