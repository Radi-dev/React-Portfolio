import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey, //your apiKey here
  authDomain: process.env.REACT_APP_authDomain, //your authDomain
  databaseURL: process.env.REACT_APP_databaseURL, //your databaseURL
  projectId: process.env.REACT_APP_projectId, //...
  storageBucket: process.env.REACT_APP_storageBucket, //...
  messagingSenderId: process.env.REACT_APP_messagingSenderId, //...
  appId: process.env.REACT_APP_appId, //...
  measurementId: process.env.REACT_APP_measurementId, //...
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
