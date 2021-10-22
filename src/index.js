import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1-dr2vE72mHd2Qz4Jo3V_b8UyS1nS36o",
  authDomain: "ics-wireframe.firebaseapp.com",
  projectId: "ics-wireframe",
  storageBucket: "ics-wireframe.appspot.com",
  messagingSenderId: "45147560215",
  appId: "1:45147560215:web:1ffb5127981adddf62ff52",
  measurementId: "G-HDV4HY9F59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

