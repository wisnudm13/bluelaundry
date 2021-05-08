// import * as firebase from 'firebase';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB1LLhYBwe6ctoJ8LEXM4JTz9FXN1xWiJA",
    authDomain: "blue-laundry.firebaseapp.com",
    projectId: "blue-laundry",
    storageBucket: "blue-laundry.appspot.com",
    messagingSenderId: "670167055574",
    appId: "1:670167055574:web:07fea42b3fc353a499dd77"
};

let app;

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);

} else {
  app = firebase.app();

  
}

const db = app.firestore();
const auth = app.auth();

export {db, auth};