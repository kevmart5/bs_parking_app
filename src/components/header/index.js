import React from "react";
import Navigation from "../navigaton/";
import CompanyLogo from "../companyLogo/";

import "./header-styles.css";

function Header() {
  return (
    <React.Fragment>
      <div className="header__background">
        <div className="header__container">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <CompanyLogo />
              </div>
              <div className="col-md-4">
                <Navigation />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="header__title-container">
                  <div className="title__group">
                    <h3 className="header_principal-title">
                      Search for free parking spaces
                    </h3>
                    <h4 className="header_principal-title">
                      in Toronto, Canada.
                    </h4>
                  </div>
                  <button className="header__button-start">Start here</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header__login">
                  <div className="header__login-container">
                   <h2>Log in</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
