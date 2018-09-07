import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSpaces } from '../../../redux/actionsCreators/spaces';

class UserReserveSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      space: {}
    }
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="aside__parking-container">
          <h5>Your parking space</h5>
          <p>You have one parking space reserve</p>
          <p>If you want to see the parking space details, click the button below</p>
          <Link to={'/profile'} className="btn btn-primary">
            See space details
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spaces: state.spaces.spaces,
    isLoadingSpaces: state.spaces.isLoading,
    errorSpaces: state.spaces.error,
  };
};

const mapDispatchToProps = {
  getAllSpaces
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReserveSpace);
