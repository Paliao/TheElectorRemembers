import axios from 'axios'
import queryString from 'query-string'

const BASE_URL = 'http://localhost:3000/api/politicians'

export function getList(filter='', filterValue='', page='0') {
  return dispatch => {
    const query = queryAssembler(filter, filterValue, page)

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

export function filterUf(value, page='0') {
  return [
    getList('electoralUf', value, page),
    setParameter('electoralUf', value)
  ]
}

export function filterParty(value, page='0') {
  return [
    getList('politicalPartyInitials', value, page),
    setParameter('politicalPartyInitials', value)
  ]
}

function queryAssembler(filter, filterValue, page) {
  return queryString.stringify({
    [filter]: filterValue,
    limit: 30,
    skip: page * 30,
    sort: 'electoralName'
  })
}
