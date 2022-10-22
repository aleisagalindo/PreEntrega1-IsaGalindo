// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyectofinal-isagalindo.firebaseapp.com",
  projectId: "proyectofinal-isagalindo",
  storageBucket: "proyectofinal-isagalindo.appspot.com",
  messagingSenderId: "217119843243",
  appId: "1:217119843243:web:17a6050c026d092416e8ee",
  measurementId: "G-B6732607E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);