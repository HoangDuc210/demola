import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC2uGRDMnhvofLNUQA4Sm-RACAnoaOmZJA",
    authDomain: "music-of-hoang-147e3.firebaseapp.com",
    projectId: "music-of-hoang-147e3",
    storageBucket: "music-of-hoang-147e3.appspot.com",
    messagingSenderId: "474095240414",
    appId: "1:474095240414:web:e4fc62e4945d90e1dc6e4f",
    measurementId: "G-T68REFX0HN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;