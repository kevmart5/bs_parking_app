import * as a from "../../actions/types";

const INITIAL_STATE = {
  space: [],
  isLoading: false,
  error: ""
};

function oneSpaceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SPACES_GETONE_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case a.SPACES_GETONE_SUCCESS:
      return {
        ...state,
        space: action.payload,
        isLoading: false
      };

    case a.SPACES_GETONE_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
      
    default:
      return state;
  }
}

export default oneSpaceReducer;
