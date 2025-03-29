// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import authentication
import { getDatabase } from "firebase/database"; // If using Firebase Realtime Database
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Firebase Storage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzDQuBUlLfS0jfj_oVovvVkOl4winYFcc",
  authDomain: "wildfind-d4f49.firebaseapp.com",
  databaseURL: "https://wildfind-d4f49-default-rtdb.firebaseio.com/",
  projectId: "wildfind-d4f49",
  storageBucket: "wildfind-d4f49.firebasestorage.app",
  messagingSenderId: "58185798764", 
  appId: "1:58185798764:web:db510186c50723cfe83449",
  measurementId: "G-22LQM13E4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Authentication instance
const database = getDatabase(app); // Realtime Database instance (if needed)
const firestore = getFirestore(app); // Firestore instance (if needed)
const storage = getStorage(app); // Storage instance (if needed)

export { app, auth, database, firestore, storage };
