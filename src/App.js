import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Header from './components/header/Header';
import Music from './components/music/Music';
import News from './components/news/News';
import ProfileContainer from './components/profile/ProfileContainer';
import Settings from './components/settings/Settings';
import Sidebar from './components/sidebar/Sidebar';
import UsersContainer from './components/users/UsersContainer';






const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
   <Header/>
   <Sidebar />
  
  <div className='app-wrapper-content'>
 
    <Routes>
    <Route exact path='/dialogs' element={<DialogsContainer />} />
    <Route path='/profile/:userId?' element={<ProfileContainer />}/>
    <Route path='/profile/' element={<ProfileContainer />}/>
    <Route path='/users' element={<UsersContainer />}/>
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
