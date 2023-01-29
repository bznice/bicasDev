// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtjjjouIATG-hi6zii0A6AaaNaEe7QdeI",
    authDomain: "bicasdev-4faata20.firebaseapp.com",
    databaseURL: "https://bicasdev-4faata20-default-rtdb.firebaseio.com",
    projectId: "bicasdev-4faata20",
    storageBucket: "bicasdev-4faata20.appspot.com",
    messagingSenderId: "268095698707",
    appId: "1:268095698707:web:67e4e06b3d3aef3b9d0ce6",
    measurementId: "G-RECNJKQQ7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);