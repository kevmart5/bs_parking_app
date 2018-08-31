import React from "react";

class SpaceInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      spaces: {}
    };
  }

  /*async componentDidMount () {
    const userInfo = await JSON.parse(localStorage.getItem('user'));
    const spacesResponse = await this.props.getSpaceByUser(userInfo.id);
    this.setState({user: userInfo});
    
  }*/

  render() {
    if (this.props.isLoadingSpaces) {
      return <p>Loading...</p>;
    } else {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-12">
              <p>Pepe</p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default SpaceInfo;
