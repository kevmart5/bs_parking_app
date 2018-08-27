import React from "react";
import Navigation from "../navigaton/";
import CompanyLogo from "../companyLogo/";
import LoginForm from "../login/loginForm/";

import "./header-styles.css";

class Header extends React.Component {
  
  submit = values => {
    console.log(values);
  };

  render() {
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
                <div className="col-md-7">
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
                <div className="col-md-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="header__login">
                          <div className="header__login-container">
                            <h3 className="text-center">Log in</h3>
                            <LoginForm onSubmit={this.submit} />
                          </div>
                        </div>
                      </div>
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
}

export default Header;
