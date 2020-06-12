const updatesAsJson = require('../tasks/build-monthly-updates-as-json.js');
const del = require('del');
const fs = require('fs');

test('Generate the json about the updates of the PIM', () => {
    del(['tmp/*']);

    updatesAsJson('./tests/updates/nominal_case/**/*.md', './tmp/', 'test.json');

    const rawData = fs.readFileSync('./tmp/test.json');
    const data = JSON.parse(rawData);

    const expectedRawData = fs.readFileSync('./tests/updates/nominal_case/expected_updates.json');
    const expectedData = JSON.parse(expectedRawData);

    expect(data).toStrictEqual(expectedData);
});
