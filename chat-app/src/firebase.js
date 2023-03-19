import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAviEjrxFQCyQUFuHptLhIHAV90Wftpedw",
  authDomain: "chatxx-68eca.firebaseapp.com",
  projectId: "chatxx-68eca",
  storageBucket: "chatxx-68eca.appspot.com",
  messagingSenderId: "942078067150",
  appId: "1:942078067150:web:f86a9a61b82c3677846b9f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth()
export const storage = getStorage();
export const db = getFirestore();
