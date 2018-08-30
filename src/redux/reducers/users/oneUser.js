import * as a from "../../actions/types";

const INITIAL_STATE = {
  user: [],
  isLoading: false,
  error: "",
};

function oneUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.USERS_GETONE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case a.USERS_GETONE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };

    case a.USERS_GETONE_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
      
    default:
      return state;
  }
}

export default oneUserReducer;