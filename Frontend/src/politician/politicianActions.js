import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/politicians'

export function getList(page) {
  return dispatch => {
    axios.get(`${BASE_URL}?limit=12&skip=${page * 12}`).then(
      resp => {
        dispatch({
          type: 'POLITICIAN_LIST_FETCHED',
          payload: resp.data
        })
      }
    )
  }
}