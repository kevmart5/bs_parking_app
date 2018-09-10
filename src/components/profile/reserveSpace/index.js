import React from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getReserveSpace, releaseParkingSpace } from "../../../redux/actionsCreators/spaces";

class ReserveSpace extends React.Component {
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
    const userId = JSON.parse(localStorage.getItem("user")).id;
    await this.props.getReserveSpace(userId);
  }

  async componentDidUpdate (prevProps) {
    if(this.props.releaseSpace !== prevProps.releaseSpace){
      if(this.props.releaseSpace._id !== undefined){
       await this.setState({
          actionSuccess: true,
          actionError: false
        })
      }else{
        await this.setState({
          actionSuccess: false,
          actionError: true
        })
      }
    }
  }

  releaseSpace = () => {
    const spaceCode = {
      code: this.props.reserveSpace.code
    }
    this.props.releaseParkingSpace(spaceCode);
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  render() {
    console.log(this.props);
    if (
      this.props.reserveSpace === undefined ||
      this.props.reserveSpace.length === 0
    ) {
      return "";
    } else {
      return (
        <React.Fragment>
          <div className="reserved-space__container">
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
            <div className="row">
              <div className="col-md-12">
                {
                  !this.state.actionSuccess ? (
                    <div className="reserved-space__button-container">
                      <button 
                        className="btn btn-primary btn__release-space"
                        onClick={this.releaseSpace}>
                        Release this parking space
                      </button>
                    </div>
                  ): ('')
                }
              </div>            
            </div>

            <div className="row">
              <div className="col-md-12">
                {this.state.actionSuccess ? (
                  <div className="row">
                    <div className="col-md-12">
                      <Alert
                        color="success"
                        className="assign-space__message-success"
                      >
                        The parking space was release correctly!
                      </Alert>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>  
              <div className="col-md-12">
                {this.state.errorAction ? (
                  <div className="row">
                    <div className="col-md-12">
                      <Alert
                        color="danger"
                        className="assign-space__message-success"
                      >
                        An Error ocurred with this action.
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
}

const mapStateToProps = state => {
  return {
    isLoading: state.spaces.isLoading,
    error: state.spaces.error,
    reserveSpace: state.spaces.userSpaceReserve,
    releaseSpace: state.spaces.releaseSpace
  };
};

const mapDispatchToProps = {
  getReserveSpace,
  releaseParkingSpace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReserveSpace);
