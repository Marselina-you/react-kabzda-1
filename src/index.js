import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import state, { subscribe } from './redux/state';
//import  { addMessage, addPost, updateMessage, updateNewText } from './redux/state';
import store from './redux/stateMy';



//import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerenderEntireTree = (state) => {
    root.render(
   
        <App state={state} addPost={store.addPost.bind(store)} updateNewText={ store.updateNewText.bind(store) } addMessage={ store.addMessage.bind(store) } updateNewMessage={store.updateMessage.bind(store)} />
      
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

  








