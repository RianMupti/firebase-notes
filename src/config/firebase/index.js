import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBKXoWCV0477Icd4Vqw_XB2pE_fc0asNbo",
    authDomain: "simple-notes-firebase-e622a.firebaseapp.com",
    projectId: "simple-notes-firebase-e622a",
    storageBucket: "simple-notes-firebase-e622a.appspot.com",
    messagingSenderId: "62407795643",
    appId: "1:62407795643:web:6a957b0a1976a711d9da9e",
    measurementId: "G-PNGGPPCWHD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;