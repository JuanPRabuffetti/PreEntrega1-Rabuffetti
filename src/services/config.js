import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-react-e6692.firebaseapp.com",
  projectId: "proyecto-react-e6692",
  storageBucket: "proyecto-react-e6692.appspot.com",
  messagingSenderId: "855675905364",
  appId: "1:855675905364:web:618f9441a0057e2b2714c1",
  measurementId: "G-58YK9VCBL7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)




