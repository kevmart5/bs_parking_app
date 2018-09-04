import React from "react";
import { connect } from "react-redux";
import getOneUser from "../../../redux/actionsCreators/getOneUser";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

import './parking-info-styles.css';

class ParkingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialDate: '',
      finalDate: ''
    }
  }

  async componentDidMount() {
    const owner = this.props.space.owner;
    if (owner !== undefined) {
      const result = await this.props.getOneUser(owner);
    }

    const initialDate = new Date(this.props.space.initialDate);
    const finalDate = new Date(this.props.space.finalDate);
    this.setState({initialDate: `${initialDate.getDay()}/${initialDate.getMonth()}/${initialDate.getFullYear()}`})
    this.setState({finalDate: `${finalDate.getDay()}/${finalDate.getMonth()}/${finalDate.getFullYear()}`})
  }

  render() {
    const { space } = this.props;
    return (
      <React.Fragment>
        <div className="col-md-12">
          <Card body className="card__parking-info">
            <CardTitle>Parking space code {space.code}</CardTitle>
            <CardText>
              Owner: {this.props.owner.name} {this.props.owner.lastName}  
            </CardText>
            <CardText>
              email: {this.props.owner.email}
            </CardText>
            <CardText>
              Available: {space.available ? "Yes" : "No"}
            </CardText>
            <CardText>
              From (initial date): {this.state.initialDate} 
            </CardText>
            <CardText>
              to (final date): {this.state.finalDate}
            </CardText>
            <CardText>
              <button type="button" className="btn parking-info__button-primary">
                Reserve
              </button>

              <button type="button" className="btn parking-info__button-sharable">
                Share
              </button>
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
