import * as a from '../actions/types'
const API = 'http://localhost:1701/users';
export default function getAllUsers () {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.USERS_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API)
      const result = await response.json()
      console.log('result', result);
      dispatch({
        type: a.USERS_GETALL_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: a.USERS_GETALL_FAILURE,
        error: err
      })
    }
  }
}

export function userLogin () {
  const url = 'http://localhost:1701/login';
  return async dispatch => {
    dispatch({
      type: a.USERS_LOGIN_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(url)
      const result = await response.json()
      console.log('result', result);
      dispatch({
        type: a.USERS_LOGIN_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: a.USERS_LOGIN_FAILURE,
        error: err
      })
    }
  }
} 