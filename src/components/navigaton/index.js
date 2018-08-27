import React from "react";
import './navigation-styles.css';

function Navigation() {
  return (
    <React.Fragment>
      <nav className="header__navigation-principal">
        <ul className="navigation__list">
          <li className="navigation__list-item item-one">
            <span className="navigation__list-text">Home</span>
          </li>
          <li className="navigation__list-item item-two">
            <span className="navigation__list-text">Log in</span>
          </li>
          <li className="navigation__list-item item-three">
            <span className="navigation__list-text">Sign up</span>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
