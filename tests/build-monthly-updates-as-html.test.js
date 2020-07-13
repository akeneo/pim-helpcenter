const {generateIndex, generateUpdates}  = require('../tasks/build-updates-as-html.js');
const del = require('del');
const fs = require('fs');

test('Generate the static html about the updates of the PIM', done => {
    del(['tmp/*']);

    const stream = generateUpdates('./tests/updates/nominal_case/', './tmp', false);

    stream.on('finish', () => {
        const expectedData = fs.readFileSync('./tests/updates/nominal_case/expected_reference-entities.html');
        const data = fs.readFileSync('./tmp/reference-entities.html');

        try {
            expect(data.toString()).toStrictEqual(expectedData.toString());
            done();
        } catch (error) {
            done(error);
        }
    });
});
