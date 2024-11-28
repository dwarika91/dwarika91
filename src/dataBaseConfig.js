// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEF5uHsrc8FjoW6bfPn-9WXCukavsYBAw",
  authDomain: "login-page-ce5d9.firebaseapp.com",
  projectId: "login-page-ce5d9",
  storageBucket: "login-page-ce5d9.firebasestorage.app",
  messagingSenderId: "527068759502",
  appId: "1:527068759502:web:eb034fba92060d431a579f",
  measurementId: "G-36D6BSGMTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
