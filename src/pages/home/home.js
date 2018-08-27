import React from 'react';
import Header from '../../components/header/';

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.getAllUsers());
  }

  render () {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}

export default Home;