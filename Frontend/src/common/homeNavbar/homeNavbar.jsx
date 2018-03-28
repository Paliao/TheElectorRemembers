import React from 'react'

import './homeNavbar.css'
import NavItem from '../navBar/navBarItem'

export default props => (
  <nav>
    <div className='row'>
      <ul className='home-nav'>
        <NavItem path='#' label='Quem somos nós?'/>
        <NavItem path='#' label='Como ajudar?'/>
        <NavItem path='#' label='Entre em contato'/>
      </ul>
    </div>
  </nav>
)