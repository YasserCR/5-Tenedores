import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfydAuQaEL6X_GYrJRS4mrzFskKlpnZIw",
  authDomain: "tenedores-cdbad.firebaseapp.com",
  databaseURL: "https://tenedores-cdbad.firebaseio.com",
  projectId: "tenedores-cdbad",
  storageBucket: "tenedores-cdbad.appspot.com",
  messagingSenderId: "1031220181715",
  appId: "1:1031220181715:web:e1f81280dbb869722e3226",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
