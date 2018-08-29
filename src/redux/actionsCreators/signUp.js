import * as a from '../actions/types'
import axios from 'axios';

const port = 5787;
const api = `http://localhost:${port}/signUp`;

export default function userSignUp (userParams) {

  const url = api;
  return async dispatch => {
    dispatch({
      type: a.USERS_SIGNUP_REQUEST
    })

    try {
      axios.post(url, userParams)
      .then((val) => {
        dispatch({
          type: a.USERS_SIGNUP_SUCCESS,
          payload: val.data
        })
      })
    } catch (err) {
      dispatch({
        type: a.USERS_SIGNUP_FAILURE,
        error: err
      })
    }
  }
} 