import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE-k8r8F4II_5rBfTvh6BNzQDku7KE_Gg",
  authDomain: "mental-health-87a9d.firebaseapp.com",
  projectId: "mental-health-87a9d",
  storageBucket: "mental-health-87a9d.firebasestorage.app",
  messagingSenderId: "500649525001",
  appId: "1:500649525001:web:60ff34cd3656aebcbe9dd8",
  measurementId: "G-6EVCYEMBVS"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };