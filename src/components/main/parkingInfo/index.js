import React from "react";
import { connect } from "react-redux";
import getOneUser from "../../../redux/actionsCreators/getOneUser";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class ParkingInfo extends React.Component {
  constructor (props) {
    super(props);

  }

  async componentDidMount () {
    const owner = this.props.space.owner
    if(owner !== undefined) {
      const result = await this.props.getOneUser(owner);
    }
  }

  render () {
    const { space } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle>Code {space.code}</CardTitle>
              <CardText>
                
                <ul>
                  <li>Owner: {this.props.owner.name} {this.props.owner.lastName}</li>
                  <li>Owner email: {this.props.owner.email }</li>
                  <li>Available: {
                      space.available ? 'Yes' : 'No'
                    }
                  </li>
                </ul>
              </CardText>
            </Card>
          </Col>
        </Row>
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


