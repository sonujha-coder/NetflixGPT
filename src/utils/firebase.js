// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNTYBisvG9WFfPdnvPjcz45YRSyKJm0ns",
  authDomain: "netflixgpt-f7553.firebaseapp.com",
  projectId: "netflixgpt-f7553",
  storageBucket: "netflixgpt-f7553.firebasestorage.app",
  messagingSenderId: "895993113016",
  appId: "1:895993113016:web:d74ff9841ab186e1b6074d",
  measurementId: "G-6Q53DGEVSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
