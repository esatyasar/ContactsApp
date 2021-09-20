import firebase from "firebase/app";
import "firebase/database";

const devConfig = {
  apiKey: "AIzaSyCJ8TOZ6dzgbGV0y460v4gPefM1WKI26yg",
  authDomain: "contactsapp-14f7a.firebaseapp.com",
  projectId: "contactsapp-14f7a",
  storageBucket: "contactsapp-14f7a.appspot.com",
  messagingSenderId: "892540941182",
  appId: "1:892540941182:web:a5364c7fcc08be7f13392f"
};

const prodConfig = {};

const firebaseConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

firebase.initializeApp(firebaseConfig);

export default firebase;
