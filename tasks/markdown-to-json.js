var gulp = require('gulp');



gulp.task('markdown-to-json', function(){
    const markdownJson = require('markdown-json');

    const settings = {
        name: 'markdown-json',
        cwd: './',
        src: 'content/updates/2020-05',
        filePattern: '*.md',
        ignore: "(imdededeg)",
        dist: 'tests/output.json',
        server: false,
        port: 3001
    };

    markdownJson(settings).then((data) => {
        //console.log('data:', data);
    }).catch((err) => {
        //console.log('error:', err);
    })
});
