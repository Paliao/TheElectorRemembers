import React from 'react'

import '../node_modules/font-awesome/css/font-awesome.min.css'
import PoliticianList from '../src/politician/politicianList'
import Navbar from './common/navBar/navBar'

export default props => (
  <div>
    <Navbar/>
    <div className='background'>
      {props.children}
    </div>
  </div>
)