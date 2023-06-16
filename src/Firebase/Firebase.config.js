import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD08GtMpp6zVCIhwGvQ0PL61TWaByNXkLA",
  authDomain: "uw-app-e8eff.firebaseapp.com",
  projectId: "uw-app-e8eff",
  storageBucket: "uw-app-e8eff.appspot.com",
  messagingSenderId: "701035644728",
  appId: "1:701035644728:web:0e61f82c0cff700472a3cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


