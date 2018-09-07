import * as a from "../../actions/types";

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: "",
  login: [],
  newSignUp: [],
  updatedUser: []
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
        login: action.payload,
        error: false,
        isLoading: false
      };
    case a.USERS_LOGIN_FAILURE:
      return {
        ...state, 
        error: action.error,
        isLoading: false
      }

    case a.USERS_SIGNUP_SUCCESS:
      return {
        ...state,
        newSignUp: action.payload,
        error: false,
        isLoading: false
      };

    case a.USERS_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case a.USERS_UPDATE_SUCCESS:
      return {
        ...state,
        updatedUser: action.payload,
        error: false,
        isLoading: false
      }
    case a.USERS_UPDATE_FAILURE: 
      return {
        ...state, 
        error: action.error,
        isLoading: false
      }
      
    default:
      return state;
  }
}

export default usersReducer;
