import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/actionsCreators/users';
import userLogin  from '../../redux/actionsCreators/login'
import Login from './login';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
    login: state.users.login
  }
}

const mapDispatchToProps = {
  getAllUsers,
  userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);