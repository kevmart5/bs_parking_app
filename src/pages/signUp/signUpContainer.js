import React from "react";
import { connect } from 'react-redux'
import getAllUsers from '../../redux/actionsCreators/users';
import userSignUp from '../../redux/actionsCreators/signUp';
import SignUp from './signUp';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
    newUser: state.users.newSignUp
  }
}

const mapDispatchToProps = {
  getAllUsers,
  userSignUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);