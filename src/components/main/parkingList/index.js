import React from "react";
import { connect } from "react-redux";
import { getAllSpaces } from "../../../redux/actionsCreators/spaces";
import ParkingInfo from "../parkingInfo/";

import "./parking-list-styles.css";

class ParkingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: []
    };
  }

  async componentDidMount() {
    const allUsers = await this.props.users;
    this.setState({
      spaces: allUsers
    });
  }

  render() {
    console.log("result", this.props.users);
    if (this.props.isLoading) {
      return <div className="lds-dual-ring" />;
    } else {
      return (
        <React.Fragment>
          <div className="col-md-9 parking__container">
            <h1>Availables spaces</h1>
            <div className="row">
              {this.props.users.length === 0 ? (
                <div className="col-md-12">
                  <div className="parking__message">
                    <p className="parking__message-error">
                      There aren't available spaces.
                    </p>
                  </div>
                </div>
              ) : (
                this.props.users.map(
                  (space, index) =>
                    space.space.available ? (
                      <ParkingInfo spaceInfo={space} key={index} />
                    ) : (
                      ""
                    )
                )
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    spaces: state.spaces.spaces,
    isLoading: state.spaces.isLoading,
    error: state.spaces.error,
    users: state.users.users
  };
};

const mapDispatchToProps = {
  getAllSpaces
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingList);
