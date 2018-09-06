import React from "react";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";


class SpaceDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.goBack = this.goBack.bind(this);
  }

  goBack () {
    return <Redirect to={'/home'} />
  }

  reserve = () =>{
    console.log('Space reserved');
  }

  render() {
    const { spaceInfo } = this.props;
    console.log("propis", this.props);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="reserve__space-info">
                <h4>Parking space details</h4>
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      You're about to reserve this space. Below you can find the
                      space information and the owner email
                    </p>
                    <p>When you're ready, just click the button Reserve</p>
                  </div>
                </div>
                <div className="reserve__space-details">
                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        Code:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.space.code}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        Available:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.space.available ? "Yes" : "No"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <p>
                        Owner:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.name} {spaceInfo.lastName}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p>
                        Email:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.email}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        This are the dates availables for this parking space
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Initial date:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.space.initialDate}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p>
                        Final date:{" "}
                        <span className="reserve__space-highlight">
                          {spaceInfo.space.finalDate}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reserve__buttons-section">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-end reserve__buttons">
                        <button className="btn reserve__btn-confirm" onClick={this.reserve}>
                          Reserve this space
                        </button>
                        <Link className="btn reserve__button-goBack" to={'/home'}>
                          Go back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SpaceDetails;
