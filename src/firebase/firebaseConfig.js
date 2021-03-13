import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD01kmNE0Qz2CC8WM3saxRHDqJBPCR0tjY",
  authDomain: "chat-redux-react.firebaseapp.com",
  projectId: "chat-redux-react",
  storageBucket: "chat-redux-react.appspot.com",
  messagingSenderId: "898962500431",
  appId: "1:898962500431:web:f982ad542c43b3d479733a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
