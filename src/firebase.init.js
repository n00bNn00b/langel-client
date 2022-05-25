// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTLeSWJVcDckMVKnbm24OOu8S4XBcDX3w",
  authDomain: "langeltools.firebaseapp.com",
  projectId: "langeltools",
  storageBucket: "langeltools.appspot.com",
  messagingSenderId: "1036047829356",
  appId: "1:1036047829356:web:6b5829f1b8fc5206718b49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
