import React from 'react'

import '../src/main/dependencies'
import Navbar from './common/navBar/navBar'

export default props => (
  <div className='base'>
    <Navbar/>
    <div className='background'>
      {props.children}
    </div>
  </div>
)