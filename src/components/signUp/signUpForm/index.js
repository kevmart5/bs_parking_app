import React from "react";
import { Field, reduxForm } from "redux-form";

let SignUpForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="signUp__form-label">First Name</label>
        <div>
          <Field 
            name="firstName" 
            component="input" 
            type="text" 
            className="form-control"
            id="firstName" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="signUp__form-label">Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="signUp__form-label">Email</label>
        <div>
          <Field name="email" component="input" type="email" className="form-control"/>
        </div>
        
      </div>
      <div className="form-group">
        <label htmlFor="password" className="signUp__form-label">Password</label>
        <div>
          <Field name="password" component="input" type="password" className="form-control"/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="confirmation" className="signUp__form-label">Confirm password</label>
        <div>
          <Field name="confirmation" component="input" type="password" className="form-control"/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign up</button>
    </form>
  );
};

SignUpForm = reduxForm({
  form: "contact"
})(SignUpForm);

export default SignUpForm;
