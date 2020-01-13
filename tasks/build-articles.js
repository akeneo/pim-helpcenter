/**
 * Transform Markdown articles to HTML article
 */
var gulp = require('gulp');
var MarkdownIt = require('markdown-it');
var mdToc = require('markdown-it-toc-and-anchor').default;
var mdEmoji = require('markdown-it-emoji');
var flatmap = require('gulp-flatmap');
var insert = require('gulp-insert');
var tap    = require('gulp-tap');
var path = require('path');
var gulpMarkdownIt = require('gulp-markdown-it-adapter');
var highlightJs = require('highlightjs');
var hbs = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(hbs);
var fs = require('fs');
var frontMatter = require('gulp-front-matter');
var rename = require('gulp-rename');
var revReplace = require('gulp-rev-replace');

var majorVersion = 'serenity';

function getTocMarkdown(currentPage) {
    return "\n\n:::: toc\n@[toc]\n\n::::\n\n";
}

/**
 * Highlight code snippet according to the language specified in the markdown.
 *
 * @param str
 * @param lang
 * @returns {string}
 */
function highlight(str, lang) {
    if (lang && highlightJs.getLanguage(lang)) {
        try {
            return '<pre class="hljs"><code>' +
                highlightJs.highlight(lang, str, true).value +
                '</code></pre>';
        } catch (__) {}
    }
    return '<pre class="hljs"><code>' + str + '</code></pre>';
}

gulp.task('build-articles', ['clean-dist','less', 'build-themes'], function () {
    var optionsMd = {
        html: true,
        xhtmlOut: true,
        typographer: false,
        linkify: false,
        breaks: false,
        highlight: highlight
    };

    var md = new MarkdownIt('default', optionsMd);

    function imageTokenOverride(tokens, idx, options, env, self) {
        return '<img class="img-responsive in-article" alt="'+ tokens[idx].content +'" src="'+ tokens[idx].attrs[0][1] + '"/>';
    }
    md.renderer.rules['image'] = imageTokenOverride;
    md.renderer.rules.table_open = function(tokens, idx) {
        return '<table class="table">';
    };
    md.renderer.rules.heading_open = function(tokens, idx) {
        return '<a class="anchor" id="' + tokens[idx].attrs[0][1] + '"></a>'+
            '<'+tokens[idx].tag+' title-id="' + tokens[idx].attrs[0][1] + '">';
    };


    md.use(mdEmoji);
    md.use(require('markdown-it-container'), 'danger', {
        validate: function(params) {
            return params.trim().match(/^danger(.*)$/);
        },
        render: function (tokens, idx) {
            return (tokens[idx].nesting === 1) ? '<div class="alert alert-danger">' : '</div>\n';
        }
    })
    .use(require('markdown-it-container'), 'warning', {
        validate: function(params) {
            return params.trim().match(/^warning(.*)$/);
        },
        render: function (tokens, idx) {
            return (tokens[idx].nesting === 1) ? '<div class="alert alert-warning">' : '</div>\n';
        }
    })
    .use(require('markdown-it-container'), 'info', {
        validate: function(params) {
            return params.trim().match(/^info(.*)$/);
        },
        render: function (tokens, idx) {
            return (tokens[idx].nesting === 1) ? '<div class="alert alert-info">' : '</div>\n';
        }
    })
    .use(require('markdown-it-container'), 'success', {
        validate: function(params) {
            return params.trim().match(/^success(.*)$/);
        },
        render: function (tokens, idx) {
            return (tokens[idx].nesting === 1) ? '<div class="alert alert-success">' : '</div>\n';
        }
    })
    .use(require('markdown-it-container'), 'tips', {
        validate: function(params) {
           return params.trim().match(/^tips(.*)$/);
        },
        render: function (tokens, idx) {
            return (tokens[idx].nesting === 1) ? '<div class="alert alert-tips">' : '</div>\n';
        }
    })
    .use(require('markdown-it-container'), 'ee', {
        validate: function(params) {
            return params.trim().match(/^ee(.*)$/);
        },
        render: function (tokens, idx) {
            return (tokens[idx].nesting === 1) ? '<div class="alert alert-ee">' : '</div>\n';
        }
    });

    var optionsToc = {
        toc: true,
        tocFirstLevel: 1,
        tocLastLevel: 2,
        anchorLink: true,
        anchorLinkSpace: false,
        anchorLinkBefore: true,
        tocClassName: 'nav'
    };

    md.use(mdToc, optionsToc)
        .use(require('markdown-it-container'), 'toc', {
            validate: function(params) {
                return params.trim().match(/^toc$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div id="navbar" class="col-sm-3 hidden-xs sticky">' +
                    '<nav role="tablist" id="navbar-nav"><ul class="nav nav-stacked"><p class="pre-nav">Summary</p>' :
                    '</ul></nav></div>\n';
            }
        })
        .use(require('markdown-it-container'), 'mainContent', {
            validate: function(params) {
                return params.trim().match(/^mainContent$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="col-xs-12 col-sm-9 docSearch-content">' : '</div>';
            }
        })
        .use(require('markdown-it-container'), 'panel-link', {
            validate: function(params) {
                return params.trim().match(/^panel-link\s+(.*)$/);
            },
            render: function (tokens, idx) {
                var text = tokens[idx].info.trim().match(/^panel-link\s+(.*)\[.*\].*$/);
                var linkTitle = tokens[idx].info.trim().match(/^panel-link\s+.*\[(.*)\].*$/);
                var link = tokens[idx].info.trim().match(/^panel-link\s+.*\((.*)\)$/);
                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return '<div class="row" style="margin-top: 80px;"><div class="col-sm-offset-3 col-sm-6">' +
                        '<div class="panel panel-default panel-btn">'+
                        '<a href="' + md.utils.escapeHtml(link[1]) + '">' +
                        '<div class="panel-body">' +
                        '<div class="panel-btn-big">'+ md.render(text[1]) + '</div>'+
                        '<p class="text-center">'+ md.render(linkTitle[1]) + '</p>';
                } else {
                    // closing tag
                    return '</div></a></div></div></div>\n';
                }
            }
        });


    return gulp.src('content/md/**/*.md')
        .pipe(flatmap(function(stream, file){
            var id, themes, title, eeOnly, titleWithBold, relatedArticlesId, relatedArticles;
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
                    eeOnly = file.fm['ee-only'] == undefined ? '' : file.fm['ee-only'];
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
                                            eeOnly: file.fm['ee-only'] == undefined ? '' : file.fm['ee-only']
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
);
