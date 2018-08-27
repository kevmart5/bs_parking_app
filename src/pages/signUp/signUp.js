import React from 'react';

import SideBanner from '../../components/signUp/sideBanner/';
import ContactForm from '../../components/signUp/signUpForm/';

class SignUp extends React.Component {

  submit = values => {
    console.log(values)
  }

  componentDidMount() {
    console.log(this.props.getAllUsers());
  }

  render () {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <ContactForm  onSubmit={this.submit}/>
            </div>
          </div> 
        </div>
      </React.Fragment>
    )
  }
}

export default SignUp;