/**
 * Compile the homepages and the themes pages with Handlebars
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

// This task goes through every Markdown articles looking for "popular" articles
// in order to find information such as their title and path.
var popularArticles;
gulp.task('grab-related-articles', function(){
    popularArticles = {};
    return gulp.src('content/md/**/*.md')
                .pipe(frontMatter({property: 'fm',remove: true}))
                .pipe(tap(function(file, t) {
                    var id = file.fm['id'] == undefined ? '' : file.fm['id'];
                    if(id && file.fm['popular']){
                        var title = file.fm['title'] == undefined ? '' : file.fm['title'];
                        var titleWithBold = title.replace(/\*\*/, '<strong>').replace(/\*\*/, '</strong>');
                        var language = /.*_(.*)\.md/g.exec(path.basename(file.path)) ? /.*_(.*)\.md/g.exec(path.basename(file.path))[1] : 'en';
                        var article = {articleName: titleWithBold, articlePath: id + '.html'};
                        if(popularArticles[language]){
                            popularArticles[language].push(article);
                        } else {
                            popularArticles[language] = [article];
                        }
                    }
                }));
});

var messages;
gulp.task('grab-messages', function(){
    return gulp.src('content/messages/*.yaml')
            .pipe(tap(function(file, t) {
                if(!messages){
                    messages = [];   
                }
                var language = /messages-(.*)\.yaml/g.exec(path.basename(file.path))[1];
                messages.push(_.extend(readYaml.sync(file.path),{language: language}));
            }));
});

// This task builds the homepages
gulp.task('build-indexes', ['clean-dist','less', 'grab-messages', 'grab-related-articles'], function() {
    // When all information about the popular articles are gathered,
    // we inject this data into the Handlebars template of the pim index.
    // Finally, the resulting HTML is saved into "dist".
    messages.forEach(function(languageMessages){
        var language = languageMessages.language;
        var injectedStrings = Object.assign({},languageMessages);
        Object.assign(injectedStrings, {
                        popularArticles: popularArticles[language],
                        selectedLanguage: language,
                        isNotEnglish: language !== 'en',
                        majorVersion: majorVersion
                    });
        return gulp.src('src/index.handlebars')
                .pipe(flatmap(function(stream, file){
                    return gulp.src(file.path)
                        .pipe(gulpHandlebars(injectedStrings, {
                            partialsDirectory: ['./src/partials']
                        }))
                        .pipe(rename(path.basename(file.path).replace(/\.handlebars$/, '.html')))
                        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                        .pipe(gulp.dest('./dist/pim/' + majorVersion + '/' + language ));
                }));
    });
});

gulp.task('build-themes-pages', ['clean-dist','less', 'grab-messages'], function () {
    // For each Json file containing the Persona themes
    return gulp.src('content/*.json')
        .pipe(jsonTransform(function(data, file) {
            var personaThemes = data.themes;

            // Small transformations to allow page translations and translates articles
            data.title = '{{' + data.title + '}}';
            data.description = '{{' + data.description + '}}';
            var availableLanguages = ['en', 'fr', 'de'];
            for (themeId in personaThemes){
                personaThemes[themeId].title = '{{' + personaThemes[themeId].title + '}}';
                personaThemes[themeId].description = '{{' + personaThemes[themeId].description + '}}';
                personaThemes[themeId].articles = {};
                availableLanguages.forEach(function(availableLanguage){
                    personaThemes[themeId].articles[availableLanguage] = [];
                });
            }

            // This stream go through all Markdown articles to retrieve from their header
            // information such as their id, themes, title, language and if they concern only EE.
            // If the article is in one of the themes of the current persona (Julia or Peter),
            // we grab info about the article so as to display it in the end, on the page Themes.
            var stream = gulp.src('content/md/**/*.md')
                        .pipe(frontMatter({property: 'fm',remove: true}))
                        .pipe(tap(function(file, t) {
                            var id = file.fm['id'] == undefined ? '' : file.fm['id'];
                            var articleThemes = file.fm['themes'] == undefined ? '' : file.fm['themes'].split(',');
                            var title = file.fm['title'] == undefined ? '' : file.fm['title'];
                            var eeOnly = file.fm['ee-only'] == undefined ? '' : file.fm['ee-only'];
                            var language = /.*_(.*)\.md/g.exec(path.basename(file.path)) ? /.*_(.*)\.md/g.exec(path.basename(file.path))[1] : 'en';
                            // One article should have at list an id and be in one theme to be displayed on the Themes page
                            if(id && articleThemes){
                                articleThemes.forEach(function(articleTheme){
                                    var trimmedTheme = articleTheme.trim();
                                    if(personaThemes[trimmedTheme]){
                                        var titleWithBold = title.replace(/\*\*/, '<strong>').replace(/\*\*/, '</strong>');
                                        var article = {
                                            articleId: id,
                                            articleName: titleWithBold,
                                            articlePath: '/pim/' + majorVersion + '/' + language + '/articles/' + id + '.html',
                                            articleLanguage: language ,
                                            eeOnly: eeOnly
                                        };
                                        personaThemes[trimmedTheme].articles[article.articleLanguage].push(article);
                                    }
                                });
                            } else if (!id && articleThemes){
                                console.warn('/!\\ The article in the file "' + path.basename(file.path) + '" has no id. It won\'t be displayed in any of the Themes page.');
                            }
                        }))
                        .pipe(gulp.dest('tmp/'));


            // Once the stream is finished, we know for one given persona, all the information about the articles
            // that are in its themes. So we can inject this content into the handlebars template of the Themes page
            // to create the final Theme page in HTML
            // Finally, the resulting HTML page is saved into "dist" 
            return stream.on('end', function () {
                // Copies English articles into other language in case they don't have any translation yet
                for(theme in personaThemes){
                    if(personaThemes[theme].articles){
                        personaThemes[theme].articles.en.forEach(function(englishArticle){
                            for(language in personaThemes[theme].articles){
                                if(language !== 'en'){
                                    var isTranslated = _.find(personaThemes[theme].articles[language], function(article){
                                        return article.articleId === englishArticle.articleId;
                                    });
                                    if(!isTranslated){
                                        personaThemes[theme].articles[language].push(englishArticle);
                                    }
                                }
                            }
                        });
                    }
                }
                messages.forEach(function(languageMessages){
                    var filePath = path.basename(file.path).replace(/\.json$/, '.html');
                    var language = languageMessages.language;
                    var injectedStrings = Object.assign({},languageMessages);
                    Object.assign(injectedStrings, {
                            themes: personaThemes,
                            title: data.title,
                            description: data.description,
                            img: data.img,
                            selectedLanguage: language,
                            filePath: filePath,
                            majorVersion: majorVersion
                        });
                    return gulp.src('src/themes.handlebars')
                        .pipe(gulpHandlebars(injectedStrings, {
                            partialsDirectory: ['./src/partials']
                        }))
                        .pipe(gulpHandlebars(injectedStrings))
                        .pipe(rename(filePath))
                        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                        .pipe(gulp.dest('./dist/pim/' + majorVersion + '/' + language));
                });
            });
        }));
});


