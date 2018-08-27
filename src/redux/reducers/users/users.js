import * as a from "../../actions/types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: ""
};

function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.USERS_GETALL_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case a.USERS_GETALL_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };

    case a.USERS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
      
    case a.USERS_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apiUrl: action.payload
      }
    default:
      return state;
  }
}

export default usersReducer;
