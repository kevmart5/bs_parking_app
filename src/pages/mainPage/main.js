import React from 'react';
import { Redirect } from "react-router";
import HeaderMain from '../../components/main/header/';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: localStorage.getItem('isLogged')
    }
  }

  render () {
    if(!this.state.isLogged) {
      return (
      <Redirect to={'/'} />
      );
    }else {
      return (
        <React.Fragment>
          <HeaderMain />
        </React.Fragment>
      )
    }
  }
}

export default Main;