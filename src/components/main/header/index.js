import React from 'react';
import './main-header-styles.css';
import MainNavigation from '../mainNavigation/';
import MenuDropDown from '../mainNavigation/dropDown';

class HeaderMain extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="main-header__background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-header__menu">
                  <MenuDropDown />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </React.Fragment>
    )
  }
}

export default HeaderMain;