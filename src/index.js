import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.ICS_WIREFRAME_FIREBASE_APIKEY,
  authDomain: process.env.ICS_WIREFRAME_FIREBASE_AUTHDOMAIN,
  projectId: process.env.ICS_WIREFRAME_FIREBASE_PORJECTID,
  storageBucket: process.env.ICS_WIREFRAME_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.ICS_WIREFRAME_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.ICS_WIREFRAME_FIREBASE_APPID,
  measurementId: process.env.ICS_WIREFRAME_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

