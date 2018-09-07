
import React from 'react';
import { Redirect } from 'react-router';

import HeaderMain from '../../components/main/header/';
import ParkingSpaces from '../../components/reserve/parkingSpaces/';

import './reserve-styles.css';

class Reserve extends React.Component {

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
    try {
      if(currentUser.id !== undefined || currentUser.id !== null) {
        this.setState({userId: currentUser.id});
        this.props.getAllSpaces();
        this.props.getAllUsers();
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
          <div>
            <div className="container">
              <div className="assign-spaces__container">
                <ParkingSpaces spaces={this.props.spaces} users={this.props.users} />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Reserve;