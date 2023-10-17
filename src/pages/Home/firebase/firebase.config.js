// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUjAzUxlGy6x3rUIq-NR77Vc9RkN-xx4",
  authDomain: "car-services-cf80f.firebaseapp.com",
  projectId: "car-services-cf80f",
  storageBucket: "car-services-cf80f.appspot.com",
  messagingSenderId: "314584709376",
  appId: "1:314584709376:web:fa7cf9cc4c6f6112fcdbe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth