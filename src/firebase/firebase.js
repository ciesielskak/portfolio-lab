import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDPJ45FGuUngObwQdZImeYMfRwjAJV9wTg",
    authDomain: "portfolio-lab-7003f.firebaseapp.com",
    projectId: "portfolio-lab-7003f",
    storageBucket: "portfolio-lab-7003f.appspot.com",
    messagingSenderId: "22966776250",
    appId: "1:22966776250:web:06ca69e1d4d1bada6fed83",
    measurementId: "G-Y6YP160QQ1"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();