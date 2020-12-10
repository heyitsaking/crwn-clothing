import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChoa7S3QCtssvC7uCL9eRHjtX6DLtod1o",
  authDomain: "crwn-db-5c8ae.firebaseapp.com",
  projectId: "crwn-db-5c8ae",
  storageBucket: "crwn-db-5c8ae.appspot.com",
  messagingSenderId: "311363509803",
  appId: "1:311363509803:web:43689e9a6974197b7a946e",
  measurementId: "G-C01NDEV6F4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
