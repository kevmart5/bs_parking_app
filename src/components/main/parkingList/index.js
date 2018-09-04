import React from "react";
import { connect } from "react-redux";
import { getAllSpaces } from "../../../redux/actionsCreators/spaces";
import ParkingInfo from "../parkingInfo/";

class ParkingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: []
    };
  }

  async componentDidMount() {
    const result = await this.props.getAllSpaces();
    this.setState({
      spaces: this.props.spaces
    });
  }

  render() {
    if (this.props.isLoading) {
      return <div className="lds-dual-ring" />;
    } else {
      return (
        <React.Fragment>
          <div className="col-md-9 parking__container">
            <h1>Availables spaces</h1>
            <div className="row">
              {
                this.props.spaces.length === 0 ? (
                  <p>There aren't available spaces.</p>
                ) : (
                  this.props.spaces.map(
                    (space, index) =>
                      space.available ? (
                        <ParkingInfo space={space} key={index} />
                      ) : (
                        ''
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
    error: state.spaces.error
  };
};

const mapDispatchToProps = {
  getAllSpaces
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingList);
