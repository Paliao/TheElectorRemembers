import axios from 'axios'
import queryString from 'query-string'

const BASE_URL = 'http://localhost:3000/api/politicians'

export function getList(page = 1, filter='', filterValue='') {
  return dispatch => {
    const query = queryAssembler(page, filter, filterValue)

    axios.get(`${BASE_URL}?${query}`).then(
      resp => {
        dispatch({
          type: 'POLITICIAN_LIST_FETCHED',
          payload: resp.data
        })
      }
    )
  }
}

function setParameter(filter, value) {
  return dispatch => {
    dispatch({
      type: 'POLITICIAN_FILTER_ADDED',
      payload: { filter, value }
    })
  }
}

export function filterUf(value, page=1) {
  return [
    getList('electoralUf', value, page),
    setParameter('electoralUf', value)
  ]
}

export function filterParty(value, page=1) {
  return [
    getList('politicalPartyInitials', value, page),
    setParameter('politicalPartyInitials', value)
  ]
}

function queryAssembler(page = 1, filter='', filterValue='') {
  return queryString.stringify({
    [filter]: filterValue,
    limit: 12 * page,
    sort: 'electoralName'
  })
}
