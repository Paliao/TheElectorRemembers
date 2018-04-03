const INITIAL_STATE = {
  list: [],
  filters: {},
  pageQuantity: 1
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'POLITICIAN_LIST_FETCHED':
      return { ...state, list: action.payload }
    case 'POLITICIAN_FILTER_ADDED':
      return {...state, filters: {...state.filters, [action.payload.filter]: action.payload.value} }
    default:
      return state
  }
}