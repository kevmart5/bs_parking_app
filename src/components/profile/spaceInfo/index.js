import React from "react";

class SpaceInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      spaces: {}
    };
  }

  render() {
    if (this.props.isLoadingSpaces) {
      return <p>Loading...</p>;
    } else {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-12">
              <h6>Parking space information</h6>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Space code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="SpaceCode"
                    value={this.props.space.code || ''}
                    disabled={true}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    This is the number of the parking space.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Parking space available</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.props.space.available ? 'Yes' : 'No'}
                    disabled={true}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    If you're using the parking space, available should be mark as No.
                  </small>
                </div>
                {
                  /*
                  
                    <button type="submit" className="btn btn-primary">
                      Submit
                     </button>
                  */
                }
              </form>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default SpaceInfo;
