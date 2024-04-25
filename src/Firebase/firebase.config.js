// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5zO2ozBV9h9-kIo087ESoxQsKNGuyZeE",
  authDomain: "b9a10-assignment.firebaseapp.com",
  projectId: "b9a10-assignment",
  storageBucket: "b9a10-assignment.appspot.com",
  messagingSenderId: "914091168387",
  appId: "1:914091168387:web:17e9b8b18925c2d8af81b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
