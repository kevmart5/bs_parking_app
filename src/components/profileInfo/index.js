import React from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";
import getSpaceByUser from "../../redux/actionsCreators/getSpaceByUser";
import { getReserveSpace } from "../../redux/actionsCreators/spaces";
import { retakeParkingSpace } from "../../redux/actionsCreators/users";
import SpaceInfo from "../profile/spaceInfo/";
import { stat } from "fs";

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      spaces: {},
      actionSuccess: false,
      actionError: false
    };
  }

  async componentDidMount() {
    const userInfo = await JSON.parse(localStorage.getItem("user"));
    const spacesResponse = await this.props.getSpaceByUser(userInfo.id);
    this.setState({ user: userInfo });
    const data = await this.props.getReserveSpace(userInfo.id);
  }

  retakeSpace = () => {
    const userId = {
      id: JSON.parse(localStorage.getItem("user")).id
    };
    this.props.retakeParkingSpace(userId);
  };

  componentDidUpdate(prevProps) {
    if (this.props.retakeSpace !== prevProps.retakeSpace) {
      if (this.props.retakeSpace._id !== undefined) {
        this.setState({
          actionSuccess: true,
          actionError: false
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        this.setState({
          actionSuccess: false,
          actionError: true
        });
      }
    }
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
                  <Link to={'/home'} className="btn btn-primary">
                    Search parking spaces
                  </Link>
                </div>
              ) : (
                <SpaceInfo space={this.props.user.space} />
              )}

              {this.props.user.space === undefined ? (
                ""
              ) : this.props.user.space.available ? (
                <div className="row">
                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      onClick={this.retakeSpace}
                      disabled={
                        this.state.actionSuccess
                      }
                    >
                      Retake my space
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="row">
                <div className="col-md-12">
                  {this.state.actionSuccess ? (
                    <div className="row">
                      <div className="col-md-12">
                        <Alert
                          color="success"
                          className="assign-space__message-success"
                        >
                          Retake parking space correctly!
                        </Alert>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {this.state.actionError ? (
                    <div className="row">
                      <div className="col-md-12">
                        <Alert
                          color="danger"
                          className="assign-space__message-success"
                        >
                          Something went wrong with this action!
                        </Alert>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

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
