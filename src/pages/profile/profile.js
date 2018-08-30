
import React from "react";
import { Redirect } from "react-router";

import HeaderMain from "../../components/main/header/";

class Profile extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      isLogged: localStorage.getItem('isLogged')
    }
 
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
          <p>PEpe</p>
        </React.Fragment>
      );
    }
  }
}

export default Profile;
