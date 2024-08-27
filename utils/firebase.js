// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDaZpTv_D2Qq4UFI2HOxZWUgCXwGRlVspE",
    authDomain: "coursy-8b5c4.firebaseapp.com",
    projectId: "coursy-8b5c4",
    storageBucket: "coursy-8b5c4.appspot.com",
    messagingSenderId: "879211937894",
    appId: "1:879211937894:web:2f27c557b0bf6e712a6da7",
    measurementId: "G-FP6QEV1LCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();