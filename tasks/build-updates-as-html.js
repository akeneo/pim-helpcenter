/**
 * Transform Markdown updates into HTML updates article
 */
const gulp = require('gulp');
const insert = require('gulp-insert');
const path = require('path');
const gulpMarkdownIt = require('gulp-markdown-it-adapter');
const hbs = require('handlebars');
const gulpHandlebars = require('gulp-handlebars-html')(hbs);
const frontMatter = require('gulp-front-matter');
const rename = require('gulp-rename');
const revReplace = require('gulp-rev-replace');
const concat = require('gulp-concat');
const tap = require('gulp-tap');
const HelpcenterMarkdownIt = require('./common/markdown-it.js');
const through = require('through2');

function sort(comparator) {
    const files = [];

    return through.obj(function (file, enc, cb) {
        files.push(file);
        cb();
    }, function (cb) {
        files.sort(comparator);
        files.forEach(function (file) {
            this.push(file);
        }, this);
        cb();
    });
}

const majorVersion = 'v7';

module.exports = {generateIndex};

var md = new HelpcenterMarkdownIt();
md
    .use(require('markdown-it-container'), 'meta-data', {
        validate: function(params) {
            return params.trim().match(/^meta-data(.*)$/);
        },
        render: function (tokens, idx) {
            var metaData = tokens[idx].info.trim().match(/^meta-data\stype="(?<type>.*)"\sfeatures="(?<features>.*)"\see-only="(?<eeOnly>.*)"\slink-to-doc="(?<linkToDoc>.*)"$/);
            if(!metaData){
                metaData = tokens[idx].info.trim().match(/^meta-data\stype="(?<type>.*)"\sfeatures="(?<features>.*)"\see-only="(?<eeOnly>.*)"$/)
            }
            var html = '';
            if(tokens[idx].nesting === 1) {
                html += '<p><em class="small text-primary">Type:</em> <span class="label label-version">' + metaData.groups.type + '</span>';
                html += '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;Feature:</em> <span class="label label-primary">' + metaData.groups.features + '</span>';
                html += '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;Available in</em> <span class="label label-primary">';
                if(metaData.groups.eeOnly == 'true'){
                    html += 'Enterprise Edition only</span>';
                } else {
                    html += 'Enterprise Edition</span> <span class="label label-info">Community Edition</span>';
                }
                var linkToDoc = metaData.groups.linkToDoc;
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

gulp.task('build-updates-as-html', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/updates';
    const fileDirectoryDestination = './dist/pim/v7/updates';

    return generateIndex(fileDirectorySource, fileDirectoryDestination);
});

function generateIndex(fileDirectorySource, fileDirectoryDestination) {
    return gulp.src(path.join(fileDirectorySource, '/*.md'))
        .pipe(sort((a, b) => a.path.localeCompare(b.path, undefined, {
            numeric: true,
            sensitivity: 'base'
        })))
        .pipe(frontMatter({property: 'fm', remove: true}))
        .pipe(concat( 'index-copy.html'))
        .pipe(insert.wrap("::::: mainContent\n", "\n:::::"))
        .pipe(insert.prepend(getTocMarkdown() + "\n"))
        .pipe(gulpMarkdownIt(md))
        .pipe(tap((file) => {
            return gulp.src('src/updates.handlebars')
                .pipe(gulpHandlebars({
                    mainContent: file.contents,
                    majorVersion: majorVersion
                }, {
                    partialsDirectory: ['./src/partials']
                }))
                .pipe(rename('index.html'))
                .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                .pipe(gulp.dest(fileDirectoryDestination))
        }));
}

function getTocMarkdown() {
    return "\n\n:::: toc\n@[toc]\n\n::::\n\n";
}
