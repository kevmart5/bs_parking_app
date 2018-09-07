import React from "react";
import { Link } from "react-router-dom";
import './navigation-styles.css';

function Navigation() {
  return (
    <React.Fragment>
      <nav className="header__navigation-principal">
        <ul className="navigation__list">
          <li className="navigation__list-item item-one">
            <Link to={'/'} className="navigation__list-text">Home</Link>
          </li>
          <li className="navigation__list-item item-two">
            <Link to={'/login-page'} className="navigation__list-text">Login</Link>
          </li>
          <li className="navigation__list-item item-three">
            <Link to={'/signUp'} className="navigation__list-text">Sign up</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
