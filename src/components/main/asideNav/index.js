import React from 'react';
import { Redirect } from "react-router";
import { connect } from "react-redux";
import getSpaceByUser from '../../../redux/actionsCreators/getSpaceByUser';
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

  submit = (values, e) => {
    e.preventDefault();
    console.log(values);
  }

  initialDayClick(day) {
    console.log('initial day', day);
    this.setState({ initialDay: day });
  }

  finalDayClick(day) {
    console.log('final day', day);
    this.setState({ finalDay: day });
  }

  async componentDidMount() {
    const userInfo = await JSON.parse(localStorage.getItem("user"));
    this.props.getSpaceByUser(userInfo.id);
  }

  render () {
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
                  spaceCode={this.props.space.code}
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

const mapStateToProps = state => {
  return {
    isLoading: state.oneSpace.isLoading,
    error: state.oneSpace.error,
    space: state.oneSpace.space
  };
};

const mapDispatchToProps = {
  getSpaceByUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideNavigation);