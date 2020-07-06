const pushAnnouncements  = require('../../tasks/push-announcements.js');
const firebase = require("firebase-admin");
const collectionName = 'announcements-test';
let firebaseTest;


beforeEach(async () => {
    firebaseTest = firebase.initializeApp({
        credential: firebase.credential.applicationDefault(),
        databaseURL: process.env.FIRESTORE_URL,
    }, 'test');
    await removeAllDocuments(firebaseTest, collectionName);
});

afterEach(async () => {
    await firebaseTest.delete();
});

test('It adds new announcements into firestore.', async () => {
    await firebaseTest.firestore().collection('announcements-test').doc('update_1-optimize-weight-assets_2020-02-05').delete();

    await pushAnnouncements('./tests/updates/nominal_case/expected_updates.json', 'announcements-test');

    const ids = await getIdsInFirestore(firebaseTest, collectionName);
    expect(ids).toStrictEqual([
        'update_1-data-quality-new-improvements_2020-03-05',
        'update_1-optimize-weight-assets_2020-02-05',
        'update_2-new-warning-message-username-connection_2020-02-05'
    ]);
});

test('It removes deleted announcements from firestore.', async () => {
    await firebaseTest.firestore().collection('announcements-test').doc('to_remove_document').set({'test': 'foo'});
    const beforeTestIds = await getIdsInFirestore(firebaseTest, collectionName);
    expect(beforeTestIds).toStrictEqual(['to_remove_document',]);

    await pushAnnouncements('./tests/updates/nominal_case/expected_updates.json', 'announcements-test');

    const ids = await getIdsInFirestore(firebaseTest, collectionName);
    expect(ids).toStrictEqual([
        'update_1-data-quality-new-improvements_2020-03-05',
        'update_1-optimize-weight-assets_2020-02-05',
        'update_2-new-warning-message-username-connection_2020-02-05'
    ]);
});

test('It replaces existing announcements from firestore to fix a typo for example.', async () => {
    await firebaseTest.firestore().collection('announcements-test').doc('update_1-optimize-weight-assets_2020-02-05').set({startDate: '3000-01-01'});
    const beforeTestDoc = await firebaseTest.firestore().collection('announcements-test').doc('update_1-optimize-weight-assets_2020-02-05').get();

    expect(beforeTestDoc.data().startDate).toStrictEqual('3000-01-01');

    await pushAnnouncements('./tests/updates/nominal_case/expected_updates.json', 'announcements-test');

    const afterTestDoc = await firebaseTest.firestore().collection('announcements-test').doc('update_1-optimize-weight-assets_2020-02-05').get();
    expect(afterTestDoc.data().startDate).toStrictEqual('2020-02-05');
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
