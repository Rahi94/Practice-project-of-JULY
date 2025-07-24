// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJC_8t9njWhgzbEh70pqXvJcn1ObWgmI",
  authDomain: "th-july-2025-practice.firebaseapp.com",
  projectId: "th-july-2025-practice",
  storageBucket: "th-july-2025-practice.firebasestorage.app",
  messagingSenderId: "94669380169",
  appId: "1:94669380169:web:6f436883b983ed925bbd98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);