import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Music from './components/music/Music';

import News from './components/news/News';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import Sidebar from './components/sidebar/Sidebar';






const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
   <Header/>
   <Sidebar />
  
  <div className='app-wrapper-content'>
  {/** <Profile/>state={props.store.state.pageMessages}pageMessages={props.store.pageMessages.newMessageText}*/}
    <Routes>
    <Route exact path='/dialogs' element={<Dialogs  state={props.state.pageMessages} updateNewMessage={props.updateNewMessage} 
    addMessage={props.addMessage} />} />
    <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} 
    updateNewText={props.updateNewText}/>}/>
   
    <Route path='/news' element={<News/>}/>
    <Route path='/music' element={<Music/>}/>
    <Route path='/settings' element={<Settings/>}/>

  
    </Routes>
    
    </div>
   
     </div>
    </BrowserRouter>
  );
}


export default App;
