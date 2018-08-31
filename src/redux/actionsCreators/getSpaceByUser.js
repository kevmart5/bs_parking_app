import * as a from '../actions/types'

const port = 5787;
const api = `http://localhost:${port}/spaces/user/`;

export default function getSpaceByUser (userId) {
  return async dispatch => {
    dispatch({
      type: a.SPACES_GETONE_REQUEST
    })

    try {
      const response = await fetch(`${api}${userId}`)
      const result = await response.json()
      dispatch({
        type: a.SPACES_GETONE_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: a.SPACES_GETONE_FAILURE,
        error: err
      })
    }
  }
}