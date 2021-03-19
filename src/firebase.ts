import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_APP_DOMAIN",
    projectId: "PID",
    storageBucket: "SB",
    messagingSenderId: "MSI",
    appId: "AID",
    measurementId: "MID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore()
export default db;