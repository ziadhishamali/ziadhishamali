import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwyAoEVIquWO9KBnRk1HSRTrJL6BbSvfg",
    authDomain: "ziadhisham-personal-website.firebaseapp.com",
    databaseURL: "https://ziadhisham-personal-website.firebaseio.com",
    projectId: "ziadhisham-personal-website",
    storageBucket: "ziadhisham-personal-website.appspot.com",
    messagingSenderId: "538224524649",
    appId: "1:538224524649:web:6fdaedcf815feb78"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();
  
export {db, firebaseApp};