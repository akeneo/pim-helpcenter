const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.announcements = functions.region('europe-west1').https.onRequest((request, response) => {
    admin.firestore().collection('announcements').get()
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
