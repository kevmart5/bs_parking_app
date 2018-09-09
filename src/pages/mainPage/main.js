import React from "react";
import { Redirect } from "react-router";
import HeaderMain from "../../components/main/header/";
import ParkingList from "../../components/main/parkingList/";
import AsideNavigation from '../../components/main/asideNav/';
import Footer from '../../components/footer/';

import './main-page-styles.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: localStorage.getItem("isLogged")
    };
  }

  async componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllSpaces();
  }

  componentDidUpdate(prevProps) {
    if(this.props.reload !== prevProps.reload){
      window.location.reload();
    }
  }

  render() {
    if (!this.state.isLogged) {
      return <Redirect to={"/"} />;
    } else {
      return (
        <React.Fragment>
          <HeaderMain />
          <div className="container-fluid">
            <div className="row">
              <ParkingList users={this.props.users} />
              <AsideNavigation spaces={this.props.spaces}/>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default Main;
