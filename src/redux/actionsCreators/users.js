import * as a from '../actions/types'
import axios from 'axios';

const port = 5787;
const API = `http://localhost:${port}/users`;

export function getAllUsers () {
  return async dispatch => {
    dispatch({
      type: a.USERS_GETALL_REQUEST
    })

    try {
      const response = await fetch(API)
      const result = await response.json()
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

export function updateUserInfo (userInfo) {
  return async dispatch => {
    dispatch({
      type: a.USERS_UPDATE_REQUEST
    })

    try {
      axios.put(API, userInfo)
      .then((val) => {
        console.log('updated', val);
        dispatch({
          type: a.USERS_UPDATE_SUCCESS,
          payload: val.data
        })
      }).catch(err => {
        dispatch({
          type: a.USERS_UPDATE_FAILURE,
          error: err
        })
      })
    } catch (err) {
      dispatch({
        type: a.USERS_UPDATE_FAILURE,
        error: err
      })
    }
  }
}
