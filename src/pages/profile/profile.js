
import React from 'react';
import { Redirect } from 'react-router';

import HeaderMain from '../../components/main/header/';
import ProfileInfo from '../../components/profileInfo/';

import './profile-styles.css';

class Profile extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      userId: null,
      isLogged: localStorage.getItem('isLogged'),
      spaces: []
    }
 
  }

  async componentDidMount () {
    const currentUser = await JSON.parse(localStorage.getItem('user'));
    this.setState({userId: currentUser.id});
  }

  /*componentDidUpdate(prevProps) {
    if (this.props.newUser !== prevProps.newUser) {
      this.setState({isLogged: true});
      localStorage.setItem('isLogged', true);
      localStorage.setItem('user', JSON.stringify(this.props.newUser));
    }
  }*/

  render() {  
    if(!this.state.isLogged) {
      return <Redirect to={'/home'} /> 
    }else {
      return (
        <React.Fragment>
          <HeaderMain />
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <ProfileInfo user={this.state.userId} getUser={this.props.getOneUser}/>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Profile;
