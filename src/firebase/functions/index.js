const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const defaultCollectionName = 'announcements';
const defaultLimit = 10;

/**
 * Configuration is set with us-central1 because it's the only supported version for now.
 *
 * @see https://firebase.google.com/docs/hosting/full-config#direct_requests_to_a_function
 *
 * @type {TriggerAnnotated & ((req: e.Request, resp: e.Response) => (void | Promise<void>))}
 */
exports.announcements = functions.region('us-central1').https.onRequest(async (request, response) => {
    if (request.query.pim_edition === undefined) {
        response.status(400).send('Missing "pim_edition" query parameter.');

        return;
    }

    if (request.query.pim_version === undefined) {
        response.status(400).send('Missing "pim_version" query parameter.');

        return;
    }

    const limit = request.query.limit !== undefined && !isNaN(parseInt(request.query.limit)) && parseInt(request.query.limit) < 10 ? parseInt(request.query.limit) : defaultLimit;

    // Allow to request on another collection for the tests
    const collectionName = request.query.collection_name_suffix === undefined ? defaultCollectionName : defaultCollectionName + request.query.collection_name_suffix;
    const collection = admin.firestore().collection(collectionName);

    const audience = request.query.pim_edition === 'Serenity' || request.query.pim_edition === 'Growth Edition' ?
        request.query.pim_edition :
        request.query.pim_edition + '-' + request.query.pim_version;

    let query = collection
        .where('audience', 'array-contains', audience)
.orderBy('startDate', 'desc')
        .orderBy('filename', 'asc')
        .limit(limit);

        if (request.query.search_after !== undefined) {
            const searchAfterDoc = await collection.doc(request.query.search_after).get();
            if (searchAfterDoc.exists) {
                query = query.startAfter(searchAfterDoc);
            } else {
                response.status(400).send('Search after document does not exist.');

                return;
            }
        }

        query
            .get()
            .then(snapshot => {
                const announcements = [];

                snapshot.forEach(doc => {
                    announcements.push({
                        'id': doc.data().id,
                        "title": doc.data().title,
                        'startDate': doc.data().startDate,
                        'description': doc.data().description,
                        'img': doc.data().img,
                        'imgAlt': doc.data().imgAlt,
                        'notificationEndDate': doc.data().notificationEndDate,
                        'tags': doc.data().tags,
                        'link': doc.data().link,
                    });
                });

            response.status(200).send({'data': announcements});
            return;
        })
        .catch(err => {
            console.error('An error occurred when fetching data.', err);
            response.status(500).send('An error occurred when fetching data.');
        });
});

/**
 * Configuration is set with us-central1 because it's the only supported version for now.
 *
 * @see https://firebase.google.com/docs/hosting/full-config#direct_requests_to_a_function
 */
exports.new_announcements = functions.region('us-central1').https.onRequest(async (request, response) => {
    if (request.query.pim_edition === undefined) {
        response.status(400).send('Missing "pim_edition" query parameter.');

        return;
    }

    if (request.query.pim_version === undefined) {
        response.status(400).send('Missing "pim_version" query parameter.');

        return;
    }

    // Allow to request on another collection for the tests
    const collectionName = request.query.collection_name_suffix === undefined ? defaultCollectionName : defaultCollectionName + request.query.collection_name_suffix;
    const collection = admin.firestore().collection(collectionName);

    const currentDate = new Date(Date.now());
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currentDate);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(currentDate);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);
    const formattedCurrentDate = year + '-' + month + '-' + day;

    const audience = request.query.pim_edition === 'Serenity' || request.query.pim_edition === 'Growth Edition' ?
        request.query.pim_edition :
        request.query.pim_edition + '-' + request.query.pim_version;

    collection
        .where('audience', 'array-contains', audience)
        .where('notificationEndDate', '>=', formattedCurrentDate)
        .limit(1)
        .get()
        .then(snapshot => {
            let newAnnouncements = [];

            // it is not possible to filter with two range operators in firebase, so it simulates it
            snapshot.forEach(announcement => {
                if (announcement.data().startDate <= formattedCurrentDate  ) {
                    newAnnouncements.push(announcement.data().id);
                }
            });

            return response.status(200).send(newAnnouncements)
        })
        .catch(err => {
            console.error('An error occurred when requesting to know if there are new announcements.', err);
            response.status(500).send('An error occurred when requesting to know if there are new announcements.');
        });
});
