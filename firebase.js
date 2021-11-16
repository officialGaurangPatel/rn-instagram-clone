import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

firebase.initializeApp({
    apiKey: "AIzaSyBQxUyo-YhnlbqthX_WM6jNwhXX_zcmSUE",
    authDomain: "rn-instagram-clone-6effd.firebaseapp.com",
    projectId: "rn-instagram-clone-6effd",
    storageBucket: "rn-instagram-clone-6effd.appspot.com",
    messagingSenderId: "164239475352",
    appId: "1:164239475352:web:de6d8b7625895fc43746ed"
});

// const app = initializeApp(firebaseConfig)
const db = firebase.firestore();

export default db
