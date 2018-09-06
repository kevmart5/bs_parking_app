
import React from 'react';
import { Redirect } from 'react-router';

import HeaderMain from '../../components/main/header/';
import SpaceDetails from '../../components/reserveSpaces/spaceInfo/';

import './reserve-spaces-styles.css';

class ReserveSpaces extends React.Component {

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
    const { space } = this.props.location.state;
    if(!this.state.isLogged) {
      return <Redirect to={'/home'} /> 
    }else {
      return (
        <React.Fragment>
          <HeaderMain />
          <div>
            <SpaceDetails spaceInfo={space}/>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ReserveSpaces;