import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';

import { getProfileUsers, getStatus, updateStatus, savePhoto } from '../../redux/profileReducer';
import Profile from './Profile';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
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
  
class ProfileContainer extends React.Component {
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
    componentDidUpdate(prevProps, prevState) {
      if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }}
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

let mapStateToProps = (state) => ({
 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  
});

export default compose(
  connect(mapStateToProps,  {getProfileUsers, getStatus, updateStatus, savePhoto}),
  withRouter
  //withAuthRedirect
)(ProfileContainer);
