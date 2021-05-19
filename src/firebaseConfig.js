import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAYM9hPdIceVgz_SSyL1kbUAnva9_jo3h0",
    authDomain: "vuejs-workouts.firebaseapp.com",
    databaseURL: "https://vuejs-workouts-default-rtdb.firebaseio.com",
    projectId: "vuejs-workouts",
    storageBucket: "vuejs-workouts.appspot.com",
    messagingSenderId: "164938302981",
    appId: "1:164938302981:web:48a3e2660c80418b037e6c",
    measurementId: "G-LELS1LGKDJ"
};

export default firebase.initializeApp(firebaseConfig);

// import firebase from "./firebaseInit";
// const db = firebase.firestore();