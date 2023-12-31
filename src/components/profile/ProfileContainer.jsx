import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getProfileUsers, setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
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
      
      let profileId = this.props.router.params.userId;
      if (!profileId) {
        profileId = 2;
    }
      this.props.getProfileUsers(profileId);
    }
    render() {
     
        return (
           <Profile {...this.props } profile={this.props.profile}/>
        );
    }
    
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  
});




export default compose(
  connect(mapStateToProps, {setUserProfile, getProfileUsers}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);