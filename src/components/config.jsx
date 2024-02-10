// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt3BgJ-7pT1RdEiZR3ZUvsQ7tY00CjRfw",
  authDomain: "copydata-ab648.firebaseapp.com",
  projectId: "copydata-ab648",
  storageBucket: "copydata-ab648.appspot.com",
  messagingSenderId: "738766089741",
  appId: "1:738766089741:web:626fd209e999f2a923ef44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const textDb = getFirestore(app)

