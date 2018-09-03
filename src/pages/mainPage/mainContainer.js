import React from "react";
import { connect } from 'react-redux'
import getAllUsers from '../../redux/actionsCreators/users';
import gt from '../../redux/actionsCreators/getSpaceByUser';
import userLogin from '../../redux/actionsCreators/users'
import Main from './main';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error
  }
}

const mapDispatchToProps = {
  getAllUsers,
  userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);