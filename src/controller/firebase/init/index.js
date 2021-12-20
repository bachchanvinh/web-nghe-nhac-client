import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAZ90ilApIRIFz6qH8DEnveJSz8xLYJv4Y",
    authDomain: "web-nghe-nhac-8e568.firebaseapp.com",
    projectId: "web-nghe-nhac-8e568",
    storageBucket: "web-nghe-nhac-8e568.appspot.com",
    messagingSenderId: "591840580691",
    appId: "1:591840580691:web:34c41a6220a08e094f22a6",
    measurementId: "${config.measurementId}"
  };
initializeApp(firebaseConfig)
 const db= firestore.getFirestore()
 export default db


