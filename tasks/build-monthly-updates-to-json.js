const gulp = require('gulp');
const tap = require('gulp-tap');
const markdownIt = require('markdown-it');
const markdownToc = require('markdown-it-toc-and-anchor').default;
var gulpMarkdownIt = require('gulp-markdown-it-adapter');

const frontMatter = require('gulp-front-matter');
const through = require('through2').obj;
const jsonCombine = require('gulp-jsoncombine');
const path = require('path');

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

    console.log(tokens[idx]);

    if (!env.title && tokens[idx].tag === 'h1') {
        env.title = tokens[idx + 1].content;
        env.anchorTitle = tokens[idx].attrs[0][1];
    }

    // console.log(tokens);

    return self.renderToken(...args);
};

md.use(markdownToc);

gulp.task('build-monthly-updates-to-json', ['clean-dist'], function () {
        let year = new Date().getFullYear();
        let month = new Date().getMonth();

        // "link": "https://help.akeneo.com/pim/serenity/updates/2020-04.html#track-your-destination-connections

    return gulp.src('content/updates/2020*/*.md')
        .pipe(frontMatter({property: 'fm',remove: true}))
        .pipe(tap(parseTitleFromFile))
        .pipe(gulpMarkdownIt(md))
        .pipe(generateJson())
        .pipe(jsonCombine('test.json', data => { return new Buffer.from(JSON.stringify(Object.values(data))); }))
        .pipe(gulp.dest('./dist/'));
});

function parseTitleFromFile(file) {
    const env = {};
    let content = md.render(file.contents.toString(), env);
    file.title = env.title;
    file.anchorTitle = env.anchorTitle;

    return;
}

function generateJson() {
    return through((file, enc, cb) => {
        // hardcoded to the 5th day of the month
        let directoryName = path.basename(path.dirname(file.path));
        let startDate = directoryName.replace('-', '/') + '/05';
        let link = 'https://help.akeneo.com/pim/serenity/updates/' + directoryName + '.html#' + file.anchorTitle;

        let defaultValues = {
            'pim_announcement_description': null,
            'pim_announcement_img': null,
            'pim_announcement_alt_img': null,
            'pim_announcement_audience': [],
        };

        let data = {...defaultValues, ...file.fm };

        let content = JSON.stringify({
            'startDate': startDate,
            'description':data['pim_announcement_description'],
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
