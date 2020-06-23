const fs = require('fs');
const gulp = require('gulp');
const tap = require('gulp-tap');
const markdownIt = require('markdown-it');
const markdownToc = require('markdown-it-toc-and-anchor').default;
const frontMatter = require('gulp-front-matter');
const through = require('through2').obj;
const jsonCombine = require('gulp-jsoncombine');
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
    return updatesAsJson('content/updates/20*/*.md', './dist/pim', 'updates.json');
});

/**
 * @param filePattern file pattern to read the markdown
 * @param fileDirectoryDestination directory to write the generated json file
 * @param fileNameDestination name of the generated json file
 * @returns {*}
 */
function updatesAsJson(filePattern, fileDirectoryDestination, fileNameDestination) {
    return gulp.src(filePattern)
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
        // hardcoded to the 5th day of the month
        let directoryName = path.basename(path.dirname(file.path));
        let startDate = directoryName + '-05';
        let link = helpCenterUrl + 'pim/serenity/updates/' + directoryName + '.html#' + file.anchorTitle;

        let defaultValues = {
            'pim_announcement_img': null,
            'pim_announcement_alt_img': null,
            'pim_announcement_audience': [],
        };

        let data = {...defaultValues, ...file.fm };
        const imgContent = data['pim_announcement_img'] ? fs.readFileSync(path.dirname(file.path) + '/' + data['pim_announcement_img'], { encoding: 'base64' }) : null;

        let content = JSON.stringify({
            'id':  'update_' + path.basename(file.path, '.md').replace('_', '-') + '_' + startDate,
            'startDate': startDate,
            'description': file.description,
            'img': imgContent,
            'imgAlt': data['pim_announcement_alt_img'],
            'version': data['pim_announcement_audience'],
            'filename': path.basename(file.path),
            'notificationDuration': 7,
            'tags': ['updates'],
            'title': file.title,
            'link': link
        });

        file.contents = Buffer.from(content);

        cb(null, file);
    });
}
