import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMDB8gaz3mHIqi4OUI8Fz6NF83CZpUNa0",
  authDomain: "chat-translator-0.firebaseapp.com",
  projectId: "chat-translator-0",
  storageBucket: "chat-translator-0.appspot.com",
  messagingSenderId: "45516889947",
  appId: "1:45516889947:web:7ef806ae7d651d98c8847e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
