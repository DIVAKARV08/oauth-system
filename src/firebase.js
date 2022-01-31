// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK4gbUFeebG44Y-YegwjJBGKtoOl3drQE",
  authDomain: "auth-system-76be0.firebaseapp.com",
  projectId: "auth-system-76be0",
  storageBucket: "auth-system-76be0.appspot.com",
  messagingSenderId: "791502929793",
  appId: "1:791502929793:web:3841d02483c517ac333280",
  measurementId: "G-SFHC9P50LQ",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { firebaseApp, auth, googleProvider, githubProvider };
