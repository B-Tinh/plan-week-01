import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNlLs1X01tK8EF-nixYfdG4uq1KWYPTxA",
  authDomain: "react-js-planwk5.firebaseapp.com",
  databaseURL: "https://react-js-planwk5.firebaseio.com",
  projectId: "react-js-planwk5",
  storageBucket: "react-js-planwk5.appspot.com",
  messagingSenderId: "292608894579",
  appId: "1:292608894579:web:5e756e2e4d5faab23a2c06",
  measurementId: "G-C4VEM84FY9"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;