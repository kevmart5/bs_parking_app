import * as a from "../../actions/types";

const INITIAL_STATE = {
  spaces: [],
  isLoading: false,
  error: ""
};

function spacesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SPACES_GETALL_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case a.SPACES_GETALL_SUCCESS:
      return {
        ...state,
        spaces: action.payload,
        isLoading: false
      };

    case a.USERS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
      
    default:
      return state;
  }
}

export default spacesReducer;
