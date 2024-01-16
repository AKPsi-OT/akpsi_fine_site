import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3SDmK7HJnAvPpNUGoHMPSJPZedeNpj0o",
    authDomain: "akspi-fine-site.firebaseapp.com",
    databaseURL: "https://akspi-fine-site-default-rtdb.firebaseio.com",
    projectId: "akspi-fine-site",
    storageBucket: "akspi-fine-site.appspot.com",
    messagingSenderId: "151974152748",
    appId: "1:151974152748:web:59f8714e9e6c5ac8739f89",
    measurementId: "G-ZG86R4EYJG"
  };


  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  
  export { database, auth, googleProvider };