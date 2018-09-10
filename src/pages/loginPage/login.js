import React from "react";
import { Redirect } from "react-router";
import LoginForm from "../../components/login/loginForm";
import "./login-page-styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      failLoggin: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.login !== prevProps.login) {
      if (this.props.login.name !== undefined) {
        this.setState({ 
          isLogged: true,
          failLoggin: false
         });
        localStorage.setItem('user', JSON.stringify(this.props.login))
        localStorage.setItem('isLogged', true);
      } else {
        this.setState({ 
          isLogged: false,
          failLoggin: true
         });
      }
    }
  }

  submit = values => {
    try {
      this.props.userLogin(values);
    } catch (err) {
      alert(err);
    }
  };

  render() {
    if (this.state.isLogged) {
      return <Redirect to={"/profile"} />;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="login__main-container">
                  <h1 className="text-center login__logo">Login</h1>
                  <LoginForm onSubmit={this.submit} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {
                  this.state.failLoggin ? (
                    <div className="text-center">
                      <p className="displayErrors">Email or password incorrect.</p>
                    </div>
                  ) : ''
                }
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Login;
