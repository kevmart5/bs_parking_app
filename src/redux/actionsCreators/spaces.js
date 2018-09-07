import * as a from '../actions/types';
import axios from 'axios';

const port = 5787;
const api = `http://localhost:${port}/spaces`;
const spaceUpdateUrl = `http://localhost:${port}/users/space`;
const reserveSpaceUrl = `http://localhost:${port}/spaces/reserve`;

export function getAllSpaces () {
  return async dispatch => {
    dispatch({
      type: a.SPACES_GETALL_REQUEST
    })

    try {
      const response = await fetch(api)
      const result = await response.json()
      dispatch({
        type: a.SPACES_GETALL_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: a.SPACES_GETALL_FAILURE,
        error: err
      })
    }
  }
}

export function updateSpace (spaceData) {
  return async dispatch => {
    dispatch({
      type: a.SPACES_UPDATEONE_REQUEST
    })

    try {
      axios.put(spaceUpdateUrl, spaceData)
      .then((val) => {
        dispatch({
          type: a.SPACES_UPDATEONE_SUCCESS,
          payload: val.data
        })
      }).catch(err => {
        console.log(err);
      })
    } catch (err) {
      dispatch({
        type: a.SPACES_UPDATEONE_FAILURE,
        error: err
      })
    }
  }
}

export function reserveSpace (reserveRequest) {
  return async dispatch => {
    dispatch({
      type: a.SPACES_RESERVE_REQUEST
    })

    try {
      axios.put(reserveSpaceUrl, reserveRequest)
      .then((val) => {
        dispatch({
          type: a.SPACES_RESERVE_SUCCESS,
          payload: val.data
        })
      }).catch(err => {
        dispatch({
          type: a.SPACES_RESERVE_FAILURE,
          error: err
        })
      })
    } catch (err) {
      dispatch({
        type: a.SPACES_RESERVE_FAILURE,
        error: err
      })
    }
  }
}