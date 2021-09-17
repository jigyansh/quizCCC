
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAj5J8Df-UQtKYpeuXCUkYkCzR1KJh4TfU",
    authDomain: "cccproject-749de.firebaseapp.com",
    projectId: "cccproject-749de",
    storageBucket: "cccproject-749de.appspot.com",
    messagingSenderId: "201344661422",
    appId: "1:201344661422:web:ec89e88c39c58581123a3f",
    measurementId: "G-SBXK56QKZ0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database;
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
