const admin = require('firebase-admin');
const firebase = require('firebase');

const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://codeassist-604e0.firebaseio.com'
});

const firebaseConfig = {
  apiKey: "AIzaSyBS0kOuZkMFP5fLpQerVhfzO1kQ6XlrW_o",
  authDomain: "codeassist-604e0.firebaseapp.com",
  projectId: "codeassist-604e0",
  storageBucket: "codeassist-604e0.appspot.com",
  messagingSenderId: "10482895408",
  appId: "1:10482895408:web:5effadfe7dcebf4e2c7bf5",
};

firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };
