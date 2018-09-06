import React from "react";
import { connect } from "react-redux";
import getOneUser from "../../../redux/actionsCreators/getOneUser";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

import "./parking-info-styles.css";

class ParkingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialDate: [],
      finalDate: [],
      spaceOwner: {}
    };
  }

  async componentDidMount() {
    const initialDate = new Date(this.props.spaceInfo.space.initialDate);
    const finalDate = new Date(this.props.spaceInfo.space.finalDate);

    const iDate = {
      day: initialDate.getDay(),
      month: initialDate.getMonth(),
      year: initialDate.getFullYear()
    }
    this.setState({
      initialDate: iDate
    });
    this.setState({
      finalDate: finalDate.getFullYear()
    });
  }

  render() {
    const { spaceInfo } = this.props;

    if (spaceInfo === undefined) {
      return <p>Undefined</p>;
    } else {
      return (
        <React.Fragment>
          <div className="col-md-12">
            <Card body className="card__parking-info">
              <CardTitle>Space information </CardTitle>
              <div className="row">
                <div className="col-md-4">
                  <CardText>
                    <span className="card__info-titles">Code: </span> 
                    {spaceInfo.space.code}
                  </CardText>
                </div>
                <div className="col-md-4">
                  <CardText>
                    <span className="card__info-titles">Owner: </span> 
                    {spaceInfo.name} {spaceInfo.lastName}
                  </CardText>
                </div>
              </div>


              <div className="row">
                <div className="col-md-4">
                  <CardText>
                    <span className="card__info-titles">email: </span> 
                    {spaceInfo.email}
                  </CardText>
                </div>
                <div className="col-md-4">
                  <CardText>
                    <span className="card__info-titles">Available: </span> 
                    {spaceInfo.space.available ? "Yes" : "No"}
                  </CardText>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <CardText>
                    <span className="card__info-titles">From: </span>
                    {`${this.state.initialDate.day}-${this.state.initialDate.month}-${this.state.initialDate.year}`}
                  </CardText>
                </div>
                <div className="col-md-4">
                  <CardText>
                    <span className="card__info-titles">to: </span> 
                    {this.state.finalDate}
                  </CardText>
                </div>
              </div>
              <CardText className="card__parking-buttons">
                <button
                  type="button"
                  className="btn parking-info__button-primary"
                >
                  Reserve
                </button>

                <button
                  type="button"
                  className="btn parking-info__button-sharable"
                >
                  Share
                </button>
              </CardText>
            </Card>
          </div>
        </React.Fragment>
      );
    }
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
