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
                          <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                              />
                            </div>
                            <button type="submit" className="btn btn-primary">
                              Enter
                            </button>
                          </form>
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

export default Header;
