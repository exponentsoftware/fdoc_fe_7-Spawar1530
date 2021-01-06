 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB3-jk7Ak8TolFXdCPRDypZPpoOoWP9bhs",
  authDomain: "gallery-dfb7e.firebaseapp.com",
  projectId: "gallery-dfb7e",
  storageBucket: "gallery-dfb7e.appspot.com",
  messagingSenderId: "159809378814",
  appId: "1:159809378814:web:1e04acafd4e33297ab48af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };
