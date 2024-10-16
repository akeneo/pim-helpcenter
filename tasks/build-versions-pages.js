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
const moment = require ('moment');
const coloredAreas = require('./common/colored-areas.js');
const merge = require('merge-stream');

const majorVersion = 'serenity';

module.exports = {generateVersionsInDetailPage};

function buildVersionsPages() {
    const fileDirectoryDestination = './dist/pim/serenity';

    return merge(
        generateVersionsInDetailPage(fileDirectoryDestination),
        generateVersionsSupportedTable(fileDirectoryDestination)
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

gulp.task('build-versions-in-detail-page',  gulp.series('clean-dist', 'less', buildVersionsPages));

function revReplaceIfManifestExists() {
    const manifestPath = "./tmp/rev/rev-manifest.json";
    
    if (fs.existsSync(manifestPath)) {
        return revReplace({manifest: gulp.src(manifestPath, {allowEmpty: true})});
    } else {
        console.warn("Warning: rev-manifest.json not found. Skipping asset revisioning.");
        return gulp.src('.', {allowEmpty: true}); 
    }
}

function generateVersionsInDetailPage(fileDirectoryDestination) {
    var versions = JSON.parse(fs.readFileSync('content/versions-in-detail/versions-in-detail.json'));

    _.each(versions, function(version){
        var releaseDate = moment.utc(version.releaseDate);
        var supportEndDate = moment.utc(version.supportEndDate);
        version.releaseDateShortLabel = releaseDate.format('ll');
        version.releaseDateLongLabel = releaseDate.format('LL');
        version.supportEndDateShortLabel = supportEndDate.format('ll');
        version.supportEndDateLongLabel = supportEndDate.format('LL');
        var timeLeftBeforeSupportEndInMonths = supportEndDate.diff(moment(), 'months');
        version.timeLeftBeforeSupportEnd = (timeLeftBeforeSupportEndInMonths > 1) ? timeLeftBeforeSupportEndInMonths + ' months' : supportEndDate.diff(moment(), 'days') + ' days';
        version.timeAfterSupportEnd = supportEndDate.fromNow();
        version.isSupported = supportEndDate.isSameOrAfter(moment(),'day');
    });

    var latestGAVersion = {
        code: versions[0].code,
        label: versions[0].label
    };

    var serenityLastNewUpdates = _.take(JSON.parse(fs.readFileSync('content/whats-new/Serenity-news.json')), 4);
    _.each(serenityLastNewUpdates, function(update){
        update.coloredAreas = _.keyBy(update.areas, function(area){
            var coloredArea = coloredAreas[area.replace(/\s/g, '').toLowerCase()];
            return coloredArea ? coloredArea.color : 'default';
        });
    });

    return gulp.src('src/versions-in-detail.handlebars')
        .pipe(gulpHandlebars({
            title: 'Discover our PIM versions',
            versions: versions,
            reversedVersions: versions.slice().reverse(),
            latestGAVersion: latestGAVersion,
            serenityLastNewUpdates: serenityLastNewUpdates,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('versions-in-detail.html'))
        .pipe(revReplaceIfManifestExists())
        .pipe(gulp.dest(fileDirectoryDestination));
};

function generateVersionsSupportedTable(fileDirectoryDestination) {
    var versions = JSON.parse(fs.readFileSync('content/versions-in-detail/versions-in-detail.json'));

    _.each(versions, function(version){
        var releaseDate = moment.utc(version.releaseDate);
        var supportEndDate = moment.utc(version.supportEndDate);
        version.releaseDateLongLabel = releaseDate.format('LL');
        version.supportEndDateLongLabel = supportEndDate.format('LL');
        version.isSupported = supportEndDate.isSameOrAfter(moment(),'day');
    });

    return gulp.src('src/supported-versions-table.handlebars')
        .pipe(gulpHandlebars({
            title: 'Support end date of our versions',
            versions: versions,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('supported-versions-table.html'))
        .pipe(revReplaceIfManifestExists())
        .pipe(gulp.dest(fileDirectoryDestination));
};
