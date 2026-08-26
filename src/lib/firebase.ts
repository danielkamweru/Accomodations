import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCJVxAHcEALVSacDMmhh13LBdlt7YOiq2g",
  authDomain: "accomodation-2a677.firebaseapp.com",
  projectId: "accomodation-2a677",
  storageBucket: "accomodation-2a677.firebasestorage.app",
  messagingSenderId: "270324437067",
  appId: "1:270324437067:web:4d540eb369ab4269347dce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
