// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaejYDrvtv21nmN8RtOp5A0n0sVddDK4w",
  authDomain: "login-99967.firebaseapp.com",
  projectId: "login-99967",
  storageBucket: "login-99967.firebasestorage.app",
  messagingSenderId: "389848647538",
  appId: "1:389848647538:web:be49a005f064df640c3feb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);