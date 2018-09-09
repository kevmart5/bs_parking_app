import React from "react";
import { connect } from "react-redux";
import getSpaceByUser from "../../redux/actionsCreators/getSpaceByUser";
import { getReserveSpace } from "../../redux/actionsCreators/spaces";
import { retakeParkingSpace } from '../../redux/actionsCreators/users';
import SpaceInfo from "../profile/spaceInfo/";
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

  retakeSpace = () => {
    const userId = {
      id: JSON.parse(localStorage.getItem("user")).id
    };
    this.props.retakeParkingSpace(userId);
  }

  componentDidUpdate (prevProps) {
    if(this.props.retakeSpace !== prevProps.retakeSpace) {
      window.location.reload();
    }
  }

  render() {
    const { user } = this.state;
    console.log('Fuk', this.props.user.space);
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

              {
                this.props.user.space === undefined ? (
                  ''
                ) : (

                  this.props.user.space.available ? (
                    <div className="row">
                      <div className="col-12">
                        <button className="btn btn-primary" onClick={this.retakeSpace}>
                          Retake my space
                        </button>
                      </div>
                    </div>
                  ) : ('')
                )
              }
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
    reserveSpace: state.spaces.userSpaceReserve,
    retakeSpace: state.users.retakeSpace
  };
};

const mapDispatchToProps = {
  getSpaceByUser,
  getReserveSpace,
  retakeParkingSpace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);
