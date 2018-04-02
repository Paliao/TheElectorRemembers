import React from 'react'

import './main/depencendencies'
import Navbar from './common/navBar/navBar'

export default props => (
  <div className='base'>
    <Navbar />
    <div>
      {props.children}
    </div>
  </div>
)