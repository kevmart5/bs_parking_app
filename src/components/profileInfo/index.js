import React from "react";
import { connect } from 'react-redux';
import getSpaceByUser from '../../redux/actionsCreators/getSpaceByUser'
import SpaceInfo from '../profile/spaceInfo/';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      spaces: {}
    }

  }

  async componentDidMount () {
    const userInfo = await JSON.parse(localStorage.getItem('user'));
    const spacesResponse = await this.props.getSpaceByUser(userInfo.id);
    this.setState({user: userInfo});
    
  }

  render() {
    const { user } = this.state
    console.log(this.props.space)

    if(this.props.isLoadingSpaces) {
      return <p>Loading...</p>
    }else {
      return (
        <React.Fragment>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="profile__details">
              <h1>Personal details</h1>
                <SpaceInfo />
                <div className="row">
                  <div className="col-12">
                    <p>Name: {user.name} {user.lastName}</p>
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
    space: state.oneSpace.space
  }
}

const mapDispatchToProps = {
  getSpaceByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
