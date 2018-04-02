import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PoliticianList from './politicianList'
import PoliticianProfile from './politicianProfile'
import NavBar from '../../common/navBar/navBar'

export default props => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path='/politician' component={PoliticianList} />
      <Route exact path='/politician/profile/:profile_id' component={PoliticianProfile} />      
    </Switch>
  </div>
)