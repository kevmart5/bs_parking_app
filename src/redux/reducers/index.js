import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import usersReducer from './users/users'

export default combineReducers({
  users: usersReducer,
  router: routerReducer
})