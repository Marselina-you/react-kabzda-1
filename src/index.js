import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import state, { subscribe } from './redux/state';
//import  { addMessage, addPost, updateMessage, updateNewText } from './redux/state';
import store from './redux/redux-store';
import { Provider } from 'react-redux';




//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
 
    
    root.render(
   <Provider store={store}>
 <App  />
   </Provider>
       
      
    );

//ServiceWorker.unregister();

  








