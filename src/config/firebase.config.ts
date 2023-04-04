// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZdM-GVtTchJFUHNtsTM4ZY6u-AyTFaBQ",
  authDomain: "whiskey-collection-61d99.firebaseapp.com",
  projectId: "whiskey-collection-61d99",
  storageBucket: "whiskey-collection-61d99.appspot.com",
  messagingSenderId: "95004594393",
  appId: "1:95004594393:web:13e7979aba3024c56baec8"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase);
export const Providers = { google: new GoogleAuthProvider() }
