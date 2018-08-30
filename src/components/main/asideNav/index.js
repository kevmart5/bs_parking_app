import React from 'react';
import { Redirect } from "react-router";
import './aside-styles.css'

class AsideNavigation extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <React.Fragment>  
        <div className="col-md-3">
          <div className="aside__navigation">
            <nav>
              <ul className="aside__navigation-list">
                <li className="aside__list-element">Parking spaces</li>
                <li className="aside__list-element">Reserve</li>
                <li className="aside__list-element">Profile</li>
                <li className="aside__list-element">Log out</li>
              </ul>
            </nav>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AsideNavigation;