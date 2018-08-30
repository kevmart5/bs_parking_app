import React from 'react';
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import './navigation-styles.css';

class MainNavigation extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      redirect: false
    }

    this.logout = this.logout.bind(this);
  }

  logout = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('user');
    this.setState({redirect: true});
  }

  render () {
    if(this.state.redirect) {
      return (
        <Redirect to={'/'} />
      );
    }
    else{
      return (
        <React.Fragment>
          <nav>
            <ul className="main__navigation-list">
              <Link to={'/home'} className="main__list-element">Parking Spaces</Link>
              <Link to={'/home'} className="main__list-element">Reserve</Link>
              <Link to={'/home'} className="main__list-element">Profile</Link>
              <Link to={''} onClick={this.logout} className="main__list-element">Logout</Link>
            </ul>
          </nav>
        </React.Fragment>
      );
    }
  }
}

export default MainNavigation;