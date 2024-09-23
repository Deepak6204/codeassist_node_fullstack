import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsql3YFoweTiaRZsQzx_-_RDiPeeeGjEA",
  authDomain: "codeassist-aaa95.firebaseapp.com",
  projectId: "codeassist-aaa95",
  storageBucket: "codeassist-aaa95.appspot.com",
  messagingSenderId: "670961398862",
  appId: "1:670961398862:web:9eb5c979414e97a5c47f1f",
  measurementId: "G-91RDZ25CS8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };