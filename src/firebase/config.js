// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATNweij_wawXCOioAZEFKmDKicf8n3zgw",
  authDomain: "journalapp-56019.firebaseapp.com",
  projectId: "journalapp-56019",
  storageBucket: "journalapp-56019.appspot.com",
  messagingSenderId: "600581699517",
  appId: "1:600581699517:web:7bac79be88ea5dea0f44d4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp ); // funcionalidades de autenticación
export const FirebaseDB = getFirestore( FirebaseApp ); // configuación de la base de datos