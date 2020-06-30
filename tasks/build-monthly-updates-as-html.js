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

const majorVersion = 'serenity';

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

gulp.task('build-monthly-updates-as-html', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/updates';
    const fileDirectoryDestination = './dist/pim/serenity/updates';
    // by default, we generate all updates except if env variable ONLY_PREVIOUS_MONTH_UPDATES=true
    const generateAllUpdates = !(process.env.ONLY_PREVIOUS_MONTH_UPDATES && process.env.ONLY_PREVIOUS_MONTH_UPDATES === 'true');

    return merge(
        generateUpdates(fileDirectorySource, fileDirectoryDestination, generateAllUpdates),
        generateIndex(fileDirectorySource, fileDirectoryDestination, generateAllUpdates)
    );
});

function generateIndex(fileDirectorySource, fileDirectoryDestination, generateAllUpdates) {
    const data = fs.readFileSync(fileDirectorySource + '/index.json');

    const monthlyUpdates = _.pickBy(JSON.parse(data), (data, folder) => {
        return keepUpdatesFromPreviousMonths(folder, generateAllUpdates);
    });

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
        .pipe(gulp.dest(fileDirectoryDestination));
};

function generateUpdates(fileDirectorySource, fileDirectoryDestination, generateAllUpdates) {

    const rawData = fs.readFileSync(fileDirectorySource + '/index.json');
    const monthlyUpdates = JSON.parse(rawData);

    const folders = getFolders(fileDirectorySource).filter((folder) => {
        return keepUpdatesFromPreviousMonths(folder, generateAllUpdates);
    });

    const tasks = folders.map(function (folder) {
        return gulp.src(path.join(fileDirectorySource, folder, '/**/*.md'))
            .pipe(frontMatter({property: 'fm', remove: true}))
            .pipe(concat(folder + '-copy.html'))
            .pipe(insert.wrap("::::: mainContent\n", "\n:::::"))
            .pipe(insert.prepend(getTocMarkdown() + "\n"))
            .pipe(gulpMarkdownIt(md))
            .pipe(tap((file) => {
                return gulp.src('src/monthly-updates.handlebars')
                    .pipe(gulpHandlebars({
                        title: monthlyUpdates[folder].title,
                        description: monthlyUpdates[folder].description,
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

/**
 *
 * @param array update array of string ["2020-06", "2020-07"]
 * @param generateAllUpdates boolean to generate all updates (staging) or not
 * @returns {boolean|*}
 */
function keepUpdatesFromPreviousMonths(update, generateAllUpdates) {
    const currentDate = new Date(Date.now());
    const dayOfMonth = currentDate.getDate();
    const previousMonthDate = dayOfMonth < 5 ? new Date(currentDate.setMonth(currentDate.getMonth() - 2)) : new Date(currentDate.setMonth(currentDate.getMonth() - 1));

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(previousMonthDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(previousMonthDate);
    const maxDate = year + '-' + month;

    return update <= maxDate || generateAllUpdates;
}
