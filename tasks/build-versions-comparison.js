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
const features = [
    'Asset',
    'Reference entities',
    'Rules engine'
];
const domainColors = {
    'Productivity': 'info',
    'Quality': 'success',
    'Governance': 'warning',
    'Scalability': 'danger',
    'Connectivity': 'akeneo',
    'Reporting': 'orange',
};
const orderedVersions = [
    {'name': '1.7', 'isSupported': false },
    {'name': '2.0', 'isSupported': false },
    {'name': '2.1', 'isSupported': false },
    {'name': '2.2', 'isSupported': false },
    {'name': '2.3', 'isSupported': false },
    {'name': '3.0', 'isSupported': true },
    {'name': '3.1', 'isSupported': false },
    {'name': '3.2', 'isSupported': true },
    {'name': '4.0', 'isSupported': true },
    {'name': 'Serenity', 'isSupported': true }
];

module.exports = {generateIndex};

gulp.task('build-versions-comparison-page', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/versions-comparison';
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

    const coloredDomains = {};
    _.each(domainColors,function(color,domain){
        coloredDomains[domain.replace(/\s/g, '').toLowerCase()] = {'color': color, 'label': domain};
    });
    const coloredFeatures = {};
    _.each(features, function(feature){
        coloredFeatures[feature.replace(/\s/g, '').toLowerCase()] = {'color': 'primary', 'label': feature};
    });
    const domainsAndFeatures = Object.assign({}, coloredDomains, coloredFeatures);

    _.each(updates, function(update){
        update.coloredDomains = _.keyBy(update.domains, function(domain){
            return domainsAndFeatures[domain.replace(/\s/g, '').toLowerCase()].color || 'default';
        });
        update.domainCodes = _.map(update.domains, function(domain){
            return domain.replace(/\s/g, '').toLowerCase();
        }); 
        update.version = update['since-version'].split('.').join('').toLowerCase();
        update.isSerenityOnly = update['since-version'] === 'Serenity';
    });

    return gulp.src('src/versions-comparison.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s new in Serenity',
            updates: updates,
            domains: coloredDomains,
            features: coloredFeatures,
            domainsAndFeatures: domainsAndFeatures,
            versions: versions,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('versions-comparison.html'))
        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
        .pipe(gulp.dest(fileDirectoryDestination));
};
