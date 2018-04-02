import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../components/home/home'
import Politician from '../components/politician/politician'

export default props => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/politician' component={Politician} />  
          <Redirect from='*' to='/' />
        </Switch>
      </App>
    </BrowserRouter>
  )
}