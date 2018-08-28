import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="emailAddress">Email address</label>
        <Field
          name="email"
          component="input"
          placeholder="Enter email"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="form-group">
        <label htmlFor="userPassword">
          Password
        </label>
        <Field name="password" component="input" type="password" className="form-control" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;
