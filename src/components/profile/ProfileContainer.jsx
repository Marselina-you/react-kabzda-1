import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfileUsers, setUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
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

    componentDidMount() {
      //debugger;
      let profileId = this.props.router.params.userId;
      if (!profileId) {
        profileId = this.props.authorizedUserId;
        //profileId = 2;
        
    }
      this.props.getProfileUsers(profileId);
      this.props.getStatus(profileId);
 
      
    }
    render() {
     
        return (
           <Profile {...this.props } profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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
  connect(mapStateToProps,  {setUserProfile, getProfileUsers, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
