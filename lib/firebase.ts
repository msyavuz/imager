// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQSJoTswd0t7ggSrwwYQyKpKJlNVkeknk",
    authDomain: "imager-49a1f.firebaseapp.com",
    projectId: "imager-49a1f",
    storageBucket: "imager-49a1f.appspot.com",
    messagingSenderId: "652772287558",
    appId: "1:652772287558:web:f1a32e437da00b13fc5647",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
