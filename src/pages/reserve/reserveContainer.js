import React from "react";
import { connect } from 'react-redux';
import { getAllUsers, updateUserInfo } from '../../redux/actionsCreators/users'
import { getAllSpaces } from '../../redux/actionsCreators/spaces'
import Reserve from './reserve.js';

const mapStateToProps = (state, ownProps) => {
  return {
    owner: state.oneUser.user,
    isLoading: state.oneUser.isLoading,
    error: state.oneUser.error,
    spaces: state.spaces.spaces,
    isLoadingSpaces: state.spaces.isLoading,
    errorSpaces: state.spaces.error,
    users: state.users.users,
    updatedUser: state.users.updatedUser
  }
}

const mapDispatchToProps = {
  getAllSpaces,
  getAllUsers,
  updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve);