const functions  = require('../index.js');
const admin = require('firebase-admin');
const firebaseFunctionTest = require('firebase-functions-test');
let firebaseTest;
let firebase;

let collectionNameSuffix = '-test';
beforeEach(async () => {
    firebase = firebaseFunctionTest({
        databaseURL: process.env.FIRESTORE_URL,
        projectId: process.env.FIRESTORE_OBJECT
    }, '/opt/workdir/service-account-file.json');
    firebaseTest = admin.initializeApp({}, 'test');
    await removeAllDocuments(firebaseTest, 'announcements-test');

    const collection = firebaseTest.firestore().collection('announcements-test');
    await collection.doc('id_1').set({
        "id": "id_1",
        "startDate": "2020-01-05",
        "description": "Description",
        "img": "base64",
        "imgAlt": "this is alt img",
        "editions": ["Serenity", "CE"],
        "filename": "1-optimize-weight-assets.md",
        "notificationEndDate": "2020-01-12",
        "tags": ["updates"],
        "title": "Optimize the weight of your assets",
        "link": "https://example.com"
    });
});

afterEach(async () => {
    firebase.cleanup();
    firebaseTest.delete();
});

test('It returns the id of the announcements when the current date equals the end date.', async done => {
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-01-12T00:00:00.000Z').valueOf()
        );

    const req = {
        query: {
            pim_edition: 'Serenity',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual(['id_1']);
            done();
        }
    };

    functions.new_announcements(req, res);
});

test('It returns the id of the announcements when the current date equals the start date.', async done => {
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-01-05T00:00:00.000Z').valueOf()
        );

    const req = {
        query: {
            pim_edition: 'Serenity',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual(['id_1']);
            done();
        }
    };

    functions.new_announcements(req, res);
});

test('It returns nothing when there are no new announcement between the start date and the end date.', async done => {
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() =>
            new Date('2020-01-13T00:00:00.000Z').valueOf()
        );

    const req = {
        query: {
            pim_edition: 'Serenity',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual([]);
            done();
        }
    };

    functions.new_announcements(req, res);
});

async function getIdsInFirestore(firebase, collectionName) {
    const docs = await firebase.firestore().collection(collectionName).get();
    const ids = [];

    docs.forEach(doc => {
        ids.push(doc.id);
    });

    return ids;
}

async function removeAllDocuments(firebase, collectionName) {
    const ids = await getIdsInFirestore(firebase, collectionName);

    await Promise.all(ids.map(async (id) => {
        await firebase.firestore().collection(collectionName).doc(id).delete();
    }));
}
