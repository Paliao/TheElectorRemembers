import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/politicians'

export function getList(page) {
  return dispatch => {
    axios.get(`${BASE_URL}?limit=20&skip=${page * 20}`).then(
      resp => {
        dispatch({
          type: 'POLITICIAN_LIST_FETCHED',
          payload: resp.data
        })
      }
    )
  }
}