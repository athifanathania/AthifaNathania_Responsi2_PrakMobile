// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// modifikasi src/utils/firebase.ts
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAtgR6hkFNm_XMHCOSCjZbCSVZDrMvaYmk",
  authDomain: "responsi2-mobile.firebaseapp.com",
  projectId: "responsi2-mobile",
  storageBucket: "responsi2-mobile.firebasestorage.app",
  messagingSenderId: "1075168613197",
  appId: "1:1075168613197:web:15e60ec085b6a04d119d04"
};  

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };