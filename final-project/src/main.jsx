import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyB62wgdoIeE0iB49AjF2IMnoRnAv6bud78",
  authDomain: "proyecto-final-498b5.firebaseapp.com",
  projectId: "proyecto-final-498b5",
  storageBucket: "proyecto-final-498b5.appspot.com",
  messagingSenderId: "48507540824",
  appId: "1:48507540824:web:f933b2cb8c1332545ac12d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
