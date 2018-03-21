import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/politicians'

export function getList(page='0', parameters='') {
  return dispatch => {
    axios.get(`${BASE_URL}?${parameters}&limit=40&skip=${page * 40}&sort=electoralName`).then(
      resp => {
        dispatch({
          type: 'POLITICIAN_LIST_FETCHED',
          payload: resp.data
        })
      }
    )
  }
}

export function filterUf(parameter, page='0') {
  return getList(page, `electoralUf=${parameter}`)
}

export function filterParty(parameter, page='0') {
  return getList(page, `politicalPartyInitials=${parameter}`)
}