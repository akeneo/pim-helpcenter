const fs = require('fs');
const gulp = require('gulp');
const tap = require('gulp-tap');
const markdownIt = require('markdown-it');
const markdownToc = require('markdown-it-toc-and-anchor').default;
const frontMatter = require('gulp-front-matter');
const through = require('through2').obj;
const jsonCombine = require('gulp-jsoncombine');
const filter = require('gulp-filter');

const path = require('path');

const HELP_CENTER_PRODUCTION_URL = 'https://help.akeneo.com/';

module.exports = updatesAsJson;

const md = new markdownIt('default', {html: true, xhtmlOut: true });
md.renderer.rules.heading_open = function(...args) {
    parseTitleFromMarkdown(...args);
    parseDescriptionFromMarkdown(...args);
};
md.use(markdownToc);

gulp.task('build-monthly-updates-as-json', ['clean-dist'], function () {
    // by default, we generate all updates except if env variable ONLY_PREVIOUS_MONTH_UPDATES=true
    const generateAllUpdates = !(process.env.ONLY_PREVIOUS_MONTH_UPDATES && process.env.ONLY_PREVIOUS_MONTH_UPDATES === 'true');

    return updatesAsJson('content/updates/20*/*.md', './dist/pim', 'updates.json', generateAllUpdates);
});

/**
 * @param filePattern file pattern to read the markdown
 * @param fileDirectoryDestination directory to write the generated json file
 * @param fileNameDestination name of the generated json file
 * @param generateAllUpdates if we generate all updates or we generate only released feature
 * @returns {*}
 */
function updatesAsJson(filePattern, fileDirectoryDestination, fileNameDestination, generateAllUpdates) {
    return gulp.src(filePattern)
        .pipe(filter(keepUpdatesFromPreviousMonths(generateAllUpdates)))
        .pipe(frontMatter({property: 'fm',remove: true}))
        .pipe(tap(parseMarkdown))
        .pipe(generateJson())
        .pipe(jsonCombine(fileNameDestination, data => { return new Buffer.from(JSON.stringify(Object.values(data))); }))
        .pipe(gulp.dest(fileDirectoryDestination));
}

function parseMarkdown(file) {
    const env = {};
    md.render(file.contents.toString(), env);
    file.title = env.title;
    file.anchorTitle = env.anchorTitle;
    file.description = env.description;

    return;
}

/**
 * Return the first h1 title in the markdown file.
 *
 * Inspired by https://github.com/GerHobbelt/markdown-it-title/blob/master/index.js
 */
function parseTitleFromMarkdown(...args) {
    const [ tokens, idx, , env, self ] = args;
    let filteredTokens = tokens.filter(t => t.content.indexOf(':::') === -1);

    if (!env.title && filteredTokens[idx].tag === 'h1') {
        env.title = filteredTokens[idx + 1].content;
        env.anchorTitle = filteredTokens[idx].attrs[0][1];
    }

    return self.renderToken(...args);
};

/**
 * Return the description of the update feature.
 *
 * This description is the content of the paragraph just after the h1 title.
 * If there is no paragraph after this title, the description is null.
 */
function parseDescriptionFromMarkdown(...args) {
    const [ tokens, idx, , env, self ] = args;
    let filteredTokens = tokens.filter(t => t.content.indexOf(':::') === -1);

    const firsth1TitleIndex =  filteredTokens.findIndex((token) => token.tag === 'h1' && token.type === 'heading_close');
    const tokensWithouth1 = filteredTokens.slice(firsth1TitleIndex);

    const firsth2TitleIndex = tokensWithouth1.findIndex((token) => token.tag === 'h2');
    const descriptionIndex = tokensWithouth1.findIndex((token) => token.type === 'inline');

    if (descriptionIndex === -1) {
        env.description = null;
    } else if (firsth2TitleIndex === -1) {
        env.description = tokensWithouth1[descriptionIndex].content;
    } else if (descriptionIndex < firsth2TitleIndex) {
        env.description = tokensWithouth1[descriptionIndex].content;
    } else {
        env.description = null;
    }

    return self.renderToken(...args);
};

function generateJson() {
    const helpCenterUrl = process.env.HELP_CENTER_URL ? process.env.HELP_CENTER_URL : HELP_CENTER_PRODUCTION_URL;

    return through((file, enc, cb) => {
        const directoryName = path.basename(path.dirname(file.path));
        const link = helpCenterUrl + 'pim/serenity/updates/' + directoryName + '.html#' + file.anchorTitle;

        const startDate = getStartDate(directoryName);
        // hardcoded to the 5th day of the month as we publish this day
        const startDateWithDay = startDate + '-05';
        const notificationEndDate = getNotificationEndDate(startDateWithDay);

        let defaultValues = {
            'pim_announcement_img': null,
            'pim_announcement_alt_img': null,
            'pim_announcement_audience': [],
        };

        let data = {...defaultValues, ...file.fm };
        const imgContent = getBase64Content(file, data['pim_announcement_img']);
        const editions = transformToPimEditions(data['pim_announcement_audience']);

        let content = JSON.stringify({
            'id':  'update_' + path.basename(file.path, '.md').replace('_', '-') + '_' + startDate,
            'startDate': startDateWithDay,
            'description': file.description,
            'img': imgContent,
            'imgAlt': data['pim_announcement_alt_img'],
            'editions': editions,
            'filename': path.basename(file.path),
            'notificationEndDate': notificationEndDate,
            'tags': ['updates'],
            'title': file.title,
            'link': link
        });

        file.contents = Buffer.from(content);

        cb(null, file);
    });
}

function getBase64Content(file, imageRelativePath) {
    if (!imageRelativePath) {
        return null;
    }

    const imageFullPath = path.dirname(file.path) + '/' + imageRelativePath;
    var extension = path.extname(imageFullPath).replace('.', '');
    if (extension === 'jpg') {
        extension = 'jpeg';
    }

    const content = fs.readFileSync(imageFullPath, { encoding: 'base64' });
    const base64 = 'data:image/' + extension +';base64, ' +content;

    return base64;
}

/**
 * Transform EE into Serenity to match PIM version.
 *
 * @param editions
 */
function transformToPimEditions(editions) {
    return editions.map(edition => {
        return edition === 'EE' ? 'Serenity' : edition;
    });
}

function getNotificationEndDate(starDateString) {
    let startDate = new Date(starDateString);
    startDate.setDate(startDate.getDate() + 7);

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startDate);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startDate);

    return year + '-' + month + '-' + day;
}

/**
 * This is the date of the publishment of the news. It's a feature in February 2020, it will be 2020-03.
 */
function getStartDate(directoryName) {
    let startDate = new Date(directoryName + '-01');
    startDate.setMonth(startDate.getMonth() + 1);

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startDate);

    return year + '-' + month;
}

/**
 * Do not generate updates that are not published yet, except if generateAllUpdates = true (only for staging env).
 */
function keepUpdatesFromPreviousMonths(generateAllUpdates) {
    return (file) => {
        const folderName = path.basename(path.dirname(file.path));

        const currentDate = new Date(Date.now());
        const dayOfMonth = currentDate.getDate();

        const previousMonthDate = dayOfMonth < 5 ? new Date(currentDate.setMonth(currentDate.getMonth() - 2)) : new Date(currentDate.setDate(0));

        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(previousMonthDate);
        const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(previousMonthDate);
        const maxDate = year + '-' + month;

        return folderName <= maxDate || generateAllUpdates;
    }
}
