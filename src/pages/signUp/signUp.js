import React from "react";
import { Redirect } from "react-router";
import "./signUp-styles.css";

import SideBanner from "../../components/signUp/sideBanner/";
import SignUpForm from "../../components/signUp/signUpForm/";

class SignUp extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      isLogged: localStorage.getItem('isLogged')
    }
 
  }

  submit = values => {
    const newUser = {
      name: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.confirmation,
      admin: false
    };
    console.log(newUser);
    this.props.userSignUp(newUser);
  }

  componentDidUpdate(prevProps) {
    if (this.props.newUser !== prevProps.newUser) {
      this.setState({isLogged: true});
      localStorage.setItem('isLogged', true);
      localStorage.setItem('user', JSON.stringify(this.props.newUser));
    }
  }

  render() {
    if(this.state.isLogged) {
      return <Redirect to={'/home'} /> 
    }else {
      return (
        <React.Fragment>
          <div className="signUp__background">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form__container">
                    <h2 className="form__title text-center">Sign up form</h2>
                    <SignUpForm onSubmit={this.submit} />
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

export default SignUp;
