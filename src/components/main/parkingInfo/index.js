import React from "react";
import { connect } from "react-redux";
import getOneUser from "../../../redux/actionsCreators/getOneUser";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class ParkingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const owner = this.props.space.owner;
    if (owner !== undefined) {
      const result = await this.props.getOneUser(owner);
    }
  }

  render() {
    const { space } = this.props;
    return (
      <React.Fragment>
        <div className="col-md-6">
          <Card body>
            <CardTitle>Code {space.code}</CardTitle>
            <CardText>
              Owner: {this.props.owner.name} {this.props.owner.lastName}  
            </CardText>
            <CardText>
              email: {this.props.owner.email}
            </CardText>
            <CardText>
              Available: {space.available ? "Yes" : "No"}
            </CardText>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    owner: state.oneUser.user,
    isLoading: state.oneUser.isLoading,
    error: state.oneUser.error
  };
};

const mapDispatchToProps = {
  getOneUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingInfo);
