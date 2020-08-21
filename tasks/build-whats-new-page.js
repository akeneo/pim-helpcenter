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
    'productivity': { 'label': 'Productivity', 'color': 'info' },
    'quality': { 'label': 'Quality', 'color': 'success' },
    'governance': { 'label': 'Governance', 'color': 'warning' },
    'scalability': { 'label': 'Scalability', 'color': 'danger' },
    'connectivity': { 'label': 'Connectivity', 'color': 'akeneo' },
    'reporting': { 'label': 'Reporting', 'color': 'orange' }
};
const coloredFeatures = {
    'assets': { 'label': 'Assets', 'color': 'primary' },
    'referenceentities': { 'label': 'Reference entities', 'color': 'primary' },
    'rulesengine': { 'label': 'Rules engine', 'color': 'primary' }
};
const orderedVersions = {
    '17': { 'name': '1.7', 'isSupported': false },
    '20': { 'name': '2.0', 'isSupported': false },
    '21': { 'name': '2.1', 'isSupported': false },
    '22': { 'name': '2.2', 'isSupported': false },
    '23': { 'name': '2.3', 'isSupported': false },
    '30': { 'name': '3.0', 'isSupported': true },
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
        return concatUpdates.concat(JSON.parse(fs.readFileSync(fileDirectorySource + '/' + version.name + '-news.json')));
    }, []);

    const domainsAndFeatures = Object.assign({}, coloredDomains, coloredFeatures);

    _.each(updates, function(update){
        update.coloredDomains = _.keyBy(update.domains, function(domain){
            var coloredDomain = domainsAndFeatures[domain.replace(/\s/g, '').toLowerCase()];
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
            features: coloredFeatures,
            defaultDomainsAndFeatures: Object.keys(domainsAndFeatures),
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
