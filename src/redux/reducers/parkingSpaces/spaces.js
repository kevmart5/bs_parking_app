import * as a from "../../actions/types";

const INITIAL_STATE = {
  spaces: [],
  updateSpace: [],
  isLoading: false,
  error: "",
  reserveSpace: [],
  userSpaceReserve: [],
  reloadPage: false,
  releaseSpace: []
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
        isLoading: true,
        reloadPage: false
      }
    case a.SPACES_UPDATEONE_SUCCESS:
      return {
        ...state,
        updateSpace: action.payload,
        isLoading: false,
        reloadPage: true
      }
    case a.SPACES_UPDATEONE_FAILURE: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
        reloadPage: false
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

    case a.SPACES_RERSERVE_SPACE_USER_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case a.SPACES_RERSERVE_SPACE_USER_SUCCESS: 
      return {
        ...state,
        userSpaceReserve: action.payload,
        isLoading: false
      }
    case a.SPACES_RERSERVE_SPACE_USER_FAILURE: 
      return {
        ...state,
        error: action.error,
        isLoading: false
      }  

    case a.SPACES_RELEASE_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case a.SPACES_RELEASE_SUCCESS: 
      return {
        ...state,
        releaseSpace: action.payload,
        isLoading: false
      }
    case a.SPACES_RELEASE_FAILURE: 
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
