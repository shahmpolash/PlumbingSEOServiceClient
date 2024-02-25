// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwWzAN72PcfB4xejLvaS8WV1Kcb-Yf27g",
  authDomain: "plumbingseoservice.firebaseapp.com",
  projectId: "plumbingseoservice",
  storageBucket: "plumbingseoservice.appspot.com",
  messagingSenderId: "602739422279",
  appId: "1:602739422279:web:1d7b844ddf9619ad9fad62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;