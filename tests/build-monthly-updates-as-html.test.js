const {generateIndex, generateUpdates}  = require('../tasks/build-monthly-updates-as-html.js');
const del = require('del');
const fs = require('fs');

test('Generate the static html about the updates of the PIM', done => {
    del(['tmp/*']);

    const stream = generateUpdates('./tests/updates/nominal_case/', './tmp', false);

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

/**
 * The March month is not finished, so the updates are still written by the PM and not ready to be published *in production*.
 * Before the 05, it does not generate the update for february, as it's waiting for validation.
 */
test('When we are from 05 to 30 March 2020, generate the updates until February 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-03-05T00:00:00.000Z').valueOf()
        );

    const stream = generateUpdates('./tests/updates/nominal_case/', './tmp', false);

    stream.on('finish', () => {
        try {
            expect(fs.existsSync('./tmp/2020-02.html')).toBeTruthy();
            expect(fs.existsSync('./tmp/2020-03.html')).toBeFalsy();
            done();
        } catch (error) {
            done(error);
        }
    });
});

/**
 * The March month is finished, but it needs validation from the product marketing before publishing it *in production* automatically the 5th of the month.
 */
test('When we are from 01 to 04 April 2020, generate the updates until February 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-04-04T00:00:00.000Z').valueOf()
        );

    const stream = generateUpdates('./tests/updates/nominal_case/', './tmp', false);

    stream.on('finish', () => {
        try {
            expect(fs.existsSync('./tmp/2020-02.html')).toBeTruthy();
            expect(fs.existsSync('./tmp/2020-03.html')).toBeFalsy();
            done();
        } catch (error) {
            done(error);
        }
    });
});

/**
 * By default, it generates all updates to test the render in local or in staging. It's only when ONLY_PREVIOUS_MONTH_UPDATES environment variable is set
 * that it doesn't publish everything.
 *
 * ONLY_PREVIOUS_MONTH_UPDATES is set in production as it should not publish on-going updates.
 */
test('it generate all updates by default to deploy everything in staging or in local environment', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-04-04T00:00:00.000Z').valueOf()
        );

    const generateAllUpdates = true;
    const stream = generateUpdates('./tests/updates/nominal_case/', './tmp', generateAllUpdates);

    stream.on('finish', () => {
        try {
            expect(fs.existsSync('./tmp/2020-02.html')).toBeTruthy();
            expect(fs.existsSync('./tmp/2020-03.html')).toBeTruthy();
            done();
        } catch (error) {
            done(error);
        }
    });
});

test('When we are from 05 to 30 March 2020, generate the index of the updates until February 2020', done => {
    del(['tmp/*']);
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-03-05T00:00:00.000Z').valueOf()
        );
    const stream = generateIndex('./tests/updates/nominal_case/', './tmp', false);

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
