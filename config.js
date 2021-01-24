import firebase from 'firebase';

require ('@firebase/firestore')
var firebaseConfig = {
  
    apiKey: "AIzaSyBTEpVnBQNXO_NlUTfCnCpyDD2eEvD7StI",
    authDomain: "trade-made.firebaseapp.com",
    databaseURL: "https://trade-made-default-rtdb.firebaseio.com",
    projectId: "trade-made",
    storageBucket: "trade-made.appspot.com",
    messagingSenderId: "152085800434",
    appId: "1:152085800434:web:bf436bd7bbc7b682e7376b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();