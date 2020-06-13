const gulp = require('gulp');
const tap = require('gulp-tap');
const markdownIt = require('markdown-it');
const markdownToc = require('markdown-it-toc-and-anchor').default;
const frontMatter = require('gulp-front-matter');
const through = require('through2').obj;
const jsonCombine = require('gulp-jsoncombine');
const path = require('path');

module.exports = updatesAsJson;

const optionsMd = {
    html: true,
    xhtmlOut: true,
    typographer: false,
    linkify: false,
    breaks: false
};

const md = new markdownIt('default', optionsMd);

/**
 * Return the first title in a markdown.
 *
 * Inspired by https://github.com/GerHobbelt/markdown-it-title/blob/master/index.js
 */
md.renderer.rules.heading_open = function(...args) {
    const [ tokens, idx, , env, self ] = args;

    let filteredTokens = tokens.filter(t => t.content.indexOf(':::') === -1);

    if (!env.title && filteredTokens[idx].tag === 'h1') {
        env.title = filteredTokens[idx + 1].content;
        env.anchorTitle = filteredTokens[idx].attrs[0][1];
    }

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

md.use(markdownToc);

gulp.task('build-monthly-updates-as-json', ['clean-dist'], function () {
    return updatesAsJson('content/updates/20*/*.md', './dist/', 'test.json');
});


function updatesAsJson(filePattern, fileDirectoryDestination, fileNameDestination) {
    // let year = new Date().getFullYear();
    // let month = new Date().getMonth();

    return gulp.src(filePattern)
        .pipe(frontMatter({property: 'fm',remove: true}))
        .pipe(tap(parseTitleFromFile))
        .pipe(generateJson())
        .pipe(jsonCombine(fileNameDestination, data => { return new Buffer.from(JSON.stringify(Object.values(data))); }))
        .pipe(gulp.dest(fileDirectoryDestination));
}

function parseTitleFromFile(file) {
    const env = {};
    md.render(file.contents.toString(), env);
    file.title = env.title;
    file.anchorTitle = env.anchorTitle;
    file.description = env.description;

    return;
}

function generateJson() {
    return through((file, enc, cb) => {
        // hardcoded to the 5th day of the month
        let directoryName = path.basename(path.dirname(file.path));
        let startDate = directoryName.replace('-', '/') + '/05';
        let link = 'https://help.akeneo.com/pim/serenity/updates/' + directoryName + '.html#' + file.anchorTitle;

        let defaultValues = {
            'pim_announcement_img': null,
            'pim_announcement_alt_img': null,
            'pim_announcement_audience': [],
        };

        let data = {...defaultValues, ...file.fm };

        let content = JSON.stringify({
            'startDate': startDate,
            'description': file.description,
            'img': data['pim_announcement_img'],
            'imgAlt': data['pim_announcement_alt_img'],
            'version': data['pim_announcement_audience'],
            'notificationDuration': 7,
            'tags': ['updates'],
            'title': file.title,
            'link': link
        });

        file.contents = Buffer.from(content);

        cb(null, file);
    });
}
