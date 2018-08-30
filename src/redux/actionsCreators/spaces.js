import * as a from '../actions/types'

const port = 5787;
const api = `http://localhost:${port}/spaces`;

export default function getAllSpaces () {
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