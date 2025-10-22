// src/firebase/firebase.config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9idWt03fruG2KWkT3TG6nKcnMO6k55Yg",
  authDomain: "skillswap-9878b.firebaseapp.com",
  projectId: "skillswap-9878b",
  storageBucket: "skillswap-9878b.firebasestorage.app",
  messagingSenderId: "719888105601",
  appId: "1:719888105601:web:6ae2e72ca6fbd14e4bcd80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);