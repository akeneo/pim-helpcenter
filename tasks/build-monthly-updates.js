/**
 * Transform Markdown monthly updates into HTML monthly updates article
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
var concat = require('gulp-concat');
var jsonTransform = require('gulp-json-transform');
var _ = require('lodash');

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

gulp.task('build-monthly-updates', ['clean-dist','less'], function () {
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
        })
        .use(require('markdown-it-container'), 'meta-data', {
            validate: function(params) {
                return params.trim().match(/^meta-data(.*)$/);
            },
            render: function (tokens, idx) {
                var metaData = tokens[idx].info.trim().match(/^meta-data\stype="(.*)"\sfeatures="(.*)"\savailable="(.*)"\slink-to-doc="(.*)"$/);
                if(!metaData){
                    metaData = tokens[idx].info.trim().match(/^meta-data\stype="(.*)"\sfeatures="(.*)"\savailable="(.*)"$/)
                }
                var html = '';
                if(tokens[idx].nesting === 1) {
                    var type = metaData[1];
                    html += '<p><em class="small text-primary">Type:</em> <span class="label label-version">' + type + '</span>';
                    var features = metaData[2].split(',');
                    html += _.reduce(features, function(res, feature) {
                        return res + ' <span class="label label-info">' + feature + '</span>';
                    }, '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;Feature' + ((features.length > 1) ? 's:</em>' : ':</em>'));
                    var availability = metaData[3];
                    html += '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;In Serenity since ' + availability + '</em>';
                    var linkToDoc = metaData[4];
                    if(linkToDoc) {
                        html += '<em>&nbsp;&nbsp;|&nbsp;&nbsp;</em><a href="' + linkToDoc + '" target="_blank">📖 Read the doc</a>';
                    }
                } else {
                    html = '</p>';
                }
                return html;
            }
        })
        .use(require('markdown-it-container'), 'more', {
            validate: function(params) {
                return params.trim().match(/^more(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-info"><b>Not familiar with the context?</b><br><em>Here is a selection from our help center:</em>' : '</div>\n'
            }
        });

    var monthlyUpdates;
    var updateTitles = {};
    var updateIndex = 0;

    var indexCreationStream = gulp.src('content/updates/*.json')
                                .pipe(jsonTransform(function(data, file){
                                    monthlyUpdates = data;
                                    return gulp.src('src/monthly-updates-index.handlebars')
                                .pipe(gulpHandlebars({
                                        title: 'What\'s new in Serenity', 
                                        monthlyUpdates: monthlyUpdates,
                                        majorVersion: majorVersion
                                    }, {
                                    partialsDirectory: ['./src/partials']
                                }))
                                .pipe(rename('index.html'))
                                .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                                .pipe(gulp.dest('./dist/pim/serenity/updates'));
    }));

    return indexCreationStream.on('end', function(){                                      
        return gulp.src('content/updates/**/*.md')
            .pipe(flatmap(function(stream, file){
                var month = path.basename(path.dirname(file.path));
                var stream = gulp.src(file.path)
                    .pipe(gulp.dest('tmp/' + month));

                    return stream.on('end', function(){
                        var stream2 = gulp.src('tmp/' + month + '/*.md')
                                    .pipe(concat(month + '.md'))
                                    .pipe(insert.wrap("::::: mainContent\n", "\n:::::"))
                                    .pipe(insert.prepend(getTocMarkdown(month + '.md') + "\n"))
                                    .pipe(gulpMarkdownIt(md))
                                    .pipe(gulp.dest('tmp/'));

                        return stream2.on('end', function(){
                            return gulp.src('src/monthly-updates.handlebars')
                                .pipe(gulpHandlebars({
                                        title: monthlyUpdates[month].title,
                                        description: monthlyUpdates[month].description,
                                        updateTitles: updateTitles[month],
                                        mainContent: fs.readFileSync('tmp/' + month + '.html'),
                                        filePath: 'updates/' + month + '.html',
                                        majorVersion: majorVersion
                                    }, {
                                    partialsDirectory: ['./src/partials']
                                }))
                                .pipe(rename(month + '.html'))
                                .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                                .pipe(gulp.dest('./dist/pim/serenity/updates'));
                        }); 
                    });
                }));
    });
                

});
