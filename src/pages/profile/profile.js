
import React from 'react';
import { Redirect } from 'react-router';
import GoogleMapReact from 'google-map-react';

import HeaderMain from '../../components/main/header/';
import ProfileInfo from '../../components/profileInfo/';

import './profile-styles.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Profile extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      userId: null,
      isLogged: localStorage.getItem('isLogged'),
      spaces: [],
      lat: 59.95,
      lng: 30.33,
      zoom: 11
    }
 
  }

  async componentDidMount () {
    const currentUser = await JSON.parse(localStorage.getItem('user'));
    try {
      if(currentUser.id !== undefined || currentUser.id !== null) {
        this.setState({userId: currentUser.id});
        this.props.getOneUser(currentUser.id);
      }
    }catch(err){
      alert('You cant go back');
    }

    
  }

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
                <ProfileInfo user={this.props.owner} getUser={this.props.getOneUser}/>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="profile__map-location">
                    <h6>Parking location</h6>

                    <div className="profile__map">
                      <GoogleMapReact
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                      >

                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text={'Kreyser Avrora'}
                        />
                      </GoogleMapReact>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Profile;
