/**
 * Transform Markdown articles to HTML article
 */
const gulp = require('gulp');
const MarkdownIt = require('markdown-it');
const mdToc = require('markdown-it-toc-and-anchor').default;
const mdEmoji = require('markdown-it-emoji');
const flatmap = require('gulp-flatmap');
const insert = require('gulp-insert');
const tap    = require('gulp-tap');
const path = require('path');
const gulpMarkdownIt = require('gulp-markdown-it-adapter');
const highlightJs = require('highlightjs');
const hbs = require('handlebars');
const gulpHandlebars = require('gulp-handlebars-html')(hbs);
const fs = require('fs');
const frontMatter = require('gulp-front-matter');
const rename = require('gulp-rename');
const revReplace = require('gulp-rev-replace');
const HelpcenterMarkdownIt = require('./common/markdown-it.js');

var majorVersion = 'serenity';

function buildArticles() {
function buildArticles() {
    var md = new HelpcenterMarkdownIt();

    return gulp.src('content/md/**/*.md')
        .pipe(flatmap(function(stream, file){
            var id, themes, title, eeOnly, eeAndGeOnly, titleWithBold, relatedArticlesId, relatedArticles;
            // This first stream go through all Markdown articles and retrieve the information
            // from their header such as their id, title, themes and related articles
            // It also removes the header from the Markdown file, convert it into HTML and finally,
            // put the result into "tmp"
            var stream = gulp.src(file.path)
                .pipe(frontMatter({property: 'fm', remove: true}))
                .pipe(tap(function(file, t) {
                    id = file.fm['id'] == undefined ? '' : file.fm['id'];
                    themes = file.fm['themes'] == undefined ? '' : file.fm['themes'].split(',');
                    title = file.fm['title'] == undefined ? '' : file.fm['title'];
                    eeOnly = file.fm['ee'] == undefined ? false : file.fm['ee'];
                    eeAndGeOnly = file.fm['ge'] == undefined ? false : file.fm['ge'];
                    titleWithBold = title.replace(/\*\*/, '<strong>').replace(/\*\*/, '</strong>');
                    title = title.replace(/\*\*/, '').replace(/\*\*/, '');
                    relatedArticlesId = file.fm['related'] == undefined ? '' : file.fm['related'].split(',');
                }))
                .pipe(insert.wrap("::::: mainContent\n", "\n:::::"))
                .pipe(insert.prepend(getTocMarkdown(path.basename(file.path)) + "\n"))
                .pipe(gulpMarkdownIt(md))
                .pipe(gulp.dest('tmp/'));
            // When the previous stream is finished, we launch the second stream
            // that also go through all articles again, but this time to find the information regarding
            // the related articles of one given article
            return stream.on('end', function(){
                var stream2;
                var articleId;
                stream2 = gulp.src('content/md/**/*.md')
                        .pipe(frontMatter({property: 'fm',remove: true}))
                        .pipe(tap(function(file, t) {
                            articleId = file.fm['id'] == undefined ? '' : file.fm['id'];
                            if(relatedArticlesId){
                                relatedArticlesId.forEach(function(relatedArticleId){
                                    if(relatedArticleId.trim() === articleId){
                                        relatedArticleTitle = file.fm['title'] == undefined ? '' : file.fm['title'];
                                        var article = {
                                            articleName: relatedArticleTitle.replace(/\*\*/, '<strong>').replace(/\*\*/, '</strong>'),
                                            articlePath: articleId + '.html',
                                            eeOnly: file.fm['ee'] == undefined ? false : file.fm['ee'],
                                            eeAndGeOnly: file.fm['ge'] == undefined ? false : file.fm['ge']
                                        };
                                        if(relatedArticles){
                                            relatedArticles.push(article);
                                        }else{
                                            relatedArticles = [article];
                                        }
                                    }
                                });
                            }
                        }))
                        .pipe(gulp.dest('tmp/'));
                // Once the second stream is finished, we inject the resulting HMTL file (previously stored in "tmp"),
                // into the handlebars template of articles
                // The result is then saved into "dist"
                return stream2.on('end', function(){
                    var fileName = path.basename(file.path).replace(/\.md/, '.html');
                    return gulp.src('src/article.handlebars')
                        .pipe(gulpHandlebars({
                            title: title,
                            titleWithBold: titleWithBold,
                            eeOnly: eeOnly,
                            eeAndGeOnly: eeAndGeOnly,
                            relatedArticles: relatedArticles,
                            mainContent: fs.readFileSync('tmp/' + fileName),
                            filePath: 'articles/' + id + '.html',
                            majorVersion: majorVersion
                        }, {
                        partialsDirectory: ['./src/partials']
                    }))
                    .pipe(rename(id + '.html'))
                    .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                    .pipe(gulp.dest('./dist/pim/'+ majorVersion + '/articles'));
                });
            });
        }));
}

function getTocMarkdown(currentPage) {
    return "\n\n:::: toc\n@[toc]\n\n::::\n\n";
}

// Define placeholder tasks if they don't exist
gulp.task('clean-dist', function(done) {
    console.log('clean-dist task is not defined. Create this task or remove it from the series.');
    done();
});

gulp.task('less', function(done) {
    console.log('less task is not defined. Create this task or remove it from the series.');
    done();
});

gulp.task('build-themes', function(done) {
    console.log('build-themes task is not defined. Create this task or remove it from the series.');
    done();
});

// Define the 'build-articles' task
gulp.task('build-articles', gulp.series('clean-dist', 'less', 'build-themes', buildArticles));

// Export the buildArticles function
module.exports = {
    buildArticles: buildArticles
};
