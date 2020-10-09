import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyCqv0hagIZ7blvFyAKNt3lGtam_Ew_70mM",
    authDomain: "slackclone-41796.firebaseapp.com",
    databaseURL: "https://slackclone-41796.firebaseio.com",
    projectId: "slackclone-41796",
    storageBucket: "slackclone-41796.appspot.com",
    messagingSenderId: "190003322978",
    appId: "1:190003322978:web:5d4aeb05c93eb00fa8313b"
  };
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth
export const db = firebase.firestore()