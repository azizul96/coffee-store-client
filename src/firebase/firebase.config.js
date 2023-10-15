// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ODn_LJcerStJBVeM8ioogMq3uk7A_d4",
  authDomain: "coffee-store-25e20.firebaseapp.com",
  projectId: "coffee-store-25e20",
  storageBucket: "coffee-store-25e20.appspot.com",
  messagingSenderId: "221557459205",
  appId: "1:221557459205:web:df039cc8f3616ded5e0f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;