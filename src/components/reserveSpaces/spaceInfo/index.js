import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { reserveSpace } from "../../../redux/actionsCreators/spaces";

class SpaceDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialDate: "",
      finalDate: "",
      successAction: false,
      errorAction: false
    };

    this.goBack = this.goBack.bind(this);
  }

  async componentDidMount() {
    const initial = new Date(this.props.spaceInfo.space.initialDate)
      .toISOString()
      .split("T")[0];
    const final = new Date(this.props.spaceInfo.space.finalDate)
      .toISOString()
      .split("T")[0];
    this.setState({
      initialDate: initial,
      finalDate: final,
      successAction: false,
      errorAction: false
    });
  }

  async componentDidUpdate(prevProps) {
    if(this.props.reserve !== prevProps.reserve){
      if(this.props.reserve._id !== undefined) {
        await this.setState({
          successAction: true,
          errorAction: false
        })
      }else{
        await this.setState({
          successAction: false,
          errorAction: true
        })
      }
    }
  }


  goBack() {
    return <Redirect to={"/home"} />;
  }

  reserve = () => {
    const reserveRequest = {
      user: JSON.parse(localStorage.getItem("user")),
      space: this.props.spaceInfo.space
    };
    console.log(reserveRequest);
    this.props.reserveSpace(reserveRequest);
  };

  render() {
    const { spaceInfo } = this.props;
    console.log("propis", this.props);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="reserve__space-info">
                <h4>Parking space details</h4>
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      You're about to reserve this space. Below you can find the
                      space information and the owner email
                    </p>
                    <p>When you're ready, just click the button Reserve</p>
                  </div>
                </div>
                <div className="reserve__space-details">
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        Code:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.space.code}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        Available:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.space.available ? "Yes" : "No"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        Owner:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.name} {spaceInfo.lastName}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        Email:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.email}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        This are the dates availables for this parking space
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Initial date:{" "}
                        <span className="reserve__space-highlight">
                          {this.state.initialDate}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p>
                        Final date:{" "}
                        <span className="reserve__space-highlight">
                          {this.state.finalDate}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reserve__buttons-section">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-end reserve__buttons">
                      {
                        !this.state.successAction ? (
                          <button
                            className="btn reserve__btn-confirm"
                            onClick={this.reserve}
                          >
                            Reserve this space
                          </button>
                        ) : ''
                      }
                        <Link
                          className="btn reserve__button-goBack"
                          to={"/home"}
                        >
                          Go back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {this.state.successAction ? (
                <div className="row">
                  <div className="col-md-12">
                    <Alert
                      color="success"
                      className="assign-space__message-success"
                    >
                      Reservation done correctly!
                    </Alert>
                  </div>
                </div>
              ) : (
                ""
              )}

              {this.state.errorAction ? (
                <div className="row">
                  <div className="col-md-12">
                    <Alert
                      color="danger"
                      className="assign-space__message-success"
                    >
                      Couldn't create the reservation of this space!
                    </Alert>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.spaces.isLoading,
    error: state.spaces.error,
    reserve: state.spaces.reserveSpace
  };
};

const mapDispatchToProps = {
  reserveSpace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceDetails);
