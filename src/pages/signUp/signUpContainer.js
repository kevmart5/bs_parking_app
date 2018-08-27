import React from "react";
import { connect } from 'react-redux'
import getAllUsers from '../../redux/actionsCreators/users';
import SignUp from './signUp';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error
  }
}

const mapDispatchToProps = {
  getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);