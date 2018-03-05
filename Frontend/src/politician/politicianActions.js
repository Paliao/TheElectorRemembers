import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/politicians'

export function getList(page) {
  return dispatch => {
    axios.get(`${BASE_URL}?limit=40&skip=${page * 40}&sort=electoralName`).then(
      resp => {
        dispatch({
          type: 'POLITICIAN_LIST_FETCHED',
          payload: resp.data
        })
      }
    )
  }
}

export function filterPoltician(parameter, page) {
  return dispatch => {
    axios.get(`${BASE_URL}?${parameter}&limit=40&skip=${page * 40}`).then(
      resp => {
        dispatch({
          type: 'POLITICIAN_LIST_FETCHED',          
          payload: resp.data
        })
      }
    )
  }
}