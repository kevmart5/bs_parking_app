import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Space from '../spaceInformation/';
import User from '../userInformation/';

class ParkingSpaces extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: [],
      selectedSpace: {},
      selectedUser: {}
    }
  }

  async componentDidMount () {
    const allSpaces = await this.props.spaces;
    this.setState({spaces: allSpaces});
  }

  saveParkingSpace = () => {
    const usr = this.state.selectedUser;
    usr.space = this.state.selectedSpace;
    console.log('user', usr);
    this.props.updateUser(usr);
  }

  selectedSpace = (s) => {
    const spaceSelected = this.props.spaces.filter( space => {
      return space._id === s.target.value
    })
    this.setState({selectedSpace: spaceSelected[0]});
  }

  selectedUser = (e) => {
    const userSelected = this.props.users.filter(user => {
      return user._id === e.target.value
    })
    this.setState({selectedUser: userSelected[0]});
  }

  render () {
    console.log('propis', this.props);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <h1>Manage users and parking spaces</h1>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                      <Label for="exampleSelect">Select parking space code</Label>
                      <Input 
                        type="select" 
                        name="select" 
                        id="exampleSelect"
                        onChange={this.selectedSpace}>
                        <option value="0">space</option>
                        {
                          this.props.spaces.map((s,i) => (
                            <option key={i} value={s._id}>{s.code}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {
                    Object.keys(this.state.selectedSpace).length === 0 ? '' : (
                      <Space space={this.state.selectedSpace}/>
                    )
                  }
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
                        onChange={this.selectedUser}>
                        <option value="0">user</option>
                        {
                          this.props.users.map((u,i) => (
                            <option key={i} value={u._id}>{u.name} {u.lastName}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-12">
                  {
                    Object.keys(this.state.selectedUser).length === 0 ? '' : (
                      <User user={this.state.selectedUser}/>
                    )
                  }
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <button type="button" className="btn btn-primary" onClick={this.saveParkingSpace}>
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ParkingSpaces;