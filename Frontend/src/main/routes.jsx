import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'
import PoliticianList from '../politician/politicianList'

export default props => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={PoliticianList} />
        <Redirect from='*' to='/' />
      </Switch>
    </App>
  </BrowserRouter>
)