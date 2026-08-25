import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const REQUIRED_KEYS = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
] as const;

const missingKeys = REQUIRED_KEYS.filter((key) => !firebaseConfig[key as keyof typeof firebaseConfig]);

if (missingKeys.length > 0) {
  console.warn("[Auth] Missing Firebase environment variables:", missingKeys.join(", "));
  console.warn("[Auth] Authentication features will be disabled until these are configured.");
}

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;

try {
  if (missingKeys.length === 0) {
    app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
    console.log("[Auth] Firebase initialized successfully for project:", firebaseConfig.projectId);
  }
} catch (error) {
  console.error("[Auth] Firebase initialization failed:", error);
}

export { authInstance as auth };
