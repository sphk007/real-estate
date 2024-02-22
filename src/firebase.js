// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-f53cc.firebaseapp.com",
  projectId: "real-estate-f53cc",
  storageBucket: "real-estate-f53cc.appspot.com",
  messagingSenderId: "447428783759",
  appId: "1:447428783759:web:e92ba73c1f9afeb3294afa"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);