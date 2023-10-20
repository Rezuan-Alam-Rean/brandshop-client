// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcWxxYrFAQnHVSxORV-1NM9yv3iOSm1gE",
  authDomain: "brands-shop.firebaseapp.com",
  projectId: "brands-shop",
  storageBucket: "brands-shop.appspot.com",
  messagingSenderId: "151401431926",
  appId: "1:151401431926:web:385431c1dd90822af93057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app