// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB01Gq2i5K1Oh5C6Ye6sKzUY9awoGCX4cs",
    authDomain: "copydata-576fa.firebaseapp.com",
    projectId: "copydata-576fa",
    storageBucket: "copydata-576fa.appspot.com",
    messagingSenderId: "337413233856",
    appId: "1:337413233856:web:950cfe4dab1b57f8d56125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)