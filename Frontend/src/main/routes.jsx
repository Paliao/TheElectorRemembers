import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

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