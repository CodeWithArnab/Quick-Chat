import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAivwHtj1GNftA1tRZ9joqilFw2XUJ1Ot0",
  authDomain: "chat-app-a225e.firebaseapp.com",
  projectId: "chat-app-a225e",
  storageBucket: "chat-app-a225e.appspot.com",
  messagingSenderId: "655852523391",
  appId: "1:655852523391:web:ed864582067459e6c4944a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();