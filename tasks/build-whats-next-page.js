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

const majorVersion = 'v7';

module.exports = {generateWhatsNext};

gulp.task('build-whats-next-page', ['clean-dist','less'], function() {
    const fileDirectorySource = 'content/whats-next';
    const fileDirectoryDestination = './dist/pim/v7';

    return generateWhatsNext(fileDirectorySource, fileDirectoryDestination);
});

function generateWhatsNext(fileDirectorySource, fileDirectoryDestination) {
    const whatsNextMidTerm = JSON.parse(fs.readFileSync(fileDirectorySource + '/whats-next-mid-term.json'));
    const whatsNextShortTerm = JSON.parse(fs.readFileSync(fileDirectorySource + '/whats-next-short-term.json'));

    _.each(whatsNextMidTerm, function(update){
        update.coloredAreas = _.keyBy(update.areas, function(area){
            var coloredArea = coloredAreas[area.replace(/\s/g, '').toLowerCase()];
            return coloredArea ? coloredArea.color : 'default';
        });
        update.areaCodes = _.map(update.areas, function(area){
            return area.replace(/\s/g, '').toLowerCase();
        });
    });

    _.each(whatsNextShortTerm, function(update){
        update.coloredAreas = _.keyBy(update.areas, function(area){
            var coloredArea = coloredAreas[area.replace(/\s/g, '').toLowerCase()];
            return coloredArea ? coloredArea.color : 'default';
        });
        update.areaCodes = _.map(update.areas, function(area){
            return area.replace(/\s/g, '').toLowerCase();
        });
    });

    var serenityLastNewUpdates = _.take(JSON.parse(fs.readFileSync('content/whats-new/Serenity-news.json')), 6);
    _.each(serenityLastNewUpdates, function(update){
        update.coloredAreas = _.keyBy(update.areas, function(area){
            var coloredArea = coloredAreas[area.replace(/\s/g, '').toLowerCase()];
            return coloredArea ? coloredArea.color : 'default';
        });
        update.version = update['since-version'].split('.').join('').toLowerCase();
        update.isSerenityOnly = update['since-version'] === 'Serenity';
    });

    return gulp.src('src/whats-next.handlebars')
        .pipe(gulpHandlebars({
            title: 'What\'s next?',
            whatsNextShortTerm: whatsNextShortTerm,
            whatsNextMidTerm: whatsNextMidTerm,
            serenityLastNewUpdates: serenityLastNewUpdates,
            majorVersion: majorVersion
        }, {
            partialsDirectory: ['./src/partials']
        }))
        .pipe(rename('whats-next.html'))
        .pipe(revReplace({manifest: gulp.src("./tmp/rev/rev-manifest.json")}))
        .pipe(gulp.dest(fileDirectoryDestination));
};
