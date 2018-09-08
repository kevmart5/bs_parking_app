import React from "react";
import { connect } from "react-redux";
import { getReserveSpace } from "../../../redux/actionsCreators/spaces";

class ReserveSpace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      spaces: {}
    };
  }

  async componentDidMount() {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    await this.props.getReserveSpace(userId);
  }

  render() {
    console.log("props reserve", this.props.reserveSpace);

    if (
      this.props.reserveSpace === undefined ||
      this.props.reserveSpace.length === 0
    ) {
      return "";
    } else {
      return (
        <React.Fragment>
          <div className="reserved-space__container ">
            <div className="row">
              <div className="col-12">
                <h6>Parking space reserved</h6>
                <div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Space code</label>
                    <p className="reserve__text-highlight">
                      {this.props.reserveSpace.code}
                    </p>
                    <small id="emailHelp" className="form-text text-muted">
                      This is the number of the parking space.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">From</label>
                    <p className="reserve__text-highlight">
                      {this.props.reserveSpace.initialDate
                        ? new Date(this.props.reserveSpace.initialDate)
                            .toISOString()
                            .split("T")[0]
                        : ""}
                    </p>
                    <small id="emailHelp" className="form-text text-muted">
                      This is the initial date when the parking space gets free
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">To</label>
                    <p className="reserve__text-highlight">
                      {this.props.reserveSpace.finalDate
                        ? new Date(this.props.reserveSpace.finalDate)
                            .toISOString()
                            .split("T")[0]
                        : ""}
                    </p>
                    <small id="emailHelp" className="form-text text-muted">
                      This is the final date when you have to leave the parking
                      space
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.spaces.isLoading,
    error: state.spaces.error,
    reserveSpace: state.spaces.userSpaceReserve
  };
};

const mapDispatchToProps = {
  getReserveSpace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReserveSpace);
