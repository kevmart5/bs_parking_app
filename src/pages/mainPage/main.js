import React from "react";
import { Redirect } from "react-router";
import HeaderMain from "../../components/main/header/";
import ParkingList from "../../components/main/parkingList/";
import AsideNavigation from '../../components/main/asideNav/';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: localStorage.getItem("isLogged")
    };
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
              <ParkingList />
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Main;
