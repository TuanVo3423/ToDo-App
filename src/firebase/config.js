import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAntkcqfW1_0WycVNRBXyzgtTpxvFVTdNk',
    authDomain: 'todo-list-7abf1.firebaseapp.com',
    projectId: 'todo-list-7abf1',
    storageBucket: 'todo-list-7abf1.appspot.com',
    messagingSenderId: '183723453098',
    appId: '1:183723453098:web:d06d894805a5985ca27ed3',
    measurementId: 'G-Z7HD2S1ETJ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
// firebase.database.enableLogging(true);

// auth.useEmulator('http://localhost:9099');
// if (window.location.hostname === 'localhost') {
//     db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;
