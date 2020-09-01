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
const coloredDomains = require('./common/colored-domains.js');

const majorVersion = 'serenity';

module.exports = {generateDetailedVersionsPage};

gulp.task('build-versions-page', ['clean-dist','less'], function() {
    const fileDirectoryDestination = './dist/pim/serenity';

    return generateDetailedVersionsPage(fileDirectoryDestination);
});

function generateDetailedVersionsPage(fileDirectoryDestination) {
    var versions = JSON.parse(fs.readFileSync('content/versions/versions.json'));

    var latestVersion;
    _.each(versions, function(version){
        if(version.isLatest){
            latestVersion = {
                code: version.code,
                label: version.label
            };
        }
        var releaseDate = moment.utc(version.releaseDate);
        var supportEndDate = moment.utc(version.supportEndDate);
        version.releaseDateShortLabel = releaseDate.format('MMM YY');
        version.releaseDateLongLabel = releaseDate.format('LL');
        version.supportEndDateShortLabel = supportEndDate.format('MMM YY');
        version.supportEndDateLongLabel = supportEndDate.format('LL');
        var timeLeftBeforeSupportEndInMonths = supportEndDate.diff(moment(), 'months');
        version.timeLeftBeforeSupportEnd = (timeLeftBeforeSupportEndInMonths > 1) ? timeLeftBeforeSupportEndInMonths + ' months' : supportEndDate.diff(moment(), 'days') + ' days';
        version.timeAfterSupportEnd = supportEndDate.fromNow();
    });

    var serenityLastNewUpdates = _.take(JSON.parse(fs.readFileSync('content/whats-new/Serenity-news.json')),3);
    _.each(serenityLastNewUpdates, function(update){
        update.coloredDomains = _.keyBy(update.domains, function(domain){
            var coloredDomain = coloredDomains[domain.replace(/\s/g, '').toLowerCase()];
            return coloredDomain ? coloredDomain.color : 'default';
        });
    });

    return gulp.src('src/versions.handlebars')
        .pipe(gulpHandlebars({
            title: 'Discover our PIM versions',
            versions: versions,
            latestVersion: latestVersion,
            serenityLastNewUpdates: serenityLastNewUpdates,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('versions.html'))
        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
        .pipe(gulp.dest(fileDirectoryDestination));
};
