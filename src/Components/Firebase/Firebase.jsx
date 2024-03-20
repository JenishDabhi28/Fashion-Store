
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrBNhb4oBuMR_Z-YdO-eNBqQWW-WbOANE",
  authDomain: "clothes-website-cb638.firebaseapp.com",
  projectId: "clothes-website-cb638",
  storageBucket: "clothes-website-cb638.appspot.com",
  messagingSenderId: "575259791356",
  appId: "1:575259791356:web:3b9ac6505d251b4913ac79",
  measurementId: "G-MGXY7YXTQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
export {app,auth};