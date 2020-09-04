import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBchA03T41YDEUeWrmS-4Xh776-_Jm6GB8",
    authDomain: "messenger-clone-gaurav.firebaseapp.com",
    databaseURL: "https://messenger-clone-gaurav.firebaseio.com",
    projectId: "messenger-clone-gaurav",
    storageBucket: "messenger-clone-gaurav.appspot.com",
    messagingSenderId: "420839330315",
    appId: "1:420839330315:web:696e4a803e7cd7bcc9ed0e"
  });

const db = firebaseApp.firestore();
export default db;

