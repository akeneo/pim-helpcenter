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
const coloredAreas = require('./common/colored-areas.js');

const majorVersion = 'serenity';
const orderedVersions = {
    '17': { 'name': '1.7', 'isSupported': false },
    '20': { 'name': '2.0', 'isSupported': false },
    '21': { 'name': '2.1', 'isSupported': false },
    '22': { 'name': '2.2', 'isSupported': false },
    '23': { 'name': '2.3', 'isSupported': false },
    '30': { 'name': '3.0', 'isSupported': false },
    '31': { 'name': '3.1', 'isSupported': false },
    '32': { 'name': '3.2', 'isSupported': false },
    '40': { 'name': '4.0', 'isSupported': false },
    '50': { 'name': '5.0', 'isSupported': false },
    '60': { 'name': '6.0', 'isSupported': true },
    '70': { 'name': '7.0', 'isSupported': true },
    'serenity': { 'name': 'Serenity', 'isSupported': true }
};

function buildWhatsNewPage() {
    const fileDirectorySource = 'content/whats-new';
    const fileDirectoryDestination = './dist/pim/serenity';

    return generateWhatsNew(fileDirectorySource, fileDirectoryDestination);
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

gulp.task('build-whats-new-page', gulp.series('clean-dist', 'less', buildWhatsNewPage));

function revReplaceIfManifestExists() {
    const manifestPath = "./tmp/rev/rev-manifest.json";
    
    if (fs.existsSync(manifestPath)) {
        return revReplace({manifest: gulp.src(manifestPath, {allowEmpty: true})});
    } else {
        console.warn("Warning: rev-manifest.json not found. Skipping asset revisioning.");
        return gulp.src('.', {allowEmpty: true}); 
    }
}

function generateWhatsNew(fileDirectorySource, fileDirectoryDestination) {
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
        update.coloredAreas = _.keyBy(update.areas, function(area){
            var coloredArea = coloredAreas[area.replace(/\s/g, '').toLowerCase()];
            return coloredArea ? coloredArea.color : 'default';
        });
        update.areaCodes = _.map(update.areas, function(area){
            return area.replace(/\s/g, '').toLowerCase();
        });
        update.version = update['since-version'].split('.').join('').toLowerCase();
        update.isSerenityOnly = update['since-version'] === 'Serenity';
    });

    return gulp.src('src/whats-new.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s new since your version?',
            updates: updates,
            areas: coloredAreas,
            defaultAreas: Object.keys(coloredAreas),
            versions: orderedVersions,
            defaultVersions: Object.keys(orderedVersions),
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('whats-new.html'))
        .pipe(revReplaceIfManifestExists())
        .pipe(gulp.dest(fileDirectoryDestination));
};

module.exports = {generateWhatsNew};