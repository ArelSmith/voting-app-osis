// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

// Konfigurasi Firebase (ganti dengan milikmu)
const firebaseConfig = {
  apiKey: "AIzaSyCvEQTHGHe9RXk3XkjpuGdZdKD9xeKtOXQ",
  authDomain: "pemilihan-sosis.firebaseapp.com",
  projectId: "pemilihan-sosis",
  storageBucket: "pemilihan-sosis.firebasestorage.app",
  messagingSenderId: "315983057597",
  appId: "1:315983057597:web:a0878bc66ef2ae3c98ddd4",
  measurementId: "G-GF90X7DXHT",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, updateDoc, getDoc };
