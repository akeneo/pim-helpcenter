const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.announcements = functions.region('europe-west1').https.onRequest((request, response) => {
    // if (request.query.pim_edition === undefined) {
    //     response.status(400).send('Missing "pim_edition" query parameter.');
    // }
    //
    if (request.query.limit === undefined) {
        response.status(400).send('Missing "limit" query parameter.');
    }

    admin.firestore().collection('announcements').orderBy('startDate', 'desc').limit(request.query.limit).get()
        .then(snapshot => {
            const announcements = [];

            snapshot.forEach(doc => {
                announcements.push(doc.data());
            });

            response.status(200).send(announcements);
            return null;
        })
        .catch(err => {
            console.log(err);
            response.status(500).send('An error occurred when fetching data.');
            console.error('An error occured when fetching data.', err);
        });
});
