import { combineReducers } from 'redux'

import PoliticianReducer from '../components/politician/politicianReducer'
import ProfileReducer from '../components/profile/profileReducer'

const rootReducer = combineReducers({
  politician: PoliticianReducer,
  profile: ProfileReducer
})

export default rootReducer