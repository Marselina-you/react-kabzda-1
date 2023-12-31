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
   <Sidebar state={props.state.pageMessages}/>
  
  <div className='app-wrapper-content'>
  {/** <Profile/>*/}
    <Routes>
    <Route exact path='/dialogs' element={<Dialogs state={props.state.pageMessages}/> }/>
    <Route path='/profile' element={<Profile posts={props.state.posts}/>}/>
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
