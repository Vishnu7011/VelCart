import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvelcart.firebaseapp.com",
  projectId: "loginvelcart",
  storageBucket: "loginvelcart.firebasestorage.app",
  messagingSenderId: "308207370780",
  appId: "1:308207370780:web:fdb8be52ef3104bb4795d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider =new GoogleAuthProvider()

export {auth, provider}