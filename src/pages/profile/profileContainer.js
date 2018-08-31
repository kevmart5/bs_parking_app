import React from "react";
import { connect } from 'react-redux';
import getOneUser from '../../redux/actionsCreators/getOneUser';
import getAllSpaces from '../../redux/actionsCreators/spaces'
import Profile from './profile.js';

const mapStateToProps = (state, ownProps) => {
  return {
    owner: state.oneUser.user,
    isLoading: state.oneUser.isLoading,
    error: state.oneUser.error,
    spaces: state.spaces.spaces,
    isLoadingSpaces: state.spaces.isLoading,
    errorSpaces: state.spaces.error
  }
}

const mapDispatchToProps = {
  getOneUser,
  getAllSpaces
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);