/**
 * Transform Markdown monthly updates into HTML monthly updates article
 */
const gulp = require('gulp');
const insert = require('gulp-insert');
const path = require('path');
const gulpMarkdownIt = require('gulp-markdown-it-adapter');
const highlightJs = require('highlightjs');
const hbs = require('handlebars');
const gulpHandlebars = require('gulp-handlebars-html')(hbs);
const fs = require('fs');
const frontMatter = require('gulp-front-matter');
const rename = require('gulp-rename');
const revReplace = require('gulp-rev-replace');
const concat = require('gulp-concat');
const _ = require('lodash');
const tap = require('gulp-tap');
const merge = require('merge-stream');
const HelpcenterMarkdownIt = require('./common/markdown-it.js');

const majorVersion = 'v3';

module.exports = {generateIndex, generateUpdates};

var md = new HelpcenterMarkdownIt();
md
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

gulp.task('build-updates-as-html', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/updates';
    const fileDirectoryDestination = './dist/pim/v4/updates';
    
    return merge(
        generateUpdates(fileDirectorySource, fileDirectoryDestination),
        generateIndex(fileDirectorySource, fileDirectoryDestination)
    );
});

function generateIndex(fileDirectorySource, fileDirectoryDestination) {
    const data = fs.readFileSync(fileDirectorySource + '/index.json');

    const updates = JSON.parse(data);

    return gulp.src('src/updates-index.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s new in v4',
            updates: updates,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('index.html'))
        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
        .pipe(gulp.dest(fileDirectoryDestination));
};

function generateUpdates(fileDirectorySource, fileDirectoryDestination) {

    const rawData = fs.readFileSync(fileDirectorySource + '/index.json');
    const updates = JSON.parse(rawData);

    const folders = getFolders(fileDirectorySource);

    const tasks = folders.map(function (folder) {
        return gulp.src(path.join(fileDirectorySource, folder, '/**/*.md'))
            .pipe(frontMatter({property: 'fm', remove: true}))
            .pipe(concat(folder + '-copy.html'))
            .pipe(insert.wrap("::::: mainContent\n", "\n:::::"))
            .pipe(insert.prepend(getTocMarkdown() + "\n"))
            .pipe(gulpMarkdownIt(md))
            .pipe(tap((file) => {
                return gulp.src('src/updates.handlebars')
                    .pipe(gulpHandlebars({
                        title: updates[folder].title,
                        description: updates[folder].description,
                        img: updates[folder].img,
                        mainContent: file.contents,
                        filePath: 'updates/' + folder + '.html',
                        majorVersion: majorVersion
                    }, {
                        partialsDirectory: ['./src/partials']
                    }))
                    .pipe(rename(folder + '.html'))
                    .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
                    .pipe(gulp.dest(fileDirectoryDestination))
            }));
    });

    return merge(tasks);
}

function getFolders(dir) {
    return fs.readdirSync(dir).filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

function getTocMarkdown() {
    return "\n\n:::: toc\n@[toc]\n\n::::\n\n";
}
