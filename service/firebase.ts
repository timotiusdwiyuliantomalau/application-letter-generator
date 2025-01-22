// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiAalnKMdiMqv29SlHAFdmqNgC-pZtwNA",
  authDomain: "application-letter-generator.firebaseapp.com",
  projectId: "application-letter-generator",
  storageBucket: "application-letter-generator.firebasestorage.app",
  messagingSenderId: "864473707318",
  appId: "1:864473707318:web:07aa50e65c47d031b43997"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);