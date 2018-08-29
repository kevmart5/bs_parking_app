import React from 'react';
import './main-header-styles.css';
import MainNavigation from '../mainNavigation/';

class HeaderMain extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="main-header__background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MainNavigation />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HeaderMain;