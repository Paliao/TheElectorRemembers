import { combineReducers } from 'redux'

import PoliticianReducer from '../politician/politicianReducer'

const rootReducer = combineReducers({
  politician: PoliticianReducer
})

export default rootReducer