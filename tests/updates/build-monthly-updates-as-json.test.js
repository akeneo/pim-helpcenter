const updatesAsJson = require('../../tasks/build-monthly-updates-as-json.js');
const del = require('del');
const fs = require('fs');
const errorHandler = () => {};

test('It generates all updates in the json file by default to deploy everything in staging or in local environment', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-03-04T00:00:00.000Z').valueOf()
        );

    const stream = updatesAsJson('./tests/updates/nominal_case/**/*.md', './tmp/', 'test.json', true, errorHandler);

    stream.on('end', () => {
        const rawData = fs.readFileSync('./tmp/test.json');
        const data = JSON.parse(rawData);

        const expectedRawData = fs.readFileSync('./tests/updates/nominal_case/expected_updates.json');
        const expectedData = JSON.parse(expectedRawData);

        try {
            expect(data.sort(sortJson)).toStrictEqual(expectedData.sort(sortJson));
            expect(data.every(update => update.currentMonth)).toBe(true);
            done();
        } catch (error) {
            done(error);
        }
    });
});


/**
 * The March month is not finished, so the updates are still written by the PM and not ready to be published *in production*.
 * Before the 05, it does not generate the update for february, as it's waiting for validation.
 */
test('When we are from 05 to 31 March 2020, generate the updates until February 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-03-05T00:00:00.000Z').valueOf()
        );

    const stream = updatesAsJson('./tests/updates/nominal_case/**/*.md', './tmp/', 'test.json', false, errorHandler);

    stream.on('end', () => {
        const rawData = fs.readFileSync('./tmp/test.json');
        const data = JSON.parse(rawData);

        const expectedRawData = fs.readFileSync('./tests/updates/nominal_case/expected_updates_only_february.json');
        const expectedData = JSON.parse(expectedRawData);

        try {
            expect(data.sort(sortJson)).toStrictEqual(expectedData.sort(sortJson));
            expect(data.every(update => update.currentMonth)).toBe(true);
            done();
        } catch (error) {
            done(error);
        }
    });
});

/**
 * If you just substract a month in JS, it transform 03/31 in 02/31 which does exist. Therefore, JS transforms it as
 * 03/03... which creates a bug in the filtering.
 *
 * This test guarantees that this behavior does not occur and that it correctly handles this case.
 */
test('When we are in March 31th 2020, generate the updates until February 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-03-31T00:00:00.000Z').valueOf()
        );

    const stream = updatesAsJson('./tests/updates/nominal_case/**/*.md', './tmp/', 'test.json', false, errorHandler);

    stream.on('end', () => {
        const rawData = fs.readFileSync('./tmp/test.json');
        const data = JSON.parse(rawData);

        const expectedRawData = fs.readFileSync('./tests/updates/nominal_case/expected_updates_only_february.json');
        const expectedData = JSON.parse(expectedRawData);

        try {
            expect(data.sort(sortJson)).toStrictEqual(expectedData.sort(sortJson));
            expect(data.every(update => update.currentMonth)).toBe(true);
            done();
        } catch (error) {
            done(error);
        }
    });
});

test('When we are from 01 to 04 April 2020, generate the updates until February 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-04-04T00:00:00.000Z').valueOf()
        );

    const stream = updatesAsJson('./tests/updates/nominal_case/**/*.md', './tmp/', 'test.json', false, errorHandler);

    stream.on('end', () => {
        const rawData = fs.readFileSync('./tmp/test.json');
        const data = JSON.parse(rawData);

        const expectedRawData = fs.readFileSync('./tests/updates/nominal_case/expected_updates_only_february.json');
        const expectedData = JSON.parse(expectedRawData);

        try {
            expect(data.sort(sortJson)).toStrictEqual(expectedData.sort(sortJson));
            expect(data.every(update => update.currentMonth)).toBe(true);
            done();
        } catch (error) {
            done(error);
        }
    });
});

test('When we are from 05 to April to 04 May 2020, generate the updates until March 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-04-05T00:00:00.000Z').valueOf()
        );

    const stream = updatesAsJson('./tests/updates/nominal_case/**/*.md', './tmp/', 'test.json', false, errorHandler);

    stream.on('end', () => {
        const rawData = fs.readFileSync('./tmp/test.json');
        const data = JSON.parse(rawData);

        const expectedRawData = fs.readFileSync('./tests/updates/nominal_case/expected_updates.json');
        const expectedData = JSON.parse(expectedRawData);

        try {
            expect(data.sort(sortJson)).toStrictEqual(expectedData.sort(sortJson));
            expect(data.every(update => update.currentMonth)).toBe(true);
            done();
        } catch (error) {
            done(error);
        }
    });
});


function sortJson(update1, update2) {
    if (update1.startDate < update2.startDate) {
        return -1;
    } else if (update1.startDate > update2.startDate) {
        return 1;
    } else if (update1.startDate === update2.startDate && update1.filename < update2.filename) {
        return -1;
    } else if (update1.startDate === update2.startDate && update1.filename === update2.filename) {
        return 0;
    } else if (update1.startDate === update2.startDate && update1.filename > update2.filename) {
        return 1;
    }
}
