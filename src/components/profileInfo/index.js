import React from "react";
import { connect } from "react-redux";
import getSpaceByUser from "../../redux/actionsCreators/getSpaceByUser";
import { getReserveSpace } from "../../redux/actionsCreators/spaces";
import SpaceInfo from "../profile/spaceInfo/";
import ReserveSpace from "../../components/profile/reserveSpace/";
import { stat } from "fs";

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      spaces: {}
    };
  }

  async componentDidMount() {
    const userInfo = await JSON.parse(localStorage.getItem("user"));
    const spacesResponse = await this.props.getSpaceByUser(userInfo.id);
    this.setState({ user: userInfo });
    const data = await this.props.getReserveSpace(userInfo.id);
    console.log("Reserve space", this.props.reserveSpace);
  }

  render() {
    const { user } = this.state;
    if (this.props.isLoadingSpaces) {
      return <div class="lds-dual-ring" />;
    } else {
      return (
        <React.Fragment>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="profile__details">
              <h1>Personal details</h1>
              {this.props.user.space === undefined ? (
                <div>
                  <p>
                    You don't have any parking space, if you have one click the
                    button below
                  </p>
                  <button className="btn btn-primary">
                    Search parking spaces
                  </button>
                </div>
              ) : (
                <SpaceInfo space={this.props.user.space} />
              )}
              <div className="row">
                <div className="col-12">
                  <hr />
                  <h6>User information</h6>
                  <form>
                    <div className="form-group">
                      <label htmlFor="userName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        aria-describedby="userName"
                        value={`${user.name} ${user.lastName}` || ""}
                        disabled={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userEmail">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userEmail"
                        aria-describedby="userEmail"
                        value={user.email || ""}
                        disabled={true}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.oneSpace.isLoading,
    error: state.oneSpace.error,
    space: state.oneSpace.space,
    reserveSpace: state.spaces.userSpaceReserve
  };
};

const mapDispatchToProps = {
  getSpaceByUser,
  getReserveSpace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);
