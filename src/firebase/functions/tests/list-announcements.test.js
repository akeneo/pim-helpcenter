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
    // id 4 and 2 first to test the order by
    await collection.doc('id_4').set({
        "id": "id_4",
        "startDate": "2020-01-05",
        "description": "Description",
        "img": "base64",
        "imgAlt": "this is alt img",
        "editions": ["Serenity", "CE"],
        "filename": "1-optimize-weight-assets.md",
        "notificationEndDate": "2020-01-12",
        "tags": ["updates"],
        "title": "Optimize the weight of your assets",
        "link": "https://example.com",
        "type": "update"
    });

    await collection.doc('id_2').set({
        "id": "id_2",
        "startDate": "2020-02-05",
        "description": "Description",
        "img": "base64",
        "imgAlt": "this is alt img",
        "editions": ["Serenity"],
        "filename": "2-filename.md",
        "notificationEndDate": "2020-02-12",
        "tags": ["updates"],
        "title": "Optimize the weight of your assets",
        "link": "https://example.com",
        "type": "update"
    });
    await collection.doc('id_1').set({
        "id": "id_1",
        "startDate": "2020-02-05",
        "description": "Description",
        "img": "base64",
        "imgAlt": "this is alt img",
        "editions": ["Serenity"],
        "filename": "1-filename.md",
        "notificationEndDate": "2020-02-12",
        "tags": ["updates"],
        "title": "Optimize the weight of your assets",
        "link": "https://example.com",
        "type": "update"
    });
    await collection.doc('id_3').set({
        "id": "id_3",
        "startDate": "2020-02-05",
        "description": "Description",
        "img": "base64",
        "imgAlt": "this is alt img",
        "editions": ["Serenity", 'CE'],
        "filename": "3-filename.md",
        "notificationEndDate": "2020-02-12",
        "tags": ["updates"],
        "title": "Optimize the weight of your assets",
        "link": "https://example.com",
        "type": "update"
    });
});

afterEach(async () => {
    firebase.cleanup();
    firebaseTest.delete();
});

test('It lists the announcement into firestore in the correct order.', async done => {
    const req = {
        query: {
            limit: '4',
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            const ids = body.data.map(doc => {return doc.id;});
            expect(ids).toStrictEqual(['id_1', 'id_2', 'id_3', 'id_4']);
            done();
        }
    };

    functions.announcements(req, res);
});

test('It filters on the edition the announcement into firestore.', async done => {
    const req = {
        query: {
            limit: '4',
            pim_edition: 'CE',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            const ids = body.data.map(doc => {return doc.id;});
            expect(ids).toStrictEqual(['id_3', 'id_4']);
            done();
        }
    };

    functions.announcements(req, res);
});

test.only('It also returns product marketing announcements from CE edition and version 4.0.', async done => {
    const req = {
        query: {
            limit: '4',
            pim_edition: 'CE',
            pim_version: '4.0',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const collection = firebaseTest.firestore().collection('announcements-test');
    await collection.doc('product_marketing').set({
        "id": "product_marketing",
        "startDate": "2020-02-12",
        "description": "Description",
        "img": "base64",
        "imgAlt": "this is alt img",
        "editions": ["Serenity", 'EE', 'CE'],
        "version": ["3.2", "3.0"],
        "filename": "3-filename.md",
        "notificationEndDate": "2020-02-19",
        "tags": ["product_marketing"],
        "title": "Optimize the weight of your assets",
        "link": "https://example.com",
        "type": "product_marketing"
    });

    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            const ids = body.data.map(doc => {return doc.id;});
            expect(ids).toStrictEqual(['product_marketing']);
            done();
        }
    };

    functions.announcements(req, res);
});

test('It limits the results.', async done => {
    const req = {
        query: {
            limit: '2',
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            const ids = body.data.map(doc => {return doc.id;});
            expect(ids).toStrictEqual(['id_1', 'id_2']);
            done();
        }
    };

    functions.announcements(req, res);
});

test('It returns the correct format of the announcements.', async done => {
    const req = {
        query: {
            limit: '1',
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual({
                'data': [{
                    "id": "id_1",
                    "startDate": "2020-02-05",
                    "description": "Description",
                    "img": "base64",
                    "imgAlt": "this is alt img",
                    "notificationEndDate": "2020-02-12",
                    "tags": ["updates"],
                    "title": "Optimize the weight of your assets",
                    "link": "https://example.com"
                }]
        });
            done();
        }
    };

    functions.announcements(req, res);
});

test("It searches after an id when search_after is provided.", async done => {
    const req = {
        query: {
            limit: '2',
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix,
            search_after: 'id_1'
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            const ids = body.data.map(doc => {return doc.id;});
            expect(ids).toStrictEqual(['id_2', 'id_3']);
            done();
        }
    };

    functions.announcements(req, res);
});

test("It returns nothing when there is nothing after the search_after document.", async done => {
    const req = {
        query: {
            limit: '2',
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix,
            search_after: 'id_4'
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            const ids = body.data.map(doc => {return doc.id;});
            expect(ids).toStrictEqual([]);
            done();
        }
    };

    functions.announcements(req, res);
});

test("It returns an error when the search after document does not exist.", async done => {
    const req = {
        query: {
            limit: '2',
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix,
            search_after: 'id_not_existing'
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(400);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual('Search after document does not exist.');
            done();
        }
    };

    functions.announcements(req, res);
});

test("It uses default limit if it's missing a limit query parameter.", async done => {
    const req = {
        query: {
            pim_edition: 'Serenity',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(200);

            return res;
        },
        send: (body) => {
            done();
        }
    };

    functions.announcements(req, res);
});

test("It returns an error code 400 if it's missing PIM edition.", async done => {
    const req = {
        query: {
            limit: '2',
            pim_version: '20200214152234',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(400);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual('Missing "pim_edition" query parameter.');
            done();
        }
    };

    functions.announcements(req, res);
});

test("It returns an error code 400 if it's missing PIM version.", async done => {
    const req = {
        query: {
            limit: '2',
            pim_edition: 'Serenity',
            collection_name_suffix: collectionNameSuffix
        }
    };
    const res = {
        status: (status) => {
            expect(status).toStrictEqual(400);

            return res;
        },
        send: (body) => {
            expect(body).toStrictEqual('Missing "pim_version" query parameter.');
            done();
        }
    };

    functions.announcements(req, res);
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
