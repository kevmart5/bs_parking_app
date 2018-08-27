import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import usersReducer from './users/users'

export default combineReducers({
  users: usersReducer,
  router: routerReducer,
  form: formReducer
})