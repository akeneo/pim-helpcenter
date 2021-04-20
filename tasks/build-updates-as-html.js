/**
 * Transform Markdown v3 updates into HTML v3 updates article
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
            var metaData = tokens[idx].info.trim().match(/^meta-data\seeOnly="(.*)"\ssince-version="(.*)"\slink-to-doc="(.*)"$/);
            if(!metaData){
                metaData = tokens[idx].info.trim().match(/^meta-data\seeOnly="(.*)"\ssince-version="(.*)"$/)
            }
            var html = '';
            if(tokens[idx].nesting === 1) {
                var eeOnly = metaData[1];
                var sinceVersion = metaData[2];
                if(eeOnly === "true"){
                    html += '<p><em class="small text-primary">In Enterprise Edition only since </em> <span class="label label-version">' + sinceVersion + '</span>';
                } else {
                    html += '<p><em class="small text-primary">In Enterprise & Community Editions since </em> <span class="label label-version">' + sinceVersion + '</span>';
                }
                var linkToDoc = metaData[3];
                if(linkToDoc) {
                    html += '<em>&nbsp;&nbsp;|&nbsp;&nbsp;</em><a href="' + linkToDoc + '" target="_blank">📖 Read the doc</a>';
                }
            } else {
                html = '</p>';
            }
            return html;
        }
    });

gulp.task('build-updates-as-html', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/updates';
    const fileDirectoryDestination = './dist/pim/v3/updates';
    
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
            title: 'What\'s new in 3.0, 3.1 and 3.2',
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
                        eeOnly: updates[folder].eeOnly,
                        featureType: updates[folder].featureType,
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
