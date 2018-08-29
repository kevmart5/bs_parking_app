import React from 'react';
import { Link } from "react-router-dom";
import './navigation-styles.css';

class MainNavigation extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav>
          <ul className="main__navigation-list">
            <Link to={'/home'} className="main__list-element">Parking Spaces</Link>
            <Link to={'/home'} className="main__list-element">Reserve</Link>
            <Link to={'/home'} className="main__list-element">Profile</Link>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default MainNavigation;