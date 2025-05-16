// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For Authentication
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getStorage } from "firebase/storage"; // For Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxOuzpF2menXTwX3xQ0uot1aabb51H6Do",
  authDomain: "sow-bible.firebaseapp.com",
  projectId: "sow-bible",
  storageBucket: "sow-bible.firebasestorage.app",
  messagingSenderId: "369624578397",
  appId: "1:369624578397:web:a15c04d0f288d00574d0b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore
const storage = getStorage(app); // Storage

export { auth, db, storage };