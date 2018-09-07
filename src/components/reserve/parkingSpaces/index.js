import React from "react";
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { updateUserInfo } from '../../../redux/actionsCreators/users';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Space from "../spaceInformation/";
import User from "../userInformation/";

class ParkingSpaces extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: [],
      selectedSpace: {},
      selectedUser: {},
      successAction: false,
      errorAction: false
    };
  }

  async componentDidMount() {
    const allSpaces = await this.props.spaces;
    this.setState({ spaces: allSpaces });
  }

  async componentDidUpdate(prevProps) {
    if(this.props.updatedUser !== prevProps.updatedUser){
      if(this.props.updatedUser._id !== undefined) {
        await this.setState({
          successAction: true,
          errorAction: false
        })
      }else{
        await this.setState({
          successAction: false,
          errorAction: true
        })
      }
    }
  }

  saveParkingSpace = () => {
    const usr = this.state.selectedUser;
    usr.space = this.state.selectedSpace;
    usr.space.available = !usr.space.available;
    console.log("user", usr);
    this.props.updateUserInfo(usr);
  };

  selectedSpace = s => {
    const spaceSelected = this.props.spaces.filter(space => {
      return space._id === s.target.value;
    });
    if(spaceSelected.length !== 0) {
      this.setState({ selectedSpace: spaceSelected[0] });
    }else {
      this.setState({ selectedSpace: {} });
    }
  };

  selectedUser = e => {
    const userSelected = this.props.users.filter(user => {
      return user._id === e.target.value;
    });
    if(userSelected.length !== 0) {
      this.setState({ selectedUser: userSelected[0] });
    }else{
      this.setState({ selectedUser: {} });
    }
  };

  render() {
    console.log('state', this.state.selectedSpace);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-8">
            <h1 className="assign-space__main-title">
              Manage users and parking spaces
            </h1>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="assign-space__parking-select">
                    <FormGroup>
                      <Label
                        for="exampleSelect"
                        className="parking-select__form-label"
                      >
                        Select parking space code
                      </Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        onChange={this.selectedSpace}
                      >
                        <option value={null}>space</option>
                        {this.props.spaces.map((s, i) => (
                          <option key={i} value={s._id}>
                            {s.code}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                    <Label for="exampleSelect1">Select one user</Label>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect1"
                      onChange={this.selectedUser}
                    >
                      <option value={null}>user</option>
                      {this.props.users.map((u, i) => (
                        <option key={i} value={u._id}>
                          {u.name} {u.lastName}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="assign-space__selection-details">
              <div className="row">
                <div className="col-md-12">
                  { this.state.selectedSpace === null ? '' : (
                    Object.keys(this.state.selectedSpace).length === 0 ? (
                      ""
                    ) : (
                      <Space space={this.state.selectedSpace} />
                    )
                  )
                      }
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {Object.keys(this.state.selectedUser).length === 0 ? (
                    ""
                  ) : (
                    <User user={this.state.selectedUser} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="assign-space__submit d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn assign-space__submit-button"
                    onClick={this.saveParkingSpace}
                    disabled={
                      Object.keys(this.state.selectedSpace).length === 0 ? true : false || 
                      Object.keys(this.state.selectedUser).length === 0 ? true : false
                    }
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          this.state.successAction ? (
            <div className="row">
              <div className="col-md-12">
                <Alert timeout={3000} color="success" className="assign-space__message-success">
                  Parking space assign correctly!
                </Alert>
              </div>
            </div>
          ) : ''
        }

        {
          this.state.errorAction ? (
              <div className="row">
                <div className="col-md-12">
                  <Alert color="danger" className="assign-space__message-success">
                    Couldn't assign the parking space to the user!
                  </Alert>
                </div>
              </div>
          ) : ''
        }

      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    updatedUser: state.users.updatedUser,
    error: state.users.error,
    isLoading: state.users.isLoading
  }
}

const mapDispatchToProps = {
  updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpaces);
