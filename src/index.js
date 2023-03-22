import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from './App';
import './style.scss'
import store from './redux/store';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./globals/authConfig";

console.log(process.env.environment)
// import './main.css'
const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  
   
      <MsalProvider instance={msalInstance}>
     
        <Provider store={store}>
       
          <BrowserRouter>
         
            <App />
         
          </BrowserRouter>
        
      </Provider>
    
    </MsalProvider>

  // </React.StrictMode>
);
