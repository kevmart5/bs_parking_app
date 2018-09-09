import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/actionsCreators/users';
import { getAllSpaces } from '../../redux/actionsCreators/spaces';
import userLogin from '../../redux/actionsCreators/login'
import Main from './main';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
    spaces: state.spaces.spaces,
    spacesError: state.spaces.error,
    spacesLoading: state.spaces.isLoading,
    reload: state.spaces.reloadPage
  }
}

const mapDispatchToProps = {
  getAllUsers,
  userLogin,
  getAllSpaces
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);