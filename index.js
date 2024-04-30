// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq4QcPgpqlGcxt79YvVV26VnU8yDH5dcE",
  authDomain: "calculadora-acidez.firebaseapp.com",
  projectId: "calculadora-acidez",
  storageBucket: "calculadora-acidez.appspot.com",
  messagingSenderId: "516838927707",
  appId: "1:516838927707:web:d2701b45428a1d2df27e7e",
  measurementId: "G-KFFMCFXQGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);