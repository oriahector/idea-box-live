import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC45Ejx293mDOa8bPd-5UZKHeG4jxuEe3I",
  authDomain: "ideaboxlive-2628a.firebaseapp.com",
  projectId: "ideaboxlive-2628a",
  storageBucket: "ideaboxlive-2628a.appspot.com",
  messagingSenderId: "679587912105",
  appId: "1:679587912105:web:503a2fc9b265753d34ccb8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
