// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-33652.firebaseapp.com",
  projectId: "mern-estate-33652",
  storageBucket: "mern-estate-33652.firebasestorage.app",
  messagingSenderId: "234455436375",
  appId: "1:234455436375:web:4de330dc73442f1e8b6712",
  measurementId: "G-MKX2CZ8X8Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
