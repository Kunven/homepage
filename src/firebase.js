/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLzDXPRpcW75ANZxAKz9iIMuPZ-vlR2o8",
  authDomain: "tesis-usm-lp.firebaseapp.com",
  projectId: "tesis-usm-lp",
  storageBucket: "tesis-usm-lp.appspot.com",
  messagingSenderId: "703435879214",
  appId: "1:703435879214:web:21bac6a2a89bf8554a40bf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app)

  export { db };
