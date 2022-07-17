
import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyCZYDHDcgGTuvduARFdzSIEhcnsVUf_ZZI",
    authDomain: "disneyplus-clone-82501.firebaseapp.com",
    projectId: "disneyplus-clone-82501",
    storageBucket: "disneyplus-clone-82501.appspot.com",
    messagingSenderId: "927382312583",
    appId: "1:927382312583:web:87dc0c10513b5044c4ca22",
    measurementId: "G-0C9BRZ68Q6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;