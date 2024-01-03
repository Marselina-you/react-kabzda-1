import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import state, { subscribe } from './redux/state';
//import  { addMessage, addPost, updateMessage, updateNewText } from './redux/state';
import store from './redux/redux-store';
import StoreContext, { Provider } from './StoreContext';



//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (state) => {
    
    root.render(
   <Provider store={store}>
 <App  />
   </Provider>
       
      
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);

});

  








