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
            var metaData = tokens[idx].info.trim().match(/^meta-data\stype="(?<type>.*)"\sfeatures="(?<features>.*)"\savailable="(?<available>.*)"\sin="(?<in>.*)"\slink-to-doc="(?<linkToDoc>.*)"$/);
            if(!metaData){
                metaData = tokens[idx].info.trim().match(/^meta-data\stype="(?<type>.*)"\sfeatures="(?<features>.*)"\savailable="(?<available>.*)"\sin="(?<in>.*)"$/)
            }if(!metaData){
                metaData = tokens[idx].info.trim().match(/^meta-data\stype="(?<type>.*)"\sfeatures="(?<features>.*)"\savailable="(?<available>.*)"\slink-to-doc="(?<linkToDoc>.*)"$/)
            }if(!metaData){
                metaData = tokens[idx].info.trim().match(/^meta-data\stype="(?<type>.*)"\sfeatures="(?<features>.*)"\savailable="(?<available>.*)"$/)
            }
            var html = '';
            if(tokens[idx].nesting === 1) {
                html += '<p><em class="small text-primary">Type:</em> <span class="label label-version">' + metaData.groups.type + '</span>';
                var features = metaData.groups.features.split(',');
                html += _.reduce(features, function(res, feature) {
                    return res + ' <span class="label label-info">' + feature + '</span>';
                }, '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;Feature' + ((features.length > 1) ? 's:</em>' : ':</em>'));
                if(metaData.groups.in){
                    var editions = metaData.groups.in.split(',');
                    html += _.reduce(editions, function(res, edition) {
                        if(edition === 'EE'){
                            if(editions.length === 1) return res + ' Serenity EE only';
                            return res + ' Serenity EE and';
                        } else {
                            return res + ' GE'
                        }
                    }, '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;Available in');
                    html += ' since ' + metaData.groups.available + '</em>';
                } else {
                    html += '<em class="small text-primary">&nbsp;&nbsp;|&nbsp;&nbsp;Available in Serenity EE since ' + metaData.groups.available + '</em>';
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
    
function buildMonthlyUpdatesAsHTML() {
    const fileDirectorySource = 'content/updates';
    const fileDirectoryDestination = './dist/pim/serenity/updates';
    // by default, we generate all updates except if env variable ONLY_PREVIOUS_MONTH_UPDATES=true
    const generateAllUpdates = !(process.env.ONLY_PREVIOUS_MONTH_UPDATES && process.env.ONLY_PREVIOUS_MONTH_UPDATES === 'true');

    return merge(
        generateUpdates(fileDirectorySource, fileDirectoryDestination, generateAllUpdates),
        generateIndex(fileDirectorySource, fileDirectoryDestination, generateAllUpdates)
    );
};

// Define placeholder tasks if they don't exist
gulp.task('clean-dist', function(done) {
    console.log('clean-dist task is not defined. Create this task or remove it from the series.');
    done();
});

gulp.task('less', function(done) {
    console.log('less task is not defined. Create this task or remove it from the series.');
    done();
});


gulp.task('build-monthly-updates-as-html', gulp.series('clean-dist', 'less', buildMonthlyUpdatesAsHTML));

function generateIndex(fileDirectorySource, fileDirectoryDestination, generateAllUpdates) {
    const data = fs.readFileSync(fileDirectorySource + '/index.json');

    const monthlyUpdates = _.pickBy(JSON.parse(data), (update, folderName) => {
        return keepUpdatesFromPreviousMonths(folderName, generateAllUpdates);
    });

    // Classify all monthly updates by year
    var yearlyUpdates = [];
    _.each(monthlyUpdates, function(update, key) {
        var year = key.substring(0,4);
        var yearlyUpdate = _.find(yearlyUpdates, ['year', year]);
        if(!yearlyUpdate){
            yearlyUpdates.push({'year':year, 'monthlyUpdates': {}});
        }
        yearlyUpdate = _.find(yearlyUpdates, ['year', year]);
        yearlyUpdate.monthlyUpdates[key] = update;
    });

    return gulp.src('src/monthly-updates-index.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s new in Akeneo PIM',
            yearlyUpdates: yearlyUpdates,
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

    return merge(tasks)
        .on('error', function(err) {
            console.error('Error in generate updates task:', err);
            this.emit('end');
        });
};

function getFolders(dir) {
    return fs.readdirSync(dir).filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
};

function getTocMarkdown() {
    return "\n\n:::: toc\n@[toc]\n\n::::\n\n";
};

/**
 *
 * @param array update array of string ["2020-06", "2020-07"]
 * @param generateAllUpdates boolean to generate all updates (staging) or not
 * @returns {boolean|*}
 */
function keepUpdatesFromPreviousMonths(folderName, generateAllUpdates) {
    const currentDate = new Date(Date.now());
    const dayOfMonth = currentDate.getDate();
    const previousMonthDate = dayOfMonth < 5 ? new Date(currentDate.setMonth(currentDate.getMonth() - 2)) : new Date(currentDate.setDate(0));

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(previousMonthDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(previousMonthDate);
    const maxDate = year + '-' + month;

    return folderName <= maxDate || generateAllUpdates;
};
