import * as a from '../actions/types'
import axios from 'axios';

const port = 5787;
const api = `http://localhost:${port}/login`;

export default function userLogin (userParams) {

  const url = api;
  return async dispatch => {
    dispatch({
      type: a.USERS_LOGIN_REQUEST
    })

    try {
      axios.post(url, userParams)
      .then((val) => {
        dispatch({
          type: a.USERS_LOGIN_SUCCESS,
          payload: val.data
        })
      }).catch ((err) => {
        dispatch({
          type: a.USERS_LOGIN_FAILURE,
          error: err
        })
      })
    } catch (err) {
      dispatch({
        type: a.USERS_LOGIN_FAILURE,
        error: err
      })
    }
  }
} 