import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();

const FALLBACK_CONFIG = {
  apiKey: "AIzaSyCJVxAHcEALVSacDMmhh13LBdlt7YOiq2g",
  authDomain: "accomodation-2a677.firebaseapp.com",
  projectId: "accomodation-2a677",
  storageBucket: "accomodation-2a677.firebasestorage.app",
  messagingSenderId: "270324437067",
  appId: "1:270324437067:web:4d540eb369ab4269347dce",
} as const;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || FALLBACK_CONFIG.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || FALLBACK_CONFIG.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || FALLBACK_CONFIG.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || FALLBACK_CONFIG.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || FALLBACK_CONFIG.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || FALLBACK_CONFIG.appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
