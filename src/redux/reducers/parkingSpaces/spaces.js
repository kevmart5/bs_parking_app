import * as a from "../../actions/types";

const INITIAL_STATE = {
  spaces: [],
  updateSpace: [],
  isLoading: false,
  error: "",
  reserveSpace: []
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
    case a.SPACES_UPDATEONE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case a.SPACES_UPDATEONE_SUCCESS:
      return {
        ...state,
        updateSpace: action.payload,
        isLoading: false
      }
    case a.SPACES_UPDATEONE_FAILURE: {
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    }
    case a.SPACES_RESERVE_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case a.SPACES_RESERVE_SUCCESS: 
      return {
        ...state,
        reserveSpace: action.payload,
        isLoading: false
      }
    case a.SPACES_RESERVE_FAILURE: 
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
      
    default:
      return state;
  }
}

export default spacesReducer;
