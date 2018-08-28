import React from "react";
import "./signUp-styles.css";

import SideBanner from "../../components/signUp/sideBanner/";
import SignUpForm from "../../components/signUp/signUpForm/";

class SignUp extends React.Component {
  submit = values => {
    const newUser = {
      name: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.confirmation
    };
    this.props.userSignUp(newUser);
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="signUp__background">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="form__container">
                  <h2 className="form__title text-center">Sign up form</h2>
                  <SignUpForm onSubmit={this.submit} />
                </div>
              </div>
              <div className="col-md-7">
                <SideBanner />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
