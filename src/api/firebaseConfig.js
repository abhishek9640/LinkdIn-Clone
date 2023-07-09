import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAWt_5yKz5mNsO-tZBechlGBo31dse-Y8",
  authDomain: "linkedin-clone-4b3a1.firebaseapp.com",
  projectId: "linkedin-clone-4b3a1",
  storageBucket: "linkedin-clone-4b3a1.appspot.com",
  messagingSenderId: "330620532346",
  appId: "1:330620532346:web:4d70d97bf57c1ab8caedc3",
  measurementId: "G-ZN0P9M5Z4F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
export { auth, app, firestore };
