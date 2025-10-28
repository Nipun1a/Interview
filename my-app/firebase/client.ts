// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj4LCt-Lb_OpSG9QuF8Oa2nbCvdxL6bWQ",
  authDomain: "inter4-bb308.firebaseapp.com",
  projectId: "inter4-bb308",
  storageBucket: "inter4-bb308.firebasestorage.app",
  messagingSenderId: "132694073717",
  appId: "1:132694073717:web:9fdc50f16b0c30beb4733c",
  measurementId: "G-6SCZBYZE11"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
