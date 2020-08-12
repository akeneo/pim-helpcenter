const updatesAsJson = require('../../tasks/build-monthly-updates-as-json.js');
const del = require('del');

test('It fails when the alternate text image is missing', done => {
    del(['tmp/*']);

    const errorHandler = (error) => {done()};
    const stream = updatesAsJson('./tests/updates/error_case/2020-02/missing_alt_img.md', './tmp/', 'test.json', true, errorHandler);
    stream.on('end', () => {
        done(new Error('Expecting error but it did not occur.'));
    });
});

test('It fails when the image does no exist', done => {
    del(['tmp/*']);

    const errorHandler = (error) => {done()};
    const stream = updatesAsJson('./tests/updates/error_case/2020-02/non_existing_path_image.md', './tmp/', 'test.json', true, errorHandler);
    stream.on('end', () => {
        done(new Error('Expecting error but it did not occur.'));
    });
});

test('It fails when the audience is missing', done => {
    del(['tmp/*']);

    const errorHandler = (error) => {done()};
    const stream = updatesAsJson('./tests/updates/error_case/2020-02/missing_audience.md', './tmp/', 'test.json', true, errorHandler);
    stream.on('end', () => {
        done(new Error('Expecting error but it did not occur.'));
    });
});

test('It fails when the description is missing', done => {
    del(['tmp/*']);

    const errorHandler = (error) => {done()};
    const stream = updatesAsJson('./tests/updates/error_case/2020-02/missing_description.md', './tmp/', 'test.json', true, errorHandler);
    stream.on('end', () => {
        done(new Error('Expecting error but it did not occur.'));
    });
});

test('It fails when the title is missing', done => {
    del(['tmp/*']);

    const errorHandler = (error) => {done()};
    const stream = updatesAsJson('./tests/updates/error_case/2020-02/missing_title.md', './tmp/', 'test.json', true, errorHandler);
    stream.on('end', () => {
        done(new Error('Expecting error but it did not occur.'));
    });
});

test('It fails when the title is too long', done => {
    del(['tmp/*']);

    const errorHandler = (error) => {done()};
    const stream = updatesAsJson('./tests/updates/error_case/2020-02/too_long_title.md', './tmp/', 'test.json', true, errorHandler);
    stream.on('end', () => {
        done(new Error('Expecting error but it did not occur.'));
    });
});
