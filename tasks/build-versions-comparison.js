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
const domainColors = {
    'Asset': 'primary',
    'Reference entities': 'primary',
    'Rules engine': 'primary',
    'Productivity': 'info',
    'Quality': 'success',
    'Governance': 'warning',
    'Scalability': 'danger',
    'Connectivity': 'akeneo',
    'Reporting': 'dark-akeneo',
}
const orderedVersions = ['1.7','2.0','2.1','2.2','2.3','3.0','3.1','3.2','4.0','Serenity'];

module.exports = {generateIndex};

gulp.task('build-versions-comparison-page', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/versions-comparison';
    const fileDirectoryDestination = './dist/pim/serenity';

    return generateIndex(fileDirectorySource, fileDirectoryDestination);
});

function generateIndex(fileDirectorySource, fileDirectoryDestination) {
    const updates = _.reduce(orderedVersions, function(concatUpdates, version){
        return concatUpdates.concat(JSON.parse(fs.readFileSync(fileDirectorySource + '/' + version + '-news.json')));
    }, []);

    const domains = {};
    _.each(domainColors,function(color,domain){
        domains[domain.replace(/\s/g, '').toLowerCase()] = {'color': color, 'label': domain};
    });
    const versions = {};
    _.each(orderedVersions, function(version){
        versions[version.split('.').join('').toLowerCase()] = version;
    });

    _.each(updates, function(update){
        update.coloredDomains = _.keyBy(update.domains, function(domain){
            return domainColors[domain] || 'default';
        });
        update.domainCodes = _.map(update.domains, function(domain){
            return domain.replace(/\s/g, '').toLowerCase();
        }); 
        update.version = update['since-version'].split('.').join('').toLowerCase();
    });

    return gulp.src('src/versions-comparison.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s new in Serenity',
            updates: updates,
            domains: domains,
            versions: versions,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('versions-comparison.html'))
        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
        .pipe(gulp.dest(fileDirectoryDestination));
};