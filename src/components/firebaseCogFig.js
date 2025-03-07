
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBa7_3hrZre0P4jJ5MuMz8TyLVxLhXVODw",
  authDomain: "react-project-1e516.firebaseapp.com",
  projectId: "react-project-1e516",
  storageBucket: "react-project-1e516.firebasestorage.app",
  messagingSenderId: "179088978381",
  appId: "1:179088978381:web:6434766a38209790fd9484",
  measurementId: "G-PL881VQZ4Z"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const author=getAuth(app)
export const database=getDatabase(app)