import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import usersReducer from './users/users'
import spacesReducer from './parkingSpaces/spaces';
import oneUserReducer from './users/oneUser';

export default combineReducers({
  users: usersReducer,
  spaces: spacesReducer,
  router: routerReducer,
  oneUser: oneUserReducer,
  form: formReducer
})