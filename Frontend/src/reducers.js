import { combineReducers } from 'redux'

import PoliticianReducer from '../src/politician/politicianReducer'

const rootReducer = combineReducers({
  politician: PoliticianReducer
})

export default rootReducer