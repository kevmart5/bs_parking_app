import React from 'react';

class SignUp extends React.Component {
  componentDidMount() {
    console.log(this.props.getAllUsers());
  }

  render () {
    return (
      <React.Fragment>
        <p>Hello</p>
      </React.Fragment>
    )
  }
}

export default SignUp;