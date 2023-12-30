import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import reportWebVitals from './reportWebVitals';
let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Manya" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Ahan" },
  ];
  let messages = [
    { id: 1, content: "hey" },
    { id: 2, content: "hoy" },
    { id: 3, content: "huy" },
    { id: 4, content: "hay" },
    { id: 5, content: "hoooyyyy" },
  ];
  
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <App dialog={dialogs} message={messages}/>
  
);
export default dialogs;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
