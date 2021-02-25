import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBC3ScNs2vXy0U5Q7Khw6hRCrBn--koZDE",
    authDomain: "slack-clone-b74b3.firebaseapp.com",
    projectId: "slack-clone-b74b3",
    storageBucket: "slack-clone-b74b3.appspot.com",
    messagingSenderId: "92330474044",
    appId: "1:92330474044:web:befad3ded9923beef7a139"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export default db;