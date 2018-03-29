import React from 'react'

import './home.css'
import HomeNavbar from '../../common/homeNavbar/homeNavbar'
import HomeText from './homeText'
import HomeButtons from './homeButtons'

export default props => (
  <header>
    <HomeNavbar />
    <div className='home-text-box'>
      <HomeText />
      <HomeButtons />
    </div>
  </header>
)