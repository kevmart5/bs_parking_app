import { connect } from 'react-redux';
import { getAllUsers, updateUserInfo } from '../../redux/actionsCreators/users';
import { getAllSpaces } from '../../redux/actionsCreators/spaces';
import ReserveSpaces from './reserveSpaces';

const mapStateToProps = (state, ownProps) => {
  return {
    owner: state.oneUser.user,
    isLoading: state.oneUser.isLoading,
    error: state.oneUser.error,
    spaces: state.spaces.spaces,
    isLoadingSpaces: state.spaces.isLoading,
    errorSpaces: state.spaces.error,
    users: state.users.users
  }
}

const mapDispatchToProps = {
  getAllSpaces,
  getAllUsers,
  updateUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ReserveSpaces);