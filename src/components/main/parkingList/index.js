import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { getAllSpaces } from "../../../redux/actionsCreators/spaces";
import ParkingInfo from "../parkingInfo/";
import UserReserveSpace from '../userSpaceReserve/';

import "./parking-list-styles.css";

class ParkingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: [],
      reserveSpace: false,
      currentUser: JSON.parse(localStorage.getItem('user'))
    };
  }

  async componentDidMount() {
    const data = await this.props.getAllSpaces();
    if(this.props.spaces !== undefined) {
     const reserve = this.props.spaces.filter(s =>{
        if(s.reserve !== undefined) {
          return s.reserve.id === this.state.currentUser.id;
        }
      })

      if(reserve.length !== 0) {
        await this.setState({
          reserveSpace: true
        })
      }
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.users !== prevProps.users) {
      const userSpaces = this.props.users.filter(s => {
        return s.space !== undefined;
        
      })
      this.setState({spaces: userSpaces})
    }
  }

  render() {
    if (this.props.userLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
    } else {
      return (
        <React.Fragment>
          <div className="col-md-9 parking__container">
            <h1>Available spaces</h1>
            <div className="row">
              { this.props.users.length === 0 ? (
                  <div className="col-md-12">
                    <div className="parking__message">
                      <p className="parking__message-error">
                        There aren't available spaces.
                      </p>
                    </div>
                  </div>
                ) : (
                  this.state.spaces.map(
                    (s, index) =>
                      s.space.available ? (
                        <ParkingInfo spaceInfo={s} key={index} reserveSpace={this.state.reserveSpace}/>
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
    userLoading: state.users.isLoading,
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
