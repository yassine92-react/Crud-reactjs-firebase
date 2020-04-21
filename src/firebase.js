import firebase from "firebase/app"
import "firebase/firestore"

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCHHAfWJgMsgEHcMF_LxsPE3GuUOVstvf0",
    authDomain: "just-clock-it-b5c8e.firebaseapp.com",
    databaseURL: "https://just-clock-it-b5c8e.firebaseio.com",
    projectId: "just-clock-it-b5c8e",
    storageBucket: "just-clock-it-b5c8e.appspot.com",
    messagingSenderId: "177984136052",
    appId: "1:177984136052:web:c6f1f22f4bc48a28188221",
    measurementId: "G-HPSWNP4D2P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase