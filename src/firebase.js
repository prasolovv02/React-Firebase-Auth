// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk7BI23Cad3UB92Fm3LA1OJparOIUAXSU",
  authDomain: "react-firebase-auth-ff7d9.firebaseapp.com",
  projectId: "react-firebase-auth-ff7d9",
  storageBucket: "react-firebase-auth-ff7d9.firebasestorage.app",
  messagingSenderId: "872412413563",
  appId: "1:872412413563:web:072cc4d0ed37a6ffd06cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);