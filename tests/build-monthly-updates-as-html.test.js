const {generateIndex, generateUpdates}  = require('../tasks/build-monthly-updates-as-html.js');
const del = require('del');
const fs = require('fs');

test('Generate the static html about the updates of the PIM', done => {
    del(['tmp/*']);

    const stream = generateUpdates('./tests/updates/nominal_case/', './tmp');

    stream.on('finish', () => {
        const expectedData = fs.readFileSync('./tests/updates/nominal_case/expected_2020-02.html');
        const data = fs.readFileSync('./tmp/2020-02.html');

        try {
            expect(data.toString()).toStrictEqual(expectedData.toString());
            done();
        } catch (error) {
            done(error);
        }
    });
});

test('Generate the static html about the index of the PIM', done => {
    del(['tmp/*']);

    const stream = generateIndex('./tests/updates/nominal_case/', './tmp');

    stream.on('end', () => {
        const data = fs.readFileSync('./tmp/index.html');
        const expectedData = fs.readFileSync('./tests/updates/nominal_case/expected_index.html');

        try {
            expect(data).toStrictEqual(expectedData);
            done();
        } catch (error) {
            done(error);
        }
    });
});
