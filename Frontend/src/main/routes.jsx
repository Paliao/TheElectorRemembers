import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'
import PoliticianList from '../components/politician/politicianList'
import PoliticianProfile from '../components/profile/politicianProfile'

export default props => {
  const { profile_id } = props
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/' component={PoliticianList} />
          <Route path={`/profile/${profile_id}`} component={PoliticianProfile} />        
          <Redirect from='*' to='/' />
        </Switch>
      </App>
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({ profile_id: state.profile.profile_id })