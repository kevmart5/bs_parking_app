import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import userLogin from "../../redux/actionsCreators/login";
import Navigation from "../navigaton/";
import CompanyLogo from "../companyLogo/";
import LoginForm from "../login/loginForm/";

import "./header-styles.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.login !== prevProps.login) {
      if (this.props.login.name !== undefined) {
        this.setState({ isLogged: true });
        localStorage.setItem('user', JSON.stringify(this.props.login))
        localStorage.setItem('isLogged', true);
      } else {
        this.setState({ isLogged: false });
        alert(`Fail login`);
      }
    }
  }

  submit = values => {
    this.props.userLogin(values);
  };

  render() {
    if (this.state.isLogged) {
      return <Redirect to={"/home"} />;
    } else {
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
                      <button className="header__button-start">
                        Start here
                      </button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="header__login">
                            <div className="header__login-container">
                              <h3 className="text-center">Login</h3>
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
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
    login: state.users.login
  };
};

export default connect(
  mapStateToProps,
  { userLogin }
)(Header);
