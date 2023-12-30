import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Music from './components/music/Music';
import Nav from './components/nav/Nav';
import News from './components/news/News';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';



const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
   <Header/>
   <Nav/>
  
  <div className='app-wrapper-content'>
  {/** <Profile/>*/}
    <Routes>
    <Route exact path='/dialogs' element={<Dialogs/> }/>
    <Route path='/profile' element={<Profile/>}/>
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
