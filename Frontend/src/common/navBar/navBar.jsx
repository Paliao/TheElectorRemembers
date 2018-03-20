import React, { Component } from 'react'

import './navBar.css'
import NavBarItem from './navBarItem'

class Navbar extends Component {

  render() {
    return(
      <div className='navbar'>
        <ul>
        <li>
          <span>
            <i className='fa fa-globe' ></i>
          </span>
        </li>
          <NavBarItem path='javascript:;' label='Estados' />
          <NavBarItem path='javascript:;' label='Politicos' />
          <NavBarItem path='javascript:;' label='Votações' />
          <NavBarItem path='javascript:;' label='Ajude-nos' />
          <NavBarItem path='javascript:;' label='Mais sobre nós' />
        </ul>
      </div>
    )
  }
}

export default Navbar