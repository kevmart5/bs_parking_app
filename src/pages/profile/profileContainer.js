import React from "react";
import { connect } from 'react-redux';
import getOneUser from '../../redux/actionsCreators/getOneUser';
import Profile from './profile.js';

const mapStateToProps = (state, ownProps) => {
  return {
    owner: state.oneUser.user,
    isLoading: state.oneUser.isLoading,
    error: state.oneUser.error
  }
}

const mapDispatchToProps = {
  getOneUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);