// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmfwFbjJQ6o9LTkM5mW8syQUweHDd1B28",
  authDomain: "entrega-final-reactjs-8fd4a.firebaseapp.com",
  projectId: "entrega-final-reactjs-8fd4a",
  storageBucket: "entrega-final-reactjs-8fd4a.firebasestorage.app",
  messagingSenderId: "455915548415",
  appId: "1:455915548415:web:a44705437713ff1de9a6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)