import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { ProfileType } from '../types/types';
import { getProfileUsers, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { AppStateType } from '../../redux/redux-store';
import Profile from './Profile';


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getProfileUsers: (profileId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    
}

type PathParamsType = {
    userId: string
    router: any
    history: any
}

type PropsType = MapPropsType & DispatchPropsType & PathParamsType;

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: PropsType) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      useEffect(() => {
        if(!props.isAuth)
         {
          navigate("/login")
        }
      }, [props.isAuth, navigate]);



      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
  
class ProfileContainer extends React.Component<PropsType> {
refreshProfile() {
  //debugger;
  let profileId = this.props.router.params.userId;
  if (!profileId) {
    profileId = this.props.authorizedUserId;
    if (!profileId) {
      // todo: may be replace push with Redirect??
      this.props.history.push("/login");
  }
    //profileId = 2;
    
}
  this.props.getProfileUsers(profileId);
  this.props.getStatus(profileId);
}
    componentDidMount() {
    this.refreshProfile();
 
      
    }
    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
      if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }}
    componentWillUnmount(): void {
    }
    render() {
     
        return (
           <Profile {...this.props }
           isOwner = {!this.props.router.params.userId} 
           profile={this.props.profile} 
           status={this.props.status} 
           updateStatus={this.props.updateStatus}
           savePhoto = {this.props.savePhoto}/>
        );
    }
    
};

let mapStateToProps = (state: AppStateType) => ({
 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  
});

export default compose<React.ComponentType>(
  connect(mapStateToProps,  {getProfileUsers, getStatus, updateStatus, savePhoto,saveProfile}),
  withRouter
  //withAuthRedirect
)(ProfileContainer);
