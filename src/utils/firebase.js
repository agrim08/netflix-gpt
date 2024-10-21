// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhcNxZCxWPWy-czXeSS8T1eDFZEg7CMU",
  authDomain: "netflixgpt-cde59.firebaseapp.com",
  projectId: "netflixgpt-cde59",
  storageBucket: "netflixgpt-cde59.appspot.com",
  messagingSenderId: "571434434737",
  appId: "1:571434434737:web:7ed9f029e26fad30276290",
  measurementId: "G-Y935TFEKJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
