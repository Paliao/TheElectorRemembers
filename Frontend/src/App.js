import React, { Component } from 'react'

import '../node_modules/font-awesome/css/font-awesome.min.css'
import PoliticianList from '../src/politician/politicianList'
import Navbar from './common/navBar/navBar'

class App extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <PoliticianList />
      </div>
    )
  }
}

export default App
