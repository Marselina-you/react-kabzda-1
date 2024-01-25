import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../components/login/Login';
import Music from '../components/music/Music';
import News from '../components/news/News';
//import ProfileContainer from '../components/profile/ProfileContainer';
import Settings from '../components/settings/Settings';
import UsersContainer from '../components/users/UsersContainer';
import { ROUTES } from '../utils/routes';
const DialogsContainer = React.lazy(() => import('../components/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('../components/profile/ProfileContainer'))




const MyRoutes = () => {
    return (
       <Routes>
        <Route exact path={ROUTES.DIALOGS} element={<DialogsContainer />} />
      <Route path={ROUTES.PROFILE_USER} element={<ProfileContainer />}/>
      <Route path={ROUTES.PROFILE} element={<ProfileContainer />}/>
      <Route path={ROUTES.USERS} element={<UsersContainer pageTitle={"samyrays"}/>}/>
      <Route path={ROUTES.NEWS} element={<News/>}/>
      <Route path={ROUTES.MUSIC} element={<Music/>}/>
      <Route path={ROUTES.SETTINGS} element={<Settings/>}/>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}/>
      <Route path={ROUTES.HOME} element={<ProfileContainer />}/>
       </Routes>
    );
};



export default MyRoutes;