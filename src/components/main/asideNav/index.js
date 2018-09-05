import React from 'react';
import { Redirect } from "react-router";
import { connect } from "react-redux";
import getSpaceByUser from '../../../redux/actionsCreators/getSpaceByUser';
import { getAllSpaces, updateSpace } from '../../../redux/actionsCreators/spaces';
import getOneUser from '../../../redux/actionsCreators/getOneUser';
import SpaceForm from '../spaceForm/';
import './aside-styles.css';

class AsideNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialDay: undefined,
      finalDay: undefined
    }

    this.initialDayClick = this.initialDayClick.bind(this);
    this.finalDayClick = this.finalDayClick.bind(this);
  }

  submit = () => {
    const initDate = sessionStorage.getItem('Initial date');
    const finalDate = sessionStorage.getItem('Final date');

    const spaceData = {
      _id: this.props.space._id,
      code: this.props.space.code,
      initialDate: JSON.parse(initDate),
      finalDate: JSON.parse(finalDate),
      available: !this.props.space.available
    }
    console.log(spaceData);
    this.props.updateSpace(spaceData);
  }

  initialDayClick(day) {
    this.setState({ initialDay: day });
  }

  finalDayClick(day) {
    this.setState({ finalDay: day });
  }

  async componentDidMount() {
    const userInfo = await JSON.parse(localStorage.getItem("user"));
    this.props.getOneUser(userInfo.id);
  }

  render () {
    console.log('user', this.props)
    if(this.props.oneUser.space === undefined){
      return (
        <React.Fragment>
          <div className="col-md-3">
            <div className="aside__parking-container">
              <p>You don't have a parking space</p>
              <p>Do you want to see availble spaces?</p>
              <button type="button" className="btn btn-primary">
                See spaces
              </button>
            </div>
          </div>
        </React.Fragment>
      )
    }else {
      return (
        <React.Fragment>  
          <div className="col-md-3">
            <div className="aside__parking-container">
              <h5 className="aside__title">Parking space info</h5>
              <div className="row">
                <div className="col-12">
                  <label>Set free my space</label>
                  <SpaceForm 
                    handleSubmit={this.submit} 
                    spaceCode={this.props.oneUser.space.code}
                    initialDayClick={this.initialDayClick}
                    finalDayClick={this.finalDayClick}
                    initialDate={this.state.initialDay}
                    finalDate={this.state.finalDay}/>
                </div>
              </div>
  
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.oneSpace.isLoading,
    error: state.oneSpace.error,
    space: state.oneSpace.space,
    updateSpace: state.spaces.updateSpace,
    oneUser: state.oneUser.user
  };
};

const mapDispatchToProps = {
  getSpaceByUser,
  getAllSpaces,
  updateSpace,
  getOneUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideNavigation);