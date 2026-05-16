// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJZruXUjN35jpzex_REXY_KLNrFCz2azM",
  authDomain: "qrez4u.firebaseapp.com",
  projectId: "qrez4u",
  storageBucket: "qrez4u.appspot.com",
  messagingSenderId: "502092386154",
  appId: "1:502092386154:web:be913e0f5857498f125f13",
  measurementId: "G-Q4TY57YXP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);