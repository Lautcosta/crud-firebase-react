import { initializeApp } from "firebase/app";
import {getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKYgvC693itOLGZrYCH_D32V0-urA7NVk",
  authDomain: "crud-app-3f99d.firebaseapp.com",
  projectId: "crud-app-3f99d",
  storageBucket: "crud-app-3f99d.appspot.com",
  messagingSenderId: "771116758715",
  appId: "1:771116758715:web:fc7db1bcfe432851965b9e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)