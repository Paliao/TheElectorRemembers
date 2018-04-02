import React from 'react'

import './navBar.css'
import NavBarItem from './navBarItem'
import SearchIcon from '../../common/search/searchIcon'

export default navbar => (
  <nav>
    <ul className='main-nav'>
      <NavBarItem path='javascript:;' label='Estados' />
      <NavBarItem path='/politician' label='Politicos' />
      <NavBarItem path='javascript:;' label='Quiz' />
      <NavBarItem path='javascript:;' label='Recordistas' />
      <NavBarItem path='javascript:;' label='FAQ' />
      <SearchIcon />
    </ul>
  </nav>
)
