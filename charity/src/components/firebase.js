import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKnF8Y_UBOY2TUOF6fZ9xu7E62jC_-K5Q",
  authDomain: "contact-a61f6.firebaseapp.com",
  databaseURL:
    "https://contact-a61f6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-a61f6",
  storageBucket: "contact-a61f6.appspot.com",
  messagingSenderId: "422901784817",
  appId: "1:422901784817:web:3b7cacd1f8628651d30950",
  measurementId: "G-25XF91FVH9",
});

var db = firebaseApp.firestore();

export { db };
