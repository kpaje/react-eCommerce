import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAElqK-i6zlAKp3yBrmGS7uGIt_yuWI4yA",
  authDomain: "react-ecommerce-86a2a.firebaseapp.com",
  databaseURL: "https://react-ecommerce-86a2a.firebaseio.com",
  projectId: "react-ecommerce-86a2a",
  storageBucket: "",
  messagingSenderId: "798622707328",
  appId: "1:798622707328:web:2082956ffb0b20c4"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
