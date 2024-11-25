// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6N-VBXavTVSHbSfPjpZnYx-Ay3HBIEI",
  authDomain: "login-page-705f8.firebaseapp.com",
  projectId: "login-page-705f8",
  storageBucket: "login-page-705f8.appspot.com",
  messagingSenderId: "3200256989",
  appId: "1:3200256989:web:38aac5292fcc0a3d8dc434",
  measurementId: "G-J34EPZBMSR",
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;
