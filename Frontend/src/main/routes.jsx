import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../components/home/home'
import PoliticianList from '../components/politician/politicianList'
import PoliticianProfile from '../components/profile/politicianProfile'

export default props => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/politicianList' component={PoliticianList} />
          <Route exact path='/profile/:profile_id' component={PoliticianProfile} />        
          <Redirect from='*' to='/' />
        </Switch>
      </App>
    </BrowserRouter>
  )
}