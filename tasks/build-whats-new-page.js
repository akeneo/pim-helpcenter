/**
 * Build the versions comparison page
 */
const gulp = require('gulp');
const hbs = require('handlebars');
const gulpHandlebars = require('gulp-handlebars-html')(hbs);
const fs = require('fs');
const rename = require('gulp-rename');
const revReplace = require('gulp-rev-replace');
const _ = require('lodash');

const majorVersion = 'serenity';
const coloredDomains = {
    'governance': { 'label': 'Governance', 'color': 'warning' },
    'productivity': { 'label': 'Productivity', 'color': 'info' },
    'collaboration': { 'label': 'Collaboration', 'color': 'primary' },
    'connectivity': { 'label': 'Connectivity', 'color': 'akeneo' },
    'dataquality': { 'label': 'Data quality', 'color': 'success' },
    'automation': { 'label': 'Automation', 'color': 'pink' },
    'reporting': { 'label': 'Reporting', 'color': 'orange' },
    'scalability': { 'label': 'Scalability', 'color': 'danger' }
};
const orderedVersions = {
    '17': { 'name': '1.7', 'isSupported': false },
    '20': { 'name': '2.0', 'isSupported': false },
    '21': { 'name': '2.1', 'isSupported': false },
    '22': { 'name': '2.2', 'isSupported': false },
    '23': { 'name': '2.3', 'isSupported': false },
    '30': { 'name': '3.0', 'isSupported': false },
    '31': { 'name': '3.1', 'isSupported': false },
    '32': { 'name': '3.2', 'isSupported': true },
    '40': { 'name': '4.0', 'isSupported': true },
    'serenity': { 'name': 'Serenity', 'isSupported': true }
};

module.exports = {generateIndex};

gulp.task('build-whats-new-page', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/whats-new';
    const fileDirectoryDestination = './dist/pim/serenity';

    return generateIndex(fileDirectorySource, fileDirectoryDestination);
});

function generateIndex(fileDirectorySource, fileDirectoryDestination) {
    const versions = {};
    _.each(orderedVersions, function(version){
        versions[version.name.split('.').join('').toLowerCase()] = version;
    });
    const updates = _.reduce(_.reverse(orderedVersions), function(concatUpdates, version){
        var updatesByVersion = JSON.parse(fs.readFileSync(fileDirectorySource + '/' + version.name + '-news.json'));
        var order = 0; 
        _.eachRight(updatesByVersion, function(update){
            update.order = order;
            order ++;
        });
        return concatUpdates.concat(updatesByVersion);
    }, []);

    _.each(updates, function(update){
        update.coloredDomains = _.keyBy(update.domains, function(domain){
            var coloredDomain = coloredDomains[domain.replace(/\s/g, '').toLowerCase()];
            return coloredDomain ? coloredDomain.color : 'default';
        });
        update.domainCodes = _.map(update.domains, function(domain){
            return domain.replace(/\s/g, '').toLowerCase();
        }); 
        update.version = update['since-version'].split('.').join('').toLowerCase();
        update.isSerenityOnly = update['since-version'] === 'Serenity';
    });

    return gulp.src('src/whats-new.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s new since your version?',
            updates: updates,
            domains: coloredDomains,
            defaultDomains: Object.keys(coloredDomains),
            versions: orderedVersions,
            defaultVersions: Object.keys(orderedVersions),
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('whats-new.html'))
        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
        .pipe(gulp.dest(fileDirectoryDestination));
};
