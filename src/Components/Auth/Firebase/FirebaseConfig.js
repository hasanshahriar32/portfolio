// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALTIML8Y52eAzsUNVPy5QAgltEzYPHjE",
  authDomain: "shahriar-hasan.firebaseapp.com",
  projectId: "shahriar-hasan",
  storageBucket: "shahriar-hasan.appspot.com",
  messagingSenderId: "57597067072",
  appId: "1:57597067072:web:255041500249162d1284a5",
  measurementId: "G-DVX7KVS8X4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
